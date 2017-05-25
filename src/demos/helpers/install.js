import demoControl from './demoControl';

const Helpers = {};
Helpers.install = (Vue, options) => {
    Vue.component(demoControl.name, demoControl);
};

export default Helpers;
