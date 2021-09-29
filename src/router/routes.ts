import { RouteRecordRaw } from "vue-router";

import Layout from "../layout/Layout.vue";
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
    children: [
      {
        path: "/nav1",
        name: "Nav1",
        component: () => import("../views/Nav1.vue"),
        meta: {
          title: "这是nav1",
          icon: UserOutlined,
        },
      },
      {
        path: "/nav2",
        name: "Nav2",
        component: () => import("../views/Nav2.vue"),
        meta: {
          title: "这是nav2",
          icon: VideoCameraOutlined,
        },
      },
      {
        path: "/nav3",
        name: "Nav3",
        component: () => import("../views/Nav3.vue"),
        meta: {
          title: "这是nav3",
          icon: UploadOutlined,
        },
      },
    ],
  },
];

export default routes;
