<!-- Tab -->
<template>
  <div class="checkbox">

    <!-- 导航条 -->
    <Toolbar>
      <span slot="title">复选框</span>
      <a href="" slot="right"></a>
    </Toolbar>

    <div class="weui-cells weui-cells_checkbox">
      <div class="weui-cell weui-check__label">
        <div class="weui-cell__bd">
          选中值
        </div>
        <div class="weui-cell__ft" >
          {{checkValueList}}
        </div>
      </div>
    </div>

    <checkBox :checkBoxList="checkBoxList" :checkValueList="checkValueList"></checkBox>

  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      checkBoxList: [
        {
          label: '选项一',
          value: '1'
        },
        {
          label: '选项二',
          value: '2'
        },
        {
          label: '选项三',
          value: '3'
        }
      ],
      checkValueList: []
    }
  },
  methods: {
    checkItem (val) {
      this.switchStatus = val
      console.log(this.checkBoxList)
      console.log(this.checkValueList)
    }
  }
}

</script>

<style scoped>
</style>
