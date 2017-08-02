<template>
    <div :class="cls"
         v-clickoutside="closeSelect"
         @focus="openSelect"
         >
         <x-input
            ref="reference"
            v-model="currentOptionLabel"
            :disabled="disabled"
            @focus.prevent="openSelect"
            @mousedown.native="handleMouseDown"
            @keydown.native.down.prevent="navigate('next')"
            @keydown.native.up.prevent="navigate('prev')"
            @keydown.native.enter.prevent="handleEnter"
            :size="size"
            :icon="iconCls"
            :icon-click="handleIconClick"
            :readonly="true"
            :placeholder="placeholder"
            @mouseenter.native="inputHovering = true"
            @mouseleave.native="inputHovering = false">
        </x-input>
        <transition name="x-slide-up" @after-leave="doDestroy">
            <x-select-dropdown ref="popper" v-show="isOpen">
                <ul ref="list" class="x-select-list">
                    <slot></slot>
                </ul>
            </x-select-dropdown>
        </transition>
    </div>
</template>
<script>
    import Emitter from 'xcui/src/utils/mixins/emitter';
    import Clickoutside from 'xcui/src/utils/clickoutside';
    import xInput from '../../input';
    import xSelectDropdown from './select-dropdown.vue';
    import xOption from './option.vue';

    export default {
        name: 'xSelect',
        componentName: 'xSelect',
        components: {
            xInput,
            xSelectDropdown,
            xOption
        },
        directives: {
            Clickoutside
        },
        mixins: [Emitter],
        props: {
            value: {},
            size: String,
            // 选择框默认文字
            placeholder: {
                type: String
            },
            // 禁用select
            disabled: {
                type: Boolean,
                default: false
            },
            // 多选
            multiple: {
                type: Boolean,
                default: false
            },
            multipleLimit: {
                type: Number,
                default: 0
            },
            allowClear: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isOpen: false,
                inputWidth: 0,
                selectIndex: 0,
                isFocus: false,
                // options 子组件集合
                options: [],
                currentOptionLabel: '',
                allOptionsDisabled: false,
                inputHovering: false,
                hoverIndex: -1
            };
        },
        methods: {
            doDestroy() {
                this.$refs.popper && this.$refs.popper.doDestroy();
            },
            handleMouseDown(e) {
                if (e.target.tagName !== 'INPUT') {
                    return;
                }
                this.toggleSelect();
            },
            handleIconClick(e) {
                if (this.iconCls.indexOf('android-close') > -1) {
                    this.deleteSelected(e);
                }
                else {
                    let $input = this.$refs.reference.$el.querySelector('.x-input');
                    if (!this.isOpen) {
                        $input.focus();
                    }
                    else {
                        this.closeSelect();
                    }
                }
            },
            handleOptionSelect(option) {
                if (!this.multiple) {
                    this.$emit('input', option.value);
                    this.isOpen = false;
                }
                else {
                    let optionIndex = -1;
                    for (let i = 0, len = this.value.length; i < len; i++) {
                        if (this.value[i] === option.value) {
                            optionIndex = i;
                            break;
                        }
                    }

                    if (optionIndex > -1) {
                        this.value.splice(optionIndex, 1);
                    }
                    else if (this.multipleLimit <= 0 || this.value.length < this.multipleLimit) {
                        this.value.push(option.value);
                    }
                }
            },
            handleEnter() {
                if (this.options[this.hoverIndex]) {
                    this.handleOptionSelect(this.options[this.hoverIndex]);
                }
            },
            openSelect() {
                if (this.isOpen || this.disabled) {
                    return;
                }
                this.isFocus = true;
                this.isOpen = true;
            },
            closeSelect() {
                this.isFocus = false;
                if (!this.isOpen) {
                    return;
                }
                this.isOpen = false;
            },
            toggleSelect() {
                if (!this.isOpen) {
                    this.openSelect();
                }
                else {
                    this.closeSelect();
                }
            },
            setSelected() {
                if (!this.multiple) {
                    let option = this.getOption(this.value);
                    if (option) {
                        this.currentOptionLabel = option.currentLabel;
                    }
                    else {
                        this.currentOptionLabel = '';
                    }
                }
                else {
                    let ret = [];
                    if (Array.isArray(this.value)) {
                        this.value.forEach(value => {
                            ret.push(this.getOption(value));
                        });
                    }
                    let retLen = ret.length;
                    if (retLen === 0) {
                        this.currentOptionLabel = '';
                    }
                    else if (retLen > 0 && retLen < this.options.length) {
                        this.currentOptionLabel = `已选 ${retLen} 项`;
                    }
                    else if (retLen === this.options.length) {
                        this.currentOptionLabel = '已全选';
                    }
                }
            },
            deleteSelected(e) {
                e.stopPropagation();
                if (!this.multiple) {
                    this.$emit('input', '');
                }
                else {
                    this.$emit('input', []);
                }
                this.closeSelect();
            },
            getOption(value) {
                let option;
                for (let i = this.options.length - 1; i >= 0; i--) {
                    const opt = this.options[i];
                    if (opt.value === value) {
                        option = opt;
                        break;
                    }
                }
                return option;
            },
            navigate(direction) {
                if (this.options.length === 0 || this.allOptionsDisabled) {
                    return;
                }
                switch (direction) {
                    case 'next':
                        this.hoverIndex++;
                        if (this.hoverIndex === this.options.length) {
                            this.hoverIndex = 0;
                        }
                        this.resetScrollTop();
                        if (this.options[this.hoverIndex].disabled === true
                            || this.options[this.hoverIndex].groupDisabled === true) {
                            this.navigate('next');
                        }
                        break;
                    case 'prev':
                        this.hoverIndex--;
                        if (this.hoverIndex < 0) {
                            this.hoverIndex = this.options.length - 1;
                        }
                        this.resetScrollTop();
                        if (this.options[this.hoverIndex].disabled === true
                            || this.options[this.hoverIndex].groupDisabled === true) {
                            this.navigate('prev');
                        }
                        break;
                }
            },
            resetScrollTop() {
                let bottomOverflowDistance = this.options[this.hoverIndex].$el.getBoundingClientRect().bottom
                    - this.$refs.popper.$el.getBoundingClientRect().bottom;
                let topOverflowDistance = this.options[this.hoverIndex].$el.getBoundingClientRect().top
                    - this.$refs.popper.$el.getBoundingClientRect().top;
                if (bottomOverflowDistance > 0) {
                    this.$refs.popper.$el.scrollTop += bottomOverflowDistance;
                }
                if (topOverflowDistance < 0) {
                    this.$refs.popper.$el.scrollTop += topOverflowDistance;
                }
            }
        },
        computed: {
            cls() {
                let cls = ['x-select'];
                this.disabled && cls.push('disabled');
                this.isOpen && cls.push('x-select-open');
                this.isFocus && cls.push('is-focus');

                return cls.join(' ');
            },
            iconCls() {
                let cls = [];
                if (this.allowClear && !this.disabled && this.inputHovering
                    && !this.multiple && this.value !== undefined && this.value !== '') {
                    cls.push('android-close');
                }
                else if (this.allowClear && !this.disabled && this.inputHovering
                    && this.multiple && this.value !== undefined && this.value.length !== 0) {
                    cls.push('android-close');
                }
                else {
                    cls.push('arrow-down-b');
                    if (this.isOpen) {
                        cls.push('is-reversed');
                    }
                }
                return cls.join(' ');
            }
        },
        watch: {
            value(val) {
                if (this.multiple) {

                }
                this.setSelected();
                this.$emit('change', val);
                this.dispatch('XFormItem', 'x.form.change', val);
            },
            options(val) {
                this.allOptionsDisabled = val.length === val.filter(item => item.disabled === true).length;
                this.setSelected();
            },
            isOpen(val) {
                if (val) {
                    this.broadcast('xSelectDropdown', 'updatePopper');
                }
                else {
                    this.broadcast('xSelectDropdown', 'destroyPopper');
                    this.hoverIndex = -1;
                }
            }
        },
        created() {
            if (this.multiple && !Array.isArray(this.value)) {
                this.$emit('input', []);
            }
            if (!this.multiple && Array.isArray(this.value)) {
                this.$emit('input', '');
            }
        },
        mounted() {
            this.$on('handleOptionClick', this.handleOptionSelect);
            this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width + 'px';
            this.setSelected();
        }
    };
</script>
