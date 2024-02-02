import { useForm } from "react-handled-forms";
import Form from "react-handled-forms/dist/components/form";
import { InferType, object, string } from "yup";
import { Button, Drawer, Flex, Progress, Typography } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../../../../i18n/translations.enum";
import { useEffect } from "react";
import { useEditAccountPassword } from "../../../../../../hooks/api/edit-user/account-info/use-edit-account-password";
import { evaluatePassword } from "../../../../../../utils/passwords/evaluate-password.util";
import PasswordFormItem from "../../../../../common/form/items/text/password.form-item";

const { Text } = Typography;

type Props = {
  open: boolean;
  onClose: () => void;
};

const FORM_SCHEMA = object({
  password: string().required(),
  repeatPassword: string().required(),
});

type FormType = InferType<typeof FORM_SCHEMA>;

export default function EditAccountPassword({ open, onClose }: Props) {
  const { t } = useTranslation([Translations.USER_INFO, Translations.COMMON]);
  const { mutateAsync } = useEditAccountPassword();

  const form = useForm({
    objectSchema: FORM_SCHEMA,
    onSubmit: async ({ password }) => {
      await mutateAsync({ password });
      onClose();
    },
  });

  useEffect(() => {
    if (open) form.setFormState({ password: "" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const {
    formState: { password, repeatPassword },
  } = form;

  const passwordEvaluation = password ? evaluatePassword(password) : null;
  const isPasswordValid =
    password === repeatPassword && passwordEvaluation?.isSecure;

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={t("edit.password.Title", { ns: Translations.USER_INFO })}
      footer={
        <Button
          onClick={() => form.submit()}
          icon={<SaveOutlined />}
          block
          type="primary"
          disabled={!isPasswordValid}
        >
          {t("actions.Save", {
            ns: Translations.COMMON,
          })}
        </Button>
      }
    >
      <Form form={form}>
        <Flex gap={6} vertical>
          <Flex vertical gap={3}>
            <Text>
              {t("edit.password.fields.password.Label", {
                ns: Translations.USER_INFO,
              })}
            </Text>
            <PasswordFormItem<FormType, "password">
              name="password"
              componentProps={{ minLength: 10, maxLength: 64, showCount: true }}
            />
            <Progress
              percent={passwordEvaluation?.percent}
              strokeColor={passwordEvaluation?.color}
            />
          </Flex>
        </Flex>
        <Flex gap={6} vertical>
          <Flex vertical gap={3}>
            <Text>
              {t("edit.password.fields.repeat-password.Label", {
                ns: Translations.USER_INFO,
              })}
            </Text>
            <PasswordFormItem<FormType, "repeatPassword">
              name="repeatPassword"
              componentProps={{
                minLength: 10,
                maxLength: 64,
                showCount: true,
                "aria-description": t(
                  "edit.password.fields.repeat-password.Description",
                  {
                    ns: Translations.USER_INFO,
                  }
                ),
              }}
            />
          </Flex>
        </Flex>
      </Form>
    </Drawer>
  );
}
