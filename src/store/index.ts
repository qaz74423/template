import { createStore } from "vuex";

const store = createStore({
  state: {
    isMob: false,
    mobileWidth: 800,
  },

  mutations: {
    setIsmob(state, data) {
      state.isMob = data;
    },
    setMobileWidth(state, data) {
      state.mobileWidth = data;
    },
  },
  actions: {},
  getters: {
    getIsMob(state): boolean {
      return state.isMob;
    },
    getMobileWidth(state): number {
      return state.mobileWidth;
    },
  },
});

export default store;
