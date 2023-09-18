import TmwuAuthProvider from "@tmw-universe/react-tmw-universe-authentication-utils/dist/providers/tmwu-auth.provider";
import { useTranslation } from "react-i18next";

type Props = {
  children: JSX.Element;
};

export default function AuthProvider({ children }: Props) {
  const { i18n } = useTranslation();

  return (
    <TmwuAuthProvider
      options={{
        authClient: "http://localhost:8002",
        authHost: "http://localhost:5000",
        onAccountChange: (account) => {
          if (account && account?.preferences?.language)
            i18n.changeLanguage(account.preferences.language);
        },
      }}
    >
      {children}
    </TmwuAuthProvider>
  );
}
