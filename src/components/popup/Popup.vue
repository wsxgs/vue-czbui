<template>
  <section class="popup" :class="position">
    <transition name="popup">
      <div class="popup-content" v-show="isShowPopup">
        <div class="popup-header">
          <h3>{{title}}</h3>
          <i class="icon icon-close" v-if="position === 'bottom'" @click="closePopup()"></i>
        </div>
        <div class="popup-body" ref="popupBody">
          <slot name="content"></slot>
        </div>
        <div class="popup-footer" v-if="position === 'center'">
          <div class="button" type="button" @click="closePopup()">{{btnText}}</div>
        </div>
      </div>
    </transition>
    <transition name="fades">
      <div class="mask" v-show="isShowPopup" @click="closePopup()"></div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'Popup',
  data () {
    return {

    }
  },
  props: {
    // 位置
    position: {
      type: String,
      default: 'center'
    },
    // 是否显示
    isShowPopup: {
      type: Boolean,
      default: false
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 按钮文字
    btnText: {
      type: String,
      default: '确定'
    }
  },
  mounted () {
  },
  methods: {
    closePopup () {
      this.$refs.popupBody.scrollTop = '0'
      this.$emit('closePopup', '')
    }
  },
  watch: {
    isShowPopup (val) {
      if (val) {
        document.body.style.position = 'fixed'
        document.body.style.width = '100%'
      } else {
        document.body.style.position = ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.popup {
  .mask {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99;
  }

  .fades-enter-active {
    opacity: 1;
    transition: 0.5s;
  }

  .fades-leave-active {
    opacity: 1;
    transition: 0.5s;
  }

  .fades-enter,
  .fades-leave-to {
    opacity: 0;
  }
}

.center {
  .popup-content {
    position: fixed;
    width: 86%;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    background-color: #fff;
    border-radius: 10px;

    .popup-header {
      padding: 20px 0 0px 0;
      text-align: center;

      h3 {
        font-size: 16px;
        font-weight: normal;
        color: #333;
      }
    }

    .popup-body {
      height: 50vh;
      margin: 15px;
      font-size: 14px;
      color: #666;
      line-height: 1.5;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
    }

    .popup-footer {
      border-top: 1px solid #eee;

      .button {
        display: block;
        width: 100%;
        text-align: center;
        line-height: 42px;
        font-size: 16px;
        color: #07c160;
      }
    }
  }

  .popup-enter-active {
    opacity: 1;
    transform: translate(-50%, -50%);
    transition: 0.5s ease-in-out;
  }

  .popup-leave-active {
    opacity: 1;
    transform: translate(-50%, -50%);
    transition: 0.5s ease-in-out;
  }

  .popup-enter {
    opacity: 0;
    transform: translate(-50%, -65%);
  }

  .popup-leave-to {
    opacity: 0;
    transform: translate(-50%, -35%);
  }
}

.bottom {
  .popup-content {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: #fff;
    border-radius: 5px 5px 0 0;

    .popup-header {
      display: flex;
      height: 43px;
      padding: 0 15px;
      border-bottom: 1px solid #eee;
      line-height: 42px;
      align-items: center;

      h3 {
        flex: 1;
        font-size: 16px;
        font-weight: normal;
        color: #333;
      }

      i {
        position: relative;
        display: block;
        width: 20px;
        height: 20px;

        &:after,
        &:before {
          position: absolute;
          content: "";
          width: 100%;
          height: 1px;
          top: 50%;
          margin-top: -0.5px;
          background-color: #666;
        }

        &:before {
          transform: rotate(-45deg);
        }
        &:after {
          transform: rotate(45deg);
        }
      }
    }

    .popup-body {
      height: 50vh;
      margin: 15px;
      font-size: 14px;
      color: #666;
      line-height: 1.5;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
    }

    .popup-footer {
      border-top: 1px solid #eee;

      button {
        display: block;
        width: 100%;
        text-align: center;
        line-height: 42px;
        font-size: 16px;
        color: #07c160;
      }
    }
  }

  .popup-enter-active,
  .popup-leave-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: 0.5s ease-in-out;
  }

  .popup-enter,
  .popup-leave-to {
    opacity: 0;
    transform: translate(0, 100%);
  }
}
</style>
