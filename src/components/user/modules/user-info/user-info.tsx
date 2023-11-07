import { Flex, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../../i18n/translations.enum";

const { Text, Title } = Typography;

export default function UserInfo() {
  const { t } = useTranslation([Translations.USER_INFO]);

  return (
    <Flex vertical align="center">
      <Title level={2}>{t("header.Title")}</Title>
      <Text>{t("header.Description")}</Text>
    </Flex>
  );
}
