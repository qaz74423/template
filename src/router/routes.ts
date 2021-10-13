import { RouteRecordRaw } from "vue-router";
import Layout from "../layout/Layout.vue";
import { UserOutlined } from "@ant-design/icons-vue";
import { asyncRoutes } from "./async-routes";

// 自动导入modeles
const files = import.meta.globEager("./modules/*.ts");
const modules: RouteRecordRaw[] = [];
for (const key in files) {
  modules.push(files[key]["default"]);
}
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("../views/dashboard/Dashboard.vue"),
        meta: {
          title: "Dashboard",
          icon: UserOutlined,
          auth: false,
        },
      },
      ...modules,
      // 添加权限路由
      ...asyncRoutes,
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/Login.vue"),
    meta: {
      title: "Login",
      icon: null,
      auth: false,
    },
  },
];

export default routes;
