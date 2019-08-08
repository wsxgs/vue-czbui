import axios from 'axios'
import qs from 'qs'
import Toast from 'vue-czbui/dist/components/toast/index.js'
import Dialog from 'vue-czbui/dist/components/dialog/index.js'
import store from '../vuex'

let baseURL = ''
if (process.env.NODE_ENV === 'development') {
  baseURL = window.location.origin
} else {
  baseURL = '/'
}

const request = {
  get (url, params) {
    new Promise((resolve, reject) => {
      fetch(baseURL + url + handleOptions(params), {
        method: 'GET',
        credentials: 'include', // include, same-origin, *omit
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow' // manual, *follow, error
      })
        .then(async res => {
          let data = await res.json()
          if (data.code === 200) {
            resolve(data)
          } else {
            reject(data)
            Toast({
              msg: data.msg,
              type: error
            })
          }
        })
        .catch(e => {
          console.log(e)
          Dialog({
            title: '系统提示',
            msg: '网络错误，请稍后再试'
          })
        })
    })
  },
  post (url, params) {
    new Promise((resolve, reject) => {
      fetch(baseURL + url, {
        method: 'GET',
        body: params,
        credentials: 'include', // include, same-origin, *omit
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow' // manual, *follow, error
      })
        .then(async res => {
          let data = await res.json()
          if (data.code === 200) {
            resolve(data)
          } else {
            reject(data)
            Toast({
              msg: data.msg,
              type: error
            })
          }
        })
        .catch(e => {
          console.log(e)
          Dialog({
            title: '系统提示',
            msg: '网络错误，请稍后再试'
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

export default request
