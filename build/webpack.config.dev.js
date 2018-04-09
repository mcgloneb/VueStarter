'use strict'

const config = require('../config');
const env = JSON.parse(config.dev.env.NODE_ENV);
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = env
}

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devServer: {
        hot: true
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
          'process.env': env
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ]
});

module.exports = webpackConfig
