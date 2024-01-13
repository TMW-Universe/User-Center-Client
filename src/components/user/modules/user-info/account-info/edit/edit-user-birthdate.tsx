import { useTwmuAccount } from "@tmw-universe/react-tmw-universe-authentication-utils";
import { Button, Drawer, Flex, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../../../../i18n/translations.enum";
import Form from "react-handled-forms/dist/components/form";
import { useForm } from "react-handled-forms";
import { InferType, date, object } from "yup";
import DateFormItem from "../../../../../common/form/items/date/date.form-item";
import { SaveOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useEditUserBirthdate } from "../../../../../../hooks/api/edit-user/basic-info/use-edit-user-birthdate";

const { Text } = Typography;

type Props = {
  birthdate: Date;

  open: boolean;
  onClose: () => void;
};

const FORM_SCHEMA = object({
  birthdate: date().required(),
});

type FormType = InferType<typeof FORM_SCHEMA>;

export default function EditUserBirthdate({ birthdate, open, onClose }: Props) {
  const { refetchUserAccount, isAuthenticated } = useTwmuAccount();
  const { t } = useTranslation([Translations.USER_INFO, Translations.COMMON]);

  const { mutateAsync } = useEditUserBirthdate();

  const form = useForm({
    objectSchema: FORM_SCHEMA,
    defaultValues: {
      birthdate,
    },
    onSubmit: async (values) => {
      await mutateAsync(values);
      if (isAuthenticated) await refetchUserAccount();
      onClose();
    },
  });

  useEffect(() => {
    if (open) form.setFormState({ birthdate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={t("edit.birthdate.Title", { ns: Translations.USER_INFO })}
      footer={
        <Button
          onClick={() => form.submit()}
          icon={<SaveOutlined />}
          block
          type="primary"
        >
          {t("actions.Save", { ns: Translations.COMMON })}
        </Button>
      }
    >
      <Form form={form}>
        <Flex gap={6} vertical>
          <Text>
            {t("edit.birthdate.fields.birthdate.Label", {
              ns: Translations.USER_INFO,
            })}
          </Text>
          <DateFormItem<FormType, "birthdate"> name="birthdate" />
        </Flex>
      </Form>
    </Drawer>
  );
}
