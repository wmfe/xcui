/**
 * @file index.js
 */
import Autocomplete from './autocomplete';
import Datepicker from './datepicker';
import DateRangePicker from './DateRangePicker';
import inputNumber from './inputNumber';
import Loading from './loading';
import Modal from './modal';
import PageLoading from './pageloading';
import Pagination from './pagination';
import PopoverTooltip from './popover';
import Progress from './progress';
import Select from './select';
import Tag from './tag';
import Toaster from './toaster';

import xcuiInstall from './install.js';
const install = (Vue) => {
    if (install.installed) return;

    Vue.use(xcuiInstall);
};

const xcui = {
    version: '1.0.0-alpha',
    Autocomplete,
    Datepicker,
    DateRangePicker,
    inputNumber,
    Loading,
    Modal,
    PageLoading,
    Pagination,
    PopoverTooltip,
    Progress,
    Select,
    Tag,
    Toaster,

    install,
    xcuiInstall
};

module.exports = xcui;
