<template lang="html">
    <div class="xcui-modal-wrapper" v-show="show">
        <div class="xcui-modal-mask" @click="maskClose" v-el:modal-mask></div>
        <div class="xcui-modal" tabindex="-1" @keydown.esc="cancel" :style="style" :class="[sizeClass,className]">
            <div class="xcui-modal-header" v-if="showHeader">
                <slot name="header">
                    <span class="xcui-modal-title">{{title}}</span>
                </slot>
                <slot name="close">
                    <i class="xcui-modal-header-close glyphicon glyphicon-remove" @click="cancel" v-if="showCloseButton"></i>
                </slot>
            </div>
            <div class="xcui-modal-body">
                <slot></slot>
            </div>
            <div class="xcui-modal-footer" v-if="showFooter">
                <slot name="footer">
                    <button type="button" name="button" @click="ok" class="btn xcui-btn btn-primary">{{okText}}</button>
                    <button type="button" name="button" @click="cancel" class="btn btn-default">{{cancelText}}</button>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'xcui-modal',
    props: {
        title: {
            type: String,
            default: '提示'
        },
        show: {
            type: Boolean,
            default: false
        },
        style: {
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
        maskClosable: {
            type: Boolean,
            default: true
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
    computed: {
        sizeClass() {
            return `xcui-modal-size-${this.size}`;
        }
    },
    methods: {
        close(e) {
            this.show = false;
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

<style lang="less">
.xcui-modal-wrapper {
    z-index: 1000;
}
.xcui-modal-wrapper, .xcui-modal-mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.2s ease;
    background-color: rgba(55, 55, 55, 0.6);
}
.xcui-modal {
    font-size: 14px;
    position: relative;
    margin: 0 auto;
    top: 100px;
    background-color: #fff;
    padding: 0;
    background-color: white;
    border-radius: 2px;
    box-shadow: 0 2px 8px alpha(black, 0.33);
    transition: all 0.2s ease;
    max-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
    &.large {
        width: 45rem;
    }

}
.xcui-modal-body {
    padding: 1rem;
    border-bottom: 1px solid #f3f3f3;
    min-height: 8rem;
}
.xcui-modal-header {
    font-size: 2rem;
    padding: .6rem;
    border-bottom: 1px solid #f3f3f3;
}
.xcui-modal-header-close {
    float: right;
    cursor: pointer;
}
.xcui-modal-footer {
    display: flex;
    justify-content: flex-end;
    padding: .5rem 1rem;
    .xcui-btn {
        margin-right: .5rem;
        background-color: #46C3C1;
        color: #fff;
        border: #46c3c1 solid 1px;
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
