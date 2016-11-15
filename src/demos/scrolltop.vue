<template lang="md">
# ScrollTop返回顶部按钮

## 使用场景
- 对应长页面提供可返回顶部按钮
- 支持设置返回位置定位元素
- 支持设置滚动间隔速度
- 支持用户拖拽按钮位置
- 支持获取回调事件设置函数
- 支持自定义按钮样式

## DEMO
<demo>
	<example title="基本使用">
			<xcui-scrolltop target-element="" :during="60" @finish="finishBack" class-name=""></xcui-scrolltop>
	</example>
</demo>

## Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|during|Number|50|滚动持续间隔，值越小完成滚动越快|可选|
|target-element|String|空字符串|定位元素ID名称，返回指定元素顶部|可选，此属性未赋值时，返回页面顶部|
|finish|Function||返回顶部完成，事件回调|可选|
|class-name| String|空字符串|自定义样式|可选|
</template>
<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        finishBack() {
        }
    },
    ready() {
    }
};
</script>
<style>
#content1{
	height: 100px;
	width: 1000px;
}
#content2{
	height: 700px;
	width: 1000px;
}
.scrolltop-define-class{
	color:red;
	font-size:10px;
}
</style>