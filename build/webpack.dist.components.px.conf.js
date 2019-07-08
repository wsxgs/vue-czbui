const merge = require('webpack-merge')
const distCommonWebpackConfig = require('./webpack.dist.common.conf')

module.exports = merge(distCommonWebpackConfig, {
  entry: {
    '/components/infinitescroll/index': './src/components/infinitescroll/',
    '/components/tab/index': './src/components/tab/',
    '/components/toast/index': './src/components/toast/',
    '/components/dialog/index': './src/components/dialog/',
    '/components/actionsheet/index': './src/components/actionsheet/',
    '/components/switch/index': './src/components/switch/',
    '/components/checkbox/index': './src/components/checkbox/',
    '/components/toolbar/index': './src/components/toolbar/',
    common: './src/style/weui.min.less'
  }
})
