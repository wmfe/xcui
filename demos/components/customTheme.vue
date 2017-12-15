<template lang="md">
# 定制主题

xcui支持一定程度上的样式定制，可以满足不同的平台间主题颜色的改动。这些改动对于开发者而言，只需要做相关配置即可。

## 样式变量

xcui样式使用了(Less)[http://lesscss.org/]作为开发语言，而且抽象了一系列可定义的全局变量。可以根据具体需求做相关的调整。

点击这里可以查看(默认样式变量)[https://github.com/wmfe/xcui/blob/2.0/src/less/theme/default.less]的集合。

## 定制样式变量 （全局引入）

如果您使用了全局引入xcui, 那么需要引入xcui的`less`主文件：

```js
import Vue from 'vue'
import xcui from 'xcui';

Vue.use(xcui);

```



</template>

<script>
export default {

}
</script>

