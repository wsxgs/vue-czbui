
<template>
  <div class="toolbar-wrap">
    <div class="toolbar">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <span class="back" @click="back" v-if="isShowBackIcon"></span>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',

  data () {
    return {
    }
  },

  props: {
    isShowBackIcon: {
      type: Boolean,
      default: true
    }
  },

  components: {

  },

  computed: {

  },

  mounted () {
    this.$nextTick(() => {

    })
  },

  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}

</script>
<style lang='less' scoped>
.toolbar-wrap {
  height: 46px;
}

.toolbar {
  position: fixed;
  box-sizing: border-box;
  padding: 0 15px;
  height: 46px;
  line-height: 46px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  width: 100%;
  z-index: 99;
  top: 0;
  left: 0;
}

.toolbar .back {
  position: relative;
  width: 30px;
  height: 46px;
  float: left;
  display: black;
  margin-left: -100%;
}

.toolbar .back:after {
  content: " ";
  display: inline-block;
  height: 10px;
  width: 10px;
  border-width: 0px 0px 2px 2px;
  border-color: #c8c8cd;
  border-style: solid;
  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  position: relative;
  top: -2px;
  position: absolute;
  top: 50%;
  margin-top: -6px;
  left: 2px;
}

.toolbar .title {
  position: relative;
  float: left;
  width: 100%;
  box-sizing: border-box;
  padding: 0 32px 0 32px;
  text-align: center;
  font-size: 16px;
  color: #333;
}

.toolbar .right {
  float: left;
  width: 32px;
  height: 46px;
  position: relative;
  right: 32px;
  margin-right: -32px;
  text-align: right;
  font-size: 14px;
  color: #666;
}
</style>
