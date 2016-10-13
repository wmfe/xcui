<template>
  <div id="wrapper">
    <!-- sidebar-wrapper -->
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li class="sidebar-brand">
                <a href="#">XCUI Components</a>
            </li>
            <li>
                <a v-link="{ path: '/component/paginations' }" href="javascript:;">Paginations</a>
            </li>
            <li>
                <a v-link="{ path: '/component/autocomplete' }" href="javascript:;">Autocomplete</a>
            </li>
            <li>
                <a v-link="{ path: '/component/popover' }" href="javascript:;">Popover</a>
            </li>
            <li>
                <a v-link="{ path: '/component/tag' }" href="javascript:;">Tag</a>
            </li>
            <li>
                <a v-link="{ path: '/component/datepicker' }" href="javascript:;">DatePicker</a>
            </li>
            <li>
                <a v-link="{ path: '/component/select' }" href="javascript:;">Select</a>
            </li>
            <li>
                 <a v-link="{ path: '/component/loading' }" href="javascript:;">Loading</a>
            </li>
            <li>
                 <a v-link="{ path: '/component/toaster' }" href="javascript:;">Toaster</a>
            </li>
            <li>
                 <a v-link="{ path: '/component/inputNumber' }" href="javascript:;">InputNumber</a>
            </li>
            <li>
                <a v-link="{ path: '/component/progress' }" href="javascript:;">Progress</a>
            </li>
            <li>
                <a v-link="{ path: '/component/pageloading' }" href="javascript:;">PageLoading</a>
            </li>
        </ul>
    </div>
    <!-- /#sidebar-wrapper -->
    <!-- Page Content -->
    <div id="page-content-wrapper">
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
    }
};

</script>

<style lang="less">
@import './demos/style.less';
</style>
