# 关于XCUI

![logo](/src/assets/logo_nobg_128x128@2x.png)

XCUI 是基于`Vue`和 `Bootstrap.css` 的**桌面端组件库**。

## XCUI的目标是：

+ 满足桌面端页面大部分基础组件需求。
+ 快速开发基于 `vue` 构建的项目。
+ 保持小体积, 无其他js库依赖(不依赖`jquery`, `Boostrap.js`), 仅使用 `Boostrap.css` 。
+ 简洁优雅。

## 版本支持

XCUI目前支持`vue 1.x`版本；推荐使用`vue 1.0.26`及以上版本。后续XCUI会增加支持`vue 2.x`的版本，敬请期待。

## 如何使用

通过`npm`安装，或在[这里](https://github.com/wmfe/xcui)下载打包好的版本：

```bash
npm install xcui
```

`xcui`使用`umd`方式打包，支持各种模块加载器。

在页面根实例中引入：

```javascript
import Vue from 'vue'
import xcui from 'xcui'
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
<xcui-datepicker type="date" :value.sync="date.value" :sep="date.sep"></xcui-datepicker>
```

## 全局方法

`xcui`把一些使用频率高的操作挂载到`Vue`的根实例，便于调用。如, 在一个`components`组件中可以这样调用：

```javascript
this.$alert('alert message') // 警告提示
this.$confirm('是否确认?', content, onOk, onCancel) // 确认提示
this.$toaster('toaster message') // 信息提示
this.$Modal.show(options) // 模态框
```
具体请见[modal](/#!/component/modal) 中的说明。


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