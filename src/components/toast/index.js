import Vue from 'vue'
import Toast from './toast.vue'

const install = {
  show (opts) {
    let div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Toast)
    const Instance = new Constructor({
      data () {
        return {
          msg: opts.msg,
          type: opts.type,
          timeout: opts.timeout
        }
      },
      methods: {

      }
    })
    Instance.$mount(div)
  },
  hide () {
    let toast = document.getElementById('toast')
    if (!toast) {
      return
    }
    toast.setAttribute('class', 'toast')
    setTimeout(() => {
      toast.remove()
    }, 300)
  }
}

export default install
