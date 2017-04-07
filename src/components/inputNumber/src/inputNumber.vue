<template>
    <div class="x-input-number"
    :class="[
      size ? 'x-input-number-' + size : '',
      { 'is-disabled': disabled }
    ]">
        <span class="x-input-number-plus x-icon x-icon-plus"
        :class="{'is-disabled': plusDisabled}"
        @click="plus">
        </span>
        <span class="x-input-number-minus x-icon x-icon-minus"
        :class="{'is-disabled': minusDisabled}"
        @click="minus">
        </span>
        <x-input
        :value="currentValue"
        @keydown.up.native="plus"
        @keydown.down.native="minus"
        @blur="handleBlur"
        @input="handleInput"
        :disabled="disabled"
        :size="size"
        >
            <template slot="prepend" v-if="$slots.prepend">
              <slot name="prepend"></slot>
            </template>
            <template slot="append" v-if="$slots.append">
              <slot name="append"></slot>
            </template> 
        </x-input>
    </div>
</template>
<script>
import xInput from '../../input';
export default {
    name: 'x-input-number',
    components: {
        xInput
    },
    props: {
        step: {
            type: Number,
            default: 1
        },
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: 0
        },
        value: {
            default: 0
        },
        disabled: Boolean,
        size: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            currentValue: 0
        };
    },
    methods: {
        minus() {
            if (this.disabled || this.minusDisabled) {
                return;
            }
            const value = this.value || 0;
            const newVal = this.decrease(value, this.step);
            if (newVal < this.min) {
                return;
            }
            this.setCurrentValue(newVal);
        },
        plus() {
            if (this.disabled || this.plusDisabled) {
                return;
            }
            const value = this.value || 0;
            const newVal = this.increase(value, this.step);
            if (newVal > this.max) {
                return;
            }
            this.setCurrentValue(newVal);
        },
        increase(val, step) {
            if (typeof val !== 'number') {
                return this.currentValue;
            }
            const precisionFactor = this.getPrecisionFactor(val);
            const precision = Math.abs(this.getMaxPrecision(val));
            let result = ((precisionFactor * val + precisionFactor * step) / precisionFactor).toFixed(precision);
            return this.toNumber(result);
        },
        decrease(val, step) {
            if (typeof val !== 'number') {
                return this.currentValue;
            }
            const precisionFactor = this.getPrecisionFactor(val);
            const precision = Math.abs(this.getMaxPrecision(val));
            let result = ((precisionFactor * val - precisionFactor * step) / precisionFactor).toFixed(precision);
            return this.toNumber(result);
        },
        setCurrentValue(newVal) {
            const oldVal = this.currentValue;
            if (newVal >= this.max) {
                newVal = this.max;
            }
            if (newVal <= this.min) {
                newVal = this.min;
            }
            if (oldVal === newVal) {
                return;
            }
            this.$emit('change', newVal, oldVal);
            this.$emit('input', newVal);
            this.currentValue = newVal;
        },
        isNotCompleteNumber(num) {
            return (
                isNaN(num) || num === '' || num.toString().indexOf('.') === num.toString().length - 1
            );
        },
        getPrecision(value) {
            const valueString = value.toString();
            if (valueString.indexOf('e-') >= 0) {
                return parseInt(valueString.slice(valueString.indexOf('e-') + 1), 10);
            }
            let precision = 0;
            if (valueString.indexOf('.') >= 0) {
                precision = valueString.length - valueString.indexOf('.') - 1;
            }
            return precision;
        },
        getMaxPrecision(currentValue) {
            const step = this.step;
            const stepPrecision = this.getPrecision(step);
            if (!currentValue) {
                return stepPrecision;
            }
            const currentValuePrecision = this.getPrecision(currentValue);
            return currentValuePrecision > stepPrecision ? currentValuePrecision : stepPrecision;
        },
        getPrecisionFactor(currentValue) {
            const precision = this.getMaxPrecision(currentValue);
            return Math.pow(10, precision);
        },
        toPrecisionAsStep(num) {
            if (this.isNotCompleteNumber(num) || num === '') {
                return num;
            }
            const precision = Math.abs(this.getMaxPrecision(num));
            if (precision) {
                return Number(num).toFixed(precision);
            }
            return num.toString();
        },
        toNumber(num) {
            if (this.isNotCompleteNumber(num)) {
                return num;
            }
            return Number(num);
        },
        handleInput(value) {
            const newVal = Number(value);
            if (!isNaN(newVal)) {
                this.setCurrentValue(newVal);
            }
        },
        handleBlur() {

        }
    },
    computed: {
        plusDisabled() {
            return this.increase(this.value, this.step) < this.min;
        },
        minusDisabled() {
            return this.decrease(this.value, this.step) > this.max;
        }
    },
    watch: {
        value: {
            immediate: true,
            handler(value) {
                let newVal = Number(value);
                if (isNaN(newVal)) {
                    return;
                }
                if (newVal >= this.max) {
                    newVal = this.max;
                }
                if (newVal <= this.min) {
                    newVal = this.min;
                }
                this.currentValue = newVal;
                this.$emit('input', newVal);
            }
        }
    }
};
</script>

