'use strict'

const config = require('../config');
const env = JSON.parse(config.build.env.NODE_ENV);
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = env
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // https://github.com/johnagan/clean-webpack-plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge')
const utils = require('./utils');
const baseWebpackConfig = require('./webpack.base.config')

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
          'process.env': env
        }),
        new CleanWebpackPlugin(['../dist/static', '../dist/images'], { allowExternal: true, verbose:  true }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
});

module.exports = webpackConfig
