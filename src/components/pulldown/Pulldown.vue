<template>
  <div class="pull-down-wrap" :class="{'is-dropped': ispullDown}" id="pullDown">
    <div class="pull-down-box">
      <div class="pull-down-content" id="pullDownContent">
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
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  name: 'PullDown',
  components: {
  },
  data () {
    return {
      screenEl: null, // 监听元素 el
      ispullDown: false, // 是否下拉中
      pullDownStatus: 0, // 下拉刷新状态
      pullDownText: '下拉刷新' // 下拉刷新文字
    }
  },
  created () {
    setTimeout(() => {
      this.init()
    }, 300)
  },
  mounted () {

  },
  methods: {
    /**
     * 初始化
     */
    init () {
      let screen = document.getElementById('pullDown')
      let screenContent = document.getElementById('pullDownContent')
      this.screenEl = screenContent
      let windowHeight = window.innerHeight
      let screenOffsetTop = screen.offsetTop
      screen.style.height = `${windowHeight - screenOffsetTop}px`
      this.listenTouchEvent()
    },
    /**
     * 监听触摸事件
     */
    listenTouchEvent () {
      let screen = document.getElementById('pullDown')

      let touchStartPoitionY = 0 // 触摸开始Y轴位置位置
      let touchEndPoitionY = 0 // 触摸结束Y轴位置
      let touchMoveLenght = 0 // 活动距离
      let pullDownElHeight = document.querySelector('.pull-down-refresh').clientHeight // 下拉刷新DOM高度
      screen.addEventListener('touchstart', (e) => {
        touchStartPoitionY = e.touches[0].pageY
      })
      screen.addEventListener('touchmove', (e) => {
        let screenBoxScrollTop = screen.scrollTop
        touchEndPoitionY = e.touches[0].pageY
        touchMoveLenght = touchEndPoitionY - touchStartPoitionY
        if (touchMoveLenght > 0 && screenBoxScrollTop === 0) {
          event.preventDefault()
          event.stopPropagation()
          this.ispullDown = false
          this.screenEl.style.transform = `translateY(${touchMoveLenght}px)`
          // 下拉高度大于dom高度
          if (touchMoveLenght > pullDownElHeight) {
            this.pullDownText = '松开刷新'
            this.pullDownStatus = 1
          }
        }
      })
      screen.addEventListener('touchend', (e) => {
        let screenBoxScrollTop = screen.scrollTop
        this.ispullDown = true
        touchEndPoitionY = e.changedTouches[0].pageY
        touchMoveLenght = touchEndPoitionY - touchStartPoitionY

        // Y轴滑动距离大于 40 触发刷新事件
        if (touchMoveLenght > pullDownElHeight && screenBoxScrollTop === 0) {
          this.pullDownText = '重新加载中···'
          this.pullDownStatus = 2
          this.screenEl.style.transform = `translateY(${pullDownElHeight}px)`
          this.loadTimes = 0
          // 刷新
          this.$emit('pullDownRefresh')
        } else {
          this.screenEl.style.transform = 'translateY(0)'
        }
      })
    },
    /**
     * 加载数据
     */
    loaded () {
      // 下拉刷新
      this.screenEl.addEventListener('scroll', this.throttledCheck)
      this.pullDownText = '刷新成功'
      this.pullDownStatus = 3

      setTimeout(() => {
        this.screenEl.style.transform = 'translateY(0)'
        this.pullDownText = '下拉刷新'
        this.pullDownStatus = 0
      }, 500)
    }
    /**
     * 没有数据
     */

  }
}
</script>

<style lang="less" scoped>
.pull-down-wrap {
  position: relative;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;

  &.is-dropped {
    transition: 0.2s;
  }

  .pull-down-box {
    overflow: hidden;
  }

  .pull-down-refresh {
    margin-top: -40px;
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
}
</style>
