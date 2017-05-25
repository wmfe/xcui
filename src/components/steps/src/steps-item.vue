<template>
    <div :class="['x-steps-item', `x-steps-item-${status}`, { active, activatable }]" :style="{ minWidth: `${minWidth || 100}px` }" @click="onClick">
        <div class="x-steps-item-title">
            <div class="x-steps-item-title-mark">
                <span class="x-steps-item-title-mark-text">
                    <span v-if="icon >= 0">{{icon}}</span>
                    <x-icon v-else-if="typeof icon === 'string'" :name="icon"></x-icon>
                    <span v-else>{{itemIndex + 1}}</span>
                </span>
                <span class="x-steps-item-title-mark-circle"></span>
            </div>
            <div class="x-steps-item-title-text">{{title}}</div>
            <div class="x-steps-item-title-progress" v-if="progress >= 0">
                <x-tooltip :content="percent" placement="top">
                    <div class="x-steps-item-title-progress-value" :style="{ width: percent }"></div>
                </x-tooltip>
            </div>
            <div class="x-steps-item-title-line" v-else></div>
        </div>
        <div class="x-steps-item-content"><slot>{{description}}</slot></div>
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
            description: {
                type: String,
                defaultValue: ''
            },
            status: {
                type: String,
                defaultValue: 'default'
            },
            progress: {
                type: Number,
                defaultValue: -1
            },
            minWidth: {
                type: Number,
                defaultValue: 100
            },
            icon: {
                defaultValue: -1
            }
        },
        data() {
            return {
                itemIndex: -1
            };
        },
        computed: {
            active() {
                return this.$parent.value === this.itemIndex;
            },
            activatable() {
                return this.$parent.value >= 0;
            },
            percent() {
                return `${Math.round(this.progress * 100)}%`;
            }
        },
        methods: {
            onClick() {
                if (this.$parent.valueCancelable && this.itemIndex === this.$parent.value) {
                    this.$parent.$emit('input', -1);
                }
                else {
                    this.$parent.$emit('input', this.itemIndex);
                }
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