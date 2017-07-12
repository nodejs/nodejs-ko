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

이 블로그는 마이크로소프트 Chakra의 시니어 프로그램 메니져 Arunesh Chandra와 IBM의 Node.js 테크 리드 Michael Dawson이 작성했습니다.
Node.js는 활발한 모듈 생태계를 가지고 있고 이는 계속 성장하고 인기를 얻는 주요 원인입니다. 이 생태계는 자바스크립트와 네이티브 애드온 모듈을 포함하고 있습니다. 네이티브 모듈은 C/C++로 작성되었고 V8 또는 NAN APIs에 직접 의존합니다. 이 의존의 결과는 API/ABI의 안전성 보장의 결여와 모든 Node.js의 주요 릴리스의 재 컴파일 또는 네이티브 애드온의 업데이트를 필요로 합니다. 이 효과는 직/간접적으로 모듈 생태계의 약 30%에 영향을 미친다는 의견이 있습니다. 이는 네이티브 모듈 관리자의 유지보수 수고뿐만 아니라 제품에 아주 중요한 네이티브 코드 의존성을 가지고 있어 Node.js 버전을 업그레이드 해야 하는 모듈 사용자 에게도 주요 장애물이 됩니다.
다음 세대에는 네이티브 모듈을 위한 ABI-stable Node.js API 또는 N-API에 자바스크립트 VM(가상머신?)s내의 네이티브 API를 위한 ABI-stable 추상 레이어를 제공해 이 문제를 해결하는것을 목표로 하고있습니다. 이는 네이티브 모듈 작성자가 플랫폼 마다 모듈을 컴파일 하거나 설계하거나 N-API를 구현한 모든 버전의 Node.js에 모듈 사용이 가능하게 하도록 할 것입니다. 이를테면 Node-ChakraCore 같은 다른 VM과 함께 빌드된 버전의 Node.js에서도 마찬가지 입니다.
오늘은 N-API가 Node.js 8.0내에서 사용 가능하다는 것을 알리게 되어 기쁘고, 전체 ABI의 안정화를 얻기위한 Node.js의 여정의 중요한 이정표로 만들것 입니다. 이것은 긴 여정의 첫 걸음이고 심화를 위해 더 많은 커뮤니티 참가자들을 초대할 것입니다. 이 시기는 네이티브 모듈 관리자가 N-API를 사용해보고 API와의 차이, 성능, 애드온 배포 작업 흐름 등의 피드백을 제공하기 매우 좋은 시기입니다.
<iframe width="700" height="393" src="https://www.youtube.com/embed/nmXhJ88nZsk?ecver=1" frameborder="0" allowfullscreen></iframe>
데모 코드: https://github.com/boingoing/napi_demo

<!-- -->
What does the API look like?
The core API inside Node.js is available as a collection of C APIs. The following snippet shows an example of the API shape and error handling constructs. All of the ABI stable APIs follow the same pattern, returning a status code indicating success or the error that occurred, and optionally providing an out parameter to return a result.
NAPI_EXTERN napi_status napi_create_array(napi_env env, napi_value* result);
For a non-zero status code, additional details can be obtained using the following API function:
NAPI_EXTERN napi_status napi_get_last_error_info(napi_env e, const napi_extended_error_info** result);
In addition to the status code returned by the API functions, there are APIs to deal with handling JavaScript exceptions thrown from the VM:
NODE_EXTERN napi_status napi_is_exception_pending(napi_env e, bool* result);
NODE_EXTERN napi_status napi_get_and_clear_last_exception(napi_env e, napi_value* result);
NODE_EXTERN napi_status napi_throw(napi_env e, napi_value error);
For a full description of the N-API functions checkout the N-API documentation.
While the C-based API helps to maintain the ABI stability and makes it easy to understand the surface area provided by N-API, in some cases it is simpler to develop with C++ APIs. In order to support these cases, and to make it as easy as possible to transition from NAN, there is an optional C++ wrapper available as a npm module to provide syntactic sugar over the C APIs. While the wrapper is not considered a part of the N-API, it’s designed to be fully inlinable, and doesn’t have any additional link-time dependencies beyond N-API, so module authors can maintain ABI stability while using it. Here’s a comparison of C and C++ usage of N-API:
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
Current State: Experimental
The current state of N-API in Node.js v8.0 is experimental. However, as reflected in the chart below, N-API provides 100% coverage for V8 APIs used in 5 or more of the top 30 depended-on modules. While there remain some gaps in the coverage, we believe there is a good foundation available for people to try it out. So far, we have successfully ported 5 modules to use N-API, namely Node-Sass, Canvas, LevelDown, Nanomsg and IoTivity. These ports can serve as examples for developers looking start out on their own porting projects.

Support for older Node versions
The value of N-API shines when native modules need to be supported across Node.js versions. We plan to port N-API to older Node.js LTS lines after it stabilizes in Node.js 8.0. In the meantime, the node-addon-api module provides source compatibility with older versions of Node.js. You can check out the instructions on the repo for more details.
How to get started
To start out we recommend going through this N-API documentation, which has detailed descriptions and usage examples of N-API. It will also be helpful to look at these examples which are NAN addon examples ported to use N-API instead. In addition, there are some tools available to help you get started.
There is a migration utility that converts your existing NAN-based native addon to N-API. It does not provide a 100% conversion but it allows you to easily jump-start converting your existing projects.
If you want to start fresh with a native Node.js addon project with N-API, check out this yeoman generator for N-API modules. This will generate the necessary scaffolding for such a project.
After you are done creating or migrating your N-API module we recommend you follow these instructions for publishing it to the npm repository with a @n-api tag. Using the tag will allow you to publish an N-API version without influencing the sequencing of your non-N-API releases.
How to get involved
If you’ve been reading up to this point and have been thinking “this is so great, how can I help out?” We are happy to hear that. There are several ways that you can get involved which include:
Helping improve the documentation: Read through the documentation and provide feedback. We’ve tried hard to make it clear and easy to read, but everybody has a different perspective and adding yours will make the documentation clearer to a broader audience.
Trying out one of the ported modules: The abi-stable-node repo has the links to the forks containing the above-mentioned ports of the modules that we used to validate N-API. If you have an application that uses one or more of the modules for which we provide N-API-ported versions, try them out and let us know if you run into any problems.
Improving test coverage: Helping to fill in test coverage is a nice way to learn the details of some of the N-API functions and to contribute. Start by looking at the code coverage results for the main N-API implementation file (node_api.cc) at coverage.nodejs.org and look for functions that don’t have good coverage. In addition, you can also help by adding test coverage for the C++ wrapper. The N-API team will work to improve overall coverage but this is a great place to jump in and help as well.
Porting a module: Do you have a favorite module or do you maintain one or more native modules? Consider porting them to N-API and publishing an experimental version. We need your feedback. Having a more diverse set of modules ported and ready to go is the best way to make sure we have the right API surface. If you need help to make the port happen, let us know as we do want to work with maintainers to help things along.
Joining the N-API Working Group: Helping build N-API and/or the C++ wrapper. We’ve made great progress but code always benefits from more eyes and contributors. Join us at our weekly meeting to share your experience with N-API or to just hear more about what the team’s working on.
If you find issues in N-API during any of these activities please open an issue in the nodejs repo and prefix the title with `n-api:’.
This work is an example of great community collaboration. It would not have been possible without the engagement of individual Node.js Collaborators and CTC members including participants from Google, IBM, Intel, Microsoft, nearForm and NodeSource. We hope that the community will find this work valuable and get engaged to take the Node.js ecosystem to new heights and make it an even better platform in the future.