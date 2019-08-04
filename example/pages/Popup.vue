<template>
  <section class="popup-page page">
    <!-- 导航条 -->
    <Toolbar>
      <span slot="title">显示弹框</span>
      <a href slot="right"></a>
    </Toolbar>

    <div class="button-sp-area">
      <button type="button" class="weui-btn weui-btn_default" @click="showPopup()">显示弹窗</button>
    </div>
    <Popup
      :isShowPopup="isShowPopup"
      :title="title"
      :btnText="btnText"
      :position="popupPosition"
      @closePopup="closePopup()"
    >
      <div slot="content">
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
      </div>
    </Popup>
  </section>
</template>

<script>
export default {
  name: 'popup',
  data () {
    return {
      isShowPopup: false,
      title: '标题',
      btnText: '我知道了',
      // 弹层位置 center/bottom
      popupPosition: 'center'
    }
  },
  mounted () {
    setTimeout(() => {
      // 隐藏加载中
      this.$store.commit('toggleLoaingStatus', false)
    }, 500)
  },
  methods: {
    showPopup () {
      this.isShowPopup = true
    },
    closePopup () {
      this.isShowPopup = false
    }
  }
}
</script>

<style lang='less' scoped>
.button-sp-area {
  padding: 15px;
}
</style>
