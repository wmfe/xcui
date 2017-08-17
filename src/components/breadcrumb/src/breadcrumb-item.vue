<template>
    <span class="x-breadcrumb-item">
        <a
            v-if="to"
            @click="handleClick"
            class="x-breadcrumb-item-inner"
        >
            <slot></slot>
        </a>
        <span
            v-else
            class="x-breadcrumb-item-inner"
            ref="link">
            <slot></slot>
        </span>
        <span class="x-breadcrumb-separator">{{separator}}</span>
    </span>
</template>
<script>

    export default {
        name: 'xBreadcrumbItem',
        props: {
            to: {},
            replace: Boolean
        },
        data() {
            return {
                separator: ''
            };
        },
        mounted() {
            this.separator = this.$parent.separator;
        },
        methods: {
            handleClick () {
                const isRoute = this.$router;
                if (isRoute) {
                    this.replace ? this.$router.replace(this.to) : this.$router.push(this.to);
                } else {
                    window.location.href = this.to;
                }
            }
        }
    };
</script>