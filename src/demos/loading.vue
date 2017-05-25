<template lang="md">
# Loading 加载中提示

用于页面和区块的加载中状态, 一般在页面局部处于等待异步数据或正在渲染过程时使用。

> `Loading`在XCUI中以指令方式调用。如果完整引入了XCUI，可以直接使用`v-loading`指令。
>  在**单文件引入**时，由于`Loading`在XCUI中被注册为一个[Vue 插件](https://vuejs.org/v2/guide/plugins.html),请使用`Vue.use(Loading)` 挂载，再进行使用。

## 基本使用

::: demo 基本使用，在需要加载中提示的区块元素上设置`v-loading`指令，并绑定`Boolean`即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加`body`修饰符，可以使遮罩插入至 `DOM` 中的 `body` 上。

```html

<tpl>
    <div v-loading.body="loading" style="width: 400px;height: 60px;padding: 30px; outline: 1px dotted #eee;">
        <img :src="imgPara">
    </div>
</tpl>

<script>
    export default {
        data() {
            return {
                loading: true
            }
        }
    }
</script>

```

:::

## 其他加载效果

::: demo 除了默认效果外，还可以通过在需要Loading的区块元素上设置`x-loading-type`属性来使用其他两种效果：`grid`和`dot`。

```html

<tpl>
    <div v-loading="loading" x-loading-type="grid" style="width: 30%;display:inline-block;margin-top: 15px;padding: 30px; outline: 1px dotted #eee;">
        <img :src="imgPara">
    </div>

    <div v-loading="loading" x-loading-type="dot" style="width: 30%;display:inline-block;margin-top: 15px;padding: 30px; outline: 1px dotted #eee;">
        <img :src="imgPara">
    </div>
</tpl>

```

:::

## 整页加载

::: demo 当需要全屏遮罩时，可使用`fullscreen`修饰符（此时遮罩会插入至 body 上）。此时若需要锁定屏幕的滚动，可以使用`lock`修饰符。

```html

<tpl>
    <x-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">
        显示整页加载，3 秒后消失
    </x-button>
</tpl>

<script>
    export default {
        data() {
            return {
                fullscreenLoading: false
            };
        },
        methods: {
            openFullScreen() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                }, 3000);
            }
        }
    };
</script>

```

:::

## 自定义加载文案

::: demo 通过在需要Loading的区块元素上设置`x-loading-text`，可进行自定义加载文案。

```html

<tpl>
    <div v-loading="loading" x-loading-text="拼命加载中" style="width: 30%;height: 60px;padding: 30px; outline: 1px dotted #eee;">
        <img :src="imgPara">
    </div>
</tpl>

```

:::

## 自定义加载图案的大小

::: demo 通过在需要Loading的区块元素上设置`x-loading-size`，可进行自定义加载图案的大小。默认为40。

```html

<tpl>
    <div v-loading="loading" x-loading-size="20" style="width: 30%;height: 60px;padding: 30px; outline: 1px dotted #eee;">
        <img :src="imgPara">
    </div>
</tpl>

```

:::

## Directive Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|-----|-----|-----|
|v-loading|Boolean|-|与指令的绑定值|必选|true, false|
|body|Boolean|false|指令修饰符，是否将遮罩层插入body|可选|true,false|
|fullscreen|Boolean|false|指令修饰符，是否是全屏Loading|可选|true,false|
|lock|Boolean|false|指令修饰符，全屏时是否锁定滚动条|可选|true,false|
|x-loading-type|String|无|自定义加载动画类型|可选|circle(默认), dot, grid|
|x-loading-text|String|无|自定义加载文案|可选||
|x-loading-size|String|40|加载图案的大小|可选||
|x-loading-class|String|无|遮罩层的样式名|可选||


</template>

<script>
import imgPara from '../assets/short-paragraph.png';

export default {
    data() {
        return {
            loading: true,
            imgPara: imgPara,
            fullscreenLoading: false
        };
    },
    methods: {
        openFullScreen() {
            this.fullscreenLoading = true;
            setTimeout(() => {
                this.fullscreenLoading = false;
            }, 3000);
        }
    }
};
</script>