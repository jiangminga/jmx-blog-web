import Vue from "vue";
import iView from 'iview';
import './my-theme/index.less';

import App from "./App.vue";
import store from "./store";
import router from "./router";

Vue.use(iView);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
