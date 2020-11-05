import ReportInfo from "./ReportInfo.vue";
import ShowReports from "./ShowReports.vue";

const routes = [
  {
    name: "reports",
    path: "/reports",
    components: { default: ShowReports },
    children: [
      {
        name: "report-info",
        path: ":reportType",
        component: ReportInfo,
        props: true,
      },
    ],
  },
];

export default routes;
