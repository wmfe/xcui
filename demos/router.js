/**
 * @file router.js
 * Router configuration
 */

import VueRouter from 'vue-router';
import Home from './Home';
import Homecontent from './components/homeContent';
import Installation from './components/installation';
import Quickstart from './components/quickstart';
import Layout from './components/layout';
import Pagination from './components/pagination';
import Loading from './components/loading';
import Popover from './components/popover';
import Tooltip from './components/tooltip';
import Suggestion from './components/suggestion';
import Tag from './components/tag';
import Datepicker from './components/datepicker';
import DateTimePicker from './components/datetimepicker';
import TimePicker from './components/timepicker';
import Select from './components/select.vue';
import Message from './components/message';
import Notice from './components/notice';
import Modal from './components/modal';
import Dialog from './components/dialog';
import InputNumber from './components/inputNumber';
import Progress from './components/progress';
import PageLoading from './components/pageloading';
import ScrollTop from './components/scrolltop';
import Button from './components/button';
import Icon from './components/icon';
import Input from './components/input';
import Textarea from './components/textarea';
import Checkbox from './components/checkbox';
import Radio from './components/radio';
import Switch from './components/switch';
import Form from './components/form';
import Table from './components/table';
import Steps from './components/steps';
import Collapse from './components/collapse';

const router = new VueRouter({
    routes: [{
        path: '/',
        component: Home,
        children: [
            {
                path: '/home',
                component: Homecontent
            }, {
                path: '/intro/installation',
                component: Installation
            }, {
                path: '/intro/quickstart',
                component: Quickstart
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
                path: '/component/datetimepicker',
                component: DateTimePicker
            }, {
                path: '/component/timepicker',
                component: TimePicker
            }, {
                path: '/component/loading',
                component: Loading
            }, {
                path: '/component/message',
                component: Message
            }, {
                path: '/component/notice',
                component: Notice
            }, {
                path: '/component/modal',
                component: Modal
            }, {
                path: '/component/dialog',
                component: Dialog
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
            }, {
                path: '/component/switch',
                component: Switch
            }, {
                path: '/component/form',
                component: Form
            }, {
                path: '/component/table',
                component: Table
            }, {
                path: '/component/steps',
                component: Steps
            }, {
                path: '/component/collapse',
                component: Collapse
            }
        ]
    }]
});

router.afterEach(route => {
    window.scrollTo(0, 0);
});

export default router;
