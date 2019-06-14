<template>
  <div class="pagenation">
    <InfiniteScroll
      ref="infiniteScroll"
      :isOpenPullDownRefresh="true"
      @pullDownRefresh="pullDownRefresh"
      @pullUpLoad="pullUpLoad"
    >
      <div class="skeleton" v-if="!list"></div>
      <ul slot="content" class="group" v-if="list">
        <li v-for="item in list" :key="item.idd">
          <img :src="item.img" alt>
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
  name: 'test',
  components: {

  },
  data () {
    return {
      list: null,
      pageIndex: 1
    }
  },
  methods: {
    pullDownRefresh () {
      this.pageIndex = 1
      this.getListData('refresh', this.pageIndex)
    },
    pullUpLoad () {
      this.getListData('load', this.pageIndex)
    },
    async getListData (type, page) {
      let { code } = await this.$http.get('/api', { page: page })
      let { list, total } = listData
      if (this.pageIndex === 1 && !this.list) {
        this.list = []
      }
      if (code !== 200) {
        return
      }
      if (total === 0) {
        this.$refs.infiniteScroll.finished()
        return
      }
      if (type === 'load') {
        this.list = [...this.list, ...list]
      } else {
        this.list = list
      }
      if (this.list.length === total) {
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
