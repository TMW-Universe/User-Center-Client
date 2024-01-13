import { useForm } from "react-handled-forms";
import Form from "react-handled-forms/dist/components/form";
import { InferType, object, string } from "yup";
import TextFormItem from "../../../../../common/form/items/text/text.form-item";
import { Button, Drawer, Flex } from "antd";
import { SaveOutlined } from "@ant-design/icons";

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
  const form = useForm({
    objectSchema: FORM_SCHEMA,
    defaultValues: { name, firstSurname, secondSurname },
  });

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={""}
      footer={<Button icon={<SaveOutlined />} block type="primary"></Button>}
    >
      <Form form={form}>
        <Flex gap={6} vertical>
          <TextFormItem<FormType, "name"> name="name" />
          <TextFormItem<FormType, "firstSurname"> name="firstSurname" />
          <TextFormItem<FormType, "secondSurname"> name="secondSurname" />
        </Flex>
      </Form>
    </Drawer>
  );
}
