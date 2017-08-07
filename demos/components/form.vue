<template lang="md">

# Form 表单

具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

表单可以进行水平、垂直和行内排列。

## 表单域

表单里面的每一项被称为表单域，包括复选框、单选框等元素。

在XCUI中，表单域即是使用`form`组件包裹`form-item`组件，如下：

```html
<x-form>
    <x-form-item>
        <!-- 这里放置xcui的表单组件，如select, button -->
    </x-form-item>
</x-form>
```

> 注：在form组件中，一律使用标准大小的控件。

## 水平登录栏

::: demo 水平登录栏，常用于顶部导航

```html

<tpl>
    <x-form ref="form1" :model="form1" :inline="true">
        <x-form-item prop="name">
            <x-input icon="person"  placeholder="用户名" v-model="form1.name"></x-input>
        </x-form-item>
        <x-form-item prop="password">
            <x-input icon="key"  placeholder="密码" v-model="form1.password"></x-input>
        </x-form-item>
        <x-form-item>
            <x-button type="primary">登录</x-button>
        </x-form-item>
    </x-form>
</tpl>

<script>
    export default {
        data() {
            return {
                form1: {
                    name: '',
                    password: ''
                }
            };
        }
    };
</script>

```

:::


## 登录框

::: demo 普通的登录框，垂直方向排列

```html

<tpl>
    <x-form ref="form2" :model="form2" :rules="rules2" label-width="80px" style="width:440px">
        <x-form-item label="用户名" prop="name">
            <x-input icon="person" placeholder="请填写用户名" v-model="form2.name"></x-input>
        </x-form-item>
        <x-form-item label="密码" prop="password">
            <x-input icon="key" placeholder="请填写密码" v-model="form2.password"></x-input>
        </x-form-item>
        <x-form-item prop="remember">
            <x-checkbox v-model="form2.remember">保持登录状态</x-checkbox>
            <x-button type="link" style="margin-left:150px">忘记密码？</x-button>
        </x-form-item>
        <x-form-item>
            <x-button type="primary" @click="submitForm('form2')">登录</x-button>
            <x-button @click="resetForm('form2')">重置</x-button>
        </x-form-item>
    </x-form>
</tpl>

<script>
    export default {
        data() {
            return {
                form2: {
                    name: '',
                    password: '',
                    remember: false
                },
                rules2: {
                    name: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        alert('submit!');
                    }
                    else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

```

:::

## 搜索栏

::: demo 用于数据表格的高级搜索。设置`inline`可变为行内表单域。可以嵌套`Row`和`Col`组件进行栅格化。布局相关请见layout组件。

```html

<tpl>
    <x-form ref="form3" :model="form3" label-width="80px">
        <x-row>
            <x-col :span="12">
                <x-form-item label="区域" prop="region">
                    <x-select v-model="form3.region" placeholder="请选择">
                        <x-option label="北京" value="beijing"></x-option>
                        <x-option label="上海" value="shanghai"></x-option>
                    </x-select>
                </x-form-item>
            </x-col>
            <x-col :span="12">
                <x-form-item label="名称" prop="name">
                    <x-input placeholder="输入名称" v-model="form3.name"></x-input>
                </x-form-item>
            </x-col>

        </x-row>
        <x-row>
            <x-col :span="12">
                <x-form-item label="类型" prop="type">
                    <x-radio-group v-model="form3.type">
                        <x-radio label="1">关键</x-radio>
                        <x-radio label="2">备选项2</x-radio>
                    </x-radio-group>
                </x-form-item>
            </x-col>
            <x-col :span="12">
                <x-form-item label="活动状态" prop="status">
                    <x-checkbox-group v-model="form3.status">
                        <x-checkbox value="1">上线中</x-checkbox>
                        <x-checkbox value="2">已下线</x-checkbox>
                        <x-checkbox value="3">签约中</x-checkbox>
                    </x-checkbox-group>
                </x-form-item>
            </x-col>

        </x-row>
        <x-row>
            <x-col :span="12">
                <x-form-item label="日期范围" prop="date">
                    <x-date-picker type="daterange" v-model="form3.date" placeholder="选择日期范围">
                    </x-date-picker>
                </x-form-item>
            </x-col>
            <x-col :span="12">
                <x-form-item label="附加查询" prop="other">
                    <x-input placeholder="请输入" v-model="form3.other">
                        <x-select v-model="form3.otherType" slot="prepend" placeholder="请选择" style="width: 100px">
                            <x-option value="1" label="按id">按id</x-option>
                            <x-option value="2" label="按名称">按名称</x-option>
                        </x-select>
                    </x-input>
                </x-form-item>
            </x-col>
        </x-row>
        <x-row>
            <x-col :span="8" :offset="16">
                <x-form-item>
                    <x-button type="primary">查询</x-button>
                    <x-button @click="resetForm('form3')">重置</x-button>
                </x-form-item>
            </x-col>
        </x-row>
    </x-form>
</tpl>

<script>
    export default {
        data() {
            return {
                form3: {
                    region: '',
                    name: '',
                    type: '',
                    status: [],
                    date: '',
                    other: ''
                    otherType: '1'
                }
            }
        },
        methods: {
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

```

:::

## 对齐方式

::: demo 通过设置`label-position`属性来决定label的位置。默认为右对齐。

```html

<tpl>
    <x-radio-group size="small" v-model="labelPosition">
       <x-radio-button label="left">左对齐</x-radio-button>
       <x-radio-button label="right">右对齐</x-radio-button>
       <x-radio-button label="top">顶部对齐</x-radio-button>
    </x-radio-group>
    <div style="margin: 20px"></div>
     <x-form ref="form4" :label-position="labelPosition"  label-width="80px" :model="form4"  style="width:440px">
        <x-form-item prop="name" label="用户名">
            <x-input icon="person"  placeholder="用户名" v-model="form4.name"></x-input>
        </x-form-item>
        <x-form-item prop="password" label="密码">
            <x-input icon="key"  placeholder="密码" v-model="form4.password"></x-input>
        </x-form-item>
    </x-form>
</tpl>

<script>
    export default {
        data() {
            return {
                labelPosition: 'left'
                form4: {
                    name: '',
                    password: ''
                }
            }
        }
    }
</script>

```

:::


## 表单校验


::: demo 用于在用户填写的信息提交服务器前，做必要的校验。在`x-form`上配置`rules`校验逻辑，在`x-form-item`上的`prop`声明该表单域对应的字段，在提交时使用`validate`方法来获取验证结果进行处理。


```html

<tpl>
    <x-form ref="form5" :model="form5" :rules="rules5" label-width="80px" style="width:440px">
        <x-form-item label="商户名称" prop="name" :required="aaa">
            <x-input v-model="form5.name"></x-input>
        </x-form-item>
        <x-form-item label="所在区域" prop="region">
            <x-select v-model="form5.region">
                <x-option label="区域一" value="shanghai"></x-option>
                <x-option label="区域二" value="beijing"></x-option>
            </x-select>
        </x-form-item>

        <x-form-item label="上线时间" required>
            <x-col :span="11">
                <x-form-item prop="date1">
                    <x-date-picker type="date" placeholder="选择日期" v-model="form5.date1" style="width: 100%;"></x-date-picker>
                </x-form-item>
            </x-col>
            <x-col :span="2" style="text-align:center">
                --
            </x-col>
            <x-col :span="11">
                <x-form-item prop="date2">
                    <x-time-picker placeholder="选择时间" v-model="form5.date2" style="width: 100%;"></x-time-picker>
                </x-form-item>
            </x-col>
        </x-form-item>

        <x-form-item label="商户类型" prop="type">
            <x-checkbox-group v-model="form5.type">
                <x-checkbox value="单体">单体</x-checkbox>
                <x-checkbox value="供应商">供应商</x-checkbox>
            </x-checkbox-group>
        </x-form-item>

        <x-form-item label="特殊资源" prop="resource">
            <x-radio-group v-model="form5.resource">
                <x-radio label="1">自有物流</x-radio>
                <x-radio label="2">自营</x-radio>
            </x-radio-group>
        </x-form-item>

        <x-form-item label="商户描述" prop="desc">
            <x-textarea placeholder="请输入内容" v-model="form5.desc"  :autosize="{minRows: 3}"></x-textarea>
        </x-form-item>

        <x-form-item>
            <x-button type="primary" @click="submitForm('form5')">提交</x-button>
            <x-button @click="resetForm('form5')">重置</x-button>
        </x-form-item>
    </x-form>
    <button @click="aaa = !aaa">switch</button>
</tpl>

<script>
    export default {
        data() {
            return {
                form5: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules5: {
                    name: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在3到5个字符', trigger: 'blur'}
                    ],
                    region: [
                        {required: true, message: '请选择活动区域', trigger: 'change'}
                    ],
                    date1: [
                        {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
                    ],
                    date2: [
                        {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动描述', trigger: 'blur' },
                        {min: 3, max: 10, message: '长度在3到10个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        alert('submit!');
                    }
                    else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
```

:::

> 表单校验的规则（即`rules`属性中各表单域的校验规则）见[async-validator](https://github.com/yiminghe/async-validator)。


## 自定义校验规则

::: demo 通过自定义`rules`属性的`validator`函数可以进行自定义规则校验。

```html

<tpl>
    <x-form ref="form6" :model="form6" :rules="rules6" label-width="80px" style="width:440px">
        <x-form-item label="年龄" prop="age">
            <x-input v-model.number="form6.age" placeholder="请输入年龄"></x-input>
        </x-form-item>
    </x-form>
</tpl>

<script>
    export default {
        data() {
            const validatePass = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(_ => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    }
                    else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        }
                        else {
                            callback();
                        }
                    }
                });
            };
            return {
                form6: {
                    age: ''
                },
                rules6: {
                    age: [
                        {validator: validatePass, trigger: 'blur'}
                    ]
                },
            }
        }
    }
</script>

```

:::

## 动态增减表单项

::: demo 可以动态增减表单项。

```html

<tpl>
    <x-form ref="form7" :model="form7" label-width="80px" style="width:440px">
        <x-form-item
            v-for="(name, index) in form7.names"
            :label="'乘客' + (index + 1)"
            :key="name.key"
            :prop="'names.' + index + '.value'">
            <x-input v-model="name.value" style="width: 250px" placeholder="请输入姓名"></x-input>
            <x-button v-if="index > 0" size="small" @click="removeName(name)">删除</x-button>
        </x-form-item>
        <x-form-item>
            <x-button type="primary" @click="addName">新增</x-button>
        </x-form-item>
    </x-form>
</tpl>

<script>
    export default {
        data() {
            return {
                form7: {
                    names: [{
                        value: '', key: Date.now()
                    }]
                }
            }
        },
        methods: {
            addName() {
                this.form7.names.push({
                    value: '',
                    key: Date.now()
                });
            },
            removeName(item) {
                let index = this.form7.names.indexOf(item);
                if (index !== -1) {
                    this.form7.names.splice(index, 1);
                }
            }
        }
    }
</script>

```

:::

## Form Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|---|---|---|---|---|---|---|
|model|Object|无|表单数据对象|是||
|rules|Object|无|表单校验规则|否||
|inline|Boolean|false|是否是行内表单|否|true,false|
|label-position|String|right|表单域标签位置|否|right/left/top|
|label-width|String|无|表单域标签宽度|否|如`80px`|
|show-message|Boolean|true|是否显示校验错误信息|否|true/false|

## Form Methods

| 名字 | 说明 | 参数 |
|---|---|---|
|validate|    对整个表单进行校验的方法  |  Function(callback: Function(boolean))|
|validateField |  对部分表单字段进行校验的方法 | Function(prop: string, callback: Function(errorMessage: string))|
|resetFields| 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果  | - |

## Form-Item Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|---|---|---|---|---|---|---|
|prop|String|表单域对应的model字段|是|传入Form的model属性中的字段|
|label|String|无|标签文本|否||
|label-width|String|表单域标签宽度|否|如`50px`|
|required|Boolean|是否必填，如不设置，根据校验规则生成|否|true,false|
|rules|Object|表单验证规则|否||
|error|String|表单域验证错误信息，设置该值会使表单验证状态变为error,并显示该错误信息|否||
|show-message|Boolean|true|是否显示校验错误信息|否|true/false|

## Form-Item Slot

| 名字 | 描述 |
|---|---|
| - | Form-Item内容|
|label|标签文本内容|


</template>

<script>
    export default {
        data() {
            const validatePass = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(_ => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    }
                    else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        }
                        else {
                            callback();
                        }
                    }
                });
            };
            return {
                form1: {
                    name: '',
                    password: ''
                },
                form2: {
                    name: '',
                    password: '',
                    remember: false
                },
                form3: {
                    region: '',
                    name: '',
                    type: '',
                    status: [],
                    date: '',
                    other: '',
                    otherType: '1'
                },
                form4: {
                    name: '',
                    password: ''
                },
                labelPosition: 'left',
                form5: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules5: {
                    name: [
                        { message: '请输入商户名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在3到5个字符', trigger: 'blur'}
                    ],
                    region: [
                        {required: true, message: '请选择商户区域', trigger: 'change'}
                    ],
                    date1: [
                        {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
                    ],
                    date2: [
                        {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个商户性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择商户资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写商户描述', trigger: 'blur' },
                        {min: 3, max: 10, message: '长度在3到10个字符', trigger: 'blur'}
                    ]
                },
                form6: {
                    age: ''
                },
                form7: {
                    names: [{
                        value: '', key: Date.now()
                    }]
                },
                rules6: {
                    age: [
                        {validator: validatePass, trigger: 'blur'}
                    ]
                },
                rules2: {
                    name: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                },
                aaa: true
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        alert('submit!');
                    }
                    else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            addName() {
                this.form7.names.push({
                    value: '',
                    key: Date.now()
                });
            },
            removeName(item) {
                let index = this.form7.names.indexOf(item);
                if (index !== -1) {
                    this.form7.names.splice(index, 1);
                }
            }
        }
    };
</script>
