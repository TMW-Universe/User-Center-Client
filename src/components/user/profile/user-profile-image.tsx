import { getProfilePictureUrl } from "@tmw-universe/react-tmw-universe-authentication-utils";
import { Account } from "@tmw-universe/tmw-universe-types";
import { Avatar } from "antd";

type Props = {
  user: Account;
};

export default function UserProfileImage({ user }: Props) {
  return <Avatar size={128} src={getProfilePictureUrl(user)} />;
}
