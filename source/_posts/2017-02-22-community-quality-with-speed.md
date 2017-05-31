---
category: articles
title: Node.js - 속도를 동반한 품질
author: Michael Dawson and Myles Borins
ref: Node.js - Quality with Speed
refurl: https://nodejs.org/en/blog/community/quality-with-speed
translator:
- <a href="https://github.com/outsideris" target="_blank">Outsider</a>
---

<!--
# Node.js - Quality with Speed

One of the key tenets of the Node.js community is to allow change
at a rapid pace in order to foster innovation and to allow Node.js
to be used in a growing number of use cases.

At the same time the community values quality.  Newer versions of
the runtime must be as good or better than earlier versions and must
not un-intentionally break existing applications.

Instead of trading off one for the other, the community looks for the path
that allows us to maintain our rate of change while ensuring the
required level of quality.

Many of the activities undertaken by the community over the last year
are in support of this goal.

This is our take on how these activities fit together.
-->

# Node.js - 속도를 동반한 품질

Node.js 커뮤니티의 핵심 신조 중 하나는 혁신을 촉진할 수 있도록 빠른 속도로 변경할 수 있게 하고
Node.js가 점점 많아지는 사용 사례에서 사용될 수 있게 하는 것입니다.

커뮤니티는 동시에 품질에도 가치를 두고 있습니다. 새로운 버전의 런타임은 이전 버전만큼 좋거나
더 나아야 하고 의도치 않게라도 기존 애플리케이션을 깨뜨리지 않아야 합니다.

커뮤니티는 어느 한 쪽도 희생하는 일 없이 필요한 품질 수준을 지키면서 변경 속도를 관리할 방법을
찾고 있습니다.

작년 커뮤니티가 진행한 많은 활동은 이러한 목적 아래 이루어졌습니다.

이 글은 우리가 이러한 활동을 어떻게 어우러지게 하였는지를 설명합니다.

<!--
# Key strategies

Several key strategies are in place to build the safety
net in order to enable change/innovation while maintaining
quality.  These include:

* Different release types
* Change flow processes
* Enhancement Proposal process
* Automation and Testing
  * Functional Tests
  * Module Testing
  * Stress Testing
  * Platform/OS coverage
  * Development Workflows
* Performance Benchmarks
* Tools
-->

# 핵심 전략

품질을 유지하면서 변화와 혁신을 할 수 있게 하는 안전망을 만드는 다음과 같은
여러 가지 핵심 전략이 있습니다.

* 다양한 릴리스 타입
* 변경 흐름 과정
* 강화된 제안 과정
* 자동화와 테스트
  * 기능 테스트
  * 모듈 테스트
  * 부하 테스트
  * 플랫폼/OS 커버리지
  * 개발 작업 흐름
* 성능 벤치마크
* 도구

<!--
# Release Types

The Node.js project maintains 3 key types of releases
* Nightlies
* Current
* LTS

Having different release types allows innovation/change
to flow rapidly into Nightly builds where we can get
early feedback on upcoming changes.
When ready, these changes then transition
to Current and LTS releases in a more controlled manner,
such that the level of quality/stability increases at
each level.
-->

# 릴리스 타입

Node.js 프로젝트는 3가지 릴리스 타입을 관리하고 있습니다.

* 야간 버전
* 현재 버전
* LTS

여러 가지 릴리스 타입을 가짐으로써 다가올 변경사항에 관해 빠른 피드백을 얻을 수 있는
야간 빌드에서 빠르게 혁신과 변경을 할 수 있습니다. 준비되면 각 수준에 맞게 품질과 안정성을
맞추는 등 더 제어된 방법으로 이러한 변경사항을 현재 버전과 LTS 릴리스에 적용합니다.

<!--
## Nightlies

These are built from master and contain the very latest changes
that have been landed. If you want to try out the bleeding edge
these are the binaries to use.  There is no additional testing
on these releases, however, the standard Node.js unit tests are
run for each change landed so these will most often be usable.
-->

## 야간 버전

master에서 빌드하고 아주 최신 변경사항을 포함하고 있습니다. 최신 버전을 사용해 보고자 한다면
이 바이너리를 사용하면 됩니다. 이 릴리스에는 추가적인 테스트는 진행하지 않지만, 변경사항이
생길 때마다 표준 Node.js 유닛 테스트를 실행하므로 대부분은 사용하기 편할 것입니다.

<!--
## Current

Changes which have landed in master are backported to Current
on a regular basis. In general all changes that land in master
will be backported to Current, however there may be a lag if
there are specific concerns or for larger changes where the community
believes more soak time is required.  One key exception is
that semver breaking changes will not be backported until the
next major version (ex 5 -> 6).  This includes v8 and other
components such that the expectation is that an application/module
written to run on a major level will continue to do so.

These releases are documented in the changelog so
there is more visibility with respect to the changes in each release.
Current releases are created roughly every 1-2 weeks.

In addition to the the regular Node.js unit tests, CITGM (see
later sections) is run on Current releases.

If you want to try out the latest with a reasonable expectation
that your application will continue to run, these are the releases
to use.
-->

## 현재 버전

master에 들어온 변경사항은 정기적으로 현재 버전에 백포트 됩니다. 보통은 master에 들어온
모든 변경사항이 현재 버전으로 백포트 됩니다만 어떤 문제가 있거나 큰 변경사항이라 커뮤니티가 확인하는데
더 많은 시간이 필요하다고 판단한 경우 지연될 수도 있습니다. 주된 예외사항 중 하나는 semver 호환성이
깨진 변경사항은 다음 주 버전까지는 백포트되지 않습니다.(예시 5 -> 6) 여기에는 v8이나 주요 수준에서
실행되도록 작성된 애플리케이션이나 모듈이 계속해서 실행되어야 하는 다른 컴포넌트도 포함됩니다.

이 릴리스는 변경사항에 기록되므로 각 릴리즈마다 변경사항을 확인할 수 있습니다. 현재 버전 릴리스는
보통 1~2주마다 진행됩니다.

현재 버전 릴리스에서는 Node.js 표준 유닛 테스트뿐만 아니라 CITGM도 실행됩니다.(뒷부분 참고)

작성한 애플리케이션이 수긍할 만한 수준 내에서 최신 버전으로 실행되길 원한다면
이 릴리스를 사용하면 됩니다.

<!--
## LTS

Once changes have been proven in the Current stream, they are candidates
for the LTS streams.  In the first stage of LTS (Active)
changes are limited to:

* Bug fixes
* Security updates
* Non-semver-major npm updates
* Relevant documentation updates
* Certain performance improvements where the risk of
  breaking existing applications is minimal
* Changes that introduce large amount of code churn where
  the risk of breaking existing applications is low and
  where the change in question may significantly ease the
  ability to backport future changes due to the reduction in diff noise.
-->

## LTS

현재 버전에서 변경사항이 입증되었다면 LTS 버전의 후보가 됩니다. (활성) LTS의 첫 단계에서 변경사항은 다음으로 제약합니다.

* 버그 수정
* 보안 업데이트
* semver 주버전이 아닌 npm 업데이트
* 적절한 문서 업데이트
* 기존 애플리케이션을 깨뜨릴 위험이 거의 없는 일부 성능 개선
* 많은 양의 코드가 포함되었지만, 기존 애플리케이션을 깨뜨릴 위험이 적거나 변경사항을
  어지럽히지 않기 때문에 나중에 변경사항을 백포트 하기 쉽게 만들어 주는 변경사항

<!--
Further, in the second stage of an LTS release (Maintenance), only
**critical** bugs and **critical** security fixes will be included.

Like Current releases, CITGM (see
later sections) is run on LTS releases.  In addition we also
track performance through nightly benchmarks reported on
[benchmarking.nodejs.org](https://benchmarking.nodejs.org) (See later sections).

You can read more about the LTS releases [here](https://github.com/nodejs/lts).

If you want the best level of stability/quality for your production
applications these are the releases to use.
-->

게다가 (유지보수) LTS의 두 번째 단계에서는 **중요한** 버그와 **중요한** 보안 수정사항만
포함될 것입니다.

현재 버전 릴리스처럼 CITGM(뒷부분 참고)는 LTS 릴리스에서도 실행됩니다. 그리고 매일 밤
벤치마크 테스트로 보고되는
[benchmarking.nodejs.org](https://benchmarking.nodejs.org)로(뒷부분 참고)
성능도 추적합니다.

[여기서](https://github.com/nodejs/lts) LTS 릴리스에 관해 더 자세히 볼 수 있습니다.

프로덕션 애플리케이션에서 안정성과 품질을 최고 수준으로 유지하고 싶다면 이 릴리스를 사용하세요.

<!--
# Change flow processes

We've already touched on this in the discussion on the different release
types but we'll expand on this strategy here.

The main idea is that as changes flow from Nightlies, to Stable, to LTS
Active, to LTS Maintenance we increase the following:

* scrutiny
* time

Changes going into master are well reviewed and time is allowed
(minimum 48 to 72 hours) for as many community members as possible
to comment and review. However, as we all know, some problems
will still get through.
-->

# 변경 흐름 과정

여러 가지 릴리스 타입을 얘기하면서 이 부분을 설명했지만, 여기에서 이 전략을 좀 더 얘기할 것입니다.

핵심 아이디어는 변경사항이 야간 버전, 안정 버전, LTS 활성 버전, LTS 유지보수 버전으로 흘러가면서
다음의 기회를 늘리는 것입니다.

* 검증
* 시간

master에 들어간 변경사항은 제대로 리뷰를 받은 것이고 커뮤니티 사람들이 의견이나 리뷰를 할 수 있도록
충분한 시간(최소 48~72시간)이 보장됩니다. 하지만 우리가 알고 있듯이 여전히 문제가 생길 수 있습니다.

<!--
Before changes are pulled into Current from the Nightly builds, they will have
spent more time in master where intermittent issues may surface in the
ongoing regressions runs and this provides time where users may more fully
exercise the release and report issues.  Further, there is an additional
review/sanity check that they are not breaking as they are pulled over to
Current.

Similarly, before changes are pulled into an LTS update release,
they must have been in a
Current release version for at least a week, and are often left longer.
This provides additional time where users may more fully
exercise the changes and report issues.  In addition, changes are more
carefully reviewed as they are pulled into LTS, again reducing the
chance that unintentional breaking changes make it through.  As an LTS
release ages, particularly once it reaches maintenance, the scope of
changes that will be pulled in narrows, further reducing the risk.
-->

변경사항은 야간 빌드에서 현재 버전으로 들어가기 전에 master에서 더 많은 시간을 보내게 되는데
여기서 진행 중인 회귀 때문에 간헐적인 이슈를 겪을 수도 있고 이를 통해 사용자가 충분히 릴리스를
테스트하고 이슈를 보고할 수 있는 시간을 제공하게 됩니다. 게다가 현재 버전에 변경사항을 가져와도
깨지지 않는지 추가적인 리뷰와 이상이 없는지 검사를 하게 됩니다.

비슷하게 LTS 업데이트 릴리스에 변경사항을 가져오기 전 현재 버전 릴리스에서 최소 한주 이상이
지나야 합니다. 이를 통해 사용자가 변경사항을 완전히 확인하고 이슈를 보고할 수 있는 추가 시간을
확보합니다. 게다가 LTS로 변경사항을 가져오면서 더 신중하게 리뷰를 진행해서 변경사항이 의도치 않게
문제를 발생시킬 가능성을 줄입니다. LTS 릴리스의 기간, 특히 LTS가 유지보수 단계로 진입했다면
가져오는 변경사항의 범위를 줄여서 위험을 감소시킵니다.

<!--
When it comes to new LTS versions, changes will have soaked in the latest
release for up to 6 months.  In particular, larger changes like an upgrade
to v8 are done early in the lifespan of the stream such that they will have
significant soaking and usage in the Current stream before they make it
into an LTS release.

This strategy allows for rapid innovation/change, with releases being available
where those changes can be used/validated and a funnel through which
these can flow in an appropriate manner into releases used by more
risk-averse community members.
-->

새로운 LTS 버전에 변경사항이 들어올 때는 최신 릴리스에서 6개월까지 유지될 것입니다.
특히 v8 업그레이드 같은 큰 변경사항은 LTS 릴리스에 들어오기 전에 현재 버전에 충분히 적용되고
사용되면서 변경사항이 적용되는 과정을 더 빨리 마치게 됩니다.

이 전략으로 빠른 혁신과 변경을 할 수 있으면서 릴리스의 변경사항이 사용되고 검증받을 수 있게 하고
위험을 더 싫어하는 커뮤니티 사람들이 사용하는 릴리스에 적절한 방법으로 적용될 수 있게 합니다.

<!--
# Enhancement Proposal Process

Some changes are of such scope that they cannot simply be reviewed in a
pull request.  There are often larger questions that will factor into the
decision as to whether the change proposed is desirable or appropriate
for the Node.js runtime.

The strategy for these changes is the "enhancement proposal" process.  The
proposed change is documented, discussed and moves through a number of
stages including DRAFT and ACCEPTED or REJECTED.  You can read more on
the process [here](https://github.com/nodejs/node-eps#progress-of-an-ep).

This process ensures that larger changes can be discussed in advance and agreed
by the community, allowing the final review of the pull request to focus
on implementation.  The result being that the merits of the concept can be
discussed at the appropriate level of abstraction without having to
review all of the technical details.
-->

# 강화된 제안 과정

어떤 변경사항은 풀 리퀘스트에서 간단하게 리뷰할 수 없습니다. 제안된 변경사항이 Node.js 런타임에
필요하거나 적절한지 같은 결정을 해야 하는 큰 질문도 종종 있습니다.

이러한 변경사항에 대한 전략이 "강화된 제안" 과정입니다. 제안된 변경사항은 문서로 만들어 지고
논의되고 초안(DRAFT), 수락(ACCEPTED), 반려(REJECTED) 같은 단계로 넘어갑니다.
[여기](https://github.com/nodejs/node-eps#progress-of-an-ep)에서
과정에 대해 더 볼 수 있습니다.

이 과정으로 더 큰 변경사항을 미리 논의할 수 있고 커뮤니티의 동의를 얻을 수 있으므로
풀 리퀘스트의 최종 리뷰는 구현에 집중할 수 있습니다. 그 결과 상세 기술을 리뷰하지 않고 적절한
추상화 수준에서 개념을 논의할 수 있다는 장점이 있습니다.

<!--
# Automation and Testing

Automation and Testing are key strategies that go hand in hand in allowing
rapid change in a safe manner.

Automation avoids error-prone manual steps.  Once you have a task automated
the likelihood of errors is orders of magnitude smaller than doing those
tasks by hand, particularly when those tasks are done by different
individuals.

One of our key tenets is to automate as much as we can.  This ranges all
the way from the configuration of the machines in our build infrastructure
using Ansible, to automated jobs that build/sign/and release our binaries.

Automated Testing allows tests to be run often enough to catch regressions
quickly and reliably. Given a good set of tests, we can make changes
confident that we'll catch changes which introduce regressions.
-->

# 자동화와 테스트

자동화와 테스트는 안전하게 빠른 변경을 가능케 하는 핵심 전략입니다.

자동화는 오류가 발생할 수 있는 수동 과정을 없애줍니다. 작업을 자동화하면 직접 수동으로 하는 것보다
오류 가능성의 규모가 줄어듭니다. 특히 이러한 작업을 여러 사람이 수행한다면 더 줄어듭니다.

우리의 핵심 원칙 중 하나는 가능한 한 많이 자동화하자는 것입니다. 여기에는 빌드 인프라스트럭처에서
Ansible로 머신을 구성하는 것부터 바이너리를 빌드하고 서명하고 릴리스하는 작업까지 자동화하는
모든 범위를 포함합니다.

자동화된 테스트가 테스트를 실행해서 회귀 문제를 빠르고 신뢰할 수 있게 잡아냅니다.
좋은 테스트 세트가 있을 때, 회귀문제가 발생한다면 어디서 문제가 생겼는지 확신하고
변경할 수 있습니다.

<!--
There are many levels of testing and the strategy is to build our way
up the levels until we have as complete coverage as is reasonable.

These levels include:

* Functional Tests
* Platform/OS Coverage
* Dependency Testing
* Module Testing
* Stress Testing
* Development Workflows
* Use Case Testing
-->

여러 단계의 테스트가 있고 합리적인 수준의 커버리지를 확보할 때까지 수준을 올리는 것이 전략입니다.

이러한 단계에는 다음을 포함합니다.

* 기능 테스트
* 플랫폼/OS 커버리지
* 의존성 테스트
* 모듈 테스트
* 부하 테스트
* 개발 작업 흐름
* 사용 사례 테스트

<!--
## Functional Tests

Functional tests are the first level of defense.  Our collaborator guidelines
require test cases for all new features added, and our collaborators set a
high standard in respect to requiring tests.

It is not enough to simply have tests, those tests must be effective at
exercising the runtime.  We measure code coverage nightly and publish
the results at [coverage.nodejs.org](https://coverage.nodejs.org/).
This allows us to ensure our tests remain effective and provides the data
necessary to further improve our tests.

You'll also notice that there has been a lot of effort put into making sure
the tests pass reliably and consistently.  If you watch the continuous
integration (ci) runs you will see that they are mostly green
and intermittent failures are rare.
-->

## 기능 테스트

기능 테스트는 방어의 첫 단계입니다. 협업자 가이드라인에서는 새로운 모든 기능에 테스트 케이스를 필수로
요구하고 있고 협업자는 필수 테스트에 관해 높은 표준을 정해놓았습니다.

단순히 테스트를 하는 것으로는 충분치 않고 테스트는 런타임을 실행할 때 효과적이어야 합니다.
야간에 코드 커버리지를 측정하고 그 결과를
[coverage.nodejs.org](https://coverage.nodejs.org/)에 발행합니다. 이를 통해 테스트가
여전히 효과적인지 확인할 수 있고 테스트를 더 개선할 수 있는 필수 정보를 얻을 수 있습니다.

테스트가 신뢰할 수 있으면서 일관되게 통과할 수 있도록 많은 노력이 들어갔다는 것을 눈치챌 것입니다.
지속적인 통합(ci)가 실행되는 것을 보면 대부분은 녹색이고 드물게 일시적인 실패가
발생하는 것을 볼 수 있습니다.

<!--
## Platform/OS Coverage

This is not a type of test by itself.  But by applying the strategy of
running tests across a broad range of platforms and OS types and levels it
multiplies the effectiveness of the existing tests.

Issues which surface on a particular platform or OS often are not specific
to that platform or OS but instead are uncovered because of different timing,
default configuration or general environment.  They could have occurred on any
of the other platforms.

Our strategy is to test on a broad range of platforms both to ensure Node.js
works on our supported platforms, but also to leverage the diversity to
uncover as many problems as early as possible.
-->

## 플랫폼/OS 커버리지

이는 그 자체로 테스트의 형식은 아닙니다. 하지만 넓은 범위의 플랫폼과 OS에서 테스트를 실행하는 전력을
적용함으로써 기존 테스트의 유효성을 증가시킵니다.

특정 플랫폼이나 OS에서 발생한 이슈는 종종 해당 플랫폼이나 OS에 한정된 것이 아니라 타이밍이 다르거나
기본 설정이나 일반적인 환경을 제어하지 못한 것입니다. 다른 어떤 플랫폼에서도 발생할 수 있습니다.

광범위한 플랫폼에서 테스트하는 우리 전력의 목적은 지원 플랫폼에서 Node.js가 동작한다는 것을 보장하고
가능한 한 빨리 많은 플랫폼을 보여주는 다양성을 높이기 위함입니다.

<!--
## Dependency Testing

Node.js has a number of key dependencies.  It's important that we ensure
that any changes we apply to those dependencies don't have a negative effect.

To this end we have a job which runs the v8 tests on the v8 tree within
the Node.js repo.  This job runs nightly and on request for PRs that are
making changes to the v8 tree.

We don't currently run the tests for other dependencies, but the delta in
the Node.js tree for the dependencies other than v8 is more limited.
-->

## 의존성 테스트

Node.js에는 핵심 의존성이 많이 있습니다. 이러한 의존성에 적용하는 변경 사항은 부정적인 영향이
전혀 없도록 보장되어야 합니다.

그래서 Node.js 저장소에서 V8 트리의 v8 테스트를 실행하는 작업을 갖게 되었습니다.
이 작업은 매일 밤 실행되며 v8 트리에 변경사항이 있는 PR이 올라왔을 때 실행됩니다.

현재 다른 의존성에 대한 테스트는 실행하고 있지 않지만 Node.js 트리에서
v8 외 다른 의존성의 변경사항은 더 적은 편입니다.

<!--
## Module Tests

Module tests are the next level of defense.  They help to validate that
changes are not going to break for end users.  Most applications use
a number of modules, and many of the most popular modules are extensively
used.  Any changes that impact those modules would have a
significant community impact.

Our strategy is to run the module's own unit tests on a set of key modules
and to run these as often as possible.  Currently they are run for
Current and LTS releases and we are working to increase that frequency.

You can read more about our module testing efforts in
[https://github.com/nodejs/citgm/](https://github.com/nodejs/citgm/).
-->

## 모듈 테스트

모듈 테스트는 방어의 다음 단계입니다. 이는 변경사항이 최종 사용자의 코드를 깨뜨리지 않는다는
검사를 합니다. 대부분 애플리케이션은 다수의 모듈을 사용하고 인기 있는 다수의 모듈은 널리 사용됩니다.
이러한 모듈에 영향을 끼치는 변경사항은 커뮤니티에도 큰 영향을 줄 것입니다.

전략은 핵심 모듈 자체의 유닛 테스트를 가능한 한 자주 실행하는 것입니다. 현재는 현재 버전과
LTS 릴리스에서 이를 실행하고 빈도를 높이려고 작업 중입니다.

[https://github.com/nodejs/citgm/](https://github.com/nodejs/citgm/)에서
모듈 테스트에 관한 노력에 대해 더 볼 수 있습니다.

<!--
## Stress Tests

Some problems only surface after running for a long time.  Stress tests help
to flush those out by running certain scearios over a prolonged period
of time.

We don't have any stress tests running at this point but it will be our next
priority after we have module testing running at an appropriate frequency.
-->

## 부하 테스트

어떤 문제는 장시간 동작할 때만 발생합니다. 부하 테스트는 장시간에 걸친 특정 시나리오를
실행해서 이러한 문제를 확인합니다.

지금은 부하 테스트를 전혀 실행하지 않지만, 모듈 테스트를 적절한 빈도로 실행할 수 있게
된 후에는 부하 테스트를 우선시하겠습니다.

<!--
## Development Workflows

Development Workflows is another level up from Module Testing.  It aims
to test common development workflows to ensure changes will not introduce
any regressions to those flows.

These are more work to put in place and run but they will be next on our
list after getting stress tests in place.
-->

## 개발 작업흐름

개발 작업 흐름은 모듈테스트의 또 다른 단계입니다. 변경사항이 이러한 개발 흐름에 어떤 회귀 문제도
만들지 않는다고 확인하기 위해 일반적인 개발 워크플로우를 테스트합니다.

여기에 더 작업해야 할 부분이 많이 있지만, 스트레스 테스트를 작업한 후에 할 목록에 있습니다.

<!--
## Use Case Testing

This would be the next logical step after Development Workflows, testing
for the common use cases for Node.js.

Our current strategy is to get some of this coverage through the
benchmarking that we put in place, but it is another area we can work
on once we have the other levels of testing in place.
-->

## 사용 사례 테스트

이는 개발 작업 흐름 다음에 할 논리적 단계가 될 것이고 Node.js의 일반적인 사용 사례에 대한 테스트입니다.

현재 전략은 벤치마크를 구성해서 이러한 커버리지를 얻는 것이지만 다른 단계의 테스트를 구성하면
작업할 수 있는 또 하나의 영역입니다.


<!--
# Performance Benchmarks

While ensuring functional stability is good, its not enough.  We also need
to make sure that performance is not degraded as changes flow in.

Our strategy is to define the common use cases for Node.js and then
build up a set of benchmarks that we run and publish results for on a
regular basis.  This work is ongoing in the
[Benchmarking Working Group](https://github.com/nodejs/benchmarking),
but we already have a number of key benchmarks being run nightly
across the major Node.js versions.  You can view this data at:

[https://benchmarking.nodejs.org/](https://benchmarking.nodejs.org/).

This data allows us to ensure we avoid performance regressions as
changes flow in.
-->

# 성능 벤치마크

기능 안전성을 보장하는 것은 좋지만 충분하지는 않습니다. 변경사항이 적용되면서 성능이 저하되지
않는다는 것도 보장해야 합니다.

Node.js에서 일반적인 사용 사례를 정의해서 벤치마크 세트를 만들고 실행한 뒤 그 결과를 정기적으로
발행하는 것이 전략입니다. 이 작업은 [벤치마킹 워킹 그룹](https://github.com/nodejs/benchmarking)에서
진행중이지만 현재도 다수의 핵심 벤치마크는 주요 Node.js 버전에서 매일 밤 실행되고 있습니다.
다음 링크에서 이 데이터를 볼 수 있습니다.

[https://benchmarking.nodejs.org/](https://benchmarking.nodejs.org/)

이 데이터로 변경사항이 적용될 때 성능 관련 회귀 문제를 피할 수 있습니다.

<!--
# In Summary

This may have been a bit of a long read but I hope it has put a number
of the activities you may have seen in the Node.js community over the last
year into context.  If you ever wondered "Why are they doing that?", the answer is:

  **Node.js - Quality with Speed**
-->

# 요약

글이 꽤 길었지만, 작년에 Node.js 커뮤니티에서 당신이 본 많은 활동을 이해했기를 바랍니다.
"왜 이런 작업을 하고 있는가?"라는 물음에 대한 대답은 이렇습니다.

  **Node.js - 속도를 동반한 품질**
