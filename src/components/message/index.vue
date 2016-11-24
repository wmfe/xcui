<template>
    <transition name="fade">
        <div class="xcui-message"
        :class="styleClass"
        v-show="show">
            <span class="xcui-message-icon glyphicon"
            :class="iconClass"></span>
            <p class="xcui-message-desc">
                {{content}}
            </p>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'xcui-message',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'info'
        },
        content: {
            type: String,
            default: ''
        },
        duration: {
            type: Number,
            default: 3000
        }
    },
    computed: {
        styleClass() {
            return this.type ? `xcui-message-${this.type}` : '';
        },
        iconClass() {
            switch (this.type) {
                case 'info':
                    return 'glyphicon-info-sign';
                case 'success':
                    return 'glyphicon-ok';
                case 'error':
                    return 'glyphicon-remove';
                case 'warning':
                    return 'glyphicon-warning-sign';
                default :
                    return 'glyphicon-info-sign';
            }
        }
    },
    data() {
        return {
            timer: null
        };
    },
    methods: {
        clearTimer() {
            clearTimeout(this.timer);
        },
        resetTimer() {
            if (!this.duration) {
                this.duration = 3000;
            }
            this.timer = setTimeout(() => {
                this.show = false;
            }, this.duration);
        },
        onShow() {
            this.show = true;
            this.clearTimer();
            this.resetTimer();
        }
    }
};
</script>

<style lang="less">
    .fade-enter-active, .fade-leave-active {
        transition: all .3s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
    .xcui-message{
        min-width:200px;
        max-width: 600px;
        width: 300px;
        border-radius:5px;
        text-align:center;
        box-shadow: 0 1px 8px hsla(0,0%,39%,.4);
        padding:5px 10px;
        font-size:16px;
        z-index:1000;
        position:fixed;
        top: 150px;
        left:~"calc(50% - 150px)";
        // margin: 0 auto;
        background: #fff;

        .xcui-message-icon {
            vertical-align: middle;
        }
        .xcui-message-desc{
            color: #000;
            display: inline-block;
            margin-left:10px;
            margin-bottom:0px;
            vertical-align: middle;
        }
        p {
            padding-left: 10px;
        }
    }
    .xcui-message-info {
        color: #3a87ad;
    }
    .xcui-message-success {
        color: #468847;
    }
    .xcui-message-warning {
        color: #c09853;
    }
    .xcui-message-error {
        color: #b94a48;
    }
</style>
