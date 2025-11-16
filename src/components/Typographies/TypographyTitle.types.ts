export const TYPOGRAPHY_TITLE_ELEMENT_MAP = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
} as const;

export type TypographyTitleRef = HTMLHeadingElement;

export interface TypographyTitleProps extends Omit<React.HTMLAttributes<TypographyTitleRef>, "as" | "children"> {
  /**
   * The element Tag to be rendered.
   * @default "h3"
   */
  as?: (typeof TYPOGRAPHY_TITLE_ELEMENT_MAP)[keyof typeof TYPOGRAPHY_TITLE_ELEMENT_MAP];

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
