const custom = require('../webpack.config.js');

module.exports = {
  webpackFinal: (config) => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
      plugins: [ ...config.plugins, ...custom.plugins ],
    };
  },
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    "@storybook/addon-essentials"
  ],
};
