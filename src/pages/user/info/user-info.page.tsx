import { useTwmuAccount } from "@tmw-universe/react-tmw-universe-authentication-utils";
import UserInfo from "../../../components/user/modules/user-info/user-info";

export default function UserInfoPage() {
  const { account, isAuthenticated } = useTwmuAccount();

  if (!isAuthenticated) throw new Error();

  return <UserInfo account={account} />;
}
