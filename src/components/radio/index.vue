<template>
    <label class="x-radio">
        <span class="x-radio-item"
            :class="{
              'is-disabled': disabled,
              'is-checked': model === label
            }">
            <input
            type="radio"
            :value="label"
            class="x-radio-input"
            :disabled="disabled"
            v-model="model">
            <span class="x-radio-background"></span>
            <span class="x-radio-cbx"></span>
        </span>
        <span class="x-radio-text">
            <slot></slot>
        </span>
    </label>
</template>

<script>
    export default {
        name: 'x-radio',
        props: {
            value: {
                type: [String, Number]
            },
            label: {
                type: [String, Number],
                required: true
            },
            disabled: Boolean
        },
        computed: {
            model: {
                get() {
                    return this.value !== undefined ? this.value : this.$parent.value;
                },
                set(newVal) {
                    if (this.value !== undefined) {
                        this.$emit('input', newVal);
                    }
                    else {
                        this.$parent.$emit('input', newVal);
                    }
                }
            }
        }
    };
</script>

