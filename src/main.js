/**
 * @file webpack.npm.base.conf.js
 * entry point
 */

import Vue from 'vue';
import Router from 'vue-router';
import App from './App';
import Home from './Home';
import Homecontent from './demos/homeContent';
import xcui from './components/index';
import Pagination from './demos/pagination';
import Loading from './demos/loading';
import Popover from './demos/popover';
import Tooltip from './demos/tooltip';
import Suggestion from './demos/suggestion';
import TagDemo from './demos/tag';
import datepicker from './demos/datepicker';
import daterangepicker from './demos/dateRangePicker';
import Select from './demos/select.vue';
import Message from './demos/message';
import Modal from './demos/modal';
import InputNumber from './demos/inputNumber';
import Progress from './demos/progress';
import PageLoading from './demos/pageloading';
import ScrollTop from './demos/scrolltop';

Vue.use(Router);
Vue.use(xcui);
Vue.config.devtools = true;

const router = new Router();

router.map({
    '/': {
        component: Home,
        subRoutes: {
            '/home': {
                name: 'home',
                component(resolve) {
                    resolve(Homecontent);
                }
            },
            '/component/pagination': {
                component(resolve) {
                    resolve(Pagination);
                }
            },
            '/component/popover': {
                component(resolve) {
                    resolve(Popover);
                }
            },
            '/component/tooltip': {
                component(resolve) {
                    resolve(Tooltip);
                }
            },
            '/component/suggestion': {
                component(resolve) {
                    resolve(Suggestion);
                }
            },
            '/component/tag': {
                component(resolve) {
                    resolve(TagDemo);
                }
            },
            '/component/datepicker': {
                component(resolve) {
                    resolve(datepicker);
                }
            },
            '/component/daterangepicker': {
                component(resolve) {
                    resolve(daterangepicker);
                }
            },
            '/component/select': {
                component(resolve) {
                    resolve(Select);
                }
            },
            '/component/loading': {
                component(resolve) {
                    resolve(Loading);
                }
            },
            '/component/message': {
                component(resolve) {
                    resolve(Message);
                }
            },
            '/component/modal': {
                component(resolve) {
                    resolve(Modal);
                }
            },
            '/component/inputNumber': {
                component(resolve) {
                    resolve(InputNumber);
                }
            },
            '/component/progress': {
                component(resolve) {
                    resolve(Progress);
                }
            },
            '/component/pageloading': {
                component(resolve) {
                    resolve(PageLoading);
                }
            },
            '/component/scrolltop': {
                component(resolve) {
                    resolve(ScrollTop);
                }
            }
        }
    }
});

router.start(App, '#app');
