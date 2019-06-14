<template>
  <div class="toast" id="toast">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i class="weui-icon_toast weui-loading"></i>
      <p class="weui-toast__content">{{msg}}</p>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  name: 'Loading',
  mounted () {
    this.$nextTick(() => {
      this.showToast()
    })
  },
  methods: {
    showToast () {
      let toast = document.getElementById('toast')
      toast.setAttribute('class', 'toast on')
      if (this.timeout) {
        setTimeout(() => {
          toast.setAttribute('class', 'toast')
          setTimeout(() => {
            document.body.removeChild(toast)
          }, 300)
        }, this.timeout)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.weui-toast {
  position: fixed;
  z-index: 5000;
  width: 120px;
  min-height: auto;
  top: 180px;
  left: 50%;
  margin-left: -60px;
  background: rgba(17, 17, 17, 0.7);
  text-align: center;
  border-radius: 5px;
  color: #ffffff;
  text-align: center;
  opacity: 0;
  transform: scale(0.5);
  transition: 0.3s;
}
.on .weui-toast {
  opacity: 1;
  transform: scale(1);
}
.weui-icon_toast {
  margin: 22px 0 0;
  height: 50px;
  line-height: 50px;
  display: block;
  &.weui-icon-success-no-circle {
    font-size: 23px;
    &:before {
      color: #ffffff;
      font-size: 46px;
    }
  }
  &.weui-loading {
    display: inline-block;
    margin: 23px 0 -2px;
    width: 40px;
    height: 40px;
    vertical-align: baseline;
  }
}
.weui-toast__content {
  margin: 5px 6px 20px 6px;
  font-size: 14px;
}
.weui-toast__content:first-child {
  padding-top: 14px;
}
</style>
