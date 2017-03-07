<template>
    <li class="x-select-item"
        :class="{'x-select-item-selected': isSelected,
                 'is-disabled': disabled || groupDisabled || limitReached,
                 'is-limit-reached': limitReached,
                 'hover': parentSelect.hoverIndex === index}"
        @mouseenter="handleHover"
        @click.stop="handleOptionClick">
        <slot>
            <span>{{currentLabel}}</span>
        </slot>
    </li>
</template>
<script>
    import Emitter from '../../utils/mixins/emitter';

    export default {
        name: 'xOption',
        componentName: 'xOption',
        mixins: [Emitter],
        props: {
            value: {
                required: true
            },
            label: [String, Number],
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                index: -1,
                groupDisabled: false
            };
        },
        computed: {
            currentLabel() {
                return this.label || ((typeof this.value === 'string' || typeof this.value === 'number') ? this.value : '');
            },
            isSelected() {
                if (!this.parentSelect.multiple) {
                    return this.value === this.parentSelect.value;
                }
                return this.parentSelect.value.indexOf(this.value) >= 0;
            },
            parentSelect() {
                let ret = this.$parent;
                while (ret.$options.componentName !== 'xSelect') {
                    ret = ret.$parent;
                }
                return ret;
            },
            limitReached() {
                if (this.parentSelect.multiple) {
                    return !this.itemSelected
                    && this.parentSelect.value.length >= this.parentSelect.multipleLimit
                    && this.parentSelect.multipleLimit > 0;
                }
                return false;
            }
        },
        methods: {
            handleHover() {
                if (!this.disabled && !this.groupDisabled) {
                    this.parentSelect.hoverIndex = this.parentSelect.options.indexOf(this);
                }
            },
            handleOptionClick() {
                if (this.disabled || this.groupDisabled) {
                    return;
                }
                this.dispatch('xSelect', 'handleOptionClick', this);
            },
            handleGroupDisabled(val) {
                this.groupDisabled = val;
            }
        },
        created() {
            this.parentSelect.options.push(this);
            this.index = this.parentSelect.options.indexOf(this);
            this.$on('handleGroupDisabled', this.handleGroupDisabled);
        }
    };
</script>