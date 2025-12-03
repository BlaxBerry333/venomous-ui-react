import type { FormFieldBaseProps, FormFieldBaseRef } from "@/components/Form/_";

export type FormFieldTextRef = FormFieldBaseRef;

export interface FormFieldTextProps
  extends FormFieldBaseProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "size" | "prefix" | "type"> {
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
}
