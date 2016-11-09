<template>
    <div class="xcui-pageloading">
        <div class="bar" role="bar">
            <div class="peg"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'xcui-pageloading',
        data() {
            return {
                easing: 'linear',
                positionUsing: '',
                status: null,
                template: '<div class="bar" role="bar"><div class="peg"></div></div>',
                parent: 'body',
                barSelector: '[role="bar"]'
            };
        },
        props: {
            minimum: {
                type: Number,
                default: 0.08
            },
            speed: {
                type: Number,
                default: 350
            },
            trickle: {
                type: Boolean,
                default: true
            },
            trickleSpeed: {
                type: Boolean,
                default: 250
            }
        },
        methods: {
            set(n) {
                let started = this.isStarted();

                n = this.clamp(n, this.minimum, 1);
                this.status = (n === 1 ? null : n);

                let progress = this.render(!started);
                let bar = progress.querySelector(this.barSelector);
                let speed = this.speed;
                let ease = this.easing;
                let me = this;

                progress.offsetWidth; /* Repaint */
                let test = this.queue;

                test(function (next) {
                    if (me.positionUsing === '') {
                        me.positionUsing = me.getPositioningCSS();
                    };
                    me.css(bar, me.barPositionCSS(n, speed, ease));
                    if (n === 1) {
                        me.css(progress, {
                            transition: 'none',
                            opacity: 1
                        });
                        progress.offsetWidth; /* Repaint */

                        setTimeout(() => {
                            me.css(progress, {
                                transition: 'all ' + speed + 'ms linear',
                                opacity: 0
                            });
                            setTimeout(() => {
                                me.remove();
                                next();
                            }, speed);
                        }, speed);
                    }
                    else {
                        setTimeout(next, speed);
                    }
                });

                return this;
            },
            start() {
                if (!this.status) {
                    this.set(0);
                }
                let work = () => {
                    setTimeout(() => {
                        if (!this.status) {
                            return;
                        };
                        this.trickle();
                        work();
                    }, this.trickleSpeed);
                };

                if (this.trickle) {
                    work();
                }

                return this;
            },
            done(force) {
                if (!force && !this.status) {
                    return this;
                }
                return this.inc(0.3 + 0.5 * Math.random()).set(1);
            },
            queue: (() => {
                let pending = [];

                function next() {
                    let fn = pending.shift();
                    if (fn) {
                        fn(next);
                    }
                };

                return function (fn) {
                    pending.push(fn);
                    if (pending.length === 1) {
                        next();
                    };
                };
            })(),
            render(fromStart) {
                if (this.isRendered()) {
                    return document.getElementById('xcui-pageloading');
                }

                this.addClass(document.documentElement, 'xcui-pageloading-busy');

                let progress = document.createElement('div');
                progress.id = 'xcui-pageloading';
                progress.innerHTML = this.template;

                let bar = progress.querySelector(this.barSelector);
                let perc = fromStart ? '-100' : this.toBarPerc(this.status || 0);
                let parent = document.querySelector(this.parent);

                this.css(bar, {
                    transition: 'all 0 linear',
                    transform: 'translate3d(' + perc + '%,0,0)'
                });

                if (parent !== document.body) {
                    this.addClass(parent, 'xcui-pageloading-custom-parent');
                }

                parent.appendChild(progress);
                return progress;
            },
            clamp(n, min, max) {
                if (n < min) {
                    return min;
                }
                if (n > max) {
                    return max;
                }
                return n;
            },
            barPositionCSS(n, speed, ease) {
                let barCSS;

                if (this.positionUsing === 'translate3d') {
                    barCSS = { transform: 'translate3d(' + this.toBarPerc(n) + '%,0,0)' };
                }
                else if (this.positionUsing === 'translate') {
                    barCSS = { transform: 'translate(' + this.toBarPerc(n) + '%,0)' };
                }
                else {
                    barCSS = { 'margin-left': this.toBarPerc(n) + '%' };
                }

                barCSS.transition = 'all ' + speed + 'ms ' + ease;

                return barCSS;
            },
            css: (() => {
                const cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ];
                let cssProps = {};

                function camelCase(string) {
                    return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, (match, letter) => {
                        return letter.toUpperCase();
                    });
                }

                function getVendorProp(name) {
                    let style = document.body.style;
                    if (name in style) {
                        return name;
                    };
                    let i = cssPrefixes.length;
                    let capName = name.charAt(0).toUpperCase() + name.slice(1);
                    let vendorName;
                    while (i--) {
                        vendorName = cssPrefixes[i] + capName;
                        if (vendorName in style) {
                            return vendorName;
                        }
                    }

                    return name;
                }

                function getStyleProp(name) {
                    name = camelCase(name);
                    return cssProps[name] || (cssProps[name] = getVendorProp(name));
                }

                function applyCss(element, prop, value) {
                    prop = getStyleProp(prop);
                    element.style[prop] = value;
                }

                return (element, properties, ...argus) => {
                    let args = argus;
                    let prop;
                    let value;

                    if (args.length === 0) {
                        for (prop in properties) {
                            if (properties.hasOwnProperty(prop)) {
                                value = properties[prop];
                                if (value !== undefined && properties.hasOwnProperty(prop)) {
                                    applyCss(element, prop, value);
                                }
                            }
                        }
                    }
                    else {
                        applyCss(element, args[1], args[2]);
                    }
                };
            })(),
            remove() {
                this.removeClass(document.documentElement, 'xcui-pageloading-busy');
                this.removeClass(document.querySelector(this.parent), 'xcui-pageloading-custom-parent');
                let progress = document.getElementById('xcui-pageloading');
                progress && this.removeElement(progress);
            },
            removeClass(element) {
                let oldList = this.classList(element);
                let newList;
                if (!this.hasClass(element, name)) {
                    return;
                }

                newList = oldList.replace(' ' + name + ' ', ' ');

                element.className = newList.substring(1, newList.length - 1);
            },
            getPositioningCSS() {
                let bodyStyle = document.body.style;

                let vendorPrefix;

                if ('WebkitTransform' in bodyStyle) {
                    vendorPrefix = 'Webkit';
                }
                else if ('MozTransform' in bodyStyle) {
                    vendorPrefix = 'Moz';
                }
                else if ('msTransform' in bodyStyle) {
                    vendorPrefix = 'ms';
                }
                else if ('OTransform' in bodyStyle) {
                    vendorPrefix = 'O';
                }
                else {
                    vendorPrefix = '';
                };

                if (vendorPrefix + 'Perspective' in bodyStyle) {
                    return 'translate3d';
                }
                else if (vendorPrefix + 'Transform' in bodyStyle) {
                    return 'translate';
                }
                return 'margin';
            },
            toBarPerc(n) {
                return (-1 + n) * 100;
            },
            isStarted() {
                return typeof this.status === 'number';
            },
            isRendered() {
                return !!document.getElementById('xcui-pageloading');
            },
            addClass(element, name) {
                let oldList = this.classList(element);
                let newList = oldList + name;

                if (this.hasClass(oldList, name)) {
                    return;
                }

                // Trim the opening space.
                element.className = newList.substring(1);
            },
            removeElement(element) {
                element && element.parentNode && element.parentNode.removeChild(element);
            },
            hasClass(element, name) {
                let list = typeof element === 'string' ? element : this.classList(element);
                return list.indexOf(' ' + name + ' ') >= 0;
            },
            classList(element) {
                return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
            },
            trickle() {
                return this.inc();
            },
            inc(amount) {
                let n = this.status;

                if (!n) {
                    return this.start();
                }
                else if (n > 1) {
                    return;
                }
                if (typeof amount !== 'number') {
                    if (n >= 0 && n < 0.25) {
                        // Start out between 3 - 6% increments
                        amount = (Math.random() * (5 - 3 + 1) + 3) / 100;
                    }
                    else if (n >= 0.25 && n < 0.65) {
                        // increment between 0 - 3%
                        amount = (Math.random() * 3) / 100;
                    }
                    else if (n >= 0.65 && n < 0.9) {
                        // increment between 0 - 2%
                        amount = (Math.random() * 2) / 100;
                    }
                    else if (n >= 0.9 && n < 0.99) {
                        // finally, increment it .5 %
                        amount = 0.005;
                    }
                    else {
                        // after 99%, don't increment:
                        amount = 0;
                    }
                }

                n = this.clamp(n + amount, 0, 0.994);
                return this.set(n);
            }
        }
    };
</script>

<style lang="less">

#xcui-pageloading{
    .bar{
        background: #29d;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
    }

    .peg{
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #29d, 0 0 5px #29d;
        opacity: 1.0;
        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
    }
}

</style>
