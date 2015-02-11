# io.js의 상태

- Authors: @mikeal
- Referer: https://medium.com/node-js-javascript/state-of-io-js-2b3094e6f923

===

이는 살면서 가장 성공적인 오픈 소스 주도 활동(initiative)입니다.

io.js의 발표 후 몇 달 동안 많은 일이 있었습니다. 야심에 찬 출시는 **Fedor의 생일**인
1월 13일로 결정했습니다. 놀라운 수의 사람들의 많은 노력 끝에, 타임 존의 낭비를
거의 없이 우리는 해냈습니다. ☺

덧붙여 최초의 릴리스 외에도 4번의 패치 릴리스가 있었고 이는 **40만 번이 넘는**
다운로드를 기록했습니다.

우리는 누구도 예상치 못한 기여를 받고 있습니다. 프로젝트의 발표 이후,
[TC](https://github.com/iojs/io.js/blob/v1.x/GOVERNANCE.md#iojs-project-governance)
(프로젝트의 의사결정 기구)에 두 사람([Chris Dickinson](https://github.com/chrisdickinson), [Colin
Ihrig](https://github.com/cjihrig))이 추가되어 뛰어난 일을 해주었습니다. [Domenic
Denicola](https://github.com/domenic)도 (나나 [Rod
Vagg](https://github.com/rvagg)처럼) 투표권이 없는 참가자로 TC 회의에
초대되었습니다. 이는 **TC39**와 [v8과의 협력](https://twitter.com/rvagg/status/558378711624343552)
의 길을 열었습니다.

node.js™의 역사상 8명 이상의 활발한 커미터가 있었던 적은 없습니다. 지난주 **Chris
Dickinson**는 또 다른 라운드로 이끌어 줄 [8명의 새로운 커미터](https://github.com/iojs/io.js/issues/234#issuecomment-71097752)를
io.js에 올렸습니다.

io.js의 현재 릴리스는 **안정** 버전으로 예정되어 있고 **3월 초**에 크롬에 릴리스될
v8로 릴리스 됩니다. 그때부터는 마지막 v8의 안정판을 사용하는 안정된 채널과 v8의 다음
개발 버전을 사용하는 불안정한 채널을 갖게 됩니다. 이 말은 **3월에는 안정 버전의
io.js를 기대해도 된다**는 이야기입니다. 불안정 버전은 io.js 와 v8의 새로운 기능을
[테스트하기 위해 계속](https://github.com/iojs/io.js/pull/630) 유지 됩니다.

코어 개발 외의 몇 가지 작업은 이미 프로젝트 팀과 커미터가 필요할 만큼
성장했습니다. 설립될 때 있었던 [빌드](https://github.com/iojs/build) 그룹말고도
이제는 [웹사이트](https://github.com/iojs/website) 그룹과 [스트림](https://github.com/iojs/readable-stream)
그룹이 있습니다. 우리는 워킹 그룹이 앞으로 **전파, 문서화, 지역화, nan[^1], 로드맵**을
형성하길 기대합니다. 이 그룹은 훨씬 광범위한 참여를 제공합니다.

io.js를 시작할 때 가장 중요한 문제는 node.js™ 기여자의 부재였습니다. 이제 io.js의
가장 큰 문제는 프로젝트의 다방면에서의 참여 유도와 계속 유입되는 기여자의
유지입니다. io.js는 node.js™의 **현재** 보다 활발할 뿐만 아니라, node.js™가
**그랬던 적 없이** 활발하고, 이것은 이제 시작일 뿐입니다.

[^1]: https://github.com/rvagg/nan
