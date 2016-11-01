import Loading from './index.vue';

const isEmptyObject = obj => !Object.keys(obj).length;

let LoadingInstall = (Vue) => {
    let loadingInstance;
    let newLoadingInstance = () => {
        const div = document.createElement('div');
        div.innerHTML = `
            <Loading :show="show"
                 :type="type"
                 :color="color"
                 :size="size"
                 :classname="classname">
             </Loading>
        `;
        document.body.appendChild(div);

        let loadingVM = new Vue({
            el: div,
            components: {
                Loading
            },
            data() {
                return {
                    show: false,
                    type: 'load1',
                    size: 'sm',
                    color: '',
                    classname: ''
                };
            }
        });
        return {
            _show(props) {
                props = !props || isEmptyObject(props) ? {} : props;
                Object.keys(props).forEach(propKey => {
                    loadingVM[propKey] = props[propKey];
                });
                loadingVM.show = true;
            },
            _remove() {
                loadingVM.show = false;
            }
        };
    };

    let getloadingInstance = () => {
        loadingInstance = loadingInstance || newLoadingInstance();
        return loadingInstance;
    };

    Vue.prototype.$Loading = {
        show(type, size, color, classname) {
            let options = {};
            if (typeof type === 'object') {
                options = type;
            }
            else {
                options.type = type;
                options.size = size;
                options.color = color;
                options.classname = classname;
            }
            let instance = getloadingInstance();
            instance._show(options);
        },
        close() {
            if (!loadingInstance) {
                return false;
            }
            const instance = getloadingInstance();
            instance._remove();
        }
    };
};

export default LoadingInstall;
