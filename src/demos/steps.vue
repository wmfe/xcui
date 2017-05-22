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

::: demo 每个步骤可以有success、failure、running三种状态，running状态可通过设置progress显示执行进度

```html
<tpl>
    <x-steps>
        <x-steps-item title="第一步" success>
            执行成功
        </x-steps-item>
        <x-steps-item title="第二步" failure>
            执行失败
        </x-steps-item>
        <x-steps-item title="第三步" running>
            正在执行
        </x-steps-item>
        <x-steps-item title="第四步" running :progress="0.4">
            正在执行
        </x-steps-item>
        <x-steps-item title="第五步">
            尚未执行
        </x-steps-item>
    </x-steps>
</tpl>
```

:::


## 触发按钮

::: demo 当设置 triggerable 属性后，会在尚未执行的步骤上显示一个触发按钮

```html
<tpl>
    <x-steps @trigger="onTrigger">
        <x-steps-item title="第一步" success triggerable>
        </x-steps-item>
        <x-steps-item title="第二步" triggerable>
        </x-steps-item>
        <x-steps-item title="第三步" triggerable>
        </x-steps-item>
        <x-steps-item title="第四步" triggerable>
        </x-steps-item>
    </x-steps>
</tpl>
<script>
    export default {
        methods: {
            onTrigger(index) {
                alert(`已触发第${index + 1}步`);
            }
        }
    };
</script>
```

:::


## 用户选择与高亮

::: demo 通过 value 属性克设置当前哪个步骤高亮选中，监听 @input 事件可得知用户点击了某个步骤。可通过 v-model 进行双向绑定。

```html
<tpl>
    <div>
        <x-steps v-model="currentStep">
            <x-steps-item title="第一步">
            </x-steps-item>
            <x-steps-item title="第二步">
            </x-steps-item>
            <x-steps-item title="第三步">
            </x-steps-item>
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

</template>

<script>
    export default {
        data() {
            return {
                currentStep: 0
            };
        },
        methods: {
            onTrigger(index) {
                alert(`已触发第${index + 1}步`);
            }
        }
    };
</script>
