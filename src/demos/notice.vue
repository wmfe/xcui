<template lang="md">
# Notice 通知提醒

::: demo 基本使用

```html

<tpl>
    <x-button @click="notice0">点击展示</x-button>
    <x-button type="primary" @click="notice1">点击展示</x-button>
    <x-button type="info" @click="notice2">点击展示</x-button>
    <x-button type="success" @click="notice3">点击展示</x-button>
    <x-button type="warning" @click="notice4">点击展示</x-button>
    <x-button type="danger" @click="notice5">点击展示</x-button>

</tpl>

```

:::
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
            }
        }
    };
</script>