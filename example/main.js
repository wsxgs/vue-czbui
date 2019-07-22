import Vue from 'vue'
import router from './router'
import http from './tool/request'
import store from './vuex'

import App from './app.vue'

// import CZBUI from '../src/czbui'
import CZBUI from 'vue-czbui'
import 'vue-czbui/dist/czbui.css'
import { _throttle, _debounce } from './tool/tool'

// 全局方法挂载
Vue.prototype.$http = http
window._throttle = _throttle
window._debounce = _debounce

Vue.use(CZBUI)

// 路由拦截
router.beforeEach((to, from, next) => {
  // 显示加载中
  store.commit('toggleLoaingStatus', true)
  next()
})

new Vue({
  router: router,
  store,
  render: v => v(App)
}).$mount('#app')
