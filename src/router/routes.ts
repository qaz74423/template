import { RouteRecordRaw } from "vue-router";

import Layout from "../layout/Layout.vue";
import MidRouterView from "../components/MidRouterView.vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";
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
      {
        path: "nav2",
        name: "Nav2",
        component: MidRouterView,
        meta: {
          title: "这是nav2",
          icon: VideoCameraOutlined,
        },
        children: [
          {
            path: "item1",
            name: "item1",
            component: () => import("../views/Item1.vue"),
            meta: {
              title: "这是nav2下的item",
              icon: BarChartOutlined,
            },
          },
        ],
      },
      {
        path: "nav3",
        name: "Nav3",
        component: () => import("../views/Nav3.vue"),
        meta: {
          title: "这是nav3",
          icon: UploadOutlined,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/Login.vue"),
  },
];

export default routes;
