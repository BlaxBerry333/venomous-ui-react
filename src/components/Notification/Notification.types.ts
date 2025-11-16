import type { BoxProps } from "../Box";

export const NOTIFICATION_TYPE_MAP = {
  SUCCESS: "SUCCESS",
  INFO: "INFO",
  WARNING: "WARNING",
  ERROR: "ERROR",
} as const;

export const NOTIFICATION_POSITION_MAP = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center",
} as const;

export type NotificationType = (typeof NOTIFICATION_TYPE_MAP)[keyof typeof NOTIFICATION_TYPE_MAP];
export type NotificationPosition = (typeof NOTIFICATION_POSITION_MAP)[keyof typeof NOTIFICATION_POSITION_MAP];

export interface NotificationProps extends Omit<BoxProps, "children" | "as" | "maxWidth"> {
  /**
   * The notification position.
   * @default "top-right"
   */
  position?: NotificationPosition;

  /**
   * The maximum number of notifications to display.
   * @default 5
   */
  maxCount?: number;

  /**
   * The offset from the edge of the screen ( px ).
   * @default 0
   */
  offset?: number;
}

/**
 * 不对外暴露
 */
export interface NotificationConfig {
  /**
   * The notification type.
   * @default "INFO"
   */
  type?: NotificationType;

  /**
   * The notification title.
   */
  title?: string;

  /**
   * The notification description.
   */
  description?: string;

  /**
   * The notification duration ( ms ).
   * @default 4500
   */
  duration?: number;

  /**
   * Whether the notification is closable.
   * @default true
   */
  closable?: boolean;
}

/**
 * 不对外暴露
 */
export interface Notification extends Required<Omit<NotificationConfig, "duration" | "closable">> {
  id: string;
  duration: number;
  closable: boolean;
  createdAt: number;
}

/**
 * 不对外暴露
 */
export type NotificationItemProps = Omit<BoxProps, "children" | "as" | "maxWidth"> &
  Notification & {
    onClose: (id: string) => void;
  };
