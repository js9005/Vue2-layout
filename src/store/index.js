import Vue from "vue";
import Vuex from "vuex"; //npm i vuex@3.6.2로 설치
Vue.use(Vuex);

import auth from "@/store/auth";

export default new Vuex.Store({
  modules: {
    auth,
  },
});
