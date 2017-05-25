<template lang="md">
# Popover 气泡提示

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。


## 触发气泡提示的方式

::: demo 通过设置`trigger`属性来设置触发气泡提示的方式，默认为`click`。

```html

<tpl>
    <x-popover :content="content" title="Title">
          <x-button class="btn">click触发</x-button>
    </x-popover>
    <x-popover :content="content" title="Title" trigger="hover">
          <x-button class="btn">mouseover触发</x-button>
    </x-popover>
    <x-popover :content="content" title="Title" trigger="focus">
          <x-button class="btn">focus触发</x-button>
    </x-popover>
    <div style="margin-left: 15px; width: 180px; display:inline-block;">
        <x-popover :content="content" title="Title" trigger="focus">
              <x-input placeholder="focus触发">focus触发</x-input>
        </x-popover>
    </div>
</tpl>

<script>
    export default {
        data() {
            return {
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
            }
        }
    }
</script>

```

:::

## 气泡提示的对齐方式

::: demo Popover提供了四种展示方向`top`, `bottom` `left`, `right`和三种对齐位置`start`, `end`, 默认空。通过设置属性如`placement="top-start"`来控制文字提示的位置和对齐方式。

```html

<tpl>
    <div class="box">
        <div class="top">
            <x-popover :content="content" title="Title" placement="top">
                <x-button class="btn">上中</x-button>
            </x-popover>
            <x-popover :content="content" title="Title" placement="top-start">
                <x-button class="btn">上左</x-button>
            </x-popover>
            <x-popover :content="content" title="Title" placement="top-end">
                <x-button class="btn">上右</x-button>
            </x-popover>
        </div>
        <div class="left">
            <x-popover :content="content" title="Title" placement="left-start">
                <x-button class="btn">左上</x-button>
            </x-popover>
            <x-popover :content="content" title="Title" placement="left">
                <x-button class="btn">左中</x-button>
            </x-popover>
            <x-popover :content="content" title="Title" placement="left-end">
                <x-button class="btn">左下</x-button>
            </x-popover>
        </div>
        <div class="right">
            <x-popover :content="content" title="Title" placement="right-start">
                <x-button class="btn">右上</x-button>
            </x-popover>
            <x-popover :content="content" title="Title" placement="right">
                <x-button class="btn">右中</x-button>
            </x-popover>
            <x-popover :content="content" title="Title" placement="right-end">
                <x-button class="btn">右下</x-button>
            </x-popover>
        </div>
        <div class="bottom">
            <x-popover :content="content" title="Title" placement="bottom-start">
                <x-button class="btn">下左</x-button>
            </x-popover>
            <x-popover :content="content" title="Title" placement="bottom">
                <x-button class="btn">下中</x-button>
            </x-popover>
            <x-popover :content="content" title="Title" placement="bottom-end">
                <x-button class="btn">下右</x-button>
            </x-popover>
        </div>
    </div>
</tpl>

<script>
    export default {
        data() {
            return {
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
            }
        }
    }
</script>

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


## Popconfirm 确认提示框

::: demo 确认提示框是一种比`modal`更轻量的操作，常用于二次确认。使用`confirm`属性开启此模式。在确认模式下`content`内容无效。确认的操作支持异步，在回调参数中可以设置`confirmLoading`来开启确认按钮的loading效果。具体请看demo代码。

```html

<tpl>
    <x-popover confirm
        placement="top" 
        title="确定要删除这些数据吗？"
        :on-ok="ok"
        :on-cancel="cancel">
        <x-button :loading="loading">点击确认</x-button>
    </x-popover>
</tpl>

<script>
    export default {
        methods: {
            ok(e, popover) {
                e.preventDefault();
                popover.confirmLoading = true;
                setTimeout(() => {
                    this.$Message.success('已经成功删除');
                    popover.showPopper = false;
                    popover.confirmLoading = false;
                }, 2000);
            },
            cancel(e) {
                this.$Message.info('已取消');
            }
        }
    };
</script>

```

:::


## 展示更多内容

::: demo 通过使用名为`content`的具名slot来往文字提示中填充更多信息。在使用此slot后`content`属性无效。

```html

<tpl>
    <x-popover placement="top" title="提示">
        <div slot="content">这是第一行信息<br>这是第二行信息</div>
        <x-button>展示多行信息</x-button>
    </x-popover>
</tpl>

```

:::

## 自定义过渡效果

::: demo 可通过设置`transition`属性来改变默认的过渡效果。

```html

<tpl>
    <x-popover placement="top" transition="my-fade" title="Title" :content="content">
        <x-button>自定义过渡效果</x-button>
    </x-popover>
</tpl>

<script>
    export default {
        data() {
            return {
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
            }
        }
    }
</script>

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
|title|String|无|标题|可选||
|content|String|无|显示的内容|可选||
|trigger|String|click|触发方式|可选|hover,focus,click|
|placement|String|bottom|出现的位置|可选|top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end|
|offset|Number|0|默认的偏移量|可选||
|transition|String|popover-zoom|过渡效果名（如修改，需要自行增加相关css，具体见[Vue过渡系统](https://vuejs.org/v2/guide/transitions.html#CSS-Transitions)）|可选||
|visible-arrow|Boolean|true|是否显示Tooltip箭头|可选|true, false|
|open-delay|Number|200|延迟出现，单位是毫秒|可选||
|popper-class|String|无|tooltip弹窗的类名|可选||
|confirm|Boolean|false|是否开启确认提示框模式|可选||
|on-ok|Function|无|确认时的操作，仅在`confirm`模式下有效,返回值为(event, VueComponent)，即当前事件和组件实例|可选||
|on-cancel|Function|无|取消时的操作，仅在`confirm`模式下有效,返回值为当前event|可选||
|ok-text|String|无|确认按钮显示文字，仅在`confirm`模式下有效|可选||
|cancel-text|String|无|取消按钮显示文字，仅在`confirm`模式下有效|可选||

## Slot

|名称|说明|
|---|---|
|default|默认内容，放在`<x-popover></x-popover>`之间即可|
|content|工具提示的内容|


</template>
<script>
export default {
    data() {
        return {
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            loading: false
        };
    },
    methods: {
        ok(e, popover) {
            e.preventDefault();
            popover.confirmLoading = true;
            setTimeout(() => {
                this.$Message.success('已经成功删除');
                popover.showPopper = false;
                popover.confirmLoading = false;
            }, 2000);
        },
        cancel(e) {
            this.$Message.info('已取消');
        }
    }
};

</script>

<style lang="less">
    .demo-popover {
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
