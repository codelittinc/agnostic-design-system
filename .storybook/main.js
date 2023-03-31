const custom = require('../webpack.config.js');
// import custom from "webpack.config"

module.exports = {
  webpackFinal: config => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: custom.module.rules
      },
      plugins: [...config.plugins, ...custom.plugins]
    };
  },
  stories: ['../src/docs/Intro.document.mdx', '../src/docs/*.document.mdx', '../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-docs', "@storybook/addon-essentials", "@storybook/preset-create-react-app"],
  core: {
    builder: 'webpack5'
  }
};