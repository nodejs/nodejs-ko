import { josa, 을, 로 } from 'hangul-josa';

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
    /\* [Uu]pgrade ([\w-]+) to v?(\d[\d\.]*)/,
    (_, name, ver) => josa`* ${name}의 버전을 ${ver}${로} 업그레이드했습니다.`
  ],
  // upgrade to new version
  [
    /\* [Uu]pgrade to ([\w-]+ v?\d[\d\.]*)/,
    '* $1 버전으로 업그레이드했습니다.'
  ],
  // new collaborator
  [
    /add (@?\w+) to collaborators/,
    (_, name) => josa`${name}${을} 협력자로 추가했습니다.`
  ],
];

export function translate(key) {
  if (simpleDict[key]) {
    return simpleDict[key];
  }

  let content = key;
  for (let i=0; i < patterns.length; i++) {
    if (patterns[i][0].test(content)) {
      content = content.replace(patterns[i][0], patterns[i][1]);
    }
  }

	return content;
}

export const __ = translate;
