//开发环境和生产环境共用配置

'use strict';

import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default new Config().merge({
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, '../src/App.js')],
    calcPolyfill: path.resolve(__dirname, '../node_modules/calc-polyfill/calc.min.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../styles'),
      path.resolve(__dirname, '../static'),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'wechat demo',
      template: path.resolve(__dirname, '../template/index.html'),
    }),
  ],
  module: {
    loaders: [
      {
        test: /(\.js)$/,
        loaders: ['babel?cacheDirectory'],
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'url-loader?importLoaders=1&limit=1&name=[name].[ext]'
      },
      {
        test: /\.(png|jpg|ico|svg)$/,
        loader: 'url-loader?limit=25000&name=[name]-[hash:base64:5].[ext]'
      },
      {
        test: /(\.htc)$/,
        loader: 'url-loader?limit=1&mimetype=text/x-componen&name=[name].[ext]'
      }
    ]
  },
  postcss: () => [
    require('postcss-will-change'),
    require('postcss-flexbugs-fixes'),
    require('postcss-color-rgba-fallback'),
    require('postcss-opacity'),
    require('postcss-flexibility'),
    require('postcss-cssnext'),
    require('postcss-pseudoelements'),
    require('doiuse')({
      browsers: ['ie >= 8', '> 1%', 'last 2 versions'],
      ignore: [
        // 没有polyfill
        'css-appearance',
        // 不兼容动画效果，不影响
        'transforms3d',
        'transforms2d',
        // 只有 opera mini不兼容，忽视
        'outline',
        // 已使用 postcss-color-rgba-fallback 作兼容
        'css3-colors',
        // 已使用 postcss-flexibility 作兼容
        'flexbox',
        // 已使用 calc-polyfill 作兼容
        'calc',
        // 已使用 postcss-pseudoelements 作兼容
        'css-gencontent',
        // 已用 backgroundsize.min.htc 作兼容
        'background-img-opts',
        // 已用 postcss-will-change 作兼容
        'will-change',
        // 已用 postcss-opacity 作兼容
        'css-opacity',
        'css-filters'
      ],
    }),
    require('postcss-font-normalize'),
    require('postcss-reporter')({
      clearMessages: true
    }),
  ],
});
