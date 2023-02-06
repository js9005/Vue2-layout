import Vue from "vue";
import VueRouter from "vue-router"; //npm install vue-router@3로 설치
Vue.use(VueRouter);

import HomeView from "@/views/HomeView";

const router = new VueRouter({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
      meta: { requireLogin: true },
    },
    {
      path: "/login",
      name: "LoginView",
      component: () => import("@/views/LoginView.vue"),
      beforeEnter: (to, from, next) => {
        //이미 로그인된 상태에서 로그인 페이지로 가는 경우 대응
        console.log("로그인 beforeEnter");
        next();
      },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  //로그인이 필요한 페이지로 갈 때 토큰이 없는 경우 대응
  console.log("라우터 beforeEach");
  next();
});

export default router;
