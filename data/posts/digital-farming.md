---
title: 'Mini Program for Digital Farming'
coverImage: '/assets/blog/farming/cover.png'
projectLink: 'https://apps.apple.com/in/app/kaset-go/id1502222249'
repoLink: 
date: '2021-02-02'
tags: ['project']
techStackFront: ['TypeScript', 'React', 'React Native', 'Taro hybrid framework', 'WeChat Mini Program']
techStackBack: ['Node.js', 'Express', 'Discourse', 'Docker', 'Container Services']
platforms: ['desktop']
---

## What

This is a port/re-write of an existing mobile App written in React Native to a WeChat-based mini program for the WeChat native app. 

## Why

![ecosystem](/assets/blog/farming/ecosystem.jpg)

At first glance, it may seem strange to write an app for an app, when there was already an established solution published in the market. However, it all makes sense if you consider WeChat already has more than 1.24 billion users globally. It's also the dominant social network application in China. It's so dominant to the point that many people in China would consider it as a public infrastructure or utility. To some, it is the Internet. At the moment, for all companies that wish to break into the Chinese market, starting with a WeChat mini program is a must.

## An innovation architecture

![ecosystem](/assets/blog/farming/runtime.png)

WeChat is what we call a "super app" (just like Facebook). Naturally, it provides many interfaces for triggering native functions (payment, location service) or displaying native components. As the hosting platform, WeChat is a like an Operating System in that it's in charge of creating sandboxes and orchestrate communications with the WebView. Although WeChat mini programs is based on JavaScript, **it's not single-threaded!** For performance and security reason, mini programs are designed to have two threads. One responsible for the UI (the WebView Layer), another responsible for the logic (the Logic Layer). In many situations, this setup proves to be more performant or secure compare to regular web apps.

## A port and a rewrite

### The port

![digital farming in Thailand](/assets/blog/farming/kaset-go.png)

The original app was written in React Native. Naturally, most of the business logic can be easily translated to any JavaScript ecosystem. However, RN has more freedom in terms of opening links, use cameras and even deep linking into other apps. It's also performant since RN merely control native UI components, the bottleneck mostly lies in the communication channels across the JS bridge. On the flip side, WeChat mini program has a mix of native components provided by WeChat and webview UI components, and what can be done are always restricted by the WeChat platform.

### The rewrite

<div style="width: 75%; margin: auto">
    <img src="/assets/blog/farming/entry.png" alt="drawing" />
</div>

To target WeChat and maximize reuse of existing resources, `Taro` was chosen as the main hybrid development framework. It's an abstraction that sits above all existing mini program frameworks and React Native. It's framework-agnostic in terms of UI, thanks to its runtime, which is based on Web Components (using Stencil at the time of the rewrite). 

![WeChat mini program](/assets/blog/farming/screenshot-all.jpeg)

We (mostly two developers) re-wrote the whole app in less than three months, including a backend based on Node.js, Express, Discourse and the cloud infrastructure that goes with it. 

## A love-hate relationship

As web developers, we naturally embrace the openness of the Internet. WeChat mini programs are probably on the other side of the spectrum. Technically, it's an interesting ecosystem based on Web tooling, and it's providing real values to businesses. However, it is also a closed platform with heavy censorship in terms of content creation. Regardless, a lot can be learned from its technical and commercial success. 
