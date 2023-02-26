import Vue from "vue";
import VueRouter from "vue-router"; //npm install vue-router@3로 설치
Vue.use(VueRouter);

import store from "@/store";
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
      //router.beforeEach가 먼저 실행되고 로그인 beforeEnter가 실행됨
      beforeEnter: (to, from, next) => {
        if (store.getters["auth/authUser"]) {
          //이미 로그인된 상태에서 로그인 페이지로 가는 경우 대응
          next({ name: "HomeView" });
        }
        next();
      },
    },

    /**
     * Users
     */
    {
      path: "/user-list",
      name: "UserListView",
      component: () => import("@/views/users/UserListView.vue"),
      meta: { requireLogin: true },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requireLogin && !store.getters["auth/authUser"]) {
    //로그인이 필요한 페이지로 갈 때 토큰이 없는 경우 대응
    next({ name: "LoginView" });
  }
  next();
});

export default router;
