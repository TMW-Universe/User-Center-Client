import { Route } from "./router";
import { routes } from "./routes";

const routes_definition: Route[] = [
  {
    path: routes.MAIN_PAGE(),
    loader: () => import("../pages/main.page"),
  },
];

export default routes_definition;
