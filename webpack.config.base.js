/* eslint-disable no-unused-vars */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable import/no-commonjs */
const webpack = require('webpack');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    importLoaders: 1,
    localIdentName: '[local]__[hash:6]',
  },
};
// const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  target: 'electron-main',
  resolve: {
    // changed from extensions: [".js", ".jsx"]
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      // Common Image Formats
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        use: 'url-loader',
      },
    ],
  },
  /**
   * Disables webpack processing of __dirname and __filename.
   * If you run the bundle in node.js it falls back to these values of node.js.
   * https://github.com/webpack/webpack/issues/2010
   */
  node: {
    __dirname: false, // handle node dirname filename error after pack
    __filename: false,
  },
  // addition - add source-map support
  devtool: 'source-map',
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
    new webpack.NamedModulesPlugin(),
  ],
};
