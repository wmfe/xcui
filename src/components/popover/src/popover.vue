<template>
    <span>
       <transition :name="transition" @after-leave="doDestroy">
            <div class="x-popover" :class="popperClass" ref="popper" v-show="showPopper"
                :style="{width : width + 'px'}">
                <div class="x-popover-title" :class="{'is-confirm': confirm }" v-if="title">
                    <i class="x-icon x-icon-help-circled" v-if="confirm"></i>
                    {{title}}
                </div>
                <div class="x-popover-inner">
                    <slot name="content" v-if="!confirm">
                            {{ content }}
                    </slot>
                    <div class="x-popover-confirm" v-if="confirm">
                        <x-button size="sm" @click="handleCancel">{{cancelText}}</x-button>
                        <x-button size="sm" :loading="confirmLoading" type="primary" @click="handleOk">{{okText}}</x-button>
                    </div>
                </div>
            </div>
       </transition>
        <slot></slot>
    </span>
</template>

<script>
import popoverMixin from './popoverMixin';
import XInput from '../../input';

export default {
    name: 'XPopover',
    components: {XInput},
    mixins: [popoverMixin],
    props: {
        title: String,
        confirm: {
            type: Boolean,
            default: false
        },
        transition: {
            default: 'x-popover-zoom'
        },
        trigger: {
            default: 'click'
        },
        onOk: Function,
        onCancel: Function,
        okText: {
            type: String,
            default: '确认'
        },
        cancelText: {
            type: String,
            default: '取消'
        }
    },
    data() {
        return {
            confirmLoading: false
        };
    },
    methods: {
        handleOk(e) {
            this.onOk(e, this);
            if (e.defaultPrevented) {
                return;
            }
            this.showPopper = false;
        },
        handleCancel(e) {
            this.onCancel(e);
            if (e.defaultPrevented) {
                return;
            }
            this.showPopper = false;
        }
    }
};
</script>
