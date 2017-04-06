<template>
    <transition name="x-loading-fade" @after-leave="handleAfterLeave">
        <div v-show="visible"
            class="x-loading-mask"
            :class="[maskClass, { 'is-fullscreen': fullscreen }]">
            <div class="x-loading-spinner">
                <img :width="imgSize" src="./loading-svg/circle.svg" v-if="loadingType === 'circle'">
                <img :width="imgSize" src="./loading-svg/grid.svg" v-if="loadingType === 'grid'">
                <img :width="imgSize" src="./loading-svg/dot.svg" v-if="loadingType === 'dot'">
                <p v-if="text" class="x-loading-text">{{text}}</p>
            </div>        
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                text: null,
                fullscreen: true,
                visible: false,
                maskClass: '',
                loadingType: 'circle',
                size: null
            };
        },
        computed: {
            imgSize() {
                if (this.size) {
                    return this.size;
                }
                if (this.loadingType === 'circle') {
                    return 40;
                }
                if (this.loadingType === 'grid') {
                    return 40;
                }
                if (this.loadingType === 'dot') {
                    return 50;
                }
                return 40;
            }
        },
        methods: {
            handleAfterLeave() {
                this.$emit('after-leave');
            }
        }
    };
</script>