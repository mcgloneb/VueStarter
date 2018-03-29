import Vue from 'vue';
import Vuex from 'vuex'
import VueCookie from 'vue-cookie'
import router from './router'

import App from '@/App'

import '../assets/scss/app.scss';

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
