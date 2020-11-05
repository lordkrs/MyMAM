const allRoutes = [
  {
    name: "BinsRoutes",
    routes: require("./components/bins/routes.js").default,
    isEnabled: true,
  },
  {
    name: "FilesRoutes",
    routes: require("./components/files/routes.js").default,
    isEnabled: true,
  },
  {
    name: "ReportsRoutes",
    routes: require("./components/reports/routes.js").default,
    isEnabled: true,
  },
  {
    name: "UsersRoutes",
    routes: require("./components/users/routes.js").default,
    isEnabled: true,
  },
  {
    name: "InvalidRoutes",
    routes: require("./components/NotFound/routes.js").default,
    isEnabled: true,
  }
];

export default allRoutes;
