import Vue from 'vue'
import Loading from './loading.vue'

const install = {
  show (opts: { msg: string }) {
    const Constructor = Vue.extend(Loading)
    const Instance = new Constructor({
      data () {
        return {
          msg: opts.msg || '加载中'
        }
      },
      methods: {}
    })
    const loading = Instance.$mount()
    document.body.appendChild(loading.$el)
  },
  hide () {
    let toast: any = document.getElementById('toast')
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
