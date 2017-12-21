<template>
    <div class="x-pagination">
        <template v-if="type === 'standard'">
            <div class="x-pagination-standard">
                <span class="x-pagination-page-total" v-if="showTotal">
                    共<span v-text="total"></span>条
                </span>
                <span class="x-pagination-standard-btn-group">
                    <x-button-group>
                        <x-button
                            @click="prev"
                            :disabled="currentPageNum == 1"
                            icon="chevron-left">
                            </x-button>
                        <x-button v-if="getRangePage.begin > 1" @click="turnToPage(1)">
                            1
                        </x-button>
                        <x-button class="number-btn" v-if="showQuickPrevIcon"
                                @mouseenter="quickPrevIconCls = 'x-icon-chevron-d-left'"
                                @mouseleave="quickPrevIconCls = 'x-icon-more'"
                                @click="turnToPage(currentPageNum - rangeLength)">
                            <span class="x-icon"
                                :class="[quickPrevIconCls]"
                                ></span>
                        </x-button>
                        <x-button
                            v-for="number in (getRangePage.end - getRangePage.begin + 1)"
                            v-bind:key="number"
                            class="number-btn"
                            :class="{'active': isActive(number)}"
                            @click="turnToPage(number + getRangePage.begin - 1)">
                            <span v-if="isActive(number)" v-text="number + getRangePage.begin - 1"></span>
                            <span v-else v-text="number + getRangePage.begin - 1" ></span>
                        </x-button>

                        <x-button v-if="showQuickNextIcon"
                                class="number-btn"
                                @mouseenter="quickNextIconCls = 'x-icon-chevron-d-right'"
                                @mouseleave="quickNextIconCls = 'x-icon-more'"
                                @click="turnToPage(currentPageNum + rangeLength)">
                            <span class="x-icon"
                                :class="[quickNextIconCls]"
                                ></span>
                        </x-button>
                        <x-button class="number-btn" v-if="getRangePage.end < totalPageCount" @click="turnToPage(totalPageCount)">
                            <span v-text="totalPageCount"></span>
                        </x-button>
                        <x-button
                            @click="next"
                            :disabled="currentPageNum == totalPageCount || totalPageCount === 0"
                            icon="chevron-right">
                            </x-button>
                    </x-button-group>
                </span>
                <span class="x-pagination-page-size" v-if="showSizer">
                    <x-select v-model="internalPageSize" @change="changePageSize(internalPageSize)">
                        <x-option v-for="opt in pageSizeRange" v-bind:key="opt" :label="`${opt}条/页`" :value="opt">
                        </x-option>
                    </x-select>
                </span>
            </div>
        </template>

        <div v-else class="x-pagination-mini">
            <span class="x-pagination-mini-total" v-if="showTotal">共<span v-text="total"></span>条</span>
            <x-button icon="chevron-left" class="x-pagination-mini-prev-btn" :disabled="currentPageNum < 2" @click="prev">
            </x-button>
            <span class="x-pagination-mini-text">
                <span v-text="currentPageNum"></span>/<span v-text="totalPageCount"></span>
            </span>
            <x-button icon="chevron-right" class="x-pagination-mini-next-btn" :disabled="currentPageNum == totalPageCount" @click="next">
            </x-button>
        </div>
    </div>
</template>

<script>
import XButton from '../button';
import XButtonGroup from '../button-group';
import XSelect from '../select';
import XOption from '../option';

export default {
    name: 'XPagination',
    components: {XButton, XSelect, XOption, XButtonGroup},
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
        'showTotal': {
            type: Boolean,
            default: false
        },
        'showSizer': {// only for starndard type
            type: Boolean,
            default: false
        },
        'pageSizeRange': {
            type: Array,
            default: () => [10, 20, 50, 100]
        },
        'rangeLength': {
            type: Number,
            default: 5,
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
            internalPageSize: this.pageSize,
            quickPrevIconCls: 'x-icon-more',
            quickNextIconCls: 'x-icon-more'
        };
    },
    computed: {
        showQuickPrevIcon() {
            return this.getRangePage.begin > 1;
        },
        showQuickNextIcon() {
            return this.getRangePage.end < this.totalPageCount;
        },
        totalPageCount() {
            return Math.ceil(this.total / this.internalPageSize);
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
        pageSize(val) {
            this.internalPageSize = val;
        },
        showQuickPrevIcon(val) {
            if (!val) {
                this.quickPrevIconCls = 'x-icon-more';
            }
        },
        showQuickNextIcon(val) {
            if (!val) {
                this.quickNextIconCls = 'x-icon-more';
            }
        }
    },
    methods: {
        turnToPage(pageNo) {
            if (pageNo > 0 && pageNo <= this.totalPageCount) {
                this.$emit('change-current', pageNo, this.currentPageNum);// new page num / old page num
            }
        },
        changePageSize(num) {
            this.$emit('change-pagesize', num);
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
    }
};
</script>
