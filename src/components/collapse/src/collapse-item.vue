<template>
    <div class="x-collapse-item" :class="{'is-active': isOpen}">
        <div class="x-collapse-item-header" @click="clickHeader">
            <slot name="titleLeft">{{title}}</slot>
            <x-icon :name="isOpen ? iconUpName : iconDownName" size="14"></x-icon>
            <slot name="titleRight">{{title}}</slot>
        </div>
        <div class="x-collapse-item-wrap" :style="{height: contentHeight}" ref="content">
            <div class="x-collapse-item-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    import Emitter from '../../../utils/mixins/emitter';
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
        data() {
            return {
                transitionName: this.isOpen ? 'x-slide-up' : 'x-slide-down'
            };
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
