const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./base.conf')
const copyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const workboxPlugin = require('workbox-webpack-plugin')

const config = {
  host: '0.0.0.0',
  port: 9006
}

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './example/main.js',
    vendors: ['vue', 'vue-router']
  },
  output: {
    path: path.join(__dirname, './../dist'),
    publicPath: '/',
    filename: '[name][hash].js'
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
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
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
    }
  },
  plugins: [
    new copyWebpackPlugin([
      {
        from: path.resolve(__dirname + './../static'), // 打包的静态资源目录地址
        to: '' // 打包到dist下面的static
      }
    ]),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new workboxPlugin.GenerateSW({
      cacheId: 'webpack-pwa', // 设置前缀
      skipWaiting: true, // 强制等待中的 Service Worker 被激活
      clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
      swDest: 'service-wroker.js', // 输出 Service worker 文件
      globPatterns: ['**/*.{html,js,css,png.jpg}'], // 匹配的文件
      globIgnores: ['service-wroker.js'], // 忽略的文件
      runtimeCaching: [
        // 配置路由请求缓存
        {
          urlPattern: /.*\.js/, // 匹配文件
          handler: 'NetworkFirst' // 网络优先
        },
        {
          urlPattern: /\/api/, // 匹配文件
          handler: 'NetworkFirst' // 网络优先
        }
      ]
    }),
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here: http://${config.host}:${
            config.port
          }`
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
