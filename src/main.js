import Vue from "vue";
import iView from 'iview';
import './my-theme/index.less';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import App from "./App.vue";
import store from "./store";
import router from "./router";

Vue.use(iView);
Vue.use(mavonEditor)
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
