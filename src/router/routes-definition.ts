import { Route } from "./router";
import { routes } from "./routes";

const routes_definition: Route[] = [
  {
    path: routes.HOME(),
    loader: () => import("../pages/home.page"),
  },
  {
    path: routes.USER_INFO(),
    loader: () => import("../pages/user/info/user-info.page"),
  },
];

export default routes_definition;
