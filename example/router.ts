import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // 上拉加载、下拉刷新
    {
      path: '/infinitescroll',
      name: 'infinitescroll',
      component: () => import('./pages/InfiniteScroll.vue')
    },
    // 选项卡
    {
      path: '/tab',
      name: 'tab',
      component: () => import('./pages/Tab.vue')
    },
    // 操作反馈  toast  loading  dialog
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('./pages/Dialog.vue')
    },
    // 开关
    {
      path: '/switch',
      name: 'switch',
      component: () => import('./pages/Switch.vue')
    },
    // 复选框
    {
      path: '/checkBox',
      name: 'checkBox',
      component: () => import('./pages/CheckBox.vue')
    },
    // 滑块
    {
      path: '/slider',
      name: 'slider',
      component: () => import('./pages/Slider.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
