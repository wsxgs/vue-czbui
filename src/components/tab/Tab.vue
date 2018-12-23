<!--  -->
<template>
  <div class="weui-tab">
    <div class="weui-navbar">
      <div class="weui-navbar__item" v-for="(item, index, key) in tabList" v-bind:class="{'weui-bar__item_on': activeIndex === index}" v-bind:key="key" v-on:click="toggleTab(item, index)">
        {{item.label}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab',

  data () {
    return {
      activeIndex: 0
    }
  },

  props: ['tabList', 'activeColor'],

  components: {

  },

  computed: {

  },

  mounted () {
    this.$nextTick(() => {
      let activeItem = document.getElementsByClassName('weui-bar__item_on')
      activeItem[0].style = "color: " + this.activeColor + ";border-bottom: 1px solid " + this.activeColor + ""
    })
  },

  methods: {
    toggleTab (item, index) {
      this.activeIndex = index
      this.$emit('checkTab', item)
      let tabItem = document.getElementsByClassName('weui-navbar__item')
      let activeItem = document.getElementsByClassName('weui-bar__item_on')
      for (let i = 0; i < tabItem.length; i++) {
        if (i === index) {
          tabItem[i].style = "color: " + this.activeColor + ";border-color: " + this.activeColor + ""
        } else {
          tabItem[i].style = "color: #666;border-color: #fff"
        }
      }
    }
  }
}

</script>
<style lang='' scoped>
.weui-navbar {
  height: 50px;
  overflow: hidden;
  background-color: #fff;
}
.weui-navbar__item {
  box-sizing: border-box;
  transition: 0.3s;
  padding: 0;
  height: 50px;
  line-height: 50px;
}
.weui-navbar__item.weui-bar__item_on {
  background-color: #fff;
  border-bottom: 2px solid #fff;
}
.weui-navbar__item:after {
  height: 20px;
  top: 15px;
}
</style>
