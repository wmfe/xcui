<template lang="md">
# Steps 步骤条

引导用户按照流程完成任务或者展示流程当前状态的导航条。

## 基础使用

::: demo 步骤条的基本使用。

```html
<tpl>
    <x-steps>
        <x-steps-item title="第一步">
            简单的第一步说明
        </x-steps-item>
        <x-steps-item title="第二步">
            <div>
                丰富的<b>第二步</b>说明
            </div>
        </x-steps-item>
        <x-steps-item title="第三步">
        </x-steps-item>
    </x-steps>
</tpl>
```

:::

## 执行状态

::: demo 通过设置status属性，每个步骤可以有 success、failure、running、pending、default 五种状态，running状态可通过设置progress显示执行进度

```html
<tpl>
    <x-steps>
        <x-steps-item title="第一步" status="success">
            执行成功
        </x-steps-item>
        <x-steps-item title="第二步" status="failure">
            执行失败
        </x-steps-item>
        <x-steps-item title="第四步" status="running" :progress="0.4">
            正在执行
        </x-steps-item>
        <x-steps-item title="第五步" status="pending">
            尚未执行
        </x-steps-item>
    </x-steps>
</tpl>
```

:::


## 用户选择与高亮

::: demo 通过 value 属性克设置当前哪个步骤高亮选中，监听 @input 事件可得知用户点击了某个步骤。可通过 v-model 进行双向绑定。还可以设置value-cancelable允许用户取通过再次点击消选择，value会被置为-1。

```html
<tpl>
    <div>
        <x-steps v-model="currentStep" value-cancelable>
            <x-steps-item title="第一步"></x-steps-item>
            <x-steps-item title="第二步"></x-steps-item>
            <x-steps-item title="第三步"></x-steps-item>
            <x-steps-item title="第四步"></x-steps-item>
        </x-steps>
        当前步骤：第 {{currentStep + 1}} 步
    </div>
</tpl>
<script>
    export default {
        data() {
            return {
                currentStep: 0
            };
        },
    };
</script>
```

:::

## 带执行状态的用户选择

::: demo 执行状态与用户选择高亮可以共存

```html
<tpl>
    <x-steps v-model="currentStep">
        <x-steps-item title="执行成功" status="success"></x-steps-item>
        <x-steps-item title="执行失败" status="failure"></x-steps-item>
        <x-steps-item title="正在执行" status="running"></x-steps-item>
        <x-steps-item title="尚未执行" status="pending"></x-steps-item>
    </x-steps>
</tpl>
<script>
    export default {
        data() {
            return {
                currentStep: 0
            };
        },
    };
</script>
```

:::

</template>

<script>
    export default {
        data() {
            return {
                currentStep: 0
            };
        }
    };
</script>
