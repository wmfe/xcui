import ModalInstall from './modal/install.js';
let xcuiInstall = {};
xcuiInstall.install = (Vue, options = {
    Modal: true,
    Toaster: true
}) => {
    if (options.Modal) {
        ModalInstall(Vue);
    }
};

export default xcuiInstall;
