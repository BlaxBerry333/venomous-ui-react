import type { BoxProps, BoxRef } from "@/components/Box/Box.types";
import type { PageScrollProgressBarProps } from "@/components/Progress";

export type LayoutHeaderRef = BoxRef;

export interface LayoutHeaderProps extends Omit<BoxProps, "as" | "children"> {
  /**
   * Render logo element (left side).
   */
  renderLogo?: () => React.ReactNode;

  /**
   * Render actions element (right side: menu, buttons, user info, etc).
   */
  renderActions?: () => React.ReactNode;

  /**
   * Custom children (overrides renderLogo and renderActions).
   */
  children?: React.ReactNode;

  /**
   * Show page scroll progress bar.
   * @default true
   */
  showProgressBar?: boolean;

  /**
   * Progress bar props.
   */
  ProgressBarProps?: Partial<PageScrollProgressBarProps>;
}
