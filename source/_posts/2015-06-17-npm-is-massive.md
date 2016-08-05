---
category: articles
title: npm is Massive
author: Dan Shaw
ref: npm is Massive
refurl: https://medium.com/@nodesource/npm-is-massive-2bdd9417591c
translator:
- <a href="https://github.com/outsideris" target="_blank">Outsider</a>
---

<!--
Did you know that npm is the largest package ecosystem ever? And in the world of JavaScript and Node.js, npm is Massive. npm is so Massive, so Badass, that we don’t even bother to capitalize it. npm is Massive, both in terms of its scale and its importance to the Node community.
-->
npm이 현재까지 가장 큰 패키지 생태계라는 것을 알고 있는가? JavaScript와 Node.js 세상에서 npm은 강력하다. npm은 너무 강력하고 훌륭해서 투자하려고 고생할 필요도 없다. npm은 그 규모에서나 Node 커뮤니티 내의 중요성에서나 강력하다.

<!--
npm is the default package manager for Node.js. It was initially created to help developers manage files, metadata and dependencies for their JavaScript applications. Born as an open source project in 2009, npm features a package registry that enables developers to manage open source code as a service over the internet.
-->
npm은 Node.js의 패키지 관리자고 개발자들이 JavaScript 애플리케이션에서 파일이나 메타데이터, 의존성을 쉽게 관리하도록 만들어졌다. 2009년 오픈 소스 프로젝트로 시작된 npm은 개발자들이 인터넷을 통한 서비스로 오픈 소스 코드를 관리할 수 있도록 패키지 저장소 기능을 제공한다.

<!--
Q. What does npm look like?
-->
질문. npm은 무엇처럼 보이는가?

![](https://cdn-images-2.medium.com/max/2000/0*uXY889nWAXXpY0kI.)

<!--
Today, the npm project and registry is hosted and managed as a free service by our friends at npm, Inc.
-->
현재 npm, Inc에서 npm 프로젝트와 저장소를 무료로 서비스하고 관리하고 있다.

<!--
A. It looks like this according to the NodeSource design team. Check the new N|Sight visualization of npm (interactive design by Hugh Kennedy).
-->
답변. NodeSource 디자인 팀은 npm을 위처럼 만들었다. npm의 [N|Signt의 시각화](https://unpm.nodesource.com/)를 확인해 봐라(Hugh Kennedy가 만든 인터랙티브 디자인이다).

<!--
Since its creation, the role of npm has expanded to fulfill the broader needs of the JavaScript and Node.js developer community to include management of front-end web applications, mobile applications and other JavaScript development tools and frameworks.
-->
npm이 만들어진 후 그 역할은 프론트엔드 웹 애플리케이션, 모바일 애플리케이션, 그 외 JavaScript 개발 도구나 프레임워크의 관리를 포함해서 JavaScript와 Node.js 개발자 커뮤니티의 더 넓어진 요구사항을 만족하도록 확장되었다.

<!--
## Registry: Massive
-->

## 저장소: 매시브
<!--
As of this writing, there are over 155 thousand packages in the public npm repository. Over 5 thousand were added last week. npm served up 1.5 BILLION downloads last month. Even the most jaded among us have to be a little impressed by this type of scale.
-->
이 글을 쓰는 시점에 공개 npm 저장소에는 155,000개가 넘는 패키지가 존재한다. 5천 개 이상의 패키지가 지난주에 추가되었고 지난달에는 15억 번의 다운로드가 발생했다. 무덤덤한 사람들도 npm의 규모에는 어느 정도 큰 인상을 받을 것이다.

<!--
But the sheer size also brings with it the challenge of working nimbly with the registry. This requires a few parsing tricks that many find useful:
-->
하지만 이 규모는 저장소가 잘 동작하게 하는데 도전이 되기도 해서 아주 유용한 몇 가지 파싱 트릭이 좀 필요했다.

<!--
* Filter out packages without a supporting readme file, they really are an essential element.
* Filter out packages without a license field in the package.json file. Unlicensed packages are unavailable for commercial use without permission.
* Filter out packages without a linked GitHub repository with the original source. Without that, it’s difficult to review or submit improvements.
* Look for accompanying test scripts. Not every package will have one, but it’s a good indicator that it has withstood scrutiny by the community.
-->

* readme 파일을 지원하지 않는 패키지는 제외한다. 이는 핵심 요소이다.
* package.json 파일에 license 필드가 없는 패키지는 제외한다. 라이센스가 없는 패키지는 허가 없이 상업적으로 이용할 수 없다.
* 원본 소스를 가진 GitHub 저장소가 연결되어 있지 않은 패키지는 제외한다. 저장소가 없으면 리뷰하거나 개선점을 제안하기가 어렵다.
* 테스트 스크립트가 포함되어 있는지 검사한다. 모든 패키지가 테스트 스크립트를 가진 것은 아니지만, 테스트 스크립트가 있다면 커뮤니티가 잘 관리하고 있다는 좋은 표시이다.

<!--
There are other options that enterprise Node shops can take advantage of besides the public npm registry. npm, Inc. provides a hosted service for registering private npm modules that are only visible to you or other paid subscribers that you share them with. npm Enterprise runs behind your firewall to help meet compliance needs around privacy and storage, particularly for deployable bundles.
-->
기업용 Node 회사가 공개 npm 저장소 외에 이점을 취할 방법이 몇 가지 있다. npm, Inc.는 패키지를 올린 사람이나 올린 사람이 공유한 다른 유료 사용자만 볼 수 있는 비공개 npm 모듈을 등록할 수 있는 서비스를 제공한다. npm Enterprise는 프라이버시, 스토리지 같은 요구사항이나, 배포 가능한 번들을 만족하도록 방화벽 내에서 동작한다.

<!--
## Dependencies
-->

## 의존성
<!--
Looking beyond the sheer size of the repository, one of the crucial roles of npm is to manage dependencies for Node.js modules. As modularity is one of the core design principles of Node development, we’ve seen that Node modules tend to multiply (Massively) — and by extension, so do the dependencies between modules. This has resulted from both the increasing availability of packages and the increasing popularity of writing smaller, modular components.
-->
저장소의 순수한 크기를 넘어서 npm의 중요한 역할 중 하나는 Node.js 모듈의 의존성을 관리하는 것이다. 모듈화가 Node 개발의 핵심 설계 원칙 중 하나이므로 Node 모듈이 확장 모듈로 (거대하게) 늘어나는 경향을 보았다.(그래서 모듈 간에 의존성을 가진다.) 이로써 패키지의 사용성이 증가하고 더 작게 모듈화된 컴포넌트를 작성하는 경향이 커지게 된다.

<!--
npm can significantly assist an organization as the number of Node packages increases, especially via the use of the npm scoped packages feature. It provides insight into code and dependencies being published, used and deployed throughout.
-->
npm은 Node 패키지의 수가 증가하는 조직을 npm의 scoped 패키지 기능으로 잘 지원할 수 있다. 이 기능으로 발행하고 사용하고 배포하는 코드와 의존성에 대한 이해를 제공한다.

<!--
## NodeSource and npm
-->

## NodeSource와 npm
<!--
NodeSource sees npm as an integral tool for Node development, rapid project evolution, and Node-style code modularization. It enables easy sharing of code with minimal overhead for developers. It provides seamless access to both internal and external Node packages. It provides good options for secure and stable deployment of Node projects, isolated from the public registry.
-->
NodeSource는 npm을 Node 개발과 빠른 프로젝트의 진화, Node 형식의 코드 모듈화를 위한 필수 도구로 본다. npm은 개발자에게 최소한의 부담을 주면서 코드를 쉽게 공유할 수 있게 하고 내/외부 Node 패키지에 쉽게 접근할 수 있게 한다. npm은 공개 저장소와 분리해서 Node 프로젝트를 안전하고 안정적으로 배포할 수 있게 하는 좋은 선택이다.

<!--
NodeSource offers training in npm from an introductory course in Node Fundamentals, to an intermediate course that focuses specifically on npm, to advanced npm concepts in our multi-day DevOps training.
-->
NodeSource는 Node 기초에 대한 소개 과정에서 npm을 가르치고 중급 과정에서는 npm의 구체적인 내용에 집중하고 며칠 동안 진행되는 DevOps 과정에서는 npm의 고급 개념을 가르친다.

<!--
npm pervades any successful Node.js organization or project. Its common mission with the Node and Javascript communities and common open source heritage and ethos with Node.js make it an essential part of a world class Node strategy.
-->
npm은 성공적인 Node.js 조직이나 프로젝트에 고루 퍼져있다. npm은 Node/JavaScript 커뮤니티, Node.js에 관련된 일반적인 오픈 소스 유산, 특징과 공통된 목표를 가진다. 그것은 npm을 세계 수준인 Node 전략의 핵심 부분으로 만드는 것이다.

<!--
Truly Massive.
-->
정말 강력하다.

<!--
## Introducing N|Sight
-->

## N|Sight 소개
<!--
At NodeSource, we think that being able to visualize a problem is key to solving it. You can talk about how geographically distributed your team is, or you can show it. This is why we have created NodeSource N|Sight, a series of visualizations that show off the power and beauty of Node. Through N|Sight, we are going to create and share other visualizations from time to time that can tell a story more clearly and memorably than a thousand words on the subject.
-->
NodeSource에서는 문제를 시각화할 수 있는지가 문제를 해결하는 핵심이라고 생각한다. 당신의 팀이 지리적으로 얼마나 분산되어 있는지를 얘기할 수도 있고 보여줄 수도 있다. 이것이 NodeSource N|Sight를 만든 이유이고, 이는 Node의 강력함과 아름다움을 보여주는 일련의 시각화다. N|Sight로 종종 시각화를 만들어서 공유할 예정이다. 주제에 대해서 많은 말을 하는 것보다 더 명확하고 기억에 남는 이야기를 할 수 있다.

<!--
“Understanding npm” is the first in the series of N|Sight visualizations. We hope you enjoy viewing it as much as we did creating it. If there is something you’d like to see visualized, hit us up on Twitter (@nodesource) with #visualizethis.
-->
"[Understanding npm](http://unpm.nodesource.com/)"은 N|Sight 시각화의 첫 번째 작품이다. 우리가 만든 것을 즐겁게 보기를 바라고 원하는 시각화가 있다면 #visualizethis 해시태그를 달아서 [트위터](https://twitter.com/nodesource)(@nodesource)에 알려주기 바란다.

<!--
“npm” and “The npm Registry” are owned by npm, Inc. All rights reserved.
-->
"npm"과 "npm 저장소"는 npm, Inc의 소유이고 모든 권리는 npm, Inc.에 있다.
