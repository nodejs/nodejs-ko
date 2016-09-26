---
category: articles
title: 2016년 9월, 모든 활성 릴리스 라인의 보안 업데이트
author: Rod Vagg
ref: Security updates for all active release lines, September 2016
refurl: https://nodejs.org/en/blog/vulnerability/september-2016-security-releases/
translator:
  - <a href="github.com/lucykang" target="_blank">Haeyeon Lucy Kang</a>
---

<!--
The Node.js project has scheduled updates for all of its active release lines to patch a number of security flaws. These flaws include some of those [announced](https://www.openssl.org/news/secadv/20160922.txt) by the OpenSSL project as well as a number of Node.js-specific issues. We do not consider any of these updates to be critical. However, it is strongly recommended that all production instances of Node.js be upgraded when the releases are made available.
-->
Node.js 프로젝트는 진행중인 모든 릴리스 라인들의 몇가지 보안상 결함들을 패치하기 위한 업데이트를 계획했습니다. 이 결함들은 Node.js의 특정 이슈들 뿐만 아니라 OpenSSL 프로젝트로부터 [발표](https://www.openssl.org/news/secadv/20160922.txt)된 것들도 포함됩니다. 이 업데이트들은 중대한 것으로 고려하고 있지 않지만, 릴리스가 출시되는 대로 모든 Node.js를 업그레이드 하시길 권장합니다. 

<!-- 
We intend to make releases available on or soon after the evening of **Tuesday, the 27th of September, 2016, UTC** (midday US time).
-->
릴리스는 **UTC기준 2016년 9월 27일 화요일**(미국 정오) 저녁이나 그 직후에 출시될 예정입니다. 

<!--
We consider some of the patches in these releases to be API _breaking_ changes which would normally warrant an increase in the major-version number of Node.js. However, in accordance with our security procedures, we will be delivering these changes in minor-version increases (the _y_ in _x.y.z_) where appropriate, and patch-version increases in v0.10 an v0.12 releases.
--> 
이 릴리스들의 몇몇 패치들은 Node.js의 주요 버전을 올릴 _호환성이 깨지는_ API 변화로 보여집니다. 하지만, 저희 보안 절차에 따라, 이 변경사항을 적절히 마이너 버전 (_x.y.z_ 중 _y_) 증가로 제공할 것이며, v0.10 과 v0.12 릴리스 패치 버전이 증가 될 예정입니다.

<!--
These are the expected version numbers for the releases:

* Node.js v6.7.0 (Current)
* Node.js v4.6.0 (LTS "Argon")
* Node.js v0.12.16 (Maintenance)
* Node.js v0.10.47 (Maintenance)
-->
릴리스가 예상되는 버전 넘버는 다음과 같습니다.

* Node.js v6.7.0(최신 버전)
* Node.js v4.6.0(LTS "Argon")
* Node.js v0.12.16(유지보수 버전)
* Node.js v0.10.46(유지보수 버전)

<!--
Additional notes:
* As per our [LTS schedule](https://github.com/nodejs/LTS), support for Node.js v0.10 will cease in October. Therefore, this may be the final release of Node.js v0.10. If you are still using v0.10 in production, it is essential that you plan for a migration to v4 (LTS "Argon") or v6 (LTS to be announced in October) as soon as possible.
* In accordance with our security release procedures, we will be limiting changes included in the LTS and Maintenance lines (v4, v0.12, and v0.10) _for these updates_ to only security-related and other critical fixes that provide for maximum stability for users.
-->
추가 사항:
* 저희의 [LTS 스케줄](https://github.com/nodejs/LTS)에 따라, Node.js v0.10 버전을 위한 지원은 10월에 중단됩니다. 그러므로, 이 업데이트는 Node.js v0.10 버전의 마지막 릴리스가 될 것입니다. 아직 배포로 v0.10 버전을 사용중이시라면, 가능한 빨리 v4(LTS "Argon")나 v6(10월에 발표될 LTS)로 변경하시길 바랍니다. 
* 저희의 보안 릴리스 절차에 따라, LTS 버전과 유지보수 버전들(v4, v0.12, v0.10)에 적용되는 _이 업데이트들은_ 사용자에게 최대한의 안정성을 제공하는 보안과 관련되거나 중대한 수정 사항만으로 제한할 것입니다. 

<!--
## Node.js-specific security flaws

Included in these releases will be a number of fixes unrelated to the recent OpenSSL releases. These include:

* A high-severity flaw relating to the processing of TLS certificates, impacting all versions of Node.js
* A low-severity native code injection vulnerability on Windows, impacting all versions of Node.js
* A low-severity HTTP validation error, impacting all versions of Node.js

Full disclosure of fixed vulnerabilities will be provided after all releases are made available for download.
-->
## Node.js 특정 보안 결함 

이번 릴리스들에는 최근의 OpenSSL 릴리스와는 관련이 없는 수정사항을 포함합니다. 이것들은 다음을 포함합니다:

* 모든 Node.js 버전들에 영향을 주는 TLS 인증서의 프로세스에 관련된 높은 심각성의 결함들
* 모든 Node.js 버전들에 영향을 주는 낮은 심각성의 Windows 네이티브 코드 (원시 코드) 주입
* 모든 Node.js 버전들에 영향을 주는 낮은 심각성의 HTTP 검증 오류
 
개선된 취약성에 관한 전면 발표는 모든 릴리스가 다운로드 가능해지면 제공될 예정입니다.

<!--
## September OpenSSL Releases

The OpenSSL project has [announced](https://www.openssl.org/news/secadv/20160922.txt) the general availability of versions [1.0.2i](https://www.openssl.org/news/openssl-1.0.2-notes.html) (to be included in Node.js v4 and above) and [1.0.1u](https://www.openssl.org/news/openssl-1.0.1-notes.html) (to be included in Node.js v0.10 and v0.12). Our crypto team (Shigeki Ohtsu, Fedor Indutny, and Ben Noordhuis) have performed an analysis of the defects addressed in the OpenSSL releases to determine their impact on Node.js. The results of this analysis are included below.
-->
## 9월 OpenSSL 릴리스

OpenSSL 프로젝트는 Node.js v4 버전과 그 위의 버전에 포함된 [1.0.2i](https://www.openssl.org/news/openssl-1.0.2-notes.html)버전과 Node.js v0.10 버전과 v0.12버전에 보함된 [1.0.1u](https://www.openssl.org/news/openssl-1.0.1-notes.html)버전의 전반적인 유효성을 [발표](https://www.openssl.org/news/secadv/20160922.txt)했습니다. 저희 암호화 팀(Shigeki Ohtsu, Fedor Indutny, Ben Noordhuis)은 수행하고 있습니다. / OpenSSL 릴리스에서 제기한 결함의 분석

https://raw.githubusercontent.com/nodejs/nodejs.org/master/locale/en/blog/vulnerability/september-2016-security-releases.md