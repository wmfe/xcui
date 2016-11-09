<template>
  <div>
      <div id="header">
          <a v-link="{ path: '/home' }" href="javascript:;" class="logo">
            <img :src="logoUrl">
              XCUI Components
          </a>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
    import logoUrl from './assets/logo_nobg_32x32@2x.png';
    export default {
        data() {
            return {
                logoUrl: logoUrl
            };
        }
    };
</script>

<style lang="less">
@import 'styles/index.less';
</style>
