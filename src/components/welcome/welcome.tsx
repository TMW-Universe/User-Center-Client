import {
  getFullName,
  useTwmuAccount,
} from "@tmw-universe/react-tmw-universe-authentication-utils";
import { Flex, Typography } from "antd";
import UserProfileImage from "../user/profile/user-profile-image";
import { useTranslation } from "react-i18next";
import { Translations } from "../../i18n/translations.enum";
import ProfileModules from "../user/modules/profile-modules";

const { Title, Text } = Typography;

export default function Welcome() {
  const { account, isAuthenticated } = useTwmuAccount();
  const { t } = useTranslation([Translations.WELCOME]);

  if (!isAuthenticated) throw new Error();

  return (
    <Flex vertical gap={"2.5em"}>
      <Flex vertical align="center" gap="1.5em">
        <UserProfileImage user={account} />
        <Flex vertical align="center">
          <Title level={4}>
            {t("user-info.Welcome", { name: getFullName(account) })}
          </Title>
          <Text>{t("user-info.Description")}</Text>
        </Flex>
      </Flex>
      <ProfileModules />
    </Flex>
  );
}
