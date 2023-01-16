---
title: 'One Component to Rule Them All'
coverImage: '/assets/blog/web-component/cover.png'
projectLink: 'https://github.com/paladinze/fantasia'
repoLink: 'https://github.com/paladinze/fantasia'
date: '2023-01-05'
tags: ['thoughts']
techStackFront: ['Web Component', 'Shadow DOM', 'Custom elements']
techStackBack: []
techStackTools: ['Stencil.js']
platforms: ['desktop', 'mobile']
---

## What

Web development, particularly frontend development, is a chaotic space. From browser wars to framework wars, from the revealing module pattern to the birth of EcmaScript Modules, we are seeing a common theme, that is the pursuit of standardization and modularization. 

Web Components is such an initiative. It aims to standardize the building blocks of UI component development. It's not a framework like React.js or Angular, but a set of Web standards. It provides building blocks crucial for achieving encapsulation of both style and logic. It is a union of a bunch of specs, including **Shadow DOM**, **custom elements**, **HTML templates** and **some CSS features** tailored for use in Web Components.

For a living example of a simple Web Components UI library, you can take a look at my [Fantasia UI library](https://github.com/paladinze/fantasia). It illustrates a possible UI library development setup with somewhat decent DX. It was created to unify and facilitate reuse of some common components across my personal projects.

## The call for a unified component system
![one ring to rule them all](/assets/blog/web-component/one-ring.png)

The concept of UI components is nothing new. So is the concept of module systems. I would argue module systems are the basis of the rise of UI components. Their development and maturity are highly correlated. Modules provide the necessary means to package and encapsulate code, but have no tool for encapsulating styles on their own.

In the early days of Dojo Toolkit and AngularJS (Angular 1.0), a lot of efforts was on "supercharging" the HTML and utilizing the best module system approach (such as AMD and UMD) available at the time to encapsulate JavaScript and UI logic. The general approach is simple. Component libraries like Bootstrap provided UI elements by selectively grouping CSS together, and sprinkling some JavaScript on top.

Shortly after, React.js and Angular 2.0+ came out, both advocating for component-centered development in the form of declarative UI composition, convenient data binding, virtual DOM and modern tooling. However, the two crucial pieces of the puzzle is still missing, encapsulating styles and standardization.

## The State of UI Components

After Angular and React, the number of UI libraries exploded. We now have a bunch of UI libraries targeting every possible frameworks, each guided with its respective design system. With CSS modules, CSS-in-JS solutions and similar CSS scoping solutions, CSS has finally achieved some modularization through build process.

However, one cannot simply port a React component to an Angular app, since neither implementation is native to the browser. And library CSS is still not safe from the outside world (the light DOM) even with id hashing the carefully chosen CSS selectors. Not to mention, we even have some WebGL or WebGPU based 3D components that doesn't play with mainstream frameworks to begin with. This naturally gives rise to a more standardized approach, which is **Web Components**.

## The building blocks of Web Components
![building blocks of a web component](/assets/blog/web-component/building-blocks.png)

Web Components is actually the name given to a collection of Web standards.

The following is its core building blocks:

- **Custom elements**: custom native HTML elements or extended HTML elements
- **Shadow DOM**: DOM and style encapsulation 
- **CSS features**: CSS custom properties, `::part` pseudo-element selector, `:host` pseudo-class function etc.
- **Custom events**: custom DOM events that can be emitted from the web component and listened to from outside

There are roughly two types of Web Components:
- **Autonomous custom elements**: new custom element
- **Customized built-in elements**: extended builtin element

These features are quite powerful, because they allow developers to introduce new HTML elements that are respected by the browser natively and encapsulate styles within the new element, safe from modifications from the outside. They even allow for customization of existing HTML elements and supercharge them with additional functionalities.  

### Example: Customized built-in elements

To quickly demo the power of custom elements, this simple example shows how to enhance a native `<a>` tag with a confirmation on click.

```javascript
class SuperA extends HTMLAnchorElement {

  connectedCallback() {
    this.addEventListener('click', (event) => {
      if (!confirm('Are you prepared to leave?')) {
        event.preventDefault();
      }
    })
  }
}

window.customElements.define('super-a', SuperA, { extends: 'a' });
```

usage in HTML
```html
<h2>extend built-in tag</h2>
<a is="super-a" href='https://google.com'>A Super Link</a>
```

## A low-level standard with modern tooling
![stencil.js](/assets/blog/web-component/stencil.png)

Writing Web Components using its native API and lifecycle methods is very verbose, since it is basically raw DOM manipulations with localized CSS. To achieve better dev experience and wider adoption, an abstraction of some kind is a must. [Stencil.js](https://stenciljs.com/docs/introduction) is such an example. It is a compiler for Web Components with modern dev tooling.

Some of Stencil's main selling points include:

- tiny API surface 
- embrace modern module features
    - ESM
    - dynamic imports
- build-time tooling
    - JSX
    - TypeScript
    - not rely on framework during build time or runtime
- browser support
    - native support on most (partial support for IE11)
    - auto polyfill when needed

Here is an [awesome list](https://github.com/mappmechanic/awesome-stenciljs) of projects based on Stencil, while [Ionic](https://ionicframework.com/) is probably one of the most notable project using it.

## Design once, integrate everywhere
![integration](/assets/blog/web-component/integration.png)

ShadowDOM and custom elements by themselves are just independent building blocks that can be employed in any framework. For example, Angular can opt for Shadow DOM instead of the default Scoped CSS solution in terms of modularizing CSS. However, the real strength of Web Components lies in how they can be used as standalone implementations or the single source of truth of an UX design and later integrated with projects with drastically different tech stacks.

One possible strategy for achieving this setup:

- define the design
- create Web Components library using a compiler such as Stencil (published as a library, such as `@paladinze/fantasia`)
  - use design as the source of truth
  - encapsulate most of the UI logic and CSS
  - expose methods, events, CSS `::parts`, CSS custom properties for customization
- create very thin wrapper libraries for each tech stack targeted  (published as a library, such as `@paladinze/fantasia-react`)
  - use Web Components library as the source of truth
  - solve framework specific issues
- integrate
  - application just need to import from wrapper library (e.g. `@paladinze/fantasia-react`) directly.
  - customization done through interfaces exposed by the web component library


## Summary

As someone suffered a lot from framework fatigue, Web Components on the surface, looks just like another "framework" (even though it's not 😏). I am never too optimistic about any framework, as they usually come and go fairly quickly. 

Web Components, as an approach to standardize component development, might suffer the same fate if it does not see wide support and adoption. But I am reasonably optimistic in this case, because at the very least, its building blocks are worthwhile to learn, and they are already used one way or another in existing frameworks.
