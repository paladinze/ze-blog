---
title: 'Rigid Body Collisions'
coverImage: '/assets/blog/rigid-body-collision/cover.png'
projectLink: 'https://collision.shaderly.com'
repoLink: 'https://github.com/paladinze/guts/tree/main/apps/cg/r3f-physics'
date: '2022-09-15'
tags: ['lab']
techStackFront: ['TypeScript', 'React', 'WebGL', 'Three.js', 'React-Three-Fiber', 'Rapier']
techStackTools: ['Nx']
platforms: ['desktop', 'mobile']
---

## What

A simulation on rigid body collisions of instanced meshes based on react-three-fiber and the Rust rapier library using WASM.

## Features
![Noise on a wireframe](/assets/blog/rigid-body-collision/screenshot-1.png)

- visualizing colliders and how their shapes affect collisions
- measure the performance impact of having many rigid bodies
- adjust global gravity to create floating effects
- create shockwaves by applying impulses on each rigid body
- exploring approaches of resetting (teleporting) dynamic rigid bodies

## visualizing colliders

![colliders](/assets/blog/rigid-body-collision/screenshot-2.png)

- colliders are the key to collision detections
- colliders are auto-generated using `box` primitive in Rapier
- they can also be overridden using a combination of custom geometries (useful for custom models)

## collision stress test
![more colliders](/assets/blog/rigid-body-collision/screenshot-4.png)

- since Rapier is based on Rust and ported to Web using WASM, its performance is visibly better than other JS-based libraries in the same domain, such as cannon-es.
- the performance was great with thousands of primitive meshes.

## create shockwave effects using simple impulses

![colliders](/assets/blog/rigid-body-collision/screenshot-5.png)

![colliders](/assets/blog/rigid-body-collision/screenshot-3.png)

Creating the shockwave effect is surprisingly simple, just need to loop through all the instanced rigid bodies and apply some kind of impulses (average net force times by time) on each of them.

## more than just meshes
Rigid bodies are not just meshes, they are representations of objects that encapsulates attributes of non-deformed objects. Things like repositioning (translating) items is much more involved in a world with physics. 

One can not just change a rigid body's position, since it would just teleport the object, while leaving its linear velocity and angular velocity unchanged. Depending on use cases, these attributes might need to be adjusted as well. Besides dynamic objects, there are also kinematic objects, they don't subject to the same physics constraints, but needed to be carefully taken care of to look natural 😜 .


