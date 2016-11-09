import ModalInstall from './modal/install.js';
import MessageInstall from './message/install.js';
import LoadingInstall from './loading/install.js';

let xcuiInstall = {};
xcuiInstall.install = (Vue, options = {
    Modal: true,
    Message: true,
    Loading: true
}) => {
    if (options.Modal) {
        ModalInstall(Vue);
    }
    if (options.Message) {
        MessageInstall(Vue);
    }
    if (options.Loading) {
        LoadingInstall(Vue);
    }
};

export default xcuiInstall;
