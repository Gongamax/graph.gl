const ALIASES = require('../aliases');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  stories: [
    '../stories/basic-layouts/stories.js',
    '../stories/node-types/stories.js',
    '../stories/edge-types/stories.js',
    '../stories/interactions/stories.js',
    '../stories/graph-builder/stories.js',
    '../stories/traffic-flow/stories.js',
    '../stories/bubble-chart/stories.js',
    '../stories/cola/stories.js',
    '../stories/hive-plot/stories.js',
    '../stories/multi-graph-layout/stories.js',
    '../stories/ngraph/stories.js',
    '../stories/radial-layout/stories.js',
    '../stories/vizjs-layout/stories.js',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: false, // Use Babel instead of SWC
      },
    },
  },

  docs: {},

  webpackFinal: async (config) => {
    // Add aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      ...ALIASES,
    };

    // Configure Babel to use our .babelrc
    const babelRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes('jsx')
    );

    if (babelRule && babelRule.use) {
      const babelLoader = Array.isArray(babelRule.use)
        ? babelRule.use.find(
            (loader) => loader.loader && loader.loader.includes('babel-loader')
          )
        : babelRule.use;

      if (babelLoader && babelLoader.options) {
        babelLoader.options = {
          ...babelLoader.options,
          babelrc: true,
          configFile: './.babelrc',
        };
      }
    }

    // Add CSS loaders
    config.module.rules.push({
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
          },
        },
      ],
    });

    // Add plugin
    config.plugins.push(new MiniCssExtractPlugin());

    return config;
  },
};
