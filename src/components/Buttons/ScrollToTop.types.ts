import type { IconButtonProps, IconButtonRef } from "./IconButton.types";

export type ScrollToTopRef = IconButtonRef;

export interface ScrollToTopProps extends Omit<IconButtonProps, "icon" | "shape"> {
  /**
   * Scroll distance to show the button ( px ).
   * @default 300
   */
  distance?: number;

  /**
   * Custom button content (overrides default icon).
   */
  children?: React.ReactNode;
}
