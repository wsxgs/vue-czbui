import Vue from 'vue'
import router from './router'
import http from './tool/request'

import App from './app.vue'

import CZBUI from 'vue-czbui'
// import CZBUI from './../src/czbui'
import 'vue-czbui/dist/czbui.css'

Vue.prototype.$http = http

Vue.use(CZBUI)

router.beforeEach((to, from, next) => {
  next()
})

new Vue({
  router: router,
  render: v => v(App)
}).$mount('#app')

if (module.hot) {
  module.hot.accept(this, function () {})
}
