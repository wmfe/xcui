<template>
    <div class="x-breadcrumb">
        <slot></slot>
    </div>
</template>
<script>

    export default {
        name: 'xBreadcrumb',
        props: {
            separator: {
                type: String,
                default: '/'
            }
        }
    };
</script>