import Vue from 'vue';
import VueRouter from 'vue-router';
import Resource from 'vue-resource';

import CZBUI from './../src/czbui.js';
import Index from './pages/index.vue';
import Slider from './pages/slider.vue';
import Infinitescroll from './pages/infinitescroll.vue';
import Tab from './pages/tab.vue';
import Dialog from './pages/dialog.vue';
import Switch from './pages/switch.vue';
import CheckBox from './pages/CheckBox.vue';

import App from './app.vue';

import './../src/czbui'

Vue.use(VueRouter);
Vue.use(Resource);
Vue.use(CZBUI);

document.addEventListener('DOMContentLoaded', function () {
  typeof FastClick === 'function' && FastClick.attach(document.body);
}, false);

const router = new VueRouter({
  routes: [{
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/Slider',
      name: 'slider',
      component: Slider
    },
    {
      path: '/Infinitescroll',
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
  ]
});

const app = new Vue({
  router: router,
  render: v => v(App)
}).$mount('#app');

let scrollTop = 0;
