<template>
  <div id="wrapper" class="row">
    <!-- sidebar-wrapper -->
    <div id="sidebar-wrapper" class="col-md-2">
        <ul class="sidebar-nav">
            <li>
                <a v-link="{ path: '/home' }" href="javascript:;">关于XCUI</a>
            </li>
            <li>
                <a v-link="{ path: '/component/datepicker' }" href="javascript:;">DatePicker</a>
            </li>
            <li>
                <a v-link="{ path: '/component/daterangepicker' }" href="javascript:;">DateRangePicker</a>
            </li>
            <li>
                 <a v-link="{ path: '/component/inputNumber' }" href="javascript:;">InputNumber</a>
            </li>
            <li>
                 <a v-link="{ path: '/component/loading' }" href="javascript:;">Loading</a>
            </li>
            
            <li>
                 <a v-link="{ path: '/component/modal' }" href="javascript:;">Modal</a>
            </li>
            <li>
                <a v-link="{ path: '/component/suggestion' }" href="javascript:;">Suggestion</a>
            </li>
            <li>
                <a v-link="{ path: '/component/paginations' }" href="javascript:;">Paginations</a>
            </li>
            <li>
                <a v-link="{ path: '/component/popover' }" href="javascript:;">Popover</a>
            </li>
            <li>
                <a v-link="{ path: '/component/progress' }" href="javascript:;">Progress</a>
            </li>
            <li>
                <a v-link="{ path: '/component/pageloading' }" href="javascript:;">PageLoading</a>
            </li>
            <li>
                <a v-link="{ path: '/component/tooltip' }" href="javascript:;">Tooltip</a>
            </li>
            <li>
                <a v-link="{ path: '/component/tag' }" href="javascript:;">Tag</a>
            </li>
            <li>
                 <a v-link="{ path: '/component/toaster' }" href="javascript:;">Toaster</a>
            </li>
            <li>
                <a v-link="{ path: '/component/select' }" href="javascript:;">Select</a>
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
    ready() {
        this.$route.router.go({
            name: 'home'
        });
    }
};

</script>

<style lang="less">
@import './demos/style.less';
</style>
