<template lang="md">
# Pagination页码

## 使用场景

- 表格或其他需要分页的页面元素。
- 支持两种类型的页码： `Standard` 标准页码, 一般用于元素顶部； `Mini` 迷你页码，一般用于元素底部。

# Demo

<demo>
    <example title="两种翻页展示">
        <div class="row">
            <div class="col-md-12 text-right">
                <xcui-pagination
                    type="mini"
            @go-to-page="turnToPage"
                    :current-page-no.sync="currentPageNo"
                    :total="total"
                    :page-size.sync="pageSize"
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
            @go-to-page="turnToPage"
            :current-page-no.sync="currentPageNo"
            :total="total"
            :page-size.sync="pageSize"
            ></xcui-pagination>
    </example>
</demo>

## Props


| 名字          | 类型    | 默认              | 描述                                                              | 可选范围            | 是否必选 |
|---------------|---------|-------------------|-------------------------------------------------------------------|---------------------|----------|
| type          | String  | standard          | 控制样式选择                                                      | standard,mini       | 可选     |
| currentPageNo | Number  | 1                 | 当前页码                                                          | > 0                 | 可选     |
| total         | Number  | 0                 | 总条数                                                            | >= 0                | 必选     |
| pageSize      | Number  | 20                | 每页条数                                                          | 取自`pageSizeRange` | 可选     |
| withPageSize  | Boolean | true              | 是否展示`pageSize`设置挂件                                        |                     | 可选     |
| pageSizeRange | Array   | [10, 20, 50, 100] | `pageSize`设置挂件的下拉菜单选项范围 `withPageSize`为 true 时生效 |                     | 可选     |
| rangeLength   | Number  | 10                | 页码按钮的展示个数                                                | > 1                 | 可选     |
</template>

<script>
import xcuiPagination from '../components/pagination';

export default {
    components: {
        xcuiPagination
    },
    data() {
        return {
            currentPageNo: 1,
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
        turnToPage(pageNo, oldPageNo) {
            const { list, total } = this.fetch(pageNo);
            this.list = list;
            this.total = total;
            this.currentPageNum = pageNo;
        }
    },
    ready() {
        this.turnToPage(1);
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