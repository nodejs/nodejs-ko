---
category: articles
title: Node.js 프로젝트의 2018년 4월 릴리스 업데이트
author: Myles Borins
ref: April 2018 Release Updates from the Node.js Project
refurl: https://medium.com/the-node-js-collection/april-2018-release-updates-from-the-node-js-project-71687e1f7742
translator: outsideris
---

<!--
This blog post was written by [Myles Borins](https://twitter.com/MylesBorins) who is the Node.js TSC Director and a developer advocate for Google Cloud.

April is always a busy month for the Node.js Project. During this month, we cut a new Semver-Major release that will receive Long Term Support. Version 10.x will start out as our current release line, receiving regular Semver-Minor and Semver-Patch releases. Every new non-breaking feature lands in a Current Release line. In the month of October, 10.x moves to our Long Term Support release line. If you are not familiar with our Long Term Support strategy and release cycle, please head [here](https://github.com/nodejs/Release).
-->

이 글은 Node.js TSC 디렉터이면서 Google Cloud 개발자 지원을 하는
[Myles Borins](https://twitter.com/MylesBorins)가 작성했습니다.

Node.js 프로젝트는 항상 4월은 바쁜 달입니다. 이번 달에 장기 지원을 받을 새 Semver-Major 릴리스를
내보냅니다. 10.x 버전은 현재 버전 릴리스 라인이 되어 Semver-Minor와 Semver-Patch 릴리스를
할 것입니다. 하위호환성을 깨뜨리지 모든 기능은 이 현재 버전 릴리스 라인에 추가됩니다.
10월에 10.x는 장기 지원 릴리스 라인이 됩니다. Node.js의 장기지원 전력과 릴리스 주기를 잘 모른다면
[Node.js Release Working Group](https://github.com/nodejs/Release)를 확인해 보세요.

<!--
TLDR:

**The 4.x release line is going end of life April 30th**

* There will be no more updates (read: no more security updates)
* It was a blast 🎉

**The 6.x release line is moving into maintenance mode April 30th**

* Infrequent updates, and only for critical bugs and security releases

**The 8.x release line is continuing in Active LTS**

* Monthly semver-patch releases
* Quarterly semver-minor releases

**The 9.x release line is no longer actively maintained**

* For a short period, we will do infrequent updates for critical bugs and security releases

**The 10.x release line is being cut on April 24th**

* It will have 6 months as our Current release line
* 6 months as Current (regular semver-minor and semver-patch releases)
* 18 months as Active LTS (Monthly semver-patch releases and quarterly semver-minor releases)
* 12 month as Maintenance LTS (Infrequent updates for critical bugs and security releases)
-->

요약:

**4.x 릴리스 라인은 4월 30일에 지원이 중단될 예정입니다**

* 더는 업데이트를 하지 않습니다.(보안 업데이트도 없습니다.)
* 이 버전은 성공적이었습니다. 🎉

**6.x 릴리스 라인은 4월 30일에 유지보수 모드가 됩니다**

* 비정기적으로 중요한 버그나 보안 릴리스만 업데이트합니다.

**8.x 릴리스 라인은 계속 활성 LTS 버전입니다**

* 월별 semver-patch 릴리스를 합니다.
* 분기별 semver-minor 릴리스를 합니다.

**9.x 릴리스 라인은 더는 적극적으로 유지 보수하지 않습니다**

* 짧은 기간은 비정기적으로 중요한 버그나 보안 릴리스를 업데이트할 것입니다.

**10.x 릴리스 라인은 4월 24일에 나옵니다**

* 6개월 동안 현재 버전 릴리스 라인이 될 것입니다.
* 6개월은 현재 버전 기간입니다.(정기적인 semver-minor와 semver-patch 릴리스를 합니다.)
* 18개월은 활성 LTS 기간입니다.(월별 semver-patch 릴리스와 분기별 semver-minor 릴리스를 합니다.)
* 12개월은 유지보수 LTS 기간입니다.(비정기적으로 중요한 버그와 보안 릴리스 업데이트를 합니다.)

<!--
We created our Long Term Support release line to provide a reliable platform for applications of any scale. The LTS release lines offer stability and extended support, while our current release lines are updated more frequently and act as a stop-gap for LTS. Most developers are on our LTS release lines.

During the 18 months of Active LTS our release team actively backports commits from the current release line after they had a chance to go out in a release. For Node.js 10, Active LTS will start in October of 2018.

For this blog, we want to focus on what is happening with two LTS release lines: Node.js 4.x and Node.js 6.x. We will have more on Node.js 10 when its released on April 24.

![](https://cdn-images-1.medium.com/max/2000/1*iyRrI2KhVIx0y5v52xYwqQ.jpeg)
-->

어떤 규모의 애플리케이션이든 안정적인 플랫폼을 제공하려고 장기지원(LTS) 릴리스 라인을 만들었습니다.
LTS 릴리스 라인은 안정성과 확장된 지원을 제공하는 방면 현재 버전 릴리스 라인은 더 자주 업데이트되면서
LTS와의 간극을 메꾸는 역할을 합니다. 대부분 개발자는 LTS 릴리스 라인을 사용합니다.

18개월의 활성 LTS 기간 동안 릴리스 팀은 릴리스를 내보낼 때 현재 버전 릴리스 라인에서 적극적으로 커밋을
백포트합니다. Node.js 10은 2018년 10월에 활성 LTS가 시작됩니다.

이 글에서는 두 LTS 릴리스 라인 Node.js 4.x와 Node.js 6.x에 무슨 일이 벌어지는지에 집중합니다.
Node.js 10에 대해서는 4월 24일 릴리스 했을 때 더 설명할 것입니다.

![](https://cdn-images-1.medium.com/max/2000/1*iyRrI2KhVIx0y5v52xYwqQ.jpeg)

<!--
For this month, our very first LTS release line Node.js 4.x will go into its “End of Life,” meaning it will receive no further security updates or bug fixes. Additionally, Node.js 6.x will go into maintenance mode, meaning only critical bugs, critical security fixes, and documentation updates will be permitted.

If you are currently on Node.js 4.x Argon, we highly suggest that you migrate to the latest version of Node.js 8.x Carbon; You can always find the latest version of Carbon on the homepage of the Node.js website [here](https://nodejs.org/en/).

Here’s a FAQ with more details on what to know about changes happening within the Node.js release lines.
-->

4월에 첫 LTS 릴리스 라인인 Node.js 4.x의 "생명이 종료"됩니다. 즉, 더는 보안 업데이트나 버그 수정을
적용하지 않습니다. 추가로 Node.js 6.x는 유지보수 모드가 되어 심각한 버그나 중요한 보안 수정사항,
문서 업데이트만 적용합니다.

현재 Node.js 4.x Argon를 사용하고 있지만 Node.js 8.x Carbon의 최신 버전으로 마이그레이션
하기를 강력하게 권장합니다. [Node.js 홈페이지](https://nodejs.org/en/)에서
Carbon 최신 버전을 찾을 수 있습니다.

<!--
## What to do if you are still on Node.js 4.x Argon?

We are recommending that folks on Node.js 4.x Argon migrate to the latest 8.x version of Node.js immediately. If you are concerned on going from Node.js 4.x Argon all the way to Node.js 8.x Carbon you can move to Node.js 6.x Boron. Please note, you will only have one year of maintenance support before Boron stops being supported.

## Since Node.js 6.x Boron is in maintenance mode, should I move off it?

While Boron will receive critical bug and security fixes there is only a year remaining until it stops being supported by the project. If you are planning to run your Node.js application in production, this is a good time to start planning the upgrade to 8.x or possibly even 10.x in 6 months time.

## Are there security concerns for me staying on Node.js 4.x and Node.js 6.x?

6.x will continue to receive the same level of security support as all other maintained release branches. 4.x will no longer receive security updates after April 2018, and as such you should transition off the Argon release line as soon as posisble.
-->

## 아직 Node.js 4.x Argon을 사용하고 있다면 무엇을 해야 하나요?

Node.js 4.x Argon을 사용하는 사용자는 최신 버전의 Node.js 8.x으로 즉시 마이그레이션 하기를
권장합니다. Node.js 4.x Argon에서 Node.js 8.x Carbon으로 바꾸는 데 문제가 있다면
Node.js 6.x Boron으로 바꿀 수도 있습니다. Boron의 지원이 멈추기까지 유지보수 지원이
1년 남았다는 것을 기억해야 합니다.

## Node.js 6.x Boron이 유지보수 모드가 되었으므로 바꾸어야 하나요?

Boron은 중요한 버그와 보안 수정사항을 적용하면서 지원이 중단되기 까지 1년만 남았습니다.
프로덕션에서 Node.js 애플리케이션을 중용할 계획이 있다면 8.x로 업그레이드할 계획을 세우기 좋을 때이고
가능하다면 6개월 안에 10.x를 사용할 수도 있습니다.

## Node.js 4.x와 Node.js 6.x를 계속 사용한다면 보안 문제가 있나요?

6.x는 유지보수하는 다른 릴리스 브랜치와 같은 수준으로 보안 지원을 계속할 것입니다. 4.x는
2018년 4월 이후에는 보안 업데이트를 하지 않으므로 최대한 빨리 Argon 릴리스에서 벗어나야 합니다.

<!--
## What is happening to Node.js 9.x?

Node.js 9.x is a “current release” and it will go into EOL in June 2018. As 9.x is a “odd” release it will not be receiving LTS support.

If you are currently using Node.js 9.x and want to update to the latest release line, then we recommend updating to Node.js 10, which will be released on April 24. Node.js 9.x will not receive any critical security updates past June 2018 as it will be EOL.

## Why did you choose this release cycle cadence?

This release cycle provides us with the ability to get the latest features into Node.js without compromising stability.

We want to ensure that Node.js can be used by a large developer base, those that are needing it in production (who choose the LTS release lines) and those that are looking for a faster velocity on releases.

## What should I expect with Node.js 10?

Node.js 10 will be released at the end of the month (target date of April 24). More on what to expect with this release to come when we officially release it. Stay tuned!
-->

## Node.js 9.x는 어떻게 되나요?

Node.js 9.x는 "현재 버전 릴리스"이고 2018년 6월에 생명이 끝날 것입니다. 9.x가 홀수 버전
릴리스이므로 LTS 지원을 받지 않을 것입니다.

현재 Node.js 9.x를 사용하고 있고 최신 릴리스 라인으로 업데이트하고자 한다면 4월 24일에 나올
Node.js 10으로 업데이트하기를 권장합니다. Node.js 9.x가 2018년 6월 생명이 끝나면
중요한 보안 업데이트를 더는 적용하지 않을 것입니다.

## 이러한 릴리스 주기를 선택한 이유는 무엇인가요?

이 릴리스 주기로 안정성을 훼손시키지 않고 Node.js에 최신 기능을 추가할 수 있습니다.

우리는 수많은 개발자가 Node.js를 사용하면서 일부는 프로덕션에서
사용하고(LTS 릴리스 라인을 선택한 사람들) 일부는 더 빠른 릴리스를 기대하는 것을 모두 만족시키려고 합니다.

## Node.js 10에서 무엇을 기대해야 하나요?

Node.js 10은 이번 달 말에 릴리스 될 것입니다.(4월 24일이 목표입니다) 공식적으로 릴리스했을 때
더 자세한 내용을 볼 수 있습니다.

<!--
## Any recommendations or resources that I should look for to help me migrate from one version of Node.js to another?

You can see a list of breaking changes on our [wiki](https://github.com/nodejs/node/wiki#apibreaking-changes). [Waleed Ashraf](https://twitter.com/WaleedAshraf01) also [posted a blog](https://medium.com/@waleedashraf/a-list-of-major-notable-change-in-node-js-versions-to-help-you-migrate-1e4286586f98) on these changes and some suggestions of what to think about when you upgrade to different versions of Node.js.

## If I have more questions, where should I go?

Please feel free to ask questions in this Medium post. You can also ask general question on github at <https://github.com/nodejs/help>
-->

## Node.js의 한 버전에서 다른 버전으로 마이그레이션 할 때 도움이 될만한 추천 자료 등이 있나요?

[위키](https://github.com/nodejs/node/wiki#apibreaking-changes)에서 호환성을 깨뜨린
변경사항 목록을 볼 수 있습니다. [Waleed Ashraf](https://twitter.com/WaleedAshraf01)도
Node.js의 다른 버전으로 업그레이드할 때 생각해 보아야 할 내용과 변경사항에 대해서
[블로그에 글을 올렸습니다](https://medium.com/@waleedashraf/a-list-of-major-notable-change-in-node-js-versions-to-help-you-migrate-1e4286586f98).

## 다른 질문이 있으면 어디에서 질문해야 하나요?

이 [Medium 글](https://medium.com/the-node-js-collection/april-2018-release-updates-from-the-node-js-project-71687e1f7742)에서
편하게 질문해도 됩니다. 아니면 <https://github.com/nodejs/help>에서 질문할 수도 있습니다.
