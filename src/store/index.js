import Vue from "vue";
import Vuex from "vuex";
import layout from "./module/layout";

Vue.use(Vuex);

export default new Vuex.Store({
  //全局参数
  state: {},
  //set方法
  mutations: {},
  //
  actions: {},
  //自定义的store
  modules: {
    layout
  }
});
