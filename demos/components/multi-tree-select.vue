<template  lang="md">
# MultiTreeSelect 树形多选选择器

树形选择组件（多选）。

支持同级、跨级模糊搜索，支持全选。

支持多种格式的返回值及默认值。

单选树形选择器请查看[SingleTreeSelect](#/component/single-tree-select)

## 配置选项

::: demo 通过填入必填值及相关可选值，可以动态查看DEMO返回值及其格式。相关模板代码实时生成于TextArea框。

```html

<tpl>
    <div>
        <x-multi-tree-select
        ref="multitreeselect"
        v-model="selectedData"
        :init-data="conf.initData"
        :fields="conf.fields"
        :field-texts="conf.fieldTexts"
        :default-selected-data="computedDefaultData"
        :default-select-all="defaultSelectAll"
        :selected-data-type="selectedDataType"
        :default-selected-data-type="defaultSelectedDataType"
        :allow-search="allowSearch"
        :level-depth="levelDepth"
        :disabled="disabled"
        @change="onChange"
        ></x-multi-tree-select>
    </div>
</tpl>

<div class="xcui-multi-tree-select-ctrl">

<div class="title-label"><span>必选值：</span></div>
<x-row class="row">
    <x-col :span="6" class="ctrl-label">v-model返回值<x-tooltip content="v-model绑定的返回值">
          <x-icon name="help-circled" size="16"></x-icon>
    </x-tooltip>:</x-col>
    <x-col :span="17">{{selectedData}}</x-col>
</x-row>
<x-row class="row">
    <x-col :span="6" class="ctrl-label">initData<x-tooltip content="传入的初始值">
          <x-icon name="help-circled" size="16"></x-icon>
    </x-tooltip>:</x-col>
    <x-col :span="17"><x-button @click="modalShow = true">配置initData</x-button></x-col>
</x-row>
<x-row class="row">
    <x-col :span="6" class="ctrl-label">fields<x-tooltip content="初始数据嵌套的各层级列表字段名">
          <x-icon name="help-circled" size="16"></x-icon>
    </x-tooltip>:</x-col>
    <x-col :span="17">{{JSON.stringify(conf.fields)}}</x-col>
</x-row>
<x-row class="row">
    <x-col :span="6" class="ctrl-label">fieldTexts<x-tooltip content="fields 各字段对应的中文名">
          <x-icon name="help-circled" size="16"></x-icon>
    </x-tooltip>:</x-col>
    <x-col :span="17">{{JSON.stringify(conf.fieldTexts)}}</x-col>
</x-row>

<div class="title-label"><span>可选值：</span></div>
<x-row class="row" :class="{'is-default': selectedDataType === 'INDEX'}">
    <x-col :span="6"  class="ctrl-label">selectedDataType<x-tooltip content="确定v-model的数据Data Type。不填默认为INDEX">
          <x-icon name="help-circled" size="16"></x-icon>
    </x-tooltip>:</x-col>
    <x-col :span="17"><x-radio-group v-model="selectedDataType">
        <x-radio label="INDEX">INDEX类型</x-radio>
        <x-radio label="KEY">KEY类型</x-radio>
        <x-radio label="LAST">LAST类型</x-radio>
        <x-radio label="DETAIL">DETAIL类型</x-radio>
    </x-radio-group></x-col>
</x-row>
<x-row class="row" :class="{'is-default': !needDefaultData}">
    <x-col :span="6" class="ctrl-label">有defaultSelectedData<x-tooltip content="初始默认值">
          <x-icon name="help-circled" size="16"></x-icon>
    </x-tooltip>:</x-col>
    <x-col :span="17"><x-checkbox v-model="needDefaultData"></x-checkbox>
    <span :style="{'word-wrap': 'break-word'}" v-show="needDefaultData">{{JSON.stringify(conf.defaultSelectedData[defaultSelectedDataType])}}</span></x-col>
</x-row>
<x-row class="row" :class="{'is-default': defaultSelectedDataType === 'LAST'}">
    <x-col :span="6"  class="ctrl-label">defaultSelectedDataType<x-tooltip content="确定接受defaultSelectedData的数据Data Type。不填默认为LAST">
          <x-icon name="help-circled" size="16"></x-icon>
    </x-tooltip>: </x-col>
    <x-col :span="17"><x-radio-group v-model="defaultSelectedDataType">
        <x-radio label="INDEX" :disabled="defaultSelectAll">INDEX类型</x-radio>
        <x-radio label="KEY" :disabled="defaultSelectAll">KEY类型</x-radio>
        <x-radio label="LAST" :disabled="defaultSelectAll">LAST类型</x-radio>
    </x-radio-group></x-col>
</x-row>
<x-row class="row" :class="{'is-default': !defaultSelectAll}">
    <x-col :span="6"  class="ctrl-label">defaultSelectAll<x-tooltip content="初始化时是否全选">
          <x-icon name="help-circled" size="16"></x-icon>
    </x-tooltip>: </x-col>
    <x-col :span="17"><x-checkbox v-model="defaultSelectAll">{{defaultSelectAll}}</x-checkbox></x-col>
</x-row>
<x-row class="row" :class="{'is-default': !disabled}">
    <x-col :span="6" class="ctrl-label">disabled<x-tooltip content="是否显示禁用">
          <x-icon name="help-circled" size="16"></x-icon>
    </x-tooltip>: </x-col>
    <x-col :span="17"><x-checkbox v-model="disabled">{{disabled}}</x-checkbox></x-col>
</x-row>
<x-row class="row" :class="{'is-default': allowSearch}">
    <x-col :span="6" class="ctrl-label">allowSearch<x-tooltip content="是否显示跨级模糊搜索框">
          <x-icon name="help-circled" size="16"></x-icon>
    </x-tooltip>: </x-col>
    <x-col :span="17"><x-checkbox v-model="allowSearch">{{allowSearch}}</x-checkbox></x-col>
</x-row>
<x-row class="row" :class="{'is-default': levelDepth === conf.fields.length}">
    <x-col :span="6"  class="ctrl-label">levelDepth<x-tooltip content="控制展示数据的层数">
          <x-icon name="help-circled" size="16"></x-icon>
    </x-tooltip>: </x-col>
    <x-col :span="17"><x-input-number v-model="levelDepth" size="small" :min="1" :max="conf.fields.length"></x-input-number></x-col>
</x-row>
<x-row class="row" :class="{'is-default': !hasOnchangeFunc}">
    <x-col :span="6"  class="ctrl-label">@change事件: </x-col>
    <x-col :span="17"><x-checkbox v-model="hasOnchangeFunc">{{hasOnchangeFunc?'有': '无'}}</x-checkbox></x-col>
</x-row>
<x-row class="row">
    <x-col :span="6"  class="ctrl-label">模板代码生成: </x-col>
    <x-col :span="17"><x-textarea v-model="textAreaCode" :readonly="true" :autosize="true"></x-textarea></x-col>
</x-row>
<x-row class="row">
    <x-col :span="6"  class="ctrl-label">JS代码生成: </x-col>
    <x-col :span="17"><x-textarea v-model="textAreaJsCode" :readonly="true" :autosize="true"></x-textarea></x-col>
</x-row>
<x-modal v-model="modalShow"
title="配置initData"
size="large"
:on-ok="onOk">
    <x-row class="row">
        <x-col :span="4"  class="ctrl-label">initData层级数: </x-col>
        <x-col :span="17"><x-input-number v-model="genLevelDepth" size="small" :min="1" :max="4"></x-input-number></x-col>
    </x-row>
    <x-row class="row">
        <x-col :span="4" class="ctrl-label">fields:</x-col>
        <x-col :span="17">{{JSON.stringify(generateConf.fields)}}</x-col>
    </x-row>
    <x-row class="row">
        <x-col :span="4" class="ctrl-label">fieldTexts:</x-col>
        <x-col :span="17">{{JSON.stringify(generateConf.fieldTexts)}}</x-col>
    </x-row>
    <x-row class="row">
        <x-col :span="4" class="ctrl-label">keyName:</x-col>
        <x-col :span="17">key</x-col>
    </x-row>
    <x-row class="row">
        <x-col :span="4" class="ctrl-label">textName:</x-col>
        <x-col :span="17">text</x-col>
    </x-row>
    <x-row class="row">
        <x-col :span="4"  class="ctrl-label">示例initData: </x-col>
        <x-col :span="17"><x-textarea v-model="modalInitData" :readonly="true" :autosize="{minRows: 6, maxRows: 16}"></x-textarea></x-col>
    </x-row>
</x-modal>
</div>
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
|defaultSelectedDataType|String|LAST|确定接受defaultSelectedData的数据Data Type。|可选|INDEX/KEY/LAST|
| defaultSelectAll | Boolean  |true|初始化是否全选。设置为`true`时，defaultSelectedData无效|可选||
| allowSearch | Boolean  |true|是否显示跨级模糊搜索框|可选||
| disabled | Boolean  |false|是否禁用|可选||
| keyName             | String | key  | 初始数据中选项的`标识`字段对应的键名 |可选||
| textName             | String |  text | 初始数据中选项的`名称`字段对应的键名 |可选||
| levelDepth             | Number |  fields.length | initData允许传入多级数据，通过此字段可以动态控制切换，以展示部分层级数据 |可选||

## MultiTreeSelect Events

|事件名|说明|返回值|设置属性|
|---|---|---|---|
|change|选中值改变时触发|数据类型为DETAIL的返回值|`@change`|
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
    "level_1": [
        {
            "key": "1_2", "text": "测试一级2",
            "level_2": [
                { "key": "2_5", "text": "测试二级5" },
                { "key": "2_6", "text": "测试二级6" },
                { "key": "2_7", "text": "测试二级7" },
                { "key": "2_8", "text": "测试二级8" }
            ]
        },
        {
            "key": "1_3", "text": "测试一级3",
            "level_2": [
                { "key": "2_9", "text": "测试二级9" },
                { "key": "2_10", "text": "测试二级10" },
                { "key": "2_11", "text": "测试二级11" },
                { "key": "2_12", "text": "测试二级12" }
            ]
        }
    ]
}
```
### ITEM
```javascript
 {key: '2_7', text: '测试二级7'}
```
### INDEX
```javascript
// 表示已选择第一列 “测试一级3”，及第二列“测试二级7”
 [ ["1_3"], ["2_7"] ]
```
### KEY
```javascript
// 表示已选择第一列 “测试一级3”，及第二列“测试二级7”
{
    "level_1": [  "1_3" ],
    "level_2": [  "2_7" ]
}
```
### LAST
```javascript
// 表示已选择第一列 “测试一级3”下所有第二列项，及第二列“测试二级7”
["2_7","2_9","2_10","2_11","2_12"]
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
import '#/multi-tree-select.less';
import '#/button.less';
import '#/radio.less';
import '#/radio-group.less';
import '#/radio-button.less';
import '#/checkbox.less';
import '#/textarea.less';
import '#/tooltip.less';
import '#/input-number.less';
import '#/notice.less';
import '#/modal.less';
import generateConfig from  '../helpers/generate-conf.js';

export default {
    data() {
        return {
            conf: generateConfig(2),
            selectedDataType: 'INDEX',
            defaultSelectedDataType: 'LAST',
            defaultSelectAll: false,
            allowSearch: true,
            disabled: false,
            levelDepth: 2,
            textAreaCode: '',
            textAreaJsCode: '',
            hasOnchangeFunc: false,
            modalShow: false,

            genLevelDepth: 1,
            needDefaultData: false,
            modalInitData: '',
            selectedData: {}
        };
    },
    watch: {
        selectedDataType() {
            this.$refs.multitreeselect.$emit('refresh');
        },
        defaultSelectAll() {
            this.$refs.multitreeselect.$emit('refresh');
        },
        defaultSelectedDataType() {
            this.$refs.multitreeselect.$emit('refresh');
        },
        demoCode(val) {
            this.textAreaCode = val;
        },
         jsCode(val) {
            this.textAreaJsCode = val;
        },
        "generateConf.initData": function(val) {
            this.modalInitData = JSON.stringify(val);
        }
    },
    computed: {
        demoCode() {
            const selectedDataTypeText = this.selectedDataType === 'INDEX' ? '': `\nselected-data-type="${this.selectedDataType}"`;
            const defaultSelectedDataTypeText = this.defaultSelectedDataType === 'LAST' ? '': `\ndefault-selected-data-type="${this.defaultSelectedDataType}"`;
            const selectAllText = this.defaultSelectAll ? `\n:default-select-all="${this.defaultSelectAll}"` : '';
            const disabledText = this.disabled ? `\n:disabled="${this.disabled}"` : '';
            const levelDepthText = this.levelDepth !== this.conf.fields.length ? `\n:level-depth="${this.levelDepth}"`:'';
            const allowSearchText = !this.allowSearch ? `\n:allow-search="${this.allowSearch}"`:'';
            const defaultSelectedDataText = this.needDefaultData ? `\n:default-selected-data='${JSON.stringify(this.conf.defaultSelectedData[this.defaultSelectedDataType])}'`:'';
            let code = `<x-multi-tree-select
    v-model="selectedData"
    :init-data="treeConf.initData"
    :fields='treeConf.fields'
    :field-texts='treeConf.fieldTexts'${defaultSelectedDataText}`
    +`${selectedDataTypeText}${!this.defaultSelectAll ? defaultSelectedDataTypeText: ''}${selectAllText}`
    + `${allowSearchText}${disabledText}${levelDepthText}${this.hasOnchangeFunc ?'\n@change="onChange"':''}`
    +`\n></x-multi-tree-select>`;
            return code;
        },
        jsCode() {
            let code = `treeConf: {
    initData: {/*初始化代码*/},
    fields: ${JSON.stringify(this.conf.fields)},
    fieldTexts: ${JSON.stringify(this.conf.fieldTexts)}
}`;
            return code;
        },
        computedDefaultData() {
            return this.needDefaultData ? this.conf.defaultSelectedData[this.defaultSelectedDataType]:[];
        },
        generateConf() {
            return generateConfig(this.genLevelDepth);
        }
    },
    methods: {
        onChange(obj) {
            if(this.hasOnchangeFunc) {
                this.$Notice.open({
                    title: '触发了@change事件',
                    desc: `返回值类型为DETAIL`
                });
            }
        },
        onOk() {
            this.$set(this, 'conf', this.generateConf);
            this.levelDepth = this.generateConf.fields.length;
        }
    },
    mounted() {
        this.textAreaCode = this.demoCode;
        this.textAreaJsCode = this.jsCode;
        this.modalInitData = JSON.stringify(this.generateConf.initData);
        this.levelDepth = this.conf.fields.length;

        let expentBtn = document.getElementsByClassName('expand-control')[0];
        if(expentBtn) {
            expentBtn.innerHTML = '';
            expentBtn.style.padding = '0';
            expentBtn.style.border = 'none';
        }
    }
};
</script>
<style lang="less" scoped>
@import "../../src/less/theme/default.less";

.xcui-multi-tree-select-ctrl {
    .x-icon {
        color: @brand-primary;
    }
    .is-default {
        color: #999;
    }
    margin-top: 10px;
    .row {
        min-height: 30px;
        line-height: 30px;
        vertical-align: middle;
    }
    .title-label {
        padding: 10px 0;
        &:before {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: #eee;
            position: relative;
            top: 10px;
            left: 0;
        }
        span {
            display: inline-block;
            background: #fff;
            padding: 0 18px 0 18px;
            position: relative;
            margin-left: 30px;
            font-size: 14px;
            font-weight: bold;
        }
    }
    .ctrl-label {
        font-size: 14px;
        text-align: right;
        margin-right: 12px;
        vertical-align: middle;
    }
}
</style>
