<template>
    <div class="x-steps">
        <slot></slot>
    </div>
</template>
<script>
    import { stepsComponentSymbol } from './symbol';

    export default {
        name: 'xSteps',
        componentName: 'xSteps',
        data() {
            return {
                items: []
            };
        },
        methods: {
            register(stepItem) {
                this.items.push(stepItem);
            },
            unregister(stepItem) {
                const pos = this.items.indexOf(stepItem);
                if (pos > -1) {
                    this.items.splice(pos, 1);
                }
            }
        },
        created() {
            this[stepsComponentSymbol] = true;
        }
    };
</script>