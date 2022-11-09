---
title: 'QQ Browser Mobile'
coverImage: '/assets/blog/qq-browser/cover.jpg'
projectLink: 'https://apps.apple.com/cn/app/qq%E6%B5%8F%E8%A7%88%E5%99%A8-%E6%90%9C%E7%B4%A2%E6%96%B0%E9%97%BB%E5%B0%8F%E8%AF%B4%E6%96%87%E4%BB%B6/id370139302'
repoLink: 
date: '2021-12-20'
tags: ['project']
techStackFront: ['TypeScript', 'React', 'Hippy/React Native']
techStackTools: ['Jest', 'in-house CICD tools', 'TAPD (Jira-like)']
platforms: ['mobile']
---

## What

![qq-browser](/assets/blog/qq-browser/browser-list.jpeg)

QQ Browser is one of China's top mobile browsers with more than 50 million active users. As one of the main frontend dev on the team, I collaborated with the native iOS/Android teams, backend teams and search algorithm teams to maintain and develop the UI of the main tab (feeds tab).

## Features and app structure

The UI of the home tab alone is the joint efforts of multiple teams with vastly different technical backgrounds. It spans search, news articles showcase, video playback, ADs, mini-program hosting and many more areas. To make the design even more challenging, the home tab is also the host for many sub-channels, for which it needs to manage initialization, module preloading, data fetching and more. 

### Functional features
![qq-browser](/assets/blog/qq-browser/video.jpg)

Here is a short list of the key functional features:

- showcase news articles with vastly different styles and rules
- auto-playback and auto-pausing of videos corresponding to scroll actions
- let user enable/disable sub-channels
- store and react to user preferences and bookmarks
- deep links into other apps or mini-programs in the Tencent ecosystem
    - WeChat mini-programs
    - Tencent games
    - search results for popular keywords
- dark mode support and theming support

### Technical features

- UI performance optimization
  - pre-loading
  - pre-rendering
  - offline bundles
  - snapshotting
  - client-side caching
- managing the lifecycle of sub-channels
  - initialization
  - preloading
  - unmount
- collecting anonymous action data for machine learning models
  - feeds suggestions
  - search optimizations 
- dynamic bundle updates
  - transparently updates JS bundles without app update
- build and test
  - ESLint static testing
  - Jest Unit tests
  - CICD optimization
- monitoring and observability
  - OpenTelemetry-based tracing
  - mobile logging
  - web logging
  - log visualization and alert

## Key takeaway

This is one of the most complex projects I have ever worked on. It accumulated so many UI components (legacy or not) through the past 5 years, to the point that the components need to be numbered instead of properly named 😱. However, I also learned quite a lot through this project. It's hard to sum them up in one paragraph, but here the main ones:

1. Optimization is never enough, but preloading is your best bet.
2. People are never tired of lists, they are the most important UI components and data structures.
3. Coupling sucks, unless absolutely necessary, avoid deep inheritance, be wary of side effects. 
