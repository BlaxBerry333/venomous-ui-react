import type { TYPOGRAPHY_SIZES } from "@/constants";

export type TypographyParagraphRef = HTMLParagraphElement;

export interface TypographyParagraphProps
  extends Omit<React.HTMLAttributes<TypographyParagraphRef>, "as" | "children"> {
  /**
   * The text to be rendered.
   * @required
   */
  text: string;

  /**
   * Font size variant (based on TYPOGRAPHY_SIZES.TEXT keys)
   * @default "BASE"
   */
  size?: keyof typeof TYPOGRAPHY_SIZES.TEXT;

  /**
   * Font weight.
   * @default "normal"
   */
  weight?: "normal" | "bold";

  /**
   * The color to be used as text color ( hex string ).
   * @default undefined
   */
  color?: React.CSSProperties["color"];

  /**
   * Text ellipsis rows.
   * - `0`: no ellipsis
   * - `>= 1`: max rows before ellipsis
   * @default 0
   */
  ellipsis?: number;
}
