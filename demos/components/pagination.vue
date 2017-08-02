<template lang="md">
# Pagination 分页

当数据较多时，使用页码分解数据为多页，通过翻页来展示数据。

## 标准尺寸

::: demo 基本使用，通过处理`change-current`事件来处理页码改变后的当前页码数。`change-current`, `total`, `current-page-num`均为必选参数。

```html

<tpl>
    <x-pagination
        @change-current="goToPage"
        :current-page-num="num1"
        :total="total"
        :page-size="pageSize">
    </x-pagination>
</tpl>

<script>
    export default {
        data() {
            return {
                num1: 1,
                pageSize: 10,
                total: 100
            };
        },
        methods: {
            goToPage(pageNo, oldPageNo) {
                this.num1 = pageNo;
            }
        }
    };
</script>

```
:::

## 标准尺寸下的其他挂件



::: demo 通过设置`show-sizer`, `show-total`来控制是否显示分页挂件和总页数挂件。`sizer`可用时需要通过`change-pagesize`事件来处理`page-size`。

```html

<tpl>
    <x-pagination
        show-sizer
        show-total
        @change-current="goToPage2"
        @change-pagesize="onChangeSize"
        :current-page-num="num2"
        :total="total"
        :page-size="pageSize">
    </x-pagination>
</tpl>

<script>
    export default {
        data() {
            return {
                num2: 1,
                pageSize: 10,
                total: 100
            };
        },
        methods: {
            goToPage2(pageNo, oldPageNo) {
                this.num2 = pageNo;
            },
            onChangeSize(pageSize) {
                this.pageSize = pageSize;
                this.goToPage2(1);// 切换到第一页
            }
        }
    };
</script>

```

:::


## 迷你尺寸

::: demo 迷你尺寸可以放在元素顶部，或者在页面空间受到限制时使用。设置`type="mini"`即可。

```html

<tpl>
    <x-pagination
        show-total
        type="mini"
        @change-current="goToPage"
        :current-page-num="num1"
        :total="total"
        :page-size="pageSize">
    </x-pagination>
</tpl>

```

:::

        

## Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|-----|-----|-----|
|type| String| standard | 页码类型为标准或迷你| 可选 | standard,mini |
|current-page-num| Number| 1 | 当前页码 | 必选 | |
|total|Number|0|数据总条数|必选||
|page-size|Number|20|每页条数|可选||
|show-sizer|Boolean|false|是否显示每页条数挂件，标准模式下有效|可选|true, false|
|show-total|Boolean|false|是否显示总条数挂件|可选|true, false|
|page-size-range| Array | [10, 20, 50, 100] | 设置`sizer`的可选范围， `show-sizer`为`true`时生效 |可选||
|range-length| Number | 5 | 页码按钮的展示个数  | 可选 | |


##  Events
|事件名|说明|返回值|设置属性|
|---|---|---|---|
|change-current|当前页码改变时触发|(pageNum, oldPageNum) pageNum:跳转的页码; oldPageNum: 上一个页码; |`@change-current`|
|change-pagesize|每页展示条数改变时触发|(pageSize) pageSize:每页展示条数; |`@change-pagesize`|

</template>

<script>
export default {
    name: 'xcui-pagination-demo',
    data() {
        return {
            num1: 1,
            num2: 1,
            pageSize: 10,
            list: [],
            total: 100
        };
    },
    methods: {
        goToPage(pageNo, oldPageNo) {
            this.num1 = pageNo;
        },
        goToPage2(pageNo, oldPageNo) {
            this.num2 = pageNo;
        },
        onChangeSize(pageSize) {
            this.pageSize = pageSize;// 同步新页面
            this.goToPage2(1);// 切换到第一页
        }
    },
    mounted() {
        // this.goToPage(1);
    }
};
</script>

<style lang="less">
    .table{
        border: 1px solid #ddd;
        background-color: #fff;
        margin-top: 15px;
    }
</style>
