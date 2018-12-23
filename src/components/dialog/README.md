# Dialog组件说明

方法调用

``` bash

this.$dialog({
	title: '系统提示',    #标题
	msg: '操作成功',      #提示消息
	isShowCancel: false,    #是否显示取消   true/false
	confirmSure: function () {   #点击确定回调函数
		console.log("点击了确定")
	}
})

```