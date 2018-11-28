import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './assets/js/router.js'
Vue.use(vueRouter)
import Vuex from 'vuex'
Vue.use(Vuex)
import './assets/css/cssreset.css'
import './../node_modules/mint-ui/lib/style.css'; 
import Mint from 'mint-ui';
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.use(Mint);

import axios from 'axios'
Vue.prototype.$http = axios


new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
