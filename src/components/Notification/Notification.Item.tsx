"use client";

import React from "react";

import clsx from "clsx";

import { IconButton } from "@/components/Buttons";
import { Icon } from "@/components/Icon";
import { Space } from "@/components/Space";
import { Typography } from "@/components/Typographies";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useNotificationItemStyles } from "./Notification.hooks";
import { NOTIFICATION_TYPE_MAP, type NotificationItemProps } from "./Notification.types";

/**
 * 不对外暴露
 */
const NotificationItem = React.memo<NotificationItemProps>(
  ({ className, style, id, type, title, description, closable, onClose }) => {
    const {
      componentStyle,
      __: { DynamicColor },
    } = useNotificationItemStyles({ type });

    const handleClose = React.useCallback(() => onClose(id), [id, onClose]);

    const notificationIcon = React.useMemo<string>(() => {
      switch (type) {
        case NOTIFICATION_TYPE_MAP.SUCCESS:
          return "solar:check-circle-outline";
        case NOTIFICATION_TYPE_MAP.ERROR:
          return "solar:danger-triangle-outline";
        case NOTIFICATION_TYPE_MAP.WARNING:
          return "solar:danger-circle-outline";
        case NOTIFICATION_TYPE_MAP.INFO:
        default:
          return "solar:info-circle-outline";
      }
    }, [type]);

    return (
      <Space.Flex
        spacing={16}
        className={clsx(COMPONENT_CLASSNAME_NAMES.NotificationItem, className)}
        style={{ ...componentStyle, ...style }}
      >
        <Icon icon={notificationIcon} color={DynamicColor} style={{ flexShrink: 0, marginLeft: 8 }} />

        <div style={{ flex: 1 }}>
          {title && <Typography.Paragraph weight="bold" text={title} />}
          {description && <Typography.Paragraph weight="normal" size="CAPTION" text={description} />}
        </div>

        {closable && (
          <IconButton
            icon="solar:close-circle-linear"
            onClick={handleClose}
            color={DynamicColor}
            style={{ color: "inherit", alignSelf: "flex-start" }}
          />
        )}
      </Space.Flex>
    );
  },
);

NotificationItem.displayName = COMPONENT_DISPLAY_NAMES.NotificationItem;
export default NotificationItem;
