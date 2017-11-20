import demoControl from './demoControl';

export default {
    install: function (Vue, options) {
        Vue.component(demoControl.name, demoControl);
    }
};
