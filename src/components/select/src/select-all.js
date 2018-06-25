import xOption from './option.vue';

export default {
    props: {
        value: {
            required: false
        }
    },
    data() {
        return {
            isSelectAll: false,
            index: -1,
            groupDisabled: false
        };
    },
    mixins: [xOption],
    methods: {
        checkSelectAll(value) {
            const parentSelect = this.parentSelect;
            this.isSelectAll = value.length === parentSelect.options.length;
        },
        handleOptionClick() {
            if (!this.parentSelect.multiple) {
                return;
            }
            if (this.disabled || this.groupDisabled) {
                return;
            }
            const parentSelect = this.parentSelect;
            this.isSelectAll = !this.isSelectAll;
            if (this.isSelectAll) {
                parentSelect.$emit('input', parentSelect.options.concat().map(opt => opt.value)); // 修改Select的value值
            }
            else {
                parentSelect.$emit('input', []);
            }
        }
    },
    computed: {
        isSelected() {
            if (!this.parentSelect.multiple) {
                return false;
            }
            return this.isSelectAll;
        }
    },
    created() {
        this.parentSelect.options.pop();
        this.index = -1;
        this.$watch('parentSelect.value', newVal => this.checkSelectAll(newVal));
    }
};
