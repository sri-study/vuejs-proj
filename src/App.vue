<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <app-header></app-header>
    <sidebar></sidebar>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
  import AppHeader from '@/layout/AppHeader'
  import Sidebar from '@/layout/Sidebar'
  import AppContent from '@/layout/AppContent'
  import AppFooter from '@/layout/AppFooter'

  export default {
    name: 'app',
    components: {
      NprogressContainer,
      AppHeader,
      Sidebar,
      AppContent,
      AppFooter
    }
  }
</script>

<style>
  .nprogress-container {
    position: fixed !important;
    top: 0;
    width: 100%;
    height: 50px;
    z-index: 1025;
  }
</style>
