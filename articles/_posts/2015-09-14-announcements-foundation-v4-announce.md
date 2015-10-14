---
layout: post
title: Node.js 재단이 새로운 릴리스에서 Node.js와 io.js를 하나의 코드로 합쳤다.
author: Node
ref: Node.js Foundation Combines Node.js and io.js Into Single Codebase in New Release
refurl: https://nodejs.org/en/blog/announcements/foundation-v4-announce/
translator:
- <a href="https://github.com/outsideris" target="_blank">Outsider</a>
---

<!--
More Stability, Security, and Improved Test Coverage Appeals to Growing Number of Enterprises Using Node.js
-->
Node.js를 엔터프라이즈에서 사용하는 사람들에게 매력적이게 더 안정적이고 안전하면서 테스트 커버리지도 개선됨

<!--
SAN FRANCISCO, Sept. 14, 2015 – The [Node.js Foundation](https://nodejs.org/en/foundation/), a community-led and industry-backed consortium to advance the development of the Node.js platform, today announced the release of Node.js version 4.0.0. A record number of individuals and companies helped to contribute to the release, which combines both the Node.js project and io.js project in a single codebase under the direction of the Node.js Foundation.
-->
샌프란시스코, 2015년 9월 14일 – 커뮤니티가 주도하고 기업들이 지원하는 컨소시엄으로 Node.js 플랫폼의
개발을 돕는 [Node.js 재단](https://nodejs.org/en/foundation/)에서 오늘 Node.js 4.0.0
버전을 발표했습니다. Node.js 재단의 방향성에 따라 하나의 코드로 합쳐진 Node.js 프로젝트와 io.js
프로젝트의 이번 릴리스에는 기록적인 수의 개인과 회사가 기여했습니다.

<!--
Currently, Node.js is used by tens of thousands of organizations in more than 200 countries and amasses more than 2 million downloads per month. With major stability and security updates, a new test cluster, support for ARM processors and long-term support, Node.js v4 represents the latest framework innovation for enterprise users leveraging it to run JavaScript programs.
-->
현재 Node.js는 매달 2백만 건 이상의 다운로드가 이뤄지고 200여 개국의 수만 개의 회사에서 사용되고
있습니다. 주요 안정성과 보안 업데이트 및 새로운 테스트 클러스터, ARM 프로세스의 지원과 장기 지원에
따라 Node.js v4는 Node.js를 사용하는 엔터프라이즈 사용자에게 JavaScript 프로그램을 실행하는
최신 프레임워크의 혁신이 되었습니다.

<!--
Named version 4.0.0 because it includes major updates from io.js version 3.0.0, the new release also contains V8 v4.5, the same version of V8 shipping with the Chrome web browser today. This brings with it many bonuses for Node.js users, most notably a raft of new [ES6](https://nodejs.org/en/docs/es6/) features that are enabled by default including block scoping, classes, typed arrays (Node's Buffer is now backed by Uint8Array), generators, Promises, Symbols, template strings, collections (Map, Set, etc.) and new to V8 v4.5, arrow functions.
-->
버전이 4.0.0이 된 것은 이번 버전이 io.js 3.0.0 버전의 주요 업데이트를 포함하고 있기 때문이고,
새로운 버전에는 현재 크롬 웹 브라우저가 사용하는 V8과 같은 버전인 V8 v4.5가 포함되어 있습니다. 이는
Node.js 사용자에게 많은 이점을 가져다주는데 블록 범위, 클래스, 타입을 가진 배열(Node의 Buffer는
이제 Uint8Array에 기반을 둡니다.), 제너레이터, 프로미스, 심볼, 템플릿 문자열,
컬렉션(Map, Set 등)을 포함해서 V8 v4.5에 새로 추가된 화살표 함수(arrow function) 등 새로운
[ES6](https://nodejs.org/en/docs/es6/) 기능이 기본적으로 활성화 되었다는 점이 주목할 부분입니다.

<!--
Node.js v4 also brings a plan for [long-term support (LTS)](https://github.com/nodejs/LTS/) and a regular release cycle. Release versioning now follows the Semantic Versioning Specification, a specification for version numbers of software libraries and similar dependencies, so expect increments of both minor and patch version over the coming weeks as bugs are fixed and features are added. The LTS will support enterprise users that need more long-term requirements and continue the innovation and work with the V8 team to ensure that Node.js continues to evolve.
-->
Node.js v4부터는 [장기 지원(LTS)](https://github.com/nodejs/LTS/)과 정기 릴리스 주기가
생겼습니다. 이제 릴리스 버전은 소프트웨어 라이브러리나 의존성의 버전 번호에 대한 명세인
[유의적 버전 명세](http://semver.org/lang/ko/)를 따르기 때문에 버그를 수정하고 기능을 추가함에
따라 부 버전과 수 버전을 올릴 것입니다. LTS는 장기적인 요구사항이 필요한 엔터프라이즈 사용자를
지원하고 Node.js가 계속해서 발전하도록 지속해서 혁신을 이뤄내고 V8 팀과 협업합니다.

<!--
"Under the Node.js Foundation, our unified community has made incredibly progress in developing a converged codebase,” said Mikeal Rogers, Community Manager of The Node.js Foundation. “We believe that the new release and LTS cycles allow the project to continue its innovation and adopt cutting-edge JavaScript features, while also serving the need for predictable long-term stability and security demanded by a growing number of enterprise users who are proudly adopting Node.js as a key technology.”
-->
"Node.js 재단아래 통합된 커뮤니티는 합쳐진 코드 기반에서 개발하면서 놀랍도록 진전했습니다."이라고
Node.js 재단의 커뮤니티 관리자인 마이클 로저스가 얘기했습니다. "새로운 릴리스와 LTS 주기가 프로젝트의
혁신을 이뤄내면서 최신 JavaScript 기능을 도입하는 동시에, Node.js를 핵심 기술로 도입하는 엔터프라이즈
사용자가 증가함에 따라 필요해진 예측 가능한 장기적 안정성과 보안성의 요구도 만족하게 합니다."

<!--
Additional updates include:

* **Stability and Security**: Key Node.js Foundation members, such as IBM, NodeSource and StrongLoop, contributed a strong enterprise-focus to the latest release. Their contributions make this latest version more stable and secure for enterprise needs.
* **Improved Platform Test Coverage**: With the assistance of some major partners, including RackSpace, DigitalOcean, Scaleway and ARM Holdings, the new release has built one of the most advanced testing clusters of any major open source project creating additional stability to the platform.
* **First-Class Coverage of ARM variants**: All major ARM variants, ARMv6, ARMv7, and the brand new 64-bit ARMv8, which is making major inroads in the server market, are supported as part of the test infrastructure. Developers who need to use these architectures for developing enterprise-ready and IoT applications are assured solid runtime.
* **Addition of Arrow Functions**: Node.js v4 now includes arrow functions, an addition that was not previously available even in io.js.
-->
이번 업데이트에는 다음 사항도 포함되어 있습니다.

* **안정성과 보안**: IBM, NodeSource, StrongLoop 같은 핵심 Node.js 재단 회원사는 최신 릴리스에서 엔터프라이즈 환경에 강하게 집중된 부분에 기여했습니다. 이들의 기여로 최신 버전은 엔터프라이즈의 요구 사항에 맞게 더 안정적이면서 안전하게 만들어졌습니다.
* **개선된 플랫폼 테스트 커버리지**: RackSpace, DigitalOcean, Scaleway, ARM Holdings 같은 주요 파트너사의 도움으로 이번 릴리스에서는 플랫폼에서 추가적인 안정성을 만들어야 하는 주요 오픈 소스 프로젝트 중에서 가장 발전한 테스트 클러스터를 구축했습니다.
* **ARM 계열의 기본적인 지원**: 테스트 인프라는 모든 주요 ARM 계열과 ARMv6, ARMv7, 서버 시장을 잠식하고 있는 새로운 64-bit ARMv8을 지원합니다. 엔터프라이즈에 준비된 애플리케이션이나 IoT 애플리케이션을 개발하기 위해 이러한 아키텍처를 사용해야 하는 개발자에게 훌륭한 런타임을 보장합니다.
* **화살표 함수의 추가**: Node.js v4는 io.js에서도 사용할 수 없었던 화살표 함수(arrow function)를 지원합니다.

<!--
The technical steering committee for the Node.js Foundation is now 15 members strong with 40 plus core committers and 350+ GitHub organization members contributing to the community. The development process and release cycles are much faster due to the large, active community united under the Node.js Foundation umbrella. The next release is planned before the end of 2015. In parallel, the project will be branching a new stable line of releases every six months, with one planned in October and another for spring of 2016.
-->
Node.js 재단의 기술 결정 위원회(TSC)는 이제 15명이 되었고 40명의 핵심 커미터들과 커뮤니티에
기여하는 350여 명의 GitHub 조직 회원이 있습니다. Node.js 재단이라는 우산 아래 통합된 더 크고
활발한 커뮤니티 덕에 개발 단계와 릴리스 주기는 훨씬 더 빨라졌습니다. 다음 릴리스는 2015년이 지나기
전에 나올 것입니다. 프로젝트는 6개월마다 새로운 안정 버전을 릴리스를 위한 브랜치를 만들 것이고,
첫 안정 버전은 10월에 예정되어 있고 다음은 2016년 봄이 될 것입니다.

<!--
Additional Resources
* Technical Blog - [Node v4.0.0 (Stable)](https://nodejs.org/en/blog/release/v4.0.0/)
* New GitHub [home](https://github.com/nodejs/node)
-->
추가 자료

* 기술 블로그 - [Node v4.0.0(안정 버전)](http://nodejs.github.io/iojs-ko/articles/2015/09/08/release-v4.0.0/)
* 새로운 GitHub [홈](https://github.com/nodejs/node)

<!--
About Node.js Foundation
Node.js Foundation is a collaborative open source project dedicated to building and supporting the Node.js platform and other related modules. Node.js is used by tens of thousands of organizations in more than 200 countries and amasses more than 2 million downloads per month. It is the runtime of choice for high-performance, low latency applications, powering everything from enterprise applications, robots, API engines, cloud stacks and mobile websites. The Foundation is made up of a diverse group of companies including Platinum members Famous, IBM, Intel, Joyent, Microsoft and PayPal. Gold members include GoDaddy, NodeSource and Modulus/Progress Software, and Silver members include Apigee, Codefresh, DigitalOcean, Fidelity, Groupon, nearForm, npm, Sauce Labs, SAP, StrongLoop and YLD!. Get involved here: [http://nodejs.org](http://nodejs.org).
The Node.js Foundation is a Collaborative Project at The Linux Foundation. Linux Foundation Collaborative Projects are independently funded software projects that harness the power of collaborative development to fuel innovation across industries and ecosystems. [https://nodejs.org/en/foundation/](https://nodejs.org/en/foundation/)
-->
Node.js 재단에 대해서

Node.js 재단은 Node.js 플랫폼과 그 외 관련 모듈을 만들고 지원하는데 집중하는 협업 오픈 소스
프로젝트입니다. Node.js는 매달 2백만 건 이상의 다운로드가 이뤄지고 200여 개국의 수만개의 회사에서
사용되고 있고 엔터프라이즈 애플리케이션, 로봇, API 엔진, 클라우드 스택, 모바일 웹사이트의 모든 것을
운영하는 고성능, 저지연 애플리케이션의 런타임입니다. 재단은 플래티넘 회원사인 Famous, IBM, Intel,
Joyent, Microsoft, PayPal과 골드 회원사인 GoDaddy, NodeSource, Modulus/Progress
Software, 실버 회원사인 Apigee, Codefresh, DigitalOcean, Fidelity, Groupon,
nearForm, npm, Sauce Labs, SAP, StrongLoop, YLD를 포함한 다양한 회사로 구성되었습니다!
참여하려면 [http://nodejs.org](http://nodejs.org)를 방문하세요.
Node.js 재단은 Linux 재단 산하의 협업 프로젝트(Collaborative Project)입니다. Linux 재단
협업 프로젝트는 협업 개발의 힘을 이용해 산업과 생태계 전반에 걸친 혁신을 돕기 위한 소프트웨어 프로젝트로
독립적으로 투자를 받습니다. [https://nodejs.org/en/foundation/](https://nodejs.org/en/foundation/)

<!--
> Node.js Foundation is a licensed mark of Node.js Foundation. Node.js is a trademark of Joyent, Inc. and is used with its permission

Media Contact
Node.js Foundation
Sarah Conway
978-578-5300
pr@nodejs.org
-->
> Node.js Foundation은 Node.js 재단의 라이선스 마크입니다. Node.js는 Joyent, Inc의 등록 상표이고 Joyent의 허락을 받아 사용하고 있습니다.

미디어 연락처
Node.js 재단
Sarah Conway
978-578-5300
pr@nodejs.org
