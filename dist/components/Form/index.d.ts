export declare const FormField: {
    Checkbox: import("react").NamedExoticComponent<import(".").FormFieldCheckboxProps & import("react").RefAttributes<HTMLInputElement>>;
    Number: import("react").NamedExoticComponent<import(".").FormFieldNumberProps & import("react").RefAttributes<HTMLInputElement>>;
    Password: import("react").NamedExoticComponent<import(".").FormFieldPasswordProps & import("react").RefAttributes<HTMLInputElement>>;
    RadioGroup: <T = string>(props: import(".").FormFieldRadioGroupProps<T> & {
        ref?: React.ForwardedRef<import(".").FormFieldRadioGroupRef>;
    }) => React.ReactElement;
    Select: import("react").NamedExoticComponent<import(".").FormFieldSelectProps & import("react").RefAttributes<HTMLSelectElement>>;
    Switch: import("react").NamedExoticComponent<import(".").FormFieldSwitchProps & import("react").RefAttributes<HTMLInputElement>>;
    Text: import("react").NamedExoticComponent<import(".").FormFieldTextProps & import("react").RefAttributes<HTMLInputElement>>;
    Textarea: import("react").NamedExoticComponent<import(".").FormFieldTextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
};
export type { FormFieldCheckboxProps, FormFieldCheckboxRef } from "./Fields/FormFieldCheckbox";
export type { FormFieldNumberProps, FormFieldNumberRef } from "./Fields/FormFieldNumber";
export type { FormFieldPasswordProps, FormFieldPasswordRef } from "./Fields/FormFieldPassword";
export type { FormFieldSelectOption, FormFieldSelectProps, FormFieldSelectRef } from "./Fields/FormFieldSelect";
export type { FormFieldTextProps, FormFieldTextRef } from "./Fields/FormFieldText";
export type { FormFieldTextareaProps, FormFieldTextareaRef } from "./Fields/FormFieldTextarea";
export type { FormFieldSwitchProps, FormFieldSwitchRef } from "./Fields/FormFieldSwitch";
export { FORM_FIELD_RADIO_GROUP_DIRECTION_MAP } from "./Fields/FormFieldRadioGroup";
export type { FormFieldRadioGroupProps, FormFieldRadioGroupRef, FormFieldRadioOption, } from "./Fields/FormFieldRadioGroup";
export { FormControl } from "./FormControl";
export type { FormControlProps, FormControlRef } from "./FormControl";
export { FormLabel, useFormLabelStyles } from "./FormLabel";
export type { FormLabelProps, FormLabelRef } from "./FormLabel";
//# sourceMappingURL=index.d.ts.map