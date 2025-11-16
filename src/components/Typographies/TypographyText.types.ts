export const TYPOGRAPHY_TEXT_ELEMENT_MAP = {
  SPAN: "span",
  CODE: "code",
  STRONG: "strong",
  SMALL: "small",
  MARK: "mark",
} as const;

export type TypographyTextRef = HTMLElement;

export interface TypographyTextProps extends Omit<React.HTMLAttributes<TypographyTextRef>, "as" | "children"> {
  /**
   * The HTML element to render
   * @default "span"
   */
  as?: (typeof TYPOGRAPHY_TEXT_ELEMENT_MAP)[keyof typeof TYPOGRAPHY_TEXT_ELEMENT_MAP];

  /**
   * The text to be rendered.
   * @required
   */
  text: string;

  /**
   * The color to be used as text color ( hex string ).
   * @default undefined
   */
  color?: React.CSSProperties["color"];
}
