type Route = (params: never) => string;

export const routes = {
  MAIN_PAGE: () => "/",
} satisfies Record<string, Route>;
