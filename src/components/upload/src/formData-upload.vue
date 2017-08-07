<template>
    <div
        :class="['x-upload-trigger','x-upload-'+listType]"
        @click="handleClick"
    >
        <slot></slot>
        <input
            class="x-upload-file-input"
            type="file"
            ref="fileInput"
            :name="name"
            @change="handleChange"
            :multiple="multiple"
            :accept="accept">
    </div>
</template>
<script>
    import httpReq from './http.js';
    export default {
        data() {
            return {
                queue: {}
            };
        },
        props: {
            action: {
                type: String,
                required: true
            },
            headers:  Object,
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
            withCredentials: Boolean,
            beforeUpload: Function,
            onStart: Function,
            onProgress: Function,
            onSuccess: Function,
            onError: Function,
            onRemove: Function
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
            uploadFiles(files) {
                files.forEach((file) => {
                    this.onStart(file);
                    this.onUpload(file);
                });
            },
            onUpload(rawFile) {
                if (!this.beforeUpload) {
                    return this.autoUpload && this._IO(rawFile);
                }

                let beforeRs = this.beforeUpload(rawFile);

                if (beforeRs && beforeRs.then) {
                    beforeRs.then((reqFile) => {
                        let reqType = Object.prototype.toString.call(reqFile) === '[object File]';
                        let file = reqType ? reqFile : rawFile;
                        this.autoUpload && this._IO(file);
                    }, () => {
                        this.onRemove(rawFile);
                    });
                } else if (beforeRs !== false) {
                    this.autoUpload && this._IO(rawFile);
                } else {
                    this.onRemove(rawFile);
                }
            },
            _IO(rawFile) {
                let opts = {
                    fileName: this.name,
                    file: rawFile,
                    action: this.action,
                    data: this.data,
                    withCredentials: this.withCredentials,
                    headers: this.headers,
                    onProgress: e => {
                        this.onProgress(e, rawFile);
                    },
                    onSuccess: res => {
                        this.onSuccess(res, rawFile);
                    },
                    onError: err => {
                        this.onError(err, rawFile);
                    },
                    onAlways: () => {
                        delete this.queue[rawFile.uid];
                    }
                };

                let xhr = httpReq(opts);
                this.queue[rawFile.uid] = xhr;
            },
            abort(file) {
                let fileXhr = this.queue[file.uid];
                if (fileXhr) {
                    fileXhr.abort();
                    delete this.queue[file.uid];
                }
            },
            handleClick() {
                if (!this.disabled) {
                    this.$refs.fileInput.click();
                }
            }
        }
    };
</script>
