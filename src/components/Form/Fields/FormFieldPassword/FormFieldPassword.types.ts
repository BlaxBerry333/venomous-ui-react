import type { FormFieldBaseProps, FormFieldBaseRef } from "@/components/Form/_";

export type FormFieldPasswordRef = FormFieldBaseRef;

export interface FormFieldPasswordProps
  extends Omit<React.InputHTMLAttributes<FormFieldBaseRef>, "value" | "onChange" | "size" | "prefix" | "type">,
    Omit<FormFieldBaseProps, "suffix" | "suffixClassName" | "suffixStyle"> {
  /**
   * The name attribute for the input element.
   * Used to identify the form data after submission.
   */
  name?: string;

  /**
   * The value of the input.
   */
  value?: string;

  /**
   * Callback fired when the value changes.
   */
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Whether to show the visibility toggle button.
   * @default true
   */
  showVisibilityToggle?: boolean;
}
