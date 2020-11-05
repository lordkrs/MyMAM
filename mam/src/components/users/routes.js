import ShowUsers from "./ShowUsers.vue";
import UserInfo from "./UserInfo.vue";

const routes = [
  {
    name: "users",
    path: "/users",
    components: { default: ShowUsers },
    children: [
      {
        name: "user-info",
        path: ":userId",
        component: UserInfo,
        props: true,
      },
    ],
  },
];

export default routes;