---
category: articles
title: Node.js 국제화
author: obensource
ref: Internationalizing Node.js
refurl: https://medium.com/the-node-js-collection/internationalizing-node-js-fe7761798b0a
translator: outsideris
---

<!--
![](https://cdn-images-1.medium.com/max/1400/1*OVtLdCmSb3WzuMz987QDxg.jpeg)

> "It is our job to ensure that a global and multilingual community is maintained, and that no one is left out of work they’d like to do because of linguistic barriers.""
>
> – [Richard Littauer](https://twitter.com/richlitt), Node.js Contributor
-->

![](https://cdn-images-1.medium.com/max/1400/1*OVtLdCmSb3WzuMz987QDxg.jpeg)

> "글로벌, 다국어 커뮤니티를 유지하는 것이 우리 일이다. 언어의 장벽 때문에 하고자 하는 일을 못 하는 사람은 없어야 한다."
>
> – [Richard Littauer](https://twitter.com/richlitt), Node.js 컨트리뷰터

<!--
# Node.js is about people, first and foremost
Anyone I’ve met who’s committed to the growth of this project seems to hold to the above sentiment as a core principal. I see it in the fabric of our [Community Committee](https://github.com/nodejs/community-committee) each time we meet. It keeps me going, and gets me more involved–all the time. Enablement through community-engagement is our mission, and we care deeply about empowering people–no matter which language they speak, or what background they come from.

The effort to Internationalize Node.js was recently entrusted to its Community Committee, and we’re excited to pick up where [the previous work](https://github.com/nodejs/Intl) left off. We’re not about to let language differences keep anybody from experiencing all that our community and runtime have to offer. In 2016, we saw that 49% of the participants in the [Node.js user survey](https://github.com/nodejs/nodejs.org/blob/master/static/documents/2016-survey-report.pdf) identified English as their second language. Our users shouldn’t have to speak native English in order to leverage the power of Node.js for their own endeavors–or more ideally, have to speak it at all.
-->

# Node.js에서는 사람이 가장 중요하다
Node.js에 헌신하는 사람들을 만났을 때 이들은 모두 위 의견을 핵심원리로 생각하고 있었습니다.
[커뮤니티 위원회(Community Committee)](https://github.com/nodejs/community-committee)와
만날 때마다 그 근간에서 이 생각을 보았습니다. 이 생각이 저를 더 움직이고 참여하게 했습니다.
커뮤니티 활성화로 가능하게 하는 것이 우리의 임무이고, 사람들이 어떤 언어를 사용하고 그들이 어떤 배경을
가졌는지와 상관없이 사람들이 할 수 있게 하는 것을 깊이 신경 쓰고 있습니다.

최근 Node.js를 국제화하는 일을 커뮤니티 위원회가 맡았고
[이전에 멈춘 작업](https://github.com/nodejs/Intl)을 이어서 한다는 일에 기대하고 있습니다.
커뮤니티와 런타임이 제공하는 모든 것에서 아무도 언어의 차이를 겪지 않도록 하겠습니다. 2016년
[Node.js 사용자 설문조사](https://github.com/nodejs/nodejs.org/blob/master/static/documents/2016-survey-report.pdf)
참여자의 49%는 영어를 두 번째 언어로 사용한다고 응답했습니다. 사용자가 Node.js를 사용하고자 할 때
영어가 모국어일 필요가 없고 이상적으로는 영어를 전혀 몰라도 상관없어야 합니다.

<!--
Accordingly, members of the Community Committee and I are happy to present a new proposal to push this effort forward.

**I’ll be bringing you up to speed on:**

* The current international-language needs of Node.js
* A Node.js Internationalization (i18n) & Localization (l10n) status report
* Our proposal for moving Node’s i18n forward as a function of the Community Committee
-->

따라서 커뮤니티 위원회와 나는 이러한 노력이 더 진행되도록 새로운 제안을 하게 되어 기쁩니다.

**간단히 정리하면 다음의 내용을 담고 있습니다.**

* 현재 국제 언어에 관한 Node.js의 요구사항
* Node.js 국제화(i18n)와 지역화(l10n) 상태 보고서
* 커뮤니티 위원회의 역할 중 하나로 Node의 i18n이 앞으로 나아가게 하려는 우리의 제안

<!--
# Node’s Current International-Language Needs
The language-landscape of the Node.js ecosystem is incredibly vast.

[npm](https://www.npmjs.com/) recently gave us a look into the current language preferences of the global Node.js community–based on the default browser settings for all visitors to npmjs.com.[^1] This clearly lets us see where our greatest translation needs are at the moment.

![](https://cdn-images-1.medium.com/max/1400/1*nwUNdV2TsR-oDCqzJ6XeTA.png)
<div style="text-align:center;">The Top 10 languages of Node.js users</div>
-->

# 현재 국제 언어에 관한 Node.js의 요구사항
Ndoe.js 생태계의 언어 상황은 아주 거대합니다.

최근 [npm](https://www.npmjs.com/)에서 npmjs.com 방문자의 기본 브라우저 설정에 기반을 둬서
전 세계 Node.js 커뮤니티의 현재 언어 선호도를 볼 수 있는 자료를 제공했습니다.[^1] 이 자료로
현재 가장 번역이 필요한 부분이 어디인지 명확하게 알 수 있습니다.

![](https://cdn-images-1.medium.com/max/1400/1*nwUNdV2TsR-oDCqzJ6XeTA.png)
<div style="text-align:center;">Node.js 사용자의 상위 10개 언어</div>

<!--
**What we can gather from this:**

* More than 30% of Node’s userbase natively speaks a different language than English.
* Translating our site, docs, tutorials, and necessary text-vectors of Node-core (eg. error messages[^2]) into the languages above is extremely important as not to alienate current users, and stifle potential growth of the project.
* Moving forward, the priority of l10n project targets will be defined by the order of the languages represented above.
-->

**이 자료에서 알 수 있는 내용은 다음과 같습니다.**

* Node.js 사용자 중 30% 이상은 영어가 아닌 언어를 모국어로 사용합니다.
* 사이트, 문서, 튜토리얼, Node 코어에 필요한 텍스트 요소(예: 에러 메시지[^2])를 위의 언어로
  번역하는 것은 아주 중요합니다. 이는 현재 사용자를 배제하거나
  프로젝트의 잠재적인 성장을 억누르지 않기 위함입니다.
* 앞으로 나아가려면, l10n 프로젝트 대상의 우선순위는 위에 나온 언어 순서로 정의될 것입니다.

<!--
# Current Status & the Ongoing Struggle for i18n

## io.js i18n set the tone for Node
Along with the excitement of the io.js fork came a serious push to establish l10n groups for the project–and it was quite successful!

![](https://cdn-images-1.medium.com/max/1400/1*fS4O5lXt2YmfN_0hVs2BZA.png)
<div style="text-align:center;">iojs.org language options</div>

When the Node.js Foundation was born, the io.js i18n methodology was carried over and became the template for Node’s current **working model:**
-->

# i18n의 현재 상태와 해결하려는 문제

## io.js i18n이 Node의 분위기를 정했습니다
io.js로 포크한 즐거움으로 프로젝트의 l10n 그룹을 만들자는 진지한 움직임이 있었고
이는 꽤 성공적이었습니다!

![](https://cdn-images-1.medium.com/max/1400/1*fS4O5lXt2YmfN_0hVs2BZA.png)
<div style="text-align:center;">iojs.org의 언어 옵션</div>

Node.js 재단이 생겼을 때 io.js i18n 방법론이 그대로 넘어와서
현재 Node **작업 모델**의 템플릿이 되었습니다.

<!--
![](https://cdn-images-1.medium.com/max/1400/1*n_5tvKuzq_bbsYWKFUsH7g.jpeg)
<div style="text-align:center;">Current Node.js i18n Process</div>

* l10n groups translate Node’s textual content into their own languages as needed for the community of a given locale.
* Translation commits land in l10n repos (eg. [nodejs/nodejs-fr](https://github.com/nodejs/nodejs-fr)).
* i18n projects are determined by the [Technical Steering Committee](https://github.com/nodejs/TSC), and then driven by the [Intl Working Group](https://github.com/nodejs/Intl)–who then works directly with l10n groups to land changes in Node’s site, docs, modules, and core.

This has worked to Node’s advantage for some time, but significant issues with this model are now holding the project back.
-->

![](https://cdn-images-1.medium.com/max/1400/1*n_5tvKuzq_bbsYWKFUsH7g.jpeg)
<div style="text-align:center;">현재 Node.js i18n 절차</div>

* l10n 그룹은 해당 언어 커뮤니티의 필요에 따라 Node의 콘텐츠를 자신들의 언어로 번역합니다.
* 번역 커밋을 l10n 저장소에 올립니다.
  (예: [nodejs/nodejs-fr](https://github.com/nodejs/nodejs-fr))
* [기술 결정 위원회](https://github.com/nodejs/TSC)가 i18n 프로젝트를 결정하고
  [Intl 워킹 그룹](https://github.com/nodejs/Intl)이 주도해서 l10n 그룹과 직접 일하면서
  Node 사이트, 문서, 모듈, 코어에 변경사항을 적용합니다.

이 모델은 때로는 Node에 이점으로 작용했지만, 이 모델이 가진 중대한 이슈들이
프로젝트가 더 나아가지 못하게 하고 있습니다.

<!--
## What’s broken now?
**Issue 1:** Distributed Pace

> "We’ve tried several times–but translating all of the API docs while trying to catch up with the upstream was too hard, so it’d be out of scope for now even though it’s super important."
>
> – [Daijiro Wachi](https://twitter.com/watilde), Node.js Collaborator

With testimonies like this, it’s easy to see that the current translation system is becoming increasingly ineffective–given the pace of updates that are landing upstream. It’s not able to streamline & integrate in a way that effectively scales.

**Issue 2:** Bottlenecking anti-patterns in the Github process

* Translators have to understand the Github workflow, and how to navigate its UI. This may be fine for some people who have previous experience with GH, but causes an unnecessary barrier to entry otherwise.
* The time it takes for each contributor to generate l10n group PRs & updates, as well as Node.js i18n project PRs & updates is a significantly congestive. With additional time then needed to prioritize and review them, productivity has the potential to slow down to stagnancy.
-->

## 무엇이 문제입니까?
**이슈 1:** 제각각인 속도

> 여러 번 시도했지만, 최신 변경사항을 따라가면서 모든 API 문서를 번역하는 것은 너무 힘듭니다.
> 아주 중요하지만 다 번역하지 못하고 있습니다.
>
> – [Daijiro Wachi](https://twitter.com/watilde), Node.js 협업자

이러한 증거처럼 현재의 번역 시스템이 점점 비효율적이 되고(변경사항이 업스트림에 적용되는 속도) 있다는
것은 명백합니다. 효과적인 방법으로 능률적으로 바꾸고 통합하는 것이 불가능합니다.

**이슈 2:** GitHub 프로세스로 인한 병목화

* 번역자는 GitHub의 작업 흐름과 UI를 탐색하는 방법을 반드시 이해해야 합니다.
  이미 GitHub을 사용해본 사람은 괜찮지만 그렇지 않은 사람에게는 불필요한 장벽입니다.
* 각 기여자가 l10n 그룹에 PR이나 수정사항을 만들려면 시간이 걸리고 Node.js i18n 프로젝트의
  PR이나 수정사항도 눈에 띄게 느려졌습니다. 여기에 우선순위를 지정하고 리뷰하는데 추가 시간이 필요하며
  생산성은 정체될 정도로 점점 느려졌습니다.

<!--
**Issue 3:** Ongoing Willpower for l10n Groups

> "It seems that the French repo has been pretty dead for 2 years."
>
> — [Benjamin Zaslavsky](https://twitter.com/Ben_Tiriel), Node.js Developer

This is most likely a side-effect of the first two issues.

If a l10n project just can’t keep up with the frequency of core’s changes, and the number of available translators is limited to individuals who understand or are willing to learn the Github workflow–the group’s excitement about their project is bound to fade (most likely after experiencing some burnout).

If the Node.js core integration cadence becomes irregular while l10n groups work on i18n projects–the drive empowering them will probably dry up. People get excited when they see their changes utilized.
-->

**이슈 3:** l10n 그룹 의지력의 지속성

> "프랑스어 저장소는 2년 전에 죽은 것으로 보인다."
>
> — [Benjamin Zaslavsky](https://twitter.com/Ben_Tiriel), Node.js 개발자

이는 앞의 두 이슈의 부작용으로 보입니다.

l10n 프로젝트가 코어의 변경 속도를 따라갈 수 없고, 번역할 수 있는 사람의 수가 GitHub 작업 흐름을
이해하거나 배우려는 사람들로 제한된다면, 대부분은 번아웃을 경험한 후에 프로젝트에 관한
그룹의 흥미가 사라지게 됩니다.

l10n 그룹이 i18n 프로젝트에 작업하는데 Node.js 코어의 통합 주기가 불규칙적이라면 번역에 관한
추진력은 아마도 사라질 것입니다. 사람들은 자신이 변경한 내용이 적용될 때 흥미를 갖게 됩니다.

<!--
# Node.js i18n v2
With the burden of Node’s i18n weighing us down the more it globalizes, we need to rethink our process a bit. Thankfully, there are a lot of amazing people around us to learn from.

## Learning from Electron’s example
The [Electron](https://electronjs.org/) community has been doing outstanding work in their internationalization efforts and we can learn a lot from their recent [case study](https://github.com/electron/electron-i18n/blob/master/crowdin.md#why-crowdin) & implementation decisions.[^3] They’ve come up with a pattern that is solid and sensible for the current i18n needs of Node.js using the [Crowdin](https://crowdin.com/) localization management platform & one awesome Node.js module.
-->

# Node.js i18n v2
Node.js가 세계화될수록 Node i18n의 짐은 더 커지므로 이 절차를 다시 생각해
볼 필요가 있습니다. 다행히 우리가 배울 수 있는 멋진 사람들이 주변에 많이 있습니다.

## Electron의 예시에서 배우기
[Electron](https://electronjs.org/) 커뮤니티는 국제화에 뛰어난 작업을 하고 있고 최근
[케이스 스터디](https://github.com/electron/electron-i18n/blob/master/crowdin.md#why-crowdin)와
구현 결정[^3]에서 많은 것을 배울 수 있습니다. Electron 커뮤니티는
[Crowdin](https://crowdin.com/) 지역화 관리 플랫폼과 뛰어난 Node.js 모듈을 사용해서
Node.js의 i18n이 현재 필요로 하는 훌륭하고 현명한 패턴을 제안하고 있습니다.

<!--
**The Crowdin advantage:**

* Asking translators to jump into the Github environment is confusing enough. Crowdin beautifully abstracts away the cruft into a simple & useful interface.

![](https://cdn-images-1.medium.com/max/1400/1*xYqs5uqYyZtUqDjUEAsS8g.png)

* Each localization project contains a directory tree of of the core project’s documents–giving the translator continuous visibility on what has and hasn’t been translated, streamlining the process entirely.

![](https://cdn-images-1.medium.com/max/1400/1*QDTjaffCZ6eJbcj8f3-TCQ.png)
-->

**Crowdin의 장점**

* 번역하는 사람에게 GitHub 환경을 요구하는 것은 꽤 혼란스럽습니다.
  Crowdin은 이를 간단하고 유용한 인터페이스로 잘 추상화했습니다.

![](https://cdn-images-1.medium.com/max/1400/1*xYqs5uqYyZtUqDjUEAsS8g.png)

* 각 지역화 프로젝트는 코어 프로젝트 문서의 디렉터리를 담고 있습니다. 이는 무엇이 번역되지 않았는지
  번역하는 사람에게 가시성을 지속해서 제공하며 전체 절차를 간소화합니다.

![](https://cdn-images-1.medium.com/max/1400/1*QDTjaffCZ6eJbcj8f3-TCQ.png)

<!--
* A [simple work environment](https://crowdin.com/page/tour#tab_translators) presents untranslated documents in one row, and the localized version being updated in another.
* A Crowdin project seamlessly integrates with an existing Github repo, automating PRs & updates from its internationalization projects.
* It’s [FREE for open source projects](https://crowdin.com/page/open-source-project-setup-request)!

**A hand-rolled i18n module**

I think the Electron community’s brilliance shines brightest in their [electron-i18n](https://github.com/electron/electron-i18n) module. It empowers the parent project by providing one JSON object containing the current state of every translation, with anything untranslated gracefully falling back to English.
-->

* [간단한 작업 환경](https://crowdin.com/page/tour#tab_translators)은 번역되지 않은
  문서를 한 곳에서 제공하고, 갱신되고 있는 지역화된 버전은 다른 곳에서 제공합니다.
* Crowdin 프로젝트는 국제화 프로젝트의 PR과 수정사항을 자동화해서
  기존 GitHub 저장소와 자연스럽게 통합됩니다.
* [오픈소스 프로젝트는 공짜](https://crowdin.com/page/open-source-project-setup-request)입니다!

**직접 작성한 i18n 모듈**

Electron 커뮤니티의 가장 빛나는 부분은
[electron-i18n](https://github.com/electron/electron-i18n)이라고 생각합니다.
모든 번역의 현재 상태를 담고 있는 JSON 객체를 제공하므로 부모 프로젝트가 사용할 수 있고
번역되지 않은 부분은 영어로 자연스럽게 보여줍니다.

<!--
## A new i18n process for Node.js
Seeing that other i18n projects are now flourishing utilizing the Crowdin service & custom modules, I’d like to propose a new internationalization process for Node.js.

![](https://cdn-images-1.medium.com/max/1400/1*xxb7nPxTKAGMYOnJturhJw.jpeg)
<div style="text-align:center;">New Node.js i18n Process Proposal</div>

* The Node.js Community Commitee’s new i18n Working Group gathers and supports Node’s translation base. This consists of our current l10n groups, independent translators, and hired translators (if a strategic initiative’s priority ever necessitates that).
* Our translation base utilizes Crowdin localization projects for their work. The projects are born by statistical need and community desire.
* The work in Crowdin l10n projects generate automated PRs & updates to our own Node.js i18n repo.
* Our Node.js i18n repo exports one large JSON object, containing all site, docs, tutorial content, and helpful text in Node.js core–translated into every language.
* The i18n module is imported and used wherever it’s needed by Node.js to implement strategic initiatives.

As it turns out, maybe the missing glue between our l10n groups & core integration is a Node.js module! 😎
-->

## Node.js의 새로운 i18n 절차
다른 i18n 프로젝트가 Crowdin 서비스와 커스텀 모듈을 잘 활용하는 것을 보면서
Node.js의 새로운 국제화 절차를 제안하게 되어 기쁩니다.

![](https://cdn-images-1.medium.com/max/1400/1*xxb7nPxTKAGMYOnJturhJw.jpeg)
<div style="text-align:center;">새로운 Node.js i18n 절차 제안</div>

* Node.js 커뮤니티 위원회의 새로운 i18n 워킹 그룹이 Node의 번역 기반을 모으고 지원합니다.
  이는 현재 l10n 그룹, 개인 번역가, 고용된 번역가(만약 전략적인 이니셔티브의
  우선순위에서 이가 필요하다면)로 이루어져 있습니다.
* 번역 기반은 번역 작업을 할 때 Crowdin 지역화 프로젝트를 활용합니다.
  프로젝트는 통계적인 필요와 커뮤니티의 요구에 따라 생깁니다.
* Crowdin l10n 프로젝트의 작업은 해당 Node.js i18n 저장소에 PR과 수정사항을 자동으로 생성합니다.
* Node.js i18n 저장소는 모든 언어로 번역된 하나의 큰 JSON 객체를 내보내고 여기에는
  모든 사이트, 문서, 튜토리얼, Node.js 코어에 도움 되는 문자를 담고 있습니다.
* 전략적인 이니셔티브를 구현하려고 Node.js가 필요로 할 때마다 i18n 모듈을 임포트하고 사용합니다.

잘 알고 있듯이, l10n 그룹과 코어 통합 간의 끊어진 연결을 이어주는 것이 Node.js 모듈일 것입니다! 😎

<!--
**Supporting Strategic Initiatives**

The most imminent endeavor for the i18n Working Group to support is [our new site](https://medium.com/the-node-js-collection/redesigning-nodejs-part-1-fac08a0e015a).

Since the site is the face of Node.js and a Community Committee initiative, i18n is going to be a first-class citizen of the project. We will be tracking along with its development timeline.

We’re excited for our work to complement the site redesign nicely, and level up Node’s internationalization offerings.
-->

**전략적 이니셔티브 지원**

i18n 워킹 그룹 지원에 있어 가장 급한 사항은
[새로운 웹사이트](https://medium.com/the-node-js-collection/redesigning-nodejs-part-1-fac08a0e015a)입니다.

웹사이트가 Node.js와 커뮤니티 위원회 이니셔티브의 얼굴이므로 i18n은 프로젝트의 핵심이 될 것입니다.
우리는 개발 일정과 함께 이를 추적할 것입니다.

웹사이트가 다시 잘 디자인 되도록 돕고 Node의 국제화 수준을 더 높일 것입니다.

<!--
# Help Wanted

> "Any fool can make something complicated. It takes a genius to make it simple.""
>
> –[Woody Guthrie](https://en.wikipedia.org/wiki/Woody_Guthrie)

Creating simplicity takes a lot of work. We’re going to need help from anyone who’d like to offer it.

## What we have ahead of us right now
* Seek the approval of Node’s current i18n groups concerning this proposal.
* If successful, get the word out and ask our groups for translation help–and request they might invite anyone who would like to join us in this.
* Begin building our new i18n module, conversing with Node.js core contributors and the [TSC](https://github.com/nodejs/TSC) along the way.
* Track the progress of our site redesign and integrate.
-->

# 도움이 필요합니다

> "어떤 바보라도 복잡한 일을 만들 수 있습니다. 이를 간단하게 하려면 천재가 필요합니다."
>
> –[Woody Guthrie](https://en.wikipedia.org/wiki/Woody_Guthrie)

간단하게 하려면 많은 작업이 필요합니다. 참여하고자 하는 모든 사람의 도움이 필요합니다.

## 이제 남아 있는 작업
* 이 제안과 관련된 현재 Node i18n 그룹의 동의를 받아야 합니다.
* 제안이 받아들여진다면 이를 알리고 그룹에 번역 도움을 요청합니다.
  여기에 참여하고자 하는 사람들을 초청해야 합니다.
* 새로운 i18n 모듈을 만들기 시작하고 그 과정에서 Node.js 코어 기여자와
  [TSC](https://github.com/nodejs/TSC)와 논의합니다.
* 웹사이트를 개편하고 통합하는 진행 상황을 추적합니다.

<!--
## Ways to help
Please track our progress in the [Community Committee](https://github.com/nodejs/community-committee), and feel free to jump in anywhere as we grow. Our i18n Working Group repo will be available shortly.

We’ve got some great work to do, and we’d love to have you be a part of it.

-

Many thanks to [Adam Miller](https://twitter.com/millea9), [Ben Tiriel](https://twitter.com/Ben_Tiriel), [Rachel White](https://twitter.com/ohhoe), [Daijiro Wachi](https://twitter.com/watilde), [Tierney Cyren](https://twitter.com/bitandbang), [Zeke Sikelianos](https://twitter.com/zeke), [Tracy Hinds](https://twitter.com/HackyGoLucky), [DShaw](https://twitter.com/dshaw), [James Snell](https://twitter.com/jasnell), [Michael Dawson](https://twitter.com/mhdawson1), and everyone who’s contributed to this endeavor!

[^1]: Thanks to [npm](https://www.npmjs.com/) & Adam Miller for providing us with language preference stats.

[^2]: Thanks to Michael Dawson for the seeding this idea.

[^3]: Thanks to Zeke Sikelianos for your "drive-by comment" in our [community committee issue](https://github.com/nodejs/community-committee/issues/114#issuecomment-354253004).
-->

## 도와줄 방법
[커뮤니티 위원회](https://github.com/nodejs/community-committee)에서 진행 상황을 확인하고
언제든 자유롭게 참여하면 됩니다. i18n 워킹 그룹 저장소는 곧 사용할 수 있게 될 것입니다.

이제 해야 할 큰 작업이 있고 당신이 합류하게 되어 기쁘게 생각합니다.

-----

[Adam Miller](https://twitter.com/millea9), [Ben Tiriel](https://twitter.com/Ben_Tiriel), [Rachel White](https://twitter.com/ohhoe), [Daijiro Wachi](https://twitter.com/watilde), [Tierney Cyren](https://twitter.com/bitandbang), [Zeke Sikelianos](https://twitter.com/zeke), [Tracy Hinds](https://twitter.com/HackyGoLucky), [DShaw](https://twitter.com/dshaw), [James Snell](https://twitter.com/jasnell), [Michael Dawson](https://twitter.com/mhdawson1)과 이 작업에 기여하는 모두에게 감사드립니다.

[^1]: 언어 선호도 상태를 제공해준 [npm](https://www.npmjs.com/)과 Adam Miller에게 감사드립니다.

[^2]: 이 아이디어를 제안한 Michael Dawson에게 감사드립니다.

[^3]: [커뮤니티 위원회 이슈](https://github.com/nodejs/community-committee/issues/114#issuecomment-354253004)에서 "댓글로 주도"를 제공한 Zeke Sikelianos에게 감사드립니다.
