<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    const prefixCls = 'x-row';

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
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
                        [`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify,
                        [`${this.className}`]: !!this.className
                    }
                ];
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