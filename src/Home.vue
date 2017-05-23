<template>
    <div id="wrapper">
        <x-row :gutter="32" id="wrapper-content">
            <x-col :xs="8" :sm="8" :md="8" :lg="6" id="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <li class="sidebar-item">
                        <router-link to="/home">介绍</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/intro/installation">安装</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/intro/quickstart">快速上手</router-link>
                    </li>
                    <!-- <li class="sidebar-divider"></li> -->
                    <li class="sidebar-part-title">组件</li>
                    <li class="sidebar-title">Basic 基础</li>
                    <li class="sidebar-item">
                        <router-link to="/component/layout">Layout 布局</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/component/icon">Icon 图标</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/component/button">Button 按钮</router-link>
                    </li class="sidebar-item">

                    <li class="sidebar-title">Form 表单</li>
                    <li class="sidebar-item">
                        <router-link to="/component/input">Input 单行输入框</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/component/textarea">Textarea 多行输入框</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/component/checkbox">Checkbox 多选框</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/component/radio">Radio 单选框</router-link>
                    </li>
                    <li class="sidebar-item">
                         <router-link to="/component/input-number">InputNumber 计数器</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/component/suggestion">Suggestion 输入建议</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/component/select">Select 选择器</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/component/switch">Switch 开关</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/component/timepicker">TimePicker 时间选择器</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/component/datepicker">DatePicker 日期选择器</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/component/datetimepicker">DateTimePicker 时间日期选择器</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/component/form">Form 表单</router-link>
                    </li>

                    <li class="sidebar-title">Notice 提示</li>
                    <li class="sidebar-item">
                         <router-link to="/component/message">Message 信息提示</router-link>
                    </li>
                    <li class="sidebar-item">
                         <router-link to="/component/notice">Notice 通知提示</router-link>
                    </li>
                    <li class="sidebar-item">
                         <router-link to="/component/modal">Modal 对话框</router-link>
                    </li>
                    <li class="sidebar-item">
                         <router-link to="/component/dialog">Dialog 快捷对话框</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/component/popover">Popover 工具提示</router-link>
                    </li>

                    <li class="sidebar-item">
                        <router-link to="/component/tooltip">Tooltip 文字提示</router-link>
                    </li>

                    <li class="sidebar-item">
                         <router-link to="/component/loading">Loading 加载中提示</router-link>
                    </li>
                    <li class="sidebar-title">Data 数据展示</li>
                    <li class="sidebar-item">
                        <router-link to="/component/table">Table 表格</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/component/progress">Progress 进度条</router-link>
                    </li>

                    <li class="sidebar-item">
                        <router-link to="/component/tag">Tag 标签</router-link>
                    </li>

                    <li class="sidebar-title">Navigation 导航</li>
                    <li class="sidebar-item">
                        <router-link to="/component/pagination">Pagination 分页</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/component/steps">Steps 步骤条</router-link>
                    </li>
                    <li class="sidebar-title">Others 其他</li>
                    <li class="sidebar-item">
                        <router-link to="/component/scrolltop">ScrollTop 返回顶部</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link to="/component/pageloading">PageLoading 页面加载</router-link>
                    </li>
                </ul>
            </x-col>
            <x-col :xs="16" :sm="16" :md="16" :lg="18" id="page-content-wrapper" class="x-demo">
                <div class="x-demo-inner">
                    <router-view></router-view>
                </div>
            </x-col>
        </x-row>
  </div>
</template>

<script>
const version = require('../package.json').version;

export default {
    data() {
        return {
            version: version
        };
    },
    mounted() {
        if (this.$route.path === '/') {
            this.$router.push({
                path: 'home'
            });
        }
    }
};

</script>

<style lang="less">
@import './assets/demo/demo.less';
</style>
