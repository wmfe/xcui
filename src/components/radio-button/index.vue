<template>
  <label
    class="x-radio-button"
    :class="[
      size ? 'el-radio-button--' + size : '',
      { 'is-active': value === label }
    ]"
  >
    <input
      class="x-radio-input"
      :value="label"
      type="radio"
      v-model="value"
      :name="name"
      :disabled="disabled">
    <span class="x-radio-button-text">
      <slot></slot>
    </span>
  </label>
</template>

<script>
    export default {
        name: 'x-radio-button',
        props: {
            label: {
                type: [String, Number],
                required: true
            },
            disabled: Boolean,
            name: String
        },
        data() {
            return {
                size: this.$parent.size
            };
        },
        computed: {
            value: {
                get() {
                    return this.$parent.value;
                },
                set(newValue) {
                    this.$parent.$emit('input', newValue);
                }
            }
        }
    };
</script>


