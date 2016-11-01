<template>
    <div class="v-pagination-wrap {{ class || '' }}">
        <template v-if="type === 'standard' ">
            <div class="row">
                <div v-if="withPageSize" class="v-pagination-page-size col-md-3">
                    共<span v-text="total"></span>条
                    &nbsp;&nbsp;
                    每页
                    <select v-model="pageSize">
                        <option v-for="opt in pageSizeRange" :value="opt" v-text="opt">1</option>
                    </select>
                    条
                </div>
                <div class="v-pagination-standard col-md-9 text-right">
                    <div class="btn-group">
                        <button
                            @click="prev"
                            class="btn btn-default"
                            :class="{'disabled': currentPageNo == 1}">上一页</button>

                        <button class="btn btn-default page-btn" v-if="getRangePage.begin > 1">
                            <a href="javascript:void(0);" @click="turnToPage(1)">1</a>
                        </button>
                        <button class="btn btn-default page-btn" v-if="getRangePage.begin > 1">
                            <a class="apostrophe">...</a>
                        </button>

                        <button class="btn btn-default page-btn" v-for="number in (getRangePage.end - getRangePage.begin + 1)" :class="{'active': isActive(number)}">
                            <a v-if="isActive(number)" href="javascript:void(0);"  v-text="number + getRangePage.begin"></a>
                            <a v-else href="javascript:void(0);"  v-text="number + getRangePage.begin" @click="turnToPage(number + getRangePage.begin)"></a>
                        </button>

                        <button class="btn btn-default page-btn" v-if="getRangePage.end < totalPageCount">
                            <a class="apostrophe">...</a>
                        </button>
                        <button class="btn btn-default page-btn" v-if="getRangePage.end < totalPageCount">
                            <a href="javascript:void(0);" v-text="totalPageCount" @click="turnToPage(totalPageCount)"></a>
                        </button>

                        <button
                            @click="next"
                            class="btn btn-default"
                            :class="{'disabled': currentPageNo == totalPageCount}">下一页</button>
                    </div>
                </div>
            </div>
        </template>
        <div v-else class="v-pagination-mini">
            <span>共<span v-text="total"></span>条</span>
            <button class="btn btn-default prev-trigger" :class="{'disabled': currentPageNo < 2}" @click="prev">
                <span class="caret"></span>
            </button>
            <span v-text="currentPageNo"></span>/<span v-text="totalPageCount"></span>
            <button class="btn btn-default next-trigger" :class="{'disabled': currentPageNo == totalPageCount}" @click="next">
                <span class="caret"></span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'xcui-pagination',
    props: {
        'type': {
            type: String,
            default: 'standard' // standard / mini
        },
        'currentPageNo': {
            type: Number,
            default: 1
        },
        'total': {
            type: Number,
            default: 0
        },
        'pageSize': {
            type: Number,
            default: 20
        },
        'class': String,
        'withPageSize': {// only for starndard type
            type: Boolean,
            default: true
        },
        'pageSizeRange': {
            type: Array,
            default: () => [10, 20, 50, 100]
        },
        'rangeLength': {
            type: Number,
            default: 10,
            coerce(val) {
                if (val < 1) {
                    return 1;
                }
                return val;
            }
        }
    },
    computed: {
        totalPageCount() {
            return Math.ceil(this.total / this.pageSize);
        },
        getRangePage() {
            let curPage = this.currentPageNo;
            let midpoint = curPage;
            // 减1的目的是刨除midpoint占位
            let pageRange = this.rangeLength - 1;
            // 中点左边显示的页码范围
            let leftHand = Math.floor(pageRange / 2);
            // 中点右边显示的页码范围
            let rightHand = Math.ceil(pageRange / 2);
            let totalPage = this.totalPageCount;
            let result = {
                begin: 1,
                end: 1
            };

            if (!midpoint) {
                result.begin = curPage - leftHand;
                result.end = curPage + rightHand;
            }
            else {
                result.begin = midpoint - leftHand;
                result.end = midpoint + rightHand;
            }

            if (result.begin < 1) {
                result.end = result.end - result.begin + 1;
                // 0也是一个有效占位
                result.begin = 1;
                if (result.end > totalPage) {
                    result.end = totalPage;
                }
            }
            else if (result.end > totalPage) {
                //  调整起始位置，保证展示的页码个数为options.range
                result.begin += totalPage - result.end;
                result.end = totalPage;
                if (result.begin < 1) {
                    result.begin = 1;
                }
            }
            return result;
        }
    },
    watch: {
        pageSize(val) {
            this.$emit('change-pagesize', this.pageSize);
            this.$emit('go-to-page', 1, this.currentPageNo);
        }
    },
    methods: {
        turnToPage(pageNo) {
            if (pageNo > 0 && pageNo <= this.totalPageCount) {
                this.$emit('go-to-page', pageNo, this.currentPageNo);// new page num / old page num
                this.currentPageNo = pageNo; // downward compatibility
            }
        },
        prev() {
            this.turnToPage(this.currentPageNo - 1);
        },
        next() {
            this.turnToPage(this.currentPageNo + 1);
        },
        isActive(number) {
            return number + this.getRangePage.begin === this.currentPageNo;
        }
    }
};
</script>

<style lang="less">
.v-pagination-wrap{
    -webkit-user-select: none;
    // standard
    .v-pagination-standard{
        vertical-align: bottom;
        margin: 0;
        .btn{
            a{
                padding: 5px 12px;
                &:focus{
                    background-color: initial;
                }
            }
            a,
            a:hover,
            a:active{
                text-decoration: none;
            }
        }
        // 枚举的页码按钮
        .page-btn{
            padding: 6px 3px;
            &.active{
                background-color: #46c3c1;
                border-color: #46c3c1;
                outline: none;
                a{
                    color:#fff;
                }
            }
        }

        .apostrophe{
            border-color: transparent;
            border-left-color: #ddd;
            &:hover{
                background-color: inherit;
            }
        }
    }
    // page size
    .v-pagination-page-size{
        line-height: 34px;
    }
    // mini
    .v-pagination-mini{
        .prev-trigger{
            margin:0 10px;
            padding:2px 12px;
            span{
                -webkit-transform:rotate(90deg);
                        transform:rotate(90deg);
            }
        }
        .next-trigger{
            margin:0 0 0 10px;
            padding:2px 12px;
            span{
                -webkit-transform:rotate(-90deg);
                        transform:rotate(-90deg);
            }
        }
    }
}
</style>
