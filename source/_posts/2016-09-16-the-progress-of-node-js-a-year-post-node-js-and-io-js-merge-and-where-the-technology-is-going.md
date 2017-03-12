---
category: articles
title: Node.js의 1년 동안의 진행 상황과 Node.js 와 io.js의 병합 및 기술의 발전 추세
author: Node.js Foundation
ref: The Progress of Node.js a Year Post Node.js and io.js Merge and Where the Technology is Going
refurl: https://medium.com/@nodejs/the-progress-of-node-js-a-year-post-node-js-and-io-js-merge-and-where-the-technology-is-going-f168ce9ec8ee#.9cgrhy686
translator: pineoc
---

During Node.js Interactive Europe’s keynote presentations yesterday, Core community members shared the community’s incredible, fast growth and what’s next with Node.js v.7 and Node.js v8.

The Node.js Foundation leadership also team looked at how to improve diversity and inclusivity in the Node.js community.

![alt text](https://cdn-images-1.medium.com/max/1600/1*wFty3fycao2a-Bo35hk-Gg.jpeg)
Ashley Williams’ keynote about Node Together.

In a year and a half, Node.js has grown from 14 to 87 contributors with commit access. About a year and a half ago, it only had 681 contributors over its entire lifecycle; the contributor list now tops 1084 individuals.

![alt text](https://cdn-images-1.medium.com/max/1600/0*Bbe-xi_I0HCDvyud.)
Slide from James Snell’s keynote around the growth of the Node.js community and plans for Node.js v7 and Node.js v8.


Last year at almost this exact same time (only two days shy), we merged Node.js and io.js into [Node.js v4](https://nodejs.org/en/blog/announcements/foundation-v4-announce/). Around that time, we also established the Node.js platform’s [Long Term Support Plan](https://github.com/nodejs/LTS), which consists of two distinctive release lines:

- Stability (Always Even Numbers): Focused on stability for the enterprise or those that need production to stay relatively stable with no major upgrades.
- Progress (Always Odd Numbers): Focused on experimental testing and future development.

Increasingly enterprises use Node.js for everything from desktop applications, mobile websites, API engines or cloud stacks. With this growth, comes the need for a stable platform for running apps in production, whether it is making sure drivers can connect with passengers for [Uber](https://nodejs.org/static/documents/casestudies/Nodejs-at-Uber.pdf) or ensuring [astronaut safety](https://nodejs.org/static/documents/casestudies/Node_CaseStudy_Nasa_FNL.pdf) as they explore the universe (literally).

At the same time, Node.js is becoming more prominent in new areas of development like artificial intelligence, machine learning and robotics. These environments demand for experimentation and change how developers create applications. The progress release line also allows for improvements in security, performance and features that can be tested out without breaking Core.

Below is a recap of what to expect from releases to come and community efforts in general.

### Continued Improvement with Language Support

The next release of Node.js (Node.js v7) will ship with [JavaScript Engine V8 5.4](http://v8project.blogspot.nl/), which focuses on performance improvements linked to memory.

The Node.js project continues to work on how best to respond and adapt to new language features to ensure that the Node.js environment will serve our users’ needs — not an easy task. Key features under discussion include: Promises (making Promises compatible with Node.js debugging and making the Node.js API compatible with Promises), async await and supporting additional ES6 modules.

The Node.js project is also exploring how to better engage with TC-39 to ensure that new JavaScript language features meet the needs of Node.js users.

### The Module Ecosystem around Node.js and its Stability

Node.js v7 is going into beta next week. This is the first beta from Node.js with the purpose to attract more people to testing the version. This will also ensure that semver major changes will not need to be reverted before the v7 release.

This release will also be important for the module ecosystem. Modules are essential to the Node.js ecosystem and one of the major reasons why the technology has been doubling over the last four years now. According to [Module Counts](http://www.modulecounts.com/), the Node.js ecosystem is the largest and one of the fastest growing among its peers. (Note: Not all of the npm repository is for Node.js modules as JavaScript modules are also included, but the lion share is Node.js.)

On the front of module stability, the Node.js project has identified 68 of the most dependent Node.js modules in the ecosystem and is using a technology called [Canary in a Gold Mine (citgm)](https://github.com/nodejs/citgm) to ensure that when updates happen with Node.js versioning, modules won’t break.

Citgm is a smoke testing utility that automates running unit tests of various modules in the Node.js ecosystem. It has been incredibly successful, finding all sorts of regressions across the ecosystem and in Node Core itself.

### Adopting Web Standards

To keep up with the changing needs of the web, the Node.js project will be including WHATWG URL parsing — standardizing parsing to be the same in Node.js as it is on the browser; improved HTTP 1.1 spec compliance for better input validation and enhanced security, and future support for HTTP/2.

### Node.js Everywhere

Node.js has historically been a good fit for the IoT space as it is great at single processes and has a small memory footprint. There’s incredible growth opportunity for Node.js in this area and the Node.js project is working closely with members of the IoT and Electron communities to make embedding Node.js easier.

### Continued Growth Internally for VM Neutrality and API Development

The ultimate goal of Node.js is to become fully VM agnostic. The first major step in this areas has been Microsoft getting Node.js to run on Chakra. There is working being done to create a VM neutral ABI and a prototype is currently available.

### Inclusivity is Needed to Create Diversity

Node.js is working hard to become a more diverse and inclusive community. Diverse ecosystems are better for the community and better for the platform. They allow people to learn and grow from others, and be exposed to perspectives other than their own. So how do we create diversity in the Node.js community?

A key benefit of Node.js is that it is relatively easy to learn. The barriers to entry are not in understanding how the technology works, but rather in creating inclusive environments where people feel valued and can join in and grow their involvement over time. Node Together, an initiative launched this year, showed that in creating an inclusive environment, underrepresented groups can join, learn and flourish within our community.

The Node.js Foundation is teaming up with experts in the field to better understand how to actively diversify the makeup of the Node.js community. This initiative is very serious to the growth and future of the community.

If you were not able to see the keynotes yesterday, tune in today at 4:00pm CEST/10am EST to see the remaining keynotes on the state of npm and Express. In addition, all keynotes as well as sessions are being recorded and will be available soon on the Node.js Foundation’s YouTube page here.

*This article was updated September 26,2016 with a few changes to the API development section, improved language support and modular section.
