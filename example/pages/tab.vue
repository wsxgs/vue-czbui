
<template>
  <div class="tab">
    <!-- 导航条 -->
    <Toolbar>
      <span slot="title">tab切换</span>
      <a href slot="right"></a>
    </Toolbar>

    <Tab
      :tabList="tabList"
      @checkTab="checkTab"
      :activeTabIndex="activeTabIndex"
      :activeColor="activeColor"
    ></Tab>

    <div class="content">{{content}}</div>
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
          id: 1,
          label: '选项一'
        },
        {
          id: 2,
          label: '选项二'
        },
        {
          id: 3,
          label: '选项三'
        }
      ],
      activeTabIndex: 0,
      content: '我是选项一对应的内容'
    }
  },
  methods: {
    checkTab (index) {
      this.activeTabIndex = index
      if (index === 0) {
        this.content = '我是选项一对应的内容'
      } else if (index === 1) {
        this.content = '我是选项二对应的内容'
      } else if (index === 2) {
        this.content = '我是选项三对应的内容'
      }
    }
  }
}

</script>

<style scoped>
.content {
  background: #fff;
  margin-top: 10px;
  height: calc(100vh - 86px);
  padding: 15px;
}
</style>
