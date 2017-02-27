/**
 * @file router.js
 * Router configuration
 */

import VueRouter from 'vue-router';
import Home from './Home';
import Homecontent from './demos/homeContent';
import Layout from './demos/layout';
import Pagination from './demos/pagination';
import Loading from './demos/loading';
import Popover from './demos/popover';
import Tooltip from './demos/tooltip';
import Suggestion from './demos/suggestion';
import Tag from './demos/tag';
import Datepicker from './demos/datepicker';
import Daterangepicker from './demos/DateRangePicker';
import Select from './demos/select.vue';
import Message from './demos/message';
import Modal from './demos/modal';
import InputNumber from './demos/inputNumber';
import Progress from './demos/progress';
import PageLoading from './demos/pageloading';
import ScrollTop from './demos/scrolltop';
import Button from './demos/button';
import Icon from './demos/icon';
import Input from './demos/input';
import Textarea from './demos/textarea';
import Checkbox from './demos/checkbox';
import Radio from './demos/radio';

const router = new VueRouter({
    routes: [{
        path: '/',
        component: Home,
        children: [
            {
                path: '/home',
                component: Homecontent
            }, {
                path: '/component/layout',
                component: Layout
            }, {
                path: '/component/pagination',
                component: Pagination
            }, {
                path: '/component/icon',
                component: Icon
            }, {
                path: '/component/button',
                component: Button
            }, {
                path: '/component/input',
                component: Input
            }, {
                path: '/component/textarea',
                component: Textarea
            }, {
                path: '/component/checkbox',
                component: Checkbox
            }, {
                path: '/component/radio',
                component: Radio
            }, {
                path: '/component/popover',
                component: Popover
            }, {
                path: '/component/tooltip',
                component: Tooltip
            }, {
                path: '/component/suggestion',
                component: Suggestion
            }, {
                path: '/component/tag',
                component: Tag
            }, {
                path: '/component/datepicker',
                component: Datepicker
            }, {
                path: '/component/daterangepicker',
                component: Daterangepicker
            }, {
                path: '/component/loading',
                component: Loading
            }, {
                path: '/component/message',
                component: Message
            }, {
                path: '/component/modal',
                component: Modal
            }, {
                path: '/component/select',
                component: Select
            }, {
                path: '/component/input-number',
                component: InputNumber
            }, {
                path: '/component/progress',
                component: Progress
            }, {
                path: '/component/pageloading',
                component: PageLoading
            }, {
                path: '/component/scrolltop',
                component: ScrollTop
            }
        ]
    }]
});

export default router;
