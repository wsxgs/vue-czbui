<template>
  <div class="infinite-scroll" id="infiniteScroll">
    <slot name="content"></slot>
    <div class="loading" v-show="isLoading">
      <Loading></Loading>
    </div>
    <div class="finished" v-if="isFinished">没有数据了~</div>
    <div class="empty" v-if="isEmpty">
      <slot name="empty">
        <p>暂无数据~</p>
      </slot>
    </div>
  </div>
</template>

<script>
import Loading from './Loading'
export default {
  name: 'InfiniteScroll',
  components: {
    Loading
  },
  data () {
    return {
      screenEl: null, // 监听元素 el
      isEmpty: false, // 是否显示无数据
      isLoading: true, // 是否显示加载中
      isFinished: false, // 是否显示加载结束
      loadTimes: 0, // 加载次数
      timer: null // 页面滚动防抖定时器
    }
  },
  created () {
    // 触发上拉加载
    this.$emit('pullUpLoad')
  },
  mounted () {

  },
  beforeDestroy () {
    this.screenEl.removeEventListener('scroll', this.throttledCheck)
  },
  methods: {
    /**
     * 初始化
     */
    init () {
      let screen = document.getElementById('infiniteScroll')
      let windowHeight = window.innerHeight
      let screenOffsetTop = screen.offsetTop
      this.screenEl = screen
      this.screenEl.style.height = `${windowHeight - screenOffsetTop}px`
      this.screenEl.addEventListener('scroll', this.throttledCheck)
    },
    throttledCheck (e) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.pageScroll(e)
      }, 30)
    },
    /**
     * 页面滚动事件
     */
    pageScroll (e) {
      let $el = this.screenEl
      let screenHeight = $el.clientHeight // 窗口高度
      let scrollTop = $el.scrollTop // 滚动高度
      let pageScrollHeight = $el.scrollHeight // 页面高度

      // 窗口高度大于等于内容高度
      if (screenHeight >= pageScrollHeight) {
        this.screenEl.removeEventListener('scroll', this.throttledCheck)
        return
      }
      // 滚动高度大于等于可滚动高度触发加载事件
      if (scrollTop >= pageScrollHeight - screenHeight) {
        // 加载
        this.$emit('pullUpLoad')
      }
    },
    /**
     * 加载数据
     */
    loaded () {
      this.loadTimes++
      this.init()
    },
    /**
     * 没有数据
     */
    finished () {
      if (this.loadTimes > 0) {
        this.screenEl.removeEventListener('scroll', this.throttledCheck)
      }
      this.isLoading = false
      if (this.loadTimes === 0) {
        this.isEmpty = true
      } else {
        this.isFinished = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.infinite-scroll {
  position: relative;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;

  .loading {
    height: 50px;
    line-height: 50px;
    text-align: center;

    svg {
      display: inline-block;
      height: 50px;
    }
  }

  .finished {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 12px;
    color: #999;
  }

  .empty {
    p {
      padding: 30px 0;
      text-align: center;
      line-height: 40px;
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
