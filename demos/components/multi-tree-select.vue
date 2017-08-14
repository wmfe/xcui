<template  lang="md">
# MultiTreeSelect 树形多选选择器

高阶组件。树形选择组件，支持同级、跨级模糊搜索。

##

::: demo 基本使用。。

```html

<tpl>
    <div>
        <x-multi-tree-select
        v-model="selectedData"
        :init-data="conf.initData"
        :fields="conf.fields"
        :default-selected-data="conf.defaultSelectedData2"
        default-selected-data-type="KEY"
        :field-texts="conf.fieldTexts"
        @change="selectedMulti"
        ></x-multi-tree-select>
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

## MultiTreeSelect Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|-----|-----|-----|
|value|Object, Array|-|和`v-model`的绑定值，返回值的类型和结构由selected-data-type区分|可选||
|initData|Object|-|初始数据|必选||
| fields              | Array  |-|初始数据嵌套的各层级列表字段名|必选||
| fieldTexts          | Array  | -|fields 各字段对应的中文名  |必选||
|selectedDataType|String|INDEX|确定value的数据Data Type。默认为INDEX，即value为以fields顺序的二维数组|可选|INDEX/KEY/LAST/DETAIL|
| defaultSelectedData | Object, Array  |[]|初始会默认选中的选项标识列表|可选||
|defaultSelectedDataType|String|LAST|确定接受defaultSelectedData的数据Data Type。如果为ALL，则表示默认全选。|可选|INDEX/KEY/LAST|
| defaultSelectAll | Boolean  |true|初始化是否全选。设置为`true`时，defaultSelectedData无效|可选||
| allowSearch | Boolean  |true|是否显示跨级模糊搜索框|可选||
| keyName             | String | key  | 初始数据中选项的`标识`字段对应的键名 |可选||
| textName             | String |  text | 初始数据中选项的`名称`字段对应的键名 |可选||
| levelDepth             | Number |  fields.length | initData允许传入多级数据，通过此字段可以动态控制切换，以展示部分层级数据 |可选||

## MultiTreeSelect Events

|事件名|说明|返回值|设置属性|
|---|---|---|---|
|change|选中值改变时触发|数据类型为ALL的返回值|`@change`|
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
| INDEX | Array|[[ITEM.key, ITEM.key, ...], [ITEM.key, ITEM.key, ...], ...]                   | 选项key的二维数组， 第一维数组的索引按fields数组顺序。     |
| KEY | Object|{ field[0]:[ITEM.key, ITEM.key, ...], field[1]: [ITEM.key, ITEM.key, ...], ...}                  | 以fields字段为key所组成的对象，key对应的值为对应层级所选的ITEM.key列表    |
| LAST | Array| [ITEM.key, ITEM.key, ...]                | 最后一级选项ITEM.key的总列表     |
| DETAIL | Array|{selected: LAST, indexSelected: INDEX, isAllSelected: Boolean, isAllNoneSelected: Boolean}              | 分别按LAST,INDEX结构的所选项、是否全选和 是否全未选 所组成的对象     |

## Data Type示例

### initData
```javascript
{
    "category_list": [
      {
        "key": "1", "text": "清新绿植",
        "sub_category": [
          { "key": "2", "text": "多肉植物" },
          {  "key": "3", "text": "盆栽植物" },
          { "key": "5", "text": "绿色观赏植物" }
        ]
      },
      {
        "key": "6", "text": "商务花篮",
        "sub_category": [
          { "key": "7", "text": "开业花篮" },
          {  "key": "8", "text": "展会布置花篮" },
          { "key": "11", "text": "礼仪花篮" }
        ]
      }
    ]
}
```
### ITEM
```javascript
 {key: 2, text: '多肉植物'}
```
### INDEX
```javascript
// 表示已选择第一列 “清新绿植”，第二列“开业花篮”和“礼仪花篮”
[
    [1], [7, 11]
]
```
### KEY
```javascript
// 表示已选择第一列 “清新绿植”，第二列“开业花篮”和“礼仪花篮”
{
    category_list: [1],
    sub_category: [7, 11]
}
```
### LAST
```javascript
// 表示已选择第一列 “清新绿植”下所有第二列项，及第二列“开业花篮”和“礼仪花篮”
[2, 3, 5, 7, 11]
```
### DETAIL
```javascript
// 提供更多的数据信息
{
    selected: LAST, // LAST结构的已选择项
    indexSelected: INDEX, // INDEX结构的已选择项
    isAllSelected: false, // 是否全选
    isAllNoneSelected: false // 是否全未选
}

```
</template>
<script>
import testData from '../test-data/tree-select.json';
export default {
    data() {
        return {
            conf: {
                fields: [ "category_list", "sub_category" ],
                fieldTexts: [ "一级", "二级" ],
                defaultSelectedData: ['2', '3', '5','7','11'],
                defaultSelectedData3: [['1'], ['7', '11']],
                defaultSelectedData2: {
                    category_list: ['1'],
                    sub_category: ['7', '11']
                },
                initData: testData
            },
            selectedData: {}
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
    }
};
</script>
<style>
</style>
