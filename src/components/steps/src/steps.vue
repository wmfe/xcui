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
            },
            valueCancelable: {
                type: Boolean,
                defaultValue: false
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
                        let minWidth = 0;
                        this.$children.forEach((child, index) => {
                            if (!child[stepsItemComponentSymbol]) {
                                throw new Error('<steps> may only contain <steps-item> children');
                            }
                            child.itemIndex = index;
                            minWidth += child.minWidth || 100;
                            if (index < this.$children.length - 1) {
                                minWidth += 50;
                            }
                        });
                        this.wrapStyle = {
                            minWidth: `${minWidth}px`
                        };
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