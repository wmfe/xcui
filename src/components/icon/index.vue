<template>
    <i :class="classes" :style="styles"></i>
</template>
<script>
    export default {
        name: 'xcui-icon',
        props: {
            name: String,
            size: [Number, String],
            color: String,
            rotate: [Number, String],
            animate: {
                validator(value) {
                    return ['spin', 'pulse'].indexOf(value) >= 0;
                }
            },
            flip: {
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0;
                }
            }
        },
        computed: {
            classes() {
                let cls = `xcui-icon xcui-icon-${this.name}`;
                if (this.animate) {
                    cls += ` xcui-icon-addon-${this.animate}`;
                }
                if (this.flip) {
                    cls += ` xcui-icon-addon-flip-${this.flip}`;
                }
                return cls;
            },
            styles() {
                let style = {};
                if (this.size) {
                    style['font-size'] = `${this.size}px`;
                }
                if (this.color) {
                    style.color = this.color;
                }
                if (this.rotate) {
                    style.transform = `rotate(${this.rotate}deg)`;
                }
                return style;
            }
        }
    };
</script>
