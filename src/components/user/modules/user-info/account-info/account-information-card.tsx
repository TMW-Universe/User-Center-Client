import { useTranslation } from "react-i18next";
import UserInfoCardDisplay from "../user-info-card-display";
import { Translations } from "../../../../../i18n/translations.enum";
import { Switch, Typography } from "antd";
import { Account } from "@tmw-universe/tmw-universe-types";
import EditAccountPassword from "./edit/edit-account-password";
import { useState } from "react";

const { Text } = Typography;

type Props = {
  account: Account;
};

export default function AccountInformationCard({ account }: Props) {
  const { t } = useTranslation([Translations.USER_INFO]);

  const [isEditAccountPasswordOpen, setEditAccountPasswordOpen] =
    useState(false);

  const datasource: {
    label: string;
    content: JSX.Element;
    onAction?: () => void;
  }[] = [
    {
      label: t("sections.account-info.user-info.Username"),
      content: <Text>{account.username}</Text>,
    },
    {
      label: t("sections.account-info.user-info.Password"),
      content: <Text>*******</Text>,
      onAction: () => setEditAccountPasswordOpen(true),
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

      <EditAccountPassword
        open={isEditAccountPasswordOpen}
        onClose={() => setEditAccountPasswordOpen(false)}
      />
    </>
  );
}
