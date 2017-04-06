<template>
    <label class="x-switch">
        <input type="checkbox"
            class="x-switch-item x-switch-input"
            :class="{
              'is-disabled': disabled,
              'is-checked': isChecked,
              'is-focus': focus
            }"
            v-model="model"
            :disabled="disabled"
            @focus="focus = true"
            @blur="focus = false"
            @change="handleChange">
        <span class="x-switch-background">
            <span class="x-switch-text">{{isChecked ? onText : offText}}</span>
            <span class="x-switch-item x-switch-cbx"></span>
        </span>
    </label>
</template>
<script>
    export default {
        name: 'XSwitch',
        props: {
            disabled: Boolean,
            value: Boolean,
            onText: String,
            offText: String
        },
        data() {
            return {
                focus: false
            };
        },
        computed: {
            model: {
                get() {
                    return this.value;
                },
                set(newVal) {
                    this.$emit('input', newVal);
                }
            },
            isChecked() {
                return this.model;
            }
        },
        methods: {
            handleChange() {
                this.$emit('change', this.model);
            }
        }
    };
</script>