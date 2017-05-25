<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    const prefixCls = 'x-col';

    export default {
        name: 'XCol',
        props: {
            span: [Number, String],
            order: [Number, String],
            offset: [Number, String],
            push: [Number, String],
            pull: [Number, String],
            className: String,
            xs: [Number, Object],
            sm: [Number, Object],
            md: [Number, Object],
            lg: [Number, Object]
        },
        data() {
            return {
                gutter: 0
            };
        },
        computed: {
            classes() {
                const cls = [`${prefixCls}`];
                this.span && cls.push(`${prefixCls}-span-${this.span}`);
                this.order && cls.push(`${prefixCls}-order-${this.order}`);
                this.offset && cls.push(`${prefixCls}-offset-${this.offset}`);
                this.push && cls.push(`${prefixCls}-push-${this.push}`);
                this.pull && cls.push(`${prefixCls}-pull-${this.pull}`);
                !!this.className && cls.push(`${this.className}`);
                
                ['xs', 'sm', 'md', 'lg'].forEach(size => {
                    if (typeof this[size] === 'number') {
                        cls.push(`${prefixCls}-span-${size}-${this[size]}`);
                    }
                    else if (typeof this[size] === 'object') {
                        let props = this[size];
                        Object.keys(props).forEach(prop => {
                            cls.push(
                                prop !== 'span'
                                    ? `${prefixCls}-${size}-${prop}-${props[prop]}`
                                    : `${prefixCls}-span-${size}-${props[prop]}`
                            );
                        });
                    }
                });

                return cls;
            },
            styles() {
                let style = {};
                if (this.gutter !== 0) {
                    style = {
                        paddingLeft: this.gutter / 2 + 'px',
                        paddingRight: this.gutter / 2 + 'px'
                    };
                }

                return style;
            }
        }
    };
</script>