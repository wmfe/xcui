<template lang="md">
# tabs 标签页

将大块内容按照类别进行分割的组件。

## 基础使用

::: demo 基础、简洁的标签页。

```html
<tpl>
    <x-tabs :active-name="'tab2'" @tab-click="onClickNav">
        <x-tab-pane label="标签一" name="tab1">内容一</x-tab-pane>
        <x-tab-pane label="标签二" name="tab2">内容二</x-tab-pane>
        <x-tab-pane label="标签三" name="tab3">内容三</x-tab-pane>
        <x-tab-pane label="标签四" name="tab4">内容四</x-tab-pane>
    </x-tabs>
</tpl>
<script>
    export default {
        methods: {
            onClickNav(data) {
                console.log(data);
            }
        }
    };
</script>
```

:::

## 禁用

::: demo 设置 `disabled` 禁用某个的标签页。

```html
<tpl>
    <x-tabs>
        <x-tab-pane label="标签一" name="tab1">内容一</x-tab-pane>
        <x-tab-pane label="标签二" name="tab2" disabled>内容二</x-tab-pane>
        <x-tab-pane label="标签三" name="tab3">内容三</x-tab-pane>
        <x-tab-pane label="标签四" name="tab4">内容四</x-tab-pane>
    </x-tabs>
</tpl>
```

:::

## 自定义图标

::: demo 配合 Icon 图标，设置`x-tab-pane`的 `icon`属性，实现自定义图标。

```html
<tpl>
    <x-tabs>
        <x-tab-pane label="图片" name="tab1" icon="image">图片</x-tab-pane>
        <x-tab-pane label="音乐" name="tab2" icon="music-note">音乐</x-tab-pane>
        <x-tab-pane label="文件" name="tab3" icon="document">文件</x-tab-pane>
    </x-tabs>
</tpl>
```

:::

## 卡片样式

::: demo 设置属性 `type` 为 `card` 可以显示卡片样式。

```html
<tpl>
    <x-tabs type="card">
        <x-tab-pane label="标签一" name="tab1">内容一</x-tab-pane>
        <x-tab-pane label="标签二" name="tab2">内容二</x-tab-pane>
        <x-tab-pane label="标签三" name="tab3">内容三</x-tab-pane>
        <x-tab-pane label="标签四" name="tab4">内容四</x-tab-pane>
    </x-tabs>
</tpl>
```

:::

## 滑动

::: demo 当选项卡很多时，可以进行左右滑动。设置高度，控制内容滚动。

```html
<tpl>
    <x-tabs height="150">
        <x-tab-pane label="标签一" name="tab1">
            <p>XCUI的目标是：</p>
            <p>满足桌面端页面大部分基础组件需求。</p>
            <p>快速开发基于 Vue2.0 构建的项目。</p>
            <p>保持小体积, 无其他js库依赖。</p>
            <p>简洁优雅。</p>
        </x-tab-pane>
        <x-tab-pane label="标签二" name="tab2">内容二</x-tab-pane>
        <x-tab-pane label="标签三" name="tab3">内容三</x-tab-pane>
        <x-tab-pane label="标签四" name="tab4">内容四</x-tab-pane>
        <x-tab-pane label="标签五" name="tab5">内容五</x-tab-pane>
        <x-tab-pane label="标签六" name="tab6">内容六</x-tab-pane>
        <x-tab-pane label="标签七" name="tab7">内容七</x-tab-pane>
        <x-tab-pane label="标签八" name="tab8">内容八</x-tab-pane>
        <x-tab-pane label="标签九" name="tab9">内容九</x-tab-pane>
        <x-tab-pane label="标签十" name="tab10">内容十</x-tab-pane>
        <x-tab-pane label="标签十一" name="tab11">内容十一</x-tab-pane>
        <x-tab-pane label="标签十二" name="tab12">内容十二</x-tab-pane>
        <x-tab-pane label="标签十三" name="tab13">内容十三</x-tab-pane>
    </x-tabs>
</tpl>
```
:::

## 选项卡位置

::: demo 可以设置 `tabPosition` 为 `left`, 将选项卡定位在左侧；此时设置高度，当选项卡很多时，可以进行上下滑动。

```html
<tpl>
    <x-tabs
        tab-position="left"
        height="300"
    >
        <x-tab-pane label="标签一" name="tab1">内容一</x-tab-pane>
        <x-tab-pane label="标签二" name="tab2">内容二</x-tab-pane>
        <x-tab-pane label="标签三" name="tab3">内容三</x-tab-pane>
        <x-tab-pane label="标签四" name="tab4">内容四</x-tab-pane>
        <x-tab-pane label="标签五" name="tab5">内容五</x-tab-pane>
        <x-tab-pane label="标签六" name="tab6">内容六</x-tab-pane>
        <x-tab-pane label="标签七" name="tab7">内容七</x-tab-pane>
        <x-tab-pane label="标签八" name="tab8">内容八</x-tab-pane>
        <x-tab-pane label="标签九" name="tab9">内容九</x-tab-pane>
    </x-tabs>
</tpl>
```
:::

## 删除标签

::: demo 设置属性 `closable` 配置标签是否可删除, 删除标签页按钮只能在选项卡样式的标签页下使用。

```html
<tpl>
    <x-tabs type="card" @tab-remove="onClickRemove" closable>
        <x-tab-pane label="标签一" name="tab1">内容一</x-tab-pane>
        <x-tab-pane label="标签二" name="tab2">内容二</x-tab-pane>
        <x-tab-pane label="标签三" name="tab3">内容三</x-tab-pane>
        <x-tab-pane label="标签四" name="tab4">内容四</x-tab-pane>
    </x-tabs>
</tpl>
<script>
    export default {
        methods: {
            onClickRemove(data) {
                console.log(data);
            }
        }
    };
</script>
```

:::

## 自定义添加

::: demo 设置 `slot`为 `extra` 可以在页签右边添加附加操作。

```html
<tpl>
    <x-tabs
        :active-name="currentName"
        type="card"
    >
        <x-tab-pane
            v-for="tabItem in tabData"
            :label="tabItem.label"
            :name="tabItem.name"
            :key="tabItem.name"
            closable
        >
            {{tabItem.content}}
        </x-tab-pane>
        <x-button
            slot="extra"
            icon="plus-round"
            type="primary"
            @click="onClickAdd"
        >add</x-button>
    </x-tabs>
</tpl>
<script>
    export default {
        data() {
            return {
                tabData: [
                    {
                        label: 'tab 1',
                        name: '1',
                        content: 'content 1'
                    },
                    {
                        label: 'tab 2',
                        name: '2',
                        content: 'content 2'
                    },
                    {
                        label: 'tab 3',
                        name: '3',
                        content: 'content 3'
                    }
                ],
                tabIndex: 3,
                currentName: '2'
            }
        },
        methods: {
            onClickAdd() {
                let newTabName = ++this.tabIndex + '';
                this.tabData.push({
                    label: 'new Tab',
                    name: newTabName,
                    content: 'new content'
                });
                this.currentName = newTabName;
            }
        }
    };
</script>

```

:::

## Tabs Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|-----|-----|-----|
|active-name|String|第一个选项卡的 name|选中选项卡的 name|可选|-|
|type|String|-|选项卡的类型|可选|card|
|closable|Boolean|false|选项卡是否可以关闭|可选|-|
|height|String|-|tabs 组件的高度，当内容高度超过时，可滚动|可选|-|
|tabPosition|String|-|选项卡的位置|可选|left|

## Tabs Events

|事件名|说明|返回值|设置属性|
|---|---|---|---|
|tab-click|tab 被选中时触发|被选中的标签 tab 实例|`@tab-click`|
|tab-remove|tab 被关闭时触发|被选中的标签 tab 实例|`@tab-remove`|

## Tab-pane Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|-----|-----|-----|
|label|String|无|选择卡的标题|必选|-|
|icon|String|无|选择卡的图标|可选|-|
|name|String|无|与选项卡 activeName 对应的标识符，表示选项卡别名|可选||
|disabled|Boolean|false|是否禁用|可选|-|
|closable|Boolean|false|选项卡是否可关闭|可选|-|

## Tabs slot

| 名字 | 描述 |
|-----|-----|
|extra|选项卡右侧附加内容|

</template>

<script>
    import '#/tabs.less';

    export default {
        data() {
            return {
                tabData: [
                    {
                        label: 'tab 1',
                        name: '1',
                        content: 'content 1'
                    },
                    {
                        label: 'tab 2',
                        name: '2',
                        content: 'content 2'
                    },
                    {
                        label: 'tab 3',
                        name: '3',
                        content: 'content 3'
                    }
                ],
                tabIndex: 3,
                currentName: '2',
                content: 'haha'
            }
        },
        methods: {
            onClickNav(data) {
                console.log(data);
            },
            onClickRemove(data) {
                console.log(data);
            },
            onClickAdd() {
                let newTabName = ++this.tabIndex + '';
                this.tabData.push({
                    label: 'new Tab',
                    name: newTabName,
                    content: 'new content'
                });
                this.currentName = newTabName;
            }
        }
    };
</script>
