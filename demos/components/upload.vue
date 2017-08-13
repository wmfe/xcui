<template lang="md">
# Upload 上传

## 概述

上传文件及预览展示组件，通过XHR2.0的FormData对象实现上传，浏览器兼容性：IE10+，Chrome7+，Firefox4.0+。

## 上传列表

::: demo  基础上传列表，通过具名slot传入提示文案。

```html

<tpl>
    <x-upload
        class="upload-demo-list"
        action="https://jsonplaceholder.typicode.com/posts/"
        :file-list="list1">
        <x-button type="primary">点击上传</x-button>
        <p slot="tip" class="x-upload-tip">请上传文件。</p>
    </x-upload>
</tpl>

<script>
    export default {
        data() {
            return {
                list1: [{
                    name: 'xcui-logo.png',
                    url: 'https://img.waimai.baidu.com/pb/b6d6751cd442333e728785b6e7a2375938'
                }, {
                    name: '497236c9d6616b4182ae6c4ef06c8710f0.png',
                    url: 'https://img.waimai.baidu.com/pb/497236c9d6616b4182ae6c4ef06c8710f0'
                }]
            };
        }
    };
</script>

<style>
    .upload-demo-list {
        width: 360px;
    }
</style>

```
:::

## 图片列表

::: demo 通过listType设置list样式，通过on-preview（点击已上传的文件链接时的钩子），可以自定义预览交互。

```html

<tpl>
    <x-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :file-list="list2"
        :list-type="'picture'"
        :on-preview="handlePreview"
    >
        <i class="x-icon x-icon-plus-round"></i>
    </x-upload>
    <div
        class="x-modal-mask"
        v-show="preview"
        @click="handleClose"
    >
        <div class="x-upload-img-container" >
            <img :src="previewUrl">
        </div>
    </div>
</tpl>

<script>
    export default {
        data() {
            return {
                list2: [{
                    name: 'xcui-logo.png',
                    url: 'https://img.waimai.baidu.com/pb/b6d6751cd442333e728785b6e7a2375938'
                }],
                preview: false,
                previewUrl: ''
            };
        },
        methods: {
            handlePreview(file) {
                this.previewUrl = file.url;
                this.preview = true;
            },
            handleClose(){
                this.preview = false;
            }
        }
    };
</script>

<style>
    .upload-demo-list {
        width: 360px;
    }

    .x-icon-plus-round {
        font-size: 32px;
        color: #777;
    }

    .x-upload-img-container {
        text-align: center;
        margin-top: 100px;
        position: relative;
    }

    .x-modal-mask {
        cursor: pointer;
    }
</style>

```
:::

## 头像框上传

::: demo 可以通过设置accept过滤可选文件类型，show-file-list设置为false，可完全自定义文件文列表交互。

```html

<tpl>
    <x-upload
        class="upload-demo-list"
        action="https://jsonplaceholder.typicode.com/posts/"
        :list-type="'picture'"
        :accept="accept"
        :show-file-list="false"
        :file-list="list2"
        :on-success="handleSuccess"
    >
        <img :src="url">
        <i v-show="!url" class="x-icon x-icon-image upload-empty-icon"></i>
        <span v-show="!!url" class="upload-demo-mask">
            <i class="x-icon x-icon-image"></i>
        </span>
    </x-upload>
</tpl>

<script>
    export default {
        data() {
            return {
                url: '',
                accept: 'image/gif,image/jpeg,image/jpg,image/png'
            };
        },
        methods: {
            handleSuccess(response,file,fileList) {
                this.url = file.url;
            }
        }
    };
</script>

<style>
    .upload-demo-list {
        width: 360px;
    }

    .x-icon-image {
        font-size: 32px;
        color: #fff;
    }

    .upload-empty-icon{
        color: #777;
    }

    .upload-demo-mask {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        transition: opacity .3s;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .x-upload-trigger:hover .upload-demo-mask{
        opacity: 1;
    }

</style>

```
:::

## 手动上传

::: demo 选择多个文件，手动触发上传，通过before-upload验证文件是否合乎要求,通过具名slot指定触发上传动作的按钮。

```html

<tpl>
    <x-upload
        class="upload-demo-list"
        action="https://jsonplaceholder.typicode.com/posts/"
        ref="uploader"
        :auto-upload="false"
        :file-list="list3"
        :before-upload="beforeUpload"
    >
        <x-button slot="trigger" type="default">选取文件</x-button>
        <x-button type="primary" @click="handleSubmit">点击上传</x-button>
        <p slot="tip" class="x-upload-tip">请上传图片，支持jpg/png格式，单个文件不超过2M。</p>
    </x-upload>
</tpl>

<script>
    export default {
        data() {
            return {
                list3: []
            };
        },
        methods: {
            handleSubmit() {
                this.$refs.uploader.submit();
            },
            beforeUpload(file) {
                const isType = ['image/jpeg','image/png'].indexOf(file.type) !== -1;
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isType) {
                    this.$Dialog.alert('上传图片只能是 JPG 或 PNG 格式!');
                }
                if (!isLt2M) {
                    this.$Dialog.alert('上传图片大小不能超过 2MB!');
                }
                return isType && isLt2M;
            },
        }
    };
</script>

```
:::

## Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值/接收参数|
|-----|-----|-----|-----|----|----|----|
|action|String|无|上传地址|必选|无|
|headers|Object|无|设置请求头部信息|可选|无|
|credentials|Boolean|false|支持发送 cookie 凭证信息|可选|无|
|name|String|file|上传文件字段名|可选|无|
|disabled|Boolean|false|是否禁用|可选|无|
|accept|String|无|接受上传的文件类型，用于在选取文件时过滤文件类型，建议写具体类型例如'image/gif,image/jpeg,image/jpg',以防'image/*'通配符调起文件框慢的问题|可选|无|
|data|Object|无|随文件一起上传的参数|可选|无|
|multiple|Boolean|false|是否支持多选文件|可选|无|
|show-file-list|Boolean|true|是否显示上传文件列表|可选|无|
|list-type|String|text|显示上传文件列表的类型|可选|text/ picture|
|file-list|Array|[]|上传的文件列表|可选|无|
|auto-upload|Boolean|true|选择文件后是否自动开始上传|可选|无|
|before-upload|Function|无|上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。|可选|file|
|on-preview|Function|无|点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据|可选|file|
|on-change|Function|无|文件列表发生变化时的钩子, 添加文件、上传成功和上传失败时都会被调用|可选|file, fileList|
|on-progress|Function|无|文件上传过程中的钩子, 事件对象会返回上传进度|可选|event, file, fileList|
|on-success|Function|无|文件上传成功时的钩子, 返回服务端数据|可选|response, file, fileList|
|on-error|Function|无|文件上传失败时的钩子, 返回错误|可选|err, file, fileList|
|on-remove|Function|无|文件列表移除文件时的钩子|可选|file, fileList|

##  Methods
| 名字 |描述 | 参数 |调用方式|
|-----|-----|----|----|
|abort|取消文件上传请求|（ file: fileList 中的 file 对象 ）|通过ref调用|
|submit|开始上传文件（用于手动上传）|无|通过ref调用|

##  Slot
| 名字 |描述|
|-----|-----|
|tip|上传文案描述|
|trigger|上传动作触发按钮指定，若不设置则默认slot传入部分均可触发上传|

</template>
<script>
    require('#/dialog.less');
    require('#/upload.less');
    export default {
        data() {
            return {
                list1: [{
                    name: 'xcui-logo.png',
                    url: 'https://img.waimai.baidu.com/pb/b6d6751cd442333e728785b6e7a2375938'
                }, {
                    name: '497236c9d6616b4182ae6c4ef06c8710f0.png',
                    url: 'https://img.waimai.baidu.com/pb/497236c9d6616b4182ae6c4ef06c8710f0'
                }],
                list2: [{
                    name: 'xcui-logo.png',
                    url: 'https://img.waimai.baidu.com/pb/b6d6751cd442333e728785b6e7a2375938'
                }],
                list3: [],
                url: '',
                accept: 'image/gif,image/jpeg,image/jpg,image/png',
                preview: false,
                previewUrl: ''
            };
        },
        methods: {
            beforeUpload(file) {
                const isType = ['image/jpeg','image/png'].indexOf(file.type) !== -1;
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isType) {
                    this.$Dialog.alert('上传头像图片只能是 JPG 或 PNG 格式!');
                }
                if (!isLt2M) {
                    this.$Dialog.alert('上传头像图片大小不能超过 2MB!');
                }
                return isType && isLt2M;
            },
            handlePreview(file) {
                this.previewUrl = file.url;
                this.preview = true;
            },
            handleClose(){
                this.preview = false;
            },
            handleSubmit() {
                this.$refs.uploader.submit();
            },
            handleSuccess(response,file,fileList) {
                this.url = file.url;
            }
        }
    };
</script>
<style lang="less">
    .demo-upload {
        .upload-demo-list {
            width: 360px;
        }
        .x-icon-plus-round, .x-icon-image {
            font-size: 32px;
        }

        .x-icon-image {
            color: #fff;
        }

        .x-icon-plus-round, .upload-empty-icon {
            color: #777;
        }

        .x-upload-img-container {
            text-align: center;
            margin-top: 100px;
            position: relative;
        }

        .x-modal-mask {
            cursor: pointer;
        }

        .upload-demo-mask {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            transition: opacity .3s;
            opacity: 0;
            background-color: rgba(0, 0, 0, 0.5);
        }
        .x-upload-trigger:hover .upload-demo-mask{
             opacity: 1;
         }
    }
</style>
