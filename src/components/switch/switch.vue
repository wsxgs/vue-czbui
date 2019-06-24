
<template>
  <div class="weui-switch" :class="{checked: switchStatus}" type="checkbox" @click="toggle"></div>
</template>

<script>
export default {
  name: 'WeuiSwitch',

  data () {
    return {}
  },

  props: {
    switchStatus: {
      type: Boolean,
      default: false
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.$nextTick(() => { })
  },

  methods: {
    /**
     * 切换
     */
    toggle () {
      this.$emit('toggleSwitch', !this.switchStatus)
    }
  }
}
</script>
<style lang='less' scoped>
.weui-switch {
  display: inline-block;
  vertical-align: middle;
}
.weui-switch.checked {
  border-color: #1aad19;
  background-color: #1aad19;
}
.weui-switch.checked:before {
  -webkit-transform: scale(0);
  transform: scale(0);
}
.weui-switch.checked:after {
  -webkit-transform: translateX(20px);
  transform: translateX(20px);
}
</style>
