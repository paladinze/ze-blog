---
title: 'Perlin Noise'
coverImage: '/assets/blog/perlin-noise/cover.jpeg'
projectLink: 
repoLink: 
date: '2022-10-10'
tags: ['lab']
techStackFront: ['JavaScript', 'WebGL', 'Three.js']
---

## What

An experiment on GLSL shader and Perlin Noise

The implementation for noise function is borrowed from [patriciogonzalezvivo/GLSL-Noise.md](https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83) 


## Noise on a sphere 

### Noise on wireframe  
![Noise on a wireframe](/assets/blog/perlin-noise/screenshot-6.png)


### Noise on vertices with UV

- mapping fragment color to UV
- changing vertices using noise

![Noise on a sphere](/assets/blog/perlin-noise/screenshot-1.jpg)

## Noise based on distance from origin

![Noise based on distance](/assets/blog/perlin-noise/screenshot-5.png)

## Simulate wave-like behavior

### wave-like behavior on a sphere
![wave-like behavior on plane](/assets/blog/perlin-noise/screenshot-7.jpg)

![wave-like behavior on plane](/assets/blog/perlin-noise/screenshot-3.png)

## Finally, apply the noise on image texture

### the original image
![original image](/assets/blog/perlin-noise/screenshot-9.jpg)

### change texel position
![change texel position](/assets/blog/perlin-noise/screenshot-4.png)

### change texel position with noise
![texel position with noise](/assets/blog/perlin-noise/cover.jpeg)

