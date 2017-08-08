<script>
    import UploadList from './upload-list';
    import FormDataUpload from './formData-upload';

    const noop = function () {

    };

    export default {
        name: 'XUpload',

        components: {
            UploadList,
            FormDataUpload
        },
        props: {
            action: {
                type: String,
                required: true
            },
            headers: Object,
            name: {
                type: String,
                default: 'file'
            },
            disabled: Boolean,
            credentials: Boolean,
            accept: String,
            data: Object,
            multiple: Boolean,
            showFileList: {
                type: Boolean,
                default: true
            },
            listType: {
                type: String,
                default: 'text'   // text,picture
            },
            fileList: {
                type: Array,
                default() {
                    return [];
                }
            },
            autoUpload: {
                type: Boolean,
                default: true
            },
            beforeUpload: Function,
            onRemove: {
                type: Function,
                default: noop
            },
            onChange: {
                type: Function,
                default: noop
            },
            onPreview: Function,
            onSuccess: {
                type: Function,
                default: noop
            },
            onProgress: {
                type: Function,
                default: noop
            },
            onError: {
                type: Function,
                default: noop
            }
        },

        data() {
            return {
                uploadFiles: [],
                fileIndex: 1
            };
        },

        watch: {
            fileList: {
                immediate: true,
                deep: true,
                handler(val){
                    this.uploadFiles = val.map(item => {
                        item.uid = item.uid || (Date.now() + this.fileIndex++);
                        item.status = 'success';
                        return item;
                    });
                }
            }
        },

        methods: {
            handleRemove(file, type) {
                if (type === 'rawFile') {
                    file = this.getFile(file);
                }

                this.abort(file);

                let fileList = this.uploadFiles;
                fileList.splice(fileList.indexOf(file), 1);
                this.onRemove(file, fileList);
                this.onChange(file, fileList);
            },
            handleStart(rawFile) {
                rawFile.uid = Date.now() + this.fileIndex++;
                let file = {
                    uid: rawFile.uid,
                    status: 'ready',
                    name: rawFile.name,
                    size: rawFile.size,
                    percentage: 0,
                    raw: rawFile
                };

                try {
                    file.url = URL.createObjectURL(rawFile);
                }
                catch (err) {
//                    console.error(err);
                    return;
                }

                this.uploadFiles.push(file);
                this.onChange(file, this.uploadFiles);
            },
            handleProgress(e, rawFile) {
                let file = this.getFile(rawFile);
                file.status = 'uploading';
                file.progress = e.percent || 0;
                this.onProgress(e, file, this.uploadFiles);
            },
            handleSuccess(res, rawFile) {
                let file = this.getFile(rawFile);
                file.status = 'success';
                file.response = res;

                this.onSuccess(res, file, this.uploadFiles);
                this.onChange(file, this.uploadFiles);
            },
            handleError(err, rawFile) {
                let file = this.getFile(rawFile);
                file.status = 'fail';

                let fileList = this.uploadFiles;
                fileList.splice(fileList.indexOf(file), 1);

                this.onError(err, file, fileList);
                this.onChange(file, fileList);
            },
            abort(file) {
                this.$refs.uploader.abort(file);
            },
            submit() {
                this.uploadFiles
                    .filter(file => file.status === 'ready')
                    .forEach(file => {
                        this.$refs['uploader']._IO(file.raw);
                    });
            },
            getFile(rawFile){
                let file = {};
                this.uploadFiles.forEach((item) => {
                    if (rawFile.uid === item.uid) {
                        file = item;
                    }
                });
                return file;
            },
        },

        render(h) {
            let listData = {
                props: {
                    listType: this.listType,
                    fileList: this.uploadFiles,
                    handlePreview: this.onPreview,
                },
                on: {
                    remove: this.handleRemove
                }
            };

            let uploaderData = {
                props: {
                    action: this.action,
                    multiple: this.multiple,
                    name: this.name,
                    headers: this.headers,
                    data: this.data,
                    accept: this.accept,
                    fileList: this.uploadFiles,
                    listType: this.listType,
                    autoUpload: this.autoUpload,
                    disabled: this.disabled,
                    withCredentials: this.credentials,
                    beforeUpload: this.beforeUpload,
                    onStart: this.handleStart,
                    onProgress: this.handleProgress,
                    onSuccess: this.handleSuccess,
                    onError: this.handleError,
                    onRemove: this.handleRemove
                },
                ref: 'uploader'
            };

            let uploadList = this.showFileList ? (<UploadList {...listData}></UploadList>) : null;
            let trigger = this.$slots.trigger || this.$slots.default;
            let uploader = (<FormDataUpload {...uploaderData}>{trigger}</FormDataUpload>);
            return (
                <div class='x-upload'>
                    { this.listType === 'picture' ? uploadList : ''}
                    { this.$slots.trigger ? [uploader,this.$slots.default] : uploader }
                    { this.$slots.tip}
                    { this.listType === 'text' ? uploadList : ''}
                </div>
            );
        }
    };
</script>
