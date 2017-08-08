<template>
    <transition name="x-alert-zoom">
        <div :class="['x-alert', typeCls]" v-show="visible">
            <i :class="['x-alert-icon', iconCls, iconIsLarge]" v-if="showIcon" ></i>
            <div class="x-alert-container">
                <div class="x-alert-title" v-if="title">{{title}}</div>
                <div class="x-alert-description" v-if="description">
                    <slot>
                        {{description}}
                    </slot>
                </div>
            </div>
            <i :class="['x-alert-close-btn', closeBtnCls]" @click="close" v-if="closable">{{closeText}}</i>
        </div>
    </transition>
</template>


<script>

const iconTypes = {
    'info': 'information-circled',
    'success': 'checkmark-circled',
    'warning': 'android-alert',
    'error': 'close-circled'
};

export default {
    name: 'x-alert',
    componentName: 'x-alert',
    props: {
        type: String,
        closable: Boolean,
        closeText: String,
        title: String,
        description: String,
        showIcon: Boolean,
    },
    data() {
        return {
            visible: true
        }
    },
    computed: {
        typeCls() {
            return this.type ? `x-alert-${this.type}` : '';
        },
        iconCls() {
            return iconTypes[this.type] ? `x-icon x-icon-${iconTypes[this.type]}` : '';
        },
        iconIsLarge() {
            return this.description ? 'x-alert-icon-large' : '';
        },
        closeBtnCls() {
            return this.closeText ? 'x-alert-close-text' : 'x-icon x-icon-android-close';
        }
    },
    methods: {
        close() {
            this.visible = false;
            this.$emit('close');
        }
    }
}
</script>
