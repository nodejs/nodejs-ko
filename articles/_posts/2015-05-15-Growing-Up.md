---
layout: post
title: Growing Up.
author: mikeal
ref: Growing-Up — Node &amp; JavaScript
refurl: https://medium.com/node-js-javascript/growing-up-27d6cc8b7c53
translator:
- <a href="https://github.com/freenice12" target="_blank">freenice12</a>
---

<!--
# Growing Up
io.js needs a foundation.
In 2012 things were going well for node.js. We had a thriving community, solid core contributions, and it was already clear that we were the fastest growing ecosystem in the world. Around this time a few people noted their concerns about the ownership of the project. Community had been driving the project quite successfully so when people raised these concerns myself and others considered them tin foil hat hand wavers and ignored them.
-->

# 성장하기
io.js는 재단이 필요합니다.

![](https://d262ilb51hltx0.cloudfront.net/max/1035/1*zlzhxvse_oNQwbGgLIzWlA.png)

2012년 node.js는 잘 진행되었습니다. 우리는 일정한 핵심 기여와 활발한 커뮤니티를 가지고 있었고, 세계에서 가장 빠르게 자라고 있었다고 확신했습니다. 최근 몇몇 사람들은 프로젝트의 소유권에 대한 그들의 걱정을 알렸습니다. 커뮤니티는 프로젝트를 성공으로 이끌어 왔고 나와 여러 사람의 걱정은 커졌습니다.

<!--
Cut to 2014. Nearly everyone close to core agrees that there is a big problem. We all have ideas about how to fix it but we can’t try them, because we don’t own it. Months later io.js is created to try out ideas that might bring more contributors and releases back to the project.
Those ideas worked. Open governance, liberal contribution policy, and regular releases did wonders for getting more contributors and improvements flowing in to the project.
We also created a project where the community contributed at every level. Working groups maintain the website, evangelism and even the streams implementation.
We consider io.js to be owned by the community. However, without a legal entity to own property it means that various io.js assets are in reality owned by individuals and companies. The domain name is owned by Fedor, the billing contact for the GitHub org is Colin, the keys used for signing the releases are owned by NodeSource, etc. With all the current owners acting in good faith this ownership isn’t an immediate problem, just as it wasn’t a problem for node.js in 2012, but the more successful we are the worse it could be, so this is something that keeps me up at night.
A number of companies support the io.js project and its community. Build resources are being donated by DigitalOcean, Rackspace, NodeSource, Linaro, Scaleway, Joyent and Voxer. As early as the first week of development members of the TC were paid to work on io.js fulltime by NodeSource, Strongloop, Voxer, and Walmart. The project is run by the community but we’ve always persisted on the good will of companies that stepped up to help out the project.
We’ve done a great job running the project but there’s a number of things we don’t do because we don’t have direct financial resources. Traditional marketing, public/analyst relations, and legal are untouched. In the early stages of a project none of this matters too much but as we grow it becomes a barrier to our continued success. We don’t benefit from this not being done. In fact, if we wait too long to do this the commercial interest around the project will fill this void and try to become the voice of the project.
-->

2014년. 거의 모든 사람이 핵심(core)을 종료하는 것에 동의했고 여기에 큰 문제가 있었습니다. 우리는 모두 어떻게 이 문제를 해결할지에 대한 아이디어가 있었지만, 시도할 수 없었습니다. 왜냐하면, 우리의 소유가 아니었기 때문입니다. 몇 달 후 io.js는 문제 해결의 아이디어를 시도해보기 위해서 만들어졌고 더 많은 기여자를 참여시키고 프로젝트를 배포했습니다.

![](https://d262ilb51hltx0.cloudfront.net/max/1126/1*yyWL2UQGCo7BbzsmryzlTg.jpeg)

이런 아이디어는 잘 먹혔습니다. 열린 참여, 자유로운 기여 정책 그리고 정기적 배포는 더 많은 기여자를 모으고 프로젝트를 개선하기 위한 것이었습니다.

우리는 그 커뮤니티의 모든 레벨에 기여한 프로젝트도 만들었습니다. 실행 그룹은 웹 사이트를 유지하고 전파하는 그리고 흐름을 구현하는 그룹입니다.

우리는 현실적으로 개인이나 회사가 소유한 io.js의 다양한 자산들을 커뮤니티 소유의 법인 없이 커뮤니티 소유가 되는 것을 고려하고 있습니다. 도메인 이름은 Fedor의 소유이고, GitHub org를 위한 결제 계약은 Colin, 배포를 결정하는 키를 가진 것은 NodeSource인 등의 이유 때문입니다. 이 문제들이 2012년의 node.js의 문제가 아니었던 것처럼 현재의 모든 소유자가 선의로 행동하는 이 소유권들은 급한 문제가 아닙니다. 더 좋은 결과를 얻고 싶지만, 이 문제는 더 나빠졌고, 나의 밤잠을 설치게 했습니다.

커뮤니티와 많은 회사가 io.js 프로젝트를 지원했습니다. 빌드 자원은 DigitalOcean, Rackspace, NodeSource, Linaro, Scaleway, Joyent와 Voxer가 기부하고 있습니다. 일찍이 TC의 개발자들이 NodeSource, Strongloop, Voxer와 Walmart에서 io.js만을 위해 일하기 위해 고용되었습니다. 프로젝트는 커뮤니티에 의해 운영되지만 우리는 계속 회사의 도움으로 프로젝트를 진행해 나갔습니다.

우리는 프로젝트 운영이라는 좋은 일을 마쳤지만, 우리가 하지 못한 많은 것들이 있습니다. 우리는 직접적인 재정자원을 가지지 못했기 때문입니다. 전통적 마케팅, 공개적/분석적 관계, 그리고 법적으로 모두 그대로입니다. 프로젝트 초기에 이런 문제들은 거의 없었지만 우리는 이 문제들을 우리의 계속된 성공의 장벽으로 키웠습니다. **우리는 이 끝나지 않은 프로젝트에서 이익을 추구하지 않습니다.** 사실 우리가 너무 오랫동안 이 문제에 대해 기다린다면 프로젝트를 둘러싼 상업적 관심들은 프로젝트의 주인이 되려고 하거나 무산될 수 있습니다.

<!--
io.js needs a home. A neutral organization that can support a project still governed by its community.
Last July I spent time looking at a variety of foundations with all kinds of structures and support. I brought what I found to the other core contributors and recommended that we go with the approach the Linux Foundation recommends for projects it sets up through the Collaborative Projects Initiative.
The key is autonomy. The community runs the project, makes the technical decisions, runs the releases, etc. Everything io.js does now will continue to be handled by the community.
We already know how powerful and important autonomy is, it’s the basis of the io.js working group model.
It takes money to keep a foundation alive and that money will have an influence on the foundation, there’s no way around that. The question is: what will the scope of that influence be? If we try to ignore this influence and don’t create a structure around it we open ourselves up to informal influence that could be wide in scope. Instead, it’s better to have the donors to the foundation collaborate with each other through representation on the foundation’s Board of Directors.
The board oversees the finances of the foundation. They also take a direct role in managing the marketing and legal. This means the marketing message won’t be exclusive to a single business interest in the foundation and also ensures that any legal barriers to adoption are widely understood and addressed.
All technical decisions, including releases, are governed by the contributors with autonomy from the Board. A member of the technical side also sits on the Board to convey the needs of the project to the Board.
-->

io.js는 집이 필요합니다. 그 집은 여전히 커뮤니티에 의해 운영되는 프로젝트를 지원할 수 있는 중립적 기관입니다.

작년 7월 나는 모든 종류의 structures 그리고 지지와 함께 다양한 재단을 찾기 위한 시간을 보냈습니다. 내가 얻은 것은 다른 핵심 기여자들과 Linux Foundation의 Collaborative Projects Initiative를 통해 프로젝트를 준비하라는 조언이었습니다.

![](https://d262ilb51hltx0.cloudfront.net/max/1056/1*KDEbsojgiovF6hhSPmwcww.png)

핵심은 자치권입니다. 커뮤니티는 프로젝트를 운영하고 기술적인 결정을 내리고, 배포하는 등의 일을 합니다. io.js의 모든 것은 앞으로도 커뮤니티에 의해 관리 될 것입니다.

우리는 자치권이 얼마나 강력하고 중요한지 이미 알고 있습니다. 이 자치권은 io.js [실행 그룹 모델](https://github.com/nodejs/node/blob/master/WORKING_GROUPS.md)의 근간입니다.

재단을 유지하려면 돈이 필요하고, 돈은 재단에 영향을 줄 수 있습니다. 이 외에는 별다른 방법이 없습니다. 궁금한 점은, 그 영향력의 범위가 어느 정도일까 하는 것입니다. 만약 우리가 이 영향력을 무시하거나 이 영향력 주변에 구조물을 건설하지 않는다면, 더 넓은 영역에서의 비공식적인 영향을 받을 수 있습니다. 대신에, 재단에 협력하겠다는 표현을 한 재단 이사회의 이사를 기부자로 갖는 방법이 더 좋을 수 있습니다.

이사회는 재단의 이사회를 관리합니다. 또한, 내규와 마케팅을 담당할 직접적인 역할을 하고 있습니다. 이 말은 재단이 관심 있는 단일 사업을 독점하겠다는 말도 아니고, 어떠한 법적 장벽도 이해하고 해결할 수 있도록 해야 한다는 말입니다.

배포를 포함한 모든 기술적 결정은 이사회로부터 나온 자치권을 가진 기여자들에 의해서 관리됩니다. 이사회에서 기술을 담당하고 있는 구성원들은 프로젝트의 요구를 이사회로 전달하기도 합니다.


<!--
In early February Joyent announced that they would be putting the node.js assets into a foundation. That foundation is nearly formed now with support from the Linux Foundation and has the structure I’ve detailed above.
A little over a month ago the Linux Foundation, along with people from node.js and io.js, began working on a governance model and contribution policy that might bring the projects back together under the new foundation. The governance, working groups, development and convergence policies are now ready.
The policies of the foundation are designed to preserve the progress we’ve made in io.js. They take the liberal collaborator models and open governance of io.js almost verbatim but also back it up with a neutral organization the can own the assets administered under those policies.
-->

---

2월 초, Joyent는 node.js 자산을 재단에 포함하겠다고 알렸습니다. 그 재단은 지금 Linux Foundation의 지원을 받고 위에 설명한 대로의 구조를 가지고 있는 형태입니다. 

얼마 전, node.js, io.js와 어울리던 Linux Foundation이 관리 모델과 새로운 재단으로 프로젝트들을 다시 가져오는 기여 정책위에서 움직이기 시작했습니다. [관리](https://github.com/joyent/nodejs-advisory-board/blob/master/governance-proposal/TSC-Charter-raft.md), [실행](https://github.com/joyent/nodejs-advisory-board/blob/master/governance-proposal/TSC-Project-Lifecycle.md) [집단들](https://github.com/joyent/nodejs-advisory-board/blob/master/governance-proposal/WG-Merger.md), [개발](https://github.com/jasnell/dev-policy/blob/master/README.md) [통합](https://github.com/jasnell/dev-policy/blob/master/convergence.md)정책들은 준비되어있습니다.

이 재단의 정책들은 우리가 만든 io.js를 진행할 수 있게 보호하도록 설계되었습니다. 그들은 자유 기여 정책을 채택했고, 글자 그대로의 io.js의 열린 지배 구조를 채택했습니다. 그뿐만 아니라 이 재단은 위 정책 아래서 관리 자산을 소유할 수 있는 중립적인 기관과 함께 지원합니다.

---

<!--
So, we need a foundation. One has been setup and wants us to join. It has, in my opinion, an ideal structure for io.js. As an added bonus we get to end the split and confusion in the community who are still torn between io.js and node.js. We get all of this and we get to keep our governance, release process, and working groups intact. If we choose to.
-->

그래서 우리는 조직되어 있고 우리가 참여하길 바라는 재단이 필요합니다. 개인적인 생각으로 io.js를 위한 이상적인 구조로 되어 있으면 좋겠습니다. 추가로 여전히 양분된 node.js와 io.js 커뮤니티의 분열과 혼란이 종식되기를 바랍니다. [만약 선택할 수 있다면](https://github.com/nodejs/io.js/issues/1664), 우리는 이 모든 것을 얻고 싶고 관리 방법, 배포 과정, 그리고 실행 그룹을 온전히 지켜내고 싶습니다.

![](https://d262ilb51hltx0.cloudfront.net/max/880/1*TA2IVRqUhiouhitlS9fRLw.gif)

