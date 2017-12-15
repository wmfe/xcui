<template lang="md">
# 快速上手

## Hello world

利用CDN可以快速写出一个Hello World页面。

```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
    <link rel="stylesheet" href="https://unpkg.com/xcui/lib/xcui.css">
    <script type="text/javascript" src="https://unpkg.com/vue/dist/vue.js"></script>
    <script type="text/javascript" src="https://unpkg.com/xcui/lib/xcui.umd.js"></script>
</head>
<body>
    <div id="app">
        <x-button type="primary" @click="visible = true">click</x-button>
        <x-modal v-model="visible" title="欢迎使用XCUI">
          <p>Hello World</p>
        </x-modal>
    </div>
    <script type="text/javascript">
        Vue.use(xcui);
        new Vue({
            el: '#app',
            data: function () {
                return {
                    visible: false
                }
            }
        })
    </script>
</body>
</html>
```

## 命令行脚手架

使用脚手架快速搭建工程项目。首先需要安装`vue-cli`:

```bash
$ npm install -g vue-cli
```

**最简单的页面**: 一个html，搭载了`vue`和`xcui`。

```bash
$ vue init xcui-templates/simple myproject
```

**集成webpack和vue-loader**: 一个简单的使用Webpack + vue-loader配置的脚手架，可以快速上手。

```bash
$ vue init xcui-templates/webpack-simple myproject
```

**全功能webpack**: 集成了webpack + vue-loader + hot-reload + linting + testing的全功能项目脚手架。

```bash
$ vue init xcui-templates/webpack myproject
```

## 引入XCUI

### 完整引入

在入口函数中引入xcui.js/xcui.css 并使用Vue.use(XCUI)

```javascript
import Vue from 'vue'
import XCUI from 'xcui'
import 'xcui/lib/xcui.css'
Vue.use(xcui)
```

### 按需引入

依赖Babel插件 [babel-plugin-import-fix](https://github.com/lin-xi/babel-plugin-import-fix)，可以只引入特定需要的组件，降低无用的体积摄入。

*如果配置了按需引入，将不支持`import xcui from 'xcui'`完整引入的方式*

#### **1. 安装babel-plugin-import-fix**

```bash
npm i babel-plugin-import-fix -D
```

#### **2. 配置`.babelrc`**

```javascript
{
  "presets": [
    ["es2015", { "modules": false }], "react"
  ],
  "plugins": ["import-fix"]
}
```

#### **3. 按需引入对应组件**

```javascript
import Vue from 'vue'
import {Button, MultiTreeSelect} from 'xcui'
Vue.component(Button.name, Button)
Vue.component(MultiTreeSelect.name, MultiTreeSelect)
/*
或者以局部组件方式引入
new Vue({
  components: {
    Button, MultiTreeSelect
  },
  el: '#app',
  render: h => h(App)
})
*/
```

完整引入列表及其名称以[components/index.js](https://github.com/wmfe/xcui/blob/2.0/src/components/index.js#L119-L172)为准

```javascript
import Vue from 'vue'
import {
    Alert,
    DatePicker,
    TimePicker,
    TimeSelect,
    Input,
    InputNumber,
    Textarea,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioButton,
    RadioGroup,
    Loading,
    Message,
    Notice,
    Modal,
    Dialog,
    PageLoading,
    Pagination,
    Popover,
    Progress,
    Select,
    Option,
    OptionGroup,
    Suggestion,
    Tag,
    TagCheckable,
    Tooltip,
    ScrollTop,
    Button,
    ButtonGroup,
    Row,
    Col,
    Icon,
    Switch,
    Form,
    FormItem,
    Table,
    TableColumn,
    install,
    Collapse,
    CollapseItem,
    Upload,
    DropDown,
    DropDownMenu,
    MultiTreeSelect,
    SingleTreeSelect,
    DropDownItem,
    Tabs,
    TabPane,
    Breadcrumb,
    BreadcrumbItem
} from 'xcui'

Vue.use(Message);
Vue.use(Notice);
Vue.use(Dialog);
Vue.use(Loading);
Vue.use(PageLoading);
```
</template>
