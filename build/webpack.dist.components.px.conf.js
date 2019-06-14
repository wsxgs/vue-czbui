const merge = require('webpack-merge')
const distCommonWebpackConfig = require('./webpack.dist.common.conf')

module.exports = merge(distCommonWebpackConfig, {
  entry: {
    '/components/infinitescroll/index':
      './src/components/infinitescroll/index.js',
    '/components/tab/index': './src/components/tab/index.js',
    '/components/toast/index': './src/components/toast/index.js',
    '/components/dialog/index': './src/components/dialog/index.js',
    '/components/actionsheet/index': './src/components/actionsheet/index.js',
    '/components/switch/index': './src/components/switch/index.js',
    '/components/checkbox/index': './src/components/checkbox/index.js',
    '/components/toolbar/index': './src/components/toolbar/index.js',
    common: './src/style/weui.min.less'
  }
})
