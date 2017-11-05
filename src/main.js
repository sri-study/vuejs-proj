// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import VueNProgress from 'vue-nprogress'

import App from './App'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueNProgress)

const nprogress = new VueNProgress({ parent: '.nprogress-container'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  nprogress,
  template: '<App/>',
  components: { App }
})
