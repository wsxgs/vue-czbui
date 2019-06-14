// import Vue from 'vue'
import './style/weui.min.less'

import Tab from './components/tab/index.js'
import Toast from './components/toast/index.js'
import Loading from './components/loading/index.js'
import Dialog from './components/dialog/index.js'
import Actionsheet from './components/actionsheet/index.js'
import WeuiSwitch from './components/switch/index.js'
import CheckBox from './components/checkBox/index.js'
import Toolbar from './components/toolbar/index.js'
import InfiniteScroll from './components/infinitescroll/index'

const list = [Tab, WeuiSwitch, CheckBox, InfiniteScroll, Toolbar]

const install = Vue => {
  list.map(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$toast = Toast
  Vue.prototype.$loading = Loading
  Vue.prototype.$dialog = Dialog
  Vue.prototype.$actionsheet = Actionsheet
}

export default {
  install
}
