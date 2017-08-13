<template lang="md">
# Tooltip 文字提示

鼠标移入则显示提示，移出消失，气泡浮层不承载过于复杂的文本和操作。

可用来代替系统默认的 `title` 提示，提供一个按钮/文字/操作的文案解释。

## 触发工具提示的方式

::: demo 通过设置`trigger`属性来设置触发工具提示的方式，默认为`hover`。

```html

<tpl>
    <x-tooltip content="Sample Text" title="Title">
          <x-button class="btn">hover触发</x-button>
    </x-tooltip>
    <x-tooltip content="Sample Text" title="Title" trigger="click">
          <x-button class="btn">click触发</x-button>
    </x-tooltip>
    <x-tooltip content="Sample Text" title="Title" trigger="focus">
          <x-button class="btn">focus触发</x-button>
    </x-tooltip>
    <div style="margin-left: 15px; width: 180px; display:inline-block;">
        <x-tooltip content="Sample Text" title="Title" trigger="focus">
              <x-input placeholder="focus触发">focus触发</x-input>
        </x-tooltip>
    </div>
</tpl>
```

:::


## 文字提示的对齐方式

::: demo Tooltip提供了四种展示方向`top`, `bottom` `left`, `right`和三种对齐位置`start`, `end`, 默认空。通过设置属性如`placement="top-start"`来控制文字提示的位置和对齐方式。

```html

<tpl>
    <div class="box">
        <div class="top">
            <x-tooltip content="Sample Text" placement="top">
                <x-button class="btn">上中</x-button>
            </x-tooltip>
            <x-tooltip content="Sample Text" placement="top-start">
                <x-button class="btn">上左</x-button>
            </x-tooltip>
            <x-tooltip content="Sample Text" placement="top-end">
                <x-button class="btn">上右</x-button>
            </x-tooltip>
        </div>
        <div class="left">
            <x-tooltip content="Sample Text" placement="left-start">
                <x-button class="btn">左上</x-button>
            </x-tooltip>
            <x-tooltip content="Sample Text" placement="left">
                <x-button class="btn">左中</x-button>
            </x-tooltip>
            <x-tooltip content="Sample Text" placement="left-end">
                <x-button class="btn">左下</x-button>
            </x-tooltip>
        </div>
        <div class="right">
            <x-tooltip content="Sample Text" placement="right-start">
                <x-button class="btn">右上</x-button>
            </x-tooltip>
            <x-tooltip content="Sample Text" placement="right">
                <x-button class="btn">右中</x-button>
            </x-tooltip>
            <x-tooltip content="Sample Text" placement="right-end">
                <x-button class="btn">右下</x-button>
            </x-tooltip>
        </div>
        <div class="bottom">
            <x-tooltip content="Sample Text" placement="bottom-start">
                <x-button class="btn">下左</x-button>
            </x-tooltip>
            <x-tooltip content="Sample Text" placement="bottom">
                <x-button class="btn">下中</x-button>
            </x-tooltip>
            <x-tooltip content="Sample Text" placement="bottom-end">
                <x-button class="btn">下右</x-button>
            </x-tooltip>
        </div>
    </div>
</tpl>

<style>
    .box {
        width: 400px;
    }
    .top {
        text-align: center;
    }
    .left {
        float: left;
        width: 60px;
    }
    .right {
        float: right;
        width: 60px;
    }
    .bottom {
        text-align: center;
        clear: both;
    }
    .btn {
        margin: 6px;
    }
</style>

```

:::


## 展示更多内容

::: demo 通过使用名为`content`的具名slot来往文字提示中填充更多信息。在使用此slot后`content`属性无效。

```html

<tpl>
    <x-tooltip placement="top">
        <div slot="content">这是第一行信息<br>这是第二行信息</div>
        <x-button>展示多行信息</x-button>
    </x-tooltip>
</tpl>

```

:::

## 自定义过渡效果

::: demo 可通过设置`transition`属性来改变默认的过渡效果。

```html

<tpl>
    <x-tooltip placement="top" transition="my-fade" content="Sample Text">
        <x-button>自定义过渡效果</x-button>
    </x-tooltip>
</tpl>

<style>
    .my-fade-enter-active, .my-fade-leave-active {
        transition: opacity .5s
    }
    .my-fade-enter, .my-fade-leave-to {
        opacity: 0
    }
</style>

```

:::


## Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|-----|-----|-----|
|content|String|无|显示的内容|可选||
|trigger|String|click|触发方式|可选|hover,focus,click|
|placement|String|bottom|出现的位置|可选|top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end|
|offset|Number|0|默认的偏移量|可选||
|transition|String|popover-zoom|过渡效果名（如修改，需要自行增加相关css，具体见[Vue过渡系统](https://vuejs.org/v2/guide/transitions.html#CSS-Transitions)）|可选||
|visible-arrow|Boolean|true|是否显示Tooltip箭头|可选|true, false|
|open-delay|Number|200|延迟出现，单位是毫秒|可选||
|popper-class|String|无|tooltip弹窗的类名|可选||


## Slot

|名称|说明|
|---|---|
|default|默认内容，放在`<x-tooltip></x-tooltip>`之间即可|
|content|工具提示的内容|



</template>

<script>
require('#/tooltip.less');
require('#/button.less');
require('#/input.less');
export default {

}
</script>


<style lang="less">
    .demo-tooltip {
        .box {
            width: 400px;
        }
        .top {
            text-align: center;

        }
        .left {
            float: left;
            width: 60px;
        }
        .right {
            float: right;
            width: 60px;
        }
        .bottom {
            text-align: center;
            clear: both;
        }
        .btn {
            margin: 6px;
        }
    }
    .my-fade-enter-active, .my-fade-leave-active {
        transition: opacity .5s
    }
    .my-fade-enter, .my-fade-leave-to {
        opacity: 0
    }
</style>
