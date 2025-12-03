import type { SpaceFlexProps } from "@/components/Space/SpaceFlex.types";

export type FormControlRef = HTMLDivElement;

export interface FormControlProps
  extends Pick<SpaceFlexProps, "column" | "spacing" | "className" | "style" | "onMouseEnter" | "onMouseLeave"> {
  /**
   * The label text.
   */
  label?: string;

  /**
   * Extra content to display on the right side of the label row.
   * Useful for links like "Forgot password?" or other actions.
   */
  LabelExtra?: React.ReactNode;

  /**
   * Render prop for the field element.
   * Receives the auto-generated id for label association.
   */
  children: (id: string) => React.ReactNode;

  /**
   * The helper text or error message.
   */
  message?: string;

  /**
   * Whether the field is required (adds * to label).
   * @default false
   */
  required?: boolean;

  /**
   * Whether the field is in error state (red label & message).
   * @default false
   */
  isError?: boolean;

  /**
   * Whether the field is disabled (gray label & message).
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether to place field before label in horizontal layout (`column=false`).
   * Only effective when `column=false`.
   * - false: [Label] [Field] (default)
   * - true: [Field] [Label] (useful for Checkbox/Switch)
   * @default false
   */
  reverse?: boolean;

  /**
   * Whether to use vertical layout.
   * @default true
   */
  column?: boolean;

  /**
   * The spacing between elements.
   * @default 4
   */
  spacing?: number;
}
