'use strict'

// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        assetsSubDirectory: 'static',
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        inlineLimit: 10000
    },
    dev: {
        env: require('./dev.env'),
        assetsSubDirectory: 'static',
        inlineLimit: 5000000
    }
}
