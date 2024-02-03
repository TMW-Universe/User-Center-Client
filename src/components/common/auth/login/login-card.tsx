import { useTmwuAuthentication } from "@tmw-universe/react-tmw-universe-authentication-utils";
import { Button, Card, Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../../i18n/translations.enum";
import tmwu_logo from "../../../../assets/branding/tmw_universe_logo.png";
import classNames from "classnames";
import styles from "./login-card.module.pcss";

const { Title } = Typography;

export default function LoginCard() {
  const { login } = useTmwuAuthentication();

  const { t } = useTranslation([Translations.TMWU_AUTH]);

  return (
    <Card className={styles.card}>
      <Row gutter={[12, 12]}>
        <Col
          span={24}
          className={classNames(styles.logo, "flex", "justify-center")}
        >
          <img src={tmwu_logo} alt="TheMineWay Universe logo" />
        </Col>
        <Col span={24}>
          <Row gutter={[6, 6]}>
            <Col span={24} className="flex justify-center">
              <Title level={4} className={styles.title}>
                {t("login.Title")}
              </Title>
            </Col>
            <Col span={24} className="flex justify-center">
              <Button type="primary" onClick={() => login()}>
                {t("login.button.Text")}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
