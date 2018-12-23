import Vue from 'vue'
import Notify from './notify.vue'

const install = (opts) => {
  let div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Notify)
  const Instance = new Constructor({
    data () {
      return {
        msg: opts.msg,
        timeout: opts.timeout
      }
    },
    methods: {

    }
  })
  Instance.$mount(div)
}

export default install
