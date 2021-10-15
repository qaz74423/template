import { RouteRecordRaw } from "vue-router";
const constRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@views/login/Login.vue"),
    meta: {
      title: "Login",
      icon: null,
      //   auth: false,
    },
  },
  {
    //   看不懂这个写法
    path: "/:404(.*)*",
    name: "404",
    component: () => import("@views/error/404.vue"),
    meta: {
      //   auth: false,
    },
  },
];

export { constRoutes };
