<template>
    <div class="x-checkbox-group">
        <slot></slot>
    </div>
</template>
<script>
    import emitter from '../../../utils/mixins/emitter'; 
    export default {
        name: 'x-checkbox-group',
        mixins: [emitter],
        props: {
            value: {}
        },
        watch: {
            value(val) {
                this.$emit('change', val);
                this.dispatch('XFormItem', 'x.form.change', [val]);
            }
        }
    };
</script>