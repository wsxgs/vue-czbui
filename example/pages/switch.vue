
<template>
  <div class="switch page">
    <!-- 导航条 -->
    <Toolbar>
      <span slot="title">开关</span>
      <a href slot="right"></a>
    </Toolbar>

    <div class="weui-cells">
      <div class="weui-cell" to="/tab">
        <div class="weui-cell__bd">
          <p>开关</p>
        </div>
        <div class="weui-cell__ft">
          <WeuiSwitch :switchStatus="switchStatus" @toggleSwitch="toggleSwitch"></WeuiSwitch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mySwitch',
  components: {

  },
  data () {
    return {
      // 开关状态
      switchStatus: false
    }
  },
  mounted () {
    setTimeout(() => {
      // 隐藏加载中
      this.$store.commit('toggleLoaingStatus', false)
    }, 500)
  },
  methods: {
    /**
     * 切换开关状态
     */
    toggleSwitch (val) {
      this.switchStatus = val
      if (val) {
        this.$toast({
          msg: '已打开',
          type: 'success',
          timeout: 1500
        })
      } else {
        this.$toast({
          msg: '已关闭',
          type: 'success',
          timeout: 1500
        })
      }
    }
  }
}

</script>

<style scoped>
.weui-cell__ft {
  font-size: 0;
}
</style>
