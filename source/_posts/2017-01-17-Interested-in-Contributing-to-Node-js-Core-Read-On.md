---
category: articles
title: Node.js 코어에 기여하고 싶습니까? 읽어보세요.
author: Node.js Foundation
ref: Interested in Contributing to Node.js Core? Read On.
refurl: https://medium.com/the-node-js-collection/interested-in-contributing-to-node-js-core-read-on-5614f60d074d#.42wt46x2v
translator: pineoc
---
![](https://cdn-images-1.medium.com/max/800/1*wWp5_CPpCsNvJNbcgTKnkQ.jpeg)
<!--
* How you will feel after you submit your first PR.
-->
* 처음 PR을 제출한 후 기분이 어떨까요.

<!--
It’s 2017 and one of your New Year’s resolutions is contributing back to the Node.js project. So, where do you get started?
-->
당신의 2017년에 새해 결심 중 하나가 Node.js 프로젝트에 다시 기여하기입니다. 그럼 어디서 시작해야 할까요?

<!--
Rich Trott, a Node.js Core Technical Committee member, talked a bit about contributing to Node.js Core in this Node.js Interactive North America video, but there were still a ton of questions after his talk.
-->
Node.js 핵심 기술위원회 멤버인 Rich Trott는 이 Node.js Interactive North America 비디오에서 Node.js Core에 기여하는 것에 대해 이야기했지만, 이야기가 끝난 후에도 여전히 많은 질문이 있었습니다.

<!--
He decided to host a Sideway conversation with Node.js collaborators, Anna Henningsen and Bryan English to help answer additional questions from those that are looking to participate in the Node.js Project.
-->
그는 Node.js 공동 작업자인 Anna Henningsen, Bryan English와 Sideway에서 대화를 진행해서 Node.js 프로젝트에 참여하고자 하는 사람들로부터 추가 질문에 답할 수 있도록 했습니다.

<!--
Below is a condensed version of the conversation. Do you have more questions on this topic? Please ask Anna, Bryan or Rich on Twitter or GitHub.
-->
아래 대화의 요약 버전입니다. 이 주제에 대해 더 궁금한 점이 있습니까? 트위터 또는 GitHub에서 Anna, Bryan, Rich에게 문의하세요.

<!--
### Why is it important to contribute to Node.js?
-->
### Node.js에 기여하는 것이 중요한 이유는 무엇입니까?

<!--
Rich: Helping folks contribute to Node.js Core is important to me for at least two reasons:
-->
Rich: Node.js Core에 기여하는 사람들을 돕는 것이 적어도 두 가지 이유에서 중요합니다.

<!--
- First, it contributes to the health of the project. If it’s easy for people with talents to use those talents to help the project, then the project benefits.
-->
- 첫째, 프로젝트의 건강에 기여합니다. 재능을 가진 사람들이 재능을 사용하여 프로젝트를 도울 수 있다면 프로젝트에게 이익입니다.

<!--
- Second, it’s a moral imperative (in my opinion). Being energetic in the pursuit of contributors hopefully means we’re not being exclusionary, or at least being less exclusionary than we’d be if we weren’t trying to help new and existing contributors.
-->
- 둘째로, 이것은 (사견으로는)도덕적인 책임입니다. 기여자를 도우려고 열정적이라면 이는 우리가 배타적이지 않음을 의미합니다. 최소한 새로운 기여자나 기존의 기여자를 도우려고 하지 않는 것보다는 덜 배타적입니다.

<!--
Bryan: I’d add that it’s important to me that people treat the project as part of their application, and not just as a upstream chunk of code written by “other” people. Getting more people contributing is a big part of that.
-->
Bryan: 저는 사람들이 프로젝트를 "다른" 사람들이 작성한 코드의 업스트림 덩어리가 아니라 자신의 응용 프로그램으로 생각하는 것이 중요하다고 얘기하고 싶습니다. 그래서 더 많은 사람들을 기여하도록 하는 것이 중요합니다.

<!--
Anna: That’s a perfect addition, yes — It’s a problem that Node.js Core has been having in the past and imho this is an important way of working on it!
-->
Anna: 좋은 의견입니다. Node.js 코어가 과거에 가지고 있던 문제이고 저는 이 부분이 실제로 동작하게 하는 중요한 방법이라고 생각합니다!

<!--
### Question: How can someone who isn’t a strong developer contribute back to Node.js Core?
-->
### 질문: 대단한 개발자가 아닌 개발자가 Node.js Core에 어떻게 기여할 수 있습니까?

<!--
Rich: I think there’s two ways to answer that question: One if we’re talking about someone who is essentially not a developer and not particularly interested in being a developer. And the other answer would be for people who are developers, just not very experienced.
-->
Rich: 그 질문에는 두 가지 답변이 있다고 생각합니다. 하나는 개발자가 아니면서 개발자가 되는 데 관심이 없는 사람이고 다른 하나는 개발자이지만 경험이 많지 않은 사람들입니다.

<!--
Anna: So, if you’re not a developer: You can always try to look at the documentation side of things, watch out for typos and passages that seem unclear to you (especially if you’re not a developer or not a particularly experienced one!)
-->
Anna: 개발자가 아닌 경우 항상 문서를 찾아보고 자신에게 명확하지 않은 오타나 구절을 찾아봐야 합니다.(특히 개발자가 아니거나 경험이 없는 개발자의 경우)

<!--
William Kapke gave a [great talk at Node Interactive in Austin, TX](https://www.youtube.com/watch?v=SV0p3ET1vpU) on how he contributes (invaluably!) to the Node project without writing any code in Node.js Core itself — if you have the time, it’s worth listening to.
-->
William Kapke는 Node.js Core 자체에 코드를 작성하지 않고 Node 프로젝트에 기여하는 방법에 대해 이야기합니다. [텍사스 오스틴에서 열린 Node Interactive의 발표](https://www.youtube.com/watch?v=SV0p3ET1vpU) - 시간이 있다면 들을 만한 가치가 있습니다.

<!--
Rich: If your English is strong, there are a bunch of things that we could use help with in the docs: there is way too much abuse of hyphens; there are tons of comma splices; overuse of passive voice; tons of stuff that is too wordy and needs to be edited down… And of course, doc omissions and errors. Please fix those.
-->
Rich: 영어를 잘한다면 문서에서 도울 수 있는 부분이 많습니다. 하이픈의 남용, 많은 쉼표와 이어쓰기, 수동문의 남용, 너무 장황하고 편집할 필요가 있는 많은 부분들... 물론 문서의 누락과 오류도 여기에 포함됩니다. 이런 부분을 고쳐주세요.

<!--
If you are strong in a language other than English, translation help is always needed/welcome. (Unfortunately, non-English docs are in separate repositories on a per-language basis, I believe.)
-->
영어가 아닌 다른 언어에 강하다면, 번역 작업은 도움이 항상 필요하며 환영합니다. (불행하게도, 영어 이외의 문서는 각 언어를 기반으로 별도의 저장소에 있습니다.)

<!--
Anna: If you are eager to get going on this, the source files for the docs are at https://github.com/nodejs/node/tree/master/doc
-->
Anna: 이 작업에 열심인 경우 문서의 소스 파일은 다음 위치에 있습니다. <https://github.com/nodejs/node/tree/master/doc>

<!--
Rich: I would also add that I consider just opening issues for bugs you find to be a form of contributing to Node.js Core. A good bug report (emphasis on good) is incredibly valuable.
-->
Rich: 발견한 버그에 대한 이슈를 등록하는 것도 Node.js Core에 기여하는 방법에 포함시키고 싶습니다. 좋은 버그 리포트(좋은에 강조)는 아주 가치있습니다.

<!--
On the other question of how to contribute code if you’re not very experienced, I try to set people up with code cleanup on tests. That’s my go-to for first-time contributors. It’s a good thing to start with, whether you are experienced or not, because it’s a good idea to focus on the process the first time you contribute anyway, rather than focusing on how the code works.
-->
경험이 별로 없다면 코드 기여를 하는 방법에 관한 다른 질문으로 테스트에서 코드를 정리하는데 사람들을 배정하려고 합니다. 처음 기여하는 사람에게 적합한 작업이라고 생각합니다. 경험이 있든 없든 시작하기 좋습니다. 왜냐하면 코드가 어떻게 작동하는지에 초점을 맞추는 것이 아니라 처음 기여할 때 프로세스에 집중하는 것이 바람직하기 때문입니다.

<!--
Tests are usually understandable, and even when they’re not, you can still feel pretty secure changing some instances of var to const and updating a few assert.equal() instances to assert.strictEqual().
-->
테스트는 대개 이해할 수 있으며, 그렇지 않은 경우에도 var의 일부 인스턴스를 const로 변경하고 assert.equal() 인스턴스 몇 개를 assert.strictEqual()로 바꾸는 것이 안전하다고 느낄 수 있습니다.

<!--
I have a Twitter handle (@NodeTodo) and an email address (help@[nodetodo.org](https://sidewayembed.com/redirect?url=unknown%3A%2F%2Fnodetodo.org)) that anyone who has never contributed to Node.js can use to request a simple first commit.
-->
Node.js에 기여한 적이 없는 사람이라면 간단한 첫 번째 커밋을 요청할 수 있는 트위터 계정(@NodeTodo)과 이메일 주소 (help@[nodetodo.org](https://sidewayembed.com/redirect?url=unknown%3A%2F%2Fnodetodo.org))가 있습니다.

<!--
Anna: So one thing: Don’t worry! Node.js is a large software project, so it’s kind of intimidating by default. But it’s not realistic that you’d actually have to worry about breaking something by accident or something like that — we have a lot of mechanisms in place to prevent that, and we’re always quite happy to see first-time contributors step up to the challenge! :)
-->
Anna: 그래서 한 가지, 걱정 마세요! Node.js는 대규모 소프트웨어 프로젝트이기 때문에 기본적으로 위협적입니다. 그러나 실수로 무언가를 깨뜨리는 것에 대해 걱정해야 한다는 것은 현실적이지 않습니다. 우리는 그러한 사고를 막기 위한 많은 메커니즘을 가지고 있습니다. 우리는 처음으로 기여자들이 도전에 나서는 것에 대해 항상 행복하게 생각합니다! :)

<!--
Bryan: Many of my contributions (including my first) have been out of needs I had in my day-to-day work, so I’d encourage when submitting a bug report (a good one, as Rich mentioned), to think about ways it could become your first PR.
-->
Bryan: 저의 첫 번째 기여를 비롯한 많은 기여는 자신의 일상 업무에서 필요로 하는 것이 아니므로, 버그 리포트(Rich가 언급한 좋은 버그 리포트)를 제출할 때, 이를 첫 PR로 만들 수 있을지 생각해보세요.

<!--
Anna: Right — if you feel like you’re up for doing it, you can try to compile Node.js from the git repository and make install, so it becomes your default node binary, and update that from time to time. That’s basically how I got started finding bugs in Node.js.
-->
Anna: 맞아요. 당신이 일을 하고 있는 것처럼 느껴진다면 git 저장소에서 Node.js를 컴파일하고 설치하여 기본 노드 바이너리가 되고 때때로 업데이트할 수 있습니다. 이것이 기본적으로 Node.js에서 버그를 찾기 시작하는 방법입니다.

<!--
Rich: Just make sure you do that only in an environment that can handle occasional breakage. :-D
-->
Rich: 간혹 프로그램이 깨져도 처리할 수 있는 환경에서만 그렇게 해야 합니다. :-D

<!--
Anna: right. ;) If you do encounter any bugs — don’t feel obliged to fix them yourself if it seems overwhelming, like Rich said, a good bug report is worth gold.
-->
Anna: 맞습니다. ;) 버그가 발생하는 경우 - 감당하지 못할 것으로 보일 경우 직접 수정해야 한다고 생각하지 마세요. Rich가 말했듯이, 좋은 버그 리포트는 금의 가치가 있습니다.

<!--
### Question: What would be the next level after code cleanups at the test subsystem?
-->
### 질문: 테스트 하위 시스템에서 코드 정리 후 다음 단계는 무엇입니까?

<!--
Rich: Good question from someone who has been doing a ton of test cleanup. :-D
-->
Rich: 테스트 정리를 해본 적이 있는 사람의 좋은 질문입니다. :-D

<!--
Anna (with some contributions from others as well) set up [coverage.nodejs.org](https://sidewayembed.com/redirect?url=unknown%3A%2F%2Fcoverage.nodejs.org). I often tell people to look at the test coverage to find a good second commit after they’ve landed their first commit. That will get you out of cleaning up existing tests and into writing new tests.
There’s a guide in the source tree (under doc/guides/[writing-tests.md](https://sidewayembed.com/redirect?url=unknown%3A%2F%2Fwriting-tests.md)) that goes over how to write a test for Node.js core.
-->
Anna는 (다른 사람의 도움을 받아서) [coverage.nodejs.org](https://sidewayembed.com/redirect?url=unknown%3A%2F%2Fcoverage.nodejs.org)를 설정합니다. 나는 종종 사람들에게 테스트 커버리지를 보고 첫 번째 커밋을 시작한 후 좋은 두 번째 커밋을 찾습니다. 그러면 기존 테스트를 정리하고 새 테스트를 작성할 수 있습니다. 소스 트리에는 doc/guides/[writing-tests.md](https://sidewayembed.com/redirect?url=unknown%3A%2F%2Fwriting-tests.md) 가이드가 있습니다. Node.js core에 대한 테스트를 작성합니다.

<!--
If you’re into C++, then I’d say ask one of the C++ people like Anna.
-->
C++을 사용한다면 Anna와 같은 C++ 사용자에게 물어보십시오.

<!--
Anna: One thing, in a similar vein, maybe even one or steps further down the road: Our benchmarks are far from complete, too. Feel free to look around in that folder and see if something strikes you as missing!
-->
Anna: 비슷한 맥락에서 한 가지 더 멀리 나아가는 단계일 수도 있습니다. 우리의 벤치 마크도 완벽하지 못합니다. 그 폴더를 둘러보고 당신이 무언가 잊었는지 확인하십시오!

<!--
Bryan: Even with good coverage, some code paths can be missed, so it’s sometimes worth it to look at a test file and see if it’s missing anything.
-->
Bryan: 커버리지가 높아도 일부 코드 경로가 누락될 수 있으므로 테스트 파일을 보고 누락된 부분이 있는지 알아보는 것이 좋습니다.

<!--
Rich: I should also mention that I have a definite bias towards tests. I don’t think tests were my first contribution to Node.js, but they definitely are where I have spent the most time, overwhelmingly. Asking someone else might get a different answer. One place you can always ask is #node-dev on Freenode IRC. That’s for Node.js Core discussions. General Node.js questions should go to #Node.js instead.
-->
Rich: 저는 테스트에 확실히 편견이 있습니다. Node.js에 처음 기여한 것이 테스트는 아니었지만 압도적으로 많은 시간을 소비한 것은 확실합니다. 다른 사람에게 묻는 것은 다른 대답을 얻을 수 있습니다. Freenode IRC의 #node-dev 채널에서 언제든 질문할 수 있고 여기는 Node.js Core를 논의하는 곳입니다. 일반적인 Node.js 질문은 #Node.js을 이용해야 합니다.

<!--
### Question: I have contributed once on a simple issue. Will @NodeTodo keep me in the loop on newer simpler issues?
-->
### 질문: 간단한 이슈에 한 번 기여했습니다. @NodeTodo에서 다시 더 새롭고 간단한 이슈를 찾아야 하나요?

<!--
Rich: I try not to hand out specific second commits via NodeTodo too much. I try to direct people to coverage.nodejs.org or otherwise have them come up with their own issues. I try to keep stuff in reserve for first-timers. I’m not sure I have a good concrete reason for that. It just feels right, I guess. But I’m happy to help anyone figure out a second (or third or fourth) commit. It will just take longer and be more effort.
-->
Rich: 저는 NodeTodo로 특정 두 번째 커밋을 너무 많이 분배하려고 하지 않습니다. 사람들이 coverage.nodejs.org로 가게 하거나 자신의 이슈로 돌아올 수 있게 노력합니다. NodeTodo는 처음 기여하는 사람들을 위한 예비 커밋으로 유지하려고 합니다. 이렇게 하는 좋은 이유에 대한 확신은 없지만 저는 이게 옳다고 믿습니다. 하지만 두 번째 (혹은 세 번째나 네 번째) 커밋을 사람들이 찾아낼 수 있도록 돕고 싶습니다. 이는 더 오래 걸리고 더 많은 노력이 필요할 것입니다.

<!--
### Question: Is the roadmap for Node well-defined? Do you accept feature requests from the community or do most of the ideas come from the core group?
-->
### 질문: 노드 로드맵이 잘 정의되어 있습니까? 커뮤니티의 기능 요청을 수락합니까 아니면 대부분의 아이디어가 핵심 그룹에서 왔습니까?

<!--
Anna: We don’t have a fixed, centralized roadmap, and we definitely want to talk about feature requests from and with the community; but keep in mind that a lot of people would prefer to have those things in Node core that can’t be easily implemented and maintained in userland (= outside of Node core, for example as an npm package).
-->
Anna: 우리는 고정된 중앙 집중식 로드맵을 가지고 있지 않으며 커뮤니티와의 기능 요청에 대해 분명히 이야기하고 싶습니다. 그러나 많은 사람들이 Node core에서 쉽게 구현하고 유지할 수 없는 것을 유저랜드(예: npm 패키지와 같은 Node core의 외부)에 가지고 싶어 합니다.

<!--
Rich: You shouldn’t feel shy about opening an issue and asking, though.

Yeah, there’s a feature request label on the issue tracker, so feature requests are welcome.

Also, if you have a concrete idea, implementation design and all, take a look at https://github.com/nodejs/node-eps.
-->
Rich: 문제를 열어서 묻는 것에 부끄러워하지 않아야 합니다.

예, 문제 추적기에 기능 요청 라벨이 있으므로 기능 요청을 환영합니다.


또한 구체적인 아이디어, 구현 설계 및 모든 것이 있으면 <https://github.com/nodejs/node-eps>를 살펴보십시오.

<!--
Anna: That node-eps is for the really large and wide-reaching changes — I wouldn’t recommend going there first, actually. If you want to see a feature implemented, go to nodejs/node, and we’ll see where to go from there :)
-->
Anna: 그 node-eps는 정말 크고 광범위한 변화를 위한 것입니다. 실제로 먼저 거기에 가지 않는 것이 좋습니다. 구현된 기능을 보고 싶다면 nodejs/node로 가면 거기에서 갈 위치를 볼 수 있습니다 :)

<!--
Rich: Yes, node-eps repo is definitely not the first stop.
-->
Rich: 네, node-eps 저장소는 확실히 첫 정류장이 아닙니다.

<!--
### Question: How much of the core effort is C++ vs JS?
-->
### 질문: C++와 JS 중 어느 부분에 노력이 더 많이 필요한가요?

<!--
Anna: I’m pretty sure the overwhelming majority of code in Node core is written in JS, and you definitely do not need any C++ knowledge to contribute to Node! The same goes the other way around: You probably don’t actually need to know JS for contributing to the C++ side of things.
-->
Anna: Node core의 코드 대부분이 JS로 작성되었으며, Node에 기여하기 위해 C++ 지식이 필요 없다고 확신합니다! 그 반대의 경우도 마찬가지입니다. 실제로 C++ 측면에 기여한 JS를 실제로 알 필요는 없습니다.

<!--
That being said, there’s much more activity around the JS parts of Node, and a lot more people are involved on that side.
-->
즉, Node의 JS 부분 주위에는 훨씬 더 많은 활동이 있으며, 더 많은 사람들이 그 부분에 참여하고 있습니다.

<!--
Bryan: Most of the C++ code I’ve seen in core is glue code, providing things from libraries like LibUV and OpenSSL to JavaScript. So yeah, a majority of what’s actually happening in core seems to be in JavaScript-land.
-->
Bryan: 제가 핵심으로 본 C++ 코드의 대부분은 글루 코드입니다. LibUV 및 OpenSSL과 같은 라이브러리에서 JavaScript로 제공합니다. 실제로 핵심에서 실제로 일어나고 있는 것의 대부분은 JavaScript-land에 있는 것처럼 보입니다.

<!--
### Question: I’m just starting with PR’s to bigger public node based projects. I’ve done a number of small PR’s, I’m working on a PR for ‘got’ currently but would also definitely like to contribute to node core in the future. A question I struggled with slightly is that a PR can be a lot of work. Especially when submitting something that isn’t ‘your first PR’. For a younger developer, this can be intimidating because of the fear your PR gets outright rejected. Fixing a comparison is one thing, but many issues require more than a couple lines. Would you encourage us young ones to power on and accept sometimes you will lose time with little return, submitting code that’s subpar? Or alternatively encourage discussion on the issue and perhaps prematurely opening a PR to get some direction and work on with confidence?
-->
### 질문: 저는 크고 공개적인 Node 기반 프로젝에 PR을 작업하고 있습니다. 다수의 작은 PR을 마무리했고 현재 '가진' PR을 작업하고 있지만 미래에는 Node 코어에도 기여하고 싶습니다. 제가 약간 어려움을 겪었던 질문은 PR은 많은 작업이 필요하다는 것입니다. 특히 '당신의 첫 PR'이 아닌 어떤 작업을 제출할 때 많은 작업이 필요합니다. PR이 노골적으로 거절될 수 있으므로 젊은 개발자들은 이 부분이 두려울 수 있습니다. 하나의 비교를 수정하는 것은 간단하지만 많은 이슈들은 많은 줄의 수정이 필요합니다. 저 같은 젊은 개발자가 힘을 얻고 때로는 수준 이하의 코드를 제출해서 이득은 적지만 시간을 잃더라도 받아들일 수 있도록 격려할 수 있을까요? 아니면 이슈에서 토론을 권장하거나 어떤 방향을 갖기 위해 일찍 PR을 열거나 자신감을 갖고 작업할 수 있게 할 수 있을까요?

<!--
Rich: There are two approaches that I can think of offhand:
-->
Rich: 제가 생각하기엔 두 가지 접근 방식이 있습니다.

<!--
- One is to hop on IRC (or Slack or whatever) and chat with devs on the project. Obviously that will only work if the project in question has devs available that way and if the right people are available when you come to ask questions. So, that can be a bit of toss of the dice.
- Another approach (which you touch on) is issue tracker based. Of course, comments and back-and-forth and “here’s a little bit of code, does this look like the right approach” can help.
-->

- 하나는 IRC(또는 Slack 이나 다른 무엇이든)를 뛰어다니고 프로젝트에서 개발자들과 채팅하는 것입니다. 분명히 문제의 프로젝트가 개발자들과 사용할 수 있고 질문할 때 올바른 사람들이 사용할 수 있는 경우에만 작동합니다. 그래서 이것은 주사위를 던지는 행위일 수 있습니다.
- 다른 접근법(당신이 다루는)은 이슈 트래커를 기반으로 합니다. 댓글, 대화, "여기 이 코드의 접근 방식이 올바른가요?" 등은 당연히 도움이 됩니다.

<!--
So you can just opening a PR if you can put together some minimal approach that won’t take you three weeks of work just to have it rejected.
-->
그러니 최소한의 접근 방법을 같이 제시할 수 있을 때 PR을 열어서, 3주간 작업한 뒤에 거부당하는 일이 없도록 하세요.

<!--
If you can get philosophical about it and decide that the goal is to learn and improve yourself and the world, a rejected PR is not a failure. It’s a journey. A learning process. But it’s easier to type that than to internalize that attitude, I suspect.
-->
그것에 대해 철학적으로 생각하고 목표가 자신과 세계를 배우고 향상하는 것이라고 결정하면 거부된 PR은 실패가 아닙니다. 그것은 여행입니다. 학습 과정입니다. 그러나 그러한 태도를 내면화하는 것보다 타자를 치는 것이 더 쉽습니다.

<!--
Another thing is that the whole “oh my gosh, I can’t possibly submit a PR because all those smart people will make fun of me”… I mean, you didn’t say that, but I’m taking it to an extreme, perhaps… If that’s the attitude the project is projecting, then we’ve got a lot of work to do.
-->
또 다른 한 가지는 "오 맙소사, 모든 영리한 사람들이 나를 놀릴 것이기 때문에 나는 PR을 제출할 수 없다"는 말입니다. 내 말은, 당신은 그렇게 말하지 않았지만, 극단적으로 생각하면 그렇다는 이야기입니다. 아마도... 이것이 프로젝트가 지향하는 태도라면, 우리는 해야 할 일이 많습니다.

<!--
If that’s just sorta how one might feel about any large project, we still have work to do. Because we need to be a project that feels welcoming.

I’m wall-of-texting and drifting away from the actual question. Go, Bryan!
-->
그것이 큰 프로젝트에 대해 어떻게 느낄지 모르겠다면, 우리는 여전히 해야 할 일이 있습니다. 우리는 환영받는 느낌의 프로젝트가 되어야 합니다.

나는 문자 메시지를 하고 실제 질문에서 표류하고 있습니다. 가자, 브라이언!

<!--
Bryan: Well I was just going to say I get that feeling with nearly every PR I submit, or at least some form of it. It’s nobody’s fault, it’s just being nervous about putting stuff you’ve created out for public review. It can be nerve-wracking.
-->
Bryan: 글쎄요, 필자가 제출한 거의 모든 PR 또는 적어도 어떤 형태로든 그 느낌을 받았다고 말할 것입니다. 아무도 잘못한 것이 아니라, 공개 리뷰를 위해 작성한 자료를 넣는 것에 신경을 쓰고 있습니다. 그것은 신경이 쓰일 수 있습니다.

<!--
The fear of rejection is real, but I think pushing through it eventually makes you a better developer, by taking any commentary that comes and using it to make your PR (or your next one) better.

Also, (and this was hard for me early on) never take criticism of your PR as a personal attack.
-->
거절에 대한 두려움은 사실이지만, 그것을 통해 나아가는 것은 결국 당신을 더 나은 개발자로 만들 것입니다. 그리고 어떤 주석이든 그것을 사용하여 PR(또는 당신의 다음 것)을 더 잘 만드십시오.

또한, (저도 처음엔 어려웠지만) PR에 대한 비판을 개인적인 공격으로 받아들이지 마세요.

<!--
Anna: Oh, just to be clear: If the criticism of your PR is not based on its technical merits, and it is a personal attack, report that to one of us and we’ll take care of it (or any member of the core team you trust a bit).
-->
Anna: 오, 명확하게 말하면 귀하의 PR에 대한 비판이 기술적인 장점에 근거하지 않고 개인적인 공격이라면, 우리 중 한 사람(또는 조금 신뢰하는 핵심 팀 구성원)에게 보고하면 우리는 그것을 처리할 것입니다.

<!--
### Question: What’s the difference between Code & Learn, Node Todo, NodeSchool…?
-->
### 질문: Code & Learn, Node Todo, NodeSchool... 의 차이점은 무엇입니까?

<!--
Rich: Code & Learn started as an effort to try to teach new people about corners of the code where we have inadequate number of people who understand it. It has morphed into helping people become contributors. First-time contributors, mostly, although it’s still a great event if you want to get deeper in the code because there will always be core devs there, often ones who have knowledge about the code base few others do.
-->
Rich: Code & Learn은 코드를 이해하는 사람들의 수가 불충분한 코드의 구석에 대해 새로운 사람들에게 가르치려는 노력으로 시작되었습니다. 사람들이 기여자가 되는 데 도움이 되도록 변형되었습니다. 처음에는 코드 작성자가 많았지만 핵심 개발자가 항상 있기 때문에 코드에서 더 깊어지기를 원한다면 코드 작성자에 대한 지식이 있는 사용자가 많습니다.

<!--
Node Todo is all about the first-time contributor. The main differences (from my perspective) between Code & Learn and Node Todo are:
- Code & Learn is a project of the Node.js Foundation while Node Todo is something anyone can do.
- There are no sponsors and Node Todo is always free and open to the public.
- The other thing about Node Todo is that it’s not just an event. You can just email or use Twitter to get going.
-->
Node Todo는 처음 기여한 사람에 관한 모든 것입니다. Code & Learn과 Node Todo의 주요 차이점은 다음과 같습니다.
- Code & Learn은 Node.js Foundation의 프로젝트이며 Node Todo는 누구나 할 수 있는 일입니다.
- 스폰서가 없으며 Node Todo는 항상 무료이며 공개됩니다.
- Node Todo에 대한 다른 점은 단지 이벤트가 아니라는 것입니다. 이메일을 보내거나 트위터를 사용하여 접근할 수 있습니다.

<!--
NodeSchool is also a community effort, but has nothing to do with getting started with Node.js core and contributing. It’s all about learning about Node.js and adjacent technologies, not about the core code in the project.
-->
NodeSchool은 또한 커뮤니티 노력이지만 Node.js core를 시작하고 기여하는 것과 아무런 관련이 없습니다. 프로젝트의 핵심 코드가 아니라 Node.js와 인접 기술에 대해 배우는 것이 전부입니다.

<!--
### Question: What’s the easiest way I can find things that I could possibly contribute to Node Core?
-->
### 질문: Node Core에 기여할 수 있는 것들을 찾을 수 있는 가장 쉬운 방법은 무엇입니까?

<!--
Rich: My incredibly brief answer to the easiest way to find things you could possibly contribute to Node core is: http://nodetodo.org/getting-started/
-->
Rich: 노드 코어에 기여할 수 있는 것들을 찾는 가장 쉬운 방법에 대한 내 간단한 대답은 다음과 같습니다. <http://nodetodo.org/getting-started/>

<!--
But that interprets the question with emphasis on the “easiest” part. I suspect Tierney may have intended the emphasis to be on “possibly”. That is, instead of “how do I find something, anything, easily”, it may have been “how can I find all the things where contributing is possible”.
-->
그러나 그것은 "가장 쉬운" 부분에 중점을 둔 질문의 답입니다. 나는 Tierney가 "가능하다"는 강조점을 의도했을지도 모른다고 생각합니다. 즉, "어떻게 하면 무언가를 쉽게 찾을 수 있습니까?" 대신에 "기여할 수 있는 모든 것을 찾을 수 있는 방법"이 될 수 있습니다.

<!--
Getting started contributing to Node.js. My answer there might be: [Ask William Kapke](https://twitter.com/williamkapke). :-D
-->
Node.js에 기여하기 시작하기. 내 대답은 다음과 같습니다. [Ask William Kapke](https://twitter.com/williamkapke). :-D

<!--
There’s a [Getting Involved](https://nodejs.org/en/get-involved/) section on the website and a list of all the [working groups](https://nodejs.org/en/about/working-groups/) that’s a good place to get started.
-->
웹사이트에는 [Getting Involved](https://nodejs.org/en/get-involved/) 섹션과 모든 [작업 그룹](https://nodejs.org/en/about/working-groups/)이 있습니다. 이것은 시작하기에 좋은 곳입니다.

<!--
Bryan: I think using node is one of the best ways to find avenues for contribution. You’ll always find something that needs doing if you’re using node every day (for work or for fun!).
-->
Bryan: Node 사용은 기여의 수단 중 가장 좋은 방법이라고 생각합니다. 노드를 매일 사용하는 경우 작업이나 재미로 항상 필요한 것을 찾을 수 있습니다.

<!--
### Question: Is there anything I need to know before submitting my first contribution?
-->
### 질문: 첫 번째 기여를 제출하기 전에 알아야 할 것이 있습니까?

<!--
Rich: Hopefully, everything you need to know is here. If not, then we need to update that document, probably.
-->
Rich: 바라건대, 당신이 알 필요가 있는 모든 것은 여기 있습니다. 그렇지 않다면 아마도 해당 문서를 업데이트해야 합니다.

<!--
Anna: Also: Read our Code of Conduct. Thanks!
-->
Anna: 또한, 행동 강령을 읽으십시오. 감사합니다!

<!--
Rich Trott: Yeah, that’s the very first thing in that [CONTRIBUTING.md](https://sidewayembed.com/redirect?url=unknown%3A%2F%2FCONTRIBUTING.md) document. :tada:
-->
Rich Trott: 그래요, 그게 [CONTRIBUTING.md](https://sidewayembed.com/redirect?url=unknown%3A%2F%2FCONTRIBUTING.md) 문서에서 맨 처음 시작입니다.

<!--
### Anything else to add before we sign off here?
-->
### 우리가 여기서 끝내기 전에 추가할 게 있나요?

<!--
Anna: Yeah, I’d just like to mention that if you feel unsure about anything when contributing to or interacting with Node core, I’m always someone you can contact in private ([addaleax on Twitter](http://twitter.com/addaleax), IRC, etc.) if it helps you feel better

Rich: Ditto. :-D ([Contact for Rich](https://twitter.com/trott))

Bryan: Me three ([Contact for Bryan](https://twitter.com/bengl))
-->
Anna: 네, 저는 Node core에 기여하거나 Node core와 상호 작용할 때 어떤 것에 대해 확신이 없으면 언제나 비공개로 연락할 수 있는 사람입니다. [addaleax on Twitter](http://twitter.com/addaleax), IRC 등을 사용하면 도움이 될 수 있습니다.

Rich: 저두요. :-D ([Contact for Rich](https://twitter.com/trott))

Bryan: 저도 ([Contact for Bryan](https://twitter.com/bengl))
