const { cmsConfig } = require('@hs-web-team/webpack-config');
const { merge } = require('webpack-merge');
const path = require('path');

const modes = {
  DEVELOPMENT: 'development',
  QA: 'qa',
  PRODUCTION: 'production',
};

const customConfig = {
  // Add your custom config settings here
};

module.exports = (_, args) => {
  if (args.mode === modes.DEVELOPMENT) {
    const devConfig = cmsConfig({
      projectFolder: path.resolve(__dirname),
      portal: 'DEV',
      cmsSrc: 'dist',
      cmsDest: 'sample-site',
      autoupload: true,
    });

    return merge(devConfig, customConfig);
  }

  if (args.mode === modes.QA) {
    const prodConfig = cmsConfig({
      projectFolder: path.resolve(__dirname),
      portal: 'QA',
      cmsSrc: 'dist',
      cmsDest: 'sample-site',
    });

    return merge(prodConfig, customConfig);
  }

  if (args.mode === modes.PRODUCTION) {
    const prodConfig = cmsConfig({
      projectFolder: path.resolve(__dirname),
      portal: 'PROD',
      cmsSrc: 'dist',
      cmsDest: 'sample-site',
    });

    return merge(prodConfig, customConfig);
  }

  throw new Error('Error: no webpack mode specified.');
};
