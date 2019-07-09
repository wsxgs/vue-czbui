const merge = require('webpack-merge')
const distCommonWebpackConfig = require('./webpack.dist.common.conf')

module.exports = merge(distCommonWebpackConfig, {
  entry: {
    '/components/toast/index': './src/components/toast/',
    '/components/loading/index': './src/components/loading/',
    '/components/dialog/index': './src/components/dialog/',
    '/components/actionsheet/index': './src/components/actionsheet/',
    '/components/toolbar/index': './src/components/toolbar/',
    '/components/infinitescroll/index': './src/components/infinitescroll/',
    '/components/tab/index': './src/components/tab/',
    '/components/slider/index': './src/components/slider/',
    '/components/search/index': './src/components/search/',
    '/components/checkbox/index': './src/components/checkbox/',
    '/components/switch/index': './src/components/switch/',
    common: './src/style/weui.min.less'
  }
})
