/**
 * @file index.js
 */
import Suggestion from './suggestion';
import Datepicker from './datepicker';
import DateRangePicker from './daterangepicker';
import InputNumber from './inputNumber';
import Loading from './loading';
import Modal from './modal';
import PageLoading from './pageloading';
import Pagination from './pagination';
import Popover from './popover';
import Progress from './progress';
import Select from './select';
import Tag from './tag';
import Toaster from './toaster';
import Tooltip from './tooltip';

import xcuiInstall from './install.js';

const install = (Vue) => {
    if (install.installed) {
        return;
    }
    Vue.component(Suggestion.name, Suggestion);
    Vue.component(Datepicker.name, Datepicker);
    Vue.component(DateRangePicker.name, DateRangePicker);
    Vue.component(InputNumber.name, InputNumber);
    Vue.component(Loading.name, Loading);
    Vue.component(Modal.name, Modal);
    Vue.component(PageLoading.name, PageLoading);
    Vue.component(Pagination.name, Pagination);
    Vue.component(Popover.name, Popover);
    Vue.component(Progress.name, Progress);
    Vue.component(Select.name, Select);
    Vue.component(Tag.name, Tag);
    Vue.component(Toaster.name, Toaster);
    Vue.component(Tooltip.name, Tooltip);

    Vue.use(xcuiInstall);
};

const xcui = {
    version: '1.0.0-alpha',
    Suggestion,
    Datepicker,
    DateRangePicker,
    InputNumber,
    Loading,
    Modal,
    PageLoading,
    Pagination,
    Popover,
    Progress,
    Select,
    Tag,
    Toaster,
    Tooltip,

    install,
    xcuiInstall
};

module.exports = xcui;
