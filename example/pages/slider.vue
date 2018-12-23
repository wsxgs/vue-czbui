<!-- slider -->
<template>
  <section>

    <!-- 导航条 -->
    <Toolbar>
      <span slot="title">轮播图</span>
      <a href="" slot="right"></a>
    </Toolbar>

    <slider autoplay="3000" paginationActiveColor="#2f96f7">
        <slider-item>
          <a>
            <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
          </a>
        </slider-item>
        <slider-item>
          <a>
            <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
          </a>
        </slider-item>
        <slider-item>
          <a>
            <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
          </a>
        </slider-item>
    </slider>
  </section>
</template>

<script>

export default {
  components: {

  },

  data () {
    return {
    }
  },

  created () { },

  mounted () { },

  methods: {},

  computed: {},
}

</script>

<style lang='' scoped>
</style>
