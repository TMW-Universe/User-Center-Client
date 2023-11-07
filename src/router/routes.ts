type Route = (params: never) => string;

export const routes = {
  HOME: () => `/`,
  USER_INFO: () => "/user-information",
} satisfies Record<string, Route>;
