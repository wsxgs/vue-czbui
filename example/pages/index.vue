<template>
  <div class="index">
    <!-- 导航条 -->
    <Toolbar :isShowBackIcon="isShowBackIcon">
      <span slot="title">首页</span>
      <a href slot="right"></a>
    </Toolbar>
    <div class="logo">
      <img src="./../assets/logo.png" alt>
    </div>
    <div class="weui-cells">
      <router-link class="weui-cell weui-cell_access" to="/infinitescroll">
        <div class="weui-cell__bd">
          <p>列表下拉刷新/上拉加载</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>
      <router-link class="weui-cell weui-cell_access" to="/dialog">
        <div class="weui-cell__bd">
          <p>操作反馈</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>
      <router-link class="weui-cell weui-cell_access" to="/tab">
        <div class="weui-cell__bd">
          <p>tab切换</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>
      <router-link class="weui-cell weui-cell_access" to="/switch">
        <div class="weui-cell__bd">
          <p>开关</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>
      <router-link class="weui-cell weui-cell_access" to="/checkBox">
        <div class="weui-cell__bd">
          <p>复选框</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
// 测试
export default {
  name: 'index',
  data () {
    return {
      isShowBackIcon: false
    }
  },
  mounted: function () {
    this.$nextTick(() => { })
  },
  methods: {}
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='less' scoped>
.logo {
  padding: 30px 15px;
  text-align: center;
}
.logo img {
  display: inline-block;
  width: 100px;
  height: 100px;
}
.weui-cell__bd {
  text-align: left;
}
</style>
