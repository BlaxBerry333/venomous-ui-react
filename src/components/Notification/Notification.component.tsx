"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { Portal } from "@/components/Portal";
import { Transition, type TransitionSlideProps } from "@/components/Transition";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useNotificationContainerStyles, useNotificationManager } from "./Notification.hooks";
import NotificationItem from "./Notification.Item";
import { NOTIFICATION_POSITION_MAP, type NotificationProps } from "./Notification.types";

const Notification = React.memo<NotificationProps>(
  ({ className, style, position: propPosition, maxCount: propMaxCount, offset: propOffset }) => {
    // ========== 获取 customComponentProps ==========
    const customComponentProps = useCustomComponentProps<NotificationProps>({
      displayName: COMPONENT_DISPLAY_NAMES.Notification,
    });

    // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
    const position = propPosition ?? customComponentProps.position ?? "top-right";
    const maxCount = propMaxCount ?? customComponentProps.maxCount ?? 5;
    const offset = propOffset ?? customComponentProps.offset ?? 0;

    const { componentStyle } = useNotificationContainerStyles({ position, offset });
    const { notifications, handleClose } = useNotificationManager({ maxCount });

    const slideDirection = React.useMemo<TransitionSlideProps["direction"]>(
      () => __notificationPositionToSlideDirection(position),
      [position],
    );

    if (notifications.length === 0) {
      return null;
    }

    return (
      <Portal>
        <Box
          as="div"
          className={clsx(COMPONENT_CLASSNAME_NAMES.Notification, className)}
          style={{ ...componentStyle, ...style }}
        >
          {notifications.map((notification) => (
            <Transition.Slide
              key={notification.id}
              visible={notification.visible}
              direction={slideDirection}
              duration={250}
              distance={20}
              style={{ marginBottom: 12 }}
            >
              <NotificationItem {...notification} onClose={handleClose} />
            </Transition.Slide>
          ))}
        </Box>
      </Portal>
    );
  },
);

Notification.displayName = COMPONENT_DISPLAY_NAMES.Notification;
export default Notification;

function __notificationPositionToSlideDirection(
  position: NotificationProps["position"],
): TransitionSlideProps["direction"] {
  switch (position) {
    case NOTIFICATION_POSITION_MAP.TOP_LEFT:
    case NOTIFICATION_POSITION_MAP.BOTTOM_LEFT:
      return "left";
    case NOTIFICATION_POSITION_MAP.TOP_CENTER:
      return "down";
    case NOTIFICATION_POSITION_MAP.BOTTOM_CENTER:
      return "up";
    case NOTIFICATION_POSITION_MAP.TOP_RIGHT:
    case NOTIFICATION_POSITION_MAP.BOTTOM_RIGHT:
    default:
      return "right";
  }
}
