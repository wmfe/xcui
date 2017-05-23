<template>
    <div :class="['x-steps-item', statusClass, { active, activatable }]" @click="onClick">
        <div class="x-steps-item-title">
            <div class="x-steps-item-title-mark">
                <span class="x-steps-item-title-mark-text">{{itemIndex + 1}}</span>
                <span class="x-steps-item-title-mark-circle"></span>
            </div><!--
            --><div class="x-steps-item-title-text">{{title}}</div><!--
            --><div class="x-steps-item-title-line">
            </div>
        </div>
        <div class="x-steps-item-content"><slot></slot></div>
    </div>
</template>
<script>
    import { stepsComponentSymbol, stepsItemComponentSymbol } from './symbol';

    export default {
        name: 'xStepsItem',
        componentName: 'xStepsItem',
        props: {
            title: {
                type: String,
                defaultValue: ''
            },
            success: {
                type: Boolean,
                defaultValue: false
            },
            failure: {
                type: Boolean,
                defaultValue: false
            },
            running: {
                type: Boolean,
                defaultValue: false
            },
            pending: {
                type: Boolean,
                defaultValue: false
            },
            progress: {
                type: Number,
                defaultValue: -1
            }
        },
        data() {
            return {
                itemIndex: -1
            };
        },
        computed: {
            statusClass() {
                let status = '';
                if (this.success) {
                    status = 'success';
                }
                else if (this.failure) {
                    status = 'failure';
                }
                else if (this.running && this.progress >= 0) {
                    status = 'running-progress';
                }
                else if (this.running) {
                    status = 'running';
                }
                else if (this.pending) {
                    status = 'pending';
                }
                else {
                    status = 'default';
                }
                return `x-steps-item-${status}`;
            },
            active() {
                return this.$parent.value === this.itemIndex;
            },
            activatable() {
                return this.$parent.value >= 0;
            }
        },
        methods: {
            onClick() {
                this.$parent.$emit('input', this.itemIndex);
            }
        },
        created() {
            this[stepsItemComponentSymbol] = true;
            if (!this.$parent[stepsComponentSymbol]) {
                throw new Error('<steps-item> must used be in <steps>');
            }
            this.$parent.calc();
        },
        destroyed() {
            this.$parent.calc();
        }
    };
</script>