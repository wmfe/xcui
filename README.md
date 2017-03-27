# 关于XCUI

![logo](https://github.com/wmfe/xcui/raw/master/src/assets/logo_nobg_128x128@2x.png)

[![CircleCI](https://img.shields.io/circleci/project/wmfe/xcui/2.0.svg)](https://circleci.com/gh/wmfe/xcui/tree/2.0)
[![npm version](https://img.shields.io/npm/v/xcui.svg)](https://www.npmjs.com/package/xcui)
[![GitHub issues](https://img.shields.io/github/issues/wmfe/xcui.svg)](https://github.com/wmfe/xcui/issues)
[![GitHub forks](https://img.shields.io/github/forks/wmfe/xcui.svg)](https://github.com/wmfe/xcui/network)
[![GitHub stars](https://img.shields.io/github/stars/wmfe/xcui.svg)](https://github.com/wmfe/xcui/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/wmfe/xcui/1.0/LICENSE)

XCUI 是基于`Vue`的**桌面端组件库**。

## XCUI的目标是：

+ 满足桌面端页面大部分基础组件需求。
+ 快速开发基于 `vue` 构建的项目。
+ 保持小体积, 无其他js库依赖 。
+ 简洁优雅。

## 版本支持

XCUI的1.0分支支持 `Vue 1.x` 版本；2.0分支支持 `Vue 2.x` 版本。

在使用`Vue 1.x` 版本时，推荐使用 `Vue 1.0.26` 以上版本；

在使用`Vue 2.x` 版本时，推荐使用 `Vue 2.0.5` 以上版本。



## 如何使用

通过`npm`安装，或在[这里](https://github.com/wmfe/xcui/releases)下载打包好的版本：

```bash
npm install xcui
```

`xcui`使用`umd`方式打包，支持各种模块加载器。

在页面根实例中引入：

```javascript
import Vue from 'vue'
import xcui from 'xcui'
import 'xcui/dist/xcui.css'
Vue.use(xcui);
```

或者：

```javascript
var Vue = require('vue');
var xcui = require('xcui');
Vue.use(xcui);
```

在页面中声明标签，即可使用。举例：

```html
<xcui-tag :closeable="true" text="'关闭'"></xcui-tag>
```

除了使用npm进行安装外，还可直接将xcui的js和css文件使用标签形式引入，举例：

```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello XCUI</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="xcui.css">
    <script type="text/javascript" src="vue.js"></script>
    <script type="text/javascript" src="xcui.js"></script>
</head>
<body>
    <div id="app">
        <xcui-tag :closeable="true" :text="'关闭'"></xcui-tag>
    </div>
    <script type="text/javascript">
        Vue.use(xcui);
        new Vue({
            el: '#app',
            ready: function (){
                this.$alert('Hello XCUI!')
            }
        })
    </script>
</body>
</html>
```

> **说明**
> XCUI在使用`Vue.use(xcui)`后，会默认以`xcui-`前缀注册所有组件，在Vue实例中可直接使用而**不用在`components`中声明**。如：

```html
<xcui-tag></xcui-tag>
```

当然，您也可以按以下方式使用xcui组件：

```js
import {Tag, Select} from xcui;

export default {
    components: {Tag, Select}
}

```

## 全局方法

`xcui`把一些使用频率高的操作挂载到`Vue`的根实例，便于调用。如, 在一个`components`组件中可以这样调用 ( **且不用在页面中显式地声明html标签** )：

```javascript
this.$alert('alert message') // 警告提示
this.$confirm('是否确认?', content, onOk, onCancel) // 确认提示
this.$toaster('toaster message') // 信息提示
this.$Modal.show(options) // 模态框
```
具体请见[modal](https://wmfe.github.io/xcui/#!/component/modal) 中的说明。


## 开发

#### clone the doc repo
```
$ git clone git@github.com:wmfe/xcui.git
```
#### 安装依赖
```
$ npm i
```
#### run dev server
```
$ npm run dev
```
#### build components
```
$ npm run build
```

## 加入我们

#### 提交issue

在使用过程中有问题，请在[这里](https://github.com/wmfe/xcui/issues)给我们提交`issue`。

#### 提交pull request

代码有问题？请在[这里](https://github.com/wmfe/xcui/pulls)给我们提交`pull request`。

#### 加入开发团队

加入[wmfe](https://github.com/wmfe)团队，一起开发通用组件，交流vue组件开发的心得~
