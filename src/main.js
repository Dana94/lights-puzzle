import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
// import { focus } from 'vue-focus';

import store from './store/store';

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.directive('focus', {
  inserted: function (el) {
      el.focus();
  }
})

export const eventBus = new Vue();

new Vue({
  el: '#app',
  store,
  //directives: { focus: focus },
  render: h => h(App)
})
