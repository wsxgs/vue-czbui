<template>
  <section class="scoll-page">

    <!-- 导航条 -->
    <Toolbar>
      <span slot="title">无限加载</span>
      <a href="" slot="right"></a>
    </Toolbar>

    <div id="scrollView">
      <infinitescroll :callback="loadList" ref="lsdemo">

        <div slot="list">
          <div class="item" v-for="item in list" :key="item.id">
            <img :src="item.img" alt="">
            <h3>{{item.title}}</h3>
          </div>
        </div>

        <!-- 数据全部加载完毕显示 -->
        <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

      </infinitescroll>
    </div>

  </section>
</template>

<script type="text/babel">

export default {
  components: {

  },
  data () {
    return {
      page: 1,
      pageSize: 10,
      list: [
        {
          img: "http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
          title: "标题标题标题标题标题",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          img: "http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
          title: "骆驼男装2016夏装男士短袖T恤 圆领衣服 印花男装体恤 半袖打底衫",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          img: "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
          title: "条纹短袖T恤男士韩版衣服大码潮流男装夏季圆领体恤2016新款半袖",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          img: "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
          title: "夏季青少年衣服男生潮牌t恤 男士 夏秋学生 日系棉短袖半袖男小衫",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          img: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
          title: "2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          img: "http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
          title: "男装衣服男夏t恤 男士短袖t恤圆领夏季潮牌宽松原宿风半截袖男",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          img: "http://img1.shikee.com/try/2016/06/03/12173920932544716516.jpg",
          title: "superman短袖t恤日潮牌男士日韩夏装水洗做旧修身个性短袖t恤衣服",
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          img: "http://img1.shikee.com/try/2016/09/28/14575020926479478831.jpg",
          title: "买一送二新款青少年潮男大码T恤 学生字半袖修身款衣服半截袖青年",
          marketprice: 56.23,
          productprice: 89.36
        }
      ]
    }
  },
  methods: {
    loadList () {
      this.$http.jsonp('http://list.ydui.org/getdata.php?type=backposition', {
        params: {
          page: this.page,
          pagesize: this.pageSize
        }
      }).then(function (response) {
        setTimeout(() => { // 请求太快了，延迟一下方便看效果！
          const _list = response.body;

          this.list = [...this.list, ..._list];

          if (_list.length < this.pageSize || this.page >= 4) {
            // 所有数据加载完毕
            this.$refs.lsdemo.$emit('infinitescroll.loadedDone');
            return;
          }

          // 单次请求数据完毕
          this.$refs.lsdemo.$emit('infinitescroll.finishLoad');

          this.page++;
        }, 1000);
      });
    }
  }
}
</script>

<style lang="">
#scrollView {
  width: 100%;
  height: 100vh;
  margin-top: -46px;
  padding-top: 46px;
  box-sizing: border-box;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
  margin-bottom: -1px;
}

.item {
  display: block;
  padding: 10px 15px 0 15px;
}

.item img {
  display: block;
  width: 100%;
}

.item h3 {
  font-size: 16px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px 0;
  font-weight: normal;
}
</style>