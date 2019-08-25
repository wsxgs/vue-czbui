<template>
  <div class="pull-down-page page">
    <!-- 导航条 -->
    <Toolbar>
      <span slot="title">下拉刷新</span>
      <a href slot="right"></a>
    </Toolbar>
    <PullDown ref="pullDownRefresh" @pullDownRefresh="pullDownRefresh">
      <div slot="content">
        <ul class="group">
          <li v-for="item in list" :key="item.idd">
            <img :src="item.img" alt />
            <div class="content">
              <h3>我是标题</h3>
              <p>我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述</p>
            </div>
          </li>
        </ul>
      </div>
    </PullDown>
  </div>
</template>

<script>
import { listData } from './../const/index'
export default {
  name: 'infinite-scroll',
  components: {

  },
  data () {
    return {
      // 列表
      list: [],
      // 当前页
      pageIndex: 1
    }
  },
  created () {
    this.getListData(this.pageIndex)
  },
  methods: {
    /**
     * 下拉刷新
     */
    pullDownRefresh () {
      this.getListData(this.pageIndex)
    },
    /**
     * 获取列表数据
     */
    async getListData (page) {
      await this.$http.get('/api', { params: {
        page: page
      } })
      // 隐藏加载中
      this.$store.commit('toggleLoaingStatus', false)

      let { list } = listData

      this.list = list
      if (this.$refs.pullDownRefresh) {
        this.$refs.pullDownRefresh.loaded()
      }
    }
  }
}
</script>

<style lang="less">
.group {
  li {
    display: flex;
    padding: 15px 15px;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #eee;

    &:last-child {
      margin-bottom: 0;
    }

    img {
      display: block;
      width: 68px;
      height: 68px;
      margin-right: 20px;
      background: #ccc url("./../assets/logo.png") no-repeat center center;
      background-size: 40px 40px;
    }

    .content {
      flex: 1;

      h3 {
        font-size: 16px;
        font-weight: normal;
        color: #333;
      }

      p {
        margin-top: 6px;
        font-size: 14px;
        color: #999;
        line-height: 20px;
        height: 40px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}
</style>
