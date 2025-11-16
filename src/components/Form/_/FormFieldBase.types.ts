/**
 * FormField 共用类型定义
 *
 * 为 FormFieldText、FormFieldNumber、FormFieldPassword 提供共用的基础类型。
 */

/**
 * FormField Variant 映射（所有 FormField 组件共用）
 */
export const FORM_FIELD_VARIANT_MAP = {
  OUTLINED: "outlined",
  TEXT: "text",
} as const;

/**
 * FormField Variant 类型
 */
export type TFormFieldVariant = (typeof FORM_FIELD_VARIANT_MAP)[keyof typeof FORM_FIELD_VARIANT_MAP];

/**
 * FormField Ref 类型（所有 FormField 组件共用）
 */
export type FormFieldBaseRef = HTMLInputElement;

/**
 * FormField 共用的基础 Props
 *
 * 包含所有 FormField 组件都有的通用属性。
 */
export interface FormFieldBaseProps {
  /**
   * The variant of the input.
   * @default "outlined"
   */
  variant?: TFormFieldVariant;

  /**
   * Whether the input is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the input is in error state.
   * @default false
   */
  error?: boolean;

  /**
   * Whether the input should take full width.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * The className of the wrapper element (for advanced use).
   */
  wrapperClassName?: string;

  /**
   * The style of the wrapper element (for advanced use).
   */
  wrapperStyle?: React.CSSProperties;

  /**
   * Element to display before the input.
   */
  prefix?: React.ReactNode;

  /**
   * The className of the prefix element.
   */
  prefixClassName?: string;

  /**
   * The style of the prefix element.
   */
  prefixStyle?: React.CSSProperties;

  /**
   * Element to display after the input.
   */
  suffix?: React.ReactNode;

  /**
   * The className of the suffix element.
   */
  suffixClassName?: string;

  /**
   * The style of the suffix element.
   */
  suffixStyle?: React.CSSProperties;
}
