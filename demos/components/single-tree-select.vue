<template  lang="md">
# SingleTreeSelect 树形单选选择器

高阶组件。树形选择组件，支持同级、跨级模糊搜索。

##

::: demo 基本使用。

```html

<tpl>
    <div>
        <x-single-tree-select
        v-model="selectedData"
        :init-data="conf.initData"
        :fields="conf.fields"
        :default-selected-data="conf.defaultSelectedData"
        :field-texts="conf.fieldTexts"
        @change="selectedMulti"
        ></x-single-tree-select>
    </div>
</tpl>

<script>
    export default {
        data() {
            conf: {
                fields: [ "category_list", "sub_category" ],
                fieldTexts: [ "一级", "二级" ],
                initData: initData // 见页面底部initData
            },
            selectedData: {}
        }
    }
</script>
```

:::

## SingleTreeSelect Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|-----|-----|-----|
|value|ITEM|-|和`v-model`的绑定值，可以初始化设置默认值|可选||
|initData|Object|-|初始数据|必选||
| fields              | Array  |-|初始数据嵌套的各层级列表字段名|必选||
| fieldTexts          | Array  | -|fields 各字段对应的中文名  |必选||
| allowSearch | Boolean  |true|是否显示跨级模糊搜索框|可选||
| allowClear | Boolean  |true|是否显示清除选项按钮|可选||
| keyName             | String | key  | 初始数据中选项的`标识`字段对应的键名 |可选||
| textName             | String |  text | 初始数据中选项的`名称`字段对应的键名 |可选||
| levelDepth             | Number |  fields.length | initData允许传入多级数据，通过此字段可以动态控制切换，以展示部分层级数据 |可选||

## SingleTreeSelect Events

|事件名|说明|返回值|设置属性|
|---|---|---|---|
|change|选中值改变时触发|选中的最后一级，以及其路径{selected: ITEM, path:[ITEM, ITEM...]}|`@change`|
|inited|当组件重新初始化完成后触发（initData，fields，fieldTexts，defaultSelectedData的变化会触发重新初始化）|-|`@inited`|



## Slot
| 名称     | 描述                   |
|----------|------------------------|
| header   | 自定义弹出层的头部区域 |
| footer   | 自定义弹出层的底部区域 |

## Data Type

| 类型结构  | 基本类型  | 结构                        | 描述             |
|----------|--|-------------------------------------|------------------|
| ITEM     | Object|{[keyName]:key, [textName]:text} | 组件中的一个选项 |


</template>
<script>
import testData from '../test-data/tree-select.json';
export default {
    data() {
        return {
            conf: {
                fields: [ "category_list", "sub_category" ],
                fieldTexts: [ "一级", "二级" ],
                defaultSelectedData: {key: '11'},
                initData: testData
            },
            selectedData: {key: '11'}
        };
    },
    watch: {
        selectedData: {
            deep: true,
            handler(val) {
                console.log('selectedData', val);
            }
        }
    },
    methods: {
        selectedMulti(obj) {
            console.log(`selected:`, obj);
        }
    },
    mounted() {
        console.log('testData', testData);
        window.se = (obj) => {
            this.$set(this, 'selectedData', obj)
        }
    }
};
</script>
<style>
</style>
