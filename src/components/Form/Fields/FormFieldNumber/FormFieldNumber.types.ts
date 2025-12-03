import type { FormFieldBaseProps, FormFieldBaseRef } from "@/components/Form/_";

export type FormFieldNumberRef = FormFieldBaseRef;

export interface FormFieldNumberProps
  extends Omit<React.InputHTMLAttributes<FormFieldNumberRef>, "value" | "onChange" | "type" | "size" | "prefix">,
    FormFieldBaseProps {
  /**
   * The name attribute for the input element.
   * Used to identify the form data after submission.
   */
  name?: string;

  /**
   * The value of the input.
   * @description When undefined or empty, the input will be cleared.
   */
  value?: number;

  /**
   * Callback fired when the value changes.
   * @param value - The new value. undefined when the input is empty.
   * @param event - The change event.
   */
  onChange?: (value: number | undefined, event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * The minimum value.
   */
  min?: number;

  /**
   * The maximum value.
   */
  max?: number;

  /**
   * The step value.
   * @default 1
   */
  step?: number;
}
