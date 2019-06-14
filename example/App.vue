<template>
  <section id="app" class="app">
    <transition name="fade" class="box">
      <router-view></router-view>
    </transition>
  </section>
</template>

<style lang="less">
body {
  background-color: #f8f8f8;
}
.app {
  min-height: 100vh;
}
.fade-enter-active {
  transition: 0.3s;
}
.fade-enter {
  opacity: 0;
  // transform: translateX(100%);
}
.fade-leave-to {
  opacity: 1;
  // transform: translateX(-100%);
}
</style>
