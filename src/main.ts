import Vue from 'vue';
import App from './App.vue';
import store from './store';

import './assets/css/app.styl';

Vue.config.productionTip = false;

/* tslint:disable-next-line no-unused-expression */
new Vue({
  el: '#app',
  store,
  render: (h) => h(App),
});
