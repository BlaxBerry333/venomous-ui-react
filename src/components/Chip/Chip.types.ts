import type { AvatarProps } from "@/components/Avatar";
import type { BoxProps, BoxRef } from "@/components/Box";

export type ChipRef = BoxRef;

export interface ChipProps extends Omit<BoxProps, "children" | "as" | "maxWidth"> {
  /**
   * The text to display in the chip.
   * @required
   */
  text: string;

  /**
   * Avatar props to display an avatar before the text.
   * @default undefined
   */
  AvatarProps?: AvatarProps;

  /**
   * The color of the chip ( hex string ).
   * @default undefined
   */
  color?: React.CSSProperties["color"];
}
