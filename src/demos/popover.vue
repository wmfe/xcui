<template lang="md">
# Tootip&Popover 悬浮提示框

## 使用场景
1、需要hover或click时悬浮提示更多详情
2、支持自定义提示框样式
3、支持自定义悬浮相对位置
4、支持两种悬浮框过渡样式
5、支持局部页面异步渲染后更新位置

## DEMO
<demo>
    <example title="Tooltip">
        <div class="container" id="container">
            <v-popover
            type="tooltip"
            effect="fadein"
            placement="right"
            trigger="click"
            :tooltip-class="'define-class'"
            content="This is a tooltip!" >
                <button class="btn btn-default ">click tooltip on right</button>
            </v-popover>
            <v-popover
            type="tooltip"
            effect="scale"
            placement="bottom"
            content="This is a tooltip!">
                <button class="btn btn-default ">hover tooltip on bottom</button>
            </v-popover>
        </div>
    </example>
    <example title="Popover">
        <v-popover
          effect="fadein"
          placement="bottom"
          title="This is Title"
          trigger="click"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
          <button class="btn btn-default ">Popover on bottom</button>
        </v-popover>
        <v-popover
          effect="scale"
          placement="left"
          title="This is Title"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
          <button class="btn btn-default ">Popover on left</button>
        </v-popover>
        <v-popover
          effect="fadein"
          placement="top"
          title="This is Title"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
          <button class="btn btn-default ">Popover on top</button>
        </v-popover>
        <v-popover
          effect="scale"
          placement="right"
          title="This is Title"
          :title-class="'title-class'"
          :content-class="'content-class'"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
          <button class="btn btn-default ">Popover on right</button>
        </v-popover>
    </example>
</demo>

## Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|type|String|popover|提示类型|可选|
|trigger|String|hover|悬浮触发方式|可选|
|effect|String|scale|悬浮过渡样式|可选|
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
import vPopover from '../components/popover';
export default {
    components: {
        vPopover
    },
    data() {
        return {
        };
    },
    methods: {
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