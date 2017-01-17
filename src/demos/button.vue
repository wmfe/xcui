<template lang="md">
<demo>
    <example title="基本使用">
        <xcui-button>btnbtnbtn</xcui-btn>
    </example>
    <example title="按钮类型">
        <xcui-button type="primary">primary</xcui-button>
        <xcui-button type="success">success</xcui-button>
        <xcui-button type="warning">warning</xcui-button>
        <xcui-button type="danger">danger</xcui-button>
    </example>
    <example title="尺寸">
        <xcui-button size="sm">sm尺寸</xcui-button>
        <xcui-button>正常尺寸</xcui-button>
        <xcui-button size="lg">lg尺寸</xcui-button>
    </example>
</demo>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
        methods: {
        }
    };

</script>

<style>
    .define-class{
        background:#ffab47;
        color:#fff;
        border-radius: 6px;
    }

    .define-class:hover{
        background:red;
    }
</style>

