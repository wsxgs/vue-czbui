<template>
  <div class="slider">
    <div class="weui-slider-box">
      <div class="weui-slider">
        <div id="sliderInner" class="weui-slider__inner">
          <div id="sliderTrack" class="weui-slider__track"></div>
          <div id="sliderHandler" class="weui-slider__handler"></div>
        </div>
      </div>
      <div id="sliderValue" class="weui-slider-box__value">{{sliderValue}}</div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  name: 'Slider',
  data () {
    return {
      sliderHandler: null, // 滑块
      sliderValue: this.defaultValue, // 当前滑块值
      sliderWidth: '', // 滑块宽度
      currentSliderWidth: '', // 当前滑动宽度
      touchStartPosition: '', // 滑动开始x轴位置
      touchMovePosition: '', // 滑动移动x轴位置
      isTouchMoveDisabled: false // 是否禁用touchmove
    }
  },
  props: {
    defaultValue: {
      default: 0,
      type: Number
    }
  },
  created () {

  },
  mounted () {
    // 初始化滑块位置
    this.init()
  },
  methods: {
    /**
     * 初始化滑块位置
     */
    init () {
      let slider = document.getElementById('sliderInner') // 进度条
      this.sliderHandler = document.getElementById('sliderHandler') // 滑块
      this.sliderWidth = slider.clientWidth // 滑块宽度
      this.currentSliderWidth = this.sliderWidth * this.sliderValue / 100 // 当前滑动值
      // 设置滑块位置
      this.setSliderPosition()

      // 监听滑块滑动事件
      this.sliderHandler.addEventListener('touchstart', this.sliderTouchStart)
      this.sliderHandler.addEventListener('touchmove', this.throttle)
      this.sliderHandler.addEventListener('touchend', this.sliderTouchEnd)
    },
    /**
     * 触摸开始事件
     */
    sliderTouchStart (e) {
      this.touchStartPosition = e.touches[0].pageX
    },
    /**
     * touchmove截流
     */
    throttle (e) {
      if (this.isTouchMoveDisabled) {
        return
      }
      this.sliderTouchMove(e)
      this.isTouchMoveDisabled = true
      setTimeout(() => {
        this.isTouchMoveDisabled = false
      }, 80)
    },
    /**
     * 触摸移动事件
     */
    sliderTouchMove (e) {
      this.touchMovePosition = e.touches[0].pageX
      let movePosition = (this.touchMovePosition - this.touchStartPosition) // 滑动距离
      this.currentSliderWidth += movePosition // 当前活动距离
      // 处理边界值
      if (this.currentSliderWidth <= 0) {
        this.currentSliderWidth = 0
      } else if (this.currentSliderWidth >= this.sliderWidth) {
        this.currentSliderWidth = this.sliderWidth
      }
      // 计算当前滑块值
      this.sliderValue = Math.round(this.currentSliderWidth / this.sliderWidth * 100)

      // 设置滑块位置及当前滑动距离
      this.setSliderPosition()
      this.touchStartPosition = this.touchMovePosition
    },
    /**
     * 触摸结束事件
     */
    sliderTouchEnd (e) {
      this.$emit('sliderMoved', this.sliderValue)
    },
    /**
     * 设置滑块位置及当前滑动距离
     */
    setSliderPosition () {
      let sliderTrack = document.getElementById('sliderTrack') // 当前进度条
      sliderTrack.style.width = `${this.currentSliderWidth}px`
      this.sliderHandler.style.transform = `translateX(${this.currentSliderWidth}px)`
    }
  }

}
</script>

<style>
</style>
