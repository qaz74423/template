import { createStore } from "vuex";
import { RouteRecordRaw } from "vue-router";
import routes from "../router/routes";
import config from "../appconfig";
const store = createStore({
  state: {
    isMob: false,
    routes: [] as RouteRecordRaw[],
    tabs: [] as any,
    ...config,
  },

  mutations: {
    setIsmob(state, data: boolean) {
      state.isMob = data;
    },
    setMobileWidth(state, data) {
      state.mobileWidth = data;
    },
    setRoutes(state, data: RouteRecordRaw[]) {
      state.routes = data;
    },
    setTabs(state, data) {
      state.tabs = data;
    },
  },
  actions: {
    generateRoutes({ commit }) {
      const sourceRoutes = routes.find((route) => route.path === "/")?.children;
      if (sourceRoutes) commit("setRoutes", sourceRoutes);
    },
  },
  getters: {
    getIsMob(state): boolean {
      return state.isMob;
    },
    getMobileWidth(state): number {
      return state.mobileWidth;
    },
    getRoutes(state): RouteRecordRaw[] {
      return state.routes;
    },
    getLogo(state): string {
      return state.logo;
    },
    getTitle(state): string {
      return state.title;
    },
    getIsTabs(state): boolean {
      return state.isTabs;
    },
    getTabs(state): [] {
      return state.tabs;
    },
  },
});

export default store;
