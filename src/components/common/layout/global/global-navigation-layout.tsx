import { Button, Flex, Typography } from "antd";
import tmwuLogo from "../../../../assets/branding/tmw_universe_logo.png";
import styles from "./global-navigation-layout.module.css";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../router/routes";
import { useTmwuAuthentication } from "@tmw-universe/react-tmw-universe-authentication-utils";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../../i18n/translations.enum";
import { LogoutOutlined } from "@ant-design/icons";

const { Text } = Typography;

type Props = {
  children: JSX.Element;
};

export default function GlobalNavigationLayout({ children }: Props) {
  const navigate = useNavigate();
  const { logout } = useTmwuAuthentication();

  const { t } = useTranslation([Translations.TMWU_AUTH]);

  return (
    <Flex vertical>
      <Flex justify="space-between" align="center" className={styles.navbar}>
        <Flex align="center" gap="1em">
          <img
            onClick={() => navigate(routes.HOME())}
            alt="TMWU logo"
            src={tmwuLogo}
          />
          <Text>TMW Universe Account</Text>
        </Flex>
        <Button icon={<LogoutOutlined />} type="link" onClick={logout}>
          {t("logout.Logout")}
        </Button>
      </Flex>
      <div>{children}</div>
    </Flex>
  );
}
