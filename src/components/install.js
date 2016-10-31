import xcuiModal from './components/modal'
let modalInstall = (Vue, $root) => {
    Vue.set($root, 'XCUI_MODAL', {
        show: false,
        title: '',
        ok: ()=>{},
        cancel: ()=>{}
    });
    Vue.prototype.$Modal = {
        open(title, text, onOk, onCancel, rawHTML) {
            $root.XCUI_MODAL = {

            }
        },
        close() {

        },
        alert() {

        },
        confirm() {
            
        }
    };
};
const install = (Vue, options) => {

};
