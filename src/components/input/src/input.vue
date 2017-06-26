<template>
    <div :class="[
    'x-input-wrap',
    size ? 'x-input-wrap-' + size : '',
    {
      'is-disabled': disabled,
      'x-input-group': $slots.prepend || $slots.append
    }
    ]">
        <div class="x-input-group-prepend" v-if="$slots.prepend">
            <slot name="prepend"></slot>
        </div>
        <slot name="icon">
            <i class="x-icon x-input-icon" :class="[icon ? 'x-icon-' + icon : '']" v-if="icon" @click="handleIconClick"></i>
        </slot>
        <input :class="cls"
            :type="type"
            :name="name"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            :maxlength="maxlength"
            :minlength="minlength"
            :autofocus="autofocus"
            :form="form"
            :value="value"
            ref="input"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            @keyup.enter="handleEnter"
            @change="handleChange">
        <div class="x-input-group-append" v-if="$slots.append">
            <slot name="append"></slot>
        </div>
    </div>
</template>
<script>
    import emitter from '../../../utils/mixins/emitter';

    export default {
        name: 'xInput',
        componentName: 'xInput',
        mixins: [emitter],
        props: {
            value: [String, Number],
            placeholder: String,
            size: String,
            readonly: Boolean,
            autofocus: Boolean,
            icon: String,
            disabled: Boolean,
            name: String,
            form: String,
            maxlength: Number,
            minlength: Number,
            iconClick: Function,
            type: {
                default: 'text',
                type: String,
                validator: val => ['text', 'password'].indexOf(val) >= 0
            }
        },
        data() {
            return {
                currentValue: this.value
            };
        },
        computed: {
            cls() {
                let cls = ['x-input'];
                this.size && cls.push(`x-input-${this.size}`);
                this.disabled && cls.push('x-input-disabled');
                return cls.join(' ');
            },
            validating() {
                return this.$parent.validating;
            }
        },
        methods: {
            handleBlur(e) {
                this.$emit('blur', e);
                this.dispatch('XFormItem', 'x.form.blur', [this.currentValue]);
            },
            handleChange(e) {
                this.$emit('change', e);
            },
            handleEnter(e) {
                this.$emit('enter', e);
            },
            handleIconClick(e) {
                if (!this.disabled) {
                    if (this.iconClick) {
                        this.iconClick(e);
                    }
                    this.$emit('click', e);
                }
            },
            handleFocus(e) {
                this.$emit('focus', e);
            },
            handleInput(e) {
                this.currentValue = e.target.value;
            }
        },
        watch: {
            value(val, oldVal) {
                this.currentValue = val;
            },
            currentValue(val, oldVal) {
                this.$emit('input', val);
                this.$emit('change', val);
                this.dispatch('XFormItem', 'x.form.change', [val]);
            }
        }
    };
</script>