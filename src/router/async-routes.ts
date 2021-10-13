import { RouteRecordRaw } from "vue-router";
import { UserOutlined } from "@ant-design/icons-vue";

// 权限路由加上 auth:true
// 这里的权限指的是登录，后期加上角色权限
const asyncRoutes: RouteRecordRaw[] = [
  {
    path: "test-async",
    name: "Async",
    component: () => import("../views/AsyncView.vue"),
    meta: {
      title: "Async",
      icon: UserOutlined,
      auth: true,
    },
  },
  {
    path: "test-async2",
    name: "Async2",
    component: () => import("../views/AsyncView.vue"),
    meta: {
      title: "Async2",
      icon: UserOutlined,
      auth: true,
    },
  },
];

export { asyncRoutes };
