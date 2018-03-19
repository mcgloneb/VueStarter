'use strict'

const path = require('path')
const utils = require('./utils')
const config = require('../config')

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
              test: /\.scss$/,
              loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    }
}
