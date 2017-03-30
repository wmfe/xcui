/**
 * @file index.js
 */
import DatePicker from './date-picker/index';
import TimePicker from './time-picker';
import TimeSelect from './time-select';
import Input from './input';
import InputNumber from './inputNumber';
import Textarea from './textarea';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Radio from './radio';
import RadioButton from './radio-button';
import RadioGroup from './radio-group';
import Loading from './loading/index.js';
import Message from './message/index.js';
import Notice from './notice/index.js';
import Modal from './modal';
import Dialog from './dialog/index.js';
import PageLoading from './pageloading/index.js';
import Pagination from './pagination';
import Popover from './popover';
import Progress from './progress';
import Select from './select/index';
import Option from './option';
import OptionGroup from './option-group';
import Suggestion from './suggestion';
import Tag from './tag';
import TagCheckable from './tag-checkable';
import Tooltip from './tooltip';
import ScrollTop from './scrolltop';
import Button from './button';
import ButtonGroup from './button-group';
import Row from './row';
import Col from './col';
import Icon from './icon';
import Switch from './switch';

require('../less/index.less');

const install = (Vue) => {
    if (install.installed) {
        return;
    }
    Vue.component(DatePicker.name, DatePicker);
    Vue.component(TimePicker.name, TimePicker);
    Vue.component(TimeSelect.name, TimeSelect);
    Vue.component(InputNumber.name, InputNumber);
    Vue.component(Modal.name, Modal);
    Vue.component(Pagination.name, Pagination);
    Vue.component(Popover.name, Popover);
    Vue.component(Progress.name, Progress);
    Vue.component(Select.name, Select);
    Vue.component(Option.name, Option);
    Vue.component(OptionGroup.name, OptionGroup);
    Vue.component(Suggestion.name, Suggestion);
    Vue.component(Tag.name, Tag);
    Vue.component(TagCheckable.name, TagCheckable);
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
    Vue.component(Switch.name, Switch);
    Vue.use(Message);
    Vue.use(Notice);
    Vue.use(Dialog);
    Vue.use(Loading);
    Vue.use(PageLoading);
};

const xcui = {
    version: '2.0.0-rc.1',
    DatePicker,
    TimePicker,
    TimeSelect,
    Input,
    InputNumber,
    Textarea,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioButton,
    RadioGroup,
    Loading,
    Message,
    Notice,
    Modal,
    Dialog,
    PageLoading,
    Pagination,
    Popover,
    Progress,
    Select,
    Option,
    OptionGroup,
    Suggestion,
    Tag,
    TagCheckable,
    Tooltip,
    ScrollTop,
    Button,
    ButtonGroup,
    Row,
    Col,
    Icon,
    Switch,
    install
};

module.exports = xcui;
