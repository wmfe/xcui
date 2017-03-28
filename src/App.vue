<template>
  <div id="xcui-site-container">
      <header>
          <router-link to="/home" class="logo">
            <img :src="logoUrl">
            <span class="logo-text">XCUI</span>
          </router-link>
      </header>
      <router-view></router-view>
      <footer>
          <div class="footer-main">
              <span>@2016~2017, wmfe</span>
          </div>
      </footer>
  </div>
</template>

<script>
    import logoUrl from './assets/xcui-logo.svg';
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
