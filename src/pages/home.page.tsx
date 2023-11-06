import { Flex } from "antd";
import Welcome from "../components/welcome/welcome";
import ProfileModules from "../components/user/modules/profile-modules";

export default function HomePage() {
  return (
    <Flex vertical gap={"2.5em"}>
      <Welcome />
      <ProfileModules />
    </Flex>
  );
}
