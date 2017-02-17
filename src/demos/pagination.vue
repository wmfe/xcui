<template lang="md">
# Pagination 页码

## 使用场景

- 表格或其他需要分页的页面元素。
- 支持两种类型的页码： `Mini` 迷你页码，一般用于元素顶部， `Standard` 标准页码, 一般用于元素底部；

# Demo

<demo>
    <example title="两种翻页展示">
        <div class="row">
            <div class="col-md-12 text-right">
                <xcui-pagination
                    v-show="total > 0"
                    type="mini"
                    @go-to-page="goToPage"
                    :current-page-num="currentPageNum"
                    :total="total"
                    :page-size="pageSize"
                    ></xcui-pagination>
            </div>
        </div>
        <table class="table table-hover table-condensed">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tr v-for="item in list">
                <td v-text="item.id"></td>
                <td v-text="item.name"></td>
            </tr>
        </table>
        <xcui-pagination
            v-show="total > 0"
            @go-to-page="goToPage"
            @change-pagesize="onChangeSize"
            :current-page-num="currentPageNum"
            :total="total"
            :page-size="pageSize"
            ></xcui-pagination>
    </example>
</demo>

## Props
| 名字           | 类型    | 是否必选 | 默认              | 可选范围            | 描述                                                              |
|----------------|---------|----------|-------------------|---------------------|-------------------------------------------------------------------|
| type           | String  | 否       | standard          | standard,mini       | 控制样式选择                                                      |
| currentPageNum | Number  | 否       | 1                 | > 0                 | 当前页码                                                          |
| total          | Number  | 是       | 0                 | >= 0                | 总条数                                                            |
| pageSize       | Number  | 否       | 20                | 取自`pageSizeRange` | 每页条数                                                          |
| withPageSize   | Boolean | 否       | true              |                     | 是否展示`pageSize`设置挂件                                        |
| pageSizeRange  | Array   | 否       | [10, 20, 50, 100] |                     | `pageSize`设置挂件的下拉菜单选项范围 `withPageSize`为 true 时生效 |
| rangeLength    | Number  | 否       | 10                | > 1                 | 页码按钮的展示个数                                                |

## Events
| 名称           | 类型                      | 是否必选 | 描述                  |
|----------------|---------------------------|----------|-----------------------|
| goToPage       | function(pageNum){ ... }  | 是       | pageNum:跳转的页码    |
| changePagesize | function(pageSize){ ... } | 否       | pageSize:每页展示条数 |
</template>

<script>
export default {
    name: 'xcui-pagination-demo',
    data() {
        return {
            currentPageNum: 1,
            pageSize: 10,
            list: [],
            total: 0
        };
    },
    methods: {
        genId() {
            return Math.floor(Math.random() * 100);
        },
        fetch(pageNo) {
            return {
                list: (new Array(this.pageSize).fill(undefined)).map((item) => {
                    return {
                        name: 'example',
                        id: this.genId()
                    };
                }),
                total: 55
            };
        },
        goToPage(pageNo, oldPageNo) {
            const { list, total } = this.fetch(pageNo);
            this.list = list;
            this.total = total;
            this.currentPageNum = pageNo;
        },
        onChangeSize(pageSize) {
            this.pageSize = pageSize;// 同步新页面
            this.goToPage(1);// 切换到第一页
        }
    },
    mounted() {
        this.goToPage(1);
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
