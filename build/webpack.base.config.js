'use strict'

const utils = require('./utils');
const path = require('path');
const config = require('../config');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: [
        './src/main.js'
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
              test: /\.js$/,
              loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: utils.inlineImageSizeLimit(),
                    publicPath: "images",
                    outputPath: "images"
                }
            },
            {
              test: /\.scss$/,
              loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    }
}
