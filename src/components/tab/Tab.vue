
<template>
  <div class="weui-tab">
    <div class="weui-navbar">
      <div
        class="weui-navbar__item"
        v-for="(item, index, key) in tabList"
        :class="{'weui-bar__item_on': activeTabIndex === index}"
        :key="key"
        @click="toggleTab(item, index)"
      >{{item.label}}</div>
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
      default: '#fff',
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
      // 高亮颜色赋值
      let activeItem = document.getElementsByClassName('weui-bar__item_on')
      activeItem[0].style = 'color: ' + this.activeColor + ';border-bottom: 1px solid ' + this.activeColor + ''
    })
  },

  methods: {
    // 切换 tab
    toggleTab (item, index) {
      this.activeIndex = index
      this.$emit('checkTab', { item: item, index: index })
      let tabItem = document.getElementsByClassName('weui-navbar__item')
      for (let i = 0; i < tabItem.length; i++) {
        if (i === index) {
          tabItem[i].style = 'color: ' + this.activeColor + ';border-color: ' + this.activeColor + ''
        } else {
          tabItem[i].style = 'color: #666;border-color: #fff'
        }
      }
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
}
.weui-navbar__item {
  box-sizing: border-box;
  transition: 0.3s;
  padding: 0;
  height: 50px;
  border-bottom: 1px solid #eee;
  line-height: 50px;
  transition: 0.3s;
}
.weui-navbar__item.weui-bar__item_on {
  background-color: #fff;
  border-width: 0 0 2px 0;
  border-style: solid;
}
.weui-navbar__item:after {
  height: 20px;
  top: 15px;

  &:after {
    border-color: #eee;
  }
}
</style>
