import type { BoxProps, BoxRef } from "@/components/Box";

export const CHIP_VARIANT_MAP = {
  CONTAINED: "contained",
  OUTLINED: "outlined",
} as const;

export type TChipVariant = (typeof CHIP_VARIANT_MAP)[keyof typeof CHIP_VARIANT_MAP];

export type ChipRef = BoxRef;

export interface ChipProps extends Omit<BoxProps, "children" | "as" | "maxWidth"> {
  /**
   * The text to display in the chip.
   * @required
   */
  label: string;

  /**
   * The element to display at the start of the chip.
   * @default undefined
   */
  StartIcon?: React.ReactNode;

  /**
   * The element to display at the end of the chip.
   * @default undefined
   */
  EndIcon?: React.ReactNode;

  /**
   * The variant of the chip.
   * - "contained": solid background color, no border
   * - "outlined": transparent background, border with the color
   * @default "contained"
   */
  variant?: TChipVariant;

  /**
   * The color of the chip ( hex string ).
   * @default undefined
   */
  color?: React.CSSProperties["color"];
}
