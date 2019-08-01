<template>
  <div class="loading-pro">
    <span class="line" />
    <span class="line" />
    <span class="line" />
    <span class="line" />
    <span class="line" />
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="less" scoped>
.loading-pro {
  position: fixed;
  padding: 15px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  line-height: 1;
  font-size: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;

  span {
    display: inline-block;
    width: 2px;
    height: 30px;
    margin: 0 2.5px;
    background-color: #fff;
    border-radius: 2.5px;

    &:nth-child(1) {
      animation: myScale 0.6s 0.3s ease-in-out infinite;
    }
    &:nth-child(2) {
      animation: myScale 0.6s 0.15s ease-in-out infinite;
    }
    &:nth-child(3) {
      animation: myScale 0.6s 0s ease-in-out infinite;
    }
    &:nth-child(4) {
      animation: myScale 0.6s 0.15s ease-in-out infinite;
    }
    &:nth-child(5) {
      animation: myScale 0.6s 0.3s ease-in-out infinite;
    }
  }
}
@keyframes myScale {
  0% {
    transform: scaleY(1);
  }
  25% {
    transform: scaleY(0.66);
  }
  50% {
    transform: scaleY(0.33);
  }
  75% {
    transform: scaleY(0.66);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
