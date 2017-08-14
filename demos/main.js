/**
 * entry point
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Helpers from './helpers/install';
import xcui from '../src/components/index';
import '#/common.less';
import '#/pageloading.less';
import '#/row.less';
import '#/col.less';
import '#/message.less';
import './assets/demo/demo.less';
import App from './App';

Vue.use(xcui);
Vue.use(VueRouter);
Vue.use(Helpers);
new Vue(App).$mount('#app');
