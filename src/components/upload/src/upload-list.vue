<template>
    <transition-group
        tag="ul"
        :class="['x-upload-list','x-upload-list-'+listType]"
        name="x-slide-up"
    >
        <li
            v-for="file in fileList"
            class="list-item"
            :key="file.uid">

            <a
                class="item-name"
                v-if="listType === 'text'"
                @click="handleClickItem(file)"
            >
                <x-icon name="document"></x-icon>
                <span>{{file.name}}</span>
            </a>
            <img
                class="x-upload-list-img"
                :src="file.url"
                :alt="file.name"
                v-if="listType === 'picture'"
            >
            <span class="item-mask">
                <i
                    class="x-icon x-icon-arrow-expand"
                    v-if="handlePreview && listType === 'picture'"
                    v-show="file.status === 'success'"
                    @click="handlePreview(file)"
                ></i>
                <i
                    :class="['x-icon', listType === 'text' ? 'x-icon-close-round' : 'x-icon-trash-a']"
                    v-show="file.status === 'success'"
                    @click="$emit('remove', file)"
                ></i>
            </span>
            <x-progress
                v-if="file.status === 'uploading'"
                :stroke-width="listType === 'picture' ? 6 : 2"
                :type="listType === 'picture' ? 'circle' : 'line'"
                :percentage="file.progress"
            ></x-progress>
        </li>
    </transition-group>
</template>
<script>
    import XProgress from '../../progress';

    export default {
        components: { XProgress },
        props: {
            listType: String,
            fileList: {
                type: Array,
                default: []
            },
            handlePreview: Function
        },
        methods: {
            handleClickItem(file) {
                this.handlePreview && this.handlePreview(file);
            }
        }
    };
</script>
