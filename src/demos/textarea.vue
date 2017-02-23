<template lang="md">
    # Textarea 多行输入框

    ## 概述

    用于大量文本输入和提交。

    <demo>
        <example title="基本使用">
            <xcui-row>
                <xcui-col :span="8">
                    <xcui-textarea placeholder="请输入内容" v-model="input"></xcui-textarea>
                </xcui-col>
            </xcui-row>
            <xcui-info>
                最基本的用法，使用`<xcui-textarea>`标签即可创建一个输入框。使用`v-model`赋值。默认的`textarea`宽度是`100%`, 默认的行数是`2`。
            </xcui-info>
        </example>
        <example title="禁用状态">
            <xcui-row>
                <xcui-col :span="8">
                    <xcui-textarea placeholder="请输入内容" v-model="input1" :disabled="true"></xcui-textarea>
                </xcui-col>
            </xcui-row>
            <xcui-info>
                通过使用`disabled`属性可以设置禁用状态。
            </xcui-info>
        </example>
        <example title="控制行数">
            <xcui-row>
                <xcui-col :span="8">
                    <xcui-textarea placeholder="请输入内容" v-model="input2" :rows="4"></xcui-textarea>
                </xcui-col>
            </xcui-row>
            <xcui-info>
                通过使用`rows`属性可以控制`textarea`的行数。
            </xcui-info>
        </example>
        <example title="自适应高度">
            <xcui-row :gutter="32">
                <xcui-col :span="8">
                    <xcui-textarea placeholder="请输入内容" v-model="input3" :autosize="true"></xcui-textarea>
                    <p>开启自适应高度</p>
                </xcui-col>
                <xcui-col :span="8">
                    <xcui-textarea placeholder="请输入内容" v-model="input4" :autosize="{minRows: 2, maxRows: 4}"></xcui-textarea>
                    <p>设置最小行数为2，最大行数为4</p>   
                </xcui-col>
            </xcui-row>
            <xcui-info>
                通过使用`autosize`属性可以控制`textarea`组件进行高度自适应。可以设置为`Boolean(true, false)`或者一个指定了`minRows(最小行数)`, `maxRows（最大行数）`的`Object`。
            </xcui-info>
        </example>
    </demo>


    ## Props
    | 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
    |-----|-----|-----|-----|----|----|----|
    |value|String, Number|无|和`v-model`的绑定值|必选||
    |placeholder|String|无|原生属性，输入框默认文本，用于提示|可选||
    |autosize|Boolean,Object|无|设置文本框是否自适应高度，为Object时需要设置`minRows`和`maxRows`|可选||
    |disabled|Boolean|false|是否禁用|可选||
    |readonly|Boolean|false|原生属性，是否只读|可选||
    |autofocus|Boolean|false|原生属性，自动获取焦点|可选||
    |name|String|无|原生属性|可选||
    |maxlength|Number|无|原生属性|可选||
    |minlength|Number|无|原生属性|可选||

    ## Events

    |事件名|说明|返回值|设置属性|
    |---|---|---|---|
    |change|数据改变时触发|event|`@change`|
    |focus|输入框获得焦点时触发|无|`@focus`|
    |blur|输入框失去焦点时触发|无|`@blur`|
</template>
<script>
    export default {
        data() {
            return {
                input: '',
                input1: '',
                input2: '',
                input3: '',
                input4: ''
            };
        }
    };   
</script>
