/**
 * @file router.js
 * Router configuration
 */

import VueRouter from 'vue-router';
import Home from './Home';
import Homecontent from './demos/homeContent';
import Pagination from './demos/pagination';
import Loading from './demos/loading';
import Popover from './demos/popover';
import Tooltip from './demos/tooltip';
import Suggestion from './demos/suggestion';
import Tag from './demos/tag';
import Datepicker from './demos/datepicker';
import Daterangepicker from './demos/dateRangePicker';
import Select from './demos/select.vue';
import Message from './demos/message';
import Modal from './demos/modal';
import InputNumber from './demos/inputNumber';
import Progress from './demos/progress';
import PageLoading from './demos/pageloading';
import ScrollTop from './demos/scrolltop';

const router = new VueRouter({
    routes: [{
        path: '/',
        component: Home,
        children: [
            {
                path: 'home',
                component: Homecontent
            }, {
                path: 'component/pagination',
                component: Pagination
            }, {
                path: 'component/popover',
                component: Popover
            }, {
                path: 'component/tooltip',
                component: Tooltip
            }, {
                path: 'component/suggestion',
                component: Suggestion
            }, {
                path: 'component/tag',
                component: Tag
            }, {
                path: 'component/datepicker',
                component: Datepicker
            }, {
                path: 'component/daterangepicker',
                component: Daterangepicker
            }, {
                path: 'component/loading',
                component: Loading
            }, {
                path: 'component/message',
                component: Message
            }, {
                path: 'component/modal',
                component: Modal
            }, {
                path: 'component/select',
                component: Select
            }, {
                path: 'component/inputnumber',
                component: InputNumber
            }, {
                path: 'component/progress',
                component: Progress
            }, {
                path: 'component/pageloading',
                component: PageLoading
            }, {
                path: 'component/scrolltop',
                component: ScrollTop
            }
        ]
    }]
});

export default router;
