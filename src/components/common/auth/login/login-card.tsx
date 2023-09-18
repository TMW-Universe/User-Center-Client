import { useTmwuAuthentication } from "@tmw-universe/react-tmw-universe-authentication-utils";
import { Button, Card } from "antd";

export default function LoginCard() {
  const { login } = useTmwuAuthentication();

  return (
    <Card>
      <Button onClick={() => login()}>#LOGIN#</Button>
    </Card>
  );
}
