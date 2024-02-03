import { Account } from "@tmw-universe/tmw-universe-types";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../../../i18n/translations.enum";
import { getFullName } from "@tmw-universe/react-tmw-universe-authentication-utils";
import UserInfoCardDisplay from "../user-info-card-display";
import { format } from "date-fns";
import { useState } from "react";
import EditUserName from "./edit/edit-user-name";
import EditUserBirthdate from "./edit/edit-user-birthdate";

const { Text } = Typography;

type Props = {
  account: Account;
};

export default function BasicInformationCard({ account }: Props) {
  const { t } = useTranslation([Translations.USER_INFO]);

  const [isEditUserNameVisible, setEditUserNameVisibility] = useState(false);
  const [isEditUserBirthdateVisible, setEditUserBirthdateVisibility] =
    useState(false);

  const datasource: {
    label: string;
    content: JSX.Element;
    onAction?: () => void;
  }[] = [
    {
      label: t("sections.basic-info.user-info.Name"),
      content: <Text>{getFullName(account)}</Text>,
      onAction: () => setEditUserNameVisibility(true),
    },
    {
      label: t("sections.basic-info.user-info.Email"),
      content: <Text>{account.email}</Text>,
    },
    {
      label: t("sections.basic-info.user-info.Birthdate"),
      content: <Text>{format(account.birthDate, "dd/MM/yyyy")}</Text>,
      onAction: () => setEditUserBirthdateVisibility(true),
    },
  ];

  return (
    <>
      <UserInfoCardDisplay
        datasource={datasource}
        title={t("sections.basic-info.Title")}
        description={t("sections.basic-info.Description")}
      />

      <EditUserName
        onClose={() => setEditUserNameVisibility(false)}
        open={isEditUserNameVisible}
        name={account.name}
        firstSurname={account.firstSurname}
        secondSurname={account.secondSurname}
      />

      <EditUserBirthdate
        open={isEditUserBirthdateVisible}
        onClose={() => setEditUserBirthdateVisibility(false)}
        birthdate={account.birthDate}
      />
    </>
  );
}
