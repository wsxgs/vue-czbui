<template>
  <div class="dialog" id="dialog">
    <div class="js_dialog">
        <div class="weui-mask"></div>
        <div class="weui-dialog" >
            <div class="weui-dialog__hd" v-if="title"><span class="weui-dialog__title">{{title}}</span></div>
            <div class="weui-dialog__bd">{{msg}}</div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" v-if="isShowCancel" @click="closeDialog">取消</a>
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="confime">确定</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'Dialog',
  mounted () {
    this.$nextTick(() => {
      this.showDialog()
    })
  },
  methods: {
    showDialog () {
      let Dialog = document.getElementById('dialog')
      Dialog.setAttribute('class', 'dialog on')
    },
    closeDialog () {
      let Dialog = document.getElementById('dialog')
      Dialog.setAttribute('class', 'dialog')
      setTimeout(() => {
        document.body.removeChild(Dialog) 
      }, 300)       
    },
    confime () {
      this.confirmSure()
      this.closeDialog()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.weui-mask {
  background: #000;
  opacity: 0;
  transition: 0.3s;
}
.on .weui-mask {
  opacity: 0.6;
}
.weui-dialog {
  transform: translate(-50%, -60%) scale(0.5);
  opacity: 0;
  transition: 0.3s;
}
.on .weui-dialog {
  opacity: 1;
  transform: translate(-50%, -60%) scale(1);
}
.weui-dialog__hd {
  padding: 20px 25px 8px;
  font-size: 0;
}
.weui-dialog__bd {
  min-height: 36px;
  &:first-child {
    font-size: 16px;
    padding: 36px 20px 20px 20px;
    color: #353535;
  }
}
.weui-dialog__btn:active{
  background-color: #fff;
}
</style>
