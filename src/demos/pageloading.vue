<template lang="md">
# PageLoading页面加载进度条

## 使用场景

- 路由页面切换时提供顶部加载进度条。

## DEMO
<demo>
    <example title="顶部加载条">
        <xcui-pageloading ref="pageLoading"></xcui-pageloading>
        <div class="form-group">
            <button class="btn btn-primary" @click="start">start</button>
            <button class="btn btn-primary" @click="done">done</button>
            <button class="btn btn-primary" @click="inc">inc</button>
            <button class="btn btn-primary" @click="setPercent">set</button>
        </div>
        <div class="input-group">
            <input type="text" class="form-control" v-model="toppercent" placeholder="设置进度条速度"/>
        </div>
    </example>
</demo>

## Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|speed|Number|350|速度|可选|

## Methods
| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|start|function|-|开始|可选|
|done|function|-|结束|可选|
|set|function|0.08|设置进度条进度，取值范围（0.08 ~ 1）|可选|
|inc|function|-|增加一小段进度|可选|

### 方法调用
>- this.$refs.pageLoading.start();
>- this.$refs.pageLoading.done();
>- this.$refs.pageLoading.set(0.5);
>- this.$refs.pageLoading.inc();

备注：先执行set(0.X)，再执行inc()，即可看到inc的执行效果


</template>


<script>
    import vPageloading from '../components/pageloading';
    export default {
        components: {
            vPageloading
        },
        data() {
            return {
                toppercent: ''
            };
        },
        methods: {
            start() {
                this.$refs.pageLoading.start();
            },
            done() {
                this.$refs.pageLoading.done();
            },
            setPercent() {
                this.$refs.pageLoading.set(parseFloat(this.toppercent, 10));
            },
            inc() {
                this.$refs.pageLoading.inc();
            }
        }
    };
</script>