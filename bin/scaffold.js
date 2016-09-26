const get = require('https').get;
const createWriteStream = require('fs').createWriteStream;
const chalk = require('chalk');
const replaceStream = require('replacestream');
const URL = process.argv[2];
const DATE = process.argv[3];
const POST_PATH = "./source/_posts/";

function TranslateScaffold(url, date) {
  this.url = url;
  this.date = date;

  this.isWeekly = this.url.indexOf("weekly-updates") > -1;

  this.fileName = (() => {
    try {
      if (this.isWeekly) {
        return `${this.url.match(/\d{4}-\d{2}-\d{2}/)[0]}-weekly.md`;
      } else {
        return this.url.match(/blog\/(.+)\.md/)[0].replace(/\//g, "-").replace("blog", this.date);
      }
    } catch(e) {
      console.error(`${chalk.red.bold('Error:')} 번역문서의 GitHub raw URL이 필요합니다.`);
      console.error("자세한 내용은 http://nodejs.github.io/nodejs-ko/CONTRIBUTING.html 을 참고하세요.");
      process.exit();
    }
  })();

  this.filePath = `${POST_PATH}${this.fileName}`;

  this.replaceText = (() => {
    if (this.isWeekly) {
      return replaceStream(/---\n((?:.+\n)+)---/m,
                           (_, head) => `---
category: weekly
title: Node.js 주간 뉴스 ${head.match(/date: (\d{4}-\d{2}-\d{2})/)[1].replace(/-0?/, "년 ").replace(/-0?/, "월 ")}일
author: ${(head.match(/author: (.+)/) || [ '', '' ])[1]}
ref: ${(head.match(/title: (.+)/) || [ '', '' ])[1]}
refurl: https://nodejs.org/en/blog/${(this.url.match(/blog\/(.+)\.md/) || [ '', '' ])[1]}
translator:
---`)
    } else {
      return replaceStream(/---\n((?:.+\n)+)---/m,
                           (_, head) => `---
category: articles
title:
author: ${(head.match(/author: (.+)/) || [ '', '' ])[1]}
ref: ${(head.match(/title: (.+)/) || [ '', '' ])[1]}
refurl: https://nodejs.org/en/blog/${(this.url.match(/blog\/(.+)\.md/) || [ '', '' ])[1]}
translator:
---`)
    }
  })();
}

if (!URL) {
  console.error(`${chalk.red.bold('Error:')} 번역문서의 GitHub raw URL이 필요합니다.`);
  console.error("자세한 내용은 http://nodejs.github.io/nodejs-ko/CONTRIBUTING.html 을 참고하세요.");
  return;
}

const scaffold = new TranslateScaffold(URL, DATE);

if (!scaffold.isWeekly && !DATE ) {
	console.error(`${chalk.red.bold('Error:')} 주간 뉴스 외에는 url 뒤에 발행 일자를 전달해야 합니다.\n예시: npm run URL YYYY-MM-DD`);
	return;
}

get(URL, function(response) {
  response
    .pipe(scaffold.replaceText)
    .pipe(createWriteStream(scaffold.filePath));
});
