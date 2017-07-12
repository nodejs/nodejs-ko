---
category: articles
title: N-API: 네이티브 모듈을 위한 다음 세대의 Node.js API
author: Node.js Foundation
ref: N-API: Next generation Node.js APIs for native modules
refurl: https://medium.com/the-node-js-collection/n-api-next-generation-node-js-apis-for-native-modules-169af5235b06
translator: freenice12(LEEjeyeon)
---

<!--
N-API: Next generation Node.js APIs for native modules
This blog post was written by Arunesh Chandra, Sr. Program Manager, Chakra at Microsoft and Michael Dawson, Runtime Technologies Node.js Technical Lead at IBM.
Node.js has a vibrant module ecosystem, which is key to its continued growth and popularity. The ecosystem includes both JavaScript and native addon modules. Existing native modules are written in C/C++ and directly depend on V8 and/or NAN APIs. The result of this dependency is a lack of API/ABI stability guarantees, requiring native addons to be updated or recompiled for every major Node.js release. By some estimates this affects approximately 30% of the module ecosystem via direct or indirect dependencies. This not only adds to the maintenance burden for native module maintainers, but it also presents a major barrier to upgrading Node.js versions in production for module consumers, who have mission critical native code dependencies in their deployments.
The next generation, ABI-stable Node.js API for native modules or N-API aims to solve this problem, by providing an ABI-stable abstraction layer for native APIs in JavaScript VMs. This will allow native module authors to compile their module once per platform and architecture and make it available for any version of Node.js that implements N-API. This holds true even for versions of Node.js that are built with a different VM e.g. Node-ChakraCore.
Today, we are excited to announce that N-API is available in Node.js 8.0 as an experimental feature, making this an important milestone for Node.js’ journey towards achieving full ABI stability. This is the first step in a long journey and we invite more community participation to take it further. Now is the perfect time for for native module maintainers to try out N-API and provide feedback on API gaps, performance, addon publishing workflow etc. Check out this demo video, which shows N-API in action!
Demo code available at: https://github.com/boingoing/napi_demo
-->

N-API: 네이티브 모듈을 위한 다음 세대의 Node.js API

N-API: 네이티브 모듈을 위한 Node.js의 다음 세대

이 블로그는 마이크로소프트 Chakra의 시니어 프로그램 메니저 Arunesh Chandra와 IBM의 Node.js 테크 리드 Michael Dawson이 작성했습니다.
Node.js는 활발한 모듈 생태계를 가지고 있고 이는 계속 성장하고 인기를 얻는 주요 원인입니다. 이 생태계는 자바스크립트와 네이티브 애드온 모듈을 포함하고 있습니다. 네이티브 모듈은 C/C++로 작성되었고 V8 또는 NAN APIs에 직접 의존합니다. 이 의존의 결과는 API/ABI의 안전성 보장의 결여와 모든 Node.js의 주요 릴리스의 재컴파일 또는 네이티브 애드온의 업데이트를 해야 합니다. 이 효과는 직/간접적으로 모듈 생태계의 약 30%에 영향을 미친다는 의견이 있습니다. 이는 네이티브 모듈 관리자의 유지보수 수고뿐만 아니라 제품에 아주 중요한 네이티브 코드 의존성을 가지고 있어 Node.js 버전을 업그레이드해야 하는 모듈 사용자에게도 주요 걸림돌이 됩니다.
다음 세대에는 네이티브 모듈을 위한 ABI-stable Node.js API 또는 N-API에 자바스크립트 VMs 내의 네이티브 API를 위한 ABI-stable 추상 계층을 제공해 이 문제를 해결하는 것을 목표로 하고 있습니다. 이는 네이티브 모듈 작성자가 플랫폼마다 모듈을 컴파일하거나 설계하거나 N-API를 구현한 모든 버전의 Node.js에 모듈 사용이 가능하게 하도록 할 것입니다. 이를테면 Node-ChakraCore 같은 다른 VM과 함께 빌드된 버전의 Node.js에서도 마찬가지입니다.
오늘은 N-API가 Node.js 8.0내에서 사용 가능하다는 것을 알리게 되어 기쁘고, 전체 ABI의 안정화를 얻기 위한 Node.js의 여정의 중요한 이정표로 만들 것 입니다. 이것은 긴 여정의 첫걸음이고 심화를 위해 더 많은 커뮤니티 참가자들을 초대할 것입니다. 이 시기는 네이티브 모듈 관리자가 N-API를 사용해보고 API와의 차이, 성능, 애드온 배포 작업 흐름 등의 피드백을 제공하기 매우 좋은 시기입니다.

![](https://youtu.be/nmXhJ88nZsk)
데모 코드: [https://github.com/boingoing/napi_demo](https://github.com/boingoing/napi_demo)

<!--
What does the API look like?
The core API inside Node.js is available as a collection of C APIs. The following snippet shows an example of the API shape and error handling constructs. All of the ABI stable APIs follow the same pattern, returning a status code indicating success or the error that occurred, and optionally providing an out parameter to return a result.
-->

API는 어떤 모습인가요?
코어 API는 C API의 컬렉션처럼 사용 가능합니다. 아래 짤막한 코드는 API 모양과 에러 핸들링 조합을 보여줍니다. 모든 ABI는 성공 또는 장애를 나타내는 상태 코드를 반환하고, 반환 결과에 기타 파라미터를 선택적으로 제공하는 안정적인 API 패턴을 따릅니다.

<!--
NAPI_EXTERN napi_status napi_create_array(napi_env env, napi_value* result);
For a non-zero status code, additional details can be obtained using the following API function:
NAPI_EXTERN napi_status napi_get_last_error_info(napi_env e, const napi_extended_error_info** result);
In addition to the status code returned by the API functions, there are APIs to deal with handling JavaScript exceptions thrown from the VM:
NODE_EXTERN napi_status napi_is_exception_pending(napi_env e, bool* result);
NODE_EXTERN napi_status napi_get_and_clear_last_exception(napi_env e, napi_value* result);
NODE_EXTERN napi_status napi_throw(napi_env e, napi_value error);
For a full description of the N-API functions checkout the N-API documentation.
-->

NAPI_EXTERN napi_status napi_create_array(napi_env env, napi_value* result);

0이 아닌 상태 코드를 위해 추가적인 세부 사항은 아래 API 함수를 사용함으로써 얻을 수 있습니다.

NAPI_EXTERN napi_status napi_get_last_error_info(napi_env e, const napi_extended_error_info** result);

API 함수의 반환 값으로 상태 코드를 추가할 수 있고 VM이 던진 자바스크립트 예외를 다룰 수 있는 API가 있습니다.

NODE_EXTERN napi_status napi_is_exception_pending(napi_env e, bool* result);
NODE_EXTERN napi_status napi_get_and_clear_last_exception(napi_env e, napi_value* result);
NODE_EXTERN napi_status napi_throw(napi_env e, napi_value error);

N-API 함수의 세부 사항은 [N-API documentation](https://aka.ms/napi-docs)에서 확인하세요.

<!--
While the C-based API helps to maintain the ABI stability and makes it easy to understand the surface area provided by N-API, in some cases it is simpler to develop with C++ APIs. In order to support these cases, and to make it as easy as possible to transition from NAN, there is an optional C++ wrapper available as a npm module to provide syntactic sugar over the C APIs. While the wrapper is not considered a part of the N-API, it’s designed to be fully inlinable, and doesn’t have any additional link-time dependencies beyond N-API, so module authors can maintain ABI stability while using it. Here’s a comparison of C and C++ usage of N-API:
-->

C-기반의 API는 N-API가 제공하는 표면 계층을 쉽게 이해하거나 ABI의 안전성의 유지를 쉽게 해주지만, 종종 C++ API를 이용하는 것이 간단할 때가 있습니다. 이런 경우를 지원하기 위해 그리고 NAN에서의 변경은 가능한 쉽게 하기 위해서 옵션으로 C API를 C++로 감싸는 [npm 모듈](https://www.npmjs.com/package/node-addon-api) 을 이용하는 것이 가능합니다. 이것은 N-API의 고려 대상이 아니고 전체적으로 내부에 삽입하기 위해 설계돼 N-API 외부의 추가적인 링크-타임 의존성이 전혀 없고 모듈 작성자는 동시에 ABI 안전성을 유지할 수 있습니다. 아래는 C와 C++를 이용한 N-API 비교입니다.

<!--
C API
#define CHECK_STATUS \
 if (status != napi_ok) { \
 napi_throw_error(env, “N-API call failed”); \
return; \
 }
napi_value Shutdown(napi_env env, napi_callback_info info) {
 napi_status status;
 int s;
 int how;
 napi_value ret;
 napi_value args[2];
 size_t argc = 2;
status = napi_get_cb_info(env, info, &argc, args, NULL, NULL);
 CHECK_STATUS;
status = napi_get_value_int32(env, args[0], &s);
 CHECK_STATUS;
 status = napi_get_value_int32(env, args[1], &how)
 CHECK_STATUS;
status = napi_create_number(env, nn_shutdown(s, how), &ret); 
 CHECK_STATUS;
 status = napi_set_return_value(env, info, ret);
 CHECK_STATUS;
}
C++ Wrapper
Napi::Value Shutdown(const Napi::CallbackInfo& info) {
 int s = info[0]->As<Napi::Number>();
 int how = info[1]->As<Napi::Number>();
 return Napi::Number::New(info.Env(), nn_shutdown(s, how));
}
-->

C API
#define CHECK_STATUS \
 if (status != napi_ok) { \
 napi_throw_error(env, “N-API call failed”); \
return; \
 }
napi_value Shutdown(napi_env env, napi_callback_info info) {
 napi_status status;
 int s;
 int how;
 napi_value ret;
 napi_value args[2];
 size_t argc = 2;
status = napi_get_cb_info(env, info, &argc, args, NULL, NULL);
 CHECK_STATUS;
status = napi_get_value_int32(env, args[0], &s);
 CHECK_STATUS;
 status = napi_get_value_int32(env, args[1], &how)
 CHECK_STATUS;
status = napi_create_number(env, nn_shutdown(s, how), &ret); 
 CHECK_STATUS;
 status = napi_set_return_value(env, info, ret);
 CHECK_STATUS;
}
C++ Wrapper
Napi::Value Shutdown(const Napi::CallbackInfo& info) {
 int s = info[0]->As<Napi::Number>();
 int how = info[1]->As<Napi::Number>();
 return Napi::Number::New(info.Env(), nn_shutdown(s, how));
}

<!--
Current State: Experimental
The current state of N-API in Node.js v8.0 is experimental. However, as reflected in the chart below, N-API provides 100% coverage for V8 APIs used in 5 or more of the top 30 depended-on modules. While there remain some gaps in the coverage, we believe there is a good foundation available for people to try it out. So far, we have successfully ported 5 modules to use N-API, namely Node-Sass, Canvas, LevelDown, Nanomsg and IoTivity. These ports can serve as examples for developers looking start out on their own porting projects.
-->

현재 상태: 실험 중
Node.js 8.0버전 내의 N-API의 현재 상태는 실험적입니다. 그러나, 아래 차트를 보면 N-API는 V8 API를 사용한 상위 30개의 의존이 있는 모듈 중 5개 이상에서 100% 커버리지를 제공합니다. 커버리지에는 조금의 차이가 남아있지만 우리는 사람들이 사용해볼 만한 기반을 다졌다고 믿고 있습니다. 우리는 지금까지 N-API를 사용하기 위해 5개의 모듈( [Node-Sass](https://github.com/boingoing/node-sass), [Canvas](https://github.com/jasongin/node-canvas), [LevelDown](https://github.com/boingoing/leveldown/), [Nanomsg](https://github.com/sampsongao/node-nanomsg), [IoTivity](https://github.com/gabrielschulhof/iotivity-node/tree/abi-stable))을 이식했습니다. 이를 사용하려는 개발자들이 이식하려는 프로젝트를 위해 예제를 제공할 수 있습니다.

![](https://cdn-images-1.medium.com/max/1600/0*XYRRg73SOxUMG9-F.)

<!--
Support for older Node versions
The value of N-API shines when native modules need to be supported across Node.js versions. We plan to port N-API to older Node.js LTS lines after it stabilizes in Node.js 8.0. In the meantime, the node-addon-api module provides source compatibility with older versions of Node.js. You can check out the instructions on the repo for more details.
-->

이전 버전의 Node 지원
N-API의 가치는 네이티브 모듈이 Node.js 버전을 교차 지원할 필요가 있을 때 빛납니다. 우리는 Node.js 8.0내에서 N-API가 안정된 후 오래된 Node.js LTS 라인으로 이식할 계획이 있습니다. 한편으로 [node-addon-api](https://www.npmjs.com/package/node-addon-api) 모듈은 구버전의 Node.js와 소스 호환성을 제공합니다. 자세한 사항은 [저장소 내의 지침](https://github.com/nodejs/node-addon-api)을 확인해주세요.

<!--
How to get started
To start out we recommend going through this N-API documentation, which has detailed descriptions and usage examples of N-API. It will also be helpful to look at these examples which are NAN addon examples ported to use N-API instead. In addition, there are some tools available to help you get started.
There is a migration utility that converts your existing NAN-based native addon to N-API. It does not provide a 100% conversion but it allows you to easily jump-start converting your existing projects.
If you want to start fresh with a native Node.js addon project with N-API, check out this yeoman generator for N-API modules. This will generate the necessary scaffolding for such a project.
After you are done creating or migrating your N-API module we recommend you follow these instructions for publishing it to the npm repository with a @n-api tag. Using the tag will allow you to publish an N-API version without influencing the sequencing of your non-N-API releases.
-->

시작 방법
처음은 N-API의 상세 설명과 사용 예제 등이 있는 [N-API 문서](https://aka.ms/napi-docs)를 추천합니다. N-API를 대신 사용하는 NAN 애드온 [예제](https://github.com/nodejs/abi-stable-node-addon-examples)를 보는 것이 도움이 될 것입니다. 덧붙여서 시작할 때 유용한 몇 가지 도구가 있습니다.

* 당신의 기존 NAN-기반의 네이티브 애드온을 N-API로 전환해주는 [이식 유틸리티](https://github.com/nodejs/node-api)가 있습니다. 100% 전환을 제공해주지는 않지만 쉽게 기존 프로젝트의 전환을 시작할 수 있도록 도와줍니다.

* 만약 N-API와 네이티브 Node.js 애드온 프로젝트를 깨끗하게 새로 시작하고 싶다면 [N-API 모듈을 위한 yeoman 생성자](https://github.com/digitalinfinity/generator-napi-module)를 확인하세요. 프로젝트를 위해 필요한 발판을 생성해줄 것입니다.

* N-API 모듈을 생성하거나 이전한 후에는 @n-api 태그와 함께 npm 저장소에 당신의 모듈을 공개하기 위한 [과정](https://nodejs.org/en/docs/guides/publishing-napi-modules/)을 추천합니다. 태그를 사용하면 당신의 N-API가 아닌 릴리스 순번에 영향을 미치지 않고 N-API 버전을 공개할 수 있습니다.

<!--
How to get involved
If you’ve been reading up to this point and have been thinking “this is so great, how can I help out?” We are happy to hear that. There are several ways that you can get involved which include:
Helping improve the documentation: Read through the documentation and provide feedback. We’ve tried hard to make it clear and easy to read, but everybody has a different perspective and adding yours will make the documentation clearer to a broader audience.
Trying out one of the ported modules: The abi-stable-node repo has the links to the forks containing the above-mentioned ports of the modules that we used to validate N-API. If you have an application that uses one or more of the modules for which we provide N-API-ported versions, try them out and let us know if you run into any problems.
Improving test coverage: Helping to fill in test coverage is a nice way to learn the details of some of the N-API functions and to contribute. Start by looking at the code coverage results for the main N-API implementation file (node_api.cc) at coverage.nodejs.org and look for functions that don’t have good coverage. In addition, you can also help by adding test coverage for the C++ wrapper. The N-API team will work to improve overall coverage but this is a great place to jump in and help as well.
Porting a module: Do you have a favorite module or do you maintain one or more native modules? Consider porting them to N-API and publishing an experimental version. We need your feedback. Having a more diverse set of modules ported and ready to go is the best way to make sure we have the right API surface. If you need help to make the port happen, let us know as we do want to work with maintainers to help things along.
Joining the N-API Working Group: Helping build N-API and/or the C++ wrapper. We’ve made great progress but code always benefits from more eyes and contributors. Join us at our weekly meeting to share your experience with N-API or to just hear more about what the team’s working on.
If you find issues in N-API during any of these activities please open an issue in the nodejs repo and prefix the title with `n-api:’.
This work is an example of great community collaboration. It would not have been possible without the engagement of individual Node.js Collaborators and CTC members including participants from Google, IBM, Intel, Microsoft, nearForm and NodeSource. We hope that the community will find this work valuable and get engaged to take the Node.js ecosystem to new heights and make it an even better platform in the future.
-->

참여 방법
만약 여기까지 읽고 "오! 좋은데, 참여해 볼까?"라고 생각한다면 우리는 기쁠 것입니다. 아래를 포함한 여러 가지 방법으로 참여할 수 있습니다.

* 문서 개선: 문서를 읽고 의견을 제공하세요. 우리는 문서를 깔끔하고 읽기 쉽게 만들려고 노력하고 있지만 모든 사람은 다른 견해를 가지고 있고 당신의 견해를 추가하는 것은 더 많은 독자에게 문서가 명확해지도록 만듭니다.

* 이식된 모듈 사용하기: [abi-stable-node 저장소](https://github.com/nodejs/abi-stable-node/blob/doc/README.md)에는 이미 언급된 N-API 검증 완료 이식 모듈을 포크할 수 있는 링크가 있습니다. 만약 우리가 제공한 N-API로 이식된 버전의 모듈 중 하나를 사용한 애플리케이션이 있다면 한번 사용해 보세요. 그리고 어떤 문제가 있든지 우리에게 알려주세요.

* 테스트 커버리지 증진: 테스트 커버리지를 채우는 것은 N-API 함수의 세부 사항을 배우고 기여하기 좋은 방법입니다. [coverage.node.org](https://coverage.nodejs.org/)의 주 N-API 구현 파일(node_api.cc)코드 커버리지 결과와 커버리지가 좋지 않은 함수를 보는 것으로 시작하세요. 덧붙여, [C++ 래퍼](https://github.com/nodejs/node-api)를 위한 테스트 커버리지를 추가하는 것으로도 도울 수 있습니다. N-API 팀은 전 영역의 커버리지를 증진하기 위해 노력하고 있지만, 이는 돕고 참여하기 좋은 장소(시기?)입니다.

* 모듈 이식: 좋아하는 모듈이나 유지하고 있는 하나 이상의 네이티브 모듈이 있나요? N-API로 이식하고 실험 버전으로 공개하는 것을 고려해주세요. 우리는 당신의 의견이 필요합니다. 더 다양한 이식된 모듈 세트와 사용할 준비가 되었다는 것은 우리가 옳은 API 표면 계층을 가졌다는 것을 확신하게 해줍니다. 이식에 관한 도움이 필요하다면 관리자가 함께 도울 수 있도록 우리에게 알려주세요.

* N-API 작업 그룹 가입: N-API 나 [C++ 래퍼](https://github.com/nodejs/node-api)를 구성하는 데 도움을 주세요. 우리는 큰 전진을 이뤄냈지만, 코드는 항상 더 많은 눈과 기여자들로부터 이익을 얻습니다. N-API와 함께한 경험이나 팀이 어떻게 일하고 있는지 듣고 싶다면 우리의 [주간 회의](https://plus.google.com/u/0/events/c0eevtrlajniu7h8cjrdk0f56c8?authkey=COH04YCalJS8Ug)에 참여하세요.

작업 중 어떤 문제를 발견한다면 [nodejs 저장소]에 `n-api:`란 머리말로 이슈를 열어주세요.

이 작업은 큰 커뮤니티 협력의 예입니다. 각각의 Node.js 기여자나 Google, IBM, Intel, Microsoft, nearForm, NodeSource의 참가자를 포함한 CTC 멤버의 참여가 없이는 가능하지 않았을 것입니다. 우리는 커뮤니티가 이 작업의 가치를 찾길 바라고 가까운 미래에 Node.js 생태계를 새로운 성장과 더 나은 플랫폼을 만들기를 기대합니다.