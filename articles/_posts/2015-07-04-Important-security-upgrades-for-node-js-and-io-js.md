---
layout: post
title: node.js와 io.js를 위한 중요 보안 업데이트
author: mikeal
ref: Important security upgrades for node.js and io.js.
refurl: https://medium.com/@iojs/important-security-upgrades-for-node-js-and-io-js-8ac14ece5852
translator:
- <a href="https://github.com/freenice12" target="_blank">freenice12</a>
---


<!--
Important security upgrades for node.js and io.js
Critical security releases for node.js and io.js
node.js-v0.12.6
io.js-v2.3.3
io.js-v1.8.3
-->

### node.js와 io.js를 위한 치명적인 보안 릴리스
* [node.js-v0.12.6](http://nodejs.org/dist/v0.12.6/)
* [io.js-v2.3.3](https://iojs.org/dist/v2.3.3/)
* [io.js-v1.8.3](https://iojs.org/dist/v1.8.3/)

<!--
First, the obvious: the handling of this hasn’t been ideal, it would have been nice to take our time and do this more strategically. It’s evening in the USA and it’s the weekend of the 4th of July.
-->

첫번째 분명한 것: 분명한 것은, 이 일의 처리가 이상적이지는 않았고, 우리가 좀 더 전략적으로 시간을 할애했다면 좋았을 것입니다.
지금 미국은 7월 4일(독립기념일) 주말의 저녁입니다.

<!--
We made the call to push forward because details about the bug and potential exploit has inadvertently made its way to a public forum so we’d rather given companies and users the tools to protect themselves and mitigate DoS if they happen to become a reality than sit on it and cross our fingers. The timing sucks, particularly for the USA where it’s hitting the weekend and the whole 4th of July thing makes this a nightmare for people managing large deployments but this is the call we made with the information available.
-->

우리는 강행하기로 했습니다. 왜냐하면 버그와 잠재적 취약점 공격에 대한 세부 사항이 실수로 인해 공개 포럼에 올라갔기 때문입니다.  우리는 이런 공격이 실제로 발생했을 때 모른 척하고 얼버무리고 싶지 않았습니다. 그래서 회사와 사용자에게 그들 스스로를 보호하고 DoS를 경감할 수 있는 도구를 제공하기로 했습니다. 시기가 굉장히 좋지 않습니다. 큰 배포를 다루는 사람에게는 독립기념일 행사와 주말이 겹친 지금이 악몽 같을 것입니다. 특히 주말을 빼앗긴 미국은 더욱 그렇습니다. 그럼에도 불구하고 이 정보를 공표하기로 결정했습니다.

<!--
A short history
Kris Reeves and Trevor Norris pinpointed a bug in V8 in the way it decodes UTF strings. This impacts Node at the Buffer to UTF8 String conversion and can cause a process to crash. The security concern comes from the fact that a lot of data from outside of an application is delivered to Node via this mechanism which means that users can potentially deliver specially crafted input data that can cause an application to crash when it goes through this path. We know that most networking and filesystem operations are impacted as would be many user-land uses of Buffer to UTF8 String conversion. We know that HTTP(S) header parsing is not vulnerable because Node does not convert this data as UTF8. This is a small consolation because it restricts the way HTTP(S) can be exploited but there is more to HTTP(S) than header parsing obviously. We also have no information yet on how the various TLS terminators and forward-proxies in use may potentially mitigate against the form of data required for this exploit.
-->

###요약한다면
Kris Reeves와 Trevor Norris는 V8에서 UTF 문자열을 디코드하는 방법의 버그를 정확하게 지적했습니다. 이것은 버퍼를 UTF8 문자열로 변환할 때 Node에 영향을 주고 프로세스의 강제 종료를 유발할 수 있습니다. 보안 상 고려해야 할 것은, 굉장히 많은 데이터가 애플리케이션 외부로부터 이 메커니즘을 통해 Node로 전달된다는 것입니다. 이 말은 사용자가 이 경로를 통해, 잠재적으로 애플리케이션의 크래시를 유발할 수 있는 특별히 만든 입력 데이터를 전달할 수 있다는 뜻입니다. 우리는 버퍼를 UTF8 문자열로 변환하는 사용자가 많기 때문에 대부분의 네트워킹과 파일 시스템 작동이 영향을 받을 것을 알고 있습니다. Node는 HTTP(S) 헤더를 파싱한 후 UTF8로 변환하지 않기 때문에, 이에 대해서는 취약하지 않습니다. 이는 HTTP(S)가 취약점 공격을 받을 방법을 제한하기에 자그마한 위안을 주지만, 확실히 HTTP(S)에는 헤더 파싱 이외에도 많은 영역이 존재합니다. 게다가 우리에겐, 지금 사용되는 다양한 TLS 종결자와 포워드 프록시가 어떻게 이 취약점 공격에 필요한 데이터 형성을 잠재적으로 방해할 수 있을지에 대한 정보도 아직 없습니다.

<!--
The initial ETA was midday PDT. Unfortunately, the patch wasn’t quite ready and there was an extended test and verification process for V8, io.js and Node.js during the day. The builds also take some time on top of that, hence the delay. Fedor Indutny created the fix, Ben Noordhuis, Trevor Norris, Julien Gilli, Rod Vagg, Michael Dawson and Jeremiah Senkpiel all worked very hard to make this land successfully.
-->

초기 완료 예정 시각은 태평양 연안시로 정오였습니다. 불행하게도 그 패치는 불완전하고 낮 동안에는 V8, io.js, Node.js를 위한 다양한 검증 과정과 확장된 테스트만이 있었습니다. 빌드는 이런 이유로 시간을 할애했고 그래서 지연되었습니다. Fedor Indutny는 수정본을 만들었고, Ben Noordhuis, Trevor Norris, Julien Gilli, Rod Vagg, Michael Dawson, Jeremiah Senkpiel 모두 성공으로 이끌기 위해 열심히 일했습니다.
