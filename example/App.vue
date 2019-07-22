<template>
  <section class="app">
    <transition name="fade">
      <LoadingPro v-show="isShowLoading"></LoadingPro>
    </transition>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapState({
      isShowLoading: state => state.isShowLoading
    })
  },
  mounted () {
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
