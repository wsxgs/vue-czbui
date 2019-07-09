import Vue from 'vue'
import Actionsheet from './Actionsheet.vue'

const install = (opts: {
activeItem: object
title: string
lists: number[]
sureChecked: object
}) => {
  const Constructor = Vue.extend(Actionsheet)
  const Instance = new Constructor({
    data () {
      return {
        activeItem: opts.lists[0],
        title: opts.title,
        lists: opts.lists
      }
    },
    mounted () {
      setTimeout(() => {
        this.showActionsheet()
      })
    },
    methods: {
      showActionsheet () {
        let actionsheet: any = document.getElementById('actionsheet')
        actionsheet.setAttribute('class', 'actionsheet on')
      },
      checkItem (item: any) {
        this.activeItem = item
      },
      closeActionsheet () {
        let actionsheet: any = document.getElementById('actionsheet')
        actionsheet.setAttribute('class', 'actionsheet')
        setTimeout(() => {
          document.body.removeChild(actionsheet)
        }, 300)
      },
      sureCheck () {
        opts.sureChecked
        this.closeActionsheet()
      }
    }
  })
  const actionsheet: any = Instance.$mount()
  document.body.appendChild(actionsheet.$el)
}

export default install
