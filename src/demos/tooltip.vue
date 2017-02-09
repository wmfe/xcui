<template lang="md">
# Tooltip 工具提示

## 使用场景

- 需要hover或click时悬浮提示更多详情
- 支持自定义提示框样式
- 支持两种悬浮框过渡样式:  `scale` 和 `fadein`

## DEMO
<demo>
    <example title="Popover">
        <xcui-tooltip effect="fadein" placement="bottom" title="This is Title" :content="htmlContent">
          <button class="btn btn-default ">Hover tooltip on bottom</button>
        </xcui-tooltip>
        <xcui-tooltip effect="scale" placement="top" title="This is Title" content="Tooltip on left">
          <button class="btn btn-default ">Hover tooltip on left</button>
        </xcui-tooltip>
        <xcui-tooltip effect="fadein" placement="top" title="This is Title"  trigger="click"  content="Tooltip on top">
          <button class="btn btn-default "> Click tooltip on top</button>
        </xcui-tooltip>
        <xcui-tooltip effect="scale" placement="right" title="This is Title" trigger="click"  :title-class="'title-class'" :content-class="'content-class'" content="Tooltip on right">
          <button class="btn btn-default ">Click tooltip on right</button>
        </xcui-tooltip>
    </example>
</demo>

## Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|type|String|popover|提示类型|可选|
|trigger|String|hover|悬浮触发方式|可选|
|effect|String|scale|悬浮过渡样式|可选, scale/fadein|
|placement | String| 空字符串|悬浮相对位置|必选|
|title|String|空字符串|popover提示标题|可选|
|content| String|空字符串|提示内容|可选|
|classname|String|空字符串|自定义样式|可选|
|tooltip-class|String|Object|tootip提示框样式|可选|
|title-class|Object|Object|popover标题样式|可选|
|content-class|Object|Object|popover内容样式|可选|

</template>

</template>
<script>
export default {
    data() {
        return {
            htmlContent: '<h3>This is h3</h3><h4>This is h4</h4>'
        };
    }
};

</script>
<style>
.container{
    margin-top:100px;
}
.define-class{
    background:#ffab47;
    color:#fff;
    width: 100px;
}
.title-class{
    background:#46c3c1;
    color:#fff;
    width: 150px;
}
.content-class{
    width: 150px;
}
</style>