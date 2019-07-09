import Vue from 'vue';
import VueVisible from 'vue-visible';
import App from './App';

Vue.use(VueVisible);

new Vue({
  el: '#app',
  render: h => h(App)
});