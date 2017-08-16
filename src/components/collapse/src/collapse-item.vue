<template>
    <div class="x-collapse-item" :class="{'is-active': isOpen}">
        <div class="x-collapse-item-header" @click="clickHeader">
            <slot name="titleLeft"></slot>
            <x-icon :name="isOpen ? iconUpName : iconDownName" size="14"></x-icon>
            <slot name="titleRight"></slot>
        </div>
        <collapse-transition>
            <div class="x-collapse-item-wrap" v-show="isOpen">
                <div class="x-collapse-item-content">
                    <slot></slot>
                </div>
            </div>
        </collapse-transition>
    </div>
</template>
<script>
    import Emitter from 'xcui/src/utils/mixins/emitter';
    import CollapseTransition from 'xcui/src/utils/collapse-transition';

    export default {
        name: 'x-collapse-item',
        componentName: 'x-collapse-item',
        components: {
            CollapseTransition
        },
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
        computed: {
            isOpen() {
                return this.$parent.openItems.indexOf(this.id) > -1;
            }
        },
        methods: {
            clickHeader: function () {
                this.dispatch('x-collapse', 'itemClick', this.id);
            }
        }
    };
</script>
