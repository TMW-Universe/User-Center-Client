import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/router";
import routes_definition from "./router/routes-definition";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { purple } from "@ant-design/colors";
import AuthProvider from "./providers/auth/auth.provider";
import Authenticated from "@tmw-universe/react-tmw-universe-authentication-utils/dist/components/authenticated";
import NotAuthenticated from "@tmw-universe/react-tmw-universe-authentication-utils/dist/components/not-authenticated";
import LoginPage from "./pages/auth/login/login.page";

const queryClient = new QueryClient();

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: purple[5],
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <>
            <Authenticated>
              <BrowserRouter>
                <Router routes={routes_definition} />
              </BrowserRouter>
            </Authenticated>
            <NotAuthenticated>
              <LoginPage />
            </NotAuthenticated>
          </>
        </AuthProvider>
      </QueryClientProvider>
    </ConfigProvider>
  );
}
