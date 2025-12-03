/**
 * FormFieldSwitch Ref 类型
 */
export type FormFieldSwitchRef = HTMLInputElement;

/**
 * FormFieldSwitch Props
 */
export interface FormFieldSwitchProps
  extends Omit<React.InputHTMLAttributes<FormFieldSwitchRef>, "type" | "onChange" | "size"> {
  /**
   * The name attribute for the input element.
   * Used to identify the form data after submission.
   */
  name?: string;

  /**
   * Whether the switch is checked (controlled mode). Use with onChange for controlled mode.
   */
  checked?: boolean;

  /**
   * Callback fired when the checked state changes.
   */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
}
