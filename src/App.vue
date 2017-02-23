<template>
  <div id="xcui-site-container">
      <div id="header">
          <router-link to="/home" class="logo">
            <img :src="logoUrl">
          </router-link>
      </div>
      <router-view></router-view>
      <div id="footer">
        
      </div>
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
