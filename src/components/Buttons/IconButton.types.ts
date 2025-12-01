import type { IconProps } from "@/components/Icon";
import { type ButtonProps, type ButtonRef } from "./Button.types";

export const ICON_BUTTON_VARIANT_MAP = {
  CIRCLE: "circle",
  SQUARE: "square",
} as const;

export type IconButtonRef = ButtonRef;

export interface IconButtonProps extends Omit<ButtonProps, "text" | "variant"> {
  /**
   * The iconify icon name to display.
   * @required
   */
  icon: IconProps["icon"];

  /**
   * The variant (shape) of the icon button.
   * @default "square"
   */
  variant?: (typeof ICON_BUTTON_VARIANT_MAP)[keyof typeof ICON_BUTTON_VARIANT_MAP];
}
