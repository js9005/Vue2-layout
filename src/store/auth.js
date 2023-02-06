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
    async attempt() {},

    /**
     * 로그아웃
     */
    logout() {},
  },
};
