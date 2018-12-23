<template>
  <div class='dialog'>

    <!-- 导航条 -->
    <Toolbar>
      <span slot="title">操作反馈</span>
      <a href="" slot="right"></a>
    </Toolbar>

    <div class='button-sp-area'>
        <button type='button' class='weui-btn weui-btn_default' v-on:click='showToastLoading'>显示Toast(Loading)</button>
        <button type='button' class='weui-btn weui-btn_primary' v-on:click='showToastSuccess'>显示Toast(success)</button>
        <button type='button' class='weui-btn weui-btn_warn' v-on:click='showToastWarn'>显示Toast(error)</button>
    </div>
    <div class='button-sp-area'>
        <button type='button' class='weui-btn weui-btn_default' v-on:click='showAlert'>alert</button>
        <button type='button' class='weui-btn weui-btn_default' v-on:click='showConfim'>confim</button>
    </div>
    <div class='button-sp-area'>
        <button type='button' class='weui-btn weui-btn_default' v-on:click='showActionSheet'>ActionSheet</button>
    </div>
    <div class='button-sp-area'>
        <button type='button' class='weui-btn weui-btn_default' v-on:click='showNotify'>表单验证</button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
    }
  },
  mounted: function () {
    this.$nextTick(() => {

    })
  },
  methods: {
    showToastLoading () {
      this.$toast.show({
        type: 'loading',
        msg: '加载中'
      })
      setTimeout(() => {
        this.$toast.hide()
      }, 2000)
    },
    showToastSuccess () {
      this.$toast.show({
        type: 'success',
        msg: '成功提示',
        timeout: '1500'
      })
    },
    showToastWarn () {
      this.$toast.show({
        type: 'error',
        msg: '错误提示',
        timeout: '1500'
      })
    },
    showNotify () {
      this.$notify({
        msg: '手机号格式不正确',
        timeout: '1500'
      })
    },
    showAlert () {
      this.$dialog({
        title: '',
        msg: '操作成功',
        isShowCancel: false,
        confirmSure: function () {
          console.log('点击了确定')
        }
      })
    },
    showConfim () {
      this.$dialog({
        title: '系统提示',
        msg: '提示消息',
        isShowCancel: true,
        confirmSure: function () {
          console.log('点击了确定')
        }
      })
    },
    showActionSheet () {
      var that = this
      that.$actionsheet({
        title: '请选择支付方式',
        lists: [
          {
            id: 1,
            label: '微信支付',
            icon: './../assets/wx.png'
          },
          {
            id: 2,
            label: '支付宝支付',
            icon: './../assets/zfb.png'
          }
        ],
        sureChecked: function () {
          console.log(this.activeItem)
        }
      })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='less' scoped>
.page{
  padding-top: 26px;
}
.button-sp-area{
  margin: 15px;
}
</style>
