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

::: demo 通过使用`header`, `footer`插槽，`show-header`、`show-footer`等属性都可控制对话框的展示效果。

```html

<tpl>
    <x-button @click="modal2 = true">自定义页头和页脚</x-button>
    <x-button @click="modal3 = true">不带标题栏</x-button>
    <x-button @click="modal4 = true">不带页脚</x-button>
    <x-modal v-model="modal2">
        <div slot="header" style="text-align:center; font-size: 16px;color: #46c3c1">
            <x-icon name="help-circled"></x-icon>
            <span>确认要执行全部操作吗？</span>
        </div>
        <p>执行后会将任务下发给所有同学！</p>   
        <div slot="footer" style="text-align:right">
            <x-button type="primary" @click="exec" size="large" :loading="isLoading">
            {{isLoading ? '执行中...' : '确认执行'}}</x-button>
        </div>
    </x-modal>

    <x-modal v-model="modal3" :show-header="false">
        <div>展示一段信息</div>
    </x-modal>

    <x-modal v-model="modal4" title="不带页脚" :show-footer="false">
        <div>展示一段信息</div>
    </x-modal>
</tpl>

<script>
    export default {
        data() {
            return {
                modal2: true,
                modal3: true,
                modal4: true
            }
        },
        methods: {
            exec() {
                this.isLoading = true;
                setTimeout(() => {
                    this.isLoading = false;
                    this.$Message.success('执行完成！');
                    this.modal2 = false;
                }, 2000);
            }
        }
    }
</script>

```
:::




## 自定义位置


::: demo 通过设置`styles`属性可以设置更多样式，如对话框的位置等。

```html

<tpl>
    <x-button type="primary" @click="modal5 = true">垂直居中的对话框</x-button>
    <x-button type="primary" @click="modal6 = true">距离顶部20px的对话框</x-button>
    <x-modal v-model="modal5" title="垂直居中的对话框"
        :styles="{
            top: '50%',
            transform: 'translateY(-50%)'}">
        <div>展示一段信息</div>
    </x-modal>
    <x-modal v-model="modal6" title="距离顶部20px的对话框"
        :styles="{top: '20px'}">
        <div>展示一段信息</div>
    </x-modal>
</tpl>

<script>
    export default {
        data() {
            return {
                isLoading: false,
                modal5: true,
                modal6: true
            }
        }
    }
</script>

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
|show-close-button|Boolean|true|是否显示右上角的关闭按钮|可选|
|show-ok-button|Boolean|true|是否显示确定按钮|可选|
|show-cancel-button|Boolean|true|是否显示取消按钮|可选|
|show-header|Boolean|true|是否显示整个标题栏|可选|
|show-footer|Boolean|true|是否显示整个底边栏|可选|
|ok-text|String|确定|确定按钮的文字|可选|
|cancel-text|String|取消|取消按钮的文字|可选|
|size|String|middle|预设对话框浮层的宽度大小。可选值：small/middle/large/full|可选|
|class-name|String|-|自定义样式类名|可选|
|styles|Object|-|设置.modal-wrapper的样式|可选|
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

完整引入XCUI：

```js
import Vue from 'vue'
import XCUI from 'xcui' // 全局引入
Vue.use(XCUI)
```

做好以上准备工作后，即可在组件任何位置调用vm.$confirm等来隐式地创建一个对话框了。



</template>
<script>
export default {
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
                this.$Message.success('执行完成！');
                this.modal2 = false;
            }, 2000);
        }
    }
};

</script>
