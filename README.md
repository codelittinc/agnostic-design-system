### Codelitt's Agnostic Design System

Our design system is meant to act as the backbones of simple projects at Codelitt.

See it [live](https://design-system.codelitt.dev/)

## Warning!

We do not guarantee backwards compability! It will be of responsibility of each project to guarantee
you are importing a specific version!

### How to install

Getting your Github Token

1. Access your [tokens page](https://github.com/settings/tokens)
2. Create a token that can read registry packages
3. npm set //npm.pkg.github.com/:_authToken YOUR TOKEN

Inside the project folder:

1. run `echo "registry=https://npm.pkg.github.com/codelittinc" >> .npmrc`
2. run: `npm install @codelittinc/agnostic-design-system`
3. add `import '@codelittinc/agnostic-design-system/dist/main.css'` to your `App.js`

### Importing a component

`import { Button, Row, Container, Col } from '@codelittinc/agnostic-design-system';`

Made with ❤️ by [Codelitt](https://www.codelitt.com)