import { createStore } from "vuex";
import { RouteRecordRaw } from "vue-router";
import routes from "../router/routes";
import config from "../appconfig";
const store = createStore({
  state: {
    ...config,
  },
  getters: {
    getMobileWidth(state): number {
      return state.mobileWidth;
    },

    getLogo(state): string {
      return state.logo;
    },
    getTitle(state): string {
      return state.title;
    },
    getTransition(state): string {
      return state.transition;
    },
  },
});

export default store;
