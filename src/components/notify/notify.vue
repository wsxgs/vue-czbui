<template>
  <div class="notify" id="notify">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toptips weui-toptips_warn js_tooltips">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  mounted () {
    this.$nextTick(() => {
      this.showToast()
    })
  },
  methods: {
    showToast () {
      let notify = document.getElementById('notify')
      notify.setAttribute('class', 'notify on')
      if (this.timeout) {
        setTimeout(() => {
          notify.setAttribute('class', 'notify')
          setTimeout(() => {
            document.body.removeChild(notify)
          }, 300)
        }, this.timeout)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.weui-toptips {
  display: block;
  opacity: 0;
  transition: 0.3s;
  height: 46px;
  line-height: 46px;
  padding: 0;
}
.on .weui-toptips{
  opacity: 1;
}
</style>
