<template lang="md">
# Tag 标签

## 使用场景

- 标记事物的属性、分类等特性
- 支持关闭标签、点击标签
- 支持禁用标签
- 支持自定义标签样式


## 基本使用

::: demo 基本使用, 可通过添加`closeable`来关闭标签。在`on-close`事件中可使用`event.preventDefault()`来阻止标签隐藏。

```html

<tpl>
    <x-tag>标签一</x-tag>
    <x-tag closeable tag-key="1" :on-close="close1">可关闭标签一</x-tag>
    <x-tag closeable :on-close="close2">可关闭标签二</x-tag>
</tpl>

<script>
    export default {
        methods: {
            close1(e/*{preventDefault}*/, tagInst/*tag instance*/) {
                this.$Message.info(`tagKey为${tagInst.tagKey}的标签被关闭了`);
            },
            close2(e) {
                e.preventDefault();
                this.$Message.info('标签不会被关闭');
            }
        }
    };
</script>
```

:::

## 多彩标签

::: demo XCUI添加了多种预设色彩，用于不同场景。如果预设值不能满足需求，可设置为具体的色值。

```html

<tpl>
    <div>
        <x-tag closeable color="pink">pink</x-tag>
        <x-tag closeable color="red">red</x-tag>
        <x-tag closeable color="orange">orange</x-tag>
        <x-tag closeable color="green">green</x-tag>
        <x-tag closeable color="cyan">cyan</x-tag>
        <x-tag closeable color="blue">blue</x-tag>
        <x-tag closeable color="purple">purple</x-tag>
    </div>
    <div style="margin-top: 15px;">
        <x-tag closeable color="pink-inverse">pink-inverse</x-tag>
        <x-tag closeable color="red-inverse">red-inverse</x-tag>
        <x-tag closeable color="orange-inverse">orange-inverse</x-tag>
        <x-tag closeable color="green-inverse">green-inverse</x-tag>
        <x-tag closeable color="cyan-inverse">cyan-inverse</x-tag>
        <x-tag closeable color="blue-inverse">blue-inverse</x-tag>
        <x-tag closeable color="purple-inverse">purple-inverse</x-tag>
    </div>
    <div style="margin-top: 15px;">
        <x-tag color="#f50">#f50</x-tag>
        <x-tag color="#2db7f5">#2db7f5</x-tag>
        <x-tag color="#87d068">#87d068</x-tag>
        <x-tag color="#108ee9">#108ee9</x-tag>
    </div>

</tpl>


```

:::

## 添加标签

::: demo 添加标签

```html

<tpl>
    <x-tag v-for="tag in tags" :key="tag.name" closeable>{{tag.name}}</x-tag>
    <x-button type="sm" @click="addTag">添加</x-button>
</tpl>

<script>
export default {
    data() {
        return {
            index: 1
        };
    },
    methods: {
        addTag() {
            if (this.tags === null) {
                this.tags = [];
            }
            this.tags.push({name: `新标签${this.index++}`});
        }
    }
};

</script>

```

:::

## 可选择的标签（类checkbox)

::: demo 可选择的标签, 使用`x-tag-checkable`组件来实现。`@change`事件返回的参数中携带当前tag的Vue实例和`checked`状态。

```html

<tpl>
    <x-tag-checkable v-for="tag in tags2"
        :color="tag.color"
        :key="tag.key"
        :tag-key="tag.key"
        :name="tag.name"
        :checked="tag.checked"
        @change="change1">{{tag.name}}</x-tag-checkable>
    <x-tag-checkable disabled>禁用标签</x-tag-checkable>
    <p style="margin-top: 15px;">选中的标签：{{selectedTagNames.length > 0 ? selectedTagNames : ''}}</p>
    <p style="margin-top: 15px;">选中的标签值：{{selectedTagKeys.length > 0 ? selectedTagKeys : ''}}</p>
</tpl>

<script>
export default {
    data() {
        return {
            tags:[{
                name: '电影', color: ''
            }]
            selectedTags: [],
            selectedTagNames: [],
            selectedTagKeys: [],
            tags2: [{
                name: '电影', color: '', key: '0', checked: true
            }, {
                name: '动漫', color: 'pink', key: '1'
            }, {
                name: '音乐', color: 'green', key: '2', checked: true
            }, {
                name: '八卦', color: 'blue', key: '3'
            }, {
                name: '科技', color: 'purple', key: '4'
            }]
        };
    },
    methods: {
        change1(tag, checked) {
            if (checked) {
                let hit;
                this.selectedTags.forEach((v) => {
                    if (v.tagkey === tag.tagkey) {
                        hit = true;
                    }
                });
                if (!hit) {
                    this.selectedTags.push({
                        name: tag.name,
                        color: tag.color,
                        tagkey: tag.tagKey
                    });
                }
            }
            else {
                let i = -1;
                this.selectedTags.forEach((v, index) => {
                    if (v.tagkey === tag.tagKey) {
                        i = index;
                    }
                });
                if (i >= 0) {
                    this.selectedTags.splice(i, 1);
                }
            }
            this.selectedTagNames = this.selectedTags.map((v) => {
                return v.name;
            });
            this.selectedTagKeys = this.selectedTags.map((v) => {
                return v.tagkey;
            });
        }
    }
};

</script>

```

:::



## Tag Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 | 可选值|
|-----|-----|-----|-----|----|----|
|color|String|无|颜色，可设为预设值或色值|可选|pink/red/orange/green/cyan/blue/purple, 加上`-inverse`设为反色|
|tag-key|String, Number|无|tag的标识|可选||
|closeable|Boolean|false|是否可关闭|可选|true, false|
|on-close|function|无|关闭时回调，参数为鼠标事件event和tag实例|可选||
|transition|String|fade|关闭时的过渡效果名称|可选||

## TagCheckable Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 | 可选值|
|-----|-----|-----|-----|----|----|
|color|String|无|颜色，可设为预设值或色值|可选|pink/red/orange/green/cyan/blue/purple, 加上`-inverse`设为反色|
|name|String|false|是否可关闭|可选|true, false|
|disabled|Boolean|false|是否禁用|可选|true, false|
|tag-key|String, Number|无|tag的标识|可选||
|checked|Boolean|false|是否默认选中|否|true,false|


## TagCheckable Events
|事件名|说明|返回值|设置属性|
|---|---|---|---|
|change|点击事件后触发|(TagVueComponent, checked)|`@change`|



</template>

<script>
export default {
    data() {
        return {
            tags: [{name: '新标签', key: 'test'}],
            showTag: false,
            index: 1,
            key: 'data',
            selectedTags: [],
            selectedTagNames: [],
            selectedTagKeys: [],
            tags2: [{
                name: '电影', color: '', key: '0', checked: true
            }, {
                name: '动漫', color: 'pink', key: '1'
            }, {
                name: '音乐', color: 'green', key: '2'
            }, {
                name: '八卦', color: 'blue', key: '3'
            }, {
                name: '科技', color: 'purple', key: '4'
            }]
        };
    },
    methods: {
        close1(e, tagInst) {
            this.$Message.info(`tagKey为${tagInst.tagKey}的标签被关闭了`);
        },
        close2(e) {
            e.preventDefault();
            this.$Message.info('标签不会被关闭');
        },
        closeclick(e) {
            e.preventDefault();
        },
        addTag() {
            if (this.tags === null) {
                this.tags = [];
            }
            this.tags.push({name: `新标签${this.index++}`, key: this.index});
        },
        onCloseTag(e, tagInst) {
            console.log(tagInst.tagKey);
        },
        change1(tag, checked) {
            if (checked) {
                let hit;
                this.selectedTags.forEach((v) => {
                    if (v.tagkey === tag.tagkey) {
                        hit = true;
                    }
                });
                if (!hit) {
                    this.selectedTags.push({
                        name: tag.name,
                        color: tag.color,
                        tagkey: tag.tagKey
                    });
                }
            }
            else {
                let i = -1;
                this.selectedTags.forEach((v, index) => {
                    if (v.tagkey === tag.tagKey) {
                        i = index;
                    }
                });
                if (i >= 0) {
                    this.selectedTags.splice(i, 1);
                }
            }
            this.selectedTagNames = this.selectedTags.map((v) => {
                return v.name;
            });
            this.selectedTagKeys = this.selectedTags.map((v) => {
                return v.tagkey;
            });
        }
    }
};

</script>

