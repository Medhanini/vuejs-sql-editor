import Vue from 'vue'
import VueCodemirror from 'vue-codemirror'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue' 
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(VueCodemirror, /* { 
  options: { theme: 'base16-dark', ... },
  events: ['scroll', ...]
} */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
