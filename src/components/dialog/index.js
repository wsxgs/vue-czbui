import Vue from 'vue'
import Dialog from './dialog.vue'

const install = (opts) => {
  let div = document.createElement('div')
  document.body.appendChild(div)

  const Constructor = Vue.extend(Dialog)
  const Instance = new Constructor({
    data() {
      return {
        title: opts.title,
        msg: opts.msg,
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
