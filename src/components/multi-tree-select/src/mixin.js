import {
    isChildOf
} from './util.js';

export default {
    methods: {
        bindHideEvent() {
            let me = this;
            document.addEventListener('click', function (e) {
                // 当点击事件产生的节点不是来自本组件内部，则隐藏下拉菜单
                // 当一个页面有多个组件实例时，弹出一个下拉菜单，另一个实例的下拉菜单则会隐藏
                if (me.showDropDown && !isChildOf(e.target, me.$el)) {
                    me.showDropDown = false;
                }
            });
        }
    },
    mounted() {
        this.bindHideEvent();
    }
};
