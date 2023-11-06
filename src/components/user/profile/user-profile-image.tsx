import { Account } from "@tmw-universe/tmw-universe-types";
import { Avatar } from "antd";
import md5 from "blueimp-md5";

type Props = {
  user: Account;
};

export default function UserProfileImage({ user: { email } }: Props) {
  return (
    <Avatar
      size={128}
      src={`https://gravatar.com/avatar/${md5(
        email.trim().toLowerCase()
      )}?s=200`}
    />
  );
}
