---
layout: blog-post.hbs
title: npm 보안 업데이트 v2.15.1 과 v3.8.3
author: Forrest Norvell
ref: npm security updates v2.15.1 and v3.8.3
refurl: https://nodejs.org/en/blog/vulnerability/npm-tokens-leak-march-2016/
translator: <a href="https://github.com/freenice12" target="_blank">freenice12</a>
---

<!--
_This announcement is also covered on the npm blog: <http://blog.npmjs.org/post/142036323955/fixing-a-bearer-token-vulnerability>._
-->
_이 공지는 npm 블로그에도 다뤄졌습니다: <http://blog.npmjs.org/post/142036323955/fixing-a-bearer-token-vulnerability>._

<!--
The primary npm registry has, since late 2014, used HTTP bearer tokens to authenticate requests from the npm command-line interface. Due to a design flaw in the CLI, these bearer tokens were sent with every request made by the CLI for logged-in users, regardless of the destination of the request. They should instead only be included for requests made against the registry or registries used for the current install.
-->
2014년 하반기 이후, 최초의 npm 저장소는 HTTP 베어러 토큰을 npm 커맨드-라인 인터페이스로부터의 인증 요청에 사용해왔습니다. CLI의 설계 결함 때문에 이 베어러 토큰들은 요청의 목적지와 관계없이 로그인한 사용자를 위해 CLI가 만들어낸 모든 요청과 함께 보내졌습니다. 그 토큰들은 반드시 현재의 설치를 위해 사용된 저장소나 저장소들에 의해 만들어진 요청들을 위해서만 포함되어야 했습니다.

<!--
This flaw allows an attacker to set up an HTTP server that could collect authentication information they could use to impersonate the users whose tokens they collected. This impersonation would allow them to do anything the compromised users could do, including publishing new versions of packages.
-->
이 결함은 공격자가 그들이 수집한 사용자의 토큰인 척 가장해 인증 정보를 수집할 수 있는 HTTP 서버를 조작할 수 있게 만들었습니다. 이 속임수는 공격자들에게 패키지의 새 버전 배포를 포함한 인증된 사용자가 할 수 있는 모든 것을 가능하게 했습니다.

<!--
This flaw has been fixed in [npm@2.15.1](https://github.com/npm/npm/commit/fea8cc92cee02c720b58f95f14d315507ccad401) (npm LTS) and [npm@3.8.3](https://github.com/npm/npm/commit/f67ecad59e99a03e5aad8e93cd1a086ae087cb29). The npm CLI team believes that the fix won't break any existing registry setups, but due to the large number of registry software suites in the wild, it's possible that this change will be breaking in some cases. If so, please [file an issue](https://github.com/npm/npm/issues/new) describing the software you're using and how it broke, and the team will work with you to mitigate the breakage.
-->
이 결함은 [npm@2.15.1](https://github.com/npm/npm/commit/fea8cc92cee02c720b58f95f14d315507ccad401)(npm LTS)과 [npm@3.8.3](https://github.com/npm/npm/commit/f67ecad59e99a03e5aad8e93cd1a086ae087cb29)에서 수정 되었습니다. npm CLI 팀은 npm 생태계의 수많은 소프트웨어 제품군 저장소가 있음에도 이 수정이 어떤 기존 저장소의 설정도 깨뜨리지 않을 것으로 믿지만, 어떤 경우에는 깨뜨리는 것도 가능하다고 생각하고 있습니다. 만약 그런 경우 [이슈를 등록](https://github.com/npm/npm/issues/new)해 사용하는 소프트웨어와 어떻게 작동하지 않는지를 설명해주면, 해당 팀이 당신을 도와 손실을 줄여줄 것입니다.

<!--
If you believe that your bearer token may have been leaked, it should be sufficient to [invalidate your current npm bearer tokens](https://www.npmjs.com/settings/tokens) and to rerun npm login to generate new tokens. Keep in mind that this may cause continuous integration builds in services like Travis to break, in which case you'll need to update the tokens in your CI server's configuration.
-->
만약 당신의 베어러 토큰이 유출되었다고 생각되면, [현재 사용 중인 npm 베어러 토큰을 폐기](https://www.npmjs.com/settings/tokens)할 수 있고, 새로운 토큰을 생성해 npm 로그인을 다시 실행해주시면 됩니다. 이 결함은 트비스(Travis) 같은 지속적 통합(CI) 빌드의 결함을 야기할 수 있음을 명심해야 하고, 이럴 경우 당신은 CI 서버의 환경 속 토큰들을 업데이트 해야 할 필요가 있습니다.

<!--
Thanks to Mitar, Will White & the team at Mapbox, Max Motovilov, and James Taylor for reporting this vulnerability to npm.
-->
npm의 이런 취약점을 제보해준 Mitar와 Will White와 Mapbox 팀, Max Motovilov James Taylor에게 감사의 말씀을 드립니다.

<!--
As Node.js ships with npm, releases for the active lines will be made available shortly for your convenience. Please watch the [Node.js news feed](https://nodejs.org/en/blog/) for the following releases:
-->
Node.js에 npm이 포함되어 배포되므로 편하게 사용할 수 있도록 곧 새로운 릴리가 이뤄질 예정입니다. 다음의 릴리즈에 대해서는 [Node.js 뉴스 피드](https://nodejs.org/en/blog/)를 봐주시길 바랍니다.

<!--
* **v0.10 (Maintenance)**: [Node.js v0.10.44](http://nodejs.org/en/blog/release/v0.10.44/) includes npm LTS v2.15.1. This is a major upgrade of npm from v1 which has previously been deprecated. No fix is being made available for npm v1, please upgrade to npm v2 as soon as possible.
* **v0.12 (LTS)**: [Node.js v0.12.13](http://nodejs.org/en/blog/release/v0.12.13/) includes npm LTS v2.15.1.
* **v4 (LTS "Argon")**: [Node.js v4.4.2](http://nodejs.org/en/blog/release/v4.4.2/) includes npm LTS v2.15.1.
* **v5 (Stable)**: [Node.js v5.10.0](http://nodejs.org/en/blog/release/v5.10.0/) includes npm v3.8.3.
-->
* **v0.10(유지보수 버전)**: npm LTS v2.15.1을 포함한 [Node.js v0.10.44](https://nodejs.github.io/nodejs-ko/articles/2016/04/01/release-v0.10.44/). 이것은 v1 이전에 사용이 중지된 npm의 주요 업그레이드입니다. 수정 없이 npm v1을 사용할 수 있도록 했고, 가능한 빠른 시일 내에 npm v2로 업그레이드하시기 바랍니다.
* **v0.12(LTS)**: npm LTS v2.15.1을 포함한 [Node.js v0.12.13](http://nodejs.org/en/blog/release/v0.12.13/).
* **v4(LTS "Argon")**: npm LTS v2.15.1을 포함한 [Node.js v4.4.2](http://nodejs.org/en/blog/release/v4.4.2/).
* **v5(안정)**: npm v3.8.3을 포함한 [Node.js v5.10.0](http://nodejs.org/en/blog/release/v5.10.0/).

<!--
**Update:** Unfortunately the version of npm that was bundled with Node.js version v0.10.44, v0.12.13 and v4.4.2 did not include the correct version string, `npm -v` reports `2.15.0`, however the code is v2.15.1.
-->
**업데이트:** 불행하게도 Node.js 버전 v0.10.44, v0.12.13, v4.4.2와 함께 제공된 npm은 올바른 버전 문자열을 포함하지 않았었습니다. `npm -v`는 `2.15.0`으로 표시되었지만, 실제 코드는 v2.15.1입니다.

<!--
**Note that you can upgrade your installed version of npm manually** without requiring a Node.js update by using the command `npm install npm@2 -g` for npm LTS v2.15.2 or `npm install npm@3 -g` for npm v3.8.5.
-->
**당신이 설치한 npm 버전을 수동으로 업데이트할 수 있습니다.** npm LTS v2.15.2을 위한 `npm install npm@2 -g` 명령어 혹은 npm v3.8.5를 위한 `npm install npm@3 -g` 명령어를 이용해 Node.js를 업데이트할 필요가 없습니다.