<template>
  <div class="home page">
    <!-- 导航条 -->
    <Toolbar :isShowBackIcon="isShowBackIcon">
      <span slot="title">首页</span>
      <a href slot="right"></a>
    </Toolbar>
    <div class="logo">
      <img src="./../assets/logo.png" alt />
    </div>
    <div class="weui-cells">
      <router-link class="weui-cell weui-cell_access" to="/feedback">
        <div class="weui-cell__bd">
          <p>操作反馈</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>

      <router-link class="weui-cell weui-cell_access" to="/pulldown">
        <div class="weui-cell__bd">
          <p>下拉刷新</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>

      <router-link class="weui-cell weui-cell_access" to="/infinitescroll">
        <div class="weui-cell__bd">
          <p>列表上拉加载</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>

      <router-link class="weui-cell weui-cell_access" to="/tab">
        <div class="weui-cell__bd">
          <p>选项卡</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>

      <router-link class="weui-cell weui-cell_access" to="/slider">
        <div class="weui-cell__bd">
          <p>滑块</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>

      <router-link class="weui-cell weui-cell_access" to="/search">
        <div class="weui-cell__bd">
          <p>搜索</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>

      <router-link class="weui-cell weui-cell_access" to="/checkBox">
        <div class="weui-cell__bd">
          <p>复选框</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>

      <router-link class="weui-cell weui-cell_access" to="/switch">
        <div class="weui-cell__bd">
          <p>开关</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  name: 'home',
  data () {
    return {
      isShowBackIcon: false
    }
  },
  mounted () {
    setTimeout(() => {
      // 隐藏加载中
      this.$store.commit('toggleLoaingStatus', false)
    }, 500)
  },
  methods: {

  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='less' scoped>
.home {
  .weui-cells {
    color: #333;
  }

  .logo {
    padding: 30px 15px;
    text-align: center;

    img {
      display: inline-block;
      width: 100px;
      height: 100px;
    }
  }

  .weui-cell__bd {
    text-align: left;
  }
}
</style>
