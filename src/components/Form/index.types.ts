import type { SpaceFlexProps } from "../Space";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  gap?: SpaceFlexProps["gap"];
}

export const LabelPositionMap = {
  top: "top",
  left: "left",
  right: "right",
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

export interface FormFieldProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  isDisabled?: boolean;
  isError?: LabelProps["isError"];
  isFocused?: boolean;
  required?: LabelProps["required"];
  fullWidth?: boolean;
  label: LabelProps["label"];
  helpText?: string;
}

// text、number、password
export interface FormFieldTextProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "children"> {
  fullWidth?: FormFieldProps["fullWidth"];
  isError?: FormFieldProps["isError"];
  required?: FormFieldProps["required"];
  disabled?: boolean;
  label?: FormFieldProps["label"];
  helpText?: FormFieldProps["helpText"];
}

// textarea
export interface FormFieldTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  fullWidth?: FormFieldProps["fullWidth"];
  isError?: FormFieldProps["isError"];
  required?: FormFieldProps["required"];
  disabled?: boolean;
  label?: FormFieldProps["label"];
  helpText?: FormFieldProps["helpText"];
}

// checkbox、switch
export interface FormFieldCheckboxProps extends Omit<FormFieldTextProps, "fullWidth" | "helpText"> {
  labelPosition?: LabelProps["position"];
}

// radio
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
}

// select
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
