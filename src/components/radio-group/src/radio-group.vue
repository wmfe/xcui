<template>
  <div class="x-radio-group">
    <slot></slot>
  </div>
</template>

<script>
    import emitter from '../../../utils/mixins/emitter';  
    export default {
        name: 'x-radio-group',
        mixins: [emitter],
        props: {
            value: [String, Number],
            size: String
        },
        watch: {
            value(value) {
                this.$emit('change', value);
                this.dispatch('XFormItem', 'x.form.change', [this.value]);
            }
        }
    };
</script>


