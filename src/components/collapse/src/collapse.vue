<template>
    <div class="x-collapse">
        <slot></slot>
    </div>
</template>
<script>
    import Emitter from '../../../utils/mixins/emitter';

    export default {
        name: 'x-collapse',
        componentName: 'x-collapse',
        props: {
            openOnlyOne: {
                type: Boolean,
                default: false
            },
            value: {
                type: [Array, String, Number],
                default: []
            }
        },
        mixins: [Emitter],
        data: function () {
            return {
                openItems: (this.value ? [].concat(this.value) : [])
            };
        },
        watch: {
            openItems(val) {
                this.$emit('input', val);
            }
        },
        methods: {
            onItemClick: function (id) {
                let index = this.openItems.indexOf(id);
                if (index > -1) {
                    this.openItems.splice(index, 1);
                }
                else {
                    if (this.openOnlyOne) {
                        this.openItems = [];
                    }
                    this.openItems.push(id);
                }
                this.$emit('change', this.openItems);
            }
        },
        mounted() {
            this.$nextTick(() => {
                if (this.openOnlyOne && this.openItems.length > 1) {
                    let tempItem = this.openItems[0];
                    this.openItems = [];
                    this.openItems.push(tempItem);
                }
                this.$on('itemClick', this.onItemClick);
            });
        }
    };
</script>
