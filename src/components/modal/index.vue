<template lang="html">
    <div class="xcui-modal-wrapper xcui-modal-mask" @click="maskClose" ref="modal-mask" v-show="show">
        <div class="xcui-modal" tabindex="-1" @keydown.esc="cancel" :style="style" :class="[sizeClass,className]">
            <div class="xcui-modal-header" v-if="showHeader">
                <slot name="header">
                    <span class="xcui-modal-title">{{title}}</span>
                </slot>
                <slot name="close">
                    <button type="button" class="xcui-modal-header-close" data-dismiss="modal"  @click="cancel" v-if="showCloseButton"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                    <!--<i class="xcui-modal-header-close glyphicon glyphicon-remove" @click="cancel" v-if="showCloseButton"></i>-->
                </slot>
            </div>
            <div class="xcui-modal-body" :style="contentStyle">
                <slot>{{content}}</slot>
            </div>
            <div class="xcui-modal-footer" v-if="showFooter">
                <slot name="footer">
                    <button type="button" name="button" v-if="showOkButton" @click="ok"
                        class="btn xcui-modal-btn btn-primary">{{okText}}</button>
                    <button type="button" name="button" v-if="showCancelButton" @click="cancel"
                        class="btn xcui-modal-cancel-btn btn-default">{{cancelText}}</button>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'xcui-modal',
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
        style: {
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
            show: false
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
            }
            else {
                document.body.style.overflow = 'auto';
            }
        },
        show(val) {
            this.$emit('input', val);
        }
    },
    computed: {
        sizeClass() {
            return `xcui-modal-size-${this.size}`;
        }
    },
    methods: {
        close(e) {
            this.show = false;
        },
        maskClose(e) {
            if (this.maskClosable && e.target === this.$refs.modalMask) {
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

<style lang="less">
.xcui-modal-wrapper {
    z-index: 1000;
    overflow-x: hidden;
    overflow-y: auto;
}
.xcui-modal-wrapper, .xcui-modal-mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transition: opacity 0.2s ease;
    background-color: rgba(55, 55, 55, 0.6);
}
.xcui-modal {
    z-index: 1001;
    font-size: 14px;
    position: relative;
    margin: 100px auto 30px;
    background-color: #fff;
    padding: 0;
    background-color: white;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
    transition: all 0.2s ease;
    max-width: 100vw;
    outline: 0;
    -webkit-box-shadow: 0 3px 9px rgba(0,0,0,.5);
    box-shadow: 0 3px 9px rgba(0,0,0,.5);
    &.large {
        width: 45rem;
    }

}
.xcui-modal-body {
    padding: 1.6rem;
    min-height: 8rem;
}
.xcui-modal-header {
    font-size: 1.6rem;
    padding: .6rem;
    min-height: 3.1rem;
    border-bottom: 1px solid #f3f3f3;
    text-align: center;
}
.xcui-modal-header-close {
    position: absolute;
    right: 8px;
    top: 3px;
    color: #000;
    opacity: .2;
    font-weight: 700;
    line-height: 1;
    font-size: 27px;
    outline: 0;
    border: 0;
    background: 0;
    padding: 0;
    &:hover{
        cursor: pointer;
        text-decoration: none;
        opacity: .5;
    }
}
.xcui-modal-footer {
    padding: .8rem 1rem;
    text-align: center;
    border-top: 1px solid #f3f3f3;
    .xcui-modal-btn {
        margin-right: 1rem;
        background-color: #46C3C1;
        color: #fff;
        border: #46c3c1 solid 1px;
        min-width: 75px;
        &:hover {
            background-color: #2b9d9b;
            border: #2b9d9b solid 1px;
        }
        &:active {
            background-color: #2b9d9b;
            border: #2b9d9b solid 1px;
            -webkit-box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.2);
            box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.2);
        }
    }
    .xcui-modal-cancel-btn {
        min-width: 75px;
    }
}
.xcui-modal-size-small {
    width: 22%;
}
.xcui-modal-size-middle {
    width: 30%;
}
.xcui-modal-size-large {
    width: 60%;
}
.xcui-modal-size-full {
    width: 99%;
}

</style>
