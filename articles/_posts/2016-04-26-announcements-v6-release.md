---
layout: post
title: 세계에서 가장 빠르게 성장하는 오픈 소스 플랫폼이 새로운 릴리스를 내보내다.
author: Myles Borins
ref: World’s Fastest Growing Open Source Platform Pushes Out New Release
refurl: https://nodejs.org/en/blog/announcements/v6-release/
translator: <a href="https://github.com/kazikai" target="_blank">kazikai</a>
---

<!--
> New “Current” version line focuses on performance improvements, increased reliability and
better security for its 3.5 million users
-->
> 새로운 "최신" 버전은 350만 사용자들을 위해 성능향상과, 향상된 신뢰성 그리고 더 나은 보안에 집중했습니다.

<!--
SAN FRANCISCO, April, 26, 2016 — [The Node.js Foundation](http://ctt.marketwire.com/?release=11G082331-001&id=8448115&type=0&url=https%3a%2f%2fnodejs.org%2fen%2ffoundation%2f), a
community-led and industry-backed consortium to advance the development of the Node.js
platform, today announced the release of Node.js version 6 (Node.js v6). This release
provides major performance improvements, increased reliability and better security.
-->
샌 프란시스코 2016년 4월 26일 - Node.js 플랫폼의 개발을 나아가게하기위해 커뮤니티와 기업이 함께 만든 [Node.js재단](http://ctt.marketwire.com/?release=11G082331-001&id=8448115&type=0&url=https%3a%2f%2fnodejs.org%2fen%2ffoundation%2f)에서,
오늘날 Node.js의 버전 6의 릴리스가 소개되었습니다. 이 릴리스는 주요한 성능향상과, 향상된 신뢰성, 그리고 더나은 보안을 가져다 줍니다.

<!--
With over 3.5 million users and an annual growth rate of 100 percent, Node.js is emerging as
a universal platform used for web applications, IoT, mobile, enterprise application
development, and microservice architectures. The technology is ubiquitous across numerous
industries, from startups to Fortune 500 companies, and is the only unified platform that
full stack JavaScript developers can use for front end, back end, mobile and IoT projects.
-->

350만명이 넘는 사용자와 매년 100퍼센트의 성장률을 보여주는 Node.js는 웹 어플리케이션, IoT, 모바일, 기업용 어플리케이션,
그리고 마아크로서비스 아키텍쳐에서 사용되는 만능 플랫폼으로 부상했습니다. 이 기술은 포츈 500 대 기업에서 신생기업 까지, 풀 스택 자바스크립트
개발자가 프론트엔드 부터 백엔트 모바일 그리고 IoT 프로젝트까지 아우를수 있는 유일한 통합 플랫폼입니다.

<!--
Performance improvements are key in this latest release with one of the most significant
improvements coming from module loading, which is currently four times faster than Node.js
version 4 (Node.js v4). This will help developers dramatically decrease the startup time of
large applications for the best productivity in development cycles and more seamless
experience with end users. In addition, Node.js v6 comes equipped with v8 JavaScript engine
5.0, which has improved ECMAScript 2015 (ES6) support. Ninety-three percent of
[ES6](http://node.green/) features are also now supported in the Node.js v6 release, up from
56 percent for Node.js v5 and 50 percent for Node.js v4. Key features from ES6 include:
default and rest parameters, destructuring, class and super keywords.
-->

이번 최신 릴리스는 Node.js 버전 4(Node.js v4)에 비해 모듈 로딩에서 4배나 빠른 매우 상당한 성능을 향상시킨것중에 하나가 핵심입니다.
이것은 개발자들에게 극적으로 규모가 큰 어플리케이션의 시작 시간을 단축 시켜 개발 사이클에서 생산성을 증가 시키고
사용자들에게는 더 나은 끊김없는 경험을 제공할 것입니다. 추가 적으로 Node.js 버전 6은 EcmaScript 2015 (ES6) 지원이 향상된
v8 자바스크립트 5.0을 내장하고 있습니다. Node.js 버전 4에서 50퍼센트, Node.js 버전 5에서 56퍼센트 보다 더 향상된
93퍼센트 [ES6](http://node.green/) 기능을 현재 Node.js 버전 6 에서는 지원합니다.
ES6의 주요 기능으로는 기본 그리고 rest파리미터, 디스트럭처링(destructuring), class와 super 키워드들이 있습니다.

<!--
Security is top-of-mind for enterprises and startups alike, and Node.js v6 has added several
features that impact security, making it easier to write secure code. The new Buffer API will
reduce the risk of bugs and vulnerabilities leaking into applications through a new
constructor method used to create Buffer instances, as well as a zero-fill-buffers
command-line flag. Using the new command line flag, developers can continue to safely use
older modules that have not been updated to use the new constructor API. In addition, V8 has
improved their implementation of Math.random() to be more secure — this feature is added into
Node.js v6.
-->

보안은 기업들과 스타트업들에게 가장 중요합니다. 그리고 Node.js 버전 6 은 보안 코드를 작성하기 쉽게
몇몇의 중요한 보안 기능들을 추가 했습니다. 새로운 Buffer API는 zero-fill-buffers 커맨드 라인 옵션 뿐만 아니라
새 Buffer 인스턴스를 만들기 위해 사용되는 새로운 생성자 매소드를 통해 어플리케이션에 누출되는 취약성과 버그들의 위험을 감소 시킬것입니다.
개발자들은 신규 커맨드 라인 옵션을 사용해서 새로운 생성자 API 사용이 아직 업데이트 안된 오래된 모듈들도 안전하게 지속적으로 사용할 수 있습니다.
추가적으로 V8은 Math.random()의 구현이 향상되었기 때문에 더욱 더 안전해질것 입니다. - 이 기능은 Node.js 버전 6에 추가되었습니다.

<!--
“The Node.js Project has done an incredible job of bringing this version to life in the
timeline that we initially proposed in September 2015. It’s important for us to continue to
deliver new versions of Node.js equipped with all the cutting-edge JavaScript features to
serve the needs of developers and to continue to improve the performance and stability
enterprises rely on,” said Mikeal Rogers, Community Manager of the Node.js Foundation. “This
release is committed to Long Term Support, which allows predictable long-term stability,
reliability, performance and security to the growing number of enterprise users that are
adopting Node.js as a key technology in their infrastructure.”
-->
"Node.js 프로젝트는 2015년 9월에 처음 제안한 타임라인에서 이 버전까지 놀랄만한 일을 이루었다."

<!--
To increase reliability of Node.js, there has been increased documentation and testing done
around Node.js v6 for enterprises that are using and looking to implement the platform.

Node.js release versioning follows the Semantic Versioning Specification, a specification for
version numbers of software libraries similar to dependencies. Under the Node.js’ [Long-Term
Support (LTS)](https://github.com/nodejs/LTS/), version 6 is now the “Current” release line
while version 5 will be maintained for a few more months. In October 2016, Node.js v6 will
become the LTS release and the LTS release line (version 4) will go under maintenance mode in
April 2017, meaning only critical bugs, critical security fixes and documentation updates
will be permitted. Users should begin transitioning from v4 to v6 in October when v6 goes
into LTS.
-->

Node.js의 신뢰성을 증가 시키기 위해서 플랫폼에서 구현을 찾고 사용하는 기업들을 위한 더 많은 문서와 테스팅이 Node.js 버전 6에 있습니다.

Node.js는 유의적 버전 명세를 따르고 있습니다.  Node.js release versioning follows the Semantic Versioning Specification, a specification for
version numbers of software libraries similar to dependencies. Under the Node.js’ [Long-Term
Support (LTS)](https://github.com/nodejs/LTS/), version 6 is now the “Current” release line
while version 5 will be maintained for a few more months. In October 2016, Node.js v6 will
become the LTS release and the LTS release line (version 4) will go under maintenance mode in
April 2017, meaning only critical bugs, critical security fixes and documentation updates
will be permitted. Users should begin transitioning from v4 to v6 in October when v6 goes
into LTS.

<!--
Additional Resources
* [Download version 6](https://nodejs.org/download/release/v6.0.0/)
* [Download version 4](https://nodejs.org/en/download/)
* [Technical blog with additional new features and updates](https://nodejs.org/en/blog/)
-->

추가 자원

* [다운로드 버전 6](https://nodejs.org/download/release/v6.0.0/)
* [다운로드 버전 4](https://nodejs.org/en/download/)
* [추가적인 새로운 기능과 업데이트들이 있는 기술 블로그](https://nodejs.org/en/blog/)

<!--
About Node.js Foundation
Node.js is used by tens of thousands of organizations in more than 200 countries and amasses
more than 3.5 million active users per month. It is the runtime of choice for
high-performance, low latency applications, powering everything from enterprise applications,
robots, API engines, cloud stacks and mobile websites.
-->

### Node.js 재단에 대해

Node.js는 200여 개국의 수만 개의 회사에서 사용되고 있으며 매달 350만 명 이상의 활성사용자가 존재하고
있고 엔터프라이즈 애플리케이션부터 로봇, API 엔진, 클라우드 스택, 모바일 웹사이트까지 전부 운영하는
고성능, 저지연 애플리케이션의 런타임입니다.

<!--
The Foundation is made up of a diverse group of companies including Platinum members Famous,
IBM, Intel, Joyent, Microsoft, PayPal and Red Hat. Gold members include GoDaddy, NodeSource
and Modulus/Progress Software, and Silver members include Apigee, AppDynamics, Codefresh,
DigitalOcean, Fidelity, Google, Groupon, nearForm, New Relic, npm, Opbeat, RisingStack, Sauce
Labs, SAP, StrongLoop (an IBM company), Sphinx, YLD!, and Yahoo!. Get involved here:
[https://nodejs.org](https://nodejs.org).
-->
재단은 플래티넘 회원사인 Famous, IBM, Intel, Joyent, Microsoft, PayPal, Red Hat과
골드 회원사인 GoDaddy, NodeSource, Modulus/Progress Software,
실버 회원사인 Apigee, AppDynamics, Codefresh, DigitalOcean, Fidelity, Groupon,
nearForm, New Relic, npm, Opbeat, RisingStack, Sauce Labs, SAP,
StrongLoop (IBM 소속), Sphinx, YLD!, Yahoo!를 포함한 다양한 기업으로 구성되었습니다.
참여하려면 [http://nodejs.org](http://nodejs.org)를 방문하세요.