<template>
  <aside class="menu app-sidebar">
    <p class="menu-label">메뉴</p>
    <ul class="menu-list">
      <li v-for="(item, index) in menus">
        <router-link :to="item.path" :exact="true">
          {{ item.meta.label }}
        </router-link>

        <ul v-if="item.children">
          <li v-for="child in item.children" v-if="child.path !== ''">
            <router-link :to="`${item.path}/${child.path}`">
              {{ child.meta.label }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Sidebar',
    computed: {
      ...mapGetters({ menus: 'menus' })
    }
  }
</script>

<style lang="scss">
  .app-sidebar {
    position: fixed;
    top: 52px;
    left: 0;
    bottom: 0;
    padding: 20px 0 50px;
    width: 180px;
    max-height: 100vh;
    z-index: 1023;
    background-color: #FFF;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    overflow-y: auto;

    .menu-label {
      padding-left: 10px;
    }
  }
</style>