import React from "react";
import { type Notification, type NotificationConfig, type NotificationProps } from "./Notification.types";
/**
 * 不对外暴露
 */
export declare function useNotificationContainerStyles({ position, offset }: Partial<NotificationProps>): {
    componentStyle: React.CSSProperties;
};
/**
 * 不对外暴露
 */
export declare function useNotificationItemStyles({ type }: Required<Pick<NotificationConfig, "type">>): {
    componentStyle: React.CSSProperties;
    __: {
        DynamicColor: "#4caf50" | "#f44336" | "#ff9800" | "#2196f3";
    };
};
interface __NotificationWithVisibility extends Notification {
    visible: boolean;
}
/**
 * 不对外暴露
 */
export declare function useNotificationManager({ maxCount }: {
    maxCount?: number;
}): {
    notifications: __NotificationWithVisibility[];
    handleClose: (id: string) => void;
};
export {};
//# sourceMappingURL=Notification.hooks.d.ts.map