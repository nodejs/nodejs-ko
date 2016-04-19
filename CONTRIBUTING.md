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

# 번역에 참가하는 방법
* [이슈 #44](https://github.com/nodejs/nodejs-ko/issues/44)에서 신청을 하면 프로젝트의 Collaborators로 등록해 드립니다.
    - 꼭 등록하실 필요는 없습니다.
* [이슈](https://github.com/nodejs/nodejs-ko/issues) 중에서 [translation 레이블이 붙은 이슈](https://github.com/nodejs/nodejs-ko/labels/translation)가 번역할 문서입니다.
* 번역하겠다는 의사를 밝힙니다.
    - Collaborators라면 이슈를 자신에게 할당합니다.
    - 그냥 댓글로 남기셔도 됩니다.
* 이슈를 할당하면 번역의 진행을 위해서 1주일 안에 번역 작업을 합니다. 1주일이 지나면 다른 사람에게 이슈가 넘어갈 수 있습니다.

# 번역 방법
1. [nodejs-ko](https://github.com/nodejs/nodejs-ko) 프로젝트를 포크합니다.
1. 풀 리퀘스트를 보내기 위한 브랜치를 새로 생성합니다.
1. 번역 작업을 위한 파일을 생성합니다.
    * 디렉터리 관례
        - 일반적인 글은 `articles/_posts/` 디렉터리를 사용합니다.
        - [Node.js 블로그](https://nodejs.org/en/blog/)에 올라오는 주간 뉴스는 `weekly/_posts/` 디렉터리를 사용합니다.
    * 파일명
        - 원문이 올라온 날짜와 제목을 대시(`-`)로 이어 붙여서 파일명을 정합니다.(예시: `2015-01-27-state-of-io-js.md`)
        - 주간 뉴스의 경우에는 원문의 날짜와 weekly를 대시(`-`)로 이어 붙여서 파일명을 정합니다.(예시: `2015-02-13-weekly.md`)
    * 자동 파일 생성
        - 관례대로 파일을 자동으로 생성하려면 다음 명령어를 실행합니다.

                $ rake create:articles[URL]

        - 다음과 같이 사용합니다.

                $ rake create:articles[https://nodejs.org/en/blog/weekly-updates/weekly-update.2015-08-14/]
                $ rake create:articles[https://nodejs.org/en/blog/announcements/interactive-2015/]

        - 이 명령어를 실행하면 각각 article이나 weekly에 관례에 맞는 파일이 자동으로 생성됩니다.
    * 번역문서
        - 파일 상단에는 YAML 형식으로 글의 메타정보를 작성합니다.

                ---
                layout: post
                title: 번역 글의 제목
                author: 원 저자명
                ref: 원문의 글 제목
                refurl: 원문 링크
                translator:
                  - <a href="GITHUB_URL" target="_blank">번역자 이름</a>
                  - <a href="GITHUB_URL" target="_blank">번역자 이름</a>
                ---

        - 번역자가 여러 명인 경우에는 `translator`에 여러 줄을 추가하면 됩니다.
        - 이곳에 작성한 메타정보는 각 글의 상단에 표시됩니다.
        - 문서는 [마크다운](https://help.github.com/articles/github-flavored-markdown/) 형식으로 작성합니다.
        - 이후 문서를 관리하기 위해 원문을 주석(`<!-- -->`)으로 추가하고 번역한 내용을 다음과 같이 작성합니다.

                <!--
                # io.js 1.6 release
                This week we had a two io.js releases [v1.6.1](https://iojs.org/dist/v1.6.1/) and  [v1.6.0](https://iojs.org/dist/v1.6.0/), complete changelog can be found [on GitHub](https://github.com/nodejs/io.js/blob/v1.x/CHANGELOG.md).
                -->

                # io.js 1.6 릴리스
                이번 주에는 [v1.6.1](https://iojs.org/dist/v1.6.1/)과 [v1.6.0](https://iojs.org/dist/v1.6.0/) 두 번의 릴리스가 있었습니다. [GitHub](https://github.com/nodejs/io.js/blob/v1.x/CHANGELOG.md)에서 전체 변경사항을 볼 수 있습니다.

1. 번역이 완료되면 해당 브랜치를 이용해서 풀 리퀘스트를 보냅니다.
    * 커밋 메시지나 풀 리퀘스트에 번역한 문서의 이슈번호를 추가합니다.
1. 풀 리퀘스트는 리뷰 과정을 거치게 되고 이 과정에서 오타, 번역 문체 등을 다듬습니다.
1. 리뷰가 완료되어 풀 리퀘스트가 머지되면 [블로그](https://nodejs.github.io/nodejs-ko/)에 적용됩니다.

# 그 외 참고할 사항
1. 특별히 어색하지 않다면 기울임꼴, 굵은 글씨 등 서식은 원문과 똑같이 사용합니다.
2. 사람, 기관, 지역 이름은 가능한 영어 그대로 남겨둡니다.
3. 본문에 링크된 글에 대한 한국어 문서가 존재한다면 한국어 문서의 링크를 우선으로 사용합니다.
4. 적어도 풀 리퀘스트를 만들기 전에는 [한국어 맞춤법 검사기](http://speller.cs.pusan.ac.kr/)를 사용해 맞춤법을 확인해주세요.
