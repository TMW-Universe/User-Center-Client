import { useForm } from "react-handled-forms";
import Form from "react-handled-forms/dist/components/form";
import { object, string } from "yup";

type Props = {
  name: string;
  firstSurname: string;
  secondSurname: string;
};

const FORM_SCHEMA = object({
  name: string().required(),
  firstSurname: string().required(),
  secondSurname: string().required(),
});

export default function EditUserName({
  name,
  firstSurname,
  secondSurname,
}: Props) {
  const form = useForm({ objectSchema: FORM_SCHEMA });

  return (
    <>
      <Form form={form}></Form>
    </>
  );
}
