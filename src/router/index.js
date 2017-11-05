import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import menusModule from '@/store/modules/menus'

Vue.use(Router)

const generateRoutes = (menus) => {
  let routes = []
  menus.forEach((menu) => {
    if (menu.path) {
      routes.push(menu)
    }

    if (menu.children) {
      generateRoutes(menu.children)
    }
  })
  return routes
}

export default new Router({
  mode: 'hash',
  linkActiveClass: 'is-active',
  routes: [
    ...generateRoutes(menusModule.state.items)
  ]
})
