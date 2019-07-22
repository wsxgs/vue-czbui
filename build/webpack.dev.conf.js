const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const config = {
  host: '0.0.0.0',
  port: 9000
}

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './example/main.ts',
    vendor: ['vue', 'vue-router', 'axios']
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
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
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
          'style-loader',
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
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}`
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
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
