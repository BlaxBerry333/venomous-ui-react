"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES, SEMANTIC_COLORS } from "@/constants";
import { useThemeDesigns, useThemeMode } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { getDarker, getLighter } from "@/tools";
import NotificationManager from "./Notification.manager";
import {
  NOTIFICATION_POSITION_MAP,
  type Notification,
  type NotificationConfig,
  type NotificationProps,
} from "./Notification.types";

/**
 * 不对外暴露
 */
export function useNotificationContainerStyles({ position = "top-right", offset = 0 }: Partial<NotificationProps>) {
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Notification });

  const DynamicPositionStyles = React.useMemo<React.CSSProperties>(() => {
    switch (position) {
      case NOTIFICATION_POSITION_MAP.TOP_RIGHT:
        return { top: offset, right: offset };
      case NOTIFICATION_POSITION_MAP.TOP_LEFT:
        return { top: offset, left: offset };
      case NOTIFICATION_POSITION_MAP.TOP_CENTER:
        return { top: offset, left: "50%", transform: "translateX(-50%)" };
      case NOTIFICATION_POSITION_MAP.BOTTOM_RIGHT:
        return { bottom: offset, right: offset };
      case NOTIFICATION_POSITION_MAP.BOTTOM_LEFT:
        return { bottom: offset, left: offset };
      case NOTIFICATION_POSITION_MAP.BOTTOM_CENTER:
        return { bottom: offset, left: "50%", transform: "translateX(-50%)" };
      default:
        return { top: offset, right: offset };
    }
  }, [position, offset]);

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      // -- default style --
      boxSizing: "border-box",
      position: "fixed",
      zIndex: 9999,
      width: 400,
      maxWidth: "calc(100vw - 40px)",
      ...DynamicPositionStyles,

      // -- custom style --
      ...customStyle,
    }),
    [DynamicPositionStyles, customStyle],
  );

  return {
    componentStyle,
  };
}

/**
 * 不对外暴露
 */
export function useNotificationItemStyles({ type }: Required<Pick<NotificationConfig, "type">>) {
  const { isDarkMode } = useThemeMode();
  const { ShadowStyles } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.NotificationItem });

  const DynamicColor = React.useMemo(() => SEMANTIC_COLORS[type], [type]);

  const componentStyle = React.useMemo<React.CSSProperties>(() => {
    return {
      // -- default style --
      padding: "16px 4px",
      borderRadius: 4,
      minWidth: 300,
      maxWidth: 400,
      cursor: "default",
      backgroundColor: isDarkMode ? getDarker(DynamicColor, 0.85) : getLighter(DynamicColor, 0.92),
      borderLeftColor: DynamicColor,
      borderLeftWidth: 8,
      borderLeftStyle: "solid",
      boxShadow: ShadowStyles[2],

      // -- custom style --
      ...customStyle,
    };
  }, [type, isDarkMode, ShadowStyles, DynamicColor, customStyle]);

  return {
    componentStyle,
    __: {
      DynamicColor,
    },
  };
}

interface __NotificationWithVisibility extends Notification {
  visible: boolean;
}

/**
 * 不对外暴露
 */
export function useNotificationManager({ maxCount = 5 }: { maxCount?: number }) {
  const [notifications, setNotifications] = React.useState<__NotificationWithVisibility[]>([]);

  React.useEffect(() => {
    const timers = new Map<string, ReturnType<typeof setTimeout>>();

    const unsubscribe = NotificationManager.subscribe((notification) => {
      // 添加通知，初始 visible=false
      setNotifications((prev) => {
        const newList = [...prev, { ...notification, visible: false }];
        return newList.length > maxCount ? newList.slice(newList.length - maxCount) : newList;
      });

      // 下一帧设置 visible=true，触发进入动画
      requestAnimationFrame(() => {
        setNotifications((prev) => prev.map((n) => (n.id === notification.id ? { ...n, visible: true } : n)));
      });

      // 自动移除
      if (notification.duration > 0) {
        const timer = setTimeout(() => {
          // 先触发退出动画
          setNotifications((prev) => prev.map((n) => (n.id === notification.id ? { ...n, visible: false } : n)));

          // 等待动画完成后真正移除
          setTimeout(() => {
            setNotifications((prev) => prev.filter((n) => n.id !== notification.id));
            timers.delete(notification.id);
          }, 200);
        }, notification.duration);
        timers.set(notification.id, timer);
      }
    });

    return () => {
      unsubscribe();
      // 清理所有 timer，防止内存泄漏
      timers.forEach((timer) => clearTimeout(timer));
      timers.clear();
    };
  }, [maxCount]);

  // 手动关闭
  const handleClose = React.useCallback((id: string) => {
    // 先触发退出动画
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, visible: false } : n)));

    // 等待动画完成后真正移除
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 200);
  }, []);

  return {
    notifications,
    handleClose,
  };
}
