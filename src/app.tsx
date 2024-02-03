import Router from "./router/router";
import routes_definition from "./router/routes-definition";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import AuthProvider from "./providers/auth/auth.provider";
import Authenticated from "@tmw-universe/react-tmw-universe-authentication-utils/dist/components/authenticated";
import NotAuthenticated from "@tmw-universe/react-tmw-universe-authentication-utils/dist/components/not-authenticated";
import LoginPage from "./pages/auth/login/login.page";
import NetworkProvider from "./providers/networking/network.provider";

export default function App() {
  return (
    <ConfigProvider>
      <NetworkProvider>
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
      </NetworkProvider>
    </ConfigProvider>
  );
}
