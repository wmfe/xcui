<template lang="md" class="demo-layout">

# Layout 布局

XCUI采用了24栅格布局，把容器窗口进行24等分。

XCUI的栅格系统有`row(行组件)`和`col(列组件)`两个概念。具体使用方法：
- 使用`row`在水平方向建立一组`col`
- 你的内容应该放在`col`内，并且，只有`col`可以作为`row`的直接子元素
- 栅格系统中`col`的`span`属性表示其跨越的范围，其跨度为 `x / 24 * 100%` , 例如，要对一行进行四等分，可用4个`span`为8的`col`来实现
- 相加的总和如果大于24，将另起一行排列。

## 基础布局

::: demo 通过使用`row`组件包裹`col`组件，可以很方便地实现布局。

```html
<tpl>
    <xcui-row>
        <xcui-col span="24"><div class="bg">24: 100%</div></xcui-col>
    </xcui-row>
    <xcui-row>
        <xcui-col span="12"><div class="bg">12: 50%</div></xcui-col>
        <xcui-col span="12"><div class="bg light">12: 50%</div></xcui-col>
    </xcui-row>
    <xcui-row>
        <xcui-col span="8"><div class="bg">8: 33.33%</div></xcui-col>
        <xcui-col span="8"><div class="bg light">8: 33.33%</div></xcui-col>
        <xcui-col span="8"><div class="bg">8: 33.33%</div></xcui-col>
    </xcui-row>
    <xcui-row>
        <xcui-col span="6"><div class="bg">6: 25%</div></xcui-col>
        <xcui-col span="6"><div class="bg light">6: 25%</div></xcui-col>
        <xcui-col span="6"><div class="bg">6: 25%</div></xcui-col>
        <xcui-col span="6"><div class="bg light">6: 25%</div></xcui-col>
    </xcui-row>
    <xcui-row>
        <xcui-col span="4"><div class="bg">4: 16.66%</div></xcui-col>
        <xcui-col span="4"><div class="bg light">4: 16.66%</div></xcui-col>
        <xcui-col span="4"><div class="bg">4: 16.66%</div></xcui-col>
        <xcui-col span="4"><div class="bg light">4: 16.66%</div></xcui-col>
        <xcui-col span="4"><div class="bg">4: 16.66%</div></xcui-col>
        <xcui-col span="4"><div class="bg light">4: 16.66%</div></xcui-col>
    </xcui-row>
</tpl>
```
:::


## 区块间隔

::: demo 通过设置`gutter`，可以设置区块之间的间隔。建议以`16`的倍数来设置。

```html
<tpl>
    <xcui-row gutter="16">
        <xcui-col span="6"><div class="bg">col-6</div></xcui-col>
        <xcui-col span="6"><div class="bg light">col-6</div></xcui-col>
        <xcui-col span="6"><div class="bg">col-6</div></xcui-col>
        <xcui-col span="6"><div class="bg light">col-6</div></xcui-col>
    </xcui-row>
</tpl>
```
:::



## 左右偏移

::: demo 通过设置`offset`可以将列向右侧偏。例如，`offset="8"` 将元素向右侧偏移了 8 个列（column）的宽度。

```html
<tpl>
    <xcui-row>
        <xcui-col span="8"><div class="bg">col-8</div></xcui-col>
        <xcui-col span="8" offset="8"><div class="bg">col-8 col-offset-8</div></xcui-col>
    </xcui-row>
</tpl>
```
:::


## 栅格排序

::: demo 通过使用`push`和`pull`类就可以很容易的改变列（column）的顺序。

```html
<tpl>
    <xcui-row>
        <xcui-col span="18" push="6"><div class="bg light">col-18 col-push-6</div></xcui-col>
        <xcui-col span="6" pull="18"><div class="bg">col-6 col-pull-18</div></xcui-col>
    </xcui-row>
</tpl>
```
:::

## flex布局 

::: demo 使用`row-flex`定义`flex`布局，其子元素根据不同的值 `start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。

```html
<tpl>
    <p>向左排列</p>
    <xcui-row type="flex" justify="start">
        <xcui-col span="4"><div class="bg">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg light">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg light">col-4</div></xcui-col>
    </xcui-row>
    <p>居中排列</p>
    <xcui-row type="flex" justify="center">
        <xcui-col span="4"><div class="bg">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg light">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg light">col-4</div></xcui-col>
    </xcui-row>
    <p>向右排列</p>
    <xcui-row type="flex" justify="end">
        <xcui-col span="4"><div class="bg">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg light">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg light">col-4</div></xcui-col>
    </xcui-row>
    <p>等宽排列</p>
    <xcui-row type="flex" justify="space-between">
        <xcui-col span="4"><div class="bg">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg light">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg light">col-4</div></xcui-col>
    </xcui-row>
    <p>分散排列</p>
    <xcui-row type="flex" justify="space-around">
        <xcui-col span="4"><div class="bg">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg light">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg light">col-4</div></xcui-col>
    </xcui-row>
</tpl>
```

::: 



## flex对齐

::: demo Flex 子元素垂直对齐。
```html
<tpl>
    <p>顶部对齐</p>
    <xcui-row type="flex" justify="center" align="top">
        <xcui-col span="4"><div class="bg" style="height: 80px">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg light" style="height: 30px">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg" style="height: 100px">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg light" style="height: 60px">col-4</div></xcui-col>
    </xcui-row>
    <p>底部对齐</p>
    <xcui-row type="flex" justify="center" align="bottom">
        <xcui-col span="4"><div class="bg" style="height: 80px">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg light" style="height: 30px">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg" style="height: 100px">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg light" style="height: 60px">col-4</div></xcui-col>
    </xcui-row>
    <p>居中对齐</p>
    <xcui-row type="flex" justify="center" align="middle">
        <xcui-col span="4"><div class="bg" style="height: 80px">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg light" style="height: 30px">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg" style="height: 100px">col-4</div></xcui-col>
        <xcui-col span="4"><div class="bg light" style="height: 60px">col-4</div></xcui-col>
    </xcui-row>
</tpl>

```
:::


## 响应式布局

::: demo 参照`Bootstrap`的[响应式设计](http://getbootstrap.com/css/#grid-media-queries)，预设四个响应尺寸：`xs`, `sm`, `md`, `lg`。调整浏览器的尺寸来看效果。

```html
<tpl>
    <xcui-row>
        <xcui-col :xs="2" :sm="4" :md="6" :lg="8"><div class="bg">col</div></xcui-col>
        <xcui-col :xs="20" :sm="16" :md="12" :lg="8"><div class="bg light">col</div></xcui-col>
        <xcui-col :xs="2" :sm="4" :md="6" :lg="8"><div class="bg">col</div></xcui-col>
    </xcui-row>
</tpl>
```

:::

## 其它属性的响应式

::: demo `span`, `pull`, `push`, `offset`, `order` 属性可以通过内嵌到 `xs`, `sm`, `md`, `lg` 属性中来使用。其中 `xs={6}` 相当于 `xs={ span: 6   }`。

```html
<tpl>
    <xcui-row>
        <xcui-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="bg">col</div></xcui-col>
        <xcui-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="bg">col</div></xcui-col>
        <xcui-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="bg">col</div></xcui-col>
    </xcui-row>
</tpl>
```       

:::

    
## Props

### Row Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|----|----|----|
|gutter|Number|0|栅格的间距|可选||
|type|String|无|布局的模式|可选|`flex`|
|align|String|无|`flex`布局下的垂直对齐方式|可选|`top`, `middle`, `bottom`|
|justify|String|无|`flex`布局下的垂直对齐方式|可选|`start`, `end`, `center`, `space-around`, `space-between`|
|class|String|无|自定义class名称|可选||

### Col Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|----|----|----|
|span|Number, String|无|栅格的占位格数，可选值为0~24的整数，为 0 时，相当于`display:none`|可选||
|order|Number, String|无|栅格的顺序，在`flex`布局模式下有效|可选||
|offset|Number, String|无|栅格左侧的间隔格数|可选||
|push|Number, String|无|栅格向右移动的格数|可选||
|pull|Number, String|无|栅格向左移动的格数|可选||
|xs|Number, Object|无|`< 768px` 响应式栅格，可为栅格数或一个包含其他属性的对象|可选||
|xs|Number, Object|无|`>= 768px` 响应式栅格，可为栅格数或一个包含其他属性的对象|可选||
|xs|Number, Object|无|`>= 992px` 响应式栅格，可为栅格数或一个包含其他属性的对象|可选||
|xs|Number, Object|无|`>= 1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象|可选||


</template>
<script>
    export default {

    };
</script>
<style lang="less">
    .demo-layout {
        .xcui-row {
            margin-bottom: 10px;
        }
        .bg {
            color: #fff;
            padding: 10px 0;
            text-align: center;
            font-size: 14px;
            margin: 0 auto;
            background: #46c3c1;
            &.light {
                opacity: 0.7;
            }
        }
    }
    
</style>
