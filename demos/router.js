/**
 * @file router.js
 * Router configuration
 */

import VueRouter from 'vue-router';
import Home from './Home';
import Homecontent from './components/homeContent';

const Installation = () => import('./components/installation');
const Quickstart = () => import('./components/quickstart');
const Layout = () => import('./components/layout');
const Pagination = () => import('./components/pagination');
const Loading = () => import('./components/loading');
const Popover = () => import('./components/popover');
const Tooltip = () => import('./components/tooltip');
const Suggestion = () => import('./components/suggestion');
const Tag = () => import('./components/tag');
const Datepicker = () => import('./components/datepicker');
const DateTimePicker = () => import('./components/datetimepicker');
const TimePicker = () => import('./components/timepicker');
const Select = () => import('./components/select.vue');
const Message = () => import('./components/message');
const Notice = () => import('./components/notice');
const Modal = () => import('./components/modal');
const Dialog = () => import('./components/dialog');
const InputNumber = () => import('./components/inputNumber');
const Progress = () => import('./components/progress');
const PageLoading = () => import('./components/pageloading');
const ScrollTop = () => import('./components/scrolltop');
const Button = () => import('./components/button');
const Icon = () => import('./components/icon');
const Input = () => import('./components/input');
const Textarea = () => import('./components/textarea');
const Checkbox = () => import('./components/checkbox');
const Radio = () => import('./components/radio');
const Switch = () => import('./components/switch');
const Form = () => import('./components/form');
const Table = () => import('./components/table');
const Steps = () => import('./components/steps');
const Collapse = () => import('./components/collapse');
const Upload = () => import('./components/upload');
const Dropdown = () => import('./components/dropdown');
const Alert = () => import('./components/alert');
const MultiTreeSelect = () => import('./components/multi-tree-select');
const SingleTreeSelect = () => import('./components/single-tree-select');
const Tabs = () => import('./components/tabs');
const Breadcrumb = () => import('./components/breadcrumb');

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
            }, {
                path: '/component/upload',
                component: Upload
            }, {
                path: '/component/dropdown',
                component: Dropdown
            }, {
                path: '/component/single-tree-select',
                component: SingleTreeSelect
            }, {
                path: '/component/multi-tree-select',
                component: MultiTreeSelect
            }, {
                path: '/component/alert',
                component: Alert
            }, {
                path: '/component/tabs',
                component: Tabs
            }, {
                path: '/component/breadcrumb',
                component: Breadcrumb
            }
        ]
    }]
});

export default router;
