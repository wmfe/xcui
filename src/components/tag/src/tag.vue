<template>
    <transition :name="transition" @after-leave="handleAfterLeave">
        <div :class="cls" :style="styles" v-if="visible">
            <span class="x-tag-text">
                <slot>{{name}}</slot>
            </span>
            <i class="x-icon x-icon-android-close x-tag-cross" v-if="closeable" @click.stop="handleClose"></i>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'XTag',
    props: {
        transition: {
            type: String,
            default: 'tag-zoom'
        },
        closeable: {
            type: Boolean,
            default: false
        },
        onClose: Function,
        color: String,
        name: String
    },
    data() {
        return {
            visible: true,
            prefixCls: 'x-tag'
        };
    },
    computed: {
        cls() {
            let ret = [];
            ret.push(this.prefixCls);
            if (this.color && !this.isPresetColor(this.color)) {
                ret.push('x-tag-has-color');
            }
            if (this.isPresetColor(this.color)) {
                ret.push(`x-tag-${this.color}`);
            }
            return ret.join(' ');
        },
        styles() {
            let ret = {};
            if (!this.isPresetColor(this.color)) {
                ret.backgroundColor = this.color;
            }
            return ret;
        }
    },
    methods: {
        handleClose(e) {
            if (this.onClose) {
                this.onClose(e);
            } 
            if (e.defaultPrevented) {
                return;
            }
            this.visible = false;
        },
        handleAfterLeave(e) {
            this.$emit('afterClose', e);
        },
        isPresetColor(color) {
            return /^(pink|red|yellow|orange|cyan|green|blue|purple)(-inverse)?$/.test(color);
        }
    }
};
</script>