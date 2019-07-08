import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './pages/index.vue'
import Infinitescroll from './pages/infinitescroll.vue'
import Tab from './pages/tab.vue'
import Dialog from './pages/dialog.vue'
import Switch from './pages/switch.vue'
import CheckBox from './pages/CheckBox.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/infinitescroll',
      name: 'infinitescroll',
      component: Infinitescroll
    },
    {
      path: '/tab',
      name: 'tab',
      component: Tab
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: Dialog
    },
    {
      path: '/switch',
      name: 'switch',
      component: Switch
    },
    {
      path: '/checkBox',
      name: 'checkBox',
      component: CheckBox
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
