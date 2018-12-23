# Toast组件说明

方法调用

``` bash

this.$toast.show({
	type: 'loading',   # toast类型： loading | success | warn  | error
	msg: '加载中',      # 提示内容
	timeout: '1500'      # 倒计时关闭
})


```

手动关闭

``` bash

this.$toast.hide()

```