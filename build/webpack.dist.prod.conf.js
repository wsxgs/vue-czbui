const merge = require('webpack-merge')
const distCommonWebpackConfig = require('./webpack.dist.common.conf')

module.exports = env => {
  return merge(distCommonWebpackConfig, {
    entry: {
      czbui: './src/czbui.js'
    },
    plugins: []
  })
}
