/* eslint-disable import/no-commonjs */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const baseConfig = require('./webpack.config.base');

module.exports = merge.smart(baseConfig, {
  devtool: 'source-map',
  mode: 'production',
  entry: {
    'electron.main': require.resolve('./index.js'),
  },
  output: {
    path: path.join(__dirname, '../../'),
    filename: './[name].js',
  },
  optimization: {
    minimizer: process.env.E2E_BUILD
      ? []
      : [
          new TerserPlugin({
            parallel: true,
            sourceMap: true,
            cache: true,
          }),
        ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
});
