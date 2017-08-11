<template>
    <div class="x-collapse-item" :class="{'is-active': isOpen}">
        <div class="x-collapse-item-header" @click="clickHeader">
            <slot name="titleLeft"></slot>
            <x-icon :name="isOpen ? iconUpName : iconDownName" size="14"></x-icon>
            <slot name="titleRight"></slot>
        </div>
        <div class="x-collapse-item-wrap" :style="{height: contentHeight}">
            <div class="x-collapse-item-content" ref="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    import Emitter from 'xcui/src/utils/mixins/emitter';
    export default {
        name: 'x-collapse-item',
        componentName: 'x-collapse-item',
        props: {
            id: {
                type: [String, Number],
                required: true
            },
            iconUpName: {
                type: String,
                default: 'chevron-up'
            },
            iconDownName: {
                type: String,
                default: 'chevron-down'
            }
        },
        mixins: [Emitter],
        data() {
            return {
                orginHeight: 'auto',
                isReady: false
            };
        },
        computed: {
            isOpen() {
                return this.$parent.openItems.indexOf(this.id) > -1;
            },
            contentHeight() {
                if (this.isReady) {
                    return this.isOpen ? this.orginHeight : 0;
                }
            }
        },
        methods: {
            clickHeader: function () {
                this.dispatch('x-collapse', 'itemClick', this.id);
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.isReady = true;
                this.orginHeight = window.getComputedStyle(this.$refs.content, null).height;
            });
        }
    };
</script>
