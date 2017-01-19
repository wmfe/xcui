<template>
    <div class="v-pagination-wrap">
        <template v-if="type === 'standard' ">
            <div class="row">
                <div v-if="withPageSize" class="v-pagination-page-size col-md-3 gray">
                    共<span v-text="total"></span>条
                    &nbsp;&nbsp;
                    每页
                    <select v-model="pageSizeInner" class="gray">
                        <option v-for="opt in pageSizeRange" :value="opt" v-text="opt">1</option>
                    </select>
                    条
                </div>
                <div class="v-pagination-standard text-right" :class="[ withPageSize ? 'col-md-9' :'col-md-12']">
                    <div class="btn-group">
                        <button
                            @click="prev"
                            class="btn btn-default"
                            :class="{'disabled': currentPageNum == 1}">上一页</button>

                        <button class="btn btn-default page-btn" v-if="getRangePage.begin > 1">
                            <a href="javascript:void(0);" @click="turnToPage(1)">1</a>
                        </button>
                        <button class="btn btn-default page-btn" v-if="getRangePage.begin > 1">
                            <a class="apostrophe">...</a>
                        </button>

                        <button class="btn btn-default page-btn" v-for="number in (getRangePage.end - getRangePage.begin + 1)" :class="{'active': isActive(number)}">
                            <a v-if="isActive(number)" href="javascript:void(0);"  v-text="number + getRangePage.begin - 1"></a>
                            <a v-else href="javascript:void(0);"  v-text="number + getRangePage.begin - 1" @click="turnToPage(number + getRangePage.begin - 1)"></a>
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
                            :class="{'disabled': currentPageNum == totalPageCount}">下一页</button>
                    </div>
                </div>
            </div>
        </template>

        <div v-else class="v-pagination-mini">
            <span class="gray">共<span v-text="total"></span>条</span>
            <button class="btn btn-default prev-trigger" :class="{'disabled': currentPageNum < 2}" @click="prev">
                <span class="caret"></span>
            </button>
            <span class="gray">
                <span v-text="currentPageNum"></span>/<span v-text="totalPageCount"></span>
            </span>
            <button class="btn btn-default next-trigger" :class="{'disabled': currentPageNum == totalPageCount}" @click="next">
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
        'currentPageNum': {
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
    data() {
        return {
            pageSizeInner: 20
        };
    },
    computed: {
        totalPageCount() {
            return Math.ceil(this.total / this.pageSizeInner);
        },
        getRangePage() {
            let curPage = this.currentPageNum;
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
            if (result.end > totalPage) {
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
        pageSizeInner(val) {
            this.$emit('change-pagesize', this.pageSizeInner);
        }
    },
    methods: {
        turnToPage(pageNo) {
            if (pageNo > 0 && pageNo <= this.totalPageCount) {
                this.$emit('go-to-page', pageNo, this.currentPageNum);// new page num / old page num
            }
        },
        prev() {
            this.turnToPage(this.currentPageNum - 1);
        },
        next() {
            this.turnToPage(this.currentPageNum + 1);
        },
        isActive(number) {
            return number + this.getRangePage.begin - 1 === this.currentPageNum;
        }
    },
    mounted() {
        this.pageSizeInner = this.pageSize;
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
                color:#666;
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
        .prev-trigger,
        .next-trigger{
            .caret{
                position: relative;
                top: -1px;
            }
        }
    }
    .gray{
        color: #777;
    }
}
</style>
