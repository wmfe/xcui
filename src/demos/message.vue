<template lang="md">
# Message信息提示

Message提供一种不打断用户操作的轻量级提示方式，顶部居中显示并自动消失。常用于主动操作后的信息提示。

> XCUI为`Vue.prototype`添加了全局方法`$Message`, 可以直接使用如`this.$Message.info('message')`的方式进行信息提示操作。
> 当然，您也可以使用`import { Message } from 'xcui'` 的单组件方式调用。
> Message在XCUI中被注册为一个[Vue 插件](https://vuejs.org/v2/guide/plugins.html), 在**单文件引入**时，请使用`Vue.use(Message)` 挂载，再进行使用。


## 基本使用

::: demo 基本提示，展示信息3s后消失。

```html

<tpl>
    <x-button type="primary" @click="info">显示普通提示</x-button>
</tpl>

<script>
    export default {
        methods: {
            info() {
                this.$Message.info('这是一条普通提示');
            }
        }
    };
</script>

```

:::

## 提示类型

::: demo 支持四种方法：`info(信息提示)`， `success(成功提示)`， `warning(警告提示)`，`error（错误提示）`。

```html

<tpl>
    <x-button type="success" @click="success">显示成功提示</x-button>
    <x-button type="warning" @click="warning">显示警告提示</x-button>
    <x-button type="danger" @click="error">显示错误提示</x-button>
</tpl>

<script>
    export default {
        methods: {
            success() {
                this.$Message.success('这是一条成功提示');
            },
            warning() {
                this.$Message.warning('这是一条警告提示');
            },
            error() {
                this.$Message.error('这是一条错误提示');
            }
        }
    }
</script>

```

:::


## 自定义时长

::: demo 显示一个10秒的提示。也可以在`Message.config()`中全局配置，详见API。

```html

<tpl>
    <x-button type="info" @click="delay">显示10s的提示</x-button>
</tpl>

<script>
    export default {
        methods: {
            delay() {
                this.$Message.info('这是一条10秒后关闭的提示', 10000);
            }
        }
    }
</script>

```

:::

## 关闭时的回调函数

::: demo 使用关闭时的回调函数。

```html

<tpl>
    <x-button type="info" @click="callback">关闭时显示信息</x-button>
</tpl>

<script>
    export default {
        methods: {
            callback() {
                this.$Message.warning('此条信息关闭后会显示一条普通信息', 3000, () => {
                    this.$Message.info('信息关闭了');
                });
            }
        }
    }
</script>

```

:::

## 使用提示

### 单组件使用时，请遵循以下的方式注册`Message`插件。如果已经全局使用`Vue.use(xcui)`, 则无需再次注册。

```javascript
import Vue from 'vue';

import { Message } from 'xcui/components/message';

Vue.use(Message);
```

## API

通过以下方法来使用：

```javascript
// 普通提示
this.$Message.info(content, duration, onClose);

// 成功提示
this.$Message.success(content, duration, onClose);

// 警告提示
this.$Message.warning(content, duration, onClose);

// 错误提示
this.$Message.error(content, duration, onClose);
```

| 参数 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|content|String|无|提示信息内容|必选|
|duration|Number|3000|自动关闭延时，单位: 毫秒, 默认3000毫秒后自动关闭。设置0则不会自动关闭|可选|
|onClose|Function|无|关闭后的回调函数|可选|

## 全局配置

可使用`Message.config(options)`来进行全局设置，例如，设置所有的提示都在1s内关闭。

使用`Message.destroy()` 可全局销毁`Message`实例。

```javascript
// 全局的提示信息距离顶部50px, 1s后关闭

this.$Message.config({
    top: 50,
    duration: 1000
})

// 销毁`Message`实例

this.$Message.destroy();

```
| 参数 | 类型 | 默认 | 描述 |
|-----|-----|-----|-----|
|top|Number|24|提示信息距离页面顶端的距离，单位为像素|
|duration|Number|3000|自动关闭延时，单位: 毫秒, 默认3000毫秒后自动关闭。设置0则不会自动关闭|


</template>

<script>
    export default {
        data() {
            return {
                count1: 1,
                count2: 2,
                count3: 3,
                count4: 4
            };
        },
        methods: {
            info() {
                this.$Message.info('这是一条普通提示');
            },
            success() {
                this.$Message.success('这是一条成功提示');
            },
            warning() {
                this.$Message.warning('这是一条警告提示');
            },
            error() {
                this.$Message.error('这是一条错误提示');
            },
            delay() {
                this.$Message.info('这是一条10秒后关闭的提示', 10000);
            },
            callback() {
                this.$Message.warning('此条信息关闭后会显示一条普通信息', 3000, () => {
                    this.$Message.info('信息关闭了');
                });
            }
        },
        mounted() {
        }
    };
</script>