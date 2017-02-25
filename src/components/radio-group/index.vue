<template>
  <div class="x-radio-group">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: 'x-radio-group',
        props: {
            value: [String, Number],
            size: String
        },
        watch: {
            value(value) {
                this.$emit('change', value);
            }
        }
    };
</script>


