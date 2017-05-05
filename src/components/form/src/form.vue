<template>
    <form action="javascript:;" class="x-form"
        :class="[labelPosition ? 'x-form-label-' + labelPosition : '', {'x-form-inline': inline} ]">
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: 'XForm',
        componentName: 'XForm',
        props: {
            model: Object,
            rules: Object,
            labelPosition: String,
            labelWidth: String,
            inline: Boolean,
            showMessage: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                fields: []
            };
        },
        methods: {
            resetFields() {
                this.fields.forEach(field => {
                    field.resetField();
                });
            },
            validate(callback) {
                let valid = true;
                let count = 0;
                if (this.fields.length === 0 && callback) {
                    callback(true);
                }
                this.fields.forEach((field, index) => {
                    field.validate('', errors => {
                        if (errors) {
                            valid = false;
                        }
                        if (typeof callback === 'function' && ++count === this.fields.length) {
                            callback(valid);
                        }
                    });
                });
            },
            validateField(prop, cb) {
                let field = this.fields.filter(field => field.prop === prop)[0];
                if (!field) {
                    throw new Error('must call validateField with valid prop string!');
                }

                field.validate('', cb);
            }
        },
        created() {
            this.$on('x.form.addField', (field) => {
                if (field) {
                    this.fields.push(field);
                }
            });

            this.$on('x.form.removeField', (field) => {
                if (field.prop) {
                    this.fields.splice(this.fields.indexOf(field), 1);
                }
            });
        }
    };
</script>
