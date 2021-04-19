import { get } from 'https';
import { createWriteStream } from 'fs';
import { Transform } from 'stream';
import path from 'path';
import chalk from 'chalk';
import { parse } from '@textlint/markdown-to-ast';
import { __ } from './translate.mjs';

function main() {
  const [URL, DATE] = process.argv.slice(2);
  const POST_PATH = path.resolve('source', '_posts');

  if (!URL) {
    console.error(`🚨  번역할 nodejs.org의 블로그 글 URL이 필요합니다.`);
    printGuide();
    return;
  }

  const urlDelimiter = '/en/blog/';
  let urlPostfix = URL.split(urlDelimiter)[1];
  if (urlPostfix.endsWith('/')) {
    urlPostfix = urlPostfix.substr(0, urlPostfix.length - 1);
  }
  const rawURL = `https://raw.githubusercontent.com/nodejs/nodejs.org/master/locale${urlDelimiter}${urlPostfix}.md`;

  if (isWeeklyUpdate(rawURL) && !DATE) {
    console.error(`🚨  주간 뉴스 외에는 url 뒤에 발행 일자를 전달해야 합니다.`);
    printGuide();
    return;
  }
  
  const fileName = getFileName(rawURL, DATE);
  if (!fileName) {
    console.error(`🚨  지원하지 않는 형식의 URL입니다.`);
    printGuide();
    return;
  }

  if (!process.env.NODE_TRANSLATOR) {
    console.warn(`ℹ️  번역자의 사용자명이 설정되어 있지 않습니다. ${chalk.italic('NODE_TRANSLATOR')} 환경 변수의 값을 설정하세요.`);
    console.warn('e.g. NODE_TRANSLATOR=username npm run scaffold ...\n');
  }
  
  const filePath = `${POST_PATH}/${fileName}`;
  
  get(rawURL, resp => {
    resp
      .pipe(transformer(rawURL))
      .pipe(createWriteStream(filePath));

    console.log(`✅ 번역 파일이 생성되었습니다: ${filePath}`);
  });
}

main();

function printGuide() {
  console.error('자세한 내용은 https://nodejs.github.io/nodejs-ko/CONTRIBUTING.html 을 참고하세요.\n');
}

function isWeeklyUpdate(url) {
  return url.includes('weekly-updates');
}

function getFileName(url, date) {
  try {
    if (isWeeklyUpdate(url)) {
      return `${url.match(/\d{4}-\d{2}-\d{2}/)[0]}-weekly.md`;
    }
    return url.match(/blog\/.+\.md/)[0].replace(/\//g, '-').replace('blog', date);
  } catch(e) {
    return;
  }
}

function transformer(url) {
  let buffer = '';
  
  function transform(chunk, _, cb) {
    buffer += chunk.toString();
    cb();
  }
  
  function flush() {
    const ast = parse(buffer);
    const result = processAst(ast, url);
    this.push(result);
    buffer = '';
  }
  
  return new Transform({
    transform,
    flush,
  });
}

function processAst(ast, url) {
  let result = [];

  for(let i = 0; i < ast.children.length; i++) {
    const cur = ast.children[i];
    switch(cur.type) {
      case 'Yaml': // header
        result.push(processMetaInfo(cur, url));
        break;
      case 'Header':
      case 'Paragraph':
        const idx = findNextHeader(ast.children, i);
        const endIdx = idx > 0 ? idx : ast.children.length;
        const blocks = ast.children.slice(i, endIdx);
        result.push(processContent(blocks));
        i = endIdx - 1;
        break;
      default: // Do not translate unknown types
        result.push(cur.value || cur.raw);
        break;
    }
  }

  return result.join('\n\n');
}

function processMetaInfo(block, url) {
  const meta = parseMeta(block.value);
  const articlePath = (/blog\/(.+)\.md/.exec(url) || ['', ''])[1];
  return `
---
category: ${isWeeklyUpdate(url) ? 'weekly' : 'articles'}
title: ${translateTitle(meta.title)}
author: ${meta.author || ''}
ref: ${meta.title || ''}
refurl: https://nodejs.org/en/blog/${articlePath}
translator: ${process.env.NODE_TRANSLATOR || ''}
---
  `.trim();
}

function parseMeta(text) {
  const regex = /^([\w-]+):\s*(.+)$/gm;
  const infoSet = {};
  let match = null;

  while(match = regex.exec(text)) {
    infoSet[match[1]] = match[2];
  }
  
  return infoSet;
}

function translateTitle(title) {
  let match = null;

  // Node.js releases
  if (match = /^Node v(?<version>[\d\.]+) \((?<type>Current|LTS|Maintenance|Stable)\)$/.exec(title)) {
    const type = __(match.groups.type);
    return `Node v${match.groups.version}(${type})`;
  }
  
  // Security releases
  if (match = /^(?<date>[A-Za-z]+ \d+) Security Releases$/.exec(title)) {
    const date = new Date(`1 ${match.groups.date}`);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 보안 릴리스`;
  }
  
  return '';
}

function findNextHeader(blocks, from) {
  let i = from;

  while(++i < blocks.length) {
    if (blocks[i].type === 'Header') return i;
  }
  
  return -1;
}

function processContent(blocks) {
  const rawContent = blocks.map(b => b.raw).join('\n\n');

  if (blocks[0].type === 'Header') {
    const header = blocks[0].raw.trim();
    
    // Do not translate these blocks
    if (/\b[Cc]ommits|SHASUMS$/.test(header)) {
      return rawContent;
    }
    
    blocks[0].raw = header.replace(/^(#+)\s+(.+)$/, (_, symbols, text) => {
      return `${symbols} ${__(text)}`;
    });
  }
  
  return `
<!--
${rawContent}
-->
${blocks.map(b => __(b.raw)).join('\n\n')}
  `.trim();
}
