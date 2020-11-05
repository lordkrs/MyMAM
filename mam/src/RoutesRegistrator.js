import Routes from "./routes-config.js";
import { createRouter, createWebHistory } from "vue-router";

export default function(app) {
  let registeredRoutes = [];
  for (let route of Routes) {
    if (route.isEnabled) {
      console.log("Registering route----->" + route.name);
      registeredRoutes = registeredRoutes.concat(route.routes);
    }
  }
  const router = createRouter({
    history: createWebHistory(),
    routes: registeredRoutes,
  });
  app.use(router);
}
