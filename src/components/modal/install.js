import Modal from './index.vue';

let modalInstance;
let newModalInstance = (Vue) => {
    const camelcaseToHyphen = str => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

    const isEmptyObject = obj => !Object.keys(obj).length;

    const PROPERTIES = [
        'title', 'style', 'contentStyle', 'size', 'className', 'showFooter', 'showHeader',
        'showCloseButton', 'showOkButton', 'showCancelButton', 'maskClosable', 'scrollable',
        'okText', 'cancelText', 'onOk', 'onCancel'
    ];

    const div = document.createElement('div');
    let propsString = PROPERTIES.reduce(
        (preValue, curValue) => `${preValue} :${camelcaseToHyphen(curValue)}="${curValue}"`,
        ''
    );
    div.innerHTML = `
        <Modal${propsString} :show.sync="show">
            <template v-if="!isRawHTML">
                {{content}}
            </template>
            <div v-else>
                {{{content}}}
            </div>
        </Modal>
    `;
    document.body.appendChild(div);

    const modalVM = new Vue({
        el: div,
        components: {
            Modal
        },
        data() {
            return {
                show: false,
                content: '',
                isRawHTML: false,

                title: '提示',
                style: {},
                contentStyle: {},
                size: 'middle',
                className: '',
                showFooter: true,
                showHeader: true,
                showCloseButton: true,
                showOkButton: true,
                showCancelButton: true,
                maskClosable: true,
                scrollable: false,
                okText: '确定',
                cancelText: '取消',
                onOk: () => {},
                onCancel: () => {}
            };
        }
    });

    return {
        show(props) {
            props = !props || isEmptyObject(props) ? {} : props;
            modalVM.content = props.content ? props.content : '';

            Object.keys(props).forEach(propKey => {
                modalVM[propKey] = props[propKey];
            });
            modalVM.show = true;
        },
        remove() {
            modalVM.show = false;
        },
        _chooseContentMode(isRawHTML) {
            modalVM.isRawHTML = !!isRawHTML;
        }
    };
};

let getModalInstance = (Vue, isRawHTML) => {
    modalInstance = modalInstance || newModalInstance(Vue);
    modalInstance._chooseContentMode(isRawHTML);
    return modalInstance;
};

let ModalInstall = (Vue) => {
    let modalFunc = {
        show(options, isRawHTML) {
            let instance = getModalInstance(Vue, isRawHTML);
            instance.show(options);
        },
        close() {
            if (!modalInstance) {
                return false;
            }
            const instance = getModalInstance(Vue);
            instance.remove();
        }
    };
    Vue.prototype.$Modal = modalFunc;
    Vue.prototype.$confirm = (title, content, onOk, onCancel, isRawHTML) => {
        let options = {};
        let type = isRawHTML;
        if (typeof title === 'object') {
            options = title;
            type = content;
        }
        else {
            options.title = title;
            options.content = content;
            options.onOk = onOk;
            options.onCancel = onCancel;
        }
        modalFunc.show(options, type);
    };

    Vue.prototype.$alert = (content, onOk) => {
        let options = {
            showHeader: false,
            showCancelButton: false,
            size: 'small',
            maskClosable: false,
            okText: '确定',
            scrollable: false
        };
        options.content = content;
        options.onOk = onOk;
        modalFunc.show(options);
    };
};

export default ModalInstall;
