---
title: 'To Monorepo or Not To Monorepo'
coverImage: '/assets/blog/monorepo/cover.png'
projectLink: 'https://github.com/paladinze/guts'
repoLink: 'https://github.com/paladinze/guts'
date: '2022-03-02'
tags: ['lab']
techStackFront: ['TypeScript', 'React', 'Next.js', 'Storybook']
techStackBack: ['Node.js', 'Nest.js']
techStackTools: ['Nx', 'Webpack', 'SWC', 'Cypress', 'ESLint', 'Prettier']
platforms: ['desktop']
---

## What
The following is just a summary of my personal experience of working with monorepos at work and in personal projects in the **JavaScript context**. Since the concept of monorepos wasn't invented until the start of 21st century, what I wrote here may not stand the test of time. Please take everything with a grain of salt.

For a living example of a modern JavaScript monorepo, you can take a look at my personal [Nx-based monorepo](https://github.com/paladinze/guts).

## The Birth of monorepo
![folder](/assets/blog/monorepo/folder.png)

At the very beginning, monorepo was purely a way of organizing code. It is more of a coding practice than hard science. The trend started when some smart guy discovered that he/she can put all his/her code into a single folder and upload them to a remote version control tool (possibly Perforce back then). 

However, despite its humble beginning, monorepo today carries way more importance than just code organization. It's now the basis of CI and CD, and it's also the infrastructure that glues all modern coding practices and digital assets together.

## Why monorepo today
![youtube comments](/assets/blog/monorepo/comment.png)

Different engineers and organizations have different views on monorepos. There are also many solutions in this space, with vastly different goals. Google, Microsoft and many other tech giants have their in-house build and repo solutions. It's their means to manage overwhelming amount of code assets. But apparently, not everyone is convinced with [this approach](https://youtu.be/W71BTkUbdqE). The massive infrastructure cost and human resource cost may not justify the investments. At least it's a decision that needs to be constantly debated.

To provide a dev experience on par with polyrepo, custom file systems, custom build systems (e.g. Bazel) and custom version control systems (e.g. Piper) needs to be built. Additionally, there needs to be new ways of managing and testing change-sets, new ways of managing permissions and conducting code reviews.

In contrary to many of the reasoning behind large tech companies adopting monorepos, many developers in the JavaScript ecosystem want monorepos because they want seamless integrations between tools that are currently scattered all over the place. They want to streamline the build and deployment process and make them configurable with the same set of rules. They want project boilerplate that just works, instead of spending most of the time struggling with configuring linters, style checks, type checks, build rules and dev frameworks.

## The tool of choice
![comparison](/assets/blog/monorepo/comparison2.png)

In the JavaScript space, the three most popular tools are Lerna, Nx and Turborepo. Here is a summary of their current states (2020-03) and my tool of choice (listed in the order of preference).

- **Nx (by Nrwl)** (my pick)
  - feature complete
  - rapidly evolving
  - proven track record through the Angular ecosystem (core members are from the Google's Angular team)
- Turborepo (by Vercel)
  - feature is currently a subset of Nx (but with similar roadmap) 
  - rapidly evolving
  - backed by Vercel (which is also behind Svelte and Next.js)
- Lerna (originally developed by Daniel Stockman, currently managed by Nrwl)
  - the oldest in the list
  - widely adopted (e.g. Babel is based on Lerna)
  - a tool for code organization, but lacks modern features (e.g. deep dependency analysis, build optimization, sharding caching)


## Why Nx and why it might not be your cup of tea

### The Good
![good](/assets/blog/monorepo/dep-analysis.jpeg)

- Killer features for everyone
  - deep dependency analysis => only build and test what you changed
  - automatic process-level caching => don't build same thing twice
  - task orchestration => npm script becomes reusable and sharable plugins
  - pre-configured scaffolding tools for common tech stacks 

- Killer features for organizations
  - shared caching => save public compute resource
  - near real-time dependency visualization => visualize impact of every change

### The Bad and Ugly
- code generator is opinionated and hard to extend
  - Nx standardized boilerplate creation through `generator` and `executor` plugins
  - the plugins sometimes have functionality that is very hard/impossible to change (e.g. webpack, rollup config), though they work for non-advanced use cases
- the plugins tend to lag behind latest versions
- hard to incorporate new tech stack (e.g. vite) into the system, unless invest in developing custom generator and executors
  - not always a small investment, as one have to maintain and test the plugins for future versions
- Nx and its dependencies (plugins & generators) need to be periodically migrated to newer version)
  - there could be bugs and incompatibilities may arise in the process.
- Dependency can only have a single version. (Inherited from Google's single version rule)
  - understandable for preventing legacy code, but needs lots of discipline to execute correctly in large scale.

## Poor man's silver bullet to personal project management

![good](/assets/blog/monorepo/silver-bullet.jpeg)

There is silver bullet in this world, as long as you choose the proper constraints. For personal projects working with common tech stacks that need reasonably optimized build and linter rules. Tools like Nx and Turborepo are real godsends.  


## Examples of frontend monorepos
- [NativeScript](https://github.com/NativeScript/NativeScript): hybrid development framework
- [Storybook](https://github.com/storybookjs/storybook)：UI discovery and showcase
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint): TS support for ESLint
- [Babylon](https://github.com/BabylonJS/Babylon.js)：Web3D game engine

## Further reading
- [introduction and comparison of Monorepo tools](https://monorepo.tools/)
