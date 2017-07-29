<template lang="md">
# Notice 通知提醒

相对于`Message`, `Notice`通知提醒的方式更加醒目，常用于系统推送、主动通知等。

> XCUI为`Vue.prototype`添加了全局方法`$Notice`, 如果您完整引入了XCUI， 可以直接使用如`this.$Notice.info('some message')`的方式进行通知提示操作。
> 当然，您也可以使用`import Notice from 'xcui/lib/notice'` 的单组件方式调用。
> Notice在XCUI中被注册为一个[Vue 插件](https://vuejs.org/v2/guide/plugins.html), 在**单文件引入**时，请使用`Vue.use(Notice)` 挂载，再进行使用。

::: demo 基本使用，默认在4.5s后关闭。如果`desc`选项未填，则仅展示标题。

```html

<tpl>
    <x-button @click="notice0">展示提醒（仅标题）</x-button>
    <x-button type="primary" @click="notice1">展示提醒</x-button>
</tpl>

<script>
    export default {
        methods: {
            notice0() {
                this.$Notice.open({
                    title: '这是通知标题',
                    desc: ''
                });
            },
            notice1() {
                this.$Notice.open({
                    title: '这是通知标题',
                    desc: '这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述'
                });
            }
        }
    };
</script>

```

:::


## 不同类型的通知消息

::: demo 通过使用 `.info()`, `.success()`, `.warning()`, `.error()` 展示不同类型的通知消息

```html

<tpl>
    <x-button type="info" @click="notice2">info</x-button>
    <x-button type="success" @click="notice3">success</x-button>
    <x-button type="warning" @click="notice4">warning</x-button>
    <x-button type="danger" @click="notice5">error</x-button>
</tpl>

<script>
    export default {
        methods: {
            notice2() {
                this.$Notice.info({
                    title: '这是通知标题',
                    desc: '这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述'
                });
            },
            notice3() {
                this.$Notice.success({
                    title: '这是通知标题',
                    desc: '这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述'
                });
            },
            notice4() {
                this.$Notice.warning({
                    title: '这是通知标题',
                    desc: '这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述'
                });
            },
            notice5() {
                this.$Notice.error({
                    title: '这是通知标题',
                    desc: '这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述'
                });
            }
        }
    };
</script>

```

:::

## 自定义时长

::: demo 设置`duration`选项为0时，不会自动关闭。`duration`的单位为毫秒。

```html

<tpl>
    <x-button type="info" @click="notice6">不自动关闭</x-button>
</tpl>

<script>
    export default {
        methods: {
            notice6() {
                this.$Notice.info({
                    title: '这是通知标题',
                    desc: '这条通知不会自动关闭，需要点击关闭按钮才能关闭',
                    duration: 0
                });
            }

        }
    };
</script>

```

:::

## API

通过以下方法来使用：

```javascript
// 普通通知
this.$Notice.info(config);

// 成功通知
this.$Notice.success(config);

// 警告通知
this.$Notice.warning(config);

// 错误通知
this.$Notice.error(config);
```

### Config options

| 参数 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|title|String|无|标题|可选|
|content|String|无|提示信息内容|可选|
|duration|Number|4500|自动关闭延时，单位: 毫秒, 默认4500毫秒后自动关闭。设置0则不会自动关闭|可选|
|onClose|Function|无|关闭后的回调函数|可选|
|uuid|String|自动生成|当前通知的唯一标识|可选|


另外提供了全局配置、全局关闭某个通知和全局销毁的方法：

```javascript
// 全局配置
this.$Notice.config(options)

// 全局关闭
this.$Notice.close(uuid)

// 全局销毁
this.$Notice.destroy()

this.$Notice.config({
    top: 50,
    duration: 3
});
```


|属性|  说明|  类型|  默认值|
|-----|-----|-----|-----|
|top| 通知组件距离顶端的距离，单位像素| Number | 24|
|duration |   默认自动关闭的延时，单位毫秒 | Number | 4500|

</template>

<script>
    export default {
        methods: {
            notice0() {
                this.$Notice.open({
                    title: '这是通知标题',
                    desc: ''
                });
            },
            notice1() {
                this.$Notice.open({
                    title: '这是通知标题',
                    desc: '这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述'
                });
            },
            notice2() {
                this.$Notice.info({
                    title: '这是通知标题',
                    desc: '这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述'
                });
            },
            notice3() {
                this.$Notice.success({
                    title: '这是通知标题',
                    desc: '这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述'
                });
            },
            notice4() {
                this.$Notice.warning({
                    title: '这是通知标题',
                    desc: '这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述'
                });
            },
            notice5() {
                this.$Notice.error({
                    title: '这是通知标题',
                    desc: '这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述'
                });
            },
            notice6() {
                this.$Notice.info({
                    title: '这是通知标题',
                    desc: '这条通知不会自动关闭，需要点击关闭按钮才能关闭',
                    duration: 0
                });
            }

        }
    };
</script>
