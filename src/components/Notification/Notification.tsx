"use client";

import clsx from "clsx";
import React from "react";
import { Toaster } from "sonner";

import { Theme } from "@/components";
import { Icon } from "../Icon";
import type { NotificationProps } from "./index.types";

const Notification = React.memo<NotificationProps>(({ position = "top-center", offset = 0, collapsable = false }) => {
  const { isDarkThemeMode } = Theme.useThemeMode();
  return (
    <Toaster
      closeButton
      richColors
      invert={isDarkThemeMode}
      visibleToasts={4}
      gap={8}
      position={position}
      offset={offset}
      mobileOffset={offset / 2}
      expand={!collapsable}
      className={clsx("Venomous-UI-React--Notification")}
      icons={{
        success: <Icon icon="solar:shield-check-line-duotone" color="success" />,
        error: <Icon icon="solar:shield-cross-line-duotone" color="error" />,
        warning: <Icon icon="solar:shield-warning-line-duotone" color="warning" />,
        info: <Icon icon="solar:info-circle-line-duotone" color="info" />,
      }}
    />
  );
});

Notification.displayName = "Notification";
export default Notification;
