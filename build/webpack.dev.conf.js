const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const config = {
  host: 'localhost',
  port: 9000
}

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  entry: {
    main: './example/main.js',
    vendors: ['vue', 'vue-router']
  },
  output: {
    path: path.join(__dirname, './../dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './../example'),
    host: config.host,
    port: config.port,
    hot: true,
    historyApiFallback: true,
    quiet: true,
    overlay: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9999',
        changeOrigin: true
        // pathRewrite: {"^/api" : ""}
      }
    }
  },
  optimization: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here: http://${config.host}:${config.port}`
        ],
        notes: ['pass Ctrl+ C stop serve']
      },
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return
        }
        console.log(errors[0])
        const error = errors[0]
        notifier.notify({
          title: 'Webpack error',
          message: severity + ': ' + error.name,
          subtitle: error.file || '',
          icon: ICON
        })
      },
      clearConsole: true
    })
  ]
})
