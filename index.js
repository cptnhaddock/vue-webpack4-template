import Vue from 'vue'
import router from './router/index'
import App from './App'

import 'assets/css/app.styl'

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
