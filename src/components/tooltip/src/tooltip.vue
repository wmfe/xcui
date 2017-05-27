<template>
    <span>
        <transition :name="transition" @after-leave="doDestroy">
            <div class="x-tooltip" :class="popperClass" ref="popper" v-show="showPopper"
                :style="{width : width + 'px'}">
                <slot name="content">
                    <div class="x-tooltip-inner">
                        {{ content }}
                    </div>
                </slot>
            </div>
        </transition>
        <slot></slot>
    </span>
</template>

<script>
    import popoverMixin from '../../popover/src/popoverMixin';

    export default {
        name: 'XTooltip',
        mixins: [popoverMixin],
        props: {
            transition: {
                type: String,
                default: 'x-tooltip-zoom'
            }
        }
    };
</script>