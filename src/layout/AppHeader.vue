<template>
  <section class="hero is-bold app-navbar">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-center">
          <router-link to="/" class="nav-item hero-brand">
            Sri Study Group
          </router-link>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AppHeader'
  }
</script>

<style lang="scss">
  .app-navbar {
    position: fixed;
    width: 100%;
    z-index: 1024;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    .container {
      margin: auto 10px;
    }
  }
</style>
