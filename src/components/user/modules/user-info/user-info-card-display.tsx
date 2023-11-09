import { Card, Col, Flex, List, Row, Typography } from "antd";
import { chunk } from "lodash";
import styles from "./user-info-card-display.module.css";

const { Text, Title } = Typography;

type Props = {
  datasource: { label: string; content: JSX.Element }[];
  title: string;
  description: string;
};

export default function UserInfoCardDisplay({
  datasource,
  title,
  description,
}: Props) {
  return (
    <Card>
      <Flex vertical gap="2em">
        <Flex vertical>
          <Title level={4}>{title}</Title>
          <Text>{description}</Text>
        </Flex>
        <Row gutter={[64, 24]}>
          {chunk(datasource, Math.ceil(datasource.length / 2)).map((ds, i) => (
            <Col xs={24} md={12} key={i}>
              <List
                dataSource={ds}
                renderItem={(item) => (
                  <List.Item>
                    <Text className={styles.bold}>{item.label}</Text>
                    {item.content}
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
