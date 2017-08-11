<template>
<div>
{{value}}11212
</div>
</template>
<script>
import emitter from 'xcui/src/utils/mixins/emitter';

export default {
    name: 'x-tree-select',
    mixins: [emitter],
    props: {
        value: [String, Number],
    }
};
</script>
