import { FormFieldCheckbox } from "./Fields/FormFieldCheckbox";
import { FormFieldNumber } from "./Fields/FormFieldNumber";
import { FormFieldPassword } from "./Fields/FormFieldPassword";
import { FormFieldRadioGroup } from "./Fields/FormFieldRadioGroup";
import { FormFieldSelect } from "./Fields/FormFieldSelect";
import { FormFieldSwitch } from "./Fields/FormFieldSwitch";
import { FormFieldText } from "./Fields/FormFieldText";
import { FormFieldTextarea } from "./Fields/FormFieldTextarea";

export const FormField = {
  Checkbox: FormFieldCheckbox,
  Number: FormFieldNumber,
  Password: FormFieldPassword,
  RadioGroup: FormFieldRadioGroup,
  Select: FormFieldSelect,
  Switch: FormFieldSwitch,
  Text: FormFieldText,
  Textarea: FormFieldTextarea,
};

export type { FormFieldCheckboxProps, FormFieldCheckboxRef } from "./Fields/FormFieldCheckbox";
export type { FormFieldNumberProps, FormFieldNumberRef } from "./Fields/FormFieldNumber";

export type { FormFieldPasswordProps, FormFieldPasswordRef } from "./Fields/FormFieldPassword";

export type { FormFieldSelectOption, FormFieldSelectProps, FormFieldSelectRef } from "./Fields/FormFieldSelect";

export type { FormFieldTextProps, FormFieldTextRef } from "./Fields/FormFieldText";

export type { FormFieldTextareaProps, FormFieldTextareaRef } from "./Fields/FormFieldTextarea";

export type { FormFieldSwitchProps, FormFieldSwitchRef } from "./Fields/FormFieldSwitch";

export { FORM_FIELD_RADIO_GROUP_DIRECTION_MAP } from "./Fields/FormFieldRadioGroup";
export type {
  FormFieldRadioGroupProps,
  FormFieldRadioGroupRef,
  FormFieldRadioOption,
  TFormFieldRadioGroupDirection,
} from "./Fields/FormFieldRadioGroup";

export { FormControl } from "./FormControl";
export type { FormControlProps, FormControlRef } from "./FormControl";

export { FormLabel, useFormLabelStyles } from "./FormLabel";
export type { FormLabelProps, FormLabelRef } from "./FormLabel";
