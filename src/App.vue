<template>
  <div>
      <div id="header">
          <router-link to="home" class="logo">
            <img :src="logoUrl">
              XCUI Components
          </router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
    import logoUrl from './assets/logo_nobg_32x32@2x.png';
    import router from './router';
    export default {
        router: router,
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
