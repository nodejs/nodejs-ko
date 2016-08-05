---
layout: post
category: articles
title: io.js의 상태
author: mikeal
ref: State of io.js
refurl: https://medium.com/node-js-javascript/state-of-io-js-2b3094e6f923
translator:
  - <a href="https://github.com/marocchino" target="_blank">Shim Won</a>
---
기억하는 한 가장 성공적인 오픈 소스 주도 활동

io.js의 발표 후 몇 달 동안 많은 일이 있었습니다. 야심에 찬 출시는 **Fedor의 생일**인
1월 13일로 결정했습니다. 놀랄만큼 많은 사람들이 열심히 노력해 준 끝에 출시일을 맞출
수 있었습니다. ☺

덧붙여 최초의 릴리스 외에도 4번의 패치 릴리스가 있었고 이는 **40만 번이 넘는**
다운로드를 기록했습니다.

우리는 누구도 예상치 못한 기여를 받고 있습니다. 프로젝트 발표 후,
뛰어난 활약을 해준 [**Chris Dickinson**](https://github.com/chrisdickinson)과
[**Colin Ihrig**](https://github.com/cjihrig)을

[TC](https://github.com/nodejs/node/blob/v1.x/GOVERNANCE.md#iojs-project-governance)
(프로젝트 의사결정 기구)에 추가했습니다. [**Domenic
Denicola**](https://github.com/domenic)도 (저나 [Rod
Vagg](https://github.com/rvagg)처럼) 투표권이 없는 참가자로 TC 회의에
초대되었습니다. 이는 **TC39**와 [**v8**과의 협력](https://twitter.com/rvagg/status/558378711624343552)의
길을 열었습니다.

node.js™ 역사상 활발한 커미터가 8명 이상 있었던 적은 없습니다. 지난주 **Chris
Dickinson**는 또 다른 라운드로 이끌어 줄 [**새로운 커미터
8명**](https://github.com/nodejs/node/issues/234#issuecomment-71097752)을
io.js에 올렸습니다.

io.js에서 현재 사용 중인 V8은 **안정** 버전으로 표기될 예정이며 **3월 초**에
크롬에 포함될 것입니다. 그때부터는  v8 최신 안정 버전을 사용하는 안정된 채널과
v8 다음 개발 버전을 사용하는 불안정한 채널을 갖게 됩니다. 이 말은 **3월에는
안정 버전 io.js를 기대해도 된다**는 이야기입니다. 개발 버전은 [계속
유지](https://github.com/nodejs/node/pull/630)되며 io.js와 v8의 새 기능을
테스트하는데 사용될 것입니다.

코어 개발 외의 몇 가지 작업은 이미 프로젝트 팀과 커미터가 필요할 만큼
성장했습니다. 설립될 때 있었던 [**빌드**](https://github.com/nodejs/build)
그룹 말고도 이제는 [**웹사이트**](https://github.com/nodejs/website) 그룹과
[**스트림**](https://github.com/nodejs/readable-stream) 그룹이 있습니다. 우리는
앞으로 **전파, 문서화, 지역화, nan[^1], 로드맵**과 관련한 워킹 그룹도 만들어지기를
기대합니다. 이 그룹들이 만들어지면 커뮤니티에서 더 다양한 참여를 이끌어 낼 수 있을
것입니다.

io.js를 시작할 때만 해도 node.js에 공헌하는 사람이 없다는 것이 가장 큰
문제였습니다. 지금은 프로젝트 전반에 걸쳐 참여하고 유입되는 공헌자들을 따라잡는
것이 큰 문제가 되었습니다. io.js는 **현재**의 node.js™는 물론, **그 어느 때**의
node.js™보다 활발합니다. 그리고 이것은 시작에 불과합니다.

[^1]: https://github.com/rvagg/nan
