---
category: articles
title: Node.js 코어에 기여하고 싶습니까? 읽어보세요.
author: Node.js Foundation
ref: Interested in Contributing to Node.js Core? Read On.
refurl: https://medium.com/the-node-js-collection/interested-in-contributing-to-node-js-core-read-on-5614f60d074d#.42wt46x2v
translator: pineoc
---
![](https://cdn-images-1.medium.com/max/800/1*wWp5_CPpCsNvJNbcgTKnkQ.jpeg)
* How you will feel after you submit your first PR.

It’s 2017 and one of your New Year’s resolutions is contributing back to the Node.js project. So, where do you get started?

Rich Trott, a Node.js Core Technical Committee member, talked a bit about contributing to Node.js Core in this Node.js Interactive North America video, but there were still a ton of questions after his talk.

He decided to host a Sideway conversation with Node.js collaborators, Anna Henningsen and Bryan English to help answer additional questions from those that are looking to participate in the Node.js Project.

Below is a condensed version of the conversation. Do you have more questions on this topic? Please ask Anna, Bryan or Rich on Twitter or GitHub.

### Why is it important to contribute to Node.js?

Rich: Helping folks contribute to Node.js Core is important to me for at least two reasons:

- First, it contributes to the health of the project. If it’s easy for people with talents to use those talents to help the project, then the project benefits.
- Second, it’s a moral imperative (in my opinion). Being energetic in the pursuit of contributors hopefully means we’re not being exclusionary, or at least being less exclusionary than we’d be if we weren’t trying to help new and existing contributors.

Bryan: I’d add that it’s important to me that people treat the project as part of their application, and not just as a upstream chunk of code written by “other” people. Getting more people contributing is a big part of that.

Anna: That’s a perfect addition, yes — It’s a problem that Node.js Core has been having in the past and imho this is an important way of working on it!

### Question: How can someone who isn’t a strong developer contribute back to Node.js Core?

Rich: I think there’s two ways to answer that question: One if we’re talking about someone who is essentially not a developer and not particularly interested in being a developer. And the other answer would be for people who are developers, just not very experienced.

Anna: So, if you’re not a developer: You can always try to look at the documentation side of things, watch out for typos and passages that seem unclear to you (especially if you’re not a developer or not a particularly experienced one!)

William Kapke gave a [great talk at Node Interactive in Austin, TX](https://www.youtube.com/watch?v=SV0p3ET1vpU) on how he contributes (invaluably!) to the Node project without writing any code in Node.js Core itself — if you have the time, it’s worth listening to.

Rich: If your English is strong, there are a bunch of things that we could use help with in the docs: there is way too much abuse of hyphens; there are tons of comma splices; overuse of passive voice; tons of stuff that is too wordy and needs to be edited down… And of course, doc omissions and errors. Please fix those.

If you are strong in a language other than English, translation help is always needed/welcome. (Unfortunately, non-English docs are in separate repositories on a per-language basis, I believe.)

Anna: If you are eager to get going on this, the source files for the docs are at https://github.com/nodejs/node/tree/master/doc

Rich: I would also add that I consider just opening issues for bugs you find to be a form of contributing to Node.js Core. A good bug report (emphasis on good) is incredibly valuable.

On the other question of how to contribute code if you’re not very experienced, I try to set people up with code cleanup on tests. That’s my go-to for first-time contributors. It’s a good thing to start with, whether you are experienced or not, because it’s a good idea to focus on the process the first time you contribute anyway, rather than focusing on how the code works.

Tests are usually understandable, and even when they’re not, you can still feel pretty secure changing some instances of var to const and updating a few assert.equal() instances to assert.strictEqual().

I have a Twitter handle (@NodeTodo) and an email address (help@[nodetodo.org](https://sidewayembed.com/redirect?url=unknown%3A%2F%2Fnodetodo.org)) that anyone who has never contributed to Node.js can use to request a simple first commit.

Anna: So one thing: Don’t worry! Node.js is a large software project, so it’s kind of intimidating by default. But it’s not realistic that you’d actually have to worry about breaking something by accident or something like that — we have a lot of mechanisms in place to prevent that, and we’re always quite happy to see first-time contributors step up to the challenge! :)

Bryan: Many of my contributions (including my first) have been out of needs I had in my day-to-day work, so I’d encourage when submitting a bug report (a good one, as Rich mentioned), to think about ways it could become your first PR.

Anna: Right — if you feel like you’re up for doing it, you can try to compile Node.js from the git repository and make install, so it becomes your default node binary, and update that from time to time. That’s basically how I got started finding bugs in Node.js.

Rich: Just make sure you do that only in an environment that can handle occasional breakage. :-D

Anna: right. ;) If you do encounter any bugs — don’t feel obliged to fix them yourself if it seems overwhelming, like Rich said, a good bug report is worth gold.

### Question: What would be the next level after code cleanups at the test subsystem?

Rich: Good question from someone who has been doing a ton of test cleanup. :-D

Anna (with some contributions from others as well) set up [coverage.nodejs.org](https://sidewayembed.com/redirect?url=unknown%3A%2F%2Fcoverage.nodejs.org). I often tell people to look at the test coverage to find a good second commit after they’ve landed their first commit. That will get you out of cleaning up existing tests and into writing new tests.
There’s a guide in the source tree (under doc/guides/[writing-tests.md](https://sidewayembed.com/redirect?url=unknown%3A%2F%2Fwriting-tests.md)) that goes over how to write a test for Node.js core.

If you’re into C++, then I’d say ask one of the C++ people like Anna.

Anna: One thing, in a similar vein, maybe even one or steps further down the road: Our benchmarks are far from complete, too. Feel free to look around in that folder and see if something strikes you as missing!

Bryan: Even with good coverage, some code paths can be missed, so it’s sometimes worth it to look at a test file and see if it’s missing anything.

Rich: I should also mention that I have a definite bias towards tests. I don’t think tests were my first contribution to Node.js, but they definitely are where I have spent the most time, overwhelmingly. Asking someone else might get a different answer. One place you can always ask is #node-dev on Freenode IRC. That’s for Node.js Core discussions. General Node.js questions should go to #Node.js instead.

### Question: I have contributed once on a simple issue. Will @NodeTodo keep me in the loop on newer simpler issues?

Rich: I try not to hand out specific second commits via NodeTodo too much. I try to direct people to coverage.nodejs.org or otherwise have them come up with their own issues. I try to keep stuff in reserve for first-timers. I’m not sure I have a good concrete reason for that. It just feels right, I guess. But I’m happy to help anyone figure out a second (or third or fourth) commit. It will just take longer and be more effort.

### Question: Is the roadmap for Node well-defined? Do you accept feature requests from the community or do most of the ideas come from the core group?

Anna: We don’t have a fixed, centralized roadmap, and we definitely want to talk about feature requests from and with the community; but keep in mind that a lot of people would prefer to have those things in Node core that can’t be easily implemented and maintained in userland (= outside of Node core, for example as an npm package).

Rich: You shouldn’t feel shy about opening an issue and asking, though.

Yeah, there’s a feature request label on the issue tracker, so feature requests are welcome.

Also, if you have a concrete idea, implementation design and all, take a look at https://github.com/nodejs/node-eps.

Anna: That node-eps is for the really large and wide-reaching changes — I wouldn’t recommend going there first, actually. If you want to see a feature implemented, go to nodejs/node, and we’ll see where to go from there :)

Rich: Yes, node-eps repo is definitely not the first stop.

### Question: How much of the core effort is C++ vs JS?

Anna: I’m pretty sure the overwhelming majority of code in Node core is written in JS, and you definitely do not need any C++ knowledge to contribute to Node! The same goes the other way around: You probably don’t actually need to know JS for contributing to the C++ side of things.

That being said, there’s much more activity around the JS parts of Node, and a lot more people are involved on that side.

Bryan: Most of the C++ code I’ve seen in core is glue code, providing things from libraries like LibUV and OpenSSL to JavaScript. So yeah, a majority of what’s actually happening in core seems to be in JavaScript-land.

### Question: I’m just starting with PR’s to bigger public node based projects. I’ve done a number of small PR’s, I’m working on a PR for ‘got’ currently but would also definitely like to contribute to node core in the future. A question I struggled with slightly is that a PR can be a lot of work. Especially when submitting something that isn’t ‘your first PR’. For a younger developer, this can be intimidating because of the fear your PR gets outright rejected. Fixing a comparison is one thing, but many issues require more than a couple lines. Would you encourage us young ones to power on and accept sometimes you will lose time with little return, submitting code that’s subpar? Or alternatively encourage discussion on the issue and perhaps prematurely opening a PR to get some direction and work on with confidence?

Rich: There are two approaches that I can think of offhand:

- One is to hop on IRC (or Slack or whatever) and chat with devs on the project. Obviously that will only work if the project in question has devs available that way and if the right people are available when you come to ask questions. So, that can be a bit of toss of the dice.
- Another approach (which you touch on) is issue tracker based. Of course, comments and back-and-forth and “here’s a little bit of code, does this look like the right approach” can help.

So you can just opening a PR if you can put together some minimal approach that won’t take you three weeks of work just to have it rejected.

If you can get philosophical about it and decide that the goal is to learn and improve yourself and the world, a rejected PR is not a failure. It’s a journey. A learning process. But it’s easier to type that than to internalize that attitude, I suspect.

Another thing is that the whole “oh my gosh, I can’t possibly submit a PR because all those smart people will make fun of me”… I mean, you didn’t say that, but I’m taking it to an extreme, perhaps… If that’s the attitude the project is projecting, then we’ve got a lot of work to do.

If that’s just sorta how one might feel about any large project, we still have work to do. Because we need to be a project that feels welcoming.

I’m wall-of-texting and drifting away from the actual question. Go, Bryan!

Bryan: Well I was just going to say I get that feeling with nearly every PR I submit, or at least some form of it. It’s nobody’s fault, it’s just being nervous about putting stuff you’ve created out for public review. It can be nerve-wracking.

The fear of rejection is real, but I think pushing through it eventually makes you a better developer, by taking any commentary that comes and using it to make your PR (or your next one) better.

Also, (and this was hard for me early on) never take criticism of your PR as a personal attack.

Anna: Oh, just to be clear: If the criticism of your PR is not based on its technical merits, and it is a personal attack, report that to one of us and we’ll take care of it (or any member of the core team you trust a bit).

### Question: What’s the difference between Code & Learn, Node Todo, NodeSchool…?

Rich: Code & Learn started as an effort to try to teach new people about corners of the code where we have inadequate number of people who understand it. It has morphed into helping people become contributors. First-time contributors, mostly, although it’s still a great event if you want to get deeper in the code because there will always be core devs there, often ones who have knowledge about the code base few others do.

Node Todo is all about the first-time contributor. The main differences (from my perspective) between Code & Learn and Node Todo are:
- Code & Learn is a project of the Node.js Foundation while Node Todo is something anyone can do.
- There are no sponsors and Node Todo is always free and open to the public.
- The other thing about Node Todo is that it’s not just an event. You can just email or use Twitter to get going.

NodeSchool is also a community effort, but has nothing to do with getting started with Node.js core and contributing. It’s all about learning about Node.js and adjacent technologies, not about the core code in the project.

### Question: What’s the easiest way I can find things that I could possibly contribute to Node Core?

Rich: My incredibly brief answer to the easiest way to find things you could possibly contribute to Node core is: http://nodetodo.org/getting-started/

But that interprets the question with emphasis on the “easiest” part. I suspect Tierney may have intended the emphasis to be on “possibly”. That is, instead of “how do I find something, anything, easily”, it may have been “how can I find all the things where contributing is possible”.

Getting started contributing to Node.js. My answer there might be: [Ask William Kapke](https://twitter.com/williamkapke). :-D

There’s a [Getting Involved](https://nodejs.org/en/get-involved/) section on the website and a list of all the [working groups](https://nodejs.org/en/about/working-groups/) that’s a good place to get started.

Bryan: I think using node is one of the best ways to find avenues for contribution. You’ll always find something that needs doing if you’re using node every day (for work or for fun!).

### Question: Is there anything I need to know before submitting my first contribution?

Rich: Hopefully, everything you need to know is here. If not, then we need to update that document, probably.

Anna: Also: Read our Code of Conduct. Thanks!

Rich Trott: Yeah, that’s the very first thing in that [CONTRIBUTING.md](https://sidewayembed.com/redirect?url=unknown%3A%2F%2FCONTRIBUTING.md) document. :tada:

### Anything else to add before we sign off here?

Anna: Yeah, I’d just like to mention that if you feel unsure about anything when contributing to or interacting with Node core, I’m always someone you can contact in private ([addaleax on Twitter](http://twitter.com/addaleax), IRC, etc.) if it helps you feel better

Rich: Ditto. :-D ([Contact for Rich](https://twitter.com/trott))

Bryan: Me three ([Contact for Bryan](https://twitter.com/bengl))
