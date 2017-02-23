<template>
    <div :class="[
    'xcui-input-wrap',
    {
      'is-disabled': disabled
    }
    ]">
        <textarea
            ref="textarea"
            :class="cls"
            :style="textareaStyle"
            :placeholder="placeholder"
            :disabled="disabled"
            :rows="rows"
            :maxlength="maxlength"
            :minlength="minlength"
            :readonly="readonly"
            :name="name"
            :autofocus="autofocus"
            v-model="currentValue"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"></textarea>
    </div>
</template>
<script>
    import calcTextareaHeight from '../../utils/calcTextareaHeight';
    export default {
        name: 'xcui-textarea',
        props: {
            value: [String, Number],
            placeholder: String,
            autosize: {
                type: [Boolean, Object],
                default: false
            },
            disabled: Boolean,
            readonly: Boolean,
            name: String,
            rows: {
                type: Number,
                default: 2
            },
            maxlength: Number,
            minlength: Number
        },
        data() {
            return {
                currentValue: this.value,
                textareaStyle: {}
            };
        },
        methods: {
            handleFocus(e) {
                this.$emit('focus', e);
            },
            handleBlur(e) {
                this.$emit('blur', e);
            },
            handleChange(e) {
                this.$emit('change', e);
            },
            resizeTextarea() {
                if (!this.autosize) {
                    return;
                }
                const minRows = this.autosize.minRows;
                const maxRows = this.autosize.maxRows;

                this.textareaStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
            }
        },
        computed: {
            cls() {
                let cls = ['xcui-input'];
                this.disabled && cls.push('xcui-input-disabled');
                return cls.join(' ');
            }
        },
        watch: {
            value(val, oldValue) {
                this.currentValue = val;
            },
            currentValue(val) {
                this.$nextTick(_ => {
                    this.resizeTextarea();
                });
                this.$emit('change', val);
            }
        },
        mounted() {
            this.resizeTextarea();
        }
    };
</script>