import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'

import store from './store/store'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export const eventBus = new Vue();

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
