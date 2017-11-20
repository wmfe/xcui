/**
 * @file index.js
 */
import Alert from './alert';
import DatePicker from './date-picker';
import TimePicker from './time-picker';
import TimeSelect from './time-select';
import Input from './input';
import InputNumber from './input-number';
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
import Pagination from './pagination/index.vue';
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
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import Upload from './upload';
import DropDown from './dropdown';
import DropDownItem from './dropdown-item';
import DropDownMenu from './dropdown-menu';
import MultiTreeSelect from './multi-tree-select';
import SingleTreeSelect from './single-tree-select';
import Tabs from './tabs';
import TabPane from './tab-pane';
import Breadcrumb from './breadcrumb';
import BreadcrumbItem from './breadcrumb-item';

const install = (Vue) => {
    if (install.installed) {
        return;
    }
    Vue.component(Alert.name, Alert);
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
    Vue.component(Collapse.name, Collapse);
    Vue.component(CollapseItem.name, CollapseItem);
    Vue.component(DropDown.name, DropDown);
    Vue.component(DropDownItem.name, DropDownItem);
    Vue.component(DropDownMenu.name, DropDownMenu);
    Vue.component(Upload.name, Upload);
    Vue.component(DropDown.name, DropDown);
    Vue.component(DropDownItem.name, DropDownItem);
    Vue.component(MultiTreeSelect.name, MultiTreeSelect);
    Vue.component(SingleTreeSelect.name, SingleTreeSelect);
    Vue.component(DropDownMenu.name, DropDownMenu);
    Vue.component(Tabs.name, Tabs);
    Vue.component(TabPane.name, TabPane);
    Vue.component(Breadcrumb.name, Breadcrumb);
    Vue.component(BreadcrumbItem.name, BreadcrumbItem);
    Vue.use(Message);
    Vue.use(Notice);
    Vue.use(Dialog);
    Vue.use(Loading);
    Vue.use(PageLoading);
};

const xcui = {
    Alert,
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
    install,
    Collapse,
    CollapseItem,
    Upload,
    DropDown,
    DropDownMenu,
    MultiTreeSelect,
    SingleTreeSelect,
    DropDownItem,
    Tabs,
    TabPane,
    Breadcrumb,
    BreadcrumbItem
};

export default xcui;
