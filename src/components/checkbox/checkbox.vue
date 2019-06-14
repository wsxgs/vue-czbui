
<template>
  <div class="weui-cells weui-cells_checkbox">
    <div
      class="weui-cell weui-check__label"
      :class="{checked: item.isChecked}"
      v-for="(item, index) in checkBoxList"
      :key="item.id"
      @click="checkItem(item, index)"
    >
      <div class="weui-cell__bd">{{item.label}}</div>
      <div class="weui-cell__ft">
        <i class="weui-icon-checked"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkBox',

  data () {
    return {

    }
  },

  props: ['checkBoxList', 'checkValueList'],

  components: {

  },

  computed: {

  },

  mounted () {
    this.$nextTick(() => {

    })
  },

  methods: {
    checkItem (item, index) {
      item.isChecked = !item.isChecked
      this.$set(this.checkBoxList, index, item)
      if (item.isChecked) {
        this.checkValueList.push(item.value)
      } else {
        let valueIndex = this.checkValueList.indexOf(item.value)
        this.checkValueList.splice(valueIndex, 1)
      }
    }
  }
}

</script>

<style lang='less' scoped>
.weui-icon-checked:before {
  content: "\EA01";
  color: #c9c9c9;
  font-size: 23px;
  display: block;
}
.checked .weui-icon-checked:before {
  content: "\EA06";
  color: #09bb07;
}
</style>
