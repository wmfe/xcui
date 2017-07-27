<template>
    <div class="x-form-item"
        :class="{
            'is-error': validateState === 'error',
            'is-validating': validateState === 'validating',
            'is-required': isRequired || required
            }">
        <label :for="prop" class="x-form-item-label" :style="labelStyle" v-if="label">{{label}}</label>
        <div class="x-form-item-content" v-bind:style="contentStyle">
            <slot></slot>
            <transition name="x-slide-up">
                <div class="x-form-item-error" v-if="validateState === 'error' && showMessage && form.showMessage">
                    {{validateMessage}}
                </div>
            </transition>
       </div>
    </div>
</template>

<script>
import AsyncValidator from 'async-validator';
import emitter from 'xcui/src/utils/mixins/emitter';

function noop() {}

function getPropByPath(obj, path) {
    let tempObj = obj;
    path = path.replace(/\[(\w+)\]/g, '.$1');
    path = path.replace(/^\./, '');

    let keyArr = path.split('.');
    let i = 0;

    for (let len = keyArr.length; i < len - 1; ++i) {
        let key = keyArr[i];
        if (key in tempObj) {
            tempObj = tempObj[key];
        }
        else {
            throw new Error('please transfer a valid prop path to form item!');
        }
    }
    return {
        o: tempObj,
        k: keyArr[i],
        v: tempObj[keyArr[i]]
    };
}

export default {
    name: 'XFormItem',

    componentName: 'XFormItem',

    mixins: [emitter],

    props: {
        label: String,
        labelWidth: String,
        prop: String,
        required: Boolean,
        rules: [Object, Array],
        error: String,
        validateStatus: String,
        showMessage: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        error(value) {
            this.validateMessage = value;
            this.validateState = value ? 'error' : '';
        },
        validateStatus(value) {
            this.validateState = value;
        }
    },
    computed: {
        labelStyle() {
            let ret = {};
            if (this.form.labelPosition === 'top') {
                return ret;
            }
            let labelWidth = this.labelWidth || this.form.labelWidth;
            if (labelWidth) {
                ret.width = labelWidth;
            }
            return ret;
        },
        contentStyle() {
            let ret = {};
            if (this.form.labelPosition === 'top' || this.form.inline) {
                return ret;
            }
            let labelWidth = this.labelWidth || this.form.labelWidth;
            if (labelWidth) {
                ret.marginLeft = labelWidth;
            }
            return ret;
        },
        form() {
            let parent = this.$parent;
            while (parent.$options.componentName !== 'XForm') {
                parent = parent.$parent;
            }
            return parent;
        },
        fieldValue: {
            cache: false,
            get() {
                let model = this.form.model;
                if (!model || !this.prop) {
                    return;
                }

                let path = this.prop;
                if (path.indexOf(':') !== -1) {
                    path = path.replace(/:/, '.');
                }

                return getPropByPath(model, path).v;
            }
        }
    },
    data() {
        return {
            validateState: '',
            validateMessage: '',
            validateDisabled: false,
            validator: {},
            isRequired: false
        };
    },
    methods: {
        validate(trigger, callback = noop) {
            let rules = this.getFilteredRule(trigger);
            if (!rules || rules.length === 0) {
                callback();
                return true;
            }

            this.validateState = 'validating';

            let descriptor = {};
            descriptor[this.prop] = rules;

            let validator = new AsyncValidator(descriptor);
            let model = {};

            model[this.prop] = this.fieldValue;

            validator.validate(model, {
                firstFields: true
            }, (errors, fields) => {
                this.validateState = !errors ? 'success' : 'error';
                this.validateMessage = errors ? errors[0].message : '';

                callback(this.validateMessage);
            });
        },
        resetField() {
            this.validateState = '';
            this.validateMessage = '';

            let model = this.form.model;
            let value = this.fieldValue;
            let path = this.prop;
            if (path.indexOf(':') !== -1) {
                path = path.replace(/:/, '.');
            }

            let prop = getPropByPath(model, path);

            if (Array.isArray(value)) {
                this.validateDisabled = true;
                prop.o[prop.k] = [].concat(this.initialValue);
            }
            else {
                this.validateDisabled = true;
                prop.o[prop.k] = this.initialValue;
            }
        },
        getRules() {
            let formRules = this.form.rules;
            let selfRuels = this.rules;

            formRules = formRules ? formRules[this.prop] : [];

            return [].concat(selfRuels || formRules || []);
        },
        getFilteredRule(trigger) {
            let rules = this.getRules();

            return rules.filter(rule => {
                return !rule.trigger || rule.trigger.indexOf(trigger) !== -1;
            });
        },
        onFieldBlur() {
            this.validate('blur');
        },
        onFieldChange() {
            if (this.validateDisabled) {
                this.validateDisabled = false;
                return;
            }

            this.validate('change');
        }
    },
    mounted() {
        if (this.prop) {
            this.dispatch('XForm', 'x.form.addField', [this]);

            let initialValue = this.fieldValue;
            if (Array.isArray(initialValue)) {
                initialValue = [].concat(initialValue);
            }
            Object.defineProperty(this, 'initialValue', {
                value: initialValue
            });

            let rules = this.getRules();

            if (rules.length) {
                rules.every(rule => {
                    if (rule.required) {
                        this.isRequired = true;
                        return false;
                    }
                });
                this.$on('x.form.blur', this.onFieldBlur);
                this.$on('x.form.change', this.onFieldChange);
            }
        }
    },
    beforeDestroy() {
        this.dispatch('XForm', 'x.form.removeField', [this]);
    }
};
</script>
