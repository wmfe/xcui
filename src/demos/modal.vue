<template lang="md">
# Modal 对话框

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。


## 基础使用

::: demo 基本使用，使用`x-modal`组件包裹需要展示的内容，`v-model`的绑定值用于控制显示隐藏。

```html

<tpl>
    <x-button type="primary" @click="modal1 = true">点击展示弹窗</x-button>
    <x-modal v-model="modal1" title="基础弹窗">
      <p>展示一段信息</p> 
    </x-modal>
</tpl>

<script>
    export default {
        data() {
            return {
                modal1: true
            }
        }
    }
</script>

```

:::

## 定义元素的显示

::: demo info

```html

<tpl>
    <x-button @click="modal2 = true">自定义页头和页脚</x-button>
    <x-button @click="modal3 = true">不带标题栏</x-button>
    <x-button @click="modal4 = true">不带关闭按钮</x-button>
    <x-button @click="modal5 = true">不带页脚</x-button>
    <x-modal v-model="modal2">
        <p slot="header" style="text-align:center; font-size: 16px;color: #46c3c1">
            <x-icon name="help-circled"></x-icon>
            <span>确认要执行全部操作吗？</span>
        </p>
        <p>执行后会将任务下发给所有同学！</p>   
        <p slot="footer" style="text-align:right">
            <x-button type="primary" @click="exec" size="large" :loading="isLoading">
            {{isLoading ? '执行中...' : '确认执行'}}</x-button>
        </p>
    </x-modal>
</tpl>

```

:::



## Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|v-model|Boolean|false|对话框是否显示|必选|
|content|String|-|对话框的主体内容，如果使用了默认slot的方式，则content无效|可选|
|title|String|-|对话框的标题，如果slot定义了header，则title无效|可选|
|mask-closable|Boolean|true|是否允许点击遮罩层关闭对话框|可选|
|scrollable|Boolean|false|打开Modal后，是否允许底页可滚动|可选|
|top|Number|100|设置浮层位置,单位是px|可选|
|show-close-button|Boolean|true|是否显示右上角的关闭按钮|可选|
|show-ok-button|Boolean|true|是否显示确定按钮|可选|
|show-cancel-button|Boolean|true|是否显示取消按钮|可选|
|show-header|Boolean|true|是否显示整个标题栏|可选|
|show-footer|Boolean|true|是否显示整个底边栏|可选|
|ok-text|String|确定|确定按钮的文字|可选|
|cancel-text|String|取消|取消按钮的文字|可选|
|size|String|middle|预设对话框浮层的宽度大小。可选值：small/middle/large/full|可选|
|class-name|String|-|自定义样式类名|可选|
|content-style|object|-|设置对话框内容主体的样式。该属性设置的是.Modal-body的样式|可选|

## Events
| 名字 | 描述 | 是否必选 |
|-----|-----|----|
|on-ok|点击确定的回调函数。回调函数如果返回真值(true)，则不再关闭对话框；如果返回假值(false)或不返回，则默认执行on-ok后关闭对话框|可选|
|on-cancel|点击取消和右上角关闭的回调函数。回调函数如果返回真值(true)，则不再关闭对话框；如果返回假值(false)或不返回，则默认执行on-cancel后关闭对话框|可选|

## Slot
| 名字 | 描述 |
|-----|-----|
|header|自定义页头|
|footer|自定义页脚内容|
|close|自定义右上角关闭按钮|
|-|对话框的主体内容|

## Modal 全局方法

XCUI为Modal提供了便捷的调用方式。在Vue.prototype中添加了快捷的方法：$Modal.show,$Modal.close, $confirm和$alert。因此，在Vue实例代码中，可以使用this.$Modal等方法快捷地创建一个对话框。
但需要在调用这些全局方法之前，先在项目中引入XCUI或xcuiInstall，并调用Vue.use安装。

引入方式一：

```js
import Vue from 'vue'
import XCUI from 'xcui' // 全局引入
Vue.use(XCUI)
```

引入方式二：

```js
import Vue from 'vue'
import {xcuiInstall} from 'xcui'
Vue.use(xcuiInstall)
```
做好以上准备工作后，即可在组件任何位置调用vm.$confirm等来隐式地创建一个对话框了。

1. **this.$Modal.show(options)**

| 参数 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|options|Object|-|对话框的参数，属性同props(props.show除外)。注意：使用驼峰式变量名，如**onOk**，而非on-ok|**必选**|

2. **this.$Modal.close()**

`$Modal.close()`提供隐式地关闭对话框全局实例的能力。

3. **this.$confirm(title, content, onOk, onCancel, isRawHTML)** 或 **this.$confirm(options, isRawHTML)**

写法1：
| 参数 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|title|String|-|对话框的标题|可选|
|content|String|-|对话框的内容，可通过isRawHTML指定是否解析为原生HTML|可选|
|onOk|Function|-|点击确定按钮的回调函数|可选|
|onCancel|Function|-|点击取消按钮或关闭按钮的回调函数|可选|
|options|Object|-|对content(String)是否解析为原生HTML|可选|

写法2：
| 参数 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|options|Object|-|对话框的参数，属性同props(props.show除外)。注意：使用驼峰式变量名，如**onOk**，而非on-ok|**必选**|
|isRawHTML|Boolean|false|对options.content(String)是否解析为原生HTML|可选|


4. **this.$alert(content, onOk)**

| 参数 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|content|String|-|对话框的内容|**必选**|
|onOk|Function|-|点击确定按钮的回调函数|可选|

</template>
<script>
let ModalDemo = {
    data() {
        return {
            modal1: false,
            modal2: false,
            isLoading: false,
            modal3: false,
            modal4: false,
            modal5: false,
            modal6: false,
            modal7: false,
            modal8: false,
            modal9: false,
            modal10: false
        };
    },
    methods: {
        exec() {
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false;
                this.$Message.info('下发完成');
                this.modal2 = false;
            }, 2000);
        }
    }
};

export default ModalDemo;
</script>
