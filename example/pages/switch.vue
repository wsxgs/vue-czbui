<!-- Tab -->
<template>
  <div class="switch">

    <!-- 导航条 -->
    <Toolbar>
      <span slot="title">开关</span>
      <a href="" slot="right"></a>
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
  components: {

  },
  data () {
    return {
      switchStatus: false
    }
  },
  methods: {
    toggleSwitch (val) {
      this.switchStatus = val
      if (val) {
        this.$dialog({
          title: '',
          msg: '已打开',
          isShowCancel: false,
          confirmSure: function () {

          }
        })
      } else {
        this.$dialog({
          title: '',
          msg: '已关闭',
          isShowCancel: false,
          confirmSure: function () {

          }
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
