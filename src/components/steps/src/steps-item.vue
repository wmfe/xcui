<template>
    <div class="x-steps-item" v-if="context">
        <slot></slot>
    </div>
</template>
<script>
    import { stepsComponentSymbol } from './symbol';

    export default {
        name: 'xStepsItem',
        componentName: 'xStepsItem',
        data() {
            return {
                context: null
            };
        },
        mounted() {
            let comp = this.$parent;
            while (comp && !comp[stepsComponentSymbol]) {
                comp = comp.$parent;
            }
            if (!comp) {
                throw new Error('<steps-item> must used be in <steps>');
            }
            this.context = comp;
            this.context.register(this);
        },
        destroyed() {
            this.context.unregister(this);
        }
    };
</script>