<template>
    <button :type="nativeType" :class="cls" :disabled="disabled" @click="handleClick"
    @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <i class="x-icon x-icon-load-c x-icon-addon-spin" v-if="loading"></i>
        <i :class="'x-icon x-icon-' + icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script>
    export default{
        name: 'x-button',
        props: {
            type: {
                type: String,
                default: ''
            },
            nativeType: {
                type: String,
                default: 'button'
            },
            size: {
                type: String,
                default: ''
            },
            disabled: Boolean,
            loading: Boolean,
            icon: {
                type: String,
                default: ''
            }
        },
        computed: {
            cls() {
                let cls = ['x-btn'];
                this.type && cls.push(`x-btn-${this.type}`);
                this.size && cls.push(`x-btn-${this.size}`);
                this.loading && cls.push('x-btn-loading');
                return cls.join(' ');
            }
        },
        data() {
            return {
            };
        },
        methods: {
            handleClick(e) {
                this.$emit('click', e);
            },
            handleMouseEnter(e) {
                this.$emit('mouseenter', e);
            },
            handleMouseLeave(e) {
                this.$emit('mouseleave', e);
            }
        }
    };
</script>
