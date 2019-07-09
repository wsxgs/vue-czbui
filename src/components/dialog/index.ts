import Vue from 'vue'
import Dialog from './Dialog.vue'

const install = (opts: {
title: string
msg: string
isShowCancel: boolean
confirmSure: object
}) => {
  const Constructor = Vue.extend(Dialog)
  const Instance = new Constructor({
    data () {
      return {
        // 标题
        title: opts.title,
        // 消息
        msg: opts.msg,
        // 是否显示取消按钮
        isShowCancel: opts.isShowCancel
      }
    },
    methods: {
      confirmSure: opts.confirmSure ? opts.confirmSure : () => {}
    }
  }).$mount()
  document.body.appendChild(Instance.$el)
}

export default install
