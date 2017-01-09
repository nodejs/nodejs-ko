---
category: articles
title: 2015년의 JavaScript와 babel 이야기
author: <a href="https://twitter.com/yosuke_furukawa" target="_blank">yosuke_furukawa</a>
ref: 2015 年の JavaScript と babel の話(るびま)
refurl: http://magazine.rubyist.net/?0050-ECMAScript2015
translator:
  - <a href="https://github.com/marocchino" target="_blank">marocchino</a>
---

<!--
# はじめに

Node.js 日本ユーザーグループ代表の古川 (@yosuke_furukawa) です。るびま初投稿です。よろしくお願いいたします。

今日は JavaScript の基本的な所に触れつつ、今後の JavaScript である ECMAScript2015 (旧 ECMAScript6 ) の話を中心にしようと思います。

ECMAScript2015 (以下 ES2015 ) は今年の 6 月に公式に次の ECMAScript として仕様が公開されます。この ECMAScript の仕様に準拠した言語実装が JavaScript であり、簡単に言ってしまえば 今後のブラウザ ではこの ES2015 の仕様に準拠した新しい JavaScript が使えるようになります。

ただし、それは今後のブラウザであって、現在普及しているブラウザでは使えません。ES2015 の機能をサポートしたブラウザを待つのではなく、ES2015 で記述し、それを現在普及しているブラウザでも扱えるようにするトランスパイラ babel (旧 6to5) に関して今回は解説します。

また Ruby を記述している方々の中ではウェブのアプリケーションを構築されている方も多いと思いますが、この babel は次の Sprockets の v4.x で導入が検討されており、新しい Sprockets では ES6 で記述することもできる可能性があります。
-->

# 시작하며

Node.js 일본 유저 그룹 대표인 후루카와(@yosuke_furukawa)입니다. 루비마에는 처음
글을 써보네요. 잘 부탁드립니다.

오늘은 JavaScript의 기본적인 이야기와, 앞으로의 JavaScript인 ECMAScript2015(구
ECMAScript6)의 이야기를 중심으로 할까 합니다.

ECMAScript2015(이하 ES2015)는 올해 6월에 다음 공식 ECMAScript 사양으로
발표되었습니다. 이 ECMAScript의 사양을 준수한 언어 구현이 JavaScript이며, 간단히
설명하면 앞으로의 브라우저에는 이 ES2015의 사양을 준수하는 새로운 JavaScript를
사용할 수 있게 됩니다.

하지만 이것은 이후의 브라우저이며, 현재 배포 중인 브라우저에서는 사용할 수
없습니다. ES2015의 기능을 지원하는 브라우저를 기다리지 않고, ES2015로 구현해,
이것을 지금 배포 중인 브라우저에서도 동작하게 하는 트랜스파일러 babel(구 6to5)에
대해서 이번에 설명할까 합니다.

또, Ruby를 쓰시는 분들 중에 웹 애플리케이션을 만드시는 분들도 많다고
생각합니다만, 이 babel은 다음 Sprockets의 v4.x에 도입을 검토하고 있고, 새로운
Sprockets에서는 ES6로 작성 가능해질 수도 있습니다.


<!--
# トランスパイラで何が嬉しいのか

トランスパイラというのは、ES2015 以降のセマンティクスで書かれた JavaScript を現在使われているブラウザでも使えるようにするための変換処理をするツールです。

ES2015 は仕様公開を 6 月に控えて、盛り上がりを見せています。 Chrome の開発ビルド (Canary) や Firefox の開発版 (Aurora) にも多くの ES2015 の機能追従がされてますし、一部の機能は既に今のブラウザでも扱えるようになっています。ただし、全ての機能セットを揃えたブラウザは今のところ存在しません。

さらに、JavaScript には他の言語には必ずあるような一般的な機能が欠落している事も多く、それをカバーするために Underscore といったライブラリや CoffeeScript, TypeScript, JSX といった altJS が台頭しています。

ES2015 に対応した JavaScript を使うことで、ライブラリの機能が不要になり、依存ライブラリを減らすことができたり、altJS に頼らなくても豊富な言語機能が扱える可能性が広がります。

また数年後には ES2015 が広まっていることを考えるとその時までに ES2015 の新文法、新機能に慣れておいたほうがスムーズな移行が期待できます。
-->

# 트랜스파일러의 장점

트랜스파일러란, ES2015 이후의 문법으로 적힌 JavaScript를 지금 사용 중인
브라우저에서도 사용할 수 있게 변환하는 도구입니다.

ES2015는 6월에 사양 공개가 예정되어 있으며, 활발하게 토론 중입니다. Chrome의 개발
빌드(Canary)나 Firefox의 개발판(Aurora)에도 많은 ES2015의 기능이 구현되어
있으며, 일부 기능은 이미 지금 브라우저에서도 사용할 수 있게 되었습니다. 하지만
모든 기능을 사용할 수 있는 브라우저는 아직 없습니다.

더욱이, JavaScript에는 다른 언어에서는 반드시 있을 법한 일반적인 기능이 없을
때가 많고, 그것을 보완하기 위한 Underscore라는 라이브러리나 CoffeeScript,
TypeScript, JSX 같은 altJS가 나오게 되었습니다.

ES2015에 대응하는 JavaScript를 사용함으로써, 라이브러리가 필요 없게 되어, 기존
라이브러리를 줄일 수 있게 된다든가, altJS에 기대지 않고도 풍부한 언어 기능을
사용할 가능성이 커졌습니다.

또 수 년 후에는 ES2015가 널리 퍼져있을 거라 생각하면, 그때가 되기 전에 ES2015의
새로운 문법, 신기능을 배워두는 편이 부드럽게 이전할 수 있습니다.

<!--
# ECMAScript 2015 について

ECMAScript 2015 には、下記の仕様が機能として追加されます。

- let/const といった Blocking Scope
- Map/Set/WeakMap/WeakSet といった Collections
- 型を定義する Class
- Generator/for..of
- Promises
- Template String Literals
- Arrow Functions
- modules
-->

# ECMAScript 2015에 대하여

ECMAScript 2015에는, 밑에 있는 사양이 기능으로 추가됩니다.

- let/const에 의한 블록 스코프
- Map/Set/WeakMap/WeakSet에 의한 컬렉션
- 형을 정의하는 클래스
- 제너레이터/for..of
- Promises
- Template String Literals
- 화살표 함수
- 모듈

<!--
# babel について

今一番更新がホットな トランスパイラの一つです。他にもトランスパイラはいくつか存在しますが、新しい文法を一番サポートしているのが babel になります。ちなみに読み方は決まっていません。いろんな読み方を許容しているので、「バベル」でも「ベーベル」でも「バブゥ」でもいいらしいです
babel サポート文法一覧
-->

# babel에 관하여

지금 가장 업데이트가 자주되는 트랜스파일러 중 하나입니다. 다른 트랜스파일러도
몇 가지 있지만, 새로운 문법을 가장 많이 지원하고 있는 게 babel입니다. 덤으로 읽는
법은 정해저 있지 않습니다. 여러 읽는 법이 허용되므로, "바벨"이 아니라 "바브"로
읽어도 된다고 합니다.[^1]


babel에서 지원하는 문법 목록
![babel에서 지원하는 문법 목록](/nodejs-ko/public/images/babel-syntax.png)
[http://kangax.github.io/compat-table/es6/](http://kangax.github.io/compat-table/es6/)

<!--
## babel インストール

npm を利用します。node.js をインストールしておいてください。

```
$ npm install babel -g
```

こうすると 3 つのコマンドラインツールがインストールされます。

- babel (babel の基本コマンド、本コマンドを利用すれば ES2015 で記述された JavaScript ファイルをトランスパイルできる)
- babel-node (babel でのトランスパイルをした上でコードを node で実行するためのコマンド、REPL にもなる)
- babel-external-helpers (babel の utility を babel の外からも使えるようにするためのコマンド)

簡単な使い方としては下記の通り

```
# babel filename でトランスパイルすると標準出力に結果が出る
$ babel test.js

# babel -o を使うと出力先ファイルを指定できる
$ babel -o test2.js test.js

# babel -w を使うと変更を監視してファイルを出力できる
$ babel -w test.js -o test2.js

# ソースマップを付ける場合は -s, インラインソースマップが欲しいなら -t
$ babel -s -t -w test.js -o test2.js
```

トランスパイルではなく、スクリプトとしてそのまま実行することもできます。 実行したい場合は babel-node を使います。

```
$ babel-node test.js
```

ファイルを省略して実行すると、簡単な REPL にもなります。ただし、改行する度に逐次実行されるため、今のところ一行で全て書く必要があるので REPL としての利用はオススメはしません。

```
$ babel-node
> [0, 1, 2, 3].map((x)=>x*x);
[ 0, 1, 4, 9 ]
```
-->

## babel 설치

npm을 사용합니다. node.js도 설치해 둘 필요가 있습니다.

```
$ npm install babel -g
```

이렇게 하면 3개의 커맨드라인 도구가 설치됩니다.

- babel (babel의 기본 커맨드, 이 커맨드를 이용하면 ES2015로 작성된 JavaScript 파일을 트랜스파일할 수 있습니다.)
- babel-node (babel로 트랜스파일한 코드를 node에서 실행하기 위한 커맨드, REPL이기도 합니다.)
- babel-external-helpers (babel의 utility를 babel의 밖에서도 사용하게 하기 위한 커맨드)

간단한 사용법은 다음과 같습니다.

```
# babel filename으로 트랜스 파일해 표준 출력으로 결과를 표시함.
$ babel test.js

# babel -o를 사용해 출력할 파일명을 지정할 수 있음.
$ babel -o test2.js test.js

# babel -w를 사용해 변경을 감시해 파일을 출력할 수 있음.
$ babel -w test.js -o test2.js

# 소스맵을 넣을 때는 -s를, 인라인 소스맵이 필요하면 -t를 사용.
$ babel -s -t -w test.js -o test2.js
```

트랜스파일이 아닌, 스크립트 그대로 실행할 수도 있습니다. 이럴 때엔 babel-node를
사용하세요.

```
$ babel-node test.js
```

파일을 넣지 않고 실행하면, 간단한 REPL도 됩니다. 단, 줄바꿈할 때마다 실행되기
때문에, 지금은 한 줄에 전부 적어야 하므로 REPL로 사용하는 것은 추천하지
않습니다.

```
$ babel-node
> [0, 1, 2, 3].map((x)=>x*x);
[ 0, 1, 4, 9 ]
```

<!--
## Sprockets で使う方法

sprockets-es6 を使います。

```
$ gem install sprockets-es6
```

``` ruby
# Gemfile
gem "sprockets"
gem "sprockets-es6"
require "sprockets/es6"
```

これで使えるようになります。
-->

## Sprockets에서 사용하기

sprockets-es6를 사용합니다.

```
$ gem install sprockets-es6
```

``` ruby
# Gemfile
gem "sprockets"
gem "sprockets-es6"
require "sprockets/es6"
```

이걸로 사용할 수 있게 됩니다.

<!--
## gulp/grunt などで使う方法

これもさほど変わりません。grunt-babel, gulp-babel があるのでそれを利用しましょう。

```
$ npm install grunt-babel load-grunt-tasks -D
```

```js
require("load-grunt-tasks")(grunt);
grunt.initConfig({
  "babel": {
    options: {
      // ソースマップが要らない場合は false にする
      sourceMap: true
    },
    dist: {
      files: {
        "dist/app.js": "src/app.js"
      }
    }
  }
});

grunt.registerTask("default", ["babel"]);
```

これで grunt コマンドを実行すれば babel が実行されます。 また gulp の場合は以下のようにします。

```
$ npm install gulp-babel gulp-sourcemaps gulp-concat -D
```

``` js
var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task("default", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("all.js"))
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});
```

これで gulp コマンドを実行すれば babel でトランスパイルされます。
-->

## gulp/grunt를 사용하는 방법

이것도 크게 다르지 않습니다. grunt-babel, gulp-babel이 있으니 이걸 씁시다.

```
$ npm install grunt-babel load-grunt-tasks -D
```

```js
require("load-grunt-tasks")(grunt);
grunt.initConfig({
  "babel": {
    options: {
      // 소스맵이 필요하지 않은 경우엔 false로 함.
      sourceMap: true
    },
    dist: {
      files: {
        "dist/app.js": "src/app.js"
      }
    }
  }
});

grunt.registerTask("default", ["babel"]);
```

이걸로 grunt 명령어를 실행하면 babel이 실행됩니다. 또, gulp의 경우는 다음과 같이
합니다.

```
$ npm install gulp-babel gulp-sourcemaps gulp-concat -D
```

``` js
var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task("default", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("all.js"))
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});
```

이걸로 gulp 명령어를 실행하면, babel로 트랜스파일됩니다.

<!--
# ECMAScript 2015 で変わる JavaScript の書き方

ES2015 にはここでは紹介しきれないほどの機能が入っています。個人的に重要だと思っているものは紹介しますが、全てを見てみたい場合はES2015 のドラフトをご一読下さい。

ES2015 の目標は先程のドラフトに記述されていて、

> ECMAScript 第 6 版のゴールには以下のものが含まれている。
>
> - 大規模アプリ開発の支援
> - ライブラリ構築の支援
> - 他の言語からのコンパイル対象として利用されること
>
> 具体的なエンハンスとして、
>
> - モジュール化
> - クラス定義
> - ブロックスコープ
> - iterator と generator
> - 非同期プログラミングのための Promise
> - デストラクチャリング
> - 末尾呼び出し最適化

といった機能が含まれている。

また、ECMAScript のライブラリとして map や set、binary 配列、Unicode 補助文字、正規表現拡張が built-in で追加されている。
これらの build-in はサブクラスとして拡張するのも可能とする。
という風になっています。つまり、大規模開発に耐えるため、適切にモジュール化をすること、適切な単位でクラスを設計してブロックスコープにより、変数を限定的に扱うことなどができるようになりました。

また非同期プログラミングに関しては Promise として非同期処理を抽象化する事ができるようになりました。さらに iterator や generator を扱う事で遅延繰り返し処理を扱うことができるようになりました。これらの機能は関数型言語の流れを汲んでいると筆者は捉えていて、また末尾呼び出し最適化もこの流れを汲んだ機能追加であると捉えています。

では、これらの機能に対して一つ一つ紹介していきます。また、本当はこの他にも Template String Literals とか Arrow Functions などが定義されていますが、この記事では説明を省きます。
-->

# ECMAScript 2015에서 변하는 JavaScript의 문법

ES2015에는 여기에 전부 다 소개하기 힘들 정도로 많은 기능이 들어있습니다.
개인적으로 중요하다고 생각하는 것은 소개하겠지만, 전부 확인하고 싶으신 경우엔
[ES2015의 드래프트](http://people.mozilla.org/~jorendorff/es6-draft.html)를
일독하시길 권합니다.

ES2015의 목표는 아까 말한 드래프트에 적혀 있고, 다음과 같은 내용입니다.

> ECMAScript 제6판의 목표에는 다음과 같은 내용이 포함되어 있습니다.
>
> - 대규모 앱의 개발 지원
> - 라이브러리 구축지원
> - 다른 언어에서 컴파일 대상으로 사용될 것
>
> 구체적인 개선안으로,
>
> - 모듈화
> - 클래스 정의
> - 블록 스코프
> - iterator, generator
> - 비동기 프로그램을 위한 Promise
> - 디스트럭처링
> - 꼬리 재귀 최적화

라는 내용이 포함되어 있습니다.

또, ECMAScript의 라이브러리로 map, set, binary 배열, 유니코드 보조 문자, 정규표현
확장이 빌트인으로 추가 됩니다. 이런 빌트인 기능을 서브 클래스로 확장하는 것도
가능합니다. 즉, 대규모 개발을 견딜 수 있도록, 적절히 모듈화하고, 적절한 단위로
클래스를 설계해 블록 스코프로 변수를 한정적으로 취급하는 것도 가능합니다.

또 비동기 프로그래밍에 관해서는 Promise로 비동기 처리를 추상화할 수 있게
되었습니다. 더욱이 iterator나 generator를 사용해 지연 반복 처리도 할 수 있게
되었습니다. 이런 기능은 관계형 언어의 흐름에 따르는 거라 필자는 생각하고 있고, 또
꼬리 재귀의 최적화도 이런 유행을 따르는 기능 추가라고 생각합니다.

그러면, 이런 기능에 대해 하나하나 소개해보도록 하겠습니다. 사실 그 밖에도
Template String Literals라던가, 화살표 함수가 정의되어 있지만, 이 글에서는
설명하지 않겠습니다.

<!--
## モジュール化

モジュールを切り出すことができるようになりました。これまで JavaScript では言語レベルでモジュールの分割ができませんでした。そのため、JavaScript をモジュール化してフロントで読み込む際には require.js 使ったり、 browserify 使ったりというライブラリで解決するか、global 空間に独自の名前空間を作ってそこに生やすといった処理がされてきました。

ES2015 からはこのモジュール化をするための専用の構文 export と import が使えるようになりました。

基本的には commonjs と似ています、つまり、 export でオブジェクトを import できるようにして、require の代わりに import 構文でオブジェクトを利用できるようにします。
-->

## 모듈화

모듈을 나눌 수 있게 되었습니다. 여태까지 JavaScript에서는 언어 레벨의 모듈
분할이 불가능 했습니다. 그래서 JavaScript를 모듈화해 프론트에서 읽을 때에는
require.js를 사용하거나, browserify를 사용하거나 해서, 라이브러리로 해결하거나,
전역 공간에 커스텀 이름 공간을 만들어 거기에서 만드는 등의 처리를 했습니다.

ES2015부터는 이런 모듈화를 하기 위한 전용 구문 export와 import를 사용할 수
있게 되었습니다.

기본적으로는 commonjs와 비슷합니다. 즉, export로 객체를 import할 수 있게 하고,
require 대신 import 구문으로 객체를 사용할 수 있게 합니다.

<!--
### 名前付きの export

では実際にモジュールを使ってコードを書いてみましょう。

下記のようなファイルを作成し、Math.js のような名前をつけておきます。

```js
"use strict";

// export 構文で外部から読み込めるようにする
// export する場合は以下のようにする
export const PI = 3.141592;

// import させないものは export をつけないでおく
const _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};

// 関数に対しても export 可能
// 平方根を求める (バビロニアの平方根アルゴリズム)
export const sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};

// 二乗を求める
export function square(x) {
  return x * x;
}
```
これはちょうど commonjs で以下のように記述しているのと同じです。 node.js もしくは browserify を使ってコードを書いたことがある方であれば馴染み深い書き方かと思います。

```js
// Math.js

export.PI = 3.141592;

var _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
export.sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};
export.square(x) {
  return x * x;
};
```
同様に下記のようなファイルを作成し、 Main.js のような名前をつけておきます。 同じフォルダ内においてください。

```js
import {PI, sqrt, square} from './Math';
console.log(PI); // 3.141592
console.log(sqrt(121)); // 11
console.log(square(11)); // 121
```

実際に babel-node を使ってコードを実行してみましょう。

```
$ babel-node Main.js
3.141592
11
121
```

このように export 構文を使うと import で読み込んで利用できるようになります。

名前付きの import ではなく、export されているものを全て一つのオブジェクトに import する場合は以下のように書きます。

```js
import * as Math from './Math';
console.log(Math.PI); // 3.141592
console.log(Math.sqrt(121)); // 11
console.log(Math.square(11)); // 121
```
-->

### named export

그러면 직접 모듈을 사용해 코드를 작성해 봅시다.

밑에 있는 것처럼 파일을 작성해, Math.js 같은 이름을 붙이세요.

```js
"use strict";

// export 구문으로 외부에서 읽을 수 있도록 함.
// export 하는 경우는 밑에 있는 것처럼 함.
export const PI = 3.141592;

// import 시키지 않을 것들은 export를 붙이지 않고 놔둠.
const _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};

// 함수도 export 가능
// 제곱근을 구함 (바빌로니아 제곱근 알고리즘)
export const sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};

// 2승을 구함.
export function square(x) {
  return x * x;
}
```

이것은 commonjs로 다음과 같이 작성한 것과 같습니다. node.js나 browserify를
사용해 코드를 작성한 적이 있다면 익숙하리라 생각합니다.

```js
// Math.js

export.PI = 3.141592;

var _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
export.sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};
export.square(x) {
  return x * x;
};
```

똑같이 다음과 같은 파일을 작성해, Main.js라는 이름을 붙입시다. 같은 폴더에 넣어
주세요.

```js
import {PI, sqrt, square} from './Math';
console.log(PI); // 3.141592
console.log(sqrt(121)); // 11
console.log(square(11)); // 121
```

실제로 babel-node를 사용해 코드를 실행해 보세요.

```
$ babel-node Main.js
3.141592
11
121
```

이렇게 export 구문을 사용하면 import로 읽어들여 사용할 수 있게 됩니다.

named import가 아닌, export된 것을 전부 하나의 객체로 import하려면 아래와 같이
적으면 됩니다.

``` js
import * as Math from './Math';
console.log(Math.PI); // 3.141592
console.log(Math.sqrt(121)); // 11
console.log(Math.square(11)); // 121
```

<!--
### デフォルトの export

前節では、 module について説明しましたが、 export には 2 種類あります。通常の export と default export です。 この違いについて説明しましょう。下記の JavaScript は前回の名前付き export を使っています。

``` js
const PI = 3.141592;

const _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};

const sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};

const square = function(x) {
  return x * x;
};

export default Math = {
  PI: PI,
  sqrt: sqrt,
  square: square
};
```

import する側ではこう書きます。

``` js
import Math from './Math';
console.log(Math.PI);
console.log(Math.sqrt(121));
console.log(Math.square(11));
```

先ほどとの違いが分かるでしょうか。default export で export した場合は、import する時に import の対象をブレース {……} で囲む必要はなく、export されている対象の名前を知る必要はありません。

これは、ちょうど commonjs で module.exports を使って書くのと似ています。

後述しますが、export default 構文は class 定義と組み合わせて使うことが多くなると思います。定義したクラスを default export して外から import できるようにする、という書き方が多くなると思われます。
-->

### default export

이전 문단에서는, module에 대해 설명했습니다. export에는 두 종류가 있습니다. 일반
export와 default export입니다. 이제부터 차이점에 대해 설명하겠습니다. 밑에 있는
JavaScript는 이전 문단에서 사용한 named export 코드를 조금 바꾸었습니다.

``` js
const PI = 3.141592;

const _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};

const sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};

const square = function(x) {
  return x * x;
};

export default Math = {
  PI: PI,
  sqrt: sqrt,
  square: square
};
```

import하는 쪽은 이렇게 작성합니다.

``` js
import Math from './Math';
console.log(Math.PI);
console.log(Math.sqrt(121));
console.log(Math.square(11));
```

아까와의 차이점을 아시겠나요? default export로 export하면, import할 때 대상을
괄호{……}로 감쌀 필요도 없고, export한 대상의 이름을 알 필요도 없습니다.

이것은 commonjs의 module.exports를 사용해 작성했을 때와 비슷합니다.

뒤에 설명하겠지만, export default 구문은 class 정의와 조합해서 사용할 일이 많을
것이라 생각합니다. 정의한 클래스를 default export해서 밖에서 import할 수 있도록
하는 식의 패턴을 많이 사용하리라 생각합니다.

<!--
## クラス定義

JavaScript でクラスライクなものを作るときは、コンストラクタとして関数を定義し、prototype に対してメソッドを定義することで実現してきました。このような JavaScript をよく見るかと思います。

``` js
var Character = function(x, y) {
  this.x = x;
  this.y = y;
  this.health_ = 100;
}
Character.prototype.attack = function(character) {
  character.health_ -= 10;
};
```

これの糖衣構文として class が追加されました。class 構文を使うと以下のように記述することができます。

``` js
class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }
  attack(character) {
    character.health_ -= 10;
  }
}
```

さっきの書き方よりもスッキリ定義できる上に、クラスであることが直感的に分かるようになりました。以前の書き方は関数定義と同じく function を使った書き方なので、一見しただけでは関数なのか class なのか分かりにくいです。

また先程の module の default export と組み合わせて、下記のように class を公開するやり方が ES6 ベースで記述されたモジュールによく見られます。

``` js
export default class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }
  attack(character) {
    character.health_ -= 10;
  }
}
```

さて、class があるということは継承も存在します。 継承を使うと以下のように記述できます。

``` js
// Character クラス
class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }
  attack(character) {
    character.health_ -= 10;
  }
}

// 当然継承もある。
// Monster クラスに継承
class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }

  // メソッド書くときはこう書く
  attack(character) {
    // 親クラスのメソッド呼ぶときはこう
    super.attack(character);
    // super(character) でも同じ意味になる
  }

  // get prefix を付けられる
  get isAlive() { return this.health_ > 0; }
  get health() { return this.health_; }
  // set prefix を付けられる
  set health(value) {
    if (value < 0) throw new Error('Health must be non-negative.');
    this.health_ = value;
  }
}
var myMonster = new Monster(5,1, 'arrrg');
var yourMonster = new Monster(5,1, 'nyan');
// get prefix をつけるとプロパティアクセスのようにメソッドを扱える
console.log(myMonster.health); // 100
console.log(myMonster.isAlive); // true
// set prefix でも同様。
myMonster.health = 1;
console.log(myMonster.health); // 1
console.log(myMonster.isAlive); // true

myMonster.attack(yourMonster);
console.log(yourMonster.health); //90
```

これまでの function と prototype を使った書き方よりも直感的な書き方が期待できます。
-->

## 클래스 정의

JavaScript에서 클래스 비슷한 것을 만들 때에는, 생성자 함수를 정의해, prototype에
대한 함수를 정의하는 것으로 구현했습니다. 이런 JavaScript를 자주보지 않을까
싶습니다.

``` js
var Character = function(x, y) {
  this.x = x;
  this.y = y;
  this.health_ = 100;
}
Character.prototype.attack = function(character) {
  character.health_ -= 10;
};
```

이것의 편의 문법으로 class가 추가되었습니다. class 구문을 사용해 다음과 같이
작성할 수 있습니다.

``` js
class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }
  attack(character) {
    character.health_ -= 10;
  }
}
```

아까의 방법보다 깔끔하게 정의할 수 있는 데다가, 클래스인 것을 직접적으로 알 수
있게 되었습니다. 이전의 방법은 함수 정의와 같은 function을 사용하는 방법이므로,
얼핏 보기에는 함수인지 클래스인지 분별하기 어려웠습니다.

또 아까 보았던 module의 default export와 조합해, 밑에 있는 것처럼 class를
공개하는 방법이 ES6 베이스로 작성된 모듈에서 자주 보입니다.

``` js
export default class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }
  attack(character) {
    character.health_ -= 10;
  }
}
```

클래스가 있으므로 상속도 있습니다. 상속을 사용해 밑에 있는 것처럼 작성할 수
있습니다.

``` js
// Character 클래스
class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }
  attack(character) {
    character.health_ -= 10;
  }
}

// 당연히 상속도 있습니다.
// Monster 클래스를 상속
class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }

  // 함수는 이렇게 작성
  attack(character) {
    // 부모 클래스의 함수를 호출할 때에는 이렇게
    super.attack(character);
    // super(character)도 같은 의미
  }

  // get prefix를 붙일 수 있음
  get isAlive() { return this.health_ > 0; }
  get health() { return this.health_; }
  // set prefix를 붙일 수 있음
  set health(value) {
    if (value < 0) throw new Error('Health must be non-negative.');
    this.health_ = value;
  }
}
var myMonster = new Monster(5,1, 'arrrg');
var yourMonster = new Monster(5,1, 'nyan');
// get prefix를 붙이면 속성 접근처럼 함수를 취급할 수 있음.
console.log(myMonster.health); // 100
console.log(myMonster.isAlive); // true
// set prefix랑 같음.
myMonster.health = 1;
console.log(myMonster.health); // 1
console.log(myMonster.isAlive); // true

myMonster.attack(yourMonster);
console.log(yourMonster.health); //90
```

여태까지의 function과 prototype을 사용한 방법보다 더 직관적인 방법을 기대할 수
있습니다.

<!--
## ブロックスコープ (let/const)

let, const という新しい変数宣言ができるようになりました。これは block スコープと呼ばれています。JavaScript の場合、変数の生存するスコープを表現するのに function で囲む必要がありました。しかし、let/const を使うことで、function だけではなくブレース { …… } で囲まれた領域がスコープになります。

let は再代入可能な変数ですが、const は再代入不可能な変数です。const はちょうど Java で言うところの final があたったような状態になります。

``` js
// block.js
{
  var a = 10;
  let b = 20;
  const tmp = a;
  a = b;
  b = tmp;
  // tmp = 30; 再代入はできない SyntaxError になる。
}

// a = 20、a は var で宣言しているのでブロックスコープの外からも参照可能。
console.log(a);
// let で定義した b はブロックスコープの外からは解決できない、ReferenceError b is not defined になる。
console.log(b);
// const もスコープの中でのみ有効、tmp is not defined
console.log(tmp);
```
-->

## 블록 스코프 (let/const)

let, const라는 새로운 변수선언을 사용할 수 있게 되었습니다. 이것은 블록 스코프라
불립니다. JavaScript의 경우, 변수가 존재하는 스코프를 만들기 위해 function으로
감쌀 필요가 있었습니다만, let/const를 사용하면, function만 아니라 괄호{……}로
감싼 구역도 스코프가 됩니다.

let은 재대입할 수 있는 변수지만, const는 재대입 불가능한 상수입니다. const는
Java로는 final과 비슷합니다.

``` js
// block.js
{
  var a = 10;
  let b = 20;
  const tmp = a;
  a = b;
  b = tmp;
  // tmp = 30; 재대입 불가 SyntaxError가 됨
}

// a = 20, a는 var로 선언하고 있으므로 블록 스코프 밖에서도 참조 가능
console.log(a);
// let으로 정의한 b는 블록 스코프의 밖에서는 참조 불가
// ReferenceError b is not defined가 됨
console.log(b);
// const도 스코프 안에서만 유효. tmp is not defined
console.log(tmp);
```

<!--
## iterator と generator

ES2015 から、新しく for of という文法が追加されました。これは繰り返しをおこなう for 文の拡張です。以下の様な記述を行います。

``` js
var res = [];
// ここが for of 文
for (let element of [1, 2, 3]) {
  res.push(element * element);
}
console.log(res); // [1, 4, 9]
```

これまでの for 文と何が違うのでしょうか。これまでの for in 文と異なり、of に渡すのはコレクションに限りません。 繰り返し可能なもの、Iterable なものであれば for of 文で繰り返すことができます。

Iterable なものを作るには、 Symbol.Iterator を使います。 Symbol.Iterator の定義は下記の通り。

``` js
// 1000 までの値を返す fibonacci を作る
var fibonacci = {
  // Symbol.iterator を持つメソッドを持つオブジェクトにする
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    // iterator オブジェクトは next メソッドを持つオブジェクトを返す
    return {
      next() {
        // next の中では返す値 (value) と次で終わりかどうかを示すプロパティ (done) を返す
        [pre, cur] = [cur, pre + cur];
        if (pre < 1000)  return { done: false, value: pre };
        return { done: true };
      }
    }
  }
}

for (var n of fibonacci) {
  console.log(n);
}
```

こうすると、繰り返し可能な任意のオブジェクトを実装することができます。ただし、Symbol.Iterator を使ったやり方は見て頂いて分かる通り、書きやすいものではありません。もう少し簡潔に Iterable なオブジェクトを作るには generator を利用します。

``` js
let fibonacci = function*(){
    let pre = 0, cur = 1;
    while (pre < 1000) {
      // ここで destructuring で値を swap させる。
      [pre, cur] = [cur, pre + cur];
      // yield で値を返す
      yield pre;
    }
}();

for (let n of fibonacci) {
  console.log(n);
}
```
-->

## iterator, generator

ES2015에서, 새로운 for of 문법이 추가되었습니다. 이것은 반복을 하는 for문의
확장입니다. 다음과 같이 작성합니다.

``` js
var res = [];
// 여기가 for of문
for (let element of [1, 2, 3]) {
  res.push(element * element);
}
console.log(res); // [1, 4, 9]
```

여태까지의 for문과 무엇이 다른가요? 여태까지의 for in문과는 다르게, of에
넘기는 것은 컬렉션이 아니어도 됩니다. 반복할 수 있는 것(Iterable)이라면 for
of문으로 반복할 수 있습니다.

Iterable한 것을 만들려면, Symbol.Iterator를 사용합니다. Symbol.Iterator의 정의는
다음과 같이 합니다.

``` js
// 1000까지 값을 반환하는 fibonacci를 만듦.
var fibonacci = {
  // Symbol.iterator 함수를 가지는 객체를 만듦.
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    // iterator 객체는 next 메서드를 가지는 객체를 반환함
    return {
      next() {
        // next 안에서 반환 값(value)과 종료인지 아닌지 표시하는 속성(done)을
        // 반환
        [pre, cur] = [cur, pre + cur];
        if (pre < 1000)  return { done: false, value: pre };
        return { done: true };
      }
    }
  }
}

for (var n of fibonacci) {
  console.log(n);
}
```

이렇게 하면, 반복 가능한 임의의 객체를 구현할 수 있습니다. 단, Symbol.Iterator를
사용하는 방법은 보신 것처럼, 쓰기 편하지는 않습니다. 좀 더 단순한 Iterable
객체를 만들려면 generator를 사용하시면 됩니다.

``` js
let fibonacci = function*(){
    let pre = 0, cur = 1;
    while (pre < 1000) {
      // 여기서 destructuring으로 값을 교환함.
      [pre, cur] = [cur, pre + cur];
      // yield로 값을 반환
      yield pre;
    }
}();

for (let n of fibonacci) {
  console.log(n);
}
```

<!--
## Promises

成功するか失敗するか分からない非同期の抽象化された状態を持つのが Promise です。

``` js
function timeout(ms) {
  // Promise の resolve 関数を受け取る
  return new Promise((onFulfilled, onRejected) => {
    // 50% の確率で onFulfilled, onRejected が呼ばれる
    setTimeout(() => Math.random() > 0.5 ?  onFulfilled() : onRejected(), ms);
  });
}

function log() {
  console.log('done');
}

function error() {
  console.log('error');
}

// onFulfilled が出たら done、onRejected だったら error と表示する
timeout(100).then(log).catch(error)
```
-->

## Promises

Promise는 성공할지 실패할지 알 수 없는 비동기의 추상화된 상태를 가집니다.

``` js
function timeout(ms) {
  // Promise의 resolve 함수를 받음.
  return new Promise((onFulfilled, onRejected) => {
    // 50% 확률로 onFulfilled, onRejected가 불림.
    setTimeout(() => Math.random() > 0.5 ?  onFulfilled() : onRejected(), ms);
  });
}

function log() {
  console.log('done');
}

function error() {
  console.log('error');
}

// onFulfilled이 나오면 done, onRejected면 error를 표시
timeout(100).then(log).catch(error)
```

<!--
## デストラクチャリング

デストラクチャリング、和訳すると分配束縛と呼ばれる機能です。Clojure にある機能ですね。 これを利用すると配列やオブジェクトで設定した値を取り出しやすくなります。

具体的には以下のとおり。

``` js
var hoge = 123;
var fuga = 456;

// 値を swap する
var [fuga, hoge] = [hoge, fuga];

console.log(hoge); // 456
console.log(fuga); // 123

var [a, [b], [c], d] = ['hello', [', ', 'junk'], ['world']];

console.log(a + b + c); // hello, world (a に "hello", b に ",", c に "world" が入ってる )

var pt = {x: 123, y: 444};
var {x, y} = pt;
console.log(x, y); // 123 444
```
-->

## 디스트럭처링

디스트럭처링은 일본어로 번역하면 분배속박(分配束縛)이라 할 수 있습니다.
Clojure에 있는 기능이죠. 이것을 이용하면 배열이나 객체에 설정된 값을 뽑기
쉬워집니다.

구체적으로는 다음과 같습니다.

``` js
var hoge = 123;
var fuga = 456;

// 값을 교환함.
var [fuga, hoge] = [hoge, fuga];

console.log(hoge); // 456
console.log(fuga); // 123

var [a, [b], [c], d] = ['hello', [', ', 'junk'], ['world']];

console.log(a + b + c); // hello, world (a에 "hello", b에 ",", c에 "world"가 들어감)

var pt = {x: 123, y: 444};
var {x, y} = pt;
console.log(x, y); // 123 444
```

<!--
## 末尾呼び出し最適化

関数の末尾にある再帰呼び出しを関数で呼ぶのではなく、内部でループに置換することで関数呼び出しのスタック累積をなくし、効率化するという方法です。

module の時に利用したバビロニアの平方根アルゴリズムを元に解説します。ちなみに 2015 年 3 月現在、数多く存在するブラウザ、トランスパイラの中でこの末尾呼び出し最適化を実装しているのは babel だけです。

``` js
// バビロニアの平方根
// 関数の最後に再帰呼び出しを利用している事がわかる。
function _sqrt(s, x, last){
  'use strict';
  if (x === last) return x;
  return _sqrt(s, (x + s / x) / 2.0, x);
};

const sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};
```
babel でトランスパイルすると下記のようになります。

```js
function _sqrt(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    "use strict";
    _again = false;
    var s = _x,
        x = _x2,
        last = _x3;
    if (x === last) {
      return x;
    }_x = s;
    _x2 = (x + s / x) / 2;
    _x3 = x;
    _again = true;
    continue _function;
  }
};

var sqrt = function sqrt(s) {
  return _sqrt(s, s / 2, 0);
};
```

_sqrt 関数の再帰呼び出しが消えて while と ラベル付き continue を使ったループ処理に変換されていることが分かります。 再帰呼び出しは直感的で副作用を少なくすることができる書き方だと言われていますが、関数スタックサイズを消費してしまうため、実行コストがかかります。関数のコールスタックを減らして最適化するのが末尾呼び出し最適化であり、ES2015 の仕様として策定されています。
-->

## 꼬리 재귀의 최적화

함수의 꼬리 재귀 호출을 함수로 부르지 않고, 내부 루프로 바꾸어, 함수
호출의 스택이 누적되는 것을 방지해 효율화 할 수 있는 방법입니다.

module에서 사용한 바빌로니아 제곱근 알고리즘으로 설명하겠습니다. 부연하자면
2015년 3월 현재, 대부분의 브라우저, 트랜스파일러 중에 이 꼬리 재귀 최적화가
구현되어 있는건 babel뿐입니다.

``` js
// 바빌로니아 제곱근
// 함수의 제일 뒤에 재귀 호출을 사용하고 있는 것을 알 수 있음.
function _sqrt(s, x, last){
  'use strict';
  if (x === last) return x;
  return _sqrt(s, (x + s / x) / 2.0, x);
};

const sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};
```
babel로 트랜스파일하면 이렇게 변합니다.

``` js
function _sqrt(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    "use strict";
    _again = false;
    var s = _x,
        x = _x2,
        last = _x3;
    if (x === last) {
      return x;
    }_x = s;
    _x2 = (x + s / x) / 2;
    _x3 = x;
    _again = true;
    continue _function;
  }
};

var sqrt = function sqrt(s) {
  return _sqrt(s, s / 2, 0);
};
```

_sqrt 함수의 재귀 호출이 없어지고 while과 라벨 continue를 사용한 반복처리로
변환된 것을 알 수 있습니다. 재귀호출은 직관적이고 부작용이 적은 방법이라고
하지만, 함수 스택 사이즈를 소비하므로 수행속도에 영향이 있습니다. 함수의
콜스택을 줄여 최적화하는 것을 꼬리 재귀의 최적화라하고 ES2015의 사양으로
제정되어 있습니다.

<!--
## etc, etc……

この他にも => で関数を定義する Arrow Functions や 変数埋め込みやヒアドキュメントとしても利用可能な Template String Literals、Symbols や Proxy 等、語り尽くせないほど機能があります。
-->

## 그 밖에...

그 밖에 =>로 함수를 정의하는 Arrow Functions나 문자열 중간에 변수를 넣거나
히어독을 사용할 수 있는 Template String Literals, Symbols이나 Proxy등 전부 다
언급하기 힘들 정도로 많은 기능이 있습니다.

<!--
# 今後の ECMAScript2015 の展望

上に挙げた事からも分かる通り、JavaScript に class や module の考え方が入り、適切な単位でモジュールとクラスを分割して設計することができるようになりました。また let や const で変数の生存範囲を限定する事ができるようになりました。これらの機能は大規模なアプリを開発する時やライブラリを作る際の助けになるはずです。

また、generator/iterator/Promise といった関数型プログラミングの概念が導入され、さらに末尾呼び出し最適化といった副作用を少なくする記述方法ができるようになりました。ES6 には ES5 までの考え方にはないモダンな機能が入っています。

既に ECMAScript の仕様を決めている TC39 は次の ES7 に向けて準備をしています。現時点ではまだまだ検討中ですが、async-await といった非同期呼び出しを同期っぽく呼び出す C# にある機能であったり、Optional Typing の機能をもたらす types や Object の監視をする Object.observe といった機能が検討されています。

これらの機能が全てのブラウザで書けるようになるのはまだまだ先ですが、babel にはいくつか実験的に先行実装されている ES7 の機能もあります。また babel 単体ではサポートしていなくても flow とあわせることで型チェックを実現したり、jsx とあわせることでかつて存在した E4X *2のような XML リテラルを記述することができるようになっています。

ここでは紹介しきれませんでしたが、 babel にはこの他にも未定義の変数/関数をチェックする機能や通らないコードを削除するデッドコード削除の機能、インライン展開をする機能などの最適化が入っており、大変高機能になっています。

babel を使って新しい JavaScript を学んでみたい方向けに tower-of-babel という ES6 チュートリアルの学習ツールを作りました。

![tower-of-babel](/nodejs-ko/public/images/tower-of-babel.png)
こちらも使ってみてください。
-->

# 이후의 ECMAScript2015의 전망

위의 언급에서도 알 수 있듯이, JavaScript에 클래스나 모듈이 도입되어, 최적의
단위로 모듈과 클래스를 분해해 설계하는 것이 가능해졌습니다. 또 let이나 const로
변수의 스코프를 제한할 수도 있게 되었습니다. 이런 기능은 대규모 앱 개발을 할
때나 라이브러리를 만들 때 도움이 될 것입니다.

또, generator/iterator/Promise 등의 함수형 프로그래밍 개념이 도입되고, 꼬리
재귀의 최적화로 부작용을 줄이는 작성법도 할 수 있게 되었습니다. ES6에는
ES5까지의 방법보다 현대적인 기능이 들어 있습니다.

이미 ECMAScript의 사양을 정한 TC39는 다음 ES7에 대한 준비도 하고 있습니다.
현시점에서는 아직 검토 중입니다만, async-await라는 비동기 호출을 동기처럼 호출할
수 있는 C#에 있는 기능이라든가, Optional Typing 기능으로 인한 types나 Object의
감시를 하는 Object.observe라는 기능이 검토되고 있습니다.

이런 기능 전부 브라우저에서 사용 가능하게 되는 건 아직 훗날의 일입니다만,
babel에는 몇 가지 실험적으로 먼저 구현해본 [ES7의
기능](http://babeljs.io/docs/usage/transformers/#es7-experimental-)도 있습니다.
또 babel에는 구현되어 있지 않더라도, flow와 함께 사용해 타입 검사를 하거나,
jsx와 함께 사용해 전에 있었던 E4X 같은 XML 리터럴을 사용할 수도 있게
되었습니다.[^2]

여기에서는 전부 소개할 수 없었지만, babel에는 이 밖에도 [미정의의 변수/함수를
체크하는
기능](http://babeljs.io/docs/usage/transformers/validation/undeclared-variable-check/)이라든가
실행되지 않는 코드를 지우는 [데드 코드 삭제
기능](http://babeljs.io/docs/usage/transformers/utility/dead-code-elimination/),
[인라인 전개
기능](http://babeljs.io/docs/usage/transformers/utility/inline-expressions) 등의
최적화가 들어있어, 굉장히 많은 기능이 있습니다.

babel을 사용해 새로운 JavaScript를 배우고 싶으신 분들을 위해
[tower-of-babel](https://github.com/yosuke-furukawa/tower-of-babel)이라는 ES6
튜토리얼 학습 도구를 만들었습니다.

![tower-of-babel](/nodejs-ko/public/images/tower-of-babel.png)
한국어로 번역되어 있으니 이것도 한번 해보세요.

<!--
# まとめ

今後の JavaScript である ES6 の話をトランスパイラである babel とともに説明しました。 ES6 の仕様は固まってきてはいるものの、今は仕様のフィードバックを求めている状況であり、この段階で積極的に ES6 を利用していく事で、ES6 の盛り上げを図りたいと思っています。バグや問題があればフィードバックすれば改修される可能性もあります。

また、今回の機能をまとめた tower-of-babel を作ってみました。

是非使ってみてください。
-->

# 정리

앞으로의 JavaScript인 ES6의 이야기를 트랜스파일러인 babel과 함께 설명했습니다.
ES6의 사양은 확정되지 않았고, 지금 사양에 관한 피드백을 받는 중입니다. 이
단계에서 적극적으로 ES6를 사용해 커뮤니티를 활발하게 하고 싶습니다. 버그나
문제가 있으면 피드백하면 개선될 가능성도 있습니다.

또, 이번 기능을 정리한
[tower-of-babel](https://github.com/yosuke-furukawa/tower-of-babel)을
만들었습니다.

꼭 사용해 보세요.

<!--
# 参考文献

- [babel](http://babeljs.io/)
- [ES6 spec draft](http://people.mozilla.org/~jorendorff/es6-draft.html)
- [modules](http://www.2ality.com/2014/09/es6-modules-final.html)
- [Class 構文が実装された](http://js-next.hatenablog.com/entry/2014/11/01/034607)
- [Sprockets での指定](http://babeljs.io/docs/using-babel/#sprockets)
- [Class](http://www.sitepoint.com/understanding-ecmascript-6-class-inheritance/)
- [traceur-compiler 入門](http://yosuke-furukawa.hatenablog.com/entry/2014/07/31/093041#2)
- [tower-of-babel](https://github.com/yosuke-furukawa/tower-of-babel)
-->

# 참고문헌

- [babel](http://babeljs.io/)
- [ES6 spec draft](http://people.mozilla.org/~jorendorff/es6-draft.html)
- [modules](http://www.2ality.com/2014/09/es6-modules-final.html)
- [Class 構文が実装された](http://js-next.hatenablog.com/entry/2014/11/01/034607)
- [Sprockets의 설정](http://babeljs.io/docs/using-babel/#sprockets)
- [Class](http://www.sitepoint.com/understanding-ecmascript-6-class-inheritance/)
- [traceur-compiler 入門](http://yosuke-furukawa.hatenablog.com/entry/2014/07/31/093041#2)
- [tower-of-babel](https://github.com/yosuke-furukawa/tower-of-babel)

<!--
# 著者について

古川陽介 (Yosuke Furukawa / @yosuke_furukawa)。日本 Node.js ユーザーグループ代表、io.js エヴァンジェリスト、io.js コントリビュータ。記事掲載時点では会社でサーバサイドの Perl とフロント JavaScript も行うフルスタックなエンジニア
-->

# 저자에 관하여

후루카와 요스케(古川陽介 / Yosuke Furukawa / @yosuke_furukawa). 일본 Node.js
유저 그룹 대표, io.js 에반젤리스트, io.js 컨트리뷰터. 글 작성 시점에는 회사에서
서버사이드로 Perl을 프론트로 JavaScript를 사용하는 풀스택 엔지니어

[^1]: 읽는법: https://github.com/babel/babel/issues/780#issuecomment-74426418
[^2]: 편집자 주: https://atnd.org/events/38810
