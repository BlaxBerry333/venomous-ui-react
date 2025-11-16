import type { BoxProps, BoxRef } from "@/components/Box/Box.types";

export type SpaceFlexRef = BoxRef;

export interface SpaceFlexProps extends BoxProps {
  /**
   * Whether to use Vertical layout ( flex-direction: column ).
   * @default false
   */
  column?: boolean;

  /**
   * Gap space between menu items ( px ).
   * @default 0
   */
  spacing?: number;

  /**
   * The elements to be rendered inside.
   */
  children?: React.ReactNode;
}
