<template lang="md">
# Message信息提示

Message提供一种不打断用户操作的轻量级提示方式，顶部居中显示并自动消失。常用于主动操作后的信息提示。

#### 支持4种信息展示类型
- info：普通信息提示
- success：成功信息提示
- error：错误信息提示
- warning：警告信息提示

`this.$Message.show(content:String, type: String, duration: Number)`

## DEMO

<demo>
    <example title="基础用法">
        <button class="btn btn-info" @click="$Message.show('this is an info message')">info</button>
        <button class="btn btn-success" @click="$Message.show('this is a success message', 'success')">success</button>
        <button class="btn btn-danger" @click="$Message.show('this is an error message', 'error')">error</button>
        <button class="btn btn-warning" @click="$Message.show('this is a info warning', 'warning')">warning</button>
    </example>
</demo>

## Props

| 参数 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|content|String|-|提示信息内容|**必选**|
|type|String|info|指定提示信息的类型，默认为info类型；可自行配置，有四种选择: info、success、error、warning|可选|
|duration|Number|-|单位: ms, 默认**3000**毫秒后自动关闭。设置0无效|可选|

</template>

<script>
import Vue from 'vue';
import XCUI from '../components/index.js';
Vue.use(XCUI);
let Message = XCUI.Message;

export default {
    components: {
        Message
    }
};
</script>
