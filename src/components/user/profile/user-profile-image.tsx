import { Account } from "@tmw-universe/tmw-universe-types";
import md5 from "blueimp-md5";

type Props = {
  user: Account;
};

export default function UserProfileImage({ user: { email } }: Props) {
  return (
    <img
      src={`https://gravatar.com/avatar/${md5(email.trim().toLowerCase())}`}
    />
  );
}
