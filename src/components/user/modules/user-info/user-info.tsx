import { Flex, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../../i18n/translations.enum";
import BasicInformationCard from "./basic-information-card";
import { Account } from "@tmw-universe/tmw-universe-types";

const { Text, Title } = Typography;

type Props = {
  account: Account;
};

export default function UserInfo({ account }: Props) {
  const { t } = useTranslation([Translations.USER_INFO]);

  return (
    <Flex vertical gap="2em">
      <Flex vertical align="center">
        <Title level={2}>{t("header.Title")}</Title>
        <Text>{t("header.Description")}</Text>
      </Flex>
      <Flex vertical gap="2em">
        <BasicInformationCard account={account} />
      </Flex>
    </Flex>
  );
}
