# 🚨 This project is deprecated. Moving forward, we will only provide new releases for bugs when requested in the issues list

# Codelitt's Agnostic Design System

Our design system is meant to act as the backbones of simple projects at Codelitt.

See it [live](https://design-system.codelitt.dev/)

## Warning!

We do not guarantee backwards compability! It will be of responsibility of each project to guarantee
you are importing a specific version!

## How to install

### Getting your Github Token

1. Access your [tokens page](https://github.com/settings/tokens)
2. Create a token that can read registry packages

### Inside the project folder:

1. Set up an `.npmrc` file and add the following lines:

```
@codelittinc:registry=https://npm.pkg.github.com/codelittinc
//npm.pkg.github.com/:_authToken=${YOUR_TOKEN}
```

Observation: Please keep in mind the token is **private**! As a standard and security safe
practice, be sure to add the `npmrc` file as a rule in `gitignore`.

2. run: `npm install @codelittinc/agnostic-design-system`
3. add `import '@codelittinc/agnostic-design-system/dist/main.css'` to your `App.js` (or `App.tsx` file if your project is using TypeScript)

### Importing a component

`import { Button, Row, Container, Col } from '@codelittinc/agnostic-design-system';`

Made with ❤️ by [Codelitt](https://www.codelitt.com)

### Installation variations by technology
Please keep in mind that there are technology-specific variations and additional steps to take into account when setting up the ADS.

#### a. Usage in a standard ReactJS
For standard ReactJS applications, simply following the steps above should suffice.

#### b. or React Typescript application

#### c. Usage in a standard NextJS application
After the initial configuration has been set up and you have confirmed that the ADS package has been installed (check the package.json file), you will need to do the following steps to successfully import components into your NextJS application:

1. In the root directory, create a file: `agnosticDesignSystem.js` or `agnosticDesignSystem.tsx` and initially add the following block:
```
import dynamic from 'next/dynamic';

const importComponent = (componentName) =>
  dynamic(() => import('@codelittinc/agnostic-design-system').then((mod) => mod[componentName]), { ssr: false });
```

Afterwards, in a line below this code, you should import the ADS components, individually, in the following manner:
Example:
```
export const Button = importComponent('Button');
```

From the component-level import, instead of pointing to `'@codelittinc/agnostic-design-system'`, you should import from this file.
Example:
```
import { Container, Row, Col, Form, EmailInput, Input, Button } from 'agnosticDesignSystem';
```

## Creating a new document for the StoryBook Page

Inside the `src/docs` folder:

1. Create a new document using the extension `.document.mdx`. For example: `Welcome.document.mdx`
2. Import `Meta` component from `@storybook/addon-docs/blocks`

```
import { Meta } from '@storybook/addon-docs/blocks';
```

3. It's good to define it inside a session so, you can do it if you configure the Meta title following the example below:

```
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title='{Session_name}/{Title_document}' />
```

## Testing ADS library locally

Inside the ADS project folder:

1. run: `npm run build-lib-for-local-testing`

Inside the Test Project folder:

1. run: `npm install {path_ads_library}/agnostic-design-system`
2. run: `npm link react` - It will link the ADS's react with your example project's react
3. run: `npm ls react` - Both reacts should have the same **version** and **be extraneous**

After the steps above you will be able to use the ADS locally.
