import Vue from 'vue';
//eslint-disable-next-line
//@ts-ignore
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-pro/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
});
