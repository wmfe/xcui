/**
 * @file index.js
 */
import Pagination from './pagination';
import PopoverTooltip from './popover';
import Autocomplete from './autocomplete';
import Datepicker from './datepicker';
import Tag from './tag';
import Toaster from './toaster';
import Select from './select';
import Loading from './loading';
import Modal from './modal';
import Progress from './progress';

import xcuiInstall from './install.js';
const install = (Vue) => {
    if (install.installed) return;

    Vue.use(xcuiInstall);
};

const xcui = {
    Pagination,
    PopoverTooltip,
    Autocomplete,
    Datepicker,
    Tag,
    Toaster,
    Select,
    Loading,
    Progress,
    Modal,

    install,
    xcuiInstall
};

module.exports = xcui;
