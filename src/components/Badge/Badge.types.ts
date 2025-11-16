import type { TypographyTextRef } from "@/components/Typographies/TypographyText.types";

export const BADGE_VARIANT_MAP = {
  DOT: "dot",
  TEXT: "text",
} as const;

export const BADGE_PLACEMENT_MAP = {
  TOP_RIGHT: "top-right",
  TOP_LEFT: "top-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_LEFT: "bottom-left",
} as const;

export type BadgeRef = TypographyTextRef;

export interface BadgeProps extends Omit<React.HTMLAttributes<BadgeRef>, "content"> {
  /**
   * Children to be wrapped by the badge.
   * - If provided: Wrapper mode (badge appears at corner of children)
   * - If omitted: Standalone mode (badge displays independently)
   * @default undefined
   */
  children?: React.ReactNode;

  /**
   * Badge variant.
   * - "dot": Small dot indicator
   * - "text": Text/number badge
   * @default "text"
   */
  variant?: TBadgeVariant;

  /**
   * Badge placement relative to wrapped element (only for wrapper mode).
   * @default "top-right"
   */
  placement?: TBadgePlacement;

  /**
   * The offset of the badge from the edge of the container element ( % ) (only for wrapper mode).
   * @default 65
   */
  offset?: number;

  /**
   * Badge text content (text or number).
   * @default undefined
   */
  text?: string | number;

  /**
   * Badge background color ( hex string ).
   * @default SEMANTIC_COLORS.ERROR
   */
  color?: React.CSSProperties["color"];
}

export type TBadgeVariant = (typeof BADGE_VARIANT_MAP)[keyof typeof BADGE_VARIANT_MAP];
export type TBadgePlacement = (typeof BADGE_PLACEMENT_MAP)[keyof typeof BADGE_PLACEMENT_MAP];
