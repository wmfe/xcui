<template lang="md">
# Progress进度条

## 使用场景

## DEMO
<demo>
    <example title="basic">
        <xcui-progress :percent-info='percentInfo' :percent='percent' :show-info='true'></xcui-progress>
        <div style="width:200px">
        <xcui-progress :info-class-name="'info'" :percent='percent' :percent-info="'50%'" :height='height'></xcui-progress>
        </div>
    </example>
</demo>

## Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|percent-info|Number|0|百分比|可选|
|height | Number| 10|高度|可选|
|show-info|Boolean|false|是否展示信息|可选|


</template>


<script>
    export default {
        data() {
            return {
                percent: 50,
                percentInfo: '50/100',
                height: 5
            };
        }
    };
</script>

<style>
    .info{
        float: left;
        padding-right: 10px;
    }
</style>