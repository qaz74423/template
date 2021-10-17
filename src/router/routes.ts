import { RouteRecordRaw } from "vue-router";
import Layout from "../layout";
import { UserOutlined } from "@ant-design/icons-vue";
import { constRoutes } from "./const-route";
// 自动导入modeles
const autoImport = (files: object): any[] => {
  return Object.values(files).map((item) => item["default"]);
};
const files = import.meta.globEager("./modules/*.ts") as object;
const modules: RouteRecordRaw[] = autoImport(files);

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
        component: () => import("@views/dashboard/Dashboard.vue"),
        meta: {
          title: "Dashboard",
          icon: UserOutlined,
        },
      },
      ...modules,
    ],
  },

  // 常量路由
  ...constRoutes,
];

export default routes;
