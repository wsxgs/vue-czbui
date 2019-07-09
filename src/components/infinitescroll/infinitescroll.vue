<template>
  <div
    class="infiniteScroll"
    :class="{'scroll': height}"
    :style="`height:${height}`"
    id="infiniteScroll"
  >
    <div class="pull-down-refresh">
      <i
        class="arrow"
        :class="{'rotate': pullDownStatus === 0}"
        v-show="pullDownStatus === 0 || pullDownStatus === 1 "
      ></i>
      <i class="weui-loading" v-show="pullDownStatus === 2"></i>
      <i class="weui-icon-success-no-circle" v-show="pullDownStatus === 3"></i>
      {{pullDownText}}
    </div>
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
      ispullDown: false, // 是否下拉中
      pullDownStatus: 0, // 下拉刷新状态
      pullDownText: '下拉刷新', // 下拉刷新文字
      isEmpty: false, // 是否显示无数据
      isLoading: true, // 是否显示加载中
      isFinished: false, // 是否显示加载结束
      loadTimes: 0, // 加载次数
      timer: null, // 页面滚动防抖定时器
      screenEl: window // 监听元素 el
    }
  },
  props: {
    // 是否开启下拉刷新
    isOpenPullDownRefresh: {
      default: false,
      type: Boolean
    },
    // el高度
    height: {
      default: '',
      type: String
    }
  },
  created () {
    // 触发上拉加载
    this.$emit('pullUpLoad')
  },
  mounted () {
    this.$nextTick(() => {
      if (this.isOpenPullDownRefresh) {
        this.listenTouchEvent()
      }
    })
  },
  beforeDestroy () {
    this.screenEl.removeEventListener('scroll', this.throttledCheck)
  },
  methods: {
    /**
     * 监听触摸事件
     */
    listenTouchEvent () {
      let touchStartPoitionY = 0 // 触摸开始Y轴位置位置
      let touchEndPoitionY = 0 // 触摸结束Y轴位置
      let touchMoveLenght = 0 // 活动距离
      let pullDownElHeight = document.querySelector('.pull-down-refresh').clientHeight // 下拉刷新DOM高度
      document.body.addEventListener('touchstart', (e) => {
        touchStartPoitionY = e.touches[0].pageY
      })
      document.body.addEventListener('touchmove', (e) => {
        touchEndPoitionY = e.touches[0].pageY
        touchMoveLenght = touchEndPoitionY - touchStartPoitionY
        if (touchMoveLenght > 0) {
          document.body.style.transform = `translateY(${touchMoveLenght}px)`
          // 下拉高度大于dom高度
          if (touchMoveLenght > pullDownElHeight + 20) {
            this.pullDownText = '松开刷新'
            this.pullDownStatus = 1
          }
        }
      })
      document.body.addEventListener('touchend', (e) => {
        touchEndPoitionY = e.changedTouches[0].pageY
        touchMoveLenght = touchEndPoitionY - touchStartPoitionY
        // Y轴滑动距离大于 30 触发刷新事件
        if (touchMoveLenght > pullDownElHeight) {
          this.pullDownText = '重新加载中···'
          this.pullDownStatus = 2
          document.body.style.transform = `translateY(${pullDownElHeight}px)`
          this.loadTimes = 0
          this.ispullDown = true
          // 刷新
          this.$emit('pullDownRefresh')
        } else {
          document.body.style.transform = `translateY(0px)`
        }
      })
    },
    /**
    * 监听页面滚动
    */
    listenWindowScroll () {
      let screen = document.getElementById('infiniteScroll')
      this.screenEl = this.height ? screen : window
      this.screenEl.scrollTo(0, 0)
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
      let $el = this.screenEl === window ? document.documentElement : this.screenEl
      let windowHeight = $el.clientHeight // 窗口高度
      let scrollTop = $el.scrollTop // 滚动高度
      let pageScrollHeight = $el.scrollHeight // 页面高度

      // 窗口高度大于等于内容高度
      if (windowHeight >= pageScrollHeight) {
        this.screenEl.removeEventListener('scroll', this.throttledCheck)
        return
      }
      // 滚动高度大于等于可滚动高度触发加载事件
      if (scrollTop >= pageScrollHeight - windowHeight) {
        // 加载
        this.$emit('pullUpLoad')
      }
    },
    /**
     * 加载数据
     */
    loaded () {
      this.loadTimes++
      if (this.ispullDown) {
        // 下拉刷新
        this.screenEl.addEventListener('scroll', this.throttledCheck)
        this.isLoading = true
        this.isEmpty = false
        this.isFinished = false
        this.pullDownText = '刷新成功'
        this.pullDownStatus = 3
        setTimeout(() => {
          document.body.style.transform = `translateY(0px)`
          this.pullDownText = '下拉刷新'
          this.pullDownStatus = 0
        }, 500)
        this.ispullDown = false
      }

      this.listenWindowScroll()
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
.infiniteScroll {
  position: relative;

  &.scroll {
    overflow: scroll;
  }

  .pull-down-refresh {
    position: absolute;
    top: -40px;
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 12px;
    color: #999;

    .weui-loading {
      color: #999;
    }

    .weui-icon-success-no-circle {
      font-size: 16px;
      color: #999;
    }

    .arrow {
      position: relative;
      top: 6px;
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url("./../../assets/arrow-top.png") no-repeat center center;
      background-size: 20px 20px;
      transition: 0.3s;

      &.rotate {
        transform: rotateX(180deg);
      }
    }
  }

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
