/**
 * FormFieldCheckbox Ref 类型
 */
export type FormFieldCheckboxRef = HTMLInputElement;

/**
 * FormFieldCheckbox Props
 */
export interface FormFieldCheckboxProps
  extends Omit<React.InputHTMLAttributes<FormFieldCheckboxRef>, "type" | "onChange" | "onMouseEnter" | "onMouseLeave"> {
  /**
   * The name attribute for the input element.
   * Used to identify the form data after submission.
   */
  name?: string;

  /**
   * Whether the checkbox is checked (controlled mode). Use with onChange for controlled mode.
   */
  checked?: boolean;

  /**
   * Callback fired when the checked state changes.
   */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Mouse enter event handler.
   */
  onMouseEnter?: React.MouseEventHandler<SVGSVGElement>;

  /**
   * Mouse leave event handler.
   */
  onMouseLeave?: React.MouseEventHandler<SVGSVGElement>;
}
