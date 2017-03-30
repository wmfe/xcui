import config from './config';

const getconfig = function (path) {
    let ret = '';
    let current = config;
    const arr = path.split('.');
    for (let i = 0, j = arr.length; i < j; i++) {
        const prop = arr[i];
        ret = current[prop];
        if (i === j - 1) {
            return ret;
        }
        if (!ret) {
            return '';
        }
        current = ret;
    }
    return '';
};

export default {
    methods: {
        t(...args) {
            return getconfig.apply(this, args);
        }
    }
};