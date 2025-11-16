import type { BoxProps, BoxRef } from "@/components/Box/Box.types";

export const POPOVER_PLACEMENT_MAP = {
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right",
} as const;

export const POPOVER_TRIGGER_MAP = {
  CLICK: "click",
  HOVER: "hover",
} as const;

export type PopoverRef = BoxRef;

/**
 * Render props provided to children function.
 */
export interface PopoverRenderProps {
  /**
   * Ref to attach to the trigger element (required for positioning).
   * This ref can be safely cast to the specific element type you're using.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.Ref<any>;

  /**
   * Whether the popover is currently open.
   */
  open: boolean;

  /**
   * Function to toggle the popover open state.
   */
  onToggle: () => void;
}

export interface PopoverProps extends Omit<BoxProps, "as" | "maxWidth" | "children" | "content"> {
  /**
   * Render props function to render the trigger element.
   */
  children: (props: PopoverRenderProps) => React.ReactElement;

  /**
   * The content to display inside the popover.
   */
  content: React.ReactNode;

  /**
   * The trigger type of how to show the content.
   * @default "click"
   */
  trigger?: (typeof POPOVER_TRIGGER_MAP)[keyof typeof POPOVER_TRIGGER_MAP];

  /**
   * The placement of the popover.
   * @default "bottom"
   */
  placement?: (typeof POPOVER_PLACEMENT_MAP)[keyof typeof POPOVER_PLACEMENT_MAP];

  /**
   * The offset between the trigger element and the popover ( px ).
   * @default 2
   */
  offset?: number;

  /**
   * Whether to close the popover when clicking outside.
   * @default true
   */
  autoCloseOnClickOutside?: boolean;

  /**
   * Default open state (uncontrolled mode).
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Controlled open state.
   */
  open?: boolean;

  /**
   * Callback fired when the open state changes.
   */
  onOpenChange?: (open: boolean) => void;
}
