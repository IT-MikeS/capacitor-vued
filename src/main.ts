import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  //eslint-disable-next-line
  //@ts-ignore
  vuetify,
  render: h => h(App)
}).$mount('#app');
