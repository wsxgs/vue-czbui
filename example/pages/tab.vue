
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
      // 高亮颜色
      activeColor: '#1aad19',
      // tab 列表
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
      // 选中tab index
      activeTabIndex: 0,
      // 选中tab
      activeTab: null,
      // 内容
      content: '我是选项一对应的内容'
    }
  },
  methods: {
    /**
     * tab切换
     */
    checkTab (opts) {
      this.activeTabIndex = opts.index
      this.activeTab = opts.item
      this.getData()
    },
    /**
     * 获取数据
     */
    async getData () {
      let { code, msg } = await this.$http.get('/api', { id: this.activeTab.id })
      if (code !== 200) {
        this.$toast.show({
          type: 'error',
          msg: msg
        })
        return
      }
      if (this.activeTab.id === 1) {
        this.content = '我是选项一对应的内容'
      } else if (this.activeTab.id === 2) {
        this.content = '我是选项二对应的内容'
      } else if (this.activeTab.id === 3) {
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
