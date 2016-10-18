<template lang="md">
# PageLoading

## 使用场景
页面加载进度条

## DEMO
<demo>
    <example title="顶部加载条">
        <v-pageloading :type="'top'" v-ref:page-loading></v-pageloading>
        <div>
            <input type="button" class="btn btn-primary" value='start' @click="start"/>
            <input type="button" class="btn btn-primary" value='stop' @click="stop"/>
            <input type="button" class="btn btn-primary" @click="inc" value="inc"/>
            <input type="button" class="btn btn-primary" value='set' @click="setPercent"/>
            <input type="text" v-model="toppercent" placeholder="设置进度条速度"/>
        </div>
    </example>
</demo>

## Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|speed|Number|350|速度|可选|
|start|function|-|开始|可选|
|end|function|-|结束|可选|
|set|function|-|设置进度条进度|可选|
|inc|function|-|增加一小段进度|可选|


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
            stop() {
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