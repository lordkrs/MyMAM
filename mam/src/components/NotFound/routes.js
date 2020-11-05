import NotFound from "./NotFound.vue";

const routes = [
  {
    name: "not-found",
    path: "/:notfound(.*)",
    components: { default: NotFound },
    
  },
];

export default routes;