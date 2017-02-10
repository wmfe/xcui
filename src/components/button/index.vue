<template>
    <a :class="cls">
        <slot></slot>
    </a>
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
            }
        },
        computed: {
            cls() {
                let cls = ['xcui-btn'];
                this.type && cls.push(`xcui-btn-${this.type}`);
                this.size && cls.push(`xcui-btn-${this.size}`);
                return cls.join(' ');
            }
        },
        data() {
            return {
            };
        }
    };
</script>
