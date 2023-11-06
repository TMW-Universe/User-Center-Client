import { useTwmuAccount } from "@tmw-universe/react-tmw-universe-authentication-utils";
import { Col, Row } from "antd";
import UserProfileImage from "../user/profile/user-profile-image";
//import styles from "./welcome.module.css";

export default function Welcome() {
  const { account, isAuthenticated } = useTwmuAccount();

  if (!isAuthenticated) throw new Error();

  return (
    <Row gutter={[12, 12]}>
      <Col span={24}>
        <UserProfileImage user={account} />
      </Col>
    </Row>
  );
}
