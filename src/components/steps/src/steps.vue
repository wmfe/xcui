<template>
    <div class="x-steps">
        <div ref="wrap" class="x-steps-wrap" :style="wrapStyle">
            <slot></slot>
        </div>
        <div
            :class="['x-steps-overflow', 'x-steps-overflow-left', { 'x-steps-overflow-visible': overflowedLeftVisible }]"
            @mouseover="mIn(true)"
            @mouseout="mOut(true)"
            v-show="overflowedLeft"
        ></div>
        <div
            :class="['x-steps-overflow', 'x-steps-overflow-right', { 'x-steps-overflow-visible': overflowedRightVisible }]"
            @mouseover="mIn(false)"
            @mouseout="mOut(false)"
            v-show="overflowedRight"
        ></div>
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
                calcQueued: false,
                overflowedLeft: false,
                overflowedRight: false,
                overflowedLeftVisible: false,
                overflowedRightVisible: false,
                overflowCheckInterval: null,
                overflowScrollInterval: null
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
                            ...this.wrapStyle,
                            minWidth: `${minWidth}px`
                        };
                    });
                }
            },
            mIn(isLeft) {
                const container = this.$el;
                const content = this.$refs.wrap;
                if (!container || !content) {
                    return;
                }
                this.overflowScrollInterval = setInterval(() => {
                    const containerRc = container.getBoundingClientRect();
                    const contentRc = content.getBoundingClientRect();
                    const maxLeft = contentRc.width - containerRc.width;
                    let left = contentRc.left - containerRc.left;
                    if (isLeft) {
                        left += 40;
                    }
                    else {
                        left -= 40;
                    }
                    if (left > 0 || (maxLeft <= 0 && left < 0)) {
                        left = 0;
                    }
                    else if (maxLeft > 0 && -left > maxLeft) {
                        left = -maxLeft;
                    }
                    this.wrapStyle = {
                        ...this.wrapStyle,
                        transform: `translateX(${left}px)`
                    };
                    setTimeout(() => {
                        this.checkOverflow();
                    }, 30);
                }, 100);
            },
            mOut(isLeft) {
                clearInterval(this.overflowScrollInterval);
            },
            checkOverflow() {
                const container = this.$el;
                const content = this.$refs.wrap;
                if (!container || !content) {
                    return;
                }
                const containerRc = container.getBoundingClientRect();
                const contentRc = content.getBoundingClientRect();
                let overflowedLeft = false;
                let overflowedRight = false;
                if (contentRc.left < containerRc.left) {
                    overflowedLeft = true;
                }
                if (contentRc.right > containerRc.right) {
                    overflowedRight = true;
                }
                if (this.overflowedLeft !== overflowedLeft) {
                    if (overflowedLeft) {
                        this.overflowedLeft = true;
                        setTimeout(() => {
                            this.overflowedLeftVisible = true;
                        }, 30);
                    }
                    else {
                        this.overflowedLeftVisible = false;
                        setTimeout(() => {
                            this.overflowedLeft = false;
                        }, 600);
                    }
                }
                if (this.overflowedRight !== overflowedRight) {
                    if (overflowedRight) {
                        this.overflowedRight = true;
                        setTimeout(() => {
                            this.overflowedRightVisible = true;
                        }, 30);
                    }
                    else {
                        this.overflowedRightVisible = false;
                        setTimeout(() => {
                            this.overflowedRight = false;
                        }, 600);
                    }
                }
                const maxLeft = contentRc.width - containerRc.width;
                const left = contentRc.left - containerRc.left;
                if (left > 0 || (maxLeft <= 0 && left < 0)) {
                    this.wrapStyle = {
                        ...this.wrapStyle,
                        transform: 'translate(0px)'
                    };
                }
                else if (maxLeft > 0 && -left > maxLeft) {
                    this.wrapStyle = {
                        ...this.wrapStyle,
                        transform: `translate(${-maxLeft}px)`
                    };
                }
            }
        },
        created() {
            this[stepsComponentSymbol] = true;
        },
        mounted() {
            this.overflowCheckInterval = setInterval(() => {
                this.checkOverflow();
            }, 1000);
            setTimeout(() => {
                this.checkOverflow();
            }, 30);
        },
        destroyed() {
            clearInterval(this.overflowCheckInterval);
        }
    };
</script>