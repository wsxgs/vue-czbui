<template>
  <div class="scroll-view">
    <slot name="list"></slot>

    <div ref="tag" style="height: 0;"></div>

    <div v-if="!isDone">
      <div v-show="isLoading" class="list-loading">
        <slot name="loadingTip">
            <loading></loading>
        </slot>
      </div>
    </div>

    <div class="list-donetip" v-show="!isLoading && isDone">
      <slot name="doneTip">没有更多数据了</slot>
    </div>
  </div>
</template>

<script type="text/babel">
import Loading from './loading.vue';
const getScrollview = function (el) {
  let currentNode = el;
  while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
    let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
    if (overflowY === 'scroll' || overflowY === 'auto') {
      return currentNode;
    }
    currentNode = currentNode.parentNode;
  }
  return window;
};
export default {
  name: 'infinitescroll',
  components: { Loading },
  data () {
    return {
      isLoading: false,
      isDone: false,
      num: 1
    }
  },
  props: {
    callback: {
      type: Function
    },
    distance: {
      default: 0,
      validator (val) {
        return /^\d*$/.test(val);
      }
    },
    scrollTop: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    init () {
      this.scrollview = getScrollview(this.$el);
      if (this.scrollTop) {
        if (this.scrollview === window) {
          window.scrollTo(0, 0)
        } else {
          this.scrollview.scrollTop = 0;
        }
      }

      this.scrollview.addEventListener('scroll', this.throttledCheck, false);

      this.$on('infinitescroll.loadedDone', () => {
        this.isLoading = false;
        this.isDone = true;
      });

      this.$on('infinitescroll.finishLoad', (ret) => {
        this.isLoading = false;
      });

      this.$on('infinitescroll.reInit', () => {
        this.isLoading = false;
        this.isDone = false;
      });
    },
    scrollHandler () {
      if (this.isLoading || this.isDone) return;

      const scrollview = this.scrollview;
      const contentHeight = document.body.offsetHeight;
      const isWindow = scrollview === window;
      const offsetTop = isWindow ? 0 : scrollview.getBoundingClientRect().top;
      const scrollviewHeight = isWindow ? contentHeight : scrollview.offsetHeight;

      if (!scrollview) {
        console.warn('Can\'t find the scrollview!');
        return;
      }

      if (!this.$refs.tag) {
        console.warn('Can\'t find the refs.tag!');
        return;
      }

      const tagOffsetTop = Math.floor(this.$refs.tag.getBoundingClientRect().top) - 1;
      const distance = !!this.distance && this.distance > 0 ? ~~this.distance : Math.floor(contentHeight / 10);

      if (tagOffsetTop > offsetTop && tagOffsetTop - (distance + offsetTop) * this.num <= contentHeight && this.$el.offsetHeight > scrollviewHeight) {
        this.isLoading = true;
        this.callback && this.callback();
        this.num++;
      }
    },
    throttle (method, context) {
      clearTimeout(method.tId);
      method.tId = setTimeout(() => {
        method.call(context);
      }, 30);
    },
    throttledCheck () {
      this.throttle(this.scrollHandler);
    }
  },
  mounted () {
    this.$nextTick(this.init);
  },
  beforeDestroy () {
    this.scrollview.removeEventListener('scroll', this.throttledCheck);
  }
}
</script>

<style lang="less" scoped>
.list-loading {
  width: 50px;
  height: 50px;
  position: relative;
  left: 50%;
  z-index: 9999;
  margin-left: -25px;
  svg {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
  }
}
.list-donetip {
  text-align: center;
  padding: 20px 0;
  color: #777;
  font-size: 14px;
}
</style>
