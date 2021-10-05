import { RouteRecordRaw } from "vue-router";
import { AreaChartOutlined, LineChartOutlined } from "@ant-design/icons-vue";
const routes: RouteRecordRaw = {
  path: "charts",
  name: "Charts",
  component: () => import("../../views/charts/Charts.vue"),
  meta: {
    title: "charts",
    icon: AreaChartOutlined,
  },
  children: [
    {
      path: "commen-charts",
      name: "CommenCharts",
      component: () =>
        import("../../views/charts/children/commoncharts/CommonCharts.vue"),
      meta: {
        title: "CommenCharts",
        icon: LineChartOutlined,
      },
    },
  ],
};

export default routes;
