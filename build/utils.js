'use strict'

const path = require('path')
const config = require('../config')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.inlineImageSizeLimit = function() {

    const limit = process.env.NODE_ENV === 'production'
    ? config.build.inlineLimit
    : config.dev.inlineLimit;

    return limit;
}

