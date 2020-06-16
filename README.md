<p align="center">
  <a href="https://www.codelitt.com/">
    <img src="https://www.codelitt.com/assets/images/codelitt-logo-574d820fc38c105df2760d6f46f79fa157b4ee96e8030243e0fb28211f3e3223.svg" alt="Codelitt logo" width="72" height="72">
  </a>
</p>

<h3 align="center">Codelitt Components</h3>

<p align="center">
  A bunch of React components where you can customize the style to match the design of your project.
  <br>
  <a href="#"><strong>Explore Components »</strong></a>
  <br>
</p>

## Table of contents

- [Quick Start](#quick-start)
- [What's included](#whats-included)
- [Matching the design of your project](#matching-the-design-of-your-project)
- [Contributing](#contributing)

## Quick Start

- Install with npm: `npm i @codelitt/components`

- Start using components in your project

```typescript
import { Button, TextInput } from '@codelitt/components';
```

## What's included

This library provides a set of components that you can import and use in your project, like Button, TextInput, Card, and more. ([see the full list](https://github.com/codelittinc/codelitt-design-system/blob/master/src/components))

The idea behind it is to reduce at the minimum the effort you would need to create custom components in your project.
For instance, you won't ever have to create yet another Button component: you could just import it from this library.

## Matching the design of your project

The goal of this library is to let you benefit from the features components provide, and allow you to customize their style at the same time.

Currently, the components style match the [Codelitt Design System](https://www.figma.com/file/RMgJTnFNdg8SM7Zynh10m0/Codelitt-Design-System?node-id=9%3A25).

Each component takes an optional `wrapperClassName` prop, and we use that class on the component's root element. This allows you to pass in a custom value and update the component's look&feel by applying css code to that class.

Here's an example of how you would typically customize the Button.

```tsx
// SomeComponent.tsx

import { Button } from '@codelitt/components';
import styles from './SomeComponent.module.scss';

const SomeComponent = () => (
  <div>
    <Button
      wrapperClassName={styles['my-project-button']}
      text="Click me"
      onClick={() => console.log('You clicked me')} />
  </div>
);
```

```scss
// SomeComponent.module.css

.my-project-button {
  border: none;
  background-color: #101378;
  color: #ffffff;
}
```

### Theming

Most components, such as the Button, can exist in different colors and flavors, and the `wrapperClassName` sometimes isn't enough to cover for all the shapes a component can have.

For this reason, those components also take a `theme` prop. For each theme you want to support, you can create a css class to apply a specific style only when that theme is used.

Let's take the Button as example. We already have the `wrapperClassName` applying some base style to it. Now let's say we want to add a "ghost" theme, that we would use to render a button featuring a transparent background. Here's how to do it:

```tsx
// SomeComponent.tsx

import { Button } from '@codelitt/components';
import styles from './SomeComponent.module.scss';

const SomeComponent = () => (
  <div>
    <Button
      wrapperClassName={styles['my-project-button']}
      theme="ghost"
      text="Click me"
      onClick={() => console.log('You clicked me')} />
  </div>
);
```

```scss
// SomeComponent.module.css

.my-project-button {
  color: #333333;

  &.theme-ghost {
    background: transparent;
  }
}
```

Basically, for each value passed in `theme` prop, you can create a `&.theme-<NAME>` class and add css for that specific theme.

For more info on customization, please refer to the component's documentation.

### Tip: wrap components

To avoid passing the `wrapperClassName` every time you use a component, it's a good practice to wrap it into a new component, and to use the new component all over the project.

```tsx
import { Button, ButtonProps } from '@codelitt/components';
import styles from './MyButton.module.scss';

const MyButton: React.FC<ButtonProps> = props => (
  <Button {...props} wrapperClassName={styles['my-button']} />
);

export default MyButton;
```

## Contributing

Please read through our [contributing guidelines](https://github.com/codelittinc/codelitt-design-system/blob/master/docs/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.
