import { RouteRecordRaw } from "vue-router";

import Layout from "../layout/Layout.vue";
import { UserOutlined } from "@ant-design/icons-vue";

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
          title: "这是Dashboard",
          icon: UserOutlined,
        },
      },
      ...modules,
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/Login.vue"),
  },
];

export default routes;
