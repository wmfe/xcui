<template lang="md">
# Select多功能选择框


## 使用场景

1. 替代原生下拉框，支持多选
2. 支持Array, Object等格式
3. 支持进行输入建议，远程搜索等
4. 支持optionGroup

## DEMO

<demo>
    <example title="single - 基本模式 options(Array)">
        <xcui-select class-name="select-demo" placeholder="Select one"
                     :custom-label="reRender"
                     :close-after-select="closeAfterSelect"
                     :selected="defaultValue"
                     @change="selectChange2"
                     @select="onSelect2"
                     :options="dataSource2">
        </xcui-select>
    </example>
    <example title="single - 基本模式 options(Object)">
        <xcui-select class-name="select-demo" placeholder="Select one"
                     @change="selectChange"
                     @select="onSelect"
                     :options="dataSource"></xcui-select>
    </example>
    <example title="自定义label的字段(label='text')">
        <xcui-select class-name="select-demo" placeholder="Select one"
                     label="text"
                     @change="selectChange"
                     :options="dataSource"></xcui-select>
        <pre>
    {
        name: 'jake',
        label: 'jake',
        text: '测试1',
        disable: true
    }</pre>
    </example>
    <example title="禁用(:disabled)">
        <xcui-select class-name="select-demo" placeholder="disable"
                     :disabled="disable"
                     @change="selectChange"
                     :options="dataSource"></xcui-select>
    </example>
    <example title="禁用单个option(:disabled)">
        <xcui-select class-name="select-demo" placeholder="disable"
                     @change="selectChange"
                     :options="dataSourceDisable"></xcui-select>
    </example>
    <example title="定制label(:custom-label)">
        <xcui-select class-name="select-demo" placeholder="Select one"
                     :custom-label="reRenderLabel"
                     @change="selectChange2" :options="dataSource"></xcui-select>
    </example>
    <example title="定制 option list(option-partial && Vue.partial)">
        <xcui-select class-name="select-demo" placeholder="Select one"
                     option-partial="customOptionPartial" :custom-label="reRender"
                     @change="selectChange2" :options="partialSource"></xcui-select>
    </example>
    <example title="省市联动">
        <xcui-select class-name="select-demo" placeholder="选择省"
                     @change="provinceChange" :options="provinceData"></xcui-select>
        <xcui-select v-if="selectCityData.length>0" class-name="select-demo" placeholder="选择市"
                     @change="cityChange" :options="selectCityData"></xcui-select>
        {{selectProvinceValue}} - {{selectCityValue}}
    </example>
    <example title="input Local Search">
        <xcui-select class-name="select-demo" placeholder="选择一个城市"
                     show-search search-empty-text="没有搜索结果哎..."
                     @search-change="searchChange"
                     @change="localSearchChange"
                     :options="localSearchSource">
        </xcui-select>
        输入值: {{localSearchValue}}
        选择结果: {{localSearchResult}}
    </example>
    <example title="智能输入">
        <xcui-select class-name="select-demo" placeholder="输入邮箱"
                     show-search
                     @search-change="asyncSearchChange"
                     @change="asyncSearchOnChange"
                     :options="asyncSearchSource">
        </xcui-select>
    </example>
    <example title="远程数据">
        远程搜索
        <xcui-select class-name="select-demo" placeholder="搜索"
                     show-search
                     clear-on-select
                     @search-change="serverSearchChange"
                     @change="serverSearchOnChange"
                     :options="serverSearchSource">
        </xcui-select>
        {{serverSearchValue}}
        <br>
        ajax请求不能耦合select组件, 提供EVENT(@search-change)让使用者进行数据获取 & options赋值
    </example>
    <example title="option Group (数据格式一)">
        <xcui-select class-name="select-demo" placeholder="搜索"
                     optgroup
                     @change="optgroupOnChange"
                     :selected="optgroupDefaultValue"
                     option-partial="optgroupPartial"
                     :options="optgroupSource">
        </xcui-select>
    </example>
    <example title="option Group (数据格式二)">
        <xcui-select class-name="select-demo" placeholder="搜索"
                     optgroup
                     label="name"
                     @change="optgroupOnChange2"
                     :options="optgroupSource2">
        </xcui-select>
    </example>
    <example title="multiple select">
        <xcui-select class-name="select-demo" placeholder="选择多个"
                     multiple
                     :multiple-max=2
                     :selected="multipleDefaultValue"
                     @change="multipleOnChange"
                     @remove="multipleOnRemove"
                     :options="dataSource2">
        </xcui-select>
    </example>
    <example title="multiple select">
        <xcui-select class-name="select-demo" placeholder="选择多个"
                     multiple
                     :multiple-max=2
                     :selected="multipleDefaultValue2"
                     :options="dataSource">
        </xcui-select>
    </example>
</demo>

## 组件依赖
> [fuzzysearch](https://www.npmjs.com/package/fuzzysearch) 模糊搜索模块

## Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
| className | String | 无 | 自定义css类名  | 否 |
| placeholder | String | 无| 选择框默认文字 | 否 |
| optgroup | Boolean | false | 列表分组模式(结合options使用) | 否 |
| multiple | Boolean | false | 多选 | 否 |
| showSearch | Boolean | false | 是否展示搜索框 | 否 |
| clearOnSelect | Boolean | false | 选择完以后清除搜索内容 | 否 |
| label | String | 无 | 自定义label展现key(对应数据中key)  | 否 |
| optionPartial | Vue.partial | 无 | option可定制 | 否 |
| :customLabel | Function | 无| option内容定制|否
| :options | Array |无|默认数据,optgroup模式下数据结构有要求(具体查看demo#option Group) | 是|
| :disabled | Boolean | false | 禁用 | 否 |
| :selected | String | 无 | 默认已选的值 |否|
| @change | function(value) / function(value,groupIndex,valueIndex)  | 无 | 值发生变化的时候(2种模式: 普通模式/分组模式) | 否|
| @select | function(value) / function(value,groupIndex,valueIndex)  | 无 | 发生了选择的时候(2种模式: 普通模式/分组模式)|否|
| @searchChange | function(searchValue) | 无 | 搜索值发生变化的时候 | 否
| @remove | function(removeValue) | 无| 多选模式下移除一个选值的时候 | 否

### 模式说明

- 单选模式:
    ```
    options数据格式一: [
        'item1',
        'item2'
    ]
    options数据格式二: [
        {
            label: '1',
            disable: true,
            name: '1'
        }
    ]
    ```
- 分组模式:
    ```
    optgroup    【必选】
    showSearch  【不支持】
    options数据格式一 : [
        {
            name: 'opt group 1',
            options: [
                'item1',
                'item2'
            ]
        }
    ]
    options数据格式二 : [
        {
            name: 'opt group 2',
            options: [
                {
                    label: '1',
                    disable: true
                }
            ]
        }
    ]
    ```

- 多选模式:
    ```
    multiple 【必选】
    showSearch  【不支持】
    selected: Array
    ```
### 参考

[select2](https://select2.github.io/)
[antd-select](http://ant.design/components/select/)
[vue-multiselect](http://monterail.github.io/vue-multiselect/)
[Keen-UI - select](https://josephuspaye.github.io/Keen-UI/#/ui-select-docs)
[http://amazeui.org/javascript/selected](http://amazeui.org/javascript/selected)
</template>
<style lang="less">
    .select-demo{
        width:200px;
    }
</style>
<script>
    import Vue from 'vue';
    import jsonp from 'jsonp';
    import select from '../components/select/index.vue';
    Vue.partial('customOptionPartial', '<p><i class={{item}}></i> - {{item}}</p>');
    Vue.partial('optgroupPartial', '<span>test - {{option|json}}</span>');
    export default{
        data() {
            return {
                dataSource: [
                    {
                        name: 'jake',
                        label: 'jake',
                        text: '测试1',
                        disable: true
                    },
                    {
                        name: 2,
                        label: 2,
                        text: '测试2'
                    },
                    {
                        name: 3,
                        label: 3,
                        text: '测试3'
                    },
                    {
                        name: 4,
                        label: 4,
                        text: '测试4'
                    }
                ],
                dataSourceDisable: [
                    {
                        name: 'jake',
                        label: 'jake',
                        text: '测试1',
                        disable: true
                    },
                    {
                        name: 2,
                        label: 2,
                        text: '测试2'
                    },
                    {
                        name: 3,
                        label: 3,
                        text: '测试3'
                    },
                    {
                        name: 4,
                        label: 4,
                        text: '测试4'
                    }
                ],
                dataSource2: [
                    'js',
                    'python',
                    'java',
                    'ruby',
                    'markdown',
                    'php',
                    'css',
                    'less'
                ],
                asyncSearchSource: [],
                serverSearchSource: [],
                serverSearchValue: '',
                localSearchSource: [
                    '北京',
                    '南京',
                    '天津',
                    '上海',
                    '静安',
                    '刘安',
                    '安徽',
                    '南充',
                    '广州',
                    '西宁',
                    'angular',
                    'vue',
                    'test',
                    'fis',
                    'node',
                    'express',
                    'koa',
                    'connect'
                ],
                localSearchValue: '',
                localSearchResult: '',
                optgroupDefaultValue: '1',
                optgroupSource: [
                    {
                        name: 'group 1',
                        options: [
                            '1',
                            '2',
                            '3'
                        ]
                    },
                    {
                        name: 'group 2',
                        options: [
                            '11',
                            '12',
                            '13'
                        ]
                    }
                ],
                optgroupSource2: [
                    {
                        name: 'group 1',
                        options: [
                            {
                                name: 'name1',
                                label: 1,
                                text: '测试1',
                                disable: true
                            },
                            {
                                name: 'name2',
                                label: 2,
                                text: '测试2'
                            },
                            {
                                name: 'name3',
                                label: 3,
                                text: '测试3'
                            },
                            {
                                name: 'name4',
                                label: 4,
                                text: '测试4'
                            }
                        ]
                    }
                ],
                optgroupValue: '',
                multipleDefaultValue: [
                    'java',
                    'ruby'
                ],
                multipleDefaultValue2: [
                    2,
                    4
                ],
                value: '',
                value2: '',
                disable: true,
                defaultValue: 'css',
                closeAfterSelect: true,
                //
                partialSource: [
                    'glyphicon glyphicon-envelope',
                    'glyphicon glyphicon-heart',
                    'glyphicon glyphicon-music',
                    'glyphicon glyphicon-user',
                    'glyphicon glyphicon-road'
                ],
                // 省市联动数据
                selectProvinceValue: '',
                selectCityValue: '',
                provinceData: ['浙江', '江苏'],
                selectCityData: [],
                cityData: {
                    浙江: ['杭州', '宁波', '温州'],
                    江苏: ['南京', '苏州', '镇江']
                }
            };
        },
        watch: {
            'selectProvinceValue'(province) {
                this.selectCityData = this.cityData[province] || null;
                this.selectCityValue = '';
            }
        },
        components: {
            'xcui-select': select
        },
        created() {
            let me = this;
            setTimeout(function () {
                me.optgroupDefaultValue = '11';
            }, 1000);
        },
        methods: {
            selectChange(v) {
                this.value = v;
            },
            selectChange2(v) {
                this.value2 = v;
            },
            reRenderLabel(item) {
                return `${item.text} - ${item.name}`;
            },
            reRender(item) {
                return `${item}`;
            },
            onSelect({name}) {
                // console.log(`选择了${name}`);
            },
            onSelect2(value) {
                // console.log(`选择了${value}`);
                this.defaultValue = value;
            },
            // 省市联动
            provinceChange(value) {
                this.selectProvinceValue = value;
            },
            cityChange(value) {
                this.selectCityValue = value;
            },
            // searchChange
            searchChange(v) {
                this.localSearchValue = v;
            },
            localSearchChange(value) {
                this.localSearchResult = value;
            },
            asyncSearchChange(v) {
                let emails = ['gmail.com', '163.com', 'qq.com'];
                if (v && v.indexOf('@') < 1) {
                    this.asyncSearchSource = emails.map(function (item) {
                        return v + '@' + item;
                    });
                }
                else {
                    this.asyncSearchSource = [];
                }
            },
            asyncSearchOnChange(v) {
                console.log('asycn select:' + v);
            },
            serverSearchChange(v) {
                //
                let me = this;
                jsonp(`http://suggest.taobao.com/sug?code=utf-8&q=${v}`, (err, d) => {
                    if (err) {
                        me.serverSearchSource = [];
                    }
                    else {
                        me.serverSearchSource = d.result.map(v => {
                            return v[0];
                        });
                    }
                });
            },
            serverSearchOnChange(v) {
                this.serverSearchValue = v;
            },
            optgroupOnChange(value, groupIndex, valueIndex) {
                console.log('optgroupOnChange: ', value, 'groupIndex:', groupIndex, 'valueIndex:', valueIndex);
            },
            optgroupOnChange2(value, groupIndex, valueIndex) {
                console.log('optgroupOnChange2: ', value, 'groupIndex:', groupIndex, 'valueIndex:', valueIndex);
            },
            multipleOnChange(v) {
                console.log('multipleOnChange', v);
            },
            multipleOnRemove(v) {
                console.log('multipleOnRemove', v);
            }
        }
    };
</script>
