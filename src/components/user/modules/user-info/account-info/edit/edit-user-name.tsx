import { useForm } from "react-handled-forms";
import Form from "react-handled-forms/dist/components/form";
import { InferType, object, string } from "yup";
import TextFormItem from "../../../../../common/form/items/text/text.form-item";
import { Button, Drawer, Flex, Typography } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../../../../i18n/translations.enum";
import { useEffect } from "react";

const { Text } = Typography;

type Props = {
  open: boolean;
  onClose: () => void;

  name: string;
  firstSurname: string;
  secondSurname: string;
};

const FORM_SCHEMA = object({
  name: string().required(),
  firstSurname: string().required(),
  secondSurname: string().required(),
});

type FormType = InferType<typeof FORM_SCHEMA>;

export default function EditUserName({
  name,
  firstSurname,
  secondSurname,

  open,
  onClose,
}: Props) {
  const { t } = useTranslation([Translations.USER_INFO, Translations.COMMON]);

  const form = useForm({
    objectSchema: FORM_SCHEMA,
    defaultValues: { name, firstSurname, secondSurname },
    onSubmit: async (values) => {},
  });

  useEffect(() => {
    if (open) form.setFormState({ name, firstSurname, secondSurname });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={t("edit.name.Title", { ns: Translations.USER_INFO })}
      footer={
        <Button
          onClick={() => form.submit()}
          icon={<SaveOutlined />}
          block
          type="primary"
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
              {t("edit.name.fields.name.Label", { ns: Translations.USER_INFO })}
            </Text>
            <TextFormItem<FormType, "name">
              name="name"
              componentProps={{ minLength: 2, maxLength: 32, showCount: true }}
            />
          </Flex>
          <Flex vertical gap={3}>
            <Text>
              {t("edit.name.fields.firstSurname.Label", {
                ns: Translations.USER_INFO,
              })}
            </Text>
            <TextFormItem<FormType, "firstSurname">
              name="firstSurname"
              componentProps={{ minLength: 2, maxLength: 64, showCount: true }}
            />
          </Flex>
          <Flex vertical gap={3}>
            <Text>
              {t("edit.name.fields.secondSurname.Label", {
                ns: Translations.USER_INFO,
              })}
            </Text>
            <TextFormItem<FormType, "secondSurname">
              name="secondSurname"
              componentProps={{ minLength: 2, maxLength: 64, showCount: true }}
            />
          </Flex>
        </Flex>
      </Form>
    </Drawer>
  );
}
