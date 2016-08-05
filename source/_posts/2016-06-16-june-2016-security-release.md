---
category: articles
title: 2016년 6월, 모든 활성 릴리스 라인의 보안 업데이트
author: Rod Vagg
ref: Security updates for all active release lines, June 2016
refurl: https://nodejs.org/en/blog/vulnerability/june-2016-security-releases/
translator:
- <a href="https://github.com/freenice12" target="_blank">freenice12</a>
---

<!--

## _(Update 16-June-2016)_ Adjusted release schedule

Unfortunately we have to announce that we are delaying our security releases by a week. We have concluded that pushing forward with the releases this week would unnecessarily compromise the quality of the fixes we intended to include. Instead, we will be taking the extra time to be sure that we are delivering the stability and quality that Node.js users expect.

We now intend to make releases available on or soon after **Thursday, the 23rd of June, 2016, UTC**.

***Original post is included below***

The Node.js project has scheduled updates for all of its active release lines to patch two security flaws and one security-related usability flaw. We do not consider any of our updates to be critical, however, it is recommended that all production instances of Node.js be upgraded when the releases are made available.

We intend to make releases available on or soon after **Thursday, the 16th of June, 2016, UTC**.

-->

## _(2016년 6월 16일 갱신)_ 릴리스 일정 조정

안타깝게도 보안 릴리스가 일주일 연기 되었다는 사실을 알립니다. 이번 주에 릴리스를 진행하면 의도했던 수정사항의 품질이 불필요하게 낮아질 수 있다는 결론을 내리게 되었습니다. 대신 우리는 Node.js 사용자들의 기대만큼의 안정성과 품질을 제공할 추가 시간을 가지게 되었습니다.

우리는 가능하면 **UTC기준 2016년 06월 23일 화요일**혹은 직후에 배포를 준비하고 있습니다.

***원본 글은 아래에 포함되어 있습니다.***

Node.js 프로젝트는 모든 활성 릴리스에 한 개의 보안 관련 결함과 두 개의 보안 결함 패치를 위한 업데이트 스케줄이 예정되어 있습니다. 중요한 업데이트는 고려하고 있지 않지만, 업데이트가 가능해지면 모든 Node.js를 업그레이드할 것을 권장합니다.

우리는 가능하면 **UTC기준 2016년 06월 23일 화요일**혹은 직후에 배포를 준비하고 있습니다.

<!--
We consider some of the patches in these releases to be API _breaking_ changes which would normally warrant an increase in the major-version number of Node.js. However, in accordance with our security procedures we will be delivering these changes in minor-version increases _(the y in x.y.z)_ where appropriate, and patch-version increases in v0.10 an v0.12 releases.

Therefore, we expect to be releasing:

* Node.js v6.3.0 (Current)
* Node.js v5.12.0
* Node.js v4.5.0 (LTS "Argon")
* Node.js v0.12.15 (Maintenance)
* Node.js v0.10.46 (Maintenance)
-->

이번 릴리스의 패치에서 _호환성이 깨지는_ API 변경사항을 생각하고 있습니다. 이는 일반적으로는 Node.js 주요 버전을 올려야 하지만 우리의 보안 절차에 따라 이 변경사항을 적절히 마이너 버전 _(x.y.z 중 y)_ 증가로 제공할 예정이고, v0.10과 v0.12 릴리스에 패치 버전이 증가 될 것입니다.

따라서 우리가 예상하는 릴리스는 아래와 같습니다.

* Node.js v6.3.0(최신 버전)
* Node.js v5.12.0
* Node.js v4.5.0(LTS "Argon")
* Node.js v0.12.15(유지보수 버전)
* Node.js v0.10.46(유지보수 버전)

<!--
While we anticipate minimal impact from the breaking changes, please be sure to review the details once they are released and make an assessment regarding the impact on your applications.

Additional notes:
* It is our intention to stop releasing critical updates for the v5 release line at the end of this month, you should migrate to to v6 or v4 LTS if you have not already done so.
* In accordance with our security release procedures, we will be limiting changes included in the LTS and Maintenance lines (v4, v0.12 and v0.10) _for these updates_ to only security-related and critical fixes to provide maximum stability for users.
-->

변경사항에서 최소한의 충격을 예상하는 동안, 세부사항을 확실히 검토하고 이 릴리스가 적용되었을 때 당신의 애플리케이션이 받을 충격을 예상해 주시길 바랍니다.

추가 사항입니다.

* 이달 말 v5 릴리스 라인을 위한 중요한 업데이트 배포를 중단하는 것이 우리의 의도였고, 만약 완성 전이라면 v6이나 v4 LTS로 변경해야 합니다.
* 보안 배포 절차에 따라, 이번 _수정사항_에서는 사용자에게 안정성을 최대한 제공하기 위해 LTS 버전과 유지보수 버전(v4, v0.12, v0.10)에 보안과 관련되거나 중대한 수정사항만 포함되도록 제한할 것입니다.

<!--

## V8 security defect

-->

##V8 보안 결함

<!--

The V8 team has identified and patched a potential security vulnerability. We will be backporting the fix to all active release lines of Node.js. Our current assessment is that this vulnerability should be considered low-severity for Node.js users with an exploit being very difficult to develop and execute.

**All versions of Node.js are affected.**

-->

V8 팀은 잠재적 보안 취약점을 확인하고 패치 했습니다. 우리는 모든 Node.js 활성 라인에 수정 사항들을 역 이식할 것입니다. 이 취약점은 개발과 실행을 매우 어렵게 만드는 악성 프로그램과 Node.js 사용자를 위해 낮은 심각도로 고려되어야 한다는 판단입니다.

**Node.js의 모든 버전에 적용되었습니다.**

<!--

## HTTP processing security defect (CVE-2016-5325)

-->

## HTTP 처리 보안 결함 (CVE-2016-5325)

<!--

We will be including fixes relating to Node.js HTTP processing. We categorise these as low-severity and are not aware of any existing exploits leveraging the defects. Full details are embargoed until new releases are available.

Common Vulnerability Scoring System (CVSS) v3 Base Score:

| Metric                      | Score                      |
|-----------------------------|----------------------------|
| **Base Score:**             | 4.8 (Medium)               |
| **Base Vector:**            | [CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:N](https://www.first.org/cvss/calculator/3.0#CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:N)
| **Attack Vector:**          | Network (AV:N)             |
| **Attack Complexity:**      | High (AC:H)                |
| **Privileges Required:**    | None (PR:N)                |
| **User Interaction:**       | None (UI:N)                |
| **Scope of Impact:**        | Unchanged (S:U)            |
| **Confidentiality Impact:** | Low (C:L)                  |
| **Integrity Impact:**       | Low (I:L)                  |
| **Availability Impact:**    | None (A:N)                 |

Refer to the [CVSS v3 Specification](https://www.first.org/cvss/specification-document) for details on the meanings and application of the vector components.

**All versions of Node.js are affected.**

This defect will identified as [CVE-2016-5325](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-5325)
-->

Node.js HTTP 처리에 관련 있는 수정사항을 포함할 예정입니다. 우리는 아래 목록을 낮은 심각도로 분류했고 결함을 활용하는 악성 프로그램의 존재를 알지 못했습니다. 모든 자세한 사항들은 새로운 릴리즈가 가능해질 때까지 알리지 않을 예정입니다.

일반 취약점 점수 시스템 (CVSS) v3 기반의 점수.

| Metric                      | Score                      |
|-----------------------------|----------------------------|
| **Base Score:**             | 4.8 (Medium)               |
| **Base Vector:**            | [CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:N](https://www.first.org/cvss/calculator/3.0#CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:N)
| **Attack Vector:**          | 네트워크 (AV:N)             |
| **Attack Complexity:**      | 높음 (AC:H)                |
| **Privileges Required:**    | 없음 (PR:N)                |
| **User Interaction:**       | 없음 (UI:N)                |
| **Scope of Impact:**        | 변화없음 (S:U)            |
| **Confidentiality Impact:** | 낮음 (C:L)                  |
| **Integrity Impact:**       | 낮음 (I:L)                  |
| **Availability Impact:**    | 없음 (A:N)                 |

벡터 컴포넌트의 적용과 세부사항은 [CVSS v3 명세](https://www.first.org/cvss/specification-document)를 참조하세요.

**Node.js의 모든 버전에 적용되었습니다.**

이 결함은 [CVE-2016-5325](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-5325)로 식별될 것입니다.

<!--

## Security-related HTTP client usability flaw

We intend to also include a patch for HTTP client in Node.js. While we do not consider this to be strictly a security concern for Node.js core, it poses a usability concern that may easily enable users to write code that exposes vulnerabilities in their applications.

**All versions of Node.js are affected.**

-->

## 보안 관련 HTTP 클라이언트 사용성 결함

Node.js의 HTTP 클라이언트에 이 패치도 포함하려고 합니다. 이 결함이 엄격하게 Node.js 코어에 보안 문제가 되지 않는다고 생각했지만 개발자가 애플리케이션에서 취약점을 노출시키는 코드를 쉽게 작성할 수 있게 하는 사용성 문제가 제기되었습니다.

**Node.js의 모든 버전에 적용되었습니다.**

<!--

## Contact and future updates

Please monitor the nodejs-sec Google Group for updates: https://groups.google.com/forum/#!forum/nodejs-sec or the Node.js website for release announcements: https://nodejs.org/en/blog/

The current Node.js security policy can be found at <https://nodejs.org/en/security/>.

Please contact security@nodejs.org if you wish to report a vulnerability in Node.js.

Subscribe to the low-volume announcement-only nodejs-sec mailing list at https://groups.google.com/forum/#!forum/nodejs-sec to stay up to date on security vulnerabilities and security-related releases of Node.js and the projects maintained in the [nodejs GitHub organisation](http://github.com/nodejs/).

-->

## 연락처와 차기 업데이트

정보 갱신을 위해 nodejs-sec 구글 그룹(<https://groups.google.com/forum/#!forum/nodejs-sec>)과 릴리스 발표를 위한 Node.js 웹사이트(<https://nodejs.org/en/blog/>)를 확인 해주세요.

현재 버전의 Node.js 보안 정책은 <https://nodejs.org/en/security/>에서 보실 수 있습니다.

Node.js의 취약점을 제보하고 싶다면 security@nodejs.org로 연락해주세요.

보안 취약점, Node.js 보안 관련 릴리스, [nodejs GitHub 조직](http://github.com/nodejs/)내의 유지보수 되고 있는 프로젝트의 최신 상태를 위해 적은 양으로 통지만 하는 nodejs-sec 메일링 리스트(<https://groups.google.com/forum/#!forum/nodejs-sec>)를 구독해 주세요.
