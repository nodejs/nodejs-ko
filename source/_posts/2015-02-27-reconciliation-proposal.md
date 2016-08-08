---
category: articles
title: 화해 제안
author: mikeal
ref: Reconciliation Proposal
refurl: https://github.com/nodejs/node/issues/978
translator:
  - <a href="https://github.com/marocchino" target="_blank">marocchino</a>
---

<!--
A lot of questions have been coming our way about what a merger of the node.js
and io.js projects might look like. People in both projects want to know their
work won't be thrown away and that we can preserve the positive aspects of each
project.

This is a draft and will be continually updated and edited based on input from
the community. It is not an ultimatum to Joyent or The Node.js Foundation but
rather a collaboration point for the io.js community to produce a proposal for
merging.

This document uses the terms io.js and node.js to refer to those projects prior
to a merge and Node to refer to a future merged project.

While io.js is often used as a starting point this document treats a future
project under the foundation as a new organism made from the merger of each
project and not as an extension of only node.js or only io.js. The goal of the
merger should be a project that is actually greater than the sum these parts.
-->

node.js와 io.js 프로젝트를 어떤 식으로 통합 할 것인지 많은 질문을 받았습니다.
두 프로젝트에 참여하는 사람들은 작업이 쓸모없어지는 것은 아닌지, 어떻게 각
프로젝트의 좋은 점을 반영할지 등을 알고 싶어합니다.

이 문서는 초안이며 커뮤니티의 의견에 따라 수시로 업데이트되고 편집됩니다. 이
문서는 Joyent과 Node.js 재단에 대한 최종 의사는 아니지만 통합을 위한 제안을
여기에서 만들어 io.js 커뮤니티가 협력 할 부분을 명확히 하는 것에 목적이
있습니다.

이 문서에서는 통합 이전의 각 프로젝트는 io.js와 node.js라 하고 통합 된
프로젝트는 *Node*라 하겠습니다.

미래의 프로젝트가 io.js에서 시작되었다고 생각하는 경향이 있는데, 이 문서에서는
재단하에 놓인 새로운 프로젝트를 node.js나 io.js 중 *한쪽만의* 연장이 아니라 두
프로젝트의 통합을 통한 새로운 조직체로 취급합니다. 통합의 최종 목표는 단순한
합병이 아닌 더 *큰* 그림이 되어야 합니다.

## Technical Governance

<!--
The Node.js Foundation would adopt, as it's *Technical Governance Structure*
(which is distinct and seperate from the foundation governance structure), a
very simple structure which would ensure the following:

- Decision making autonomy from the foundation and its board.
- Ownership of its own governance and voting structure.

Because foundation bylaws are quite difficult to change and the TC wishes to
make continued iterative improvements to its structure it would be a mistake to
bake the entire governance structure as it exists today in to the foundation
bylaws.

As an initial agreed upon structure, beyond what is in the bylaws, the following
documents would be adopted from io.js.

- GOVERNANCE.md (TC, Voting, etc.)
- CONTRIBUTING.md (Collaborator policy, CoC, DCO, etc.)
- WORKING_GROUPS.md
- ROADMAP.md
-->

Node.js 재단은 **Technical Governance Structure**(재단 운영 조직에서 분리된
독립 조직)를 채용합니다. 이 재단은 다음 내용을 보장하는 아주 간단한 구조입니다.

- 재단과 재단의 회의의 영향을 받지 않고 자율적으로 의사 결정을 할 수 있다.
- 운영 소유권 및 투표 시스템을 가져야 한다.

재단의 규정은 변경이 매우 어렵고 TC는 조직 구조를 점진적으로 개선하고 싶기
때문에 현재 운영 구조를 그대로 가져오는 것은 큰 실수가 되리라 생각합니다.

규정 구조에 대한 합의의 초안으로 다음 문서를 io.js에서 가져올 것입니다.

- [GOVERNANCE.md](https://github.com/nodejs/node/blob/v1.x/GOVERNANCE.md) (TC, 투표 등)
- [CONTRIBUTING.md](https://github.com/nodejs/node/blob/v1.x/CONTRIBUTING.md) (기여 정책, CoC, DCO 등)
- [WORKING_GROUPS.md](https://github.com/nodejs/node/blob/v1.x/WORKING_GROUPS.md)
- [ROADMAP.md](https://github.com/nodejs/node/blob/v1.x/ROADMAP.md)

<!--
In addition to the definition of "collaborator" from CONTRIBUTING.md the list of
existing collaborators to io.js would also transfer.
The following changes would be made to these documents prior adoption:

Addition of TC members:
TJ Fontaine
Alexis Campailla
Julien Gilli
Addition of Collaborators:
James M Snell
Stephen Loomis
Michael Dawson
-->

덧붙여 [CONTRIBUTING.md](https://github.com/nodejs/node/blob/v1.x/CONTRIBUTING.md)에
있는 "collaborator" 항목의 기존 io.js 기여자들 역시 이관됩니다.

문서가 이전하면서 다음과 같은 변경이 이루어집니다.

- TC 멤버 추가:
  - TJ Fontaine
  - Alexis Campailla
  - Julien Gilli
- 기여자 추가:
  - James M Snell
  - Stephen Loomis
  - Michael Dawson

# 장기 지원

<!--
High level ideas about LTS are addressed in the io.js roadmap but it lacks
specifics because io.js has not yet produced a release that breaks compatibility
with prior releases which would cause it to begin executing on this plan. The
node.js project has an informal Long Term Support policy which is not formally
documented but it does produce patch releases for prior versions so we can
assume some policy does exist.
-->

장기 지원에 관한 고차원적인 아이디어는 io.js 로드맵에서 언급하고 있지만,
구체적이진 않습니다. 이는 아직 io.js가 이전 버전의 호환성을 깨뜨리는 릴리스를
하지 않았기 때문입니다. node.js 프로젝트는 비공식적인 장기 지원 정책을 가지고
있지만 공식 문서에 명시되지는 않습니다. 하지만 이전 버전을 위한 패치 릴리스를
만들고 있기 때문에 어떤 정책이 존재한다고 생각할 수 있습니다.

## LTS WG (Long Term Support Working Group)

<!--
The following is a draft charter for the LTS WG which would be added to WORKING_GROUPS.md.

The LTS WG is responsible for maintenance and releases of prior versions of Node.

Node produces patch releases of prior versions for as long as community members
are willing to maintain them. The LTS WG is responsible for when it no longer
has the contributions necessary to support a particular version.

The LTS WG's responsibilities are:
-->

*다음 문장은 장기 지원 워킹 그룹(이하 LTS WG)을 위한 선언의 초안이며
WORKING_GROUPS.md로 추가될 예정입니다.*

LTS WG는 Node 이전 버전의 유지 보수 및 릴리스에 책임을 집니다.

*Node*는 커뮤니티가 유지 보수를 하려 하는 한 이전 버전의 패치 릴리스를 만듭니다.
LTS WG는 특정 버전을 지원하기 위해 기여할 필요가 없을 때까지 책임이 있습니다.

LTS WG의 책임 범위는 다음과 같습니다.

<!--
- Authoring and backporting bug fixes, stability improvements, and other relevant changes to prior releases (not CURRENT or CANARY).
- Creation and maintenance of tools to help manage and automate backporting changes.
- Documentation and enforcement of policies to ensure the stability of patch releases.

Initial Members would include
-->

- 버그를 수정해 하위 버전으로 백 포트, 안정성 향상, 다른 관련 변경을 이전
  릴리스 버전에 적용(현재 버전과 Canary 제외).
- 관리 및 변경 백 포트 자동화 도구의 작성, 유지 보수
- 안정된 패치 릴리스를 보장하기 위한 정책과 문서화의 시행

초기 멤버에 추가

- Michael Dawson

<!--
Note that specifics around managing branches is left out of the
charter but is part of the responsibilities for the working group under the last
bullet point.
-->

*브랜치 관리 등 구체적인 것은 이 문서에는 포함하지 않았지만 워킹 그룹이 책임을
집니다.*

# 버전 통합

<!--
Because there is currently no overlap between io.js and node.js versions we can,
and in fact must, consider all versions of both projects as now being versions
of Node. If we did not we would unnecessarily break a large portion of the
community that depends on these versions.
-->

io.js와 node.js에 겹치는 버전 (v0.12.0 및 v1.1.0)는 없기 때문에, 두 프로젝트의
모든 버전을 *Node* 버전으로 할 수 있습니다. 이렇게 하지 않으면, 이 버전에
의존하는 커뮤니티의 상당 부분에 불필요한 혼란을 줄 것 입니다.

## 이전 릴리스

<!--
The following versions are considered "prior releases" and are under the control
of the LTS WG>
-->

다음 버전은 "이전 버전"으로 간주하고 LTS WG에서 관리합니다.

- 0.8.x
- 0.10.x
- 0.12.x

<!--
It should be noted that while 1.0+ releases follow semver versions prior to 1.0
did not and it is at the discretion of the LTS WG whether or not they would like
to take API additions in to 0.12.x and 0.10.x patch releases. However, backwards
incompatible changes cannot be made to these releases in following with the
existing policies of both node.js and io.js.
-->

1.0 이전 버전은 호환되지 않았지만, 1.0 이후 릴리스는 유의적 버전과 호환합니다.
LTS WG의 재량 하에 0.12.x와 0.10.x 패치 릴리스에 API를 추가할 수 있습니다. 그러나
하위 호환성이 없는 변경은 node.js, io.js 양쪽에 존재하는 정책을 준수하여 이
릴리스에서는 할 수 없는 것으로 합니다.

## 현재 릴리스

- 1.x

<!--
As it stands there are two CURRENT development lines: node.js 0.12.x and io.js
1.x. Development, in some form, will need to continue on both of these lines as
different users depending on each line. The question then becomes "which line do
we put in to LTS?"

In the last few months io.js has made huge gains in part due to the fact that it
aligned its current stable line of development with that of its dependencies.
That, along with a faster release cycle, has also brought many module authors in
to core and so the ecosystem is beginning to also align its current stable
development with that of core. This has ushered in a new era of collaboration
between projects and the larger community which Node should continue.

This does not, however, mean that 0.12.x is a "dead" line. Far from it, 0.12.x
and 0.10.x are still in use by many users and it will be the work of the LTS WG
to continue to ensure those users have a stable and supported platform.
-->

현재 node.js 0.12.x과 io.js 1.x 두 개의 *CURRENT* 개발 라인이 있습니다. 사용자가
존재하는 한 두 개발 라인 모두 계속할 필요가 있습니다. 문제는 "LTS(장기 지원)에
어느 라인을 넣어야 하는가?"입니다.

근 몇 개월동안 io.js는 현재 stable 개발 라인과 종속 라이브러리를 모두 동기화하는
커다란 성과를 이루었습니다. 더 빠른 릴리스 주기와 함께 많은 npm 모듈 저자들을
코어 내부에 흡수했고, 생태계가 코어에 맞추어 현재의 안정 개발과 함께하기
시작했습니다. 이것은 각 프로젝트와 더 거대한 공동체 간 협력의 새로운 시대를
열었고 *Node*도 이것을 계승할 것입니다.

하지만 이 말이 0.12.x는 "죽는다"는 것은 아닙니다. 0.12.x, 0.10.x는 지금도 많은
사용자가 사용하고 있으며, LTS WG는 이들이 안정적으로 지원되는 플랫폼을 계속
사용할 수 있도록 할 것입니다.

## 버전 번호가 없는 릴리스

<!--
CANARY ("next" V8 and any changes marked as major)

Along with the current stable line of development there should be a future line.
This line exists as a branch and non-versioned nightly builds for testing. It is
a testing ground for changes to Node that would necessitate bumping its major
version as well as for testing the CANARY version of V8.

Just as we have done with current stable, the "next" line of Node development
should align with that of its dependencies. This allows the project and its
users to easily test for performance regressions and potentially breaking
changes in those dependencies while active development is still occuring and
long before they land in a stable version of Node.
-->

CANARY ("다음" V8과 *주 버전*의 모든 변경)

현재 안정 버전의 개발과 함께 앞으로를 위한 버전의 개발도 이루어져야 합니다. 이
개발 라인은 브랜치와 버전 번호없이 테스트 용 나이틀리 빌드가 될 것입니다. 이는
*Node*의 변경을 테스트할 곳이 될 것이며, V8의 CANARY 버전 뿐만 아니라 주 버전을
올릴 때에도 필요할 것입니다.

현재 안정 버전에서 그랬던 것처럼 *Node*의 "다음" 개발 라인도 종속 라이브러리와
동기화해야 합니다. 이렇게 함으로써, *Node* 안정 버전이 나오기 훨씬 전부터
CANARY을 사용해 의존 라이브러리 프로젝트와 그 사용자는 쉽게 성능 회귀나 의존성
내의 하위호환성을 깨뜨릴 수 있는 변경이 있는지 테스트 할 수 있게 됩니다.

# 웹 사이트

<!--
The nodejs.org website would transfer to the Website WG and become the
responsibility of that working group. The website will be retooled similar to
iojs.org (gulp builds) so that it can be localized by the various language
communities from io.js.
-->

nodejs.org 웹 사이트는 웹 사이트 WG에 이관되어 워킹 그룹이 책임지게 될 것입니다.
이 사이트는 io.js의 여러 언어 커뮤니티에서 웹 사이트를 현지화 할 수 있도록
iojs.org(gulp에서 구축 된 사이트)와 비슷하게 재구성됩니다.

# 소셜 미디어

<!--
The social media accounts (Twitter, Facebook, etc) will transfer to the
Evangelism WG.
-->

소셜 미디어 계정(Twitter, Facebook 등)은 Evangelism WG에 이관합니다.

# Evangelism WG

<!--
This io.js WG will move to Node (pending a vote by the WG) and continue to
produce weekly updates, social media engagement, etc, for the Node project.
-->

이 io.js WG는 *Node*로 이관할 것입니다.(WG의 내부 투표가 끝나지 않아 보류 중)
*Node* 프로젝트를 위해 계속 주간 업데이트를 만들고 소셜 미디어를 통한 전파 등의
일을 하게 됩니다.

# i18n

<!--
All io.js language community working groups (32 individual teams by last count)
will vote to move to the Node project where they would continue to be endpoints
for community members to collaborate with each other in their language of choice
and produce localizations of project resources.
-->

모든 io.js 현지화 커뮤니티 WG(마지막으로 집계했을 때에는 32개 팀)는 Node
프로젝트로 이관 여부를 투표할 것입니다. 각 언어에서 서로 협조를 하며 계속
프로젝트 리소스를 지역화하게 될 것입니다.

io.js 한국 커뮤니티의 투표는
[nodejs/nodejs-ko#38](https://github.com/nodejs/nodejs-ko/issues/38)에서 진행 중입니다.
댓글로 의견을 달아주세요.

# 로드맵 WG

<!--
This io.js WG will move to Node (pending a vote by the WG) and continue to draw
in feedback from users and draft roadmap materials for consideration by the TC.
-->

이 io.js WG는 *Node*로 이관할 것입니다.(WG의 내부 투표가 끝나지 않아 보류 중)
사용자의 피드백을 계속 모으고 TC가 검토할 로드맵 자료의 초안을 작성합니다.

# Streams WG

<!--
This io.js WG will move to Node (pending a vote by the WG) along with
readable-stream and will continue to define and improve streams in Node.
-->

이 io.js WG는 *Node*로 이관할 것입니다.(WG의 내부 투표가 끝나지 않아 보류 중)
`readable-stream`과 함께 Node에서 Streams를 만들고 개선해 나아갈 것 입니다.

# Tracing WG

<!--
This io.js WG will move to Node (pending a vote by the WG) and continue to
improve the transparency ofNode applications.
-->

이 io.js WG는 *Node*로 이관할 것입니다.(WG의 내부 투표가 끝나지 않아 보류 중)
*Node* 애플리케이션의 투명성을 개선해 나아갈 것입니다.

# 빌드 WG

<!--
This io.js WG will move to Node (pending a vote by the WG) and continue to
maintain and improve the build infrastructure and produce Node builds.
-->

이 io.js WG는 *Node*로 이관할 것입니다.(WG의 내부 투표가 끝나지 않아 보류 중)
*Node*의 빌드 생성과 빌드를 위한 인프라 개선, 유지 보수를 계속해 나아갈 것입니다.
