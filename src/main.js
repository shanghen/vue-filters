import Vue from 'vue'
import App from './App.vue'

import Filters from './lib/index'

Vue.use(Filters,{
  dateFormat: 'YYYY-MM-DD HH'
});

new Vue({
  el: '#app',
  render: h => h(App)
})
