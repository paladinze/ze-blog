---
title: 'Graphical Programming' coverImage: '/assets/blog/makecode/cover.png' projectLink: 'https://github.com/d3jd'
repoLink: 'https://github.com/d3jd'
date: '2019-09-05' tags: ['project', 'thoughts']
techStackFront: ['MakeCode', 'PXT', 'JavaScript', 'C++']
techStackBack: ['Micro:bit']
platforms: ['desktop', 'mobile']
---

## What

![Makecode](/assets/blog/makecode/cover.png)

Graphical programming is the art of creating computer programs using visual building blocks. It is a form of low-code or
no-code programming. It doesn't have the flexibility of traditional high-level languages like JavaScript, Python or C++,
but it provides a user-friendly interface for composing code constructs. It is so accessible that even a child can grasp
the basic coding concepts and create functional software within a matter of minutes. Needless to say, it has huge
potential in areas such as education, gaming, robotics and consumer electronics.

## State of the art

![state of the art](/assets/blog/makecode/state-of-the-art.png)

Visual programming has a long history of being used as a teaching tool for computer science education. In this process,
several program emerged as the dominant tools of the field. Two most notable ones
are [Scratch](https://scratch.mit.edu/)
from MIT Media Lab and [Makecode](https://www.microsoft.com/en-us/makecode) from Microsoft. As the visual programming
ecosystem expands, these tools are now more like meta programming frameworks. They can generate Python and JavaScript
code from visual blocks, and they have integrations with all kinds of software and hardware, such as Minecraft and
robotic platforms.

Use Microsoft Makecode as an example, it is a framework for creating visual code editors. Internally, it is called
Microsoft Programming Experience Toolkit (PXT). Manny fun and powerful editors came out of it. To name a few:

- [Micro:bit MakeCode](https://makecode.microbit.org/): an editor for micro:bit microcontrollers
- [Arcade](https://arcade.makecode.com/): a small game engine for arcade games
- [Minecraft](https://education.minecraft.net/en-us/get-started): code mod for Minecraft
- [pxt-turtle](https://hwestphal.github.io/pxt-turtle/#editor): a drawing programming similar to the original LOGO
  Turtle
- [other editors](https://makecode.com/labs)

## The building blocks

![building blocks](/assets/blog/makecode/building-blocks.png)

Since most graphical programming building blocks are just visual representation of the underlying JavaScript or Python
code, they also have the concepts of variables, loops, events and conditional statements. One thing that makes visual
programming different is that they have more constraints. For example, blocks must visually fit to be used together, and
some blocks (such as certain types of event listener blocks) can only be used once.

![building blocks](/assets/blog/makecode/event-listeners.png)
![building blocks](/assets/blog/makecode/while-loop.png)

As shown above, with these tools in hand, one can do almost anything a text-based language can do: recording states,
repeating actions and reacting to events etc.. Some graphical programming editors offered by game engines, such
as [Blueprints](https://docs.unrealengine.com/5.1/en-US/blueprints-visual-scripting-in-unreal-engine/) from Unreal
engine is a testament for this.

![building blocks](/assets/blog/makecode/microbit-javascript.png)
In case interaction with other software or hardware is required, one can create adapters in the form of editor
extensions. Extensions themselves can be written using JavaScript or Python and talk to the underlying C++ code of the
hardware. Then, they can then be exposed in the visual editor to the user as new visual block. Like this, different
levels of abstractions can be made depending on the need of the application, making them suitable for low-code
applications.

## Going deeper: Hardware programming using BBC Micro:bit

Microsoft Makecode and BBC Micro:bit is a perfect union of easy to use software and small but powerful hardware. I was
surprised by the ease of use of Arduino when I first enter the wonderful world of hardware programming, but the Micro:
bit and Makecode duo give "easy to use" a new meaning.

### Micro:bit

![building blocks](/assets/blog/makecode/microbit.png)

Micro:bit is a credit card-sized microcontroller (mini computer) with a Cortex®-M0 processor and an NXP Kinetis KL26 SoC
ARM processor. It is low-powered, so a simple battery is enough to light it up.

![building blocks](/assets/blog/makecode/board-sensors.png)

In terms of sensors, it includes a 3-axis accelerometer, 3-axis magnetometer, LED lights, programmable buttons and many
more. It can be physically linked to other devices via Bluetooth® Smart Technology, or talk to another Micro:bit using
onboard radio (just like a walkie talkie).

![building blocks](/assets/blog/makecode/input-to-output.png)

Furthermore, it is possible to combine it with all kinds of input devices and actuators, such as joysticks, servos and
motors.

## The dream project: robots that shoot rockets

### The idea

![building blocks](/assets/blog/makecode/spider-whole.png)

When I first saw the tiny micro:bit controller, the image of a spider robot shooting out rockets appears in my mind.
Though it is challenging to create a mechanical platform for such robots from scratch, there are ready-made toys on the
market providing similar mechanical capabilities, just lacking a **good brain**. This is where graphical programming
comes in.

### Destructuring

![building blocks](/assets/blog/makecode/spider-head.jpg)
![building blocks](/assets/blog/makecode/spider-movement.png)
The first step of innovation is destructuring (reverse-engineering). The above are some pictures I took when dissecting
a toy. The spider platform is powered by two DC motors, while the rocket launcher platform has another two DC motors for
adjusting pitch and firing.

### Brain transplant

![building blocks](/assets/blog/makecode/spider-program.png)
The making of the brain is much easier than anticipated. Micro:bit as the brain provides the thinking power. Since it
has built-in radio transmission capabilities and supports two-way communication. Using two Micro:bit together can easily
achieve remote control. Additionally, To make the robot move, shoot and adjusting turret pitch and rotation, it is as
simple as setting a rotation speed for the DC motors in the visual building blocks. After gluing the logic together using
event listener blocks, we have a smart robot in less than an hour. 






