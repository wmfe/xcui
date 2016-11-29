/**
 * @file webpack.npm.base.conf.js
 * entry point
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import xcui from './components/index';
import App from './App';

Vue.use(xcui);
Vue.use(VueRouter);
Vue.config.devtools = true;
new Vue(App).$mount('#app');
