<template>
  <section class="app">
    <transition name="fade" class="box">
      <router-view></router-view>
    </transition>
  </section>
</template>

<style lang="less">
body{
  background-color: #f8f8f8;
}
.fade-enter-active  {
    transition: 0.2s
}
.fade-enter {
  opacity: 0;
  transform: translateX(100%)
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%)
}
</style>
