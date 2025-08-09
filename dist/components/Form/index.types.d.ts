import type { SpaceFlexProps } from "../Space";
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    gap?: SpaceFlexProps["gap"];
}
export declare const LabelPositionMap: {
    top: string;
    left: string;
    right: string;
};
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    label?: string;
    isError?: boolean;
    required?: boolean;
    position?: keyof typeof LabelPositionMap;
}
export type FormFieldOption = {
    label: string;
    value: string | number;
    disabled?: boolean;
};
export interface FormFieldProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "children" | "disabled"> {
    children: React.ReactNode;
    isDisabled?: boolean;
    isError?: LabelProps["isError"];
    isFocused?: boolean;
    required?: LabelProps["required"];
    fullWidth?: boolean;
    label: LabelProps["label"];
    helpText?: string;
}
export interface FormFieldTextProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "children"> {
    fullWidth?: FormFieldProps["fullWidth"];
    isError?: FormFieldProps["isError"];
    required?: FormFieldProps["required"];
    disabled?: boolean;
    label?: FormFieldProps["label"];
    helpText?: FormFieldProps["helpText"];
}
export interface FormFieldTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    fullWidth?: FormFieldProps["fullWidth"];
    isError?: FormFieldProps["isError"];
    required?: FormFieldProps["required"];
    disabled?: boolean;
    label?: FormFieldProps["label"];
    helpText?: FormFieldProps["helpText"];
}
export interface FormFieldCheckboxProps extends Omit<FormFieldTextProps, "fullWidth" | "helpText"> {
    labelPosition?: LabelProps["position"];
}
export interface FormFieldRadioProps {
    name: string;
    value?: FormFieldOption["value"];
    fullWidth?: FormFieldProps["fullWidth"];
    disabled?: FormFieldOption["disabled"];
    required?: FormFieldProps["required"];
    label: FormFieldProps["label"];
    labelPosition?: LabelProps["position"];
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    options: FormFieldOption[];
    style?: React.CSSProperties;
    className?: string;
}
export interface FormFieldSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    fullWidth?: FormFieldProps["fullWidth"];
    isError?: FormFieldProps["isError"];
    required?: FormFieldProps["required"];
    disabled?: boolean;
    label?: FormFieldProps["label"];
    helpText?: FormFieldProps["helpText"];
    value?: FormFieldOption["value"];
    options: FormFieldOption[];
    isOriginalSelect?: boolean;
}
//# sourceMappingURL=index.types.d.ts.map