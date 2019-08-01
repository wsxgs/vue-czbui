<template>
  <section class="app">
    <transition name="fade">
      <Loading v-show="isShowLoading"></Loading>
    </transition>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import VConsole from 'vconsole'
import Loading from './component/loading'
export default {
  name: 'app',
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isShowLoading: state => state.isShowLoading
    })
  },
  mounted () {
    window.vconsole = new VConsole()
  }
}
</script>

<style lang="less">
body {
  background-color: #f8f8f8;
}
.page {
  min-height: 100vh;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>
