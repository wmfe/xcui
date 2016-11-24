<template>
  <div id="wrapper" class="row">
    <!-- sidebar-wrapper -->
    <div id="sidebar-wrapper" class="col-md-2">
        <ul class="sidebar-nav">
            <li>
                <router-link to="/home">关于XCUI</router-link>
            </li>
            <li>
                <router-link to="/component/datepicker">DatePicker</router-link>
            </li>
            <li>
                <router-link to="/component/daterangepicker">DateRangePicker</router-link>
            </li>
            <li>
                 <router-link to="/component/inputNumber">InputNumber</router-link>
            </li>
            <li>
                 <router-link to="/component/loading">Loading</router-link>
            </li>

            <li>
                 <router-link to="/component/modal">Modal</router-link>
            </li>
            <li>
                <router-link to="/component/suggestion">Suggestion</router-link>
            </li>
            <li>
                <router-link to="/component/pagination">Pagination</router-link>
            </li>
            <li>
                <router-link to="/component/popover">Popover</router-link>
            </li>
            <li>
                <router-link to="/component/progress">Progress</router-link>
            </li>
            <li>
                <router-link to="/component/pageloading">PageLoading</router-link>
            </li>
            <li>
                <router-link to="/component/tooltip">Tooltip</router-link>
            </li>
            <li>
                <router-link to="/component/tag">Tag</router-link>
            </li>
            <li>
                 <router-link to="/component/message">Message</router-link>
            </li>
            <li>
                <router-link to="/component/select">Select</router-link>
            </li>
            <li>
                <router-link to="/component/scrolltop">ScrollTop</router-link>
            </li>
        </ul>
    </div>
    <!-- /#sidebar-wrapper -->
    <!-- Page Content -->
    <div id="page-content-wrapper" class="col-md-10">
       <router-view
      transition="xcui-fade"
      transition-mode="out-in"></router-view>
    </div>
    <!-- /#page-content-wrapper -->
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
@import './demos/style.less';
</style>
