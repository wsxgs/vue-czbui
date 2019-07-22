const merge = require('webpack-merge')
const distCommonWebpackConfig = require('./webpack.dist.common.conf')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(distCommonWebpackConfig, {
  entry: {
    '/components/toast/index': './src/components/toast/',
    '/components/loading/index': './src/components/loading/',
    '/components/dialog/index': './src/components/dialog/',
    '/components/actionsheet/index': './src/components/actionsheet/',
    '/components/toolbar/index': './src/components/toolbar/',
    '/components/infinitescroll/index': './src/components/infinitescroll/',
    '/components/pulldown/index': './src/components/pulldown/',
    '/components/tab/index': './src/components/tab/',
    '/components/slider/index': './src/components/slider/',
    '/components/search/index': './src/components/search/',
    '/components/checkbox/index': './src/components/checkbox/',
    '/components/switch/index': './src/components/switch/',
    '/components/loadingpro/index': './src/components/loadingpro/',
    common: './src/style/weui.min.less'
  },
  plugins: [new CleanWebpackPlugin()]
})
