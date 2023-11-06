import {
  getFullName,
  useTwmuAccount,
} from "@tmw-universe/react-tmw-universe-authentication-utils";
import { Col, Flex, Row, Typography } from "antd";
import UserProfileImage from "../user/profile/user-profile-image";
import { useTranslation } from "react-i18next";
import { Translations } from "../../i18n/translations.enum";
//import styles from "./welcome.module.css";

const { Title } = Typography;

export default function Welcome() {
  const { account, isAuthenticated } = useTwmuAccount();
  const { t } = useTranslation([Translations.WELCOME]);

  if (!isAuthenticated) throw new Error();

  return (
    <Row gutter={[12, 12]}>
      <Col span={24}>
        <Flex vertical align="center" gap="1em">
          <UserProfileImage user={account} />
          <Title level={4}>
            {t("user-info.Welcome", { name: getFullName(account) })}
          </Title>
        </Flex>
      </Col>
    </Row>
  );
}
