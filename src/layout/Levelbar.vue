<template>
  <nav class="level app-levelbar">
    <div class="level-right">
      <nav class="breadcrumb">
        <ul>
          <li v-for="item in items">
            <router-link :to="item.path">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Levelbar',
    data () {
      return {
        items: null
      }
    },
    methods: {
      getItems () {
        let matched = this.$route.matched.filter(item => item.name)
        this.items = matched
      }
    },
    watch: {
      $route () {
        this.getItems()
      }
    },
    created () {
      this.getItems()
    }
  }
</script>

<style>
</style>