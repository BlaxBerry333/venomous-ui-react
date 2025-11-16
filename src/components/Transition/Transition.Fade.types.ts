import type { BoxProps, BoxRef } from "@/components/Box";

export type TransitionFadeRef = BoxRef;

export interface TransitionFadeProps extends Omit<BoxProps, "children" | "as" | "maxWidth"> {
  /**
   * The content to display inside.
   */
  children: React.ReactNode;

  /**
   * Whether the content is visible.
   * @default false
   */
  visible: boolean;

  /**
   * The duration of the animation ( ms ).
   * @default 300
   */
  duration?: number;

  /**
   * The callback function to execute when the animation finishes.
   */
  onFinish?: () => void;
}
