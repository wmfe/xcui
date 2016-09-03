<template lang="md">
# **XCUI**

XCUI 是基于`Vue`和 `Bootstrap` 的桌面端组件库。

XCUI的目标是：

+ 满足桌面端页面大部分组件需求。
+ 支持npm install； 支持按需加载和全部加载；快速开发基于 `FIS` 构建的项目。
+ 保持小体积(不依赖`jquery`, `Boostrap.js`), 仅使用 `Boostrap.css` 。
+ 简洁优雅。

### 文档修订

```html
# clone the doc repo
git clone ssh://YOUR_NAME@icode.baidu.com:8235/baidu/waimai-bfe/xcui && scp -p -P 8235 YOUR_NAME@icode.baidu.com:hooks/commit-msg xcui/.git/hooks/

# 安装依赖
npm i

# run server
npm run dev

```

</template>
<script>
const version = require('../../package.json').version;

export default {
    data() {
        return {
            version: version
        };
    }
};

</script>

