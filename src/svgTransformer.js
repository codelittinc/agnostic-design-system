const { process } = require('jest-svg-transformer');
//todo check if we need to update this one..


module.exports = {
  process: (src, filename, config, options) => {
    const transformed = process(src, filename, config, options);
    return { code: transformed };
  }
};
