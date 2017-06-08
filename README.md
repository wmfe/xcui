<p align="center">
    <a href="https://wmfe.github.io/xcui" target="_blank"><img width="100"src="https://raw.githubusercontent.com/wmfe/xcui/2.0/src/assets/xcui-logo.png"></a>
</p>

<p align="center">
    <a href="https://circleci.com/gh/wmfe/xcui/tree/2.0"><img src="https://img.shields.io/circleci/project/wmfe/xcui/2.0.svg"></a>
    <a href="https://www.npmjs.com/package/xcui"><img src="https://img.shields.io/npm/dm/xcui.svg" alt="Downloads"></a>
    <a href="https://www.npmjs.com/package/xcui"><img src="https://img.shields.io/npm/v/xcui.svg" alt="Version"></a>
    <a href="https://www.npmjs.com/package/xcui"><img src="https://img.shields.io/npm/l/xcui.svg" alt="Licence"></a>
</p>

## About

XCUI 是基于`Vue2.0`的**桌面端组件库**。

## XCUI的目标是：

+ 满足桌面端页面大部分基础组件需求。
+ 快速开发基于 `Vue2.0` 构建的项目。
+ 保持小体积, 无其他js库依赖。
+ 简洁优雅。

## 组件展示

[XCUI主页](https://wmfe.github.io/xcui/)

## 版本支持

在使用`Vue 2.x` 版本时，推荐使用 `Vue 2.0.8` 以上版本。


## 安装

通过`npm`安装。

```bash
npm install xcui
```

具体的安装方式请见[这里](https://wmfe.github.io/xcui/#/intro/installation)。

## 快速上手

`xcui`使用`umd`方式打包，支持各种模块加载器。

在页面根实例中引入：

```javascript
import Vue from 'vue'
import xcui from 'xcui'
import 'xcui/dist/xcui.css'
Vue.use(xcui);
```

在页面中声明标签，即可使用。

> **说明**
> XCUI在使用`Vue.use(xcui)`后，会默认以`x-`前缀注册所有组件，在Vue实例中可直接使用而**不用在`components`中声明**。举例：

```html
<x-button type="primary">start</x-button>
```

更多详细信息请见[这里](https://wmfe.github.io/xcui/#/intro/quickstart)。


## 开发

### Clone the doc repo
```
$ git clone git@github.com:wmfe/xcui.git
```
### 安装依赖
```
$ npm i
```
### Run dev server
```
$ npm run dev
```
### Build components
```
$ npm run build
```

