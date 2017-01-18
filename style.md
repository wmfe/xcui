# xcui-styles

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## 构建自定义主题

### 默认less变量
> 默认样式变量存放在 /src/less/theme/default.less，可通过查看该文件了解有哪些变量。

### 覆盖变量，生成自定义样式

> 通过覆盖less文件中的变量的方式来替换原有值。

> \#1  `package.json` 中 `theme`配置了js文件地址

> \#2  修改custom.js 覆盖变量：

```
// custom.js
module.exports = {
  'brand-primary' : '#f04134',
  'brand-success' : '#108ee9',
  'brand-warning' : '#f5317f',
  'brand-danger'  : '#ffbf00',
};

```

> \#3  重新构建
 

### 也可以在less文件中修改

```
 //    src/less/index.less
 @import "./theme/default.less";
 @import "./mixins/index.less";
  
 // 引入你自己的less,覆盖变量
 @import "./theme/mytheme.less"
```


