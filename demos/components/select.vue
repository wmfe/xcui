<template lang="md">
# Select 选择器

替代浏览器原生的选择器。

支持单选和多选。

如果选项过少（如小于5项）且展示空间充裕，直接使用 `checkbox` 或 `radio` 平铺展示，是更直观、友好的选择。

## 基础单选

::: demo 基本使用。将`x-option`作为`x-select`的子组件传入。支持通过键盘`方向键`和`回车键`选择选项。

```html

<tpl>
    <div style="width: 180px;">
        <x-select v-model="model1" placeholder="请选择">
            <x-option v-for="item in data1" :key="item.value" :label="item.label" :value="item.value">
            </x-option>
        </x-select>
    </div>
    <p style="margin-top: 15px;">选中的值：{{model1}}</p>
</tpl>

<script>
    export default {
        data() {
            return {
                model1: '',
                data1: [
                    {label: '北京烤鸭', value: '1'},
                    {label: '夫妻肺片', value: '2'},
                    {label: '西湖醋鱼', value: '3'},
                    {label: '过桥米线', value: '4'},
                    {label: '羊肉泡馍', value: '5'}
                ]
            }
        }
    }
</script>
```

:::

## 有禁用选项

::: demo 通过将`x-option`的`disabled`选项置为`true`即可禁用选项。

```html

<tpl>
    <div style="width: 180px;">
        <x-select v-model="model2" placeholder="请选择">
            <x-option v-for="item in data2" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
            </x-option>
        </x-select>
    </div>
    <p style="margin-top: 15px;">选中的值：{{model2}}</p>
</tpl>

<script>
    export default {
        data() {
            return {
                model2: '',
                data2: [
                    {label: '北京烤鸭', value: '1'},
                    {label: '夫妻肺片', value: '2', disabled: true},
                    {label: '西湖醋鱼', value: '3'},
                    {label: '过桥米线', value: '4'},
                    {label: '羊肉泡馍', value: '5'}
                ]
            }
        }
    }
</script>

```

:::

## 禁用状态

::: demo 通过将`x-select`的`disabled`选项置为`true`即可禁用选择器。

```html

<tpl>
    <div style="width: 180px;">
        <x-select v-model="model3" :disabled="disabled" placeholder="请选择">
            <x-option v-for="item in data3" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
            </x-option>
        </x-select>
    </div>
</tpl>

<script>
    export default {
        data() {
            return {
                disabled: true,
                model3: '',
                data3: [
                    {label: '北京烤鸭', value: '1'},
                    {label: '夫妻肺片', value: '2'},
                    {label: '西湖醋鱼', value: '3'},
                    {label: '过桥米线', value: '4'},
                    {label: '羊肉泡馍', value: '5'}
                ]
            }
        }
    }
</script>

```

:::

## 允许清空选项

::: demo 通过设置`allowClear`属性可以包含清空按钮，将选择器置为未选择状态。

```html

<tpl>
    <div style="width: 180px;">
        <x-select v-model="model4" :allow-clear="true" placeholder="请选择">
            <x-option v-for="item in data4" :key="item.value" :label="item.label" :value="item.value">
            </x-option>
        </x-select>
    </div>
</tpl>

<script>
    export default {
        data() {
            return {
                model4: '',
                data4: [
                    {label: '北京烤鸭', value: '1'},
                    {label: '夫妻肺片', value: '2'},
                    {label: '西湖醋鱼', value: '3'},
                    {label: '过桥米线', value: '4'},
                    {label: '羊肉泡馍', value: '5'}
                ]
            }
        }
    }
</script>

```

:::

## 基础多选

::: demo 通过设置`x-select`的`multiple`选项为`true`, 可以设置为多选状态。

```html

<tpl>
    <div style="width: 180px;">
        <x-select v-model="model5" :multiple="true" placeholder="请选择">
            <x-option v-for="item in data5" :key="item.value" :label="item.label" :value="item.value">
            </x-option>
        </x-select>
    </div>
    <p style="margin-top: 15px;">选中的值：{{model5}}</p>
</tpl>

<script>
    export default {
        data() {
            return {
                model5: [],
                data5: [
                    {label: '北京烤鸭', value: '1'},
                    {label: '夫妻肺片', value: '2'},
                    {label: '西湖醋鱼', value: '3'},
                    {label: '过桥米线', value: '4'},
                    {label: '羊肉泡馍', value: '5'}
                ]
            }
        }
    }
</script>

```

:::

## 限定多选条数上限

::: demo 通过设置`x-option`的`multipleLimit`属性, 可以限制最多可选的条数。

```html

<tpl>
    <div style="width: 180px;">
        <x-select v-model="model6" :multiple-limit="3" :allow-clear="true"  :multiple="true" placeholder="请选择">
            <x-option v-for="item in data6" :key="item.value" :label="item.label" :value="item.value">
            </x-option>
        </x-select>
    </div>
    <p style="margin-top: 15px;">选中的值：{{model6}}</p>
</tpl>

<script>
    export default {
        data() {
            return {
                model6: [],
                data6: [
                    {label: '北京烤鸭', value: '1'},
                    {label: '夫妻肺片', value: '2'},
                    {label: '西湖醋鱼', value: '3'},
                    {label: '过桥米线', value: '4'},
                    {label: '羊肉泡馍', value: '5'}
                ]
            }
        }
    }
</script>

```

:::

## 分组展示

::: demo 通过引入`x-option-group`组件可以进行分组展示。在`x-option-group`上设置`disabled`可以将整个分组禁用。

```html

<tpl>
    <div style="width: 180px;">
        <x-select v-model="model7" placeholder="请选择">
            <x-option-group v-for="group in data7" :key="group.label" :label="group.label" :disabled="group.disabled">
                <x-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></x-option>
            </x-option-group>
        </x-select>
    </div>
</tpl>

<script>
    export default {
        data() {
            return {
                model7: '',
                data7: [{
                    label: '热卖菜品',
                    options: [{
                        value: '1',
                        label: '北京烤鸭'
                    }, {
                        value: '2',
                        label: '夫妻肺片'
                    }]
                }, {
                    label: '人气菜品',
                    options: [{
                        value: '3',
                        label: '西湖醋鱼'
                    }, {
                        value: '4',
                        label: '过桥米线'
                    }]
                }, {
                    label: '已下架',
                    disabled: true,
                    options: [{
                        value: '6',
                        label: '鱼香肉丝'
                    }, {
                        value: '7',
                        label: '宫爆鸡丁'
                    }]
                }]
            }
        }
    }
</script>

```

:::

## 自定义模板

::: demo 将自定义的HTML模板放入`x-option`的`slot`中即可。

```html

<tpl>
    <div style="width: 180px;">
        <x-select v-model="model8" placeholder="请选择">
            <x-option v-for="item in data8" :key="item.value" :label="item.label" :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 10px">{{ item.info }}</span>
            </x-option>
        </x-select>
    </div>
</tpl>

<script>
    export default {
        myName: 'hehe',
        data() {
            return {
                model8: '',
                data8: [
                    {label: '北京烤鸭', value: '1', info: '$16.00'},
                    {label: '夫妻肺片', value: '2', info: '$8.00'},
                    {label: '西湖醋鱼', value: '3', info: '$20.00'},
                    {label: '过桥米线', value: '4', info: '$4.00'},
                    {label: '羊肉泡馍', value: '5', info: '$6.00'}
                ]
            }
        }
    }
</script>
```

:::



## Select Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|-----|-----|-----|
|value|String, Array|无|和`v-model`的绑定值|必选||
|size|String|无|input输入框的大小|可选|large, small|
|placeholder|String|无|未选择时的默认文字|可选||
|disabled|Boolean|false|是否禁用选择器|可选|true, false|
|multiple|Boolean|false|是否开启多选|可选|true, false|
|multipleLimit|Number|0|开启多选时最多允许选择的项目数，为0即不限制||
|allowClear|Boolean|false|是否显示清除按钮|可选|true, false|

## Select Events

|事件名|说明|返回值|设置属性|
|---|---|---|---|
|change|选中值改变时触发|当前选中值|`@change`|

## Option Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|-----|-----|-----|
|value|String, Number|无|选项的值|必选||
|label|String, Number|无|选项的显示文字，不设置的话与`value`相同|可选||
|disabled|Boolean|false|是否禁用该选项|可选|true, false|

## Option-group Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|-----|-----|-----|
|label|String|无|该分组的标题|必选||
|disabled|Boolean|false|是否禁用该分组下所有选项|可选||


</template>

<script>
    import('#/select.less');
    export default{
        data() {
            return {
                model1: '',
                data1: [
                    {label: '北京烤鸭', value: '1'},
                    {label: '夫妻肺片', value: '2'},
                    {label: '西湖醋鱼', value: '3'},
                    {label: '过桥米线', value: '4'},
                    {label: '羊肉泡馍', value: '5'},
                    {label: '宫爆鸡丁', value: '6'},
                    {label: '三鲜丸子', value: '7'},
                    {label: '鱼香肉丝', value: '8'},
                    {label: '麻婆豆腐', value: '9'}
                ],
                model2: '',
                data2: [
                    {label: '北京烤鸭', value: '1'},
                    {label: '夫妻肺片', value: '2', disabled: true},
                    {label: '西湖醋鱼', value: '3'},
                    {label: '过桥米线', value: '4'},
                    {label: '羊肉泡馍', value: '5'}
                ],
                model3: '',
                data3: [
                    {label: '北京烤鸭', value: '1'},
                    {label: '夫妻肺片', value: '2'},
                    {label: '西湖醋鱼', value: '3'},
                    {label: '过桥米线', value: '4'},
                    {label: '羊肉泡馍', value: '5'}
                ],
                disabled: true,
                model4: '',
                data4: [
                    {label: '北京烤鸭', value: '1'},
                    {label: '夫妻肺片', value: '2'},
                    {label: '西湖醋鱼', value: '3'},
                    {label: '过桥米线', value: '4'},
                    {label: '羊肉泡馍', value: '5'}
                ],
                model5: [],
                data5: [
                    {label: '北京烤鸭', value: '1'},
                    {label: '夫妻肺片', value: '2'},
                    {label: '西湖醋鱼', value: '3'},
                    {label: '过桥米线', value: '4'},
                    {label: '羊肉泡馍', value: '5'}
                ],
                model6: [],
                data6: [
                    {label: '北京烤鸭', value: '1'},
                    {label: '夫妻肺片', value: '2'},
                    {label: '西湖醋鱼', value: '3'},
                    {label: '过桥米线', value: '4'},
                    {label: '羊肉泡馍', value: '5'}
                ],
                model7: '',
                data7: [{
                    label: '热卖菜品',
                    options: [{
                        value: '1',
                        label: '北京烤鸭'
                    }, {
                        value: '2',
                        label: '夫妻肺片'
                    }]
                }, {
                    label: '人气菜品',
                    options: [{
                        value: '3',
                        label: '西湖醋鱼'
                    }, {
                        value: '4',
                        label: '过桥米线'
                    }]
                }, {
                    label: '已下架',
                    disabled: true,
                    options: [{
                        value: '6',
                        label: '鱼香肉丝'
                    }, {
                        value: '7',
                        label: '宫爆鸡丁'
                    }]
                }],
                model8: '',
                data8: [
                    {label: '北京烤鸭', value: '1', info: '$16.00'},
                    {label: '夫妻肺片', value: '2', info: '$8.00'},
                    {label: '西湖醋鱼', value: '3', info: '$20.00'},
                    {label: '过桥米线', value: '4', info: '$4.00'},
                    {label: '羊肉泡馍', value: '5', info: '$6.00'}
                ],
                data9: 'hehe'
            };
        },
        methods: {
        }
    };
</script>
