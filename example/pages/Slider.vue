<template>
  <div class="slider">
    <!-- 导航条 -->
    <Toolbar>
      <span slot="title">滑块</span>
      <a href slot="right"></a>
    </Toolbar>

    <div class="section-body">
      <Slider :defaultValue="80" @sliderMoved="sliderMoved"></Slider>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  mounted () {

  },
  methods: {
    sliderMoved (val) {
      console.log('当前滑块值' + val)
    }
  }
}
</script>

<style lang="less" scoped>
.section-body {
  padding: 0 15px;
  margin-top: 20px;
}
</style>
