<template>
	<div class="xcui-scrolltop">
		<div v-el:dropa id="corner" class="xcui-scrolltop-area xcui-scrolltop-corner" :class="{'xcui-scrolltop-dropin':dropin.corner}" @dragover="allowDrop($event)" @dragenter="dragenter($event)" @drop="ondrop($event)" >
            <div draggable="true" v-el:dragele id="dragEle" class="glyphicon glyphicon-circle-arrow-up xcui-scrolltop-init" @dragstart="dragStart($event)" @dragleave="dragleave($event)" @dragend="dragend($event)" @click="backTop($event)" transition="fadein" v-show="show" :class="className"></div>
		</div>
		<div v-el:dropb id="bottom" class="xcui-scrolltop-area xcui-scrolltop-bottom" :class="{'xcui-scrolltop-dropin':dropin.bottom}" @dragover="allowDrop($event)" @dragenter="dragenter($event)" @drop="ondrop($event)" >
        </div>
		<div v-el:dropc id="right" class="xcui-scrolltop-area xcui-scrolltop-right" :class="{'xcui-scrolltop-dropin':dropin.right}" @dragover="allowDrop($event)" @dragenter="dragenter($event)" @drop="ondrop($event)" ></div>
	</div>
</template>
<script>
import EventListener from '../../utils/eventlistener.js';
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
    name: 'xcui-scrolltop',
    props: {
        targetElement: {
            type: String,
            default: ''
        },
        during: {
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
            $event.currentTarget.appendChild(this.$els.dragele);
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
            let road = obj.getBoundingClientRect().top;
            window.requestAnimationFrame(moveAction);
            let start = 0;
            let during = this.during;
            let begin = document.body.scrollTop;
            function moveAction(timestamp) {
                start++;
                let locTop = Quad.easeOut(start, 0, road, during);
                let result = begin + locTop;
                document.body.scrollTop = result;
                if (start < during) {
                    window.requestAnimationFrame(moveAction);
                }
            }
        }
    },
    ready() {
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
    },
    destroyed() {
        this.scrollListener.remove();
    }
};
</script>
<style lang="less">
.xcui-scrolltop{
	.xcui-scrolltop-init{
		cursor: pointer;
        width: auto;
        display: inline-block;
	}
	.xcui-scrolltop-corner{
		position: fixed;
		bottom: 10px;
		right: 10px;
	}
	.xcui-scrolltop-bottom{
		position: fixed;
		bottom: 10px;
		left: 50%;
	}
	.xcui-scrolltop-right{
		position: fixed;
		top: 30%;
		right: 10px;
	}
    .xcui-scrolltop-area{
        width: 100px;
        height: 100px;
        font-size: 50px;
        color: #428bca;
        z-index: 1;
        border: none;
        &:hover{
            color: #3071a9;
        }
    }
	.xcui-scrolltop-dropin{
		border: none !important;
	}

}
.fadein-transition {
    display: block;
}
.fadein-enter {
    animation:fadein-in 0.3s ease-in;
}
.fadein-leave {
    animation:fadein-out 0.3s ease-out;
}
@keyframes fadein-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes fadein-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>