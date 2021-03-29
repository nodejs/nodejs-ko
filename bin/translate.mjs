const simpleDict = {
  Current: '현재 버전',
  Maintenance: '유지보수 버전',
  Stable: '안정 버전',
  'Notable Changes': '주요 변경사항',
  'Notable changes': '주요 변경사항',
  Summary: '요약',
  Impact: '영향',
  'Downloads and release details': '다운로드와 릴리스 상세 내용',
  'Release timing': '릴리스 시기',
  'Contact and future updates': '연락처 및 향후 업데이트',
};

const patterns = [
  // upgrade x to y
  [
    /\b[Uu]pgrade ([\w-]+) to (v?\d[\d\.]*)/,
    (_, name, ver) => josa(`${name}의 버전을 ${ver}[[로]] 업그레이드했습니다.`)
  ],
  // upgrade to new version
  [
    /\b[Uu]pgrade to ([\w-]+ v?\d[\d\.]*)/,
    '$1 버전으로 업그레이드했습니다.'
  ],
  // new collaborator
  [
    /\b[Aa]dd (@?[\w ]+) to collaborators/,
    (_, name) => josa(`${name}[[을]] 협력자로 추가했습니다.`)
  ],
];

function josa(str) {
  const josas = '이,가,을,를,와,과,으로,로'.split(',');
  const getPP = (pp, hasFinal) => Math.floor(josas.indexOf(pp) / 2) * 2 + (hasFinal ? 0 : 1);

  return str.replace(/(?:([a-z]+)|([가-힣])|(\d))(\([^\)]+\))?\[\[(이|가|와|과|을|를|으?로)\]\]/gi, ($0, en, ko, num, paren, pp) => {
    if (num) return num + paren + getPP(pp, /[136780]/.test(num));  
    if (ko) return ko + paren + getPP(pp, (ko.charCodeAt(0) - 0xac00) % 28 > 0);

    // !Experimental - maybe need to improve
    if (en) return en + paren + getPP(pp, /(?:m|n|ck|ng|th|[^aeiouy]e|SSL)$/.test(en));

    return $0;
  });
}

export function translate(key) {
  if (simpleDict[key]) {
    return simpleDict[key];
  }

  return patterns.reduce((content, [pattern, replacer]) => {
    if (pattern.test(content)) {
      return content.replace(pattern, replacer);
    }
    return content;
  }, key);
}

export const __ = translate;
