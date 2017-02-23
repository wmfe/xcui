<template>
    <button :class="cls" :disabled="disabled" @click="handleClick">
        <i class="xcui-icon xcui-icon-load-c xcui-icon-addon-spin" v-if="loading"></i>
        <i :class="'xcui-icon xcui-icon-' + icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script>
    export default{
        name: 'xcui-button',
        props: {
            type: {
                type: String,
                default: ''
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
                let cls = ['xcui-btn'];
                this.type && cls.push(`xcui-btn-${this.type}`);
                this.size && cls.push(`xcui-btn-${this.size}`);
                this.loading && cls.push('xcui-btn-loading');
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
            }
        }
    };
</script>
