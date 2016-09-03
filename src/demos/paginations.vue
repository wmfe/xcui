<template>
    <div>
        <table class="table table-hover">
            <tr v-for="item in list">
                <td v-text="item.id"></td>
                <td v-text="item.name"></td>
            </tr>
        </table>
        <pagination
            :total="total"
            :page-size="pageSize"
            :current-page-no.sync="currentPageNum"
            ></pagination>
    </div>
</template>

<script>
import Pagination from '../components/pagination';

export default {
    components: {
        Pagination
    },
    data() {
        return {
            currentPageNum: 1,
            pageSize: 10,
            list: [],
            total: 0
        };
    },
    watch: {
        currentPageNum(val) {
            this.turnToPage(val);
        }
    },
    methods: {
        genId() {
            return Math.floor(Math.random() * 100);
        },
        fetch(pageNo) {
            return {
                list: (new Array(this.pageSize).fill(undefined)).map((item) => {
                    return {
                        name: 'Sigma',
                        id: this.genId()
                    };
                }),
                total: 50
            };
        },
        turnToPage(pageNo) {
            const { list, total } = this.fetch(pageNo);
            this.list = list;
            this.total = total;
        }
    },
    ready() {
        this.turnToPage(1);
    }
};
</script>
