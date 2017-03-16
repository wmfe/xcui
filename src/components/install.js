import ModalInstall from './modal/install.js';
import LoadingInstall from './loading/install.js';

let xcuiInstall = {};
xcuiInstall.install = (Vue, options = {
    Modal: true,
    Loading: true
}) => {
    if (options.Modal) {
        ModalInstall(Vue);
    }
    if (options.Loading) {
        LoadingInstall(Vue);
    }
};

export default xcuiInstall;
