import type { TThemeBreakpoint } from "@/constants";

export const BOX_ELEMENT_MAP = {
  DIV: "div",
  SECTION: "section",
  ARTICLE: "article",
  MAIN: "main",
  ASIDE: "aside",
  HEADER: "header",
  FOOTER: "footer",
  NAV: "nav",
} as const;

export type BoxRef = HTMLDivElement | HTMLElement;

export interface BoxProps extends Omit<React.HTMLAttributes<BoxRef>, "as" | "color"> {
  /**
   * The element Tag to be rendered.
   * @default "div"
   */
  as?: (typeof BOX_ELEMENT_MAP)[keyof typeof BOX_ELEMENT_MAP];

  /**
   * The maximum width breakpoint of the box.
   * When set, the box will be centered with `margin: 0 auto`.
   * @default undefined (no max-width constraint)
   */
  maxWidth?: TThemeBreakpoint;

  /**
   * The content to display inside.
   */
  children?: React.ReactNode;
}
