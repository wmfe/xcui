<template lang="md">
# 定制主题

xcui支持一定程度上的样式定制，可以满足不同的平台间主题颜色的改动。这些改动对于开发者而言，只需要做相关配置即可。

## 样式变量

xcui样式使用了[Less](http://lesscss.org/)作为开发语言，而且抽象了一系列可定义的全局变量。可以根据具体需求做相关的调整。

点击这里可以查看[默认样式变量](https://github.com/wmfe/xcui/blob/2.0/src/less/theme/default.less)的集合。

## 定制样式变量 （全局引入）

如果您使用了全局引入xcui, 那么需要引入xcui的`less`主文件：

```js
import Vue from 'vue'
import xcui from 'xcui';
import "xcui/lib/less/index.less";
Vue.use(xcui);
```

### 方法一：使用`less-loader`的`modifyVars`

如果您使用了`webpack`来构建项目，那么只需要做如下配置

```js
{
  test: /\.less$/,
  use: [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader'
    },
    {
      loader: 'less-loader',
      options: {
        modifyVars: {
          'brand-primary': '#5166B9'
        }
      }
    }
  ]
}
```

如果您使用`vue-cli`工具来生成项目，那么可以直接编辑`build/util.js`, 在less配置后加入相关变量:

```
exports.cssLoaders = function (options) {
// ...
  return {
    less: generateLoaders('less', {modifyVars: {'brand-primary': '#5166B9'}}),
  }
```


### 方法二：使用自定义的less文件覆盖变量

新建一个less文件，假设为 `custom.less`，文件内容如下：

```
@import "xcui/lib/less/index.less";
@brand-primary: #5166B9; // 修改主色
```

接着再引入这个less文件即可：

```js
import Vue from 'vue'
import xcui from 'xcui';
import "custom.less";
Vue.use(xcui);
```


## 按需引入

第一步：需要安装`babel-plugin-component`, 如已经安装，请忽略：

```bash
npm i babel-plugin-component -D
```


第二步：项目根目录下的`.babelrc`文件中的`plugins`配置项， 加入如下配置：（`presets`配置项不影响，下面只是示例配置）;

```
{
  "presets": [["env", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "xcui",
        "styleLibrary": {
          "name": "less",
          "base": false,
          "path": "components/[module].less"
        },
        "ext": ".less"
      }
    ]
  ]
}
```

第三步：接下来需要配置`less-loader`的`modifyVars`， 如上节所示, 即可。

完成之后，如果您项目中做了如下的按需引用：

```js
import { Button } from 'xcui'
```

那么会被翻译为：

```js
var button = require('xcui/lib/button.js')
require('xcui/lib/less/components/common.less')
require('xcui/lib/less/components/button.less')
```

完整组件列表和引入方式

```js
import Vue from 'vue'
import {
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
  Collapse,
  CollapseItem,
  Upload,
  DropDown,
  DropDownItem,
  DropDownMenu,
  MultiTreeSelect,
  SingleTreeSelect,
  Tabs,
  TabPane,
  Breadcrumb,
  BreadcrumbItem,
} from 'xcui'

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
```


</template>

<script>
export default {

}
</script>

