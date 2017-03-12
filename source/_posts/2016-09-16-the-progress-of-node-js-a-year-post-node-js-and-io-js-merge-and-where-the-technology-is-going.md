---
category: articles
title: Node.js의 1년 동안의 진행 상황과 Node.js 와 io.js의 병합 및 기술의 발전 추세
author: Node.js Foundation
ref: The Progress of Node.js a Year Post Node.js and io.js Merge and Where the Technology is Going
refurl: https://medium.com/@nodejs/the-progress-of-node-js-a-year-post-node-js-and-io-js-merge-and-where-the-technology-is-going-f168ce9ec8ee#.9cgrhy686
translator: pineoc
---

어제, Node.js Interactive Europe의 기조 강연에서 커뮤니티 핵심 회원들은 커뮤니티의 놀라울 정도로 빠른 성장과 Node.js v.7 및 Node.js v8의 다음 단계를 공유했습니다.

Node.js Foundation의 리더십 팀은 Node.js 커뮤니티의 다양성과 포괄성을 향상시키는 방법을 살펴 보았습니다.

![](https://cdn-images-1.medium.com/max/1600/1*wFty3fycao2a-Bo35hk-Gg.jpeg)
``Ashley Williams의 Node Together 기조연설``

1 년 반 만에 Node.js는 커밋 액세스 권한을 가진 14 명의 기여자에서 87 명의 기여자로 성장했습니다. 약 1 년 반 전에는 전체 라이프 사이클에 걸쳐 681 명의 기여자만 있었습니다. 이제 참여자 목록은 1084 명을 상회합니다.

![](https://cdn-images-1.medium.com/max/1600/0*Bbe-xi_I0HCDvyud.)
James Snell의 기조 연설에서 Node.js 커뮤니티의 성장과 Node.js v7 및 Node.js v8에 대한 계획이 발표되었습니다.


작년 거의 똑같은 시간 (부끄럽게도 단 2일 동안)에 Node.js와 io.js를 [Node.js v4](https://nodejs.org/en/blog/announcements/foundation-v4-announce/)에 병합했습니다. 그 즈음에 우리는 Node.js 플랫폼의 장기 지원 계획 ([Long Term Support Plan](https://github.com/nodejs/LTS))을 확립했습니다. , 이 계획은 다음 두 가지 고유한 릴리스 라인으로 구성됩니다:

- Stability (항상 짝수): 주요 업그레이드 없이 비교적 안정적으로 머물러야하는 기업 또는 생산을 필요로하는 기업의 안정성에 중점을 둡니다.
- Progress (항상 홀수): 실험 테스트 및 향후 개발에 중점을 둡니다.


점점 더 많은 기업들이 데스크톱 애플리케이션, 모바일 웹 사이트, API 엔진 또는 클라우드 스택에서 Node.js를 사용합니다. 이러한 성장으로 운전자가 [Uber](https://nodejs.org/static/documents/casestudies/Nodejs-at-Uber.pdf)의 승객과 연결하거나 우주를 탐험할 때 [우주 비행사의 안전](https://nodejs.org/static/documents/casestudies/Node_CaseStudy_Nasa_FNL.pdf)을 보장할 수 있는지 여부에 관계없이 프로덕션 환경에서 앱을 실행하기 위한 안정적인 플랫폼이 필요합니다.


동시에 Node.js는 인공 지능, 기계 학습 및 로봇과 같은 새로운 개발 영역에서 더욱 두각을 나타내고 있습니다. 이러한 환경은 실험을 요구하고 개발자가 응용 프로그램을 만드는 방법을 변경합니다. 진행 릴리스 라인을 통해 보안, 성능 및 기능을 향상시킬 수 있으며 코어를 중단하지 않고 테스트 할 수 있습니다.

다음은 출시와 공동체에서 일반적으로 기대되는 사항을 요약한 것입니다.

### 언어 지원을 통한 지속적인 개선

Node.js (Node.js v7)의 다음 릴리스에는 메모리와 관련된 성능 향상에 중점을 둔 [JavaScript Engine V8 5.4](http://v8project.blogspot.nl/)가 함께 제공됩니다.

Node.js 프로젝트는 Node.js 환경이 쉬운 작업이 아닌 사용자의 요구에 부응할 수 있도록 새로운 언어 기능에 어떻게 대처하고 적응하는 것이 가장 좋은지 계속 작업하고 있습니다. 토론의 주요 기능은 다음과 같습니다 : Promises (Node.js 디버깅과 호환되는 약속 만들기 및 약속과 호환되는 Node.js API 만들기), async의 await 그리고 추가적인 ES6 모듈을 지원합니다.

Node.js 프로젝트는 새로운 JavaScript 언어 기능이 Node.js 사용자의 요구 사항을 충족하는지 확인하기 위해 TC-39를보다 효과적으로 활용하는 방법을 모색하고 있습니다.

### Node.js를 둘러싼 모듈 생태계와 그 안정성

Node.js v7이 다음 주 베타 버전으로 바뀝니다. 이것은 버전 테스트에 더 많은 사람들을 끌어 들이기위한 목적으로 Node.js의 첫 번째 베타 버전입니다. 이렇게하면 v7 릴리스 이전에 중요한 변경 사항을 되돌릴 필요가 없도록합니다.

이 릴리스는 모듈 생태계에서도 중요합니다. 모듈은 Node.js 생태계에 필수적이며 지난 4년 동안 기술이 두 배로 늘어난 주요 이유 중 하나입니다. [Module Counts](http://www.modulecounts.com/)에 따르면 Node.js 생태계는 가장 크며 또래 중에서 가장 빠르게 성장하고 있습니다. (참고 : npm 저장소의 일부는 Node.js 모듈을 위한 것이 아니며 자바 스크립트 모듈로 포함되어 있지만 사자 공유는 Node.js 입니다.)

모듈 안정성의 앞면에서 Node.js 프로젝트는 생태계에서 가장 종속적인 Node.js 모듈 중 68 개를 식별하고 [Goldmine (citgm) Canary](https://github.com/nodejs/citgm)을 사용하여 Node.js에서 업데이트가 발생하면 버전 관리, 모듈은 중단되지 않습니다.

Citgm은 Node.js 생태계에서 다양한 모듈의 단위 테스트를 자동화하는 스모크 테스팅 유틸리티입니다. 생태계와 노드 코어 자체에 걸친 모든 종류의 퇴행을 찾아내는 엄청난 성공을 거두었습니다.

### Adopting Web Standards

To keep up with the changing needs of the web, the Node.js project will be including WHATWG URL parsing — standardizing parsing to be the same in Node.js as it is on the browser; improved HTTP 1.1 spec compliance for better input validation and enhanced security, and future support for HTTP/2.

### Node.js Everywhere

Node.js has historically been a good fit for the IoT space as it is great at single processes and has a small memory footprint. There’s incredible growth opportunity for Node.js in this area and the Node.js project is working closely with members of the IoT and Electron communities to make embedding Node.js easier.

### Continued Growth Internally for VM Neutrality and API Development

The ultimate goal of Node.js is to become fully VM agnostic. The first major step in this areas has been Microsoft getting Node.js to run on Chakra. There is working being done to create a VM neutral ABI and a prototype is currently available.

### Inclusivity is Needed to Create Diversity

Node.js is working hard to become a more diverse and inclusive community. Diverse ecosystems are better for the community and better for the platform. They allow people to learn and grow from others, and be exposed to perspectives other than their own. So how do we create diversity in the Node.js community?

A key benefit of Node.js is that it is relatively easy to learn. The barriers to entry are not in understanding how the technology works, but rather in creating inclusive environments where people feel valued and can join in and grow their involvement over time. Node Together, an initiative launched this year, showed that in creating an inclusive environment, underrepresented groups can join, learn and flourish within our community.

The Node.js Foundation is teaming up with experts in the field to better understand how to actively diversify the makeup of the Node.js community. This initiative is very serious to the growth and future of the community.

If you were not able to see the keynotes yesterday, tune in today at 4:00pm CEST/10am EST to see the remaining keynotes on the state of npm and Express. In addition, all keynotes as well as sessions are being recorded and will be available soon on the Node.js Foundation’s YouTube page here.

*This article was updated September 26,2016 with a few changes to the API development section, improved language support and modular section.
