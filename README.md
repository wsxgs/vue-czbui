# 一只基于 Vue2.x 的移动端&微信 UI

## 安装

```base
npm install vue-czbui
```

## 使用

```base
import CZBUI from 'vue-czbui'
import 'vue-czbui/dist/czbui.css'
Vue.use(CZBUI)
```

## 示例

```base
1. npm install

2. npm run start
```

## 组件使用方法

### Toast

```base
this.$toast({
	type: 'loading',   # toast类型： success | warn  | error
	msg: '加载中',      # 提示内容
	timeout: '1500'      # 倒计时关闭
})
```

### Loading

显示

```base
this.$loading.show({
	msg: '加载中'    # 提示内容
})
```

隐藏

```base
this.$loading.hide()
```

### Dialog

```bash
this.$dialog({
	title: '系统提示',    #标题
	msg: '操作成功',      #提示消息
	isShowCancel: false,    #是否显示取消   true/false
	confirmSure: function () {   #点击确定回调函数
		console.log("点击了确定")
	}
})
```

### Actionsheet

```bash
that.$actionsheet({
	title: '请选择支付方式',   #标题
	lists: that.lists,        #选择列表   []
	sureChecked: function () {    #点击确定回调
		console.log(this.checkedId)
	}
})
```

### 其他组件使用可查看 example

## 参考、使用的项目

WEUI
