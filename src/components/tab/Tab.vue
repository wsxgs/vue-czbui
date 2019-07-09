
<template>
  <div class="weui-tab">
    <div class="weui-navbar" id="weui-navbar">
      <div
        class="weui-navbar__item"
        v-for="(item, index, key) in tabList"
        :class="{'weui-bar__item_on': activeTabIndex === index}"
        :style="{color: activeTabIndex === index ? activeColor : ''}"
        :key="key"
        @click="toggleTab(item, index)"
      >
        <span>{{item.label}}</span>
      </div>
      <div class="line" id="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab',

  components: {

  },

  data () {
    return {

    }
  },

  props: {
    // tab列表
    tabList: {
      default: [],
      type: Array
    },
    // 高亮颜色
    activeColor: {
      default: 'rgb(26, 173, 25);',
      type: String
    },
    // 当前选中index
    activeTabIndex: {
      default: 0,
      type: Number
    }
  },

  computed: {

  },

  mounted () {
    this.$nextTick(() => {
      this.setActiveLineStyle()
    })
  },

  methods: {
    /**
     * 点击切换tab
     * params {Object} item
     * params {Number} index
     */
    toggleTab (item, index) {
      if (this.activeTabIndex === index) {
        return
      }
      this.$emit('checkTab', { item: item, index: index })
      this.$nextTick(() => {
        this.setActiveLineStyle()
      })
    },
    /**
     * 设置选中tab及线的样式
     */
    setActiveLineStyle () {
      let activeItem = document.querySelector('.weui-bar__item_on')
      let activeItemChild = activeItem.childNodes[0] // span
      let activeItemOffsetLeft = activeItem.offsetLeft
      let activeItemChildOffsetLeft = activeItemChild.offsetLeft
      let activeItemWidth = activeItemChild.offsetWidth
      let line = document.getElementById('line')

      // 设置线的样式
      line.style = `width: ${activeItemWidth}px; transform: translateX(${activeItemOffsetLeft + activeItemChildOffsetLeft}px); background-color: ${this.activeColor}`
    }
  }
}

</script>
<style lang='less' scoped>
.weui-navbar {
  position: relative;
  height: 50px;
  overflow: hidden;
  background-color: #fff;

  &:after {
    content: none;
  }

  .line {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 30px;
    height: 1px;
    background-color: #333;
    transition: 0.3s;
  }
}
.weui-navbar__item {
  box-sizing: border-box;
  padding: 0;
  height: 50px;
  line-height: 50px;
  transition: 0.3s;

  &.weui-bar__item_on {
    background-color: #fff;
    border: none;
  }

  &:after {
    content: none;
  }

  span {
    display: inline-block;
  }
}
</style>
