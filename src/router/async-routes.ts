import { RouteRecordRaw } from "vue-router";
import { UserOutlined } from "@ant-design/icons-vue";

// 权限路由加上 auth:true
// 这里的权限指的是登录，后期加上角色权限
const asyncRoutes: RouteRecordRaw[] = [
  {
    path: "user-info",
    name: "Async",
    component: () => import("../views/userinfo/UserInfo.vue"),
    meta: {
      title: "user-info",
      icon: UserOutlined,
      auth: true,
    },
  },
];

export { asyncRoutes };
