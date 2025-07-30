"use client";

import { Icon as Iconify } from "@iconify/react";
import React from "react";

import { SemanticColors, TextColors } from "@/utils";
import { Theme } from "../Theme";
import type { IconProps } from "./Icon.types";

const Icon = React.memo<IconProps>(({ style, icon, width = 20, semanticColor, ...props }) => {
  const { themeMode } = Theme.useThemeMode();
  const iconColor = React.useMemo<React.CSSProperties["color"]>(() => {
    return semanticColor ? SemanticColors[semanticColor] : TextColors[themeMode].primary;
  }, [themeMode, semanticColor]);

  return (
    <Iconify
      ssr
      icon={icon}
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
