'use strict'

// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        assetsSubDirectory: 'static',
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist')
    },
    dev: {
        env: require('./dev.env'),
        assetsSubDirectory: 'static'
    }
}
