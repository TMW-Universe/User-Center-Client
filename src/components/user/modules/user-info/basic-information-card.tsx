import { Account } from "@tmw-universe/tmw-universe-types";
import { Card, Col, Flex, List, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../../i18n/translations.enum";
import { getFullName } from "@tmw-universe/react-tmw-universe-authentication-utils";
import { chunk } from "lodash";
import styles from "./basic-information-card.module.css";

const { Title, Text } = Typography;

type Props = {
  account: Account;
};

export default function BasicInformationCard({ account }: Props) {
  const { t } = useTranslation([Translations.USER_INFO]);

  const datasource: { label: string; value: JSX.Element }[] = [
    {
      label: t("sections.basic-info.user-info.Name"),
      value: <Text>{getFullName(account)}</Text>,
    },
    {
      label: t("sections.basic-info.user-info.Email"),
      value: <Text>{account.email}</Text>,
    },
    // {
    //   label: t(''),
    //   value: <Text>{account.birthDate}</Text>
    // }
  ];

  return (
    <Card>
      <Flex vertical gap="2em">
        <Flex vertical>
          <Title level={4}>{t("sections.basic-info.Title")}</Title>
          <Text>{t("sections.basic-info.Description")}</Text>
        </Flex>
        <Row gutter={[64, 24]}>
          {chunk(datasource, Math.ceil(datasource.length / 2)).map((ds, i) => (
            <Col xs={24} md={12} key={i}>
              <List
                dataSource={ds}
                renderItem={(item) => (
                  <List.Item>
                    <Text className={styles.bold}>{item.label}</Text>
                    {item.value}
                  </List.Item>
                )}
              />
            </Col>
          ))}
        </Row>
      </Flex>
    </Card>
  );
}
