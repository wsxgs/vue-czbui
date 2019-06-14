
<template>
  <div class="tab">
    <!-- 导航条 -->
    <Toolbar>
      <span slot="title">tab切换</span>
      <a href slot="right"></a>
    </Toolbar>

    <Tab :tabList="tabList" @:checkTab="checkTab" :activeColor="activeColor"></Tab>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      activeColor: '#1aad19',
      tabList: [
        {
          id: '1',
          label: '选项一'
        },
        {
          id: '2',
          label: '选项二'
        },
        {
          id: '3',
          label: '选项三'
        }
      ]
    }
  },
  methods: {
    checkTab (val) {
      console.log(val)
    }
  }
}

</script>

<style scoped>
</style>
