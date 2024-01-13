import { Button, Card, Col, Flex, List, Row, Typography } from "antd";
import { chunk } from "lodash";

import styles from "./user-info-card-display.module.css";
import { RightOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

type Props = {
  datasource: { label: string; content: JSX.Element; onAction?: () => void }[];
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
                    <Row gutter={[3, 0]} align="middle">
                      <Col>{item.content}</Col>
                      {item.onAction && (
                        <Col>
                          <Button
                            onClick={item.onAction}
                            type="link"
                            icon={<RightOutlined />}
                          />
                        </Col>
                      )}
                    </Row>
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
