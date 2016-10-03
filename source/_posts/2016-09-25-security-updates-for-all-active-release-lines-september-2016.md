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

OpenSSL 프로젝트는 Node.js v4 버전과 그 위의 버전에 포함된 [1.0.2i](https://www.openssl.org/news/openssl-1.0.2-notes.html)버전과 Node.js v0.10 버전과 v0.12버전에 보함된 [1.0.1u](https://www.openssl.org/news/openssl-1.0.1-notes.html)버전의 전반적인 유효성을 [발표](https://www.openssl.org/news/secadv/20160922.txt)했습니다. 저희 암호화 팀(Shigeki Ohtsu, Fedor Indutny, Ben Noordhuis)은 Node.js에 줄 영향을 알아내기 위해 OpenSSL 릴리스에서 제기된 결함 분석을 진행하고 있습니다. 분석 결과는 아래를 참고하십시오.

<!--
### [CVE-2016-6304](https://www.openssl.org/news/vulnerabilities.html#2016-6304): OCSP Status Request extension unbounded memory growth
A malicious client can exhaust a server's memory, resulting in a denial of service (DoS) by sending very large OCSP Status Request extensions in a single session.
This flaw is labelled _high_ severity due to the ease of use for a DoS attack and Node.js servers using TLS are vulnerable.
**Assessment**: All versions of Node.js are **affected** by this vulnerability.
-->
### [CVE-2016-6304](https://www.openssl.org/news/vulnerabilities.html#2016-6304): OCSP(온라인 인증서 상태 프로토콜) 상태 요청 연장으로 인한 무한 메모리 증가

악성 클라이언트가 서버 메모리를 소모시켜, 한 세션에 매우 많은 OCSP 상태 요청을 보내 DoS(Denial of Service)를 유발합니다.
이 결함은 DoS 공격의 용이성과 TLS를 사용하는 Node.js 서버들이 취약하여 _높은_ 심각성으로 분류되었습니다.
**분석 결과**: Node.js의 모든 버전들은 이 취약점에 **영향**을 받습니다.

<!--
### [CVE-2016-6305](https://www.openssl.org/news/vulnerabilities.html#2016-6305): SSL_peek() hang on empty record
OpenSSL 1.1.0 SSL/TLS will hang during a call to `SSL_peek()` if the peer sends an empty record.
Node.js is not yet dependent on OpenSSL 1.1.0 so it is not impacted by this flaw.
**Assessment**: All versions of Node.js are believed to be **unaffected** by this vulnerability.
-->
### [CVE-2016-6305](https://www.openssl.org/news/vulnerabilities.html#2016-6305): 빈 기록에 걸려 있는 SSL_peek()

OpenSSL 1.1.0 SSL/TLS가 `SSL_peek()`로 요청을 보내는 동안 피어가 빈 기록을 보낼 때 걸려있습니다. 
Node.js는 아직 OpenSSL 1.1.0에 의존하고 있지 않으므로 이 결함에 영향을 받지 않습니다.
**분석 결과**: Node.js의 모든 버전들은 이 취약점에 **영향 받지 않습니다**.

<!--
### [CVE-2016-2183](https://www.openssl.org/news/vulnerabilities.html#2016-2183): SWEET32 Mitigation
[SWEET32](https://sweet32.info) is a new attack on older block cipher algorithms that use a block size of 64 bits.
As mitigation, OpenSSL has moved DES-based ciphers from the `HIGH` to `MEDIUM` group. As Node.js includes `HIGH`, but not `MEDIUM`, in its default suite, affected ciphers are no longer included unless the default suite is not used. Node's default TLS cipher suite can be found in the [API documentation](https://nodejs.org/api/tls.html#tls_modifying_the_default_tls_cipher_suite).
**Assessment**: All versions of Node.js are **affected** by this vulnerability.
-->
### [CVE-2016-2183](https://www.openssl.org/news/vulnerabilities.html#2016-2183): SWEET32 제어/완화

[SWEET32](https://sweet32.info) 는 64비트 사이즈의 블럭을 이용하는 오래된 블럭 사이퍼 알고리즘에 대한 새로운 공격입니다. 
이를 완화하기 위해, OpenSSL은 DES 기반 사이퍼들을 `높은` 그룹에서 `중간`그룹으로 옮겼습니다. Node.js는 기본 스위트에 `중간`그룹은 제외하고, `높은` 그룹은 포함하여, 영향받는 사이퍼들은 기본 스위트를 사용하지 않는 이상 포함되지 않습니다. Node의 기본 TLS 사이퍼 스위트는 [API 문서](https://nodejs.org/api/tls.html#tls_modifying_the_default_tls_cipher_suite)에서 확인하실 수 있습니다.
**분석 결과**: Node.js의 모든 버전들은 이 취약점에 **영향**을 받습니다.

<!--
### [CVE-2016-6303](https://www.openssl.org/news/vulnerabilities.html#2016-6303): OOB write in MDC2_Update()
An overflow can occur in `MDC2_Update()` under certain circumstances resulting in an out of bounds (OOB) error. This attack is impractical on most platforms due to the size of data required to trigger the OOB error.
Node.js is impacted by this flaw but due to the impracticalities of exploiting it and the very low usage of of MDC-2, it is _very low_ severity for Node.js users.
**Assessment**: All versions of Node.js are **affected** by this vulnerability.
-->
### [CVE-2016-6303](https://www.openssl.org/news/vulnerabilities.html#2016-6303): MDC2_Update() 에서 OOB 쓰기 오류

특정 상황에 `MDC2_Update()`에서 OOB(대역 외) 에러를 초래하는 오버플로가 발생할 수 있습니다. 이 공격은 OOB 에러를 일으키기 위해 필요한 데이터의 사이즈 때문에 대부분의 플랫폼에서는 적용되지 않습니다. 
Node.js는 이 결함에 영향을 받지만 이 에러를 이용하는 것의 비현실적인 부분과 MDC-2의 매우 낮은 이용 실태로, Node.js 이용자들에게 _매우 낮은_ 심각성으로 간주됩니다.
**분석 결과**: 모든 버전의 Node.js는 이 취약점에 **영향**을 받습니다.

<!--
### [CVE-2016-6302](https://www.openssl.org/news/vulnerabilities.html#2016-6302): Malformed SHA512 ticket DoS
If a server uses SHA512 for TLS session ticket HMAC, it is vulnerable to a denial of service (DoS) attack via crash upon receiving a malformed ticket.
Node.js does not use SHA512 for session tickets and is therefore not impacted by this flaw.
**Assessment**: All versions of Node.js are believed to be **unaffected** by this vulnerability.
-->
### [CVE-2016-6302](https://www.openssl.org/news/vulnerabilities.html#2016-6302): 기형의 SHA512 티켓 DoS 공격

서버가 TLS 세션 티켓 HMAC에 SHA512를 이용한다면, 기형 티켓을 받아 충돌하여 DoS(서비스 거부)공격에 취약할 수 있습ㄴ다.
Node.js는 세션 티켓에 SHA512를 사용하지 않으므로 이 결함에 영향을 받지 않습니다.
**분석 결과**: 모든 버전의 Node.js는 이 취약점에 **영향 받지 않습니다**.

<!--
### [CVE-2016-2182](https://www.openssl.org/news/vulnerabilities.html#2016-2182): OOB write in BN_bn2dec()
An out of bounds (OOB) write can occur in `BN_bn2dec()` if an application uses this function with an overly large `BIGNUM`. TLS is not affected because record limits will reject an oversized certificate before it is parsed.
**Assessment**: All versions of Node.js are believed to be **unaffected** by this vulnerability.
-->
### [CVE-2016-2182](https://www.openssl.org/news/vulnerabilities.html#2016-2182): BN_bn2dec()에서 OOB 쓰기 오류

애플리케이션이 매우 큰 `BIGNUM`과 함께 `BN_bn2dec()` 함수를 사용했을 때 OOB(대역 외) 에러가 발생할 수 있습니다. TLS는 기록의 한도가 구문 분석되기 전 크기가 큰 인증서를 거부를 하므로 영향을 받지 않습니다.
**분석 결과**: 모든 버전의 Node.js는 이 취약점에 **영향 받지 않습니다**.

<!--
### [CVE-2016-2180](https://www.openssl.org/news/vulnerabilities.html#2016-2180): OOB read in TS_OBJ_print_bio()
An out of bounds (OOB) read can occur when large OIDs are presented via `TS_OBJ_print_bio()`.
Node.js does not make use of the Time Stamp Authority functionality in OpenSSL and is therefore believed to be unaffected by this flaw.
**Assessment**: All versions of Node.js are believed to be **unaffected** by this vulnerability.
-->
### [CVE-2016-2180](https://www.openssl.org/news/vulnerabilities.html#2016-2180): TS_OBJ_print_bio()에서 OOB 읽기 오류

OOB(대역 외) 읽기 오류가 `TS_OBJ_print_bio()` 함수를 통해 큰 개체 ID (OID)가 존재할 때 발생할 수 있습니다. 
Node.js는 OpenSSL의 시간 스탬프 권한 (Time Stamp Authority)을 사용하지 않으므로 이 결함에 영향 받지 않는 것으로 보여집니다.
**분석 결과**: 모든 버전의 Node.js는 이 취약점에 **영향 받지 않습니다**.

<!--
### [CVE-2016-2177](https://www.openssl.org/news/vulnerabilities.html#2016-2177): Pointer arithmetic undefined behaviour
This programming flaw is described in the post at <https://www.openssl.org/blog/blog/2016/06/27/undefined-pointer-arithmetic/>.
It is unlikely that Node.js users are directly impacted by this.
**Assessment**: All versions of Node.js are believed to be **unaffected** by this vulnerability.
-->
### [CVE-2016-2177](https://www.openssl.org/news/vulnerabilities.html#2016-2177): 포인터 산술의 정의되지 않은 거동

이 프로그래밍 결함은 포스트 <https://www.openssl.org/blog/blog/2016/06/27/undefined-pointer-arithmetic/>에 설명되어 있습니다.
Node.js 사용자들이 이 결함에 직접적인 영향을 받기 어려울 것으로 보여집니다.
**분석 결과**: 모든 버전의 Node.js는 이 취약점에 **영향 받지 않습니다**.

<!--
### [CVE-2016-2178](https://www.openssl.org/news/vulnerabilities.html#2016-2178): Constant time flag not preserved in DSA signing
A flaw in the OpenSSL DSA implementation means that a non-constant time codepath is followed for certain operations. This has been demonstrated through a cache-timing attack to be sufficient for an attacker to recover the private DSA key.
This is _very low_ severity for Node.js users due to the difficulty in taking advantage of this attack and because DSA is very rarely used.
**Assessment**: All versions of Node.js are **affected** by this vulnerability.
-->
### [CVE-2016-2178](https://www.openssl.org/news/vulnerabilities.html#2016-2178): DSA 서명에 시간 플레그 상수가 보전되지 않음.

OpenSSL DSA 구현에 결함은 특정 작업에 따르는 비상수 시간 코드 경로를 의미합니다. 이 결함은 공격자가 개인 DSA 키를 복구하기 충분할 캐시 타이밍 공격을 통해 증명할 수 있습니다.
DSA는 매우 드물게 이용되기 때문에 이 공격을 이용하기에 어려움이 있으므로 이 결함은 Node.js 사용자들에게 _매우 낮은_ 심각성입니다.
**분석 결과**: 모든 버전의 Node.js는 이 취약점에 **영향**을 받습니다.

<!--
### [CVE-2016-2179](https://www.openssl.org/news/vulnerabilities.html#2016-2179): DTLS buffered message DoS
In a DTLS connection where handshake messages are delivered out-of-order, those messages that OpenSSL is not yet ready to process will be buffered for later use. This can be exploited to cause a denial of service (DoS) via memory exhaustion.
As Node.js does not support DTLS, users are not impacted by this flaw.
**Assessment**: All versions of Node.js are believed to be **unaffected** by this vulnerability.
-->
### [CVE-2016-2179](https://www.openssl.org/news/vulnerabilities.html#2016-2179): DTLS 버퍼 메세지 DoS

DTLS 연결중에 핸드쉐이크 (handshake) 메세지가 비정상적으로 전달이 될 경우, OpenSSL이 아직 프로세스할 준비가 안된 메세지들은 나중에 쓰기 위해 버퍼됩니다. 이는 메모리를 소진해 DoS (Denial of Service)를 초래하도록 이용될 수 있습니다. 
Node.js는 DTLS를 서포트하지 않으므로, 이용자들은 이 결함에 영향을 받지 않습니다.
**분석 결과**: 모든 버전의 Node.js는 이 취약점에 **영향 받지 않습니다**.

<!--
### [CVE-2016-2179](https://www.openssl.org/news/vulnerabilities.html#2016-2179): DTLS replay protection DoS
A flaw in the DTLS replay attack protection mechanism that would allow an attacker to force a server to drop legitimate packets for a DTLS connection, resulting in a denial of service (DoS) for that connection.
As Node.js does not support DTLS, users are not impacted by this flaw.
**Assessment**: All versions of Node.js are believed to be **unaffected** by this vulnerability.
-->
### [CVE-2016-2179](https://www.openssl.org/news/vulnerabilities.html#2016-2179): DTLS 재생방지(Replay Protection) DoS

DTLS 재생 공격 방지 장치에 있는 이 결함은 공격자가 서버가 DTLS 연결에 평범한 패킷들을 떨어트리도록 만들 수 있도록 할 수 있으며, 결과적으로 연결에 DoS를 초래할 수 있습니다.
Node.js는 DTLS를 서포트 하지 않으므로, 이용자들은 이 결함에는 영향을 받지 않습니다.
**분석 결과**: 모든 버전의 Node.js는 이 취약점에 **영향 받지 않습니다**.

<!--
### [CVE-2016-6306](https://www.openssl.org/news/vulnerabilities.html#2016-6306): Certificate message OOB reads
Some missing message length checks can result in out of bounds (OOB) reads of up to 2 bytes beyond an allocated buffer. There is a theoretical denial of service (DoS) risk. This only impacts a client or a server which enables client authentication.
Node.js is impacted by this _low_ severity flaw.
**Assessment**: All versions of Node.js are **affected** by this vulnerability.
-->
### [CVE-2016-6306](https://www.openssl.org/news/vulnerabilities.html#2016-6306): 인증서 메세지 OOB 읽기 오류

사라진 메세지 길이를 확인할 때 할당된 버퍼보다 최대 2바이트 정도의 OOB(대역 외) 읽기 오류가 생길 수 있습니다. 이론적인 DoS 위험이 있습니다. 이는 클라이언트와 서버 중 클라이언트 인증을 사용하는 쪽에만 영향을 줍니다.
Node.js는 이 _낮은_ 심각성의 결함에 영향 받습니다.
**분석 결과**: 모든 버전의 Node.js는 이 취약점에 **영향** 받습니다.

<!--
### [CVE-2016-6307](https://www.openssl.org/news/vulnerabilities.html#2016-6307): Excessive allocation of memory in tls_get_message_header()
Excessive allocation of memory in OpenSSL 1.1.0 can be achieved by manipulating the length component of a TLS header.
Node.js is not yet dependent on OpenSSL 1.1.0 so it is not impacted by this flaw.
**Assessment**: All versions of Node.js are believed to be **unaffected** by this vulnerability.
-->
### [CVE-2016-6307](https://www.openssl.org/news/vulnerabilities.html#2016-6307): tls_get_message_header()의 과대 메모리 할당

OpenSSL 1.1.0 버전의 과대 메모리 할당은 TLS 헤더의 길이를 조작하여 만들 수 있습니다. 
Node.js는 OpenSSL 1.1.0 버전에 아직 의존하지 않아 이 결함에 영향을 받지 않습니다.
**분석 결과**: 모든 버전의 Node.js는 이 취약점에 **영향 받지 않습니다**.

<!--
### [CVE-2016-6308](https://www.openssl.org/news/vulnerabilities.html#2016-6308): Excessive allocation of memory in dtls1_preprocess_fragment()
A flaw that is similar to CVE-2016-6307 but impacting DTLS.
Node.js is not yet dependent on OpenSSL 1.1.0, nor does it implement DTLS, so it is not impacted by this flaw.
**Assessment**: All versions of Node.js are believed to be **unaffected** by this vulnerability.
-->
### [CVE-2016-6308](https://www.openssl.org/news/vulnerabilities.html#2016-6308): dtls1_preprocess_fragment()의 과대 메모리 할당

이 결함은 CVE-2016-6307의 결함과 비슷하지만 DTLS에 영향을 줍니다.
Node.js는 OpenSSL 1.1.0 버전에 아직 의존하지 않고, DTLS를 도입하지 않아, 이 결함에 영향을 받지 않습니다.
**분석 결과**: 모든 버전의 Node.js는 이 취약점에 **영향 받지 않습니다**.

<!--
## Contact and future updates
Please monitor the nodejs-sec Google Group for updates: https://groups.google.com/forum/#!forum/nodejs-sec or the Node.js website for release announcements: https://nodejs.org/en/blog/
The current Node.js security policy can be found at <https://nodejs.org/en/security/>.
Please contact security@nodejs.org if you wish to report a vulnerability in Node.js.
Subscribe to the low-volume announcement-only nodejs-sec mailing list at https://groups.google.com/forum/#!forum/nodejs-sec to stay up to date on security vulnerabilities and security-related releases of Node.js and the projects maintained in the [nodejs GitHub organisation](http://github.com/nodejs/).
-->
## 연락처와 차기 업데이트

정보 갱신을 위해 nodejs-sec 구글 그룹<https://groups.google.com/forum/#!forum/nodejs-sec>과 릴리스 발표를 위한 Node.js 웹사이트<https://nodejs.org/en/blog/>를 확인 해주세요.

현재 버전의 Node.js 보안 정책은 <https://nodejs.org/en/security/>에서 보실 수 있습니다.

Node.js의 취약점을 제보하고 싶다면 <security@nodejs.org>로 연락해주세요.

보안 취약점, Node.js 보안 관련 릴리스, nodejs GitHub 조직내의 유지보수 되고 있는 프로젝트의 최신 상태를 위해 적은 양으로 통지만 하는 nodejs-sec 메일링 리스트<https://groups.google.com/forum/#!forum/nodejs-sec>를 구독해 주세요.