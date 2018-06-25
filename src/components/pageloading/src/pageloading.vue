<template>
    <span></span>
</template>

<script>
    export default {
        name: 'XPageLoading',
        data() {
            return {
                easing: 'linear',
                positionUsing: '',
                status: null,
                template: '<div class="bar" role="bar"><div class="peg" role="peg"></div></div>',
                parent: 'body',
                barSelector: '[role="bar"]',
                pegSelector: '[role="peg"]',
                errorColor: '#f04134'
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
            trickled: {
                type: Boolean,
                default: true
            },
            trickleSpeed: {
                type: Number,
                default: 250
            },
            color: {
                type: String,
                default: ''
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
                                transition: 'transform ' + speed + 'ms linear',
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
                if (this.trickled) {
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
            error(force) {
                if (!force && !this.status) {
                    return this;
                }
                let started = this.isStarted();
                let progress = this.render(!started);
                let bar = progress.querySelector(this.barSelector);
                let peg = progress.querySelector(this.pegSelector);
                this.addClass(bar, 'bar-error');
                this.addClass(peg, 'peg-error');
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
                    return document.getElementById('x-pageloading');
                }

                this.addClass(document.documentElement, 'x-pageloading-busy');

                let progress = document.createElement('div');
                progress.id = 'x-pageloading';
                progress.innerHTML = this.template;

                let bar = progress.querySelector(this.barSelector);
                let perc = fromStart ? '-100' : this.toBarPerc(this.status || 0);
                let parent = document.querySelector(this.parent);

                const color = this.color;

                this.css(bar, {
                    transition: 'transform 0 linear',
                    transform: 'translate3d(' + perc + '%,0,0)',
                });
                this.addClass(bar, 'bar-active');

                let peg = progress.querySelector(this.pegSelector);

                if(color) {
                    this.css(bar, {
                        background: color
                    });
                    this.css(peg, {
                        boxShadow: `0 0 10px ${color}, 0 0 5px ${color}`
                    });
                }

                this.addClass(peg, 'peg-active');

                if (parent !== document.body) {
                    this.addClass(parent, 'x-pageloading-custom-parent');
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

                barCSS.transition = 'transform ' + speed + 'ms ' + ease;

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
                this.removeClass(document.documentElement, 'x-pageloading-busy');
                this.removeClass(document.querySelector(this.parent), 'x-pageloading-custom-parent');
                let progress = document.getElementById('x-pageloading');
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
                return !!document.getElementById('x-pageloading');
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
