<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'x-row',
        props: {
            type: {
                validator(value) {
                    return ['flex'].indexOf(value) >= 0;
                }
            },
            align: {
                validator(value) {
                    return ['top', 'middle', 'bottom'].indexOf(value) >= 0;
                }
            },
            justify: {
                validator(value) {
                    return ['start', 'end', 'center', 'space-around', 'space-between'].indexOf(value) >= 0;
                }
            },
            gutter: {
                type: [Number, String],
                default: 0
            },
            className: String
        },
        computed: {
            classes() {
                let cls = ['x-row'];
                !!this.type && cls.push(`x-row-${this.type}`);
                !!this.align && cls.push(`x-row-${this.type}-${this.align}`);
                !!this.justify && cls.push(`x-row-${this.type}-${this.justify}`);
                !!this.className && cls.push(`${this.className}`);
                return cls;
            },
            styles() {
                let style = {};
                if (this.gutter !== 0) {
                    style = {
                        marginLeft: this.gutter / -2 + 'px',
                        marginRight: this.gutter / -2 + 'px'
                    };
                }
                return style;
            }
        },
        methods: {
            updateGutter(val) {
                this.$children.forEach((child) => {
                    if (val !== 0) {
                        child.gutter = val;
                    }
                });
            }
        },
        watch: {
            gutter(val) {
                this.updateGutter(val);
            }
        },
        mounted() {
            this.updateGutter(this.gutter);
        }
    };
</script>