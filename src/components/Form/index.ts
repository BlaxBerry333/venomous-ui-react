import FormFieldCheckbox from "./FormFieldCheckbox";
import FormFieldNumber from "./FormFieldNumber";
import FormFieldPassword from "./FormFieldPassword";
import FormFieldRadio from "./FormFieldRadio";
import FormFieldSelect from "./FormFieldSelect";
import FormFieldSwitch from "./FormFieldSwitch";
import FormFieldText from "./FormFieldText";
import FormFieldTextarea from "./FormFieldTextarea";

export { default as Form } from "./Form";

export type {
  FormFieldCheckboxProps,
  FormFieldRadioProps,
  FormFieldSelectProps,
  FormFieldTextProps,
  FormFieldTextareaProps,
  FormProps,
} from "./index.types";

export const FormField = {
  Text: FormFieldText,
  Textarea: FormFieldTextarea,
  Number: FormFieldNumber,
  Password: FormFieldPassword,
  Checkbox: FormFieldCheckbox,
  Switch: FormFieldSwitch,
  Radio: FormFieldRadio,
  Select: FormFieldSelect,
};
