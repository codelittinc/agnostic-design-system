const { process } = require('jest-svg-transformer');

module.exports = {
  process: (src, filename, config, options) => {
    const transformed = process(src, filename, config, options);
    return { code: transformed };
  }
};
