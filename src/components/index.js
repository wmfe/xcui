/**
 * @file index.js
 */
import {DatePicker, TimePicker, TimeSelect} from './datepicker/index';
import Input from './input';
import InputNumber from './inputNumber';
import Textarea from './textarea';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Radio from './radio';
import RadioButton from './radio-button';
import RadioGroup from './radio-group';
import Loading from './loading';
import Message from './message/index.js';
import Notice from './notice/index.js';
import Modal from './modal';
import PageLoading from './pageloading';
import Pagination from './pagination';
import Popover from './popover';
import Progress from './progress';
import {Select, Option, OptionGroup} from './select/index';
import Suggestion from './suggestion';
import Tag from './tag';
import Tooltip from './tooltip';
import ScrollTop from './scrolltop';
import {Button, ButtonGroup} from './button';
import {Row, Col} from './layout';
import Icon from './icon';

import xcuiInstall from './install.js';

require('../less/index.less');

const install = (Vue) => {
    if (install.installed) {
        return;
    }
    Vue.component(DatePicker.name, DatePicker);
    Vue.component(TimePicker.name, TimePicker);
    Vue.component(TimeSelect.name, TimeSelect);
    Vue.component(InputNumber.name, InputNumber);
    Vue.component(Loading.name, Loading);
    Vue.component(Modal.name, Modal);
    Vue.component(PageLoading.name, PageLoading);
    Vue.component(Pagination.name, Pagination);
    Vue.component(Popover.name, Popover);
    Vue.component(Progress.name, Progress);
    Vue.component(Select.name, Select);
    Vue.component(Option.name, Option);
    Vue.component(OptionGroup.name, OptionGroup);
    Vue.component(Suggestion.name, Suggestion);
    Vue.component(Tag.name, Tag);
    Vue.component(Tooltip.name, Tooltip);
    Vue.component(ScrollTop.name, ScrollTop);
    Vue.component(Button.name, Button);
    Vue.component(ButtonGroup.name, ButtonGroup);
    Vue.component(Icon.name, Icon);
    Vue.component(Row.name, Row);
    Vue.component(Col.name, Col);
    Vue.component(Input.name, Input);
    Vue.component(Textarea.name, Textarea);
    Vue.component(Checkbox.name, Checkbox);
    Vue.component(CheckboxGroup.name, CheckboxGroup);
    Vue.component(Radio.name, Radio);
    Vue.component(RadioGroup.name, RadioGroup);
    Vue.component(RadioButton.name, RadioButton);
    Vue.use(Message);
    Vue.use(Notice);
    Vue.use(xcuiInstall);
};

const xcui = {
    version: '1.0.0-alpha',
    DatePicker,
    InputNumber,
    Loading,
    Message,
    Modal,
    PageLoading,
    Pagination,
    Popover,
    Progress,
    Select,
    Suggestion,
    Tag,
    Tooltip,
    ScrollTop,
    install,
    xcuiInstall
};

module.exports = xcui;
