# Actionsheet组件说明

方法调用

``` bash

that.$actionsheet({
	title: '请选择支付方式',   #标题
	lists: that.lists,        #选择列表   []
	sureChecked: function () {    #点击确定回调
		console.log(this.checkedId)
	}
})

```