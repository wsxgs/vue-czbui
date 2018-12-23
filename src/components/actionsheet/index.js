import Vue from 'vue'
import Actionsheet from './actionsheet.vue'

const install = (opts) => {
  let div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Actionsheet)
  const Instance = new Constructor({
    data () {
      return {
        activeItem: opts.lists[0],
        title: opts.title,
        lists: opts.lists
      }
    },
    methods: {
      sureChecked: opts.sureChecked
    }
  })
  Instance.$mount(div)
}

export default install
