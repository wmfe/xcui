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

</template>
