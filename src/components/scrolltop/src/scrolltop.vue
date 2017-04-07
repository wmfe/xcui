<template>
    <div class="x-scrolltop">
        <div ref="dropa" id="corner" class="x-scrolltop-area x-scrolltop-corner" :class="{'x-scrolltop-dropin':dropin.corner}" @dragover="allowDrop($event)" @dragenter="dragenter($event)" @drop="ondrop($event)" >
            <transition name="fade">
                <div draggable="true" ref="dragele" id="dragEle" class="x-icon x-icon-android-arrow-dropup-circle x-scrolltop-init" @dragstart="dragStart($event)" @dragleave="dragleave($event)" @dragend="dragend($event)" @click="backTop($event)" v-show="show" :class="className"></div>
            </transition>
        </div>
        <div ref="dropb" id="bottom" class="x-scrolltop-area x-scrolltop-bottom" :class="{'x-scrolltop-dropin':dropin.bottom}" @dragover="allowDrop($event)" @dragenter="dragenter($event)" @drop="ondrop($event)" >
        </div>
        <div ref="dropc" id="right" class="x-scrolltop-area x-scrolltop-right" :class="{'x-scrolltop-dropin':dropin.right}" @dragover="allowDrop($event)" @dragenter="dragenter($event)" @drop="ondrop($event)" ></div>
    </div>
</template>
<script>
import EventListener from '../../../utils/eventListener.js';
/*
 * 缓动公式Quad
 * t: current time（当前时间）
 * b: beginning value（初始值）
 * c: change in value（变化量）
 * d: duration（持续时间）
*/
let Quad = {
    easeIn: function (t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOut: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
};
export default {
    name: 'XScrolltop',
    props: {
        targetElement: {
            type: String,
            default: ''
        },
        duration: {
            type: Number,
            default: 50
        },
        className: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            dropin: {
                corner: true,
                bottom: false,
                right: false
            },
            show: false,
            scrollListener: null
        };
    },
    methods: {
        allowDrop($event) {
            $event.preventDefault();
        },
        dragStart($event) {

        },
        dragenter($event) {

        },
        ondrop($event) {
            for (let i in this.dropin) {
                if (this.dropin[i]) {
                    this.dropin[i] = false;
                }
            }
            $event.currentTarget.appendChild(this.$refs.dragele);
            let dropId = $event.currentTarget.id;
            this.dropin[dropId] = true;
        },
        dragleave($event) {

        },
        dragend($event) {

        },
        backTop($event) {
            let targetElement = document.getElementById(this.targetElement);
            this.moveTop(targetElement);
        },
        moveTop(obj) {
            if (!obj) {
                obj = document.body;
            }
            let me = this;
            let road = obj.getBoundingClientRect().top;
            window.requestAnimationFrame(moveAction);
            let start = 0;
            let duration = this.duration;
            let begin = document.body.scrollTop;
            function moveAction(timestamp) {
                start++;
                let locTop = Quad.easeOut(start, 0, road, duration);
                let result = begin + locTop;
                document.body.scrollTop = result;
                if (start < duration) {
                    window.requestAnimationFrame(moveAction);
                }
                else {
                    me.$emit('finish');
                }
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            let targetElement = document.body;
            if (this.targetElement) {
                targetElement = document.getElementById(this.targetElement);
            }
            let me = this;
            let scrollCall = function () {
                if (targetElement.getBoundingClientRect().top < 0) {
                    me.show = true;
                }
                else {
                    me.show = false;
                }
            };
            me.scrollListener = EventListener.listen(window, 'scroll', scrollCall);
        });
    },
    destroyed() {
        this.scrollListener.remove();
    }
};
</script>
