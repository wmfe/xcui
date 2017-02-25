<template>
    <label class="x-checkbox">
        <span class="x-checkbox-item"
            :class="{
              'is-disabled': disabled,
              'is-checked': isChecked,
              'is-indeterminate': indeterminate
            }">
            <input
            v-if="!isInGroup" 
            type="checkbox"
            class="x-checkbox-input"
            :disabled="disabled"
            v-model="model"
            @change="handleChange">
            <input
            v-else 
            type="checkbox"
            class="x-checkbox-input"
            :disabled="disabled"
            v-model="model"
            :value="value"
            @change="handleChange"
            >
            <span class="x-checkbox-background"></span>
            <span class="x-checkbox-cbx"></span>
        </span>
        <span class="x-checkbox-text">
            <slot></slot>
        </span>
    </label>
</template>
<script>
    export default {
        name: 'x-checkbox',
        props: {
            value: {
                type: [String, Number, Boolean]
            },
            indeterminate: Boolean,
            disabled: Boolean
        },
        data() {
            return {
                isInGroup: this.$parent.$options.name === 'x-checkbox-group'
            };
        },
        computed: {
            model: {
                get() {
                    return !this.isInGroup ? this.value : this.$parent.value;
                },
                set(newVal) {
                    if (!this.isInGroup) {
                        this.$emit('input', newVal);
                    }
                    else {
                        this.$parent.$emit('input', newVal);
                    }
                }
            },
            isChecked() {
                let type = Object.prototype.toString.call(this.model);

                if (type === '[object Boolean]') {
                    return this.model;
                }
                else if (type === '[object Array]') {
                    return this.model.indexOf(this.value) > -1;
                }
                else if (type === '[object String]' || type === '[object Number]') {
                    return this.value === this.model;
                }
            }
        },
        methods: {
            handleChange(e) {
                this.$emit('change', e);
            },
            checkStatus() {
                
            }
        }
    };
</script>