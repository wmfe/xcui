/**
 * @file index.js
 */
import DatePicker from './date-picker';
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
import Loading from './loading';
import Message from './message';
import Notice from './notice';
import Modal from './modal';
import Dialog from './dialog';
import PageLoading from './pageloading';
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
import Form from './form';
import FormItem from './form-item';
import Table from './table';
import TableColumn from './table-column';
import Steps, { StepsItem } from './steps';

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
    Vue.component(Form.name, Form);
    Vue.component(FormItem.name, FormItem);
    Vue.component(Table.name, Table);
    Vue.component(TableColumn.name, TableColumn);
    Vue.component(Steps.name, Steps);
    Vue.component(StepsItem.name, StepsItem);
    Vue.use(Message);
    Vue.use(Notice);
    Vue.use(Dialog);
    Vue.use(Loading);
    Vue.use(PageLoading);
};

const xcui = {
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
    Form,
    FormItem,
    Table,
    TableColumn,
    install
};

export default xcui;
