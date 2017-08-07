---
category: articles
title: "ES Modules와 Node.js: 쉽지 않은 선택"
author: Rod Vagg
ref: "ES Modules and Node.js: Hard Choices"
refurl: https://nodesource.com/blog/p/d3b00779-9a82-43d1-b067-21ff2d436449/
translator:
- <a href="https://github.com/outsideris" target="_blank">Outsider</a>
---

<!--
Yosuke Furukawa is a Node.js Core Collaborator and one of the passionate champions of the Japanese Node.js community.

Yosuke recently published a blog post in Japanese regarding the challenges Node.js was facing with considering ES Modules support. As there is a lack of concise information laying out the complex factors involved in making decisions around ES Modules in Node.js, we asked him if we could publish his post in English. We have worked with him to translate and update the content to reflect the current state of events and hope you find this article instructive.
-->
[Yosuke Furukawa](https://twitter.com/yosuke_furukawa)는 Node.js 핵심 기여자이고
일본 Node.js 커뮤니티에서 가장 열정 있는 사람 중 하나입니다.

최근 Yosuke가 Node.js에서 ES Modules 지원에 대해 직면한 고민에 대해서
[일본어로 글](http://yosuke-furukawa.hatenablog.com/entry/2016/05/10/111102)을
작성했습니다. Node.js에서 ES Modules에 대한 의사결정에 포함된 복잡한 요소들을 설명하는 간결한
정보가 부족했으므로 Yosuke의 글을 영어로 번역해도 되는지 문의했습니다. Yosuke와 함께 글을 번역하고
현재 상황을 반영해서 문서를 갱신했습니다. 이 문서에서 유용한 정보를 얻기를 바랍니다.

<hr>

<!--
ECMAScript 2015 (ES2015, formerly ES6) was published almost a year ago. Node.js v6 supports 93% of the ES2015 syntax and features and most modern browsers exceed 90%. However, no JavaScript runtime currently supports ES Modules. (Note that kangax's compatibility table does not yet have an ES Modules column.)

![](http://cdn-ak.f.st-hatena.com/images/fotolife/y/yosuke_furukawa/20160509/20160509010917.png)
-->
ECMAScript 2015(ES2015, 이전에는 ES6)는 거의 1년 전에 발표되었습니다. Node.js v6는
ES2015 문법과 기능의 93%를 지원하고 대부분의 현대 브라우저는 90% 이상을 지원합니다. 하지만
ES Modules를 지원하는 JavaScript 런타임은 현재 없습니다.
([kangax의 호환성 표](https://kangax.github.io/compat-table/es6/)에는
아직 ES Modules 항목이 없습니다.)

![](http://cdn-ak.f.st-hatena.com/images/fotolife/y/yosuke_furukawa/20160509/20160509010917.png)

<!--
ECMAScript 2015 defines the ES Modules syntax but ECMAScript does not define a "Loader" specification which determines how Modules are inserted into the runtime. The Loader spec is being defined by WHATWG, but is not yet finalized.

The WHATWG Loader spec needs to define the following items for Milestone 0 on its roadmap:

* Name resolution (relative and absolute URLs and paths)
* Fetch integration
* How to describe script tag: <script type="module">
* Memoization / caching

The Module script tag has been defined, but the other items are still under discussion. You can check the status of this discussion on GitHub. Some browsers have started implementation, but most are waiting for finalization of the Loader spec.
-->
ECMAScript 2015에 ES Modules가 정의되어 있지만 ECMAScript는 모듈을 런타임에 추가하는 방법을
결정하는 "Loader" 명세는 정의하지 않았습니다. Loader 명세는
[WHATWG에서 정의](https://whatwg.github.io/loader/)하고 있지만, 아직 완료되지 않았습니다.

WHATWG Loader 명세는 로드맵의
[마일스톤 0](https://github.com/whatwg/loader/blob/master/roadmap.md)에서
다음 요소를 정의해야 합니다.

* 이름 처리 (상대적, 절대적 URL과 경로)
* Fetch 통합
* script 태그를 설명하는 방법: `<script type="module">`
* 메모이제이션 / 캐싱

Module 스크립트 태그는 [정의되었지만](https://blog.whatwg.org/js-modules), 다른 요소는
아직 논의 중입니다.
[GitHub](https://github.com/whatwg/loader/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+milestone+0+)에서
이 논의의 상황을 볼 수 있습니다. 일부 브라우저는 구현하기 시작했지만, 대부분은 Loader 명세가
완료되기를 기다리고 있습니다.

<!--
## Why does Node.js need ES Modules?

When Node.js came into existence, an ES Modules proposal didn't exist. Node.js decided to use CommonJS Modules. While CommonJS as an organization is no longer an active concern, Node.js and npm have evolved the specification to create a very large JavaScript ecosystem. Browserify and more recently webpack bring Node's version of CommonJS to the browser and solve module problems gracefully. As a result, the Node/npm JavaScript module ecosystem spans both server and client and is growing rapidly.

But how do we deal with interoperability between standard ES Modules and CommonJS-style modules in such a big ecosystem? This question has been debated heavily since the beginning of the ES Modules spec process.
-->

## 왜 Node.js에서 ES Modules가 필요한가?

Node.js가 등장했을 때 ES Modules 제안은 없었습니다. Node.js는
[CommonJS](https://en.wikipedia.org/wiki/CommonJS) 모듈을 사용하기로 했습니다.
CommonJS 조직이 활발하게 진행되지 않는 상황에서 Node.js와 npm이 매우 큰 JavaScript 생태계를
만들려고 CommonJS 명세를 발전시켰습니다. [Browserify](http://browserify.org/)와 더 최근에는
[webpack](https://webpack.github.io/)이 CommonJS의 Node 버전을 브라우저로 가져옴으로써
모듈 문제를 잘 해결했습니다. 그 결과 Node/npm JavaScript 모듈 생태계는 서버와 클라이언트 모두에
적용되었고 빠르게 성장하고 있습니다.

하지만 지금과 같이 큰 생태계에서 표준 ES Modules와 CommonJS 형식의 모듈 간의 상호운용성을 어떻게
다루어야 할까요? ES Modules 명세 작업이 시작된 이후 이 질문에 대해 많은 논의가 이뤄졌습니다.

<!--
Browserify and webpack currently bridge the gap between browser and server to make JavaScript development easy and somewhat unified. If we lose interoperability, we increase the friction between the existing ecosystem and new standard. If front-end developers choose ES Modules as their preferred default and server-side engineers continue to use Node's CommonJS, the gap will only widen.
-->
Browserify와 webpack은 현재 브라우저와 서버에서 JavaScript 개발을 쉽게 하는 다리 역할을 하고
있고 어느 정도는 통합되었습니다. 상호운용성을 잃어버린다면 기존의 생태계와 새로운 표준사이의 마찰이
증가할 것입니다. 프론트엔드 개발자가 기본으로 ES Modules를 선택하고 서버 사이드 엔지니어가 Node의
CommonJS를 계속 사용한다면 그 차이는 더 넓어질 것입니다.

<!--
## An interoperability proposal for Node.js

Bradley Farias (a.k.a Bradley Meck) has written a proposal for interoperability between CommonJS and ES Modules. The proposal is presented in the form of a Node.js EP (Enhancement Proposal) and the pull request generated record amounts of discussion but also helped shape and tune the proposal. The EP was merged but still retains DRAFT status, indicating a preference rather than a clear intention to even implement ES Modules in Node.js. You can read the proposal here: https://github.com/nodejs/node-eps/blob/master/002-es6-modules.md.

Discussion and options explored during the development of this proposal are mostly found throughout the initial pull request comments thread but a partial summary can be found on the Node.js wiki.
-->

## Node.js의 상호운용성 제안

[Bradley Farias(혹은 Bradley Meck)](https://twitter.com/bradleymeck)가
CommonJS와 ES Modules의 상호운용성에 대한 제안을 작성했습니다. 이 제안은
Node.js EP(Enhancement Proposal) 형식으로 작성되어
[풀 리퀘스트](https://github.com/nodejs/node-eps/pull/3)가 등록되어 많은 논의가 이뤄져서
제안을 다듬는 데 도움이 되었습니다. 이 EP는 머지되었지만 아직 DRAFT 상태로 남아있어서 Node.js에서
ES Modules를 구현하려는 명백한 의도보다는 선호를 나타낸다고 할 수 있습니다.
<https://github.com/nodejs/node-eps/blob/master/002-es6-modules.md>에서
제안을 볼 수 있습니다.

이 제안을 개발하는 동안 이뤄진 논의와 선택사항은 최초 풀 리퀘스트의 댓글에서 주로 볼 수 있지만,
부분적인 요약은
[Node.js 위키](https://github.com/nodejs/node/wiki/ES6-Module-Detection-in-Node)에서
볼 수 있습니다.

<!--
The biggest challenge for Node.js is that it doesn't have the luxury of a <script type="module"> tag to tell it whether any given file is in CommonJS format or an ES Module. Unfortunately you can't even be sure in all cases what type of file you have simply by parsing it as the Modules spec presents us with some ambiguities in the distinction. It's clear that we need some signal that Node.js can use to determine whether to load a file as CommonJS (a "Script") or as an ES Module.
-->

Node.js의 가장 큰 도전은 해당 파일이 CommonJS 형식인지 ES Module인지를 알려주는
`<script type="module">` 태그 같은 좋은 방법이 없다는 것입니다. 안타깝게도 Modules 명세에서
구별방법에 모호함이 있으므로 파일을 파싱하는 것만으로 해당 파일이 어떤 형식인지 모든 상황에서 알아낼
수가 없습니다. Node.js가 파일을 CommonJS("Script")로 로드할지 ES Module로 로드할지 결정하기
위한 어떤 신호가 필요하다는 것은 확실합니다.

<!--
Some constraints that were applied in the decision making process include:

* Avoiding a "boilerplate tax" (e.g. "use module")
* Avoiding double-parsing if possible as Modules and Scripts parse differently
* Don't make it too difficult for non-JavaScript tools to make the determination (e.g. build toolchains such as Sprockets or Bash scripts)
* Don't impose a noticeable performance cost on users (e.g. by double-parsing large files)
* No ambiguity
* Preferably self-contained
* Preferably without vestiges in a future where ES Modules may be the most prominent type
-->
의사 결정 과정에 적용된 다음과 같은 제약사항이 있습니다.

* "상용문식의 세금"은 피합니다.(예시: `"use module"`)
* Modules와 Scripts를 다르게 파싱할 수 있는 이중 파싱은 피합니다.
* JavaScript가 아닌 도구에서 이 결정을 하기 너무 어렵게 만들지 않습니다.
  (예시: [Sprockets](https://github.com/rails/sprockets)나 Bash 스크립트같은 툴 체인 작성)
* 사용자에게 인지할만한 성능비용을 부과하지 않습니다. (예시: 큰 파일의 이중 파싱)
* 모호함을 없앱니다.
* 가능하면 자급자족합니다.
* 가능하면 ES Modules가 가장 뛰어난 형식이 될 미래에 유물이 남지 않게 합니다.

<!--
Clearly compromise has to be made somewhere to find a path forward as some of these constraints are in conflict when considering the options available.

The route chosen for the Node.js EP, and currently accepted by the Node.js CTC for ES Modules is detection via filename extension, .mjs (alternatives such as .es, .jsm were ruled out for various reasons).

Detection via filename extension provides a simple route to determining the intended contents of a JavaScript file: if a file's extension is .mjs then the file will load as an ES Module, but .js files will be loaded as a Script via CommonJS.
-->
가능한 선택사항을 고려할 때 이 제약사항 중 일부는 충돌하기 때문에 진행할 방향을 찾기 위해서
절충할 필요가 있습니다.

Node.js EP에서 선택한 방법과 Node.js CTC가 현재 받아들인 방법은 파일 확장자 `.mjs`로
ES Modules를 구별하는 것입니다.(대안이었던 `.es`, `.jsm`은 여러 가지 이유로 제외되었습니다.)

파일확장자로 구별하는 방법은 JavaScript 파일에 작성된 내용을 결정하는 간단한 방법을 제공합니다.
파일의 확장자가 `.mjs`이면 파일은 ES Module로 로드될 것이고 `.js` 파일은 CommonJS를 통해
Script로 로드될 것입니다.

<!--
### Basic interoperability algorithm
The following algorithm describes how interoperability between ES Modules and CommonJS can be achieved:

```
1. Determine if file is an ES Module (ES) or CommonJS (CJS)
2. If CJS:
  2.1. Wrap CJS code to bootstrap code
  2.1. Evaluate as Script
  2.2. Produce a DynamicModuleRecord from `module.exports`
3. If ES:
  3.1. Parse for `import`/`export`s and keep record, in order to create bindings
  3.2. Gather all submodules by performing recursive dependency loading
  3.3. Connect `import` bindings for all relevant submodules
  3.4. Evaluate as Module
```

![](https://raw.githubusercontent.com/yosuke-furukawa/esmodules_on_node/master/images/output.png)
-->

### 기초 상호운용성 알고리즘

다음 알고리즘은 ES Modules와 CommonJS 간의 상호운용성이 이뤄지는 방법을 설명합니다.

```
1. 파일이 ES Module(ES)인지 CommonJS(CJS)인지를 결정합니다.
2. CJS라면:
  2.1. CJS 코드를 부트스트랩 코드로 감쌉니다.
  2.2. Script로 평가합니다.
  2.3. `module.exports`에서 DynamicModuleRecord를 만듭니다.
3. ES라면:
  3.1. 바인딩하기 위해 `import`/`export`를 파싱하고 기록합니다.
  3.2. 재귀 의존성 로딩을 수행해서 모든 하위 모듈을 수집합니다.
  3.3. 관련 있는 모든 모듈에 `import` 바인딩을 연결합니다.
  3.4. Module로 평가합니다.
```

![](https://raw.githubusercontent.com/yosuke-furukawa/esmodules_on_node/master/images/output.png)

<!--
For example, if a developer wanted to create a module that exports both module types (CommonJS and ES Modules) for backward compatibility, their package.json may be defined as:

```
{
  "name": "test",
  "version": "0.0.1",
  "description": "",
  "main": "./index", // no file extension
}
```
-->
예를 들어 개발자가 모듈을 만드는데 하위호환성 때문에 두 가지 모듈 형식(CommonJS와 ES Modules)을
모두 지원하고자 한다면 다음과 같이 `package.json`을 정의할 것입니다.

```javascript
{
  "name": "test",
  "version": "0.0.1",
  "description": "",
  "main": "./index", // 파일 확장자 없음
}
```

<!--
The package will then have both an index.mjs and an index.js. The index.mjs is an ES Module, using the new export / import syntax:

```
// index.mjs
export default class Foo {
  //..
}
```

And the index.js is a CommonJS style module, using the module.exports object:

```
// index.js
class Foo {
  // ...
}
module.exports = Foo;
```
-->
이제 패키지는 `index.mjs`와 `index.js`를 모두 가집니다. `index.mjs`는 새로운 문법인
`export`/`import`를 사용하는 ES Module입니다.

```javascript
// index.mjs
export default class Foo {
  //..
}
```

`index.js`는 CommonJS 형식의 모듈로 `module.exports` 객체를 사용합니다.

```javascript
// index.js
class Foo {
  // ...
}
module.exports = Foo;
```

<!--
If the version of Node.js being used supports ES Modules via the .mjs file extension, it will first try to find an index.mjs. On the other hand, if the version of Node.js does not support ES Modules (such as Node.js v4 or v6), or it can not find an index.mjs, it will look for an index.js.

According to the EP, you would be able to use both require and import to find packages in your node_modules:

```
import mkdirp from 'mkdirp';
require('mkdirp');
```
-->
`.mjs` 파일 확장자로 ES Modules를 지원하는 Node.js 버전이라면 먼저 `index.mjs`를 찾으려고
할 것입니다. (Node.js v4나 v6처럼) ES Modules를 지원하지 않는 Node.js 버전이거나
`index.mjs`를 찾지 못한다면 `index.js`를 찾을 것입니다.

EP에 따르면, `node_modules`에서 패키지를 찾을 때 `require`와 `import`를
모두 사용할 수 있습니다.

```javascript
import mkdirp from 'mkdirp';
require('mkdirp');
```

<!--
For resolving modules local to your own project or package, you do not need to add a file extensions in your require() or import statements unless you want to be precise. The standard Node.js file resolution algorithm applies when you don't supply an extension, but an .mjs version is looked for before a .js:

```
require('./foo');
import './foo';
// these both look at
//   ./foo.mjs
//   ./foo.js
//   ./foo/index.mjs
//   ./foo/index.js

// to explicitly load a CJS module, add '.js':
import './foo.js';
// to explicitly load an ES module add '.mjs'
import './bar.mjs';
```
-->
자신의 프로젝트나 패키지 내에서 모듈을 가져올 때 정확하게 지정하려는 것이 아니라면 `require()`나
`import`문에서 파일 확장자를 추가할 필요가 없습니다. 표준 Node.js 파일 처리 알고리즘은
파일 확장자를 지정하지 않았을 때 적용되고 `.mjs`를 `.js`보다 먼저 찾습니다.

```javascript
require('./foo');
import './foo';
// 이는 다음을 모두 찾습니다.
//   ./foo.mjs
//   ./foo.js
//   ./foo/index.mjs
//   ./foo/index.js

// 명시적으로 CJS 모듈을 로드하려면 '.js'를 추가하세요.
import './foo.js';
// 명시적으로 ES 모듈을 로드하려면 '.mjs'를 추가하세요.
import './bar.mjs';
```

<!--
### Examples: Consuming CommonJS with ES Modules

#### Example 1: Load CommonJS from ES Modules

```
// cjs.js
module.exports = {
  default:'my-default',
  thing:'stuff'
};
```

```
// es.mjs

import * as baz from './cjs.js';
// baz = {
//   get default() {return module.exports;},
//   get thing() {return this.default.thing}.bind(baz)
// }
// console.log(baz.default.default); // my-default

import foo from './cjs.js';
// foo = {default:'my-default', thing:'stuff'};

import {default as bar} from './cjs.js';
// bar = {default:'my-default', thing:'stuff'};
```
-->

### 예제: ES Modules에서 CommonJS 사용하기

#### 예제 1: ES Modules에서 CommonJS 로드하기

```javascript
// cjs.js
module.exports = {
  default:'my-default',
  thing:'stuff'
};
```

```javascript
// es.mjs

import * as baz from './cjs.js';
// baz = {
//   get default() {return module.exports;},
//   get thing() {return this.default.thing}.bind(baz)
// }
// console.log(baz.default.default); // my-default

import foo from './cjs.js';
// foo = {default:'my-default', thing:'stuff'};

import {default as bar} from './cjs.js';
// bar = {default:'my-default', thing:'stuff'};
```

<!--
#### Example 2: Export value and assigning "default"

```
// cjs.js
module.exports = null;
```

```
// es.mjs
import foo from './cjs.js';
// foo = null;

import * as bar from './cjs.js';
// bar = {default:null};
```
-->

#### 예제 2: 값을 내보내고 "default" 할당하기

```javascript
// cjs.js
module.exports = null;
```

```javascript
// es.mjs
import foo from './cjs.js';
// foo = null;

import * as bar from './cjs.js';
// bar = {default:null};
```

<!--
#### Example 3: Single-function export

```
// cjs.js
module.exports = function two() {
  return 2;
};
```

```
// es.mjs
import foo from './cjs.js';
foo(); // 2

import * as bar from './cjs.js';
bar.name; // 'two' ( get function name)
bar.default(); // 2 ( assigned default function )
bar(); // throws, bar is not a function
```
-->

#### 예제 3: 단일 함수 내보내기

```javascript
// cjs.js
module.exports = function two() {
  return 2;
};
```

```javascript
// es.mjs
import foo from './cjs.js';
foo(); // 2

import * as bar from './cjs.js';
bar.name; // 'two' ( 함수명 가져오기 )
bar.default(); // 2 ( 할당된 default 함수 )
bar(); // bar is not a function 예외가 발생합니다
```

<!--
### Examples: Consuming ES Modules with CommonJS

#### Example 1: Using export default

```
// es.mjs
let foo = {bar:'my-default'};
export default foo;
foo = null; // this null value does not effect import value.
```

```
// cjs.js
const es_namespace = require('./es');
// es_namespace ~= {
//   get default() {
//     return result_from_evaluating_foo;
//   }
// }
console.log(es_namespace.default);
// {bar:'my-default'}
```
-->

### 예제: CommonJS에서 ES Modules 사용하기

#### 예제 1: `export default`의 사용

```javascript
// es.mjs
let foo = {bar:'my-default'};
export default foo;
foo = null; // 이 null 값은 import 값에 영향을 주지 않습니다.
```

```javascript
// cjs.js
const es_namespace = require('./es');
// es_namespace ~= {
//   get default() {
//     return result_from_evaluating_foo;
//   }
// }
console.log(es_namespace.default);
// {bar:'my-default'}
```

<!--
#### Example 2: Using export

```
// es.mjs
export let foo = {bar:'my-default'};
export {foo as bar};
export function f() {};
export class c {};
```

```
// cjs.js
const es_namespace = require('./es');
// es_namespace ~= {
//   get foo() {return foo;}
//   get bar() {return foo;}
//   get f() {return f;}
//   get c() {return c;}
// }
```
-->

#### 예제 2: `export`의 사용

```javascript
// es.mjs
export let foo = {bar:'my-default'};
export {foo as bar};
export function f() {};
export class c {};
```

```javascript
// cjs.js
const es_namespace = require('./es');
// es_namespace ~= {
//   get foo() {return foo;}
//   get bar() {return foo;}
//   get f() {return f;}
//   get c() {return c;}
// }
```

<!--
## Current state of discussion

Although built in a collaborative process, taking into account proposals for alternatives, Bradley's landed EP received a prominent counter-proposal from outside of the EP process. Going by the name "In Defense of .js", this counter-proposal relies on the use of package.json rather than a new file extension. Even though this option had been previously discussed, this new proposal contains some interesting additions.
-->

## 논의의 현재 상황
내부의 협업 과정에서 여러 가지 대안을 고려했지만 받아들여진 Bradley의 EP는 EP 과정 밖에서
가장 뛰어난 제안으로 받아들여졌습니다.
"[In Defense of .js](https://github.com/dherman/defense-of-dot-js/blob/master/proposal.md)"라는
이름의 제안으로 넘어가서 이 제안은 새로 만든 파일 확장자 대신 `package.json`을 사용합니다.
이전에도 이 방법에 대해 논의하기는 했지만, 이 제안에는 몇 가지 흥미로운 부분이 추가되어 있습니다.

<!--
In Defense of .js presents the following rules for determining what format to load a file, with the same rules for both require and import:

* If package.json has "main" field but not a "module" field, all files in that package are loaded as CommonJS.
* If a package.json has a "module" field but not "main" field, all files in that package are loaded as ES Modules.
* If a package.json has neither "main" nor "module" fields, it will depend on on whether an index.js or a module.js exists in the package as to whether to load files in the package as CommonJS or ES Modules respectively.
* If a package.json has both "main" and "module" fields, files in the package will be loaded as CommonJS unless they are enumerated in the "module" field in which case they will be loaded as ES Modules, this may also include directories.
* If there is no package.json in place (e.g. require('c:/foo')), it will default to being loaded as CommonJS.
* A special "modules.root" field in package.json, files under the directory specified will be loaded as ES Modules. Additionally, files loaded relative to the package itself (e.g. require('lodash/array')) will load from within this directory.
-->
_In Defense of .js_ 는 어떤 형식의 파일을 로드할지 결정하기 위해 `require`와 `import`에
동일하게 적용되는 규칙을 제안합니다.

* `package.json`에 `"main"` 필드는 있지만 `"module"` 필드가 없다면 패키지의
  모든 파일은 CommonJS로 로드합니다.
* `package.json`에 `"module"` 필드는 있지만 `"main"` 필드가 없다면 패키지의
  모든 파일은 ES Modules로 로드합니다.
* `package.json`에 `"main"`과 `"module"` 필드가 둘 다 없다면 패키지의 파일은 CommonJS로
  로드할지 ES Modules로 로드할지를 `index.js`가 있는지 `module.js`가 있는지에 따릅니다.
* `package.json`에 `"main"`과 `"module"` 필드가 둘 다 있는 경우 `"module"` 필드에서
  어떤 경우에 ES Modules로 로드할지를 설명하지 않았다면 패키지의 파일은 CommonJS로 로드합니다.
  여기서는 디렉터리를 지정할 수도 있습니다.
* `package.json`이 존재하지 않는다면(예: `require('c:/foo')`) 기본적으로 CommonJS로
  로드합니다.
* `package.json`에 특수한 필드인 `"modules.root"` 필드가 있다면 지정한 디렉터리의 파일은
  ES Modules로 로드합니다. 추가로 패키지 내에서 상대적으로 로드된 파일은(예시:
  `require('lodash/array')`) 해당 디렉터리 내에서 로드합니다.

<!--
### In Defense of .js Examples

```
// package.json
// all files loaded as CommonJS
{
  "main": "index.js" // default module for package
}
```

```
// package.json
// default to CommonJS, conditional loading of ES Modules
{
  "main": "index.js", // used by older versions of Node.js as default module, CommonJS
  "module": "module.js" // used by newer versions of Node.js as default module, ES Module
}
```

```
// package.json
// CommonJS with directory exceptions
{
  "main": "index.js",
  "module": "module.js",
  "modules.root": "lib" // all files loaded within this directory will be ES Modules
}
```
-->

### _In Defense of .js_ 예제

```javascript
// package.json
// 모든 파일은 CommonJS로 로드됩니다.
{
  "main": "index.js" // 패키지의 기본 모듈
}
```

```javascript
// package.json
// 기본은 CommonJS이고 조건에 따라 ES Modules로 로드됩니다.
{
  "main": "index.js", // CommmonJS를 기본 모듈로 Node.js 구 버전이 사용합니다.
  "module": "module.js" // ES Module를 기본 모듈로 Node.js 새로운 버전이 사용합니다.
}
```

```javascript
// package.json
// 예외적인 디렉터리 외에는 CommonJS를 사용합니다.
{
  "main": "index.js",
  "module": "module.js",
  "modules.root": "lib" // 이 디렉터리의 모든 파일은 ES Modules로 로드됩니다.
}
```

<!--
The above example is used to show how to maintain backward compatibility for packages. For older versions of Node.js, require('foo/bar') will look for a CommonJS bar.js in the root of the package. However, for newer versions of Node.js, the "modules.root": "lib" directory will dictate that loading 'foo/bar' will look for an ES Module at lib/bar.js.
-->
위의 예제는 패키지의 하위호환성을 유지하는 방법을 보여줍니다. Node.js의 구 버전에서
`require('foo/bar')`는 패키지의 루트에서 CommonJS `bar.js`를 찾습니다. 하지만 새로운
버전의 Node.js는 `"modules.root": "lib"`에서 `'foo/bar'` 로딩이 `lib/bar.js`에서
ES Module을 찾도록 지시합니다.

<!--
### Supporting both CommonJS and ES Modules

Under most proposals, including the Node.js EP and In Defense of .js, it is assumed that packages wishing to provide support for old and newer versions of Node.js will use a transpilation mechanism. Under the .mjs solution, the ES Modules would be transpiled to .js files next to their originals and the different versions of Node.js would resolve to the right file. Under In Defense of .js, the ES Modules would exist under a subdirectory specified by "modules.root" and be transpiled to CommonJS forms in the parent directory; additionally, package.json would have both "main" and "module" entry-points.
-->

### CommonJS와 ES Modules 모두 지원하기

Node.js EP와 _In Defense of .js_ 를 포함한 대부분의 제안에서 Node.js의 구 버전과 신버전을
지원하는 패키지가 트랜스파일 메커니즘을 사용할 것이라고 가정하고 있습니다. `.mjs` 방법에서
ES Modules은 원래의 파일과 함께 `.js` 파일로 트랜스파일되고 Node.js의 다른 버전은 적합한 파일을
사용할 것입니다. _In Defense of .js_ 에서 ES Modules는 `"modules.root"`에서 지정한
하위 디렉터리에 있고 이는 부모 디렉터리에서 CommonJS 형식으로 트랜스파일 될 것입니다. 게다가
`package.json`은 `"main"`과 `"module"` 진입점을 모두 가질 것입니다.

<!--
## Hard choices
In Defense of .js presents a view that we need to switch to ES Modules from CommonJS and prioritizes such a future. On the other hand, the Node.js EP prioritizes compatibility and interoperability.

Bradley recently wrote a post attempting to further explain the difficult choice and why a file extension was an appropriate way forward. In it, he goes into further details about why it is not possible to parse a file to determine whether it is an ES Module or not. He also further explores the difficulties of having an out-of-band descriptor (e.g. package.json) determine what type of content is in a .js file.

Although it may be sad to consider the loss of a universal .js file extension, it's worth noting that other languages have already paved this path. Perl for instance uses .pl for Perl Script, and .pm for Perl Module.
-->

## 쉽지 않은 선택
_In Defense of .js_ 는 CommonJS에서 ES Modules로 갈아타야 한다는 시각을 가지고 있고 그
시점에 더 우선순위를 두고 있습니다. 반면에 Node.js EP는 호환성과 상호운용성에 더 우선순위를 두고
있습니다.

최근 Bradley가 이 어려운 선택에 대해서, 또 왜 파일 확장자가 앞으로를 위해서도 적절한 방법인지를 설명하는
[글을 작성](https://medium.com/@bradleymeck/understanding-the-hard-choice-1ea3008fc9d0#.3gryiqkmv)했습니다.
이 글에서 파일이 ES Modules인지 아닌지를 결정하려고 파일을 파싱하는 것이 불가능한 이유를 자세하게
설명했습니다. `.js` 파일의 내용이 어떤 형식인지를 결정하는 외부 서술자(예: `package.json`)가
가지는 어려음도 설명했습니다.

보편적인 `.js` 파일 확장자를 버리기를 고민하는 것은 슬픈 일이지만 이미 다른 언어는 이 방법을
사용하고 있는 것을 강조할 필요도 없습니다. 예를 들어, Perl은 Perl Script에 `.pl`을 사용하고
Perl Module에는 `.pm`을 사용합니다.

<!--
## Getting involved
Even though the Node.js CTC has accepted the EP in its current form and stated its preference on how ES Modules would be implemented in Node.js (if they are implemented in Node.js at all), discussion continues and there is still room for change. You can engage with the Node.js community on this topic in the Node.js EP repository issues list. Be sure to first review existing comments to see if your concerns have already been addressed.

Bradley and the Node.js CTC are very concerned about getting this decision right, in the interests of Node.js users everywhere. The choices that Node.js is having to make to accommodate ES Modules are difficult and are not being approached lightly.
-->

## 참여하기
Node.js CTC가 현재 형식의 EP를 받아들였고 Node.js에서 ES Modules를 구현하는 방법(Node.js에서
조금이라도 구현된다면)으로 선호하고 있지만 논의는 계속되고 있고 아직 변경될 가능성이 있습니다.
[Node.js EP 저장소의 이슈 목록](https://github.com/nodejs/node-eps/issues)에서
이 토픽에 대해서 Node.js 커뮤니티와 토론할 수 있습니다. 고민하는 부분이 이미 논의되었는지를 보려면
첫 리뷰의 댓글을 보기 바랍니다.

Bradley와 the Node.js CTC는 모든 Node.js 사용자가 관심을 가지는 이 결정을 제대로 하기 위해서
고민하고 있습니다. ES Modules를 수용하기 위해 Node.js가 고민하는 선택은 어렵고
가볍게 다룰 수 없습니다.
