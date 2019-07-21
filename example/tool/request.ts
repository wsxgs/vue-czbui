import axios from 'axios'
import qs from 'qs'
import Toast from 'vue-czbui/dist/components/toast/index.js'
import Dialog from 'vue-czbui/dist/components/dialog/index.js'

let baseURL: string = ''
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

let https = {
  get (url: string, opts = {}) {
    return new Promise((resolve, reject) => {
      instance({
        method: 'GET',
        url: url + handleOptions(opts)
      })
        .then((res: any) => {
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
  post (url: string, opts = {}) {
    return new Promise((resolve, reject) => {
      instance({
        method: 'POST',
        url: url,
        data: qs.stingfy(opts),
        headers: {
          contentType: 'application/x-www-form-urlencoded'
        }
      })
        .then((res: any) => {
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

function handleOptions (opts: any) {
  if (typeof opts !== 'object') {
    return ''
  }

  let arr = Object.keys(opts)
  let newArr = arr.map(item => {
    if (opts[item]) {
      return (item = `${item}=${opts[item]}`)
    }
  })
  let newOpts = newArr.join('&')
  return newOpts ? '?' + newOpts : ''
}

export default https
