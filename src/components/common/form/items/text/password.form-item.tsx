import { Input, InputProps } from "antd";
import { FormItemOptions, useFormContext } from "react-handled-forms";
import FormItem from "react-handled-forms/dist/components/form-item";

export default function PasswordFormItem<T extends object, K extends keyof T>(
  props: FormItemOptions<T, K, InputProps, string>
) {
  const {
    form: { formState, setValue },
  } = useFormContext<T>();

  return (
    <FormItem<T, K, InputProps, string> {...props}>
      <Input.Password
        name={props.name.toString()}
        value={formState[props.name] as string}
        onChange={(e) => setValue(props.name, e.target.value as never)}
        {...props.componentProps}
      />
    </FormItem>
  );
}
