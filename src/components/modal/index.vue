<template lang="html">
    <div>
        <transition name="fade">
            <div class="x-modal-mask"
                @click="maskClose" ref="modal-mask" v-show="show">
            </div>
        </transition>
        <transition name="modal-zoom">
            <div class="x-modal-wrapper" v-show="show" ref="modalWrapper" @click="handleWrapperClick">
                <div class="x-modal" :style="styles" :class="modalClass">
                        <div class="x-modal-header" v-if="showHeader">
                            <slot name="header">
                                <span class="x-modal-title">{{title}}</span>
                            </slot>
                            <slot name="close">
                                <button type="button" class="x-modal-header-close" data-dismiss="modal"  @click="cancel" v-if="showCloseButton">
                                    <i class="x-icon x-icon-android-close"></i>
                                </button>
                            </slot>
                        </div>
                        <div class="x-modal-body" :style="contentStyle">
                            <slot>{{content}}</slot>
                        </div>
                        <div class="x-modal-footer" v-if="showFooter">
                            <slot name="footer">
                                <x-button v-if="showCancelButton" @click="cancel">{{cancelText}}</x-button>
                                <x-button type="primary" v-if="showOkButton" @click="ok">{{okText}}</x-button>
                            </slot>
                        </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import XButton from '../button/index';
import getScrollBarSize from '../../utils/getScrollBarSize';

export default {
    name: 'XModal',
    components: {XButton},
    props: {
        value: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        styles: {
            type: Object
        },
        contentStyle: {
            type: Object
        },
        size: {
            type: String,
            default: 'middle'
        },
        className: {
            type: String,
            default: ''
        },
        showHeader: {
            type: Boolean,
            default: true
        },
        showFooter: {
            type: Boolean,
            default: true
        },
        showCloseButton: {
            type: Boolean,
            default: true
        },
        showOkButton: {
            type: Boolean,
            default: true
        },
        showCancelButton: {
            type: Boolean,
            default: true
        },
        maskClosable: {
            type: Boolean,
            default: true
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        okText: {
            type: String,
            default: '确定'
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        onOk: {
            type: Function,
            default: () => {}
        },
        onCancel: {
            type: Function,
            default: () => {}
        }
    },
    data() {
        return {
            show: false,
            scrollBarWidth: 0
        };
    },
    watch: {
        value(val) {
            this.show = val;
            if (this.scrollable) {
                return;
            }
            if (val) {
                document.body.style.overflow = 'hidden';
                this.scrollBarWidth = getScrollBarSize();
            }
            else {
                document.body.style.overflow = 'auto';
                this.scrollBarWidth = 0;
            }
            document.body.style.paddingRight = `${this.scrollBarWidth}px`;
        },
        show(val) {
            this.$emit('input', val);
        }
    },
    computed: {
        sizeClass() {
            return `x-modal-size-${this.size}`;
        },
        modalClass() {
            return `${this.sizeClass} ${this.className}`;
        }
    },
    methods: {
        close(e) {
            this.show = false;
        },
        handleWrapperClick(e) {
            if (e.target === this.$refs.modalWrapper) {
                this.maskClose();
            }
        },
        maskClose() {
            if (this.maskClosable) {
                this.cancel();
            }
        },
        ok() {
            let noClose = typeof this.onOk === 'function' && this.onOk();
            if (!noClose) {
                this.close();
            }
        },
        cancel() {
            let noClose = typeof this.onCancel === 'function' && this.onCancel();
            if (!noClose) {
                this.close();
            }
        }
    }
};
</script>

