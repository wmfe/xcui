<template lang="md">
# Dialog 快捷对话框

使用XCUI绑定的快捷方法`$Dialog`, 快速创建一个对话框。

> XCUI为`Vue.prototype`添加了全局方法`$Dialog`, 可以直接使用如`this.$Dialog.alert('message')`的方式进行信息提示操作。
> 当然，您也可以使用`import Dialog from 'xcui/lib/dialog'` 的单组件方式调用。
> Dialog在XCUI中被注册为一个[Vue 插件](https://vuejs.org/v2/guide/plugins.html), 在**单文件引入**时，请使用`Vue.use(Dialog)` 挂载，再进行使用。



## 消息提示对话框（模拟原生alert）

::: demo 使用`this.$Dialog.alert(options)`来使用警告对话框，具体配置请看API。

```html

<tpl>
    <x-button type="primary" @click="dialog1">点击展示对话框</x-button>
</tpl>

<script>
    export default {
        methods: {
            dialog1() {
                this.$Dialog.alert('这是一段信息', function () {
                    this.$Message.info('点击了确定');
                });
            }
        }
    };
</script>

```

:::

## 确认操作对话框（模拟原生confirm）

::: demo 使用`this.$Dialog.confirm(options)`来使用警告对话框，具体配置请看API。

```html

<tpl>
    <x-button type="primary" @click="dialog2">点击展示对话框</x-button>
</tpl>

<script>
    export default {
        methods: {
            dialog2() {
                this.$Dialog.confirm('删除确认', '删除后无法恢复，确认吗？', function () {
                    this.$Message.info('点击了确定');
                }, function () {
                    this.$Message.warning('操作被取消了');
                });
            }
        }
    };
</script>
```

:::

## 快捷模态框

::: demo 使用`this.$Dialog.show(options)`来使用更多自定义功能的对话框，具体配置请看API。

```html

<tpl>
    <x-button type="primary" @click="dialog3">点击展示对话框</x-button>
</tpl>

<script>
    export default {
        methods: {
            dialog3() {
                this.$Dialog.show({
                    title: '自定义标题',
                    content: '这是一段信息',
                    maskClosable: true,
                    showCloseButton: true,
                    showOkButton: true,
                    showCancelButton: true,
                    showHeader: true,
                    showFooter: true,
                    size: 'large',
                    onOk() {
                        this.$Message.info('点击了确定');
                    },
                    onCancel() {
                        this.$Message.warning('操作被取消了');
                    }
                });
            }
        }
    };
</script>

```

:::


## API

###  **this.$Dialog.$alert(content, onOk)**

| 参数 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|content|String|-|对话框的内容|**必选**|
|onOk|Function|-|点击确定按钮的回调函数|可选|

### **this.$confirm(title, content, onOk, onCancel, isRawHTML)**

| 参数 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|title|String|-|对话框的标题|可选|
|content|String|-|对话框的内容，可通过isRawHTML指定是否解析为原生HTML|可选|
|onOk|Function|-|点击确定按钮的回调函数|可选|
|onCancel|Function|-|点击取消按钮或关闭按钮的回调函数|可选|
|options|Object|-|对content(String)是否解析为原生HTML|可选|

###  **this.$Dialog.show(options)**

| 参数 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|content|String|-|对话框的主体内容，如果使用了默认slot的方式，则content无效|可选|
|title|String|-|对话框的标题，如果slot定义了header，则title无效|可选|
|maskClosable|Boolean|true|是否允许点击遮罩层关闭对话框|可选|
|scrollable|Boolean|false|打开Modal后，是否允许底页可滚动|可选|
|showCloseButton|Boolean|true|是否显示右上角的关闭按钮|可选|
|showOkButton|Boolean|true|是否显示确定按钮|可选|
|showCancelButton|Boolean|true|是否显示取消按钮|可选|
|showHeader|Boolean|true|是否显示整个标题栏|可选|
|showFooter|Boolean|true|是否显示整个底边栏|可选|
|okText|String|确定|确定按钮的文字|可选|
|cancelText|String|取消|取消按钮的文字|可选|
|size|String|middle|预设对话框浮层的宽度大小。可选值：small/middle/large/full|可选|
|className|String|-|自定义样式类名|可选|
|styles|Object|-|设置.modal-wrapper的样式|可选|
|contentStyle|object|-|设置对话框内容主体的样式。该属性设置的是.Modal-body的样式|可选|

### **this.$Dialog.close()**

`this.$Dialog.close()`提供隐式地关闭对话框全局实例的能力。







</template>

<script>
    import('#/dialog.less');
    export default {
        methods: {
            dialog1() {
                this.$Dialog.alert('这是一段信息', function () {
                    this.$Message.info('点击了确定');
                });
            },
            dialog2() {
                this.$Dialog.confirm('删除确认', '删除后无法恢复，确认吗？', function () {
                    this.$Message.info('点击了确定');
                }, function () {
                    this.$Message.warning('操作被取消了');
                });
            },
            dialog3() {
                this.$Dialog.show({
                    title: '自定义标题',
                    content: '这是一段信息',
                    maskClosable: true,
                    showCloseButton: true,
                    showOkButton: true,
                    showCancelButton: true,
                    showHeader: true,
                    showFooter: true,
                    size: 'large',
                    onOk() {
                        this.$Message.info('点击了确定');
                    },
                    onCancel() {
                        this.$Message.warning('操作被取消了');
                    }
                });
            }
        }
    };
</script>
