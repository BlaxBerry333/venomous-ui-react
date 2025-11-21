import type { BoxProps } from "../Box";
export declare const NOTIFICATION_TYPE_MAP: {
    readonly SUCCESS: "SUCCESS";
    readonly INFO: "INFO";
    readonly WARNING: "WARNING";
    readonly ERROR: "ERROR";
};
export declare const NOTIFICATION_POSITION_MAP: {
    readonly TOP_LEFT: "top-left";
    readonly TOP_RIGHT: "top-right";
    readonly TOP_CENTER: "top-center";
    readonly BOTTOM_LEFT: "bottom-left";
    readonly BOTTOM_RIGHT: "bottom-right";
    readonly BOTTOM_CENTER: "bottom-center";
};
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
export type NotificationItemProps = Omit<BoxProps, "children" | "as" | "maxWidth"> & Notification & {
    onClose: (id: string) => void;
};
//# sourceMappingURL=Notification.types.d.ts.map