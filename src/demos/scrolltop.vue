<template lang="md">
# ScrollTop 返回顶部

## 使用场景

如页面超过一屏，提供快捷返回顶部按钮。

> `scrollTop` 组件支持拖拽到`页面底部正中`和`页面右边正中`位置，当右下角位置遮挡到其他元素时，可以进行拖拽。


## 基本使用

::: demo 请滚动页面来查看右下角的返回顶部按钮。

```html

<tpl>
    <x-scrolltop @finish="finishBack"></x-scrolltop>
</tpl>

<script>
    export default {
        methods: {
            finishBack() {
                this.$Message.info('返回了顶部');
            }
        }
    };
</script>

```

:::



## Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|duration|Number|50|滚动持续间隔，单位为毫秒，值越小完成滚动越快|可选|
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
            this.$Message.info('返回了顶部');
        }
    }
};
</script>