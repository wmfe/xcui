<template>
    <ul class="x-select-group-wrap">
        <li class="x-select-group-title">
            {{label}}
        </li>
        <li>
            <ul class="x-select-group">
                <slot></slot>
            </ul>
        </li>
    </ul>
</template>

<script>
    import Emitter from '../../../utils/mixins/emitter';
    
    export default {
        mixins: [Emitter],
        name: 'xOptionGroup',
        componentName: 'xOptionGroup',
        props: {
            label: String,
            disabled: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            disabled(val) {
                this.broadcast('xOption', 'handleGroupDisabled', val);
            }
        },
        mounted() {
            if (this.disabled) {
                this.broadcast('xOption', 'handleGroupDisabled', this.disabled);
            }
        }
    };
</script>