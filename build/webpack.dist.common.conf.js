const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./base.conf')
const pkg = require('../package.json')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[name].js',
    library: 'czbui',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue'
    }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 2 } },
          'postcss-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: 'postcss.config.js' // 根目录创建此文件
              }
            }
          },
          {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 2 } },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: 'postcss.config.js' // 根目录创建此文件
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(
      pkg.name +
        ' v' +
        pkg.version +
        ' by YDCSS (c) ' +
        new Date().getFullYear() +
        ' Licensed ' +
        pkg.license
    ),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new OptimizeCSSAssetsPlugin()
  ]
})
