import axios from 'axios'
import qs from 'qs'
import Toast from 'vue-czbui/dist/components/toast/index.js'
import Dialog from 'vue-czbui/dist/components/dialog/index.js'
import store from '../vuex'

let baseURL = ''
if (process.env.NODE_ENV === 'development') {
  baseURL = '/'
} else {
  baseURL = '/'
}

// 使用由库提供的配置的默认值来创建实例
var instance = axios.create({
  baseURL: baseURL,
  timeout: 10000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 对响应错误做点什么
    // 隐藏加载中
    store.commit('toggleLoaingStatus', false)
    return Promise.reject(error)
  }
)

let https = {
  get (url, opts = {}) {
    return new Promise((resolve, reject) => {
      instance({
        method: 'GET',
        url: url + handleOptions(opts)
      })
        .then(res => {
          if (res.data.code === 200) {
            resolve(res.data)
          } else {
            reject(res.data)
            Toast({
              type: 'error',
              msg: res.message,
              timeout: '1500'
            })
          }
        })
        .catch(e => {
          console.log(e)
          Dialog({
            title: '系统提示',
            msg: '网络错误，请稍后再试',
            isShowCancel: true,
            confirmSure: function () {}
          })
        })
    })
  },
  post (url, opts = {}) {
    return new Promise((resolve, reject) => {
      instance({
        method: 'POST',
        url: url,
        data: qs.stringify(opts),
        headers: {
          contentType: 'application/x-www-form-urlencoded'
        }
      })
        .then(res => {
          if (res.data.code === 200) {
            resolve(res.data)
          } else {
            reject(res.data)
            Toast({
              type: 'error',
              msg: res.message,
              timeout: '1500'
            })
          }
        })
        .catch(e => {
          console.log(e)
          Dialog({
            title: '系统提示',
            msg: '网络错误，请稍后再试',
            isShowCancel: true,
            confirmSure: function () {}
          })
        })
    })
  }
}

function handleOptions (opts) {
  if (typeof opts !== 'object') {
    return ''
  }

  let arr = Object.keys(opts)
  let newArr = []
  arr.forEach((item, index) => {
    if (opts[item] !== '' && opts[item] !== null && opts[item] !== undefined) {
      newArr.push(`${item}=${opts[item]}`)
    }
  })
  let newOpts = newArr.join('&')
  return newOpts ? '?' + newOpts : ''
}

export default https
