import { RouteRecordRaw } from "vue-router";
import { FileUnknownOutlined, FileUnknownTwoTone } from "@ant-design/icons-vue";

const route: RouteRecordRaw = {
  path: "study",
  name: "Study",
  component: () => import("@views/study/Study.vue"),
  meta: {
    title: "study",
    icon: FileUnknownOutlined,
  },
  children: [
    {
      path: "pattern",
      name: "Pattern",
      component: () => import("@views/study/children/pattern/Pattern.vue"),

      meta: {
        title: "pattern",
        icon: FileUnknownOutlined,
      },
    },
    {
      path: "ipbp",
      name: "Ipbp",
      component: () => import("../../views/study/children/ipbp/Ipbp.vue"),
      meta: {
        title: "ipbp",
        icon: FileUnknownOutlined,
      },
      children: [
        {
          path: "blogs",
          name: "Blogs",
          component: () =>
            import("../../views/study/children/ipbp/children/blogs"),
          meta: {
            title: "blogs",
            icon: FileUnknownTwoTone,
            auth: true,
          },
        },
      ],
    },
    {
      path: "typescript",
      name: "Typescript",
      component: () =>
        import("@views/study/children/typescript/TypeScript.vue"),
      meta: {
        title: "typescript",
        icon: FileUnknownOutlined,
      },
    },
  ],
};

export default route;
