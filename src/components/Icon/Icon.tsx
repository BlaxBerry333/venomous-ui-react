"use client";

import { Icon as Iconify } from "@iconify/react";
import clsx from "clsx";
import React from "react";

import { SemanticColors, TextColors } from "@/utils";
import { Theme } from "../Theme";
import type { IconProps } from "./Icon.types";

const Icon = React.memo<IconProps>(({ className, style, icon, width = 20, semanticColor, ...props }) => {
  const { themeMode } = Theme.useThemeMode();
  const iconColor = React.useMemo<React.CSSProperties["color"]>(() => {
    return semanticColor ? SemanticColors[semanticColor] : TextColors[themeMode].primary;
  }, [themeMode, semanticColor]);

  return (
    <Iconify
      ssr
      icon={icon}
      className={clsx("Venomous-UI-React--Layout.Icon", className)}
      style={{
        width,
        minWidth: width,
        height: width,
        minHeight: width,
        flexShrink: 0,
        display: "inline-flex",
        color: iconColor,
        ...style,
      }}
      {...props}
    />
  );
});

Icon.displayName = "Icon";
export default Icon;
