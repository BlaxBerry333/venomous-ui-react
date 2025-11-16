import type { BoxProps, BoxRef } from "@/components/Box/Box.types";

export const CARD_VARIANT_MAP = {
  CONTAINED: "contained",
  OUTLINED: "outlined",
  ELEVATED: "elevated",
} as const;

export type CardRef = BoxRef;

export interface CardProps extends Omit<BoxProps, "as" | "maxWidth"> {
  /**
   * The element Tag to be rendered.
   * Only Allowed values: "div" | "section" | "article".
   * @default "div"
   */
  as?: Extract<BoxProps["as"], "div" | "section" | "article">;

  /**
   * Card variant style
   * @default "contained"
   */
  variant?: TCardVariant;
}

export type TCardVariant = (typeof CARD_VARIANT_MAP)[keyof typeof CARD_VARIANT_MAP];
