---
layout: post
title: node.js와 io.js가 손잡을 수 있도록 도와주세요.
author: mikeal
ref: Help us reconcile node.js and io.js — Node &amp; JavaScript
refurl: https://medium.com/node-js-javascript/help-us-reconcile-node-js-and-io-js-c060a9ec1bd4
translator:
- <a href="https://github.com/harryoh" target="_blank">Harry Oh</a>
---

<!--
# Help us reconcile node.js and io.js
We’re closer than ever to coming together but we need your help.

For the last few weeks people from the Linux Foundation, node.js and io.js have been working to draft an open governance structure that can reconcile the projects and working groups together in the new Node.js Foundation. We have now entered a critical period of community review and iteration.

I’ll lay out the relevant documents and links here. Please comment on these issues where appropriate and propose new Pull Requests to the documents.

# Project Lifecycle
The Foundation must include provisions for more projects than just core. Today, io.js alone has around 50 Working Groups with around 300 members across those groups. This document will define the structure those Working Groups would operate under.

In io.js we have no resources (money, legal, etc) and so we could be very liberal about spinning up new working groups and projects because it didn’t cost us anything. With a foundation there are resources afforded to each project and so it makes sense that the board would want more restrictions in place to protect those resources. However, much of io.js’ success has been in how liberally we’ve been able to break work out in to Working Groups so it’s going to take some work to strike this balance.

I have a [Pull Request](https://github.com/joyent/nodejs-advisory-board/pull/33/) open for comment but it still needs quite a bit of work and additional feedback from the community.

# TSC Charter
The TSC (Technical Steering Committee) is the primary governance body of what would be a reconciled io.js/node.js platform. For those familiar with io.js this would be the new TC (Technical Committee) and would presumably adopt the existing io.js TC members as well as core committers from node.js

[The TSC Charter](https://github.com/joyent/nodejs-advisory-board/blob/master/governance-proposal/TSC-Charter-Draft.md) will end up being approved by the board. That means that certain rights (like technical decision making autonomy from the foundation’s board) should be in it. Changing this document requires board approval which means that this document can be difficult to change once formalized.

Unlike io.js where we have a mix of current TC process along with a solid governance structure in one document this charter should be as minimal as possible while also guaranteeing freedom and open governance. We want to continue to iterate on the TC process, as io.js has been for the last 4 months, and if we overload this document with the specifics of that process it will become quite difficult. We need help identifying areas and language improvements we can make in order to walk this line.

# TSC Policy Draft
[This document](https://github.com/joyent/nodejs-advisory-board/blob/master/governance-proposal/TSC-Policy-Draft.md) is what the Foundation’s Board of Directors will ratify as the direction, values, and scope of what the TSC is doing.

In the foundation model that is being created there is a wall between the “Foundation,” governed by the Board of Directors and appointed executives, and the “Project(s)” which are governed by the TSC. This document describes what the board is granting, with some direction and requirements (like openness) to the TSC.

Certain matters are not left to the TSC (like legal issues) and are handled by the Foundation so they are not included in this document.
-->

# node.js와 io.js가 손잡을 수 있도록 도와주세요.
우리는 서로 어느 때보다도 더 가까워졌지만, 당신의 도움이 필요합니다.

지난 몇 주간 리눅스 재단 사람들과 Node.js 그리고 io.js는 프로젝트들과 작업그룹들이 서로 조화로울 수 있는 개방된 관리 체계 구조의 초안을 작성해 왔습니다. 현재는 그 내용을 검토하는 중요한 단계에 와 있습니다.

저는 그와 관련된 문서를 만들고 이곳에 링크할 것입니다. 적절한 이슈에 의견을 적어주시고 그 문서에 새로운 Pull Request도 제안해 주시기를 부탁합니다.

# 프로젝트 생명주기
재단에서는 핵심만을 위한 규정보다는 프로젝트들에 관한 규정을 더 포함해야 합니다. 오늘날 io.js는 홀로 약 300여 명의 회원이 있는 50여 개의 작업그룹을 가지고 있습니다. 이 문서에 그 작업그룹들이 운영될 구조를 정의할 것입니다.

io.js에서 우리는 아무런 자원(돈, 법률 등)을 갖지 않습니다. 비용이 들지 않기 때문에 우리는 새로운 작업그룹과 프로젝트들을 활성화하는 데에 매우 자유로울 수 있습니다. 보통 한 재단에서는 프로젝트별로 충당하는 자원이 있고 이사회는 이러한 자원을 보호하기 위해서 더 많은 제약을 요구하게 됩니다. 그러나 io.js의 성공은 많은 부분 아무 제약 없이 자유롭게 작업그룹 내에서 일을 쉴 수 있었다는 것에 기인합니다. 따라서 이 균형을 찾기 위한 작업이 좀 필요할 것입니다.

의견수집을 위한 개방된 [Pull Request](https://github.com/joyent/nodejs-advisory-board/pull/33/)가 있지만, 커뮤니티로부터 여전히 많은 작업과 추가적인 의견이 필요합니다.

# TSC 협약
TSC(기술 운영 위원회)는 단일화된 io.js와 node.js 플랫폼의 관리의 주요한 주체가 될 것입니다. io.js에 익숙한 사람들에게는 새로운 기술위원회가 될 것이며 아마도 node.js의 핵심 커미터들 뿐만 아니라 기존의 io.js TC 회원들도 받아들이게 될 것입니다.

[TSC 협약](https://github.com/joyent/nodejs-advisory-board/blob/master/governance-proposal/TSC-Charter-Draft.md) 은 결국 이사회의 승인을 받게 될 것입니다. 그것은 특정한 권리(재단 이사회로부터 기술적인 의사결정의 자율성과 같은)가 그 안에 있어야 한다는 것을 의미합니다. 이 문서의 수정을 위해서는 이사회의 승인이 필요한데 이는 한번 공식화되면 변경이 어렵다는 것을 의미합니다.

하나의 문서에 견고한 관리체계와 함께 현재의 TC 프로세스가 혼재되어있는 io.js와는 달리, 이 협약은 자유와 개방된 관리를 보장하는 동시에 가능한 최소한의 내용을 포함해야 합니다. 우리는 io.js가 지난 4개월간 해왔던 것처럼 TC 프로세스를 계속 반복하길 원합니다. 그리고 우리가 이 문서에 프로세스와 관련된 세세한 규정을 지나치게 많이 담는다면, 그것은 꽤 곤란하게 될 것입니다. 우리는 이 선을 지키기 위해 지역의 식별과 언어를 개선하는 데 도움이 필요합니다.

# TSC 정책 초안
[이 문서](https://github.com/joyent/nodejs-advisory-board/blob/master/governance-proposal/TSC-Policy-Draft.md)에서 재단 이사회가 TSC가 할 방향과 가치 그리고 범위를 비준할 것입니다.

거기서 만들어진 재단의 모델에는 이사회와 선임된 경영진에 의해서 관리되는 "재단"과 TSC에 의해 관리되는 "프로젝트" 사이에 벽이 있습니다. 이 문서는 이사회가 TSC에게 인정해주는 부분, 그리고 TSC 방향성과 요구사항(개방성 같은)들을 서술합니다.

일부 문제(법적인 문제같은 것들)는 TSC에게 남아있지 않고 재단에 의해 다루어지므로 이 문서에 포함되지 않습니다.

