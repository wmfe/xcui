<template>
    <transition :name="transitionName">
        <div :class="classes" :style="styles">
            <div :class="[baseClass + '-content']" ref="content" v-html="content"></div>
            <a :class="[baseClass + '-close']" @click="close" v-if="closable">
                <i class="x-icon x-icon-android-close"></i>
            </a>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'XMsg',
        props: {
            prefixCls: {
                type: String,
                default: ''
            },
            duration: {
                type: Number,
                default: 3000
            },
            content: {
                type: String,
                default: ''
            },
            styles: {
                type: Object,
                default: function () {
                    return {
                        right: '50%'
                    };
                }
            },
            closable: {
                type: Boolean,
                default: false
            },
            className: {
                type: String
            },
            uuid: {
                type: String,
                required: true
            },
            onClose: {
                type: Function
            },
            transitionName: {
                type: String
            },
            visible: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                withDesc: false
            };
        },
        computed: {
            baseClass() {
                return `${this.prefixCls}-notice`;
            },
            classes() {
                return [
                    this.baseClass,
                    {
                        [`${this.className}`]: !!this.className,
                        [`${this.baseClass}-closable`]: this.closable,
                        [`${this.baseClass}-with-desc`]: this.withDesc
                    }
                ];
            },
            contentClasses() {
                return `${this.baseClass}-content`;
            }
        },
        methods: {
            clearCloseTimer() {
                if (this.closeTimer) {
                    clearTimeout(this.closeTimer);
                    this.closeTimer = null;
                }
            },
            close() {
                this.onClose();
                this.clearCloseTimer();
                this.$parent.close(this.uuid);
            }
        },
        mounted() {
            this.clearCloseTimer();

            if (this.duration !== 0) {
                this.closeTimer = setTimeout(() => {
                    this.close();
                }, this.duration);
            }

            // check if with desc in Notice component
            if (this.prefixCls === 'x-message') {
                const $desc = this.$refs.content.querySelectorAll(`.${this.prefixCls}-desc`)[0];
                this.withDesc = $desc ? ($desc.innerHTML !== '') : false;
            }
        },
        beforeDestroy() {
            this.clearCloseTimer();
        }
    };
</script>