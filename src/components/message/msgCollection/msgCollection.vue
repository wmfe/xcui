<template>
    <div :class="classes" :style="styles">
        <Msg v-for="msg in messages"
            :key="msg.uuid"
            :prefix-cls="prefixCls"
            :styles="msg.styles"
            :content="msg.content"
            :duration="msg.duration"
            :closable="msg.closable"
            :uuid="msg.uuid"
            :transition-name="msg.transitionName"
            :on-close="msg.onClose"
            :visible="msg.visible">
        </Msg>
    </div>
</template>
<script>
    import Msg from './msg.vue';
    import merge from 'xcui/src/utils/merge';

    const prefixCls = 'x-messages';
    let seed = 0;
    const now = Date.now();

    function getUuid() {
        return 'x-messages' + now + '_' + (seed++);
    }

    export default {
        name: 'XMsgCollection',
        components: { Msg },
        props: {
            prefixCls: {
                type: String,
                default: prefixCls
            },
            styles: {
                type: Object,
                default: function () {
                    return {
                        top: '65px',
                        left: '50%'
                    };
                }
            },
            content: {
                type: String
            },
            className: {
                type: String
            }
        },
        data() {
            return {
                messages: []
            };
        },
        computed: {
            classes() {
                return [
                    `${this.prefixCls}`,
                    {
                        [`${this.className}`]: !!this.className
                    }
                ];
            }
        },
        methods: {
            add(msg) {
                const uuid = msg.uuid || getUuid();
                let _msg = merge({
                    styles: {
                        right: '50%'
                    },
                    content: '',
                    duration: 3000,
                    closable: false,
                    uuid: uuid,
                    visible: true
                }, msg);

                this.messages.push(_msg);
            },
            close(uuid) {
                const messages = this.messages;

                for (let i = 0; i < messages.length; i++) {
                    if (messages[i].uuid === uuid) {
                        this.messages.splice(i, 1);
                        break;
                    }
                }
            }
        }
    };
</script>
