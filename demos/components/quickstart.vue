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
</template>
