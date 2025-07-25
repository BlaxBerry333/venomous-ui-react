"use client";

import React from "react";

import { BackgroundColors, BorderColors, ShadowColors } from "@/utils";
import { Theme } from "../Theme";
import type { CardProps } from "./index.types";

const Card = React.memo<CardProps>(
  ({ children, style, isTransparent = false, isFrostedGlass = false, isOutline = false, ...props }) => {
    const { isDarkThemeMode } = Theme.useThemeMode();

    const borderColor = isDarkThemeMode ? BorderColors.darkMode : BorderColors.lightMode;
    const backgroundColor = isDarkThemeMode ? BackgroundColors.darkMode : BackgroundColors.lightMode;
    const shadowColor = isOutline ? "none" : isDarkThemeMode ? ShadowColors.darkMode : ShadowColors.lightMode;

    return (
      <div
        style={{
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          boxShadow: shadowColor,
          backgroundColor: isTransparent ? "transparent" : backgroundColor,
          backdropFilter: isFrostedGlass ? "blur(8px) brightness(0.8)" : "none",
          WebkitBackdropFilter: isFrostedGlass ? "blur(8px) brightness(0.8)" : "none",
          border: `1px solid ${borderColor}`,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
export default Card;
