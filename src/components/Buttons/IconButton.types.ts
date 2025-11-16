import type { IconProps } from "@/components/Icon";
import { type ButtonProps, type ButtonRef } from "./Button.types";

export const ICON_BUTTON_SHAPE_MAP = {
  CIRCLE: "circle",
  SQUARE: "square",
} as const;

export type IconButtonRef = ButtonRef;

export interface IconButtonProps extends Omit<ButtonProps, "text"> {
  /**
   * The iconify icon name to display.
   * @required
   */
  icon: IconProps["icon"];

  /**
   * The shape of the button.
   * @default "square"
   */
  shape?: (typeof ICON_BUTTON_SHAPE_MAP)[keyof typeof ICON_BUTTON_SHAPE_MAP];
}
