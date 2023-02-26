import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify"; // vue add vuetify로 설치
import router from "@/router/index";
import store from "@/store/index";

Vue.config.productionTip = false;

store
  .dispatch("auth/attempt", localStorage.getItem("vue2_layout_token"))
  .then(() => {
    //토근과 유저정보가 저장되고 난 후 라우터를 실행해야 로그인의 beforeEnter가 작동함
    new Vue({
      vuetify,
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  });
