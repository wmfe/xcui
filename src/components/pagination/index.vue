<template>
    <div class="pagination-wrap">
        <button
            @click="prev"
            class="btn btn-default"
            :class="{'disabled': currentPageNo <= 1}">上一页</button>

        <ul class="pagination">
            <li v-if="getRangePage.begin > 1">
                <a href="javascript:void(0);" @click="turnToPage(1)">1</a>
            </li>
            <li v-if="getRangePage.begin > 1">
                <a href="javascript:void(0)">...</a>
            </li>

            <li v-for="number in (getRangePage.end - getRangePage.begin + 1)" :class="{'active':number + getRangePage.begin == currentPageNo}">
                <a href="javascript:void(0);"  v-text="number + getRangePage.begin" @click="turnToPage(number + getRangePage.begin)"></a>
            </li>

            <li v-if="getRangePage.end < totalPageCount">
                <a href="javascript:void(0)">...</a>
            </li>
            <li v-if="getRangePage.end < totalPageCount">
                <a href="javascript:void(0);" v-text="totalPageCount" @click="turnToPage(totalPageCount)"></a>
            </li>
        </ul>

        <button
            @click="next"
            class="btn btn-default"
            :class="{'disabled': currentPageNo >= totalPageCount}">下一页</button>
    </div>
</template>

<script>
    export default {
        props: {
            'total': {
                type: [Number, String],
                default: 0
            },
            'pageSize': {
                type: Number,
                default: 20
            },
            'currentPageNo': {
                type: Number,
                default: 1
            },
            'rangeLength': {
                type: Number,
                default: 10
            }
        },
        watch: {
            currentPageNo: function (val) {
                this.$dispatch('turnToPage', val);
            }
        },
        computed: {
            totalPageCount: function () {
                return Math.ceil(this.total / this.pageSize);
            },
            getRangePage: function () {
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
        methods: {
            turnToPage: function (pageNo) {
                this.currentPageNo = pageNo;
            },
            prev() {
                if (this.currentPageNo - 1 > 0) {
                    this.currentPageNo -= 1;
                }
            },
            next() {
                if (this.currentPageNo + 1 <= this.totalPageCount) {
                    this.currentPageNo += 1;
                }
            }
        }
    };
</script>

<style lang="less" scoped>
    .pagination-wrap{
        -webkit-user-select: none;
        .pagination{
            li > a{
                padding: 4px 10px;
                &:focus{
                    background-color: initial;
                }
            }
            li.active{
                a,
                a:hover,
                a:active{
                    background-color: #46c3c1;
                    border-color: #46c3c1;
                    outline: none;
                }
            }
        }
        button{
            margin-top: -63px;
            outline: none;
        }
    }
</style>
