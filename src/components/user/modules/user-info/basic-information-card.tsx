import { Account } from "@tmw-universe/tmw-universe-types";
import { Card } from "antd";

type Props = {
  account: Account;
};

export default function BasicInformationCard({ account }: Props) {
  return <Card>{account.email}</Card>;
}
