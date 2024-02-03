import { useForm } from "react-handled-forms";
import Form from "react-handled-forms/dist/components/form";
import { InferType, object, string } from "yup";
import {
  Alert,
  Button,
  Divider,
  Drawer,
  Flex,
  Progress,
  Typography,
} from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../../../../i18n/translations.enum";
import { useEffect } from "react";
import { useEditAccountPassword } from "../../../../../../hooks/api/edit-user/account-info/use-edit-account-password";
import { evaluatePassword } from "../../../../../../utils/passwords/evaluate-password.util";
import PasswordFormItem from "../../../../../common/form/items/text/password.form-item";
import { AxiosError } from "axios";
import useNotification from "antd/es/notification/useNotification";

const { Text } = Typography;

type Props = {
  open: boolean;
  onClose: () => void;
};

const FORM_SCHEMA = object({
  currentPassword: string().required(),
  password: string().required(),
  repeatPassword: string().required(),
});

type FormType = InferType<typeof FORM_SCHEMA>;

export default function EditAccountPassword({ open, onClose }: Props) {
  const { t } = useTranslation([Translations.USER_INFO, Translations.COMMON]);
  const { mutateAsync } = useEditAccountPassword();
  const [notificationApi, notificationContext] = useNotification();

  const form = useForm({
    objectSchema: FORM_SCHEMA,
    onSubmit: async ({ password, currentPassword }) => {
      try {
        await mutateAsync({ password, currentPassword });
        onClose();
      } catch (e) {
        const error = e as AxiosError;
        const status = error.response?.status;
        if (status === 401) {
          // Wrong password
          notificationApi.error({
            message: t("edit.password.errors.wrong-password.Message", {
              ns: Translations.USER_INFO,
            }),
            description: t("edit.password.errors.wrong-password.Description", {
              ns: Translations.USER_INFO,
            }),
          });
        }
      }
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
  const passwordHasBeenWritten = (password?.length ?? 0) > 0;
  const passwordsDontMatch =
    password !== repeatPassword &&
    passwordHasBeenWritten &&
    (repeatPassword?.length ?? 0) > 0;

  return (
    <>
      {notificationContext}
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
          <Flex gap={3} vertical>
            <Flex vertical gap={3}>
              <Text>
                {t("edit.password.fields.current-password.Label", {
                  ns: Translations.USER_INFO,
                })}
              </Text>
              <PasswordFormItem<FormType, "currentPassword">
                name="currentPassword"
                componentProps={{ minLength: 10, maxLength: 64 }}
              />
            </Flex>
            <Divider />
            <Flex vertical gap={3}>
              <Text>
                {t("edit.password.fields.password.Label", {
                  ns: Translations.USER_INFO,
                })}
              </Text>
              <PasswordFormItem<FormType, "password">
                name="password"
                componentProps={{
                  minLength: 10,
                  maxLength: 64,
                  showCount: true,
                }}
              />
              <Progress
                percent={passwordEvaluation?.percent}
                strokeColor={passwordEvaluation?.color}
              />
            </Flex>
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
            {(!passwordEvaluation?.isSecure || passwordsDontMatch) &&
              passwordHasBeenWritten && <Divider />}
            {!passwordEvaluation?.isSecure && passwordHasBeenWritten && (
              <Alert
                showIcon
                type="warning"
                message={t("edit.password.alerts.weak-password.Message", {
                  ns: Translations.USER_INFO,
                })}
                description={t(
                  "edit.password.alerts.weak-password.Description",
                  {
                    ns: Translations.USER_INFO,
                  }
                )}
              />
            )}
            {passwordsDontMatch && (
              <Alert
                showIcon
                type="warning"
                message={t("edit.password.alerts.passwords-no-match.Message", {
                  ns: Translations.USER_INFO,
                })}
                description={t(
                  "edit.password.alerts.passwords-no-match.Description",
                  {
                    ns: Translations.USER_INFO,
                  }
                )}
              />
            )}
          </Flex>
        </Form>
      </Drawer>
    </>
  );
}
