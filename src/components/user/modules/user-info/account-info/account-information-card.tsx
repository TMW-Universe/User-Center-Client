import { useTranslation } from "react-i18next";
import UserInfoCardDisplay from "../user-info-card-display";
import { Translations } from "../../../../../i18n/translations.enum";
import { Switch, Typography } from "antd";
import { Account } from "@tmw-universe/tmw-universe-types";
import UserInfoEditDrawer from "../../user-edit-commons/user-info-edit-drawer";

const { Text } = Typography;

type Props = {
  account: Account;
};

export default function AccountInformationCard({ account }: Props) {
  const { t } = useTranslation([Translations.USER_INFO]);

  const datasource: { label: string; content: JSX.Element }[] = [
    {
      label: t("sections.account-info.user-info.Username"),
      content: <Text>{account.username}</Text>,
    },
    {
      label: t("sections.account-info.user-info.Password"),
      content: <Text>*******</Text>,
    },
    {
      label: t("sections.account-info.user-info.2FA"),
      content: <Switch disabled />,
    },
  ];

  return (
    <>
      <UserInfoCardDisplay
        datasource={datasource}
        title={t("sections.account-info.Title")}
        description={t("sections.account-info.Description")}
      />

      <UserInfoEditDrawer>
        <p>a</p>
      </UserInfoEditDrawer>
    </>
  );
}
