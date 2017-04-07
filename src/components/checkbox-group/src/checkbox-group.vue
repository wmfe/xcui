<template>
    <div class="x-checkbox-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'x-checkbox-group',
        props: {
            value: {}
        },
        watch: {
            value(val) {
                this.$emit('change', val);
            }
        }
    };
</script>