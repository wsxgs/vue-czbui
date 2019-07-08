import Vue from 'vue'
import './style/weui.min.less'

import Tab from './components/tab'
import Toast from './components/toast'
import Loading from './components/loading'
import Dialog from './components/dialog'
import Actionsheet from './components/actionsheet'
import WeuiSwitch from './components/switch'
import CheckBox from './components/checkBox'
import Toolbar from './components/toolbar'
import InfiniteScroll from './components/infinitescroll'

const list = [Tab, WeuiSwitch, CheckBox, InfiniteScroll, Toolbar]

const install = (Vue: any) => {
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
