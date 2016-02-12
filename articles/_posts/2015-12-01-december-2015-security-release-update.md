---
layout: post
title: 2015년 12월 보안 릴리스 일정 변경
author: Rod Vagg
ref: December Security Release Schedule Update
refurl: https://nodejs.org/en/blog/vulnerability/december-2015-security-release-update/
translator:
- <a href="https://github.com/taggon" target="_blank">taggon</a>
---

<!--
The OpenSSL project [announced](https://mta.openssl.org/pipermail/openssl-announce/2015-November/000045.html) today that they will be releasing security updates for versions 1.0.2, 1.0.1, 1.0.0 and 0.9.8 on the 3rd of December UTC. The updates will fix a number of security defects, the highest of which is classified as "moderate" severity according to their [severity scale](https://www.openssl.org/policies/secpolicy.html):
-->
OpenSSL 프로젝트는 12월 3일(UTC)에 1.0.2, 1.0.1, 1.0.0, 0.9.8 버전에 대한 보안 업데이트를 릴리스 할 것이라고 오늘 [발표했습니다](https://mta.openssl.org/pipermail/openssl-announce/2015-November/000045.html).
이 업데이트는 OpenSSL 프로젝트가 정의한 [심각성 척도](https://www.openssl.org/policies/secpolicy.html)에서 "중간" 이하로 분류된 여러 보안 결함을 수정합니다.

<!--
> MODERATE Severity. This includes issues like crashes in client applications, flaws in protocols that are less commonly used (such as DTLS), and local flaws. These will in general be kept private until the next release, and that release will be scheduled so that it can roll up several such flaws at one time.
-->

> **중간** 심각도는 클라이언트 애플리케이션이 예기치 않은 종료, 그리 널리 사용되지 않는 프로토콜(DTLS 등)의 결함, 국부 결함과 같은 문제를 포함합니다.
> 일반적으로 이러한 결함은 다음 릴리스까지 공개하지 않으며, 한 번에 여러 결함을 해결할 수 있을 때 릴리스 일정을 정합니다.

<!--
Node.js versions v0.10.x and v0.12.x depend on OpenSSL v1.0.1 and versions v4.x (LTS Argon) and v5.x depend on OpenSSL v1.0.2. As the Node.js build process statically links OpenSSL into binaries, we will be required to release patch-level updates to all of our actively supported versions to include the upstream fixes. While we are unaware of the exact nature of the OpenSSL vulnerabilities being fixed, we must consider it likely that Node.js releases will be required in order to protect users.
-->
Node.js v0.10.x와 v0.12.x는 OpenSSL v1.0.1에 의존성이 있으며, v4.x(LTS Argon)와 v5.x는 OpenSSL v1.0.2에 의존성이 있습니다.
OpenSSL은 Node.js 빌드 과정에서 정적 연결하여 바이너리에 포함되기 때문에 현재 활발히 지원하는 버전을 수정하려면 패치 수준의 업데이트를 릴리스해야 합니다.
수정될 OpenSSL 취약점의 정확한 특성은 모르지만, 사용자를 보호하려면 Node.js도 릴리스해야 할 것이라고 예상하고 있습니다.

<!--
Since the OpenSSL release schedule is two days after our [announced updates](https://groups.google.com/forum/#!topic/nodejs-sec/Zf7Nxtg230E) for v0.12.x, v4.x and v5.x, we have decided to **postpone our security releases to coincide with OpenSSL release availability**. We will also be **including v0.10 in our set of releases**.
-->
OpenSSL 릴리스 일정은 우리가 v0.12.x, v4.x, v5.x 버전을 [릴리스하겠다고 공지한](https://groups.google.com/forum/#!topic/nodejs-sec/Zf7Nxtg230E) 날짜의 이틀 후이기 때문에 새로 릴리스되는 OpenSSL을 사용할 수 있도록 Node.js의 보안 릴리스 일정도 **연기하기로** 했습니다. 또한 **v0.10도 릴리스 될** 것입니다.

<!--
Therefore, we are moving our planned security releases for Node.js from Wednesday the 2nd of December 2015, UTC to the **Friday, the 4th of December 2015, UTC** _(Thursday the 3rd of December US time)_. We understand that the timing of this during the work-week is unfortunate but we must take into account the possibility of introducing a vulnerability gap between disclosure of OpenSSL vulnerabilities and patched releases by Node.js and therefore must respond as quickly as practical. Please be aware that patching and testing of OpenSSL updates is a non-trivial exercise and there will be significant delay after the OpenSSL releases before we can be confident that Node.js builds are stable and suitable for release.
-->
따라서 우리는 Node.js의 보안 릴리스 일정을 2015년 12월 2일 수요일(UTC)에서 **2015년 12월 4일 금요일(UTC)**(미국 기준 12월 3일 목요일)로 변경할 것입니다.
업무 시간에 릴리스되는 이번 일정이 유감스럽다는 점은 이해하지만, OpenSSL 취약점이 공개되는 시기와 Node.js가 패치되는 시기의 차이 때문에 보안 취약점이 발생할 수 있다는 점을 고려해야 했으며 가능한 빠르게 반영해야 했습니다.
OpenSSL 업데이트의 패치와 테스트는 중요한 과정이므로 OpenSSL 릴리스 후 Node.js 빌드에 안정적으로 반영되어 릴리스에 적합하다고 확신할 수 있을 때까지 꽤 시간이 걸릴 수 있습니다.

<!--
An updated summary of the release inclusions is available below:
-->
새 릴리스에 포함될 내용이 다음과 같이 변경되었습니다.

---------------------------------------------

<!--
## CVE-2015-8027 Denial of Service Vulnerability

A bug exists in Node.js, all versions of v0.12.x through to v5.x inclusive, whereby an external attacker can cause a denial of service. The severity of this issue is high and users of the affected versions should plan to upgrade when a fix is made available.

* Versions 0.10.x of Node.js are ***not affected***.
* Versions 0.12.x of Node.js are ***vulnerable***.
* Versions 4.x, including LTS Argon, of Node.js are ***vulnerable***.
* Versions 5.x of Node.js are ***vulnerable***.
-->
## CVE-2015-8027 서비스 거부(DoS) 취약점

Node.js v0.12.x부터 v5.x까지 모든 버전에 외부 공격자가 서비스 거부(DoS)를 일으킬 수 있는 버그가 있습니다.
이 문제의 심각도는 높게 평가되었으며 해당 버전을 사용하고 있는 사용자는 버그 픽스가 나오면 업그레이드 해야 합니다.

* Node.js 0.10.x 버전은 **아무런 영향이 없습니다**.
* Node.js 0.12.x 버전은 ***취약합니다***.   
* LTS Argon을 포함한 Node.js 4.x 버전은 ***취약합니다***.
* Node.js 5.x 버전은 ***취약합니다***.

<!--
## CVE-2015-6764 V8 Out-of-bounds Access Vulnerability

An additional bug exists in Node.js, all versions of v4.x and v5.x, whereby an attacker may be able to trigger an out-of-bounds access and/or denial of service if user-supplied JavaScript can be executed by an application. The severity of this issue is considered medium for Node.js users, but only under circumstances where an attacker may cause user-supplied JavaScript to be executed within a Node.js application. Fixes will be shipped for the v4.x and v5.x release lines along with fixes for CVE-2015-8027.

* Versions 0.10.x of Node.js are ***not affected***.
* Versions 0.12.x of Node.js are ***not affected***.
* Versions 4.x, including LTS Argon, of Node.js are ***vulnerable***.
* Versions 5.x of Node.js are ***vulnerable***.
-->
## CVE-2015-6764 V8 Out-of-bounds 접근 취약점

Node.js v4.x와 v5.x 모든 버전에 응용 프로그램이 사용자가 제공한 자바스크립트를 실행할 수 있을 때 공격자가 out-of-bounds 접근과 서비스 거부 공격을 일으킬 수 있는 버그가 있습니다.
이 문제의 심각도는 Node.js 사용자에게 중간 수준으로 평가되었지만, Node.js 애플리케이션에서 사용자가 제공한 자바스크립트를 실행할 때만 공격이 가능합니다.
이 취약점에 관한 버그 픽스는 CVE-2015-8027에 관한 버그 픽스와 함께 v4.x와 v5.x 릴리스에 포함될 것입니다.

* Node.js 0.10.x 버전은 **아무런 영향이 없습니다**.
* Node.js 0.12.x 버전은 **아무런 영향이 없습니다**.   
* LTS Argon을 포함한 Node.js 4.x 버전은 ***취약합니다***.
* Node.js 5.x 버전은 ***취약합니다***.

<!--
## OpenSSL Moderate Severity Update

The OpenSSL project has [announced](https://mta.openssl.org/pipermail/openssl-announce/2015-November/000045.html) a set of releases which contain fixes for multiple vulnerabilities, the highest severity being labelled "moderate". Consult the [OpenSSL security policy](https://www.openssl.org/policies/secpolicy.html) for details on this definition. New releases of all actively maintained Node.js release lines are required in order to protect users against potential vulnerabilities in their applications. We do not have details on the nature of any of the included vulnerabilities or their fixes, users should plan for upgrades as soon as practical.

* Versions 0.10.x of Node.js ***may be vulnerable***.
* Versions 0.12.x of Node.js ***may be vulnerable***.
* Versions 4.x, including LTS Argon, of Node.js ***may be vulnerable***.
* Versions 5.x of Node.js ***may be vulnerable***.
-->
## OpenSSL 중간 심각도 업데이트

OpenSSL 프로젝트는 "중간" 이하 심각도로 평가된 여러 취약점을 수정하여 릴리스 한다고 [발표했습니다](https://mta.openssl.org/pipermail/openssl-announce/2015-November/000045.html).
심각도 의미에 관한 자세한 사항은 [OpenSSL 보안 정책](https://www.openssl.org/policies/secpolicy.html)을 참고하세요.
사용자를 그들의 애플리케이션에 있을 수 있는 잠재적인 보안 취약점으로부터 보호하기 위해 현재 활발히 유지되는 Node.js 버전은 모두 새로 릴리스될 것입니다.
우리도 OpenSSL이 수정하는 문제의 특성을 자세히는 모르지만 가능한 빨리 업그레이드해야 할 것입니다.

* Node.js 0.10.x 버전은 ***취약할 수 있습니다***.
* Node.js 0.12.x 버전은 ***취약할 수 있습니다***.   
* LTS Argon을 포함한 Node.js 4.x 버전은 ***취약할 수 있습니다***.
* Node.js 5.x 버전은 ***취약할 수 있습니다***.
