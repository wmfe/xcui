/**
 * entry point
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Helpers from './demos/helpers/install';
import XCUI from './components/index';
import App from './App';

Vue.use(XCUI);
Vue.use(VueRouter);
Vue.use(Helpers);
new Vue(App).$mount('#app');
