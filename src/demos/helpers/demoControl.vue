<template>
    <div class="xcui-demo-container" :class="componentDemoClass">
        <div class="xcui-example-container">
                <slot name="title"></slot>
            <div class="xcui-source-wrap">
                <slot name="source"></slot>
            </div>
            <div class="xcui-info-wrap">
                <div class="xcui-info-header">
                    <slot name="info-title"></slot>
                </div>
                <div class="xcui-info-content">
                    <slot name="info"></slot>
                </div>
            </div>
            <div class="expand-wrap" ref="expandWrap">
                <div class="xcui-code-wrap">
                    <slot name="highlight"></slot>
                </div>
            </div>
        </div>
        <div class="expand-control" @click="expanded = !expanded">
            <i class="x-icon" :class="expanded ? 'x-icon-chevron-up' : 'x-icon-chevron-down'"></i>
            <span v-show="!expanded">{{showCodeText}}</span>
            <span v-show="expanded">{{hideCodeText}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'xcui-demo',
        data() {
            return {
                hovering: false,
                expanded: false,
                showCodeText: '展开代码',
                hideCodeText: '收起代码'
            };
        },
        computed: {
            expandedHeight() {
                return this.$el.getElementsByClassName('xcui-code-wrap')[0].clientHeight + 30;
            },
            componentDemoClass() {
                let componentName = this.$route.path.match(/\/component\/([a-zA-Z]+)/)[1];
                return `demo-${componentName}`;
            }
        },
        watch: {
            expanded(val) {
                this.$refs.expandWrap.style.height = val ? this.expandedHeight + 'px' : 0;
            }
        }
    };
</script>
<style lang="less">
.xcui-demo-container {
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 15px;
    .xcui-example-container {
        padding: 15px;
        h2 {
            margin: 0 0 15px 0;
        }
        .xcui-info-wrap {
            .xcui-info-header {
                &:before {
                    content: '';
                    display: block;
                    width: 100%;
                    height: 1px;
                    background: #eee;
                    position: relative;
                    top: 10px;
                    left: 0;
                }
                padding: 15px 0;
                span {
                    display: inline-block;
                    background: #fff;
                    padding: 0 18px 0 18px;
                    position: relative;
                    margin-left: 30px;
                    font-size: 14px;
                    font-weight: 500;
                }
            }
            .xcui-info-content {
                padding: 15px 0 25px 0;
                p {
                    margin: 0;
                }
            }
        }
        .expand-wrap {
            overflow: hidden;
            height: 0;
            transition: height 0.5s;
            .xcui-code-wrap {
                max-width: 100%;
                margin-top:5px;
                box-sizing: content-box;
                pre {
                    padding:0;
                    padding-left: 20px;
                    display: block;
                    font-size: 13px;
                    line-height: 1.42857143;
                    color: #333;
                    word-break: break-all;
                    word-wrap: break-word;
                    background-color: rgba(128, 128, 128, 0.05);
                    border: 1px solid rgba(128, 128, 128, 0.075);
                    border-radius: 4px;
                    white-space: pre-wrap;
                }
            }
        }

    }
    .expand-control {
        i {
            font-size: 14px;
            margin-right: 5px;
        }
        text-align: center;
        padding: 10px 0;
        border-top: 1px solid #eee;
        cursor: pointer;
    }
}
</style>