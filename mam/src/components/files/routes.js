import FileInfo from "./FileInfo.vue";
import ShowFiles from "./ShowFiles.vue";

const routes = [
  {path:"/", redirect:"/files"},
  {
    name: "files",
    path: "/files",
    components: { default: ShowFiles },
    children: [
      {
        name: "file-info-link",
        path: ":fileId",
        component: FileInfo,
        props: true,
      },
    ],
  },
];

export default routes;
