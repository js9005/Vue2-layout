import router from "@/router";
import { getAdmin, loginApi } from "@/api/index";

export default {
  namespaced: true,

  state: {
    token: null,
    user: null,
  },

  getters: {
    authToken(state) {
      return state.token;
    },
    authUser(state) {
      return state.user;
    },
  },

  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },

  actions: {
    /**
     * 새로고침 시
     */
    async attempt({ commit, dispatch }, payload) {
      try {
        commit("setToken", payload); //뷰엑스 스토어에 토큰 저장
        const { data } = await getAdmin();
        commit("setUser", data); //뷰엑스 스토어에 유저 정보 저장
      } catch (error) {
        dispatch("logout");
      }
    },
    /**
     * 로그인
     */
    async login({ dispatch }, payload) {
      try {
        const { data } = await loginApi(payload);
        localStorage.setItem("vue2_layout_token", data.staff.access_token); //로컬스토리지에 토큰 저장
        await dispatch("attempt", data.staff.access_token);
        router.push("/");
      } catch (error) {
        alert("로그인 정보가 일치하지 않습니다.");
      }
    },
    /**
     * 로그아웃
     */
    logout({ commit }) {
      localStorage.removeItem("vue2_layout_token");
      commit("setToken", null);
      commit("setUser", null);
      router.push("/login").catch(() => {});
    },
  },
};
