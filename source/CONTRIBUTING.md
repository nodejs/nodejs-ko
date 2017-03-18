---
layout: page
title: 번역 참여 가이드
---

# 번역 대상

* [Node.js](https://nodejs.org/)와 관련된 모든 문서가 번역 대상입니다.
* 기본적으로 [공식 Node.js의 글](https://nodejs.org/en/blog/)을 번역합니다.
* 번역했으면 하는 문서는 [이슈](https://github.com/nodejs/nodejs-ko/issues)로 등록합니다.
  * 이슈의 제목을 원문의 제목으로 하고 본문에 링크를 입력합니다.
  * 번역 이슈에는 [translation](https://github.com/nodejs/nodejs-ko/labels/translation) 레이블을 붙입니다.

# 번역에 참여하는 방법

* [이슈 #44](https://github.com/nodejs/nodejs-ko/issues/44)에서 신청을 하면 프로젝트의 Collaborators로 등록해 드립니다.
  * 꼭 등록하실 필요는 없습니다.
* [이슈](https://github.com/nodejs/nodejs-ko/issues) 중에서 [translation 레이블이 붙은 이슈](https://github.com/nodejs/nodejs-ko/labels/translation)가 번역할 문서입니다.
* 번역하겠다는 의사를 밝힙니다.
  * Collaborators라면 이슈를 자신에게 할당합니다.
  * 그냥 댓글로 남기셔도 됩니다.
* 이슈를 할당하면 번역의 진행을 위해서 1주일 안에 번역 작업을 합니다. 1주일이 지나면 다른 사람에게 이슈가 넘어갈 수 있습니다.

# 번역 방법

1. [nodejs-ko](https://github.com/nodejs/nodejs-ko) 프로젝트를 포크합니다.
1. 로컬에 클론해 `npm install`으로 관련 라이브러리를 설치합니다.
1. 풀 리퀘스트를 보내기 위한 브랜치를 새로 생성합니다.
1. 번역 작업을 위한 파일을 생성합니다.
  * 디렉터리 관례
    * 모든 글은 `source/_posts/` 디렉터리를 사용합니다.
  * 파일명
    * 원문이 올라온 날짜와 제목을 대시(`-`)로 이어 붙여서 파일명을 정합니다.(예시: `2015-01-27-state-of-io-js.md`)
    * 주간 뉴스의 경우에는 원문의 날짜와 weekly를 대시(`-`)로 이어 붙여서 파일명을 정합니다.(예시: `2015-02-13-weekly.md`)
  * 자동 파일 생성
    * 관례대로 파일을 자동으로 생성하려면 다음 명령어를 실행합니다.

      ```bash
      $ npm run scaffold URL [DATE]
      ```

    * 다음과 같이 사용합니다.

      ```bash
      $ npm run scaffold https://raw.githubusercontent.com/nodejs/nodejs.org/master/locale/en/blog/release/v6.3.0.md 2016-07-22
      ```

    * 주간뉴스는 날짜를 생략할 수 있습니다.

      ```bash
      $ npm run scaffold https://raw.githubusercontent.com/nodejs/nodejs.org/master/locale/en/blog/weekly-updates/weekly-update.2016-07-22.md
      ```

    * 이 명령어를 실행하면 관례에 맞는 파일이 자동으로 생성됩니다.
  * 번역문서
    * 파일 상단에는 YAML 형식으로 글의 메타정보를 작성합니다.

      ```yaml
      ---
      category: articles
      title: 번역 글의 제목
      author: 원 저자명
      ref: 원문의 글 제목
      refurl: 원문 링크
      translator:
        - <a href="GITHUB_URL" target="_blank">번역자 이름</a>
        - <a href="GITHUB_URL" target="_blank">번역자 이름</a>
      ---
      ```

    * 번역자가 여러 명인 경우에는 `translator`에 여러 줄을 추가하면 됩니다.
    * 이곳에 작성한 메타정보는 각 글의 상단에 표시됩니다.
    * 문서는 [마크다운](https://help.github.com/articles/github-flavored-markdown/) 형식으로 작성합니다.
    * 이후 문서를 관리하기 위해 원문을 주석(`<!-- -->`)으로 추가하고 번역한 내용을 다음과 같이 작성합니다.

      ```md
      <!--
      # io.js 1.6 release
      This week we had a two io.js releases [v1.6.1](https://iojs.org/dist/v1.6.1/) and  [v1.6.0](https://iojs.org/dist/v1.6.0/), complete changelog can be found [on GitHub](https://github.com/nodejs/io.js/blob/v1.x/CHANGELOG.md).
      -->

      # io.js 1.6 릴리스
      이번 주에는 [v1.6.1](https://iojs.org/dist/v1.6.1/)과 [v1.6.0](https://iojs.org/dist/v1.6.0/) 두 번의 릴리스가 있었습니다. [GitHub](https://github.com/nodejs/io.js/blob/v1.x/CHANGELOG.md)에서 전체 변경사항을 볼 수 있습니다.
      ```

1. `npm start`를 실행하면 [로컬](http://localhost:4000/nodejs-ko/)에서 마크다운 문법 등이 깨진 곳이 없는지 확인해 볼 수 있습니다.
1. 번역이 완료되면 해당 브랜치를 이용해서 풀 리퀘스트를 보냅니다.
  * 커밋 메시지나 풀 리퀘스트에 번역한 문서의 이슈번호를 추가합니다.
1. 풀 리퀘스트는 리뷰 과정을 거치게 되고 이 과정에서 오타, 번역 문체 등을 다듬습니다.
1. 2명 정도가 번역을 리뷰를 진행하고 리뷰 수정 후 1, 2일 후에 다른 얘기가 없으면 완료되었다고 판단합니다.
   (처음 번역에 참여하시는 분은 몇 번 번역 과정에 익숙해 질 때까지는 직접 풀 리퀘스트를 머지 하지 않고
   다른 사람이 머지해 주기를 기다립니다.)
1. 리뷰가 완료되어 풀 리퀘스트가 머지되면 하루 이내에 Collaborator가 디플로이해 [블로그](https://nodejs.github.io/nodejs-ko/)에 적용됩니다.

# 그 외 참고할 사항

1. 특별히 어색하지 않다면 기울임꼴, 굵은 글씨 등 서식은 원문과 똑같이 사용합니다.
1. 사람, 기관, 지역 이름은 가능한 영어 그대로 남겨둡니다.
1. 본문에 링크된 글에 대한 한국어 문서가 존재한다면 한국어 문서의 링크를 우선으로 사용합니다.
1. 적어도 풀 리퀘스트를 만들기 전에는 [한국어 맞춤법 검사기](http://speller.cs.pusan.ac.kr/)를 사용해 맞춤법을 확인해주세요.

# 자주 나오는 리뷰 사항

* Node의 버전 이름은 다음과 같이 번역합니다.
  * `Current`-> `현재 버전`
  * `Stable`-> `안정 버전`
  * `LTS`-> `LTS`
  * `Maintenance`-> `유지보수 버전`
* `Node v6.0.0 (Current)` 같은 경우 `Node v6.0.0(현재 버전)`으로 번역합니다. 버전 번호와 괄호 사이에 공백을 제거합니다.
* 괄호 뒤에 조사가 오면 괄호는 앞 단어에 붙여 씁니다. 또한, 조사는 괄호를 제외하고 읽었을 때 자연스럽도록 적습니다. 예시: `사물인터넷 (IoT)과` 대신 `사물인터넷(IoT)과`라고 번역합니다.
* `릴리즈`가 아니라 `릴리스`로 표기합니다.
* URL은 `< >`로 감싸줍니다. 예시: `<https://nodejs.github.io/nodejs-ko/>`
* 마크다운의 헤딩을 의미하는 `#`, `##`, `###` 등의 윗줄에는 빈 줄을 추가합니다. 빈 줄이 없으면 스타일이 적용되지 않습니다.

  ```md
  -->
  ### Node v6.0.0(현재 버전) 릴리스
  ```

  위 내용은 다음과 같이 빈 줄을 추가합니다.

  ```md
  -->

  ### Node v6.0.0(현재 버전) 릴리스
  ```

* 목록을 나열하는 경우 영어 문장에 들어가는 `and`, `&`는 번역하지 않습니다. 예시: `A, B, C, and D`, `A, B, C, & D`는 `A, B, C 그리고 D`로 번역하지 않고 `A, B, C, D`로 번역합니다.
* 영어 뒤에 조사가 올 때도 읽었을 때 되도록 읽기 자연스러운 방향으로 적습니다. 예시: `vm.createContext과`가 아니라 `vm.createContext와`라고 번역합니다.
* `Core Technical Committee`는 `코어 기술 위원회`라고 번역합니다.
* Node.js 공식 블로그의 특성상 비슷한 시기에 나온 글에는 중복되는 내용이 있는 경우가 많습니다. 특히 보안 업데이트 공지나 새 버전 릴리스의 경우 그렇습니다. 비슷한 문서의 다른 번역문을 참고하면 번역에 도움이 됩니다.
