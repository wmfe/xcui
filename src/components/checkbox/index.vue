<template>
    <label class="xcui-checkbox">
        <span class="xcui-checkbox-item"
            :class="{
              'is-disabled': disabled,
              'is-checked': isChecked,
              'is-indeterminate': indeterminate
            }">
            <input
            v-if="!isInGroup" 
            type="checkbox"
            class="xcui-checkbox-input"
            :disabled="disabled"
            v-model="model"
            @change="handleChange">
            <input
            v-else 
            type="checkbox"
            class="xcui-checkbox-input"
            :disabled="disabled"
            v-model="model"
            :value="value"
            @change="handleChange"
            >
            <span class="xcui-checkbox-background"></span>
            <span class="xcui-checkbox-cbx"></span>
        </span>
        <span class="xcui-checkbox-text">
            <slot></slot>
        </span>
    </label>
</template>
<script>
    export default {
        name: 'xcui-checkbox',
        props: {
            value: {
                type: [String, Number, Boolean]
            },
            indeterminate: Boolean,
            disabled: Boolean
        },
        data() {
            return {
                isInGroup: this.$parent.$options.name === 'xcui-checkbox-group'
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