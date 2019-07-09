import Vue from 'vue'
import './style/weui.min.less'

import Toast from './components/toast'
import Loading from './components/loading'
import Dialog from './components/dialog'
import Actionsheet from './components/actionsheet'
import Toolbar from './components/toolbar'
import InfiniteScroll from './components/infinitescroll'
import Tab from './components/tab'
import Slider from './components/slider'
import Search from './components/search'
import CheckBox from './components/checkBox'
import WeuiSwitch from './components/switch'

const list = [
  Tab,
  InfiniteScroll,
  Toolbar,
  Slider,
  Search,
  CheckBox,
  WeuiSwitch
]

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
