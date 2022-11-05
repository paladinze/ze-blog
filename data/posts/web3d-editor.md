---
title: 'Mirage Web3D editor'
coverImage: '/assets/blog/web3d-editor/3d_2d_integration.png'
projectLink: 'https://static.res.qq.com/nav/web3d/editor/index.html?w3d=https://static.res.qq.com/nav/web3d/editor/examples/beautiful-planet/app.w3d'
repoLink: 
date: '2021-12-25'
tags: ['project']
---

## Project background

This is an in-house Web3D editor project inspired by José Ferrão's [nunuStudio](https://github.com/tentone/nunuStudio). It modernized and improved on many aspects of the original design, while borrowing ideas from other web-based WebGL frameworks/editors such A-Frame and PlayCanvas. Here are some of the highlights:

- **Code editor**: integrated with Monaco editor for JavaScript and GLSL shader editing, with syntax highlight and auto-completion support for Three.js. 
- **Scene editor**: implemented realtime editing and inspection of Three.js scene objects, with full parameters support. 
- **Material editor**: improved support for inspecting and previewing materials and textures. 
- **Editor framework**: implemented serialization and caching using IndexDB. Implement save, import and export features.

## Scene editing
![Editor Screenshot](/assets/blog/web3d-editor/scene-editing.png)

## Post-processing
![Editor Screenshot](/assets/blog/web3d-editor/post-processing.png)

## Standalone deployment
![Editor Screenshot](/assets/blog/web3d-editor/standalone-deploy.png)

