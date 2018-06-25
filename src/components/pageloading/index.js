import Pageloading from './src/pageloading.vue';

const XPageLoading = {
    install(Vue) {
        let pageLoadingInstance;
        let newPageLoadingInstance = () => {
            const div = document.createElement('div');
            div.innerHTML = '<pageloading ref="pageloading" :color="color" :speed="speed"></pageloading>';
            document.body.appendChild(div);

            const pageLoadingVM = new Vue({
                el: div,
                components: {
                    Pageloading
                },
                data() {
                    return {
                        speed: 350,
                        color: ''
                    };
                },
                methods: {
                    start() {
                        this.$nextTick(() => {
                            this.$refs.pageloading.start();
                        });
                    },
                    done() {
                        this.$nextTick(() => {
                            this.$refs.pageloading.done();
                        });
                    },
                    error() {
                        this.$nextTick(() => {
                            this.$refs.pageloading.error();
                        });
                    },
                    config(options) {
                        this.speed = options.speed || this.speed;
                        this.color = options.color || this.color;
                    }
                }
            });

            return pageLoadingVM;
        };

        let getPageLoadingInstance = (isRawHTML) => {
            pageLoadingInstance = pageLoadingInstance || newPageLoadingInstance();
            return pageLoadingInstance;
        };

        Vue.prototype.$PageLoading = {
            start() {
                let instance = getPageLoadingInstance();
                instance.start();
            },
            done() {
                let instance = getPageLoadingInstance();
                instance.done();
            },
            error() {
                let instance = getPageLoadingInstance();
                instance.error();
            },
            config(options) {
                let instance = getPageLoadingInstance();
                instance.config(options);
            }
        };
    }
};

export default XPageLoading;
