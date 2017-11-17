<template>
    <div
        class="x-tabs"
        :class="{
            'x-tabs-card': type === 'card',
            'x-tabs-left': tabPosition === 'left'
        }"
        :style="{
            'height': height + 'px' || ''
        }"
    >
        <div class="x-tabs-header">
            <div class="x-tabs-nav-extra" v-if="showSlot">
                <slot name="extra"></slot>
            </div>
            <div
                class="x-tabs-nav-wrap"
                :class="{
                    'is-scrollable': scrollable
                }"
            >
                <span
                    class="x-tabs-nav-prev"
                    :class="isPrevDisabled ? '' : 'is-disabled'"
                    @click="onClickPrev"
                    v-if="scrollable"
                >
                    <x-icon :name="tabPosition ? 'chevron-up': 'chevron-left'"></x-icon>
                </span>
                <span
                    class="x-tabs-nav-next"
                    @click="onClickNext"
                    :class="isNextDisabled ? '' : 'is-disabled'"
                    v-if="scrollable"
                >
                    <x-icon :name="tabPosition ? 'chevron-down': 'chevron-right'"></x-icon>
                </span>
                <div class="x-tabs-nav-scroll" ref="navScroll">
                    <div
                        class="x-tabs-nav"
                        ref="nav"
                        :style="navStyle"
                    >
                        <div
                            v-if="type !== 'card'"
                            class="x-tabs-active-bar"
                            :style="barStyle"
                            ref="tabBar"
                            ></div>
                        <div
                            ref="tabs"
                            class="x-tabs-nav-item"
                            v-for="(paneItem, index) in panes"
                            :class="{
                                'is-active': index === activeIndex,
                                'is-disabled': paneItem.disabled,
                                'is-closable': paneItem.closable || closable
                            }"
                            @click="onClickTab(paneItem, index, $event)"
                        >
                            <x-icon
                                :name="paneItem.icon"
                                v-if="paneItem.icon"
                            ></x-icon>
                            {{paneItem.label}}
                            <span
                                class="x-tabs-nav-close"
                                v-if="(paneItem.closable || closable) && index === activeIndex && type === 'card'"
                                @click.stop="onClickClose(paneItem, index)"
                            >
                                <x-icon name="android-close"></x-icon>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="x-tabs-body" :style="bodyStyle">
            <slot></slot>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'XTabs',
        props: {
            activeName: String,
            type: String,
            closable: Boolean,
            tabPosition: String,
            height: ''
        },
        data() {
            return {
                currentName: this.activeName,
                panes: [],
                activeIndex: 0,
                navWidthList: [],
                currentNavWidth: '',
                headerHeight: '',
                showSlot: false,
                navStyle: {
                    transform: ''
                },
                scrollable: false,
                isPrevDisabled: true,
                isNextDisabled: true
            };
        },
        watch: {
            panes() {
                this.$nextTick(() => {
                    this.navWidthList = [];
                    this.$refs.tabs.forEach((item, index) => {
                        if (this.tabPosition === 'left') {
                            this.navWidthList.push(item.clientHeight);
                        } else {
                            this.navWidthList.push(item.clientWidth);
                        }
                    });
                    this.currentNavWidth = this.navWidthList[this.activeIndex];
                    this.setCurrentName(this.currentName);
                });
            },
            activeName(value) {
                this.setCurrentName(value);
            },
            currentName() {
                this.$nextTick(() => {
                    this.scrollToActiveTab();
                })
            },
        },
        updated() {
            this.update();
        },
        computed: {
            barStyle() {
                let style = {};
                let offset = 0;
                for (var i = 0; i < this.activeIndex; i++) {
                    offset += this.navWidthList[i];
                };
                let transform;
                let tabBarOffset;
                if (this.$refs.nav && this.$refs.tabBar) {
                    tabBarOffset = this.$refs.nav.clientWidth - this.$refs.tabBar.clientWidth;
                }
                if (this.tabPosition === 'left') {
                    transform = `translate(${tabBarOffset}px, ${offset}px)`;
                    style = {
                        'height': this.currentNavWidth + 'px',
                        'transform': transform,
                        'msTransform':  transform,
                        'webkitTransform': transform
                    }
                } else {
                    transform = `translateX(${offset}px)`;
                    style = {
                        'width': this.currentNavWidth + 'px',
                        'transform': transform,
                        'msTransform':  transform,
                        'webkitTransform': transform
                    }
                }
                return style;
            },
            bodyStyle() {
                let style = {};
                if (this.headerHeight && !this.tabPosition) {
                    let bodyHeight = this.height - this.headerHeight;
                    style = {
                        'height': `${bodyHeight}px`
                    }
                }
                return style;
            }
        },
        methods: {
            onClickTab(data, index, $event) {
                if (data.disabled) {
                    return;
                }
                this.upDateActiveTab(index);
                this.$emit('tab-click', data);
            },
            onClickClose(data, index) {
                this.removePanes(data);
                this.$emit('tab-remove', data);
            },
            addPanes(item) {
                const index = this.$slots.default.indexOf(item.$vnode);
                this.panes.splice(index, 0, item);
            },
            removePanes(item) {
                const panes = this.panes;
                const index = panes.indexOf(item);
                if (index > -1) {
                    panes.splice(index, 1);
                    if (index !== 0) {
                        this.upDateActiveTab(index-1);
                    } else {
                        if (this.panes.length > 0) {
                            this.upDateActiveTab(index);
                        }
                    }
                }
            },
            setCurrentName(value) {
                this.currentName = value;
                this.panes.forEach((item, index) => {
                    if(item.name === value) {
                        this.activeIndex = index;
                        this.currentNavWidth = this.navWidthList[index];
                    }
                });
            },
            upDateActiveTab(index) {
                this.activeIndex = index;
                this.currentName = this.panes[index].name;
                this.currentNavWidth = this.navWidthList[index];
            },
            onClickPrev() {
                const containerWidth = this.$refs.navScroll.offsetWidth;
                const containerHeight = this.$refs.navScroll.offsetHeight;
                const currentOffset = this.getCurrentScrollOffset();
                let newOffset;
                if (!currentOffset) return;

                if (this.tabPosition === 'left') {
                    newOffset = currentOffset > containerHeight
                        ? currentOffset - containerHeight
                        : 0;
                } else {
                    newOffset = currentOffset > containerWidth
                        ? currentOffset - containerWidth
                        : 0;
                }

                this.setOffset(newOffset);
            },
            onClickNext() {
                const navWidth = this.$refs.nav.offsetWidth;
                const containerWidth = this.$refs.navScroll.offsetWidth;

                const navHeight = this.$refs.nav.offsetHeight;
                const containerHeight = this.$refs.navScroll.offsetHeight;

                const currentOffset = this.getCurrentScrollOffset();
                let newOffset;

                if (this.tabPosition === 'left') {
                    if (navHeight - currentOffset <= containerHeight) return;

                    newOffset = navHeight - currentOffset > containerHeight * 2
                        ? currentOffset + containerHeight
                        : (navHeight - containerHeight);
                } else {
                    if (navWidth - currentOffset <= containerWidth) return;

                    newOffset = navWidth - currentOffset > containerWidth * 2
                        ? currentOffset + containerWidth
                        : (navWidth - containerWidth);
                }

                this.setOffset(newOffset);
            },
            scrollToActiveTab() {
                if (!this.scrollable) return;
                    const nav = this.$refs.nav;
                    const activeTab = this.$el.querySelector('.is-active');
                    const navScroll = this.$refs.navScroll;
                    const activeTabBounding = activeTab.getBoundingClientRect();
                    const navScrollBounding = navScroll.getBoundingClientRect();
                    const navBounding = nav.getBoundingClientRect();
                    const currentOffset = this.getCurrentScrollOffset();
                    let newOffset = currentOffset;

                if (this.tabPosition === 'left') {
                    if (activeTabBounding.top < navScrollBounding.top) {
                        newOffset = currentOffset - (navScrollBounding.top - activeTabBounding.top);
                    }
                    if (activeTabBounding.bottom > navScrollBounding.bottom) {
                        newOffset = currentOffset + activeTabBounding.bottom - navScrollBounding.bottom;
                    }
                    if (navBounding.bottom < navScrollBounding.bottom) {
                        newOffset = nav.offsetHeight - navScrollBounding.height;
                    }
                    this.setOffset(Math.max(0, newOffset));
                } else {
                    if (activeTabBounding.left < navScrollBounding.left) {
                        newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
                    }
                    if (activeTabBounding.right > navScrollBounding.right) {
                        newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
                    }
                    if (navBounding.right < navScrollBounding.right) {
                        newOffset = nav.offsetWidth - navScrollBounding.width;
                    }
                    this.setOffset(Math.max(newOffset, 0));
                }
            },
            getCurrentScrollOffset() {
                const { navStyle } = this;
                if (this.tabPosition === 'left') {
                    return navStyle.transform
                    ? Number(navStyle.transform.match(/translateY\(-(\d+(\.\d+)*)px\)/)[1])
                    : 0;
                }
                return navStyle.transform
                    ? Number(navStyle.transform.match(/translateX\(-(\d+(\.\d+)*)px\)/)[1])
                    : 0;
            },
            setOffset(value) {
                if (this.tabPosition === 'left') {
                    this.navStyle.transform = `translateY(-${value}px)`;
                } else {
                    this.navStyle.transform = `translateX(-${value}px)`;
                }
            },
            update() {
                if (this.tabPosition === 'left') {
                    const navHeight = this.$refs.nav.offsetHeight;
                    const navScrollHeight= this.$refs.navScroll.offsetHeight;
                    const currentOffset = this.getCurrentScrollOffset();
                    if (navScrollHeight < navHeight) {
                        this.scrollable = true;

                        this.isPrevDisabled = currentOffset;
                        this.isNextDisabled = currentOffset + navScrollHeight < navHeight;
                        if (navHeight - currentOffset < navScrollHeight) {
                            this.setOffset(navHeight - navScrollHeight);
                        }
                    } else {
                        this.scrollable = false;
                        if (currentOffset > 0) {
                            this.setOffset(0);
                        }
                    }
                } else {
                    const navWidth = this.$refs.nav.offsetWidth;
                    const navScrollWidth = this.$refs.navScroll.offsetWidth;
                    const currentOffset = this.getCurrentScrollOffset();

                    if (navScrollWidth < navWidth) {
                        this.scrollable = true;

                        this.isPrevDisabled = currentOffset;
                        this.isNextDisabled = currentOffset + navScrollWidth < navWidth;
                        if (navWidth - currentOffset < navScrollWidth) {
                            this.setOffset(navWidth - navScrollWidth);
                        }
                    } else {
                        this.scrollable = false;
                        if (currentOffset > 0) {
                            this.setOffset(0);
                        }
                    }
                }
            }
        },
        mounted() {
            this.showSlot = this.$slots.extra !== undefined;
            this.$nextTick(() => {
                this.headerHeight = this.$refs.nav.offsetHeight;
                if (!this.activeName) {
                    this.upDateActiveTab(0);
                } else {
                    this.panes.forEach((item, index) => {
                        if(item.name === this.activeName) {
                            this.activeIndex = index;
                            this.currentNavWidth = this.navWidthList[index];
                        }
                    });
                }
                this.update();
            });
        }
    };
</script>
