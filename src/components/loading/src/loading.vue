<template>
    <transition name="x-loading-fade" @after-leave="handleAfterLeave">
        <div v-show="visible"
            class="x-loading-mask"
            :class="[maskClass, { 'is-fullscreen': fullscreen }]">
            <div class="x-loading-spinner">
                <svg class="x-loading-circle-svg" v-if="loadingType === 'circle'" :width="imgSize" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <g transform="translate(1 1)" stroke-width="2">
                            <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
                            <path d="M36 18c0-9.94-8.06-18-18-18">
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 18 18"
                                    to="360 18 18"
                                    dur="1s"
                                    repeatCount="indefinite"/>
                            </path>
                        </g>
                    </g>
                </svg>

                <svg class="x-loading-grid-svg" v-if="loadingType === 'grid'" :width="imgSize" height="105" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.5" cy="12.5" r="12.5">
                        <animate attributeName="fill-opacity"
                         begin="0s" dur="1s"
                         values="1;.2;1" calcMode="linear"
                         repeatCount="indefinite" />
                    </circle>
                    <circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5">
                        <animate attributeName="fill-opacity"
                         begin="100ms" dur="1s"
                         values="1;.2;1" calcMode="linear"
                         repeatCount="indefinite" />
                    </circle>
                    <circle cx="52.5" cy="12.5" r="12.5">
                        <animate attributeName="fill-opacity"
                         begin="300ms" dur="1s"
                         values="1;.2;1" calcMode="linear"
                         repeatCount="indefinite" />
                    </circle>
                    <circle cx="52.5" cy="52.5" r="12.5">
                        <animate attributeName="fill-opacity"
                         begin="600ms" dur="1s"
                         values="1;.2;1" calcMode="linear"
                         repeatCount="indefinite" />
                    </circle>
                    <circle cx="92.5" cy="12.5" r="12.5">
                        <animate attributeName="fill-opacity"
                         begin="800ms" dur="1s"
                         values="1;.2;1" calcMode="linear"
                         repeatCount="indefinite" />
                    </circle>
                    <circle cx="92.5" cy="52.5" r="12.5">
                        <animate attributeName="fill-opacity"
                         begin="400ms" dur="1s"
                         values="1;.2;1" calcMode="linear"
                         repeatCount="indefinite" />
                    </circle>
                    <circle cx="12.5" cy="92.5" r="12.5">
                        <animate attributeName="fill-opacity"
                         begin="700ms" dur="1s"
                         values="1;.2;1" calcMode="linear"
                         repeatCount="indefinite" />
                    </circle>
                    <circle cx="52.5" cy="92.5" r="12.5">
                        <animate attributeName="fill-opacity"
                         begin="500ms" dur="1s"
                         values="1;.2;1" calcMode="linear"
                         repeatCount="indefinite" />
                    </circle>
                    <circle cx="92.5" cy="92.5" r="12.5">
                        <animate attributeName="fill-opacity"
                         begin="200ms" dur="1s"
                         values="1;.2;1" calcMode="linear"
                         repeatCount="indefinite" />
                    </circle>
                </svg>

                <svg class="x-loading-dot-svg" v-if="loadingType === 'dot'" :width="imgSize"  height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15">
                        <animate attributeName="r" from="15" to="15"
                                 begin="0s" dur="0.8s"
                                 values="15;9;15" calcMode="linear"
                                 repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" from="1" to="1"
                                 begin="0s" dur="0.8s"
                                 values="1;.5;1" calcMode="linear"
                                 repeatCount="indefinite" />
                    </circle>
                    <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                        <animate attributeName="r" from="9" to="9"
                                 begin="0s" dur="0.8s"
                                 values="9;15;9" calcMode="linear"
                                 repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" from="0.5" to="0.5"
                                 begin="0s" dur="0.8s"
                                 values=".5;1;.5" calcMode="linear"
                                 repeatCount="indefinite" />
                    </circle>
                    <circle cx="105" cy="15" r="15">
                        <animate attributeName="r" from="15" to="15"
                                 begin="0s" dur="0.8s"
                                 values="15;9;15" calcMode="linear"
                                 repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" from="1" to="1"
                                 begin="0s" dur="0.8s"
                                 values="1;.5;1" calcMode="linear"
                                 repeatCount="indefinite" />
                    </circle>
                </svg>

                <p v-if="text" class="x-loading-text">{{text}}</p>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                text: null,
                fullscreen: true,
                visible: false,
                maskClass: '',
                loadingType: 'circle',
                size: null
            };
        },
        computed: {
            imgSize() {
                if (this.size) {
                    return this.size;
                }
                if (this.loadingType === 'circle') {
                    return 40;
                }
                if (this.loadingType === 'grid') {
                    return 40;
                }
                if (this.loadingType === 'dot') {
                    return 50;
                }
                return 40;
            }
        },
        methods: {
            handleAfterLeave() {
                this.$emit('after-leave');
            }
        }
    };
</script>
