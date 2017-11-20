<template>
    <div class="x-tab-pane" v-show="active">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'XTabPane',
    props: {
        name: {
            type: String
        },
        label: {
            type: String
        },
        icon: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        closable: {
            type: Boolean
        }
    },
    computed: {
        active() {
            return this.$parent.currentName === this.name;
        }
    },
    mounted() {
        this.$parent.addPanes(this);
    },
    destroyed() {
        if (this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
        }
        this.$parent.removePanes(this);
    }
};
</script>