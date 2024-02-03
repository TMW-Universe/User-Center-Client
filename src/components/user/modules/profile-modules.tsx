import { Button, Card, Col, Flex, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../i18n/translations.enum";
import informationImage from "../../../assets/user-modules/information.png";
import preferencesImage from "../../../assets/user-modules/preferences.png";
import securityImage from "../../../assets/user-modules/security.png";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../router/routes";
import styles from "./profile-modules.module.pcss";

const { Text, Title } = Typography;

interface Module {
  key: string;
  title: string;
  description: string;
  imageSrc: string;
  action: {
    text: string;
    onClick?: () => void;
  };
}

export default function ProfileModules() {
  const { t } = useTranslation([Translations.WELCOME]);

  const navigate = useNavigate();

  const modules: Module[] = [
    {
      key: "user-info",
      title: t("profile-modules.user-info.Title"),
      description: t("profile-modules.user-info.Description"),
      imageSrc: informationImage,
      action: {
        text: t("profile-modules.user-info.Action"),
        onClick: () => navigate(routes.USER_INFO()),
      },
    },
    {
      key: "user-prefs",
      title: t("profile-modules.user-prefs.Title"),
      description: t("profile-modules.user-prefs.Description"),
      imageSrc: preferencesImage,
      action: {
        text: t("profile-modules.user-prefs.Action"),
      },
    },
    {
      key: "security",
      title: t("profile-modules.security.Title"),
      description: t("profile-modules.security.Description"),
      imageSrc: securityImage,
      action: {
        text: t("profile-modules.security.Action"),
      },
    },
  ];

  return (
    <Row gutter={[24, 24]}>
      {modules.map((module, i, { length }) => (
        <Col
          key={module.key}
          xs={24}
          md={i === length - 1 && length % 2 !== 0 ? 24 : 12}
          className={styles.module}
        >
          <Card>
            <Row gutter={[12, 12]}>
              <Col span={16}>
                <Flex vertical>
                  <Title level={4}>{module.title}</Title>
                  <Text>{module.description}</Text>
                </Flex>
              </Col>
              <Col span={8}>
                <Flex justify="end">
                  <img src={module.imageSrc} alt={module.title} />
                </Flex>
              </Col>
              <Col span={24}>
                <Button
                  disabled={module.action.onClick === undefined}
                  type="link"
                  block
                  onClick={module.action.onClick}
                >
                  {module.action.text}
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
