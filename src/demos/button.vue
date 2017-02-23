<template lang="md">
# Button 按钮

## 概述

按钮用于开始一个即时操作。

<demo>
    <example title="按钮类型">
        <xcui-button>default</xcui-button>
        <xcui-button type="primary">primary</xcui-button>
        <xcui-button type="info">info</xcui-button>
        <xcui-button type="success">success</xcui-button>
        <xcui-button type="warning">warning</xcui-button>
        <xcui-button type="danger">danger</xcui-button>
        <xcui-button type="dashed">dashed</xcui-button>
        <xcui-button type="link">link</xcui-button>
        <xcui-info>
            按钮有以下类型： `default`, `primary`, `info`, `success`, `warning`, `danger`，`dashed`，`link`。默认值为`default`。
        </xcui-info>
    </example>
    <example title="图标按钮">
        <xcui-button icon="search"></xcui-button>
        <xcui-button icon="edit" type="primary"></xcui-button>
        <xcui-button icon="checkmark" type="primary"></xcui-button>
        <xcui-button icon="plus-round" type="primary"></xcui-button>
        <xcui-button icon="search" type="info"></xcui-button>
        <xcui-button icon="search" type="info">搜索</xcui-button>
        <xcui-button icon="archive" type="success">导出数据</xcui-button>
        <xcui-info>
            当需要在`Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。
        </xcui-info>
    </example>
    <example title="禁用状态">
        <xcui-button :disabled="true">主要按钮</xcui-button>
        <xcui-button type="primary" :disabled="true">主要按钮</xcui-button>
        <xcui-button type="dashed" :disabled="true">主要按钮</xcui-button>
        <xcui-button type="link" :disabled="true">主要按钮</xcui-button>
        <xcui-info>
            通过设置`disabled`属性可以将按钮置为禁用状态。
        </xcui-info>
    </example>
    <example title="按钮尺寸">
        <xcui-button size="sm">小尺寸sm</xcui-button>
        <xcui-button>正常尺寸</xcui-button>
        <xcui-button size="lg">大尺寸lg</xcui-button>
        <xcui-info>
            通过设置`size`属性可以设定按钮的大小。
        </xcui-info>
    </example>
    <example title="加载中状态">
        <xcui-button size="sm" type="primary" :loading="true">Loading...</xcui-button>
        <xcui-button type="info" :loading="true">Loading...</xcui-button>
        <xcui-button type="primary" :loading="isLoadingA" @click="isLoadingA = true">点击加载</xcui-button>
        <xcui-button type="info" icon="heart" :loading="isLoadingB" @click="isLoadingB = true">{{isLoadingB ? '加载中...' : '点击加载'}}</xcui-button>
        <xcui-info>
            通过设置`loading`属性可以设定按钮进入加载中状态。最后两个按钮演示点击后进入加载状态。
            当进入加载状态时，`button` 的任何鼠标事件均**不会触发**。
        </xcui-info>
        <xcui-script>
            export default {
                data() {
                    return {
                        isLoadingA: false
                        isLoadingB: false
                    }
                }
            }
        </xcui-script>
    </example>
    <example title="按钮组">
        <xcui-button-group>
            <xcui-button type="primary" icon="chevron-left">上一页</xcui-button>
            <xcui-button type="primary" icon="chevron-right">下一页</xcui-button>
        </xcui-button-group>
        <xcui-button-group>
            <xcui-button icon="refresh" type="info"></xcui-button>
            <xcui-button icon="information" type="info"></xcui-button>
            <xcui-button icon="edit" type="info"></xcui-button>
        </xcui-button-group>
        <xcui-button-group>
            <xcui-button>Cancel</xcui-button>
            <xcui-button type="info">OK</xcui-button>
        </xcui-button-group>
        <xcui-info>
            以按钮组的方式出现，常用于多项类似操作。
        </xcui-info>
    </example>
</demo>
</template>

<script>
    export default {
        data() {
            return {
                isLoadingA: false,
                isLoadingB: false
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

