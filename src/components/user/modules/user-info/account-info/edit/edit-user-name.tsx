import { useForm } from "react-handled-forms";
import Form from "react-handled-forms/dist/components/form";
import { object, string } from "yup";

type Props = {
  name: string;
  firstLastName: string;
  secondLastName: string;
};

const FORM_SCHEMA = object({
  name: string().required(),
  firstLastName: string().required(),
  secondLastName: string().required(),
});

export default function EditUserName({
  name,
  firstLastName,
  secondLastName,
}: Props) {
  const form = useForm({ objectSchema: FORM_SCHEMA });

  return (
    <>
      <Form form={form}></Form>
    </>
  );
}
