import Vue from 'vue'
import router from './router'
import http from './tool/request'

import App from './app.vue'

import CZBUI from '../src/czbui'
// import CZBUI from 'vue-czbui'
// import 'vue-czbui/dist/czbui.css'
import { _throttle, _debounce } from './tool/tool'

Vue.prototype.$http = http
window._throttle = _throttle
window._debounce = _debounce

Vue.use(CZBUI)

router.beforeEach((to, from, next) => {
  next()
})

new Vue({
  router: router,
  render: v => v(App)
}).$mount('#app')
