<template>
    <div class="x-steps">
        <div class="x-steps-wrap" :style="wrapStyle" @mouseover="mIn" @mouseout="mOut">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import { stepsComponentSymbol, stepsItemComponentSymbol } from './symbol';

    export default {
        name: 'xSteps',
        componentName: 'xSteps',
        props: {
            value: {
                type: Number,
                defaultValue: -1
            }
        },
        data() {
            return {
                wrapStyle: {},
                calcQueued: false
            };
        },
        methods: {
            calc() {
                if (!this.calcQueued) {
                    this.calcQueued = true;
                    this.$nextTick(() => {
                        this.calcQueued = false;
                        this.wrapStyle = {
                            minWidth: `${this.$children.length * 180 - 100}px`
                        };
                        this.$children.forEach((child, index) => {
                            if (!child[stepsItemComponentSymbol]) {
                                throw new Error('<steps> may only contain <steps-item> children');
                            }
                            child.itemIndex = index;
                        });
                    });
                }
            },
            mIn() {

            },
            mOut() {

            }
        },
        created() {
            this[stepsComponentSymbol] = true;
        }
    };
</script>