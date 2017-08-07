<template>
    <div
        :class="['x-upload-trigger','x-upload-'+listType]"
        @click="handleClick"
    >
        <slot></slot>
        <iframe
            ref="iframe"
            @load="handleOnLoad"
            style="display: none;"
        ></iframe>
        <form
            enctype="multipart/form-data"
            ref="form"
            method="post"
            :action="action"
        >
            <input
                class="x-upload-file-input"
                type="file"
                ref="fileInput"
                :name="name"
                @change="handleChange"
                :multiple="multiple"
                :accept="accept">
        </form>
    </div>
</template>
<script>
    export default {
        props: {
            action: {
                type: String,
                required: true
            },
            multiple: Boolean,
            name: {
                type: String,
                default: 'file'
            },
            data: Object,
            accept: String,
            fileList: Array,
            listType: String,
            autoUpload: Boolean,
            disabled: Boolean,
            beforeUpload: Function,
            onStart: Function,
            onProgress: Function,
            onSuccess: Function,
            onError: Function,
            onRemove: Function
        },
        data() {
            return {

            }
        },
        methods: {
            handleChange(e) {
                let files = e.target.files;
                let rawFiles = files ? Array.prototype.slice.call(files) : false;
                if (!rawFiles || rawFiles.length === 0) {
                    return;
                }
                this.uploadFiles(rawFiles);
                this.$refs.fileInput.value = null;
            },
            uploadFiles(rawFiles) {

            },
            handleOnLoad(res) {
                console.log(res);
            },
            handleClick() {
                if (!this.disabled) {
                    this.$refs.fileInput.click();
                }
            }
        }
    };
</script>
