<template  lang="md">
# SingleTreeSelect 树形单选选择器

树形选择组件（单选）。

支持同级、跨级模糊搜索。

多选树形选择器请查看[MultiTreeSelect](#/component/multi-tree-select)

## 配置选项

::: demo 通过填入必填项及相关非必填项，可以动态查看DEMO返回值。相关模板代码实时生成于TextArea框。**通过初始化v-model绑定值可以设置默认值。**如果需要单选所选的各级路径信息，可使用`@change`返回值。

```html

<tpl>
    <div>
        <x-single-tree-select
        ref="singletreeselect"
        v-model="selectedData"
        :init-data="conf.initData"
        :fields="conf.fields"
        :field-texts="conf.fieldTexts"
        :allow-search="allowSearch"
        :allow-clear="allowClear"
        :level-depth="levelDepth"
        :disabled="disabled"
        @change="onChange"
        ></x-single-tree-select>
    </div>
</tpl>

<div class="xcui-single-tree-select-ctrl">

<div class="title-label"><span>必选值：</span></div>
<x-row class="row">
    <x-col :span="6" class="ctrl-label">v-model返回值<x-tooltip content="v-model绑定的返回值">
          <x-icon name="help-circled" size="16" color="#46C3C1"></x-icon>
    </x-tooltip>:</x-col>
    <x-col :span="17">{{selectedData}}</x-col>
</x-row>
<x-row class="row">
    <x-col :span="6" class="ctrl-label">initData<x-tooltip content="传入的初始值">
          <x-icon name="help-circled" size="16" color="#46C3C1"></x-icon>
    </x-tooltip>:</x-col>
    <x-col :span="17"><x-button @click="modalShow = true">配置initData</x-button></x-col>
</x-row>
<x-row class="row">
    <x-col :span="6" class="ctrl-label">fields<x-tooltip content="初始数据嵌套的各层级列表字段名">
          <x-icon name="help-circled" size="16" color="#46C3C1"></x-icon>
    </x-tooltip>:</x-col>
    <x-col :span="17">{{JSON.stringify(conf.fields)}}</x-col>
</x-row>
<x-row class="row">
    <x-col :span="6" class="ctrl-label">fieldTexts<x-tooltip content="fields 各字段对应的中文名">
          <x-icon name="help-circled" size="16" color="#46C3C1"></x-icon>
    </x-tooltip>:</x-col>
    <x-col :span="17">{{JSON.stringify(conf.fieldTexts)}}</x-col>
</x-row>

<div class="title-label"><span>可选值：</span></div>
<x-row class="row" :class="{'is-default': !disabled}">
    <x-col :span="6" class="ctrl-label">disabled<x-tooltip content="是否显示禁用">
          <x-icon name="help-circled" size="16" color="#46C3C1"></x-icon>
    </x-tooltip>: </x-col>
    <x-col :span="17"><x-checkbox v-model="disabled">{{disabled}}</x-checkbox></x-col>
</x-row>
<x-row class="row" :class="{'is-default': allowSearch}">
    <x-col :span="6" class="ctrl-label">allowSearch<x-tooltip content="是否显示跨级模糊搜索框">
          <x-icon name="help-circled" size="16" color="#46C3C1"></x-icon>
    </x-tooltip>: </x-col>
    <x-col :span="17"><x-checkbox v-model="allowSearch">{{allowSearch}}</x-checkbox></x-col>
</x-row>
<x-row class="row" :class="{'is-default': allowClear}">
    <x-col :span="6" class="ctrl-label">allowClear<x-tooltip content="是否显示清除按钮">
          <x-icon name="help-circled" size="16" color="#46C3C1"></x-icon>
    </x-tooltip>: </x-col>
    <x-col :span="17"><x-checkbox v-model="allowClear">{{allowClear}}</x-checkbox></x-col>
</x-row>
<x-row class="row" :class="{'is-default': levelDepth === conf.fields.length}">
    <x-col :span="6"  class="ctrl-label">levelDepth<x-tooltip content="控制展示数据的层数">
          <x-icon name="help-circled" size="16" color="#46C3C1"></x-icon>
    </x-tooltip>: </x-col>
    <x-col :span="17"><x-input-number v-model="levelDepth" size="small" :min="1" :max="conf.fields.length"></x-input-number></x-col>
</x-row>
<x-row class="row" :class="{'is-default': !hasOnchangeFunc}">
    <x-col :span="6"  class="ctrl-label">@change事件: </x-col>
    <x-col :span="17"><x-checkbox v-model="hasOnchangeFunc">{{hasOnchangeFunc?'有': '无'}}</x-checkbox></x-col>
</x-row>
<x-row class="row">
    <x-col :span="6"  class="ctrl-label">代码生成: </x-col>
    <x-col :span="17"><x-textarea v-model="textAreaCode" :readonly="true" :autosize="true"></x-textarea></x-col>
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

## SingleTreeSelect Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|-----|-----|-----|
|value|ITEM|-|和`v-model`的绑定值，可以初始化设置默认值|可选||
|initData|Object|-|初始数据|必选||
| fields              | Array  |-|初始数据嵌套的各层级列表字段名|必选||
| fieldTexts          | Array  | -|fields 各字段对应的中文名  |必选||
| allowSearch | Boolean  |true|是否显示跨级模糊搜索框|可选||
| allowClear | Boolean  |true|是否显示清除选项按钮|可选||
| disabled | Boolean  |false|是否禁用|可选||
| keyName             | String | key  | 初始数据中选项的`标识`字段对应的键名 |可选||
| textName             | String |  text | 初始数据中选项的`名称`字段对应的键名 |可选||
| levelDepth             | Number |  fields.length | initData允许传入多级数据，通过此字段可以动态控制切换，以展示部分层级数据 |可选||

## SingleTreeSelect Events

|事件名|说明|返回值|设置属性|
|---|---|---|---|
|change|选中值改变时触发|选中的最后一级，以及其路径{selected: ITEM, path:[ITEM, ITEM...]}|`@change`|
|inited|当组件重新初始化完成后触发（initData，fields，fieldTexts的变化会触发重新初始化）|-|`@inited`|



## Slot
| 名称     | 描述                   |
|----------|------------------------|
| header   | 自定义弹出层的头部区域 |
| footer   | 自定义弹出层的底部区域 |

## Data Type

| 类型结构  | 基本类型  | 结构                        | 描述             |
|----------|--|-------------------------------------|------------------|
| ITEM     | Object|{[keyName]:key, [textName]:text} | 组件中的一个选项 |

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
</template>
<script>
import '#/single-tree-select.less';
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
            allowSearch: true,
            allowClear: true,
            disabled: false,
            levelDepth: 2,
            textAreaCode: '',
            hasOnchangeFunc: false,
            modalShow: false,

            genLevelDepth: 1,
            needDefaultData: false,
            modalInitData: '',
            selectedData: {}
        };
    },
    watch: {
        demoCode(val) {
            this.textAreaCode = val;
        },
        "generateConf.initData": function(val) {
            this.modalInitData = JSON.stringify(val);
        }
    },
    computed: {
        demoCode() {
            const levelDepthText = this.levelDepth !== this.conf.fields.length ? `\n:level-depth="${this.levelDepth}"`:'';
            const allowSearchText = !this.allowSearch ? `\n:allow-search="${this.allowSearch}"`:'';
            const allowClearText = !this.allowClear ? `\n:allow-clear="${this.allowClear}"`:'';
            const disabledText = this.disabled ? `\n:disabled="${this.disabled}"` : '';
            let code = `<x-single-tree-select
    v-model="selectedData"
    :init-data="initData"
    :fields='${JSON.stringify(this.conf.fields)}'
    :field-texts='${JSON.stringify(this.conf.fieldTexts)}'`
    + `${allowSearchText}${allowClearText}${disabledText}${levelDepthText}${this.hasOnchangeFunc ?'\n@change="onChange"':''}`
    +`\n></x-single-tree-select>`;
            return code;
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
                    desc: `返回值为: ${JSON.stringify(obj)}`
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
<style lang="less">
.xcui-single-tree-select-ctrl {
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
