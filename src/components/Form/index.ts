import { FormFieldCheckbox } from "./Fields/FormFieldCheckbox";
import { FormFieldNumber } from "./Fields/FormFieldNumber";
import { FormFieldPassword } from "./Fields/FormFieldPassword";
import { FormFieldSelect } from "./Fields/FormFieldSelect";
import { FormFieldText } from "./Fields/FormFieldText";

export const FormField = {
  Text: FormFieldText,
  Number: FormFieldNumber,
  Password: FormFieldPassword,
  Select: FormFieldSelect,
  Checkbox: FormFieldCheckbox,
};

export type { FormFieldCheckboxProps, FormFieldCheckboxRef } from "./Fields/FormFieldCheckbox";
export type { FormFieldNumberProps, FormFieldNumberRef } from "./Fields/FormFieldNumber";

export type { FormFieldPasswordProps, FormFieldPasswordRef } from "./Fields/FormFieldPassword";

export type { FormFieldSelectOption, FormFieldSelectProps, FormFieldSelectRef } from "./Fields/FormFieldSelect";

export type { FormFieldTextProps, FormFieldTextRef } from "./Fields/FormFieldText";

export { FormControl } from "./FormControl";
export type { FormControlProps, FormControlRef } from "./FormControl";

export { FormLabel, useFormLabelStyles } from "./FormLabel";
export type { FormLabelProps, FormLabelRef } from "./FormLabel";
