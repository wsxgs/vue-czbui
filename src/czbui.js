// import Vue from 'vue'

import Tab from './components/tab/index.js'
import Toast from './components/toast/index.js'
import Notify from './components/notify/index.js'
import Dialog from './components/dialog/index.js'
import Actionsheet from './components/actionsheet/index.js'
import WeuiSwitch from './components/switch/index.js'
import CheckBox from './components/checkBox/index.js'
import Toolbar from './components/toolbar/index.js'
import {
  Slider,
  SliderItem
} from './components/slider';
import {
  InfiniteScroll
} from './components/InfiniteScroll/index.js'

import './../static/css/weui.min.css'

const list = [Tab, WeuiSwitch, CheckBox, Slider, SliderItem, InfiniteScroll, Toolbar]

const install = (Vue) => {
  list.map(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$toast = Toast
  Vue.prototype.$notify = Notify
  Vue.prototype.$dialog = Dialog
  Vue.prototype.$actionsheet = Actionsheet
}


export default {
  install
}
