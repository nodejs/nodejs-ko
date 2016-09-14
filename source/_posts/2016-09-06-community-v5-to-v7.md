---
category: articles
title: Node.js v5에 작별을 고하고 v7을 준비할 때입니다.
author: Rod Vagg
ref: Farewell to Node.js v5, Preparing for v7
refurl: https://nodejs.org/en/blog/community/v5-to-v7
translator:
- <a href="https://github.com/outsideris" target="_blank">Outsider</a>
---
<!--
You may have missed it but at the end of June, the Node.js project said a final farewell to version 5. There will be no more patches, critical or otherwise, for this branch. To those who have been using Node.js for some time this may seem anomalous, shouldn't major versions stick around for _years_?
-->
당신이 몰랐을 수도 있지만 6월 말 Node.js 프로젝트는 5 버전에 최종 작별을 고했습니다. 5버전에는
심각한 문제든 아니든 더는 패치를 하지 않을 것입니다. Node.js를 가끔 사용하는 사람들에게는 이상하게
보일 수도 있습니다. 주버전을 _수년 동안_ 유지하지 않는 것인가요?

<!--
## We have a plan!

![LTS Schedule Summary](/static/images/blog/201609_lts_schedule_summary.gif)

Last year, the core team devised a Long-term Support (LTS) and release plan to balance the various wants and needs expressed by Node.js users. Chief among those were:

1. Stability
2. Progress

The io.js diversion was useful for many reasons, including the opportunity we had to lean into this "progress" thing. We learned that there is a necessary trade-off between "stability" and the rapid iteration of the platform. Some of it was manageable but much was unavoidable. Breaking the entire C++ add-on ecosystem each time we upgraded V8 turned out to be quite painful for the Node.js package ecosystem. This is due to the heavy reliance on compiled native components in Node.js userland and the difficulty Node.js has had in maintaining [API](https://en.wikipedia.org/wiki/Application_programming_interface) and [ABI](https://en.wikipedia.org/wiki/Application_binary_interface) stability while upgrading V8.
-->
## 계획이 있습니다!

![LTS 일정 요약](https://nodejs.org/static/images/blog/201609_lts_schedule_summary.gif)

작년, 코어 팀은 Node.js 사용자가 원하는 다양한 요구사항을 맞출 수 있도록 장기지원(LTS)과 릴리스 일정을 추진했습니다. 이중 핵심은 다음과 같습니다.

1. 안정성
2. 발전은

io.js로 프로젝트가 갈라진 것은 "발전"하는 기회를 가지는 등 여러 이유로 유용했습니다. "안정성"과
플랫폼의 빠른 반복사이에 필수불가결한 타협점이 있음을 배웠습니다. 이 중 어떤 것은 관리 가능하지만
대부분은 피할 수 없는 것입니다. V8을 업그레이드할 때마다 전체 C++ 애드온 생태계의 호환성이 깨지는
문제는 Node.js 패키지 생태계에 큰 고통을 안겨주었습니다. 이는 Node.js 사용자 환경이 컴파일된
네이티브 컴포넌트에 크게 의존하고 있기 때문이고 V8을 업그레이드 하는 동안
[API](https://en.wikipedia.org/wiki/Application_programming_interface)와
[ABI](https://en.wikipedia.org/wiki/Application_binary_interface)의
안정성을 유지하기 어렵게 만들었습니다.

<!--
On the flip side, it was clear that v0.10 went on far too long and the slow downward trend in release frequency was hurting the platform's reputation for being innovative and _modern_ and was preventing iteration on the features and fixes that Node.js actually needed. This was one of the key reasons io.js even existed.

So, all this experience and history put us in a position to try and formulate a plan for combining both stability and progress. We didn't just find a compromise, we found a way that these often competing goals could coexist.
-->
반면, v0.10이 너무 오래 유지되었고 릴리스 주기가 느려지는 추세는 혁신적이면서 _현대적_인
플랫폼의 명성에 해를 끼쳤고 Node.js에서 실제로 필요한 기능 개선과 버그 수정이 이뤄지지 않았습니다.
이것이 io.js가 존재해야 했던 핵심 이유 중 하나입니다.

그래서 이 모든 경험과 역사를 통해 안정성과 발전을 모두 만족하는 계획을 만들게 되었습니다.
단순히 타협점을 찾는 게 아니라 이러한 상충하는 목표를 공존하도록 하는 방법을 찾은 것입니다.

<!--
## Which brings me to Node.js v5.

Every 6 months, we plan to release a new _major_ version of Node.js. The version is _major_ in the [semver](http://semver.org/) sense in that we hold back breaking changes on our master branch until the 6 month point where we can release them together in a batch. The creation of these new release lines occur during April and October each year. Even version numbers happen to come in the April release while odd version numbers are in the October release.

Each major version of Node.js has an active life of 6 months in what we are now calling "Current". During this period we ship most of the active work that goes in to the Node.js codebase except for some items that we reserve for the next major release. Node.js version 5 was first released in October last year, so its "Current" period ended in April this year. At the end of this 6 month period, something different happens for odd and even versioned release lines. The even versions turn in to LTS and receive another 30 months of life; this happened for version 4 in October last year and will happen for version 6 in October this year. The odd versions, however, don't get this extended life. Instead, as a transitionary measure, we provide another 2 months of support where we'll ensure that important fixes make it into that release line.

And this is exactly what happened to version 5. It lived as _Current_ for 6 months from October, 2015 to April, 2016 and then in a special Maintenance phase for another 2 months until June, 2016. At the end of June, we ceased supporting Node.js version 5 and it will no longer receive any fixes or updates from the core team _(although you're welcome to play with the `v5.x` branch on the [Node.js repository](https://github.com/nodejs/node) if it's important to you!)_
-->
## Node.js v5에 어떤 일이 일어났는가

6개월마다 새로운 Node.js의 _주_ 버전을 릴리스하는 계획을 세우고 있습니다.
[semver](http://semver.org/)의 _주_ 버전의 의미대로 호환성이 깨진 변경사항을 한 번에
릴리스할 수 있는 6개월 시점까지 master 브랜치에 유지할 수 있습니다. 매년 4월과 10월에 새로운
릴리스 라인을 만듭니다. 짝수 버전은 4월에 릴리스하고 홀수 버전은 10월에 릴리스합니다.

Node.js의 각 주버전은 6개월의 활발한 생명주기를 가지게 되고 이를 "최신 버전"이라고 부릅니다.
이 기간 동안 차기 주 릴리스 버전에 포함하기로 한 일부 기능을 제외하고 Node.js 코드에 포함되어야 하는
대부분 작업을 진행합니다. Node.js 5 버전은 작년 10월에 처음 릴리스 되었으므로 "최신 버전" 기간은
올해 4월에 끝났습니다. 6개월의 기간이 끝났을 때 홀수 버전과 짝수 버전에 약간 다른 과정을
적용하게 됩니다. 짝수 버전이 LTS 단계로 들어가면서 추가적인 30개월의 지원을 받게 되었습니다.
이 과정이 작년 10월에 나온 4 버전에 적용되었고 올해 10월에 6버전에 적용될 것입니다.
하지만 홀수 버전에는 이러한 과정이 적용되지 않습니다. 대신 과도기적인 조치로 홀수 릴리스 라인에
중요한 수정사항을 적용하는 추가 2개월의 지원 기간을 적용합니다.

이것이 5 버전에 적용된 일입니다. 2015년 10월부터 2016년 4월까지 6개월 동안 _최신 버전_으로
유지된 후 2016년 6월까지 별도 2개월의 유지보수 기간을 가졌습니다. 6월 말 Node.js 버전 5의 지원을
중단하고 코어 팀은 어떤 수정사항이나 업데이트도 하지 않을 것입니다.
_(하지만 당신에게 중요한 부분이 있다면 [Node.js 저장소](https://github.com/nodejs/node)의 `v5.x` 브랜치에 작업을 하는 것은 환영합니다.)_
<!--
The core team is focusing all of its activities on the following release lines:

* v0.10 which will receive occasional critical fixes during its current Maintenance phase and will cease to be supported in October this year.
* v0.12 which will receive occasional critical fixes during its current Maintenance phase and will cease to be supported in December this year.
* v4 which is in Active LTS and is receiving more regular patches and occasional important feature additions, this will continue until October 2017 where it will switch to Maintenance and operate in a manner similar to v0.10 and v0.12 until April 2018.
* v6 which is still a Current release, due to become our second LTS release in October where its life will continue under Active LTS and Maintenance until April 2019.
* v7 is being planned for a release in October this year at the same time that we switch v6 to LTS. You can already try out nightly builds from our `master` branch at <https://nodejs.org/download/nightly> but expect to see a focus on quality and stability of these in the coming months as we create a `v7.x` branch and becoming more choosy about what gets to make it in to v7.0.0.
-->
코어 팀은 다른 릴리스 라인에 모든 활동을 집중하고 있습니다.

* v0.10는 현재 유지보수 단계로 필요할 때만 중요한 수정사항을 적용하고 올해 10월에 지원을
  중단할 것입니다.
* v0.12는 현재 유지보수 단계로 필요할 때만 중요한 수정사항을 적용하고 올해 12월에 지원을
  중단할 것입니다.
* v4는 LTS이고 더 정기적인 수정사항을 적용하고 필요할 때 중요한 기능을 추가합니다. 유지보수 단계로
  바뀌는 2017년 10월까지 계속될 것이고 2018년 4월까지 v0.10, v0.12과 비슷하게 운영할 것입니다.
* v6은 아직 최신 버전 릴리스이고 LTS로 진입하는 10월에 두 번째 LTS 릴리스가 될 것이고
  2019년 4월까지 유지보수 단계로 운영합니다.
* v7은 올해 10월에 릴리스할 것이고 이때 v6는 LTS가 됩니다.
  <https://nodejs.org/download/nightly>의 `master` 브랜치에서 나이틀리 빌드를 사용해
  볼 수 있지만 몇 달 이내에 `v7.x` 브랜치를 만들 것이고 v7.0.0에 무엇을 추가할지는 더 까다로운
  문제이므로 안정성과 품질에 집중해서 보기를 바랍니다.

<!--
It sounds like a lot, but once we move beyond the legacy v0.12 and v0.10 release lines we expect the steady cadence of major versions and their various releases to become easier to understand.

Armed with this knowledge, what's next for you? We suggest you make a judgement on the stability and quality requirements for your own use of Node.js and pick a release line that suits. For production deployments of Node.js we generally recommend version 4 where stability is taken very seriously. For everyday development, non-critical deployments and where Node.js is used as part of a toolchain (e.g. for building frontend components), a Current release should work just fine. We'd love your help testing nightly builds of the next major version of Node.js and while we do continuous unit testing and smoke testing of our `master` branch, we can't provide any assurances of stability or quality of these nightly builds, so buyer beware.
-->
꽤 복잡하게 보이지만 레거시인 v0.12와 v0.10 릴리스를 일단 넘어서게 되면 주 버전과
그 외 다양한 릴리스를 이해하기 쉽도록 안정적으로 운영할 수 있기를 기대합니다.

이 릴리스에 관한 내용을 알았으면 이제 무엇을 해야 할까요? Node.js를 사용 할 때 필요한 안성정과
품질에 대한 요구사항을 결정하고 적합한 릴리스를 선택하기를 권합니다. Node.js 프로덕션 배포에서는
보통 안정성이 아주 중요한 4 버전을 보통 추천합니다. 매일 배포하거나 배포가 치명적이지 않거나
도구 일부로 Node.js를 사용하는 곳(프론트엔드 컴포넌트를 만드는 등)에서는 최신 버전 릴리스가
적합할 것입니다. Node.js 차기 주 버전의 나이틀리 빌드 테스트에 도움 주기를 원합니다.
`master` 브랜치에 유닛 테스트와 스모크 테스트를 지속해서 하면서 이러한 나이틀리 빌드에도
안정성이나 품질을 보장하기는 어렵습니다. 그러므로 사용자가 이 부분을 조심해야 합니다.
