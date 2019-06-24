import Vue from 'vue'
import Dialog from './dialog.vue'

const install = opts => {
  let div = document.createElement('div')
  document.body.appendChild(div)

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
  })
  Instance.$mount(div)
}

export default install
