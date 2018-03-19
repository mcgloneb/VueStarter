'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // https://github.com/johnagan/clean-webpack-plugin
const path = require('path');
const merge = require('webpack-merge')
const config = require('../config');
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
        new CleanWebpackPlugin(['../dist/static'], { allowExternal: true, verbose:  true }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
});

module.exports = webpackConfig
