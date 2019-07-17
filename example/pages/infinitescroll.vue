<template>
  <div class="infinite-scroll">
    <InfiniteScroll
      ref="infiniteScroll"
      :isOpenPullDownRefresh="true"
      @pullDownRefresh="pullDownRefresh"
      @pullUpLoad="pullUpLoad"
    >
      <ul slot="content" class="group">
        <li v-for="item in list" :key="item.idd">
          <img :src="item.img" alt />
          <div class="content">
            <h3>我是标题</h3>
            <p>我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述</p>
          </div>
        </li>
      </ul>
    </InfiniteScroll>
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
  methods: {
    /**
     * 下拉刷新
     */
    pullDownRefresh () {
      this.pageIndex = 1
      this.getListData('refresh', this.pageIndex)
    },
    /**
     * 上拉加载
     */
    pullUpLoad () {
      this.getListData('load', this.pageIndex)
    },
    /**
     * 获取列表数据
     */
    async getListData (type, page) {
      let { code } = await this.$http.get('/api', { page: page })

      let { list, total } = listData

      if (code !== 200) {
        return
      }
      // 无数据
      if (total === 0) {
        this.$refs.infiniteScroll.finished()
      }

      if (type === 'load') {
        // 上拉加载
        this.list = [...this.list, ...list]
      } else {
        // 下拉刷新
        this.list = list
      }

      if (this.list.length === total) {
        // 数据全部加载完毕
        this.$refs.infiniteScroll.finished()
      } else {
        this.$refs.infiniteScroll.loaded()
        this.pageIndex++
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
