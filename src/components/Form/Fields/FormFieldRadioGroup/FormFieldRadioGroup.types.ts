export const FORM_FIELD_RADIO_GROUP_DIRECTION_MAP = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
} as const;

export type FormFieldRadioGroupRef = HTMLDivElement;

export interface FormFieldRadioGroupProps<T = string>
  extends Omit<React.HTMLAttributes<FormFieldRadioGroupRef>, "onChange" | "defaultChecked"> {
  /**
   * The name attribute for the radio group.
   * Used to identify the form data after submission.
   * If not provided, a unique name will be generated automatically.
   */
  name?: string;

  /**
   * The options to display.
   */
  options: FormFieldRadioOption<T>[];

  /**
   * The current selected value (controlled mode).
   */
  value?: T;

  /**
   * Callback fired when the selected value changes.
   */
  onChange?: (value: T, event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Whether the radio group is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The layout direction of the radio group.
   * @default "vertical"
   */
  direction?: (typeof FORM_FIELD_RADIO_GROUP_DIRECTION_MAP)[keyof typeof FORM_FIELD_RADIO_GROUP_DIRECTION_MAP];

  /**
   * The spacing between radio items.
   * @default 8
   */
  spacing?: number;
}

export interface FormFieldRadioOption<T = string> {
  /**
   * The value of the option.
   */
  value: T;

  /**
   * The label to display.
   */
  label: React.ReactNode;

  /**
   * Whether this option is disabled.
   * @default false
   */
  disabled?: boolean;
}

export interface FormFieldRadioItemProps<T = string> {
  /**
   * The option data.
   */
  option: FormFieldRadioOption<T>;

  /**
   * The name attribute for the radio input.
   */
  name: string;

  /**
   * Whether the radio is checked.
   */
  checked: boolean;

  /**
   * Whether the radio is disabled.
   */
  disabled: boolean;

  /**
   * Callback fired when the value changes.
   */
  onChange: (value: T, event: React.ChangeEvent<HTMLInputElement>) => void;
}
