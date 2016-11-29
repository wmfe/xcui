<template lang="md">
# Tag标签

## 使用场景

- 标记事物的属性、分类等特性
- 支持关闭标签、点击标签
- 支持禁用标签
- 支持自定义标签样式

## DEMO
<demo>
	<example title="基本使用">
        <xcui-tag :text="'标签'"></xcui-tag>
        <xcui-tag :disabled="true" :text="'禁用标签'"></xcui-tag>
        <xcui-tag :closeable="true" :text="'关闭'" @close="closeclick"></xcui-tag>
        <xcui-tag :closeable="true" @close="closeclick" :keys.sync="key" :text="'点击不关闭'" :aftercloseisshow.sync="afterCloseIsShowTag" @click="click"></xcui-tag>
        <xcui-tag :class="'define-class'" :text="'自定义样式'" @click="click"></xcui-tag>
    </example>
    <example title="添加标签">
        <span v-for="item in tags">
            <xcui-tag :closeable="true" :text="item.text"></xcui-tag>
        </span>
        <input type="button" class="btn btn-primary" value="添加" @click="addTag"/>
    </example>
</demo>


## Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|text|String|空字符串|内容|必选|
|disabled | Boolean| false|是否禁用|可选|
|closeable|Boolean|false|是否可关闭|可选|
|close|function|无|关闭时回调|可选|
|click|function|无|点击标签事件|可选|
|showTag| Boolean|true|是否展示tag|可选|
|aftercloseisshow| Boolean|false|关闭回调后是否展示Tag|可选|
|key|String|空字符串|存储数据|可选|
|class|String|空字符串|自定义样式|可选|
</template>

<script>
export default {
    data() {
        return {
            tags: [{text: '新标签', key: 'test'}],
            showTag: false,
            index: 1,
            key: 'data',
            afterCloseIsShowTag: true
        };
    },
    methods: {
        closeclick() {
            alert('testValidateSuccess');
        },
        addTag() {
            if (this.tags === null) {
                this.tags = [];
            }
            this.tags.push({text: `新标签${this.index++}`, key: this.index});
        },
        click() {
            alert('clicksuccess');
        }
    }
};

</script>

<style>
.define-class{
    background:#ffab47;
    color:#fff;
    border-radius: 6px;
}

.define-class:hover{
    background:red;
}
</style>

