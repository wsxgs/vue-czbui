<template>
  <div class="actionsheet" id="actionsheet">
    <div class="weui-mask" @click="closeActionsheet"></div>
    <div class="weui-actionsheet">
      <div class="weui-actionsheet__title">
        <p class="weui-actionsheet__title-text">{{title}}</p>
      </div>
      <div class="weui-actionsheet__menu">
        <div
          class="weui-actionsheet__cell"
          v-for="item in lists"
          :key="item.ids"
          @click="checkItem(item)"
        >
          <div class="cell-hd">
            <img v-bind:src="item.icon" alt v-if="item.icon" />
            {{item.label}}
          </div>
          <div class="cell-ft">
            <transition name="fade">
              <span class="weui-icon-checked" v-if="item.id === activeItem.id"></span>
            </transition>
          </div>
        </div>
      </div>
      <div class="weui-actionsheet__action" v-on:click="sureCheck">
        <div class="weui-actionsheet__cell">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Actionsheet'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.weui-mask {
  background: #000;
  opacity: 0;
  transition: 0.3s;
}
.on .weui-mask {
  opacity: 0.6;
}
.on .weui-actionsheet {
  transform: translate(0, 0);
}
.weui-actionsheet__cell {
  display: flex;
  padding: 0 15px;
  height: 46px;
  line-height: 46px;
  text-align: left;
  font-size: 16px;
}
.weui-actionsheet__action .weui-actionsheet__cell {
  justify-content: center;
}
.weui-actionsheet__cell .cell-hd {
  flex: 1;
}
.weui-actionsheet__cell .cell-hd img {
  display: block;
  float: left;
  margin: 13px 10px 0 0;
  height: 20px;
}
.weui-actionsheet__cell .cell-ft {
  flex: 1;
  text-align: right;
}
.weui-icon-checked:before {
  content: "\EA06";
  color: #09bb07;
  font-size: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
