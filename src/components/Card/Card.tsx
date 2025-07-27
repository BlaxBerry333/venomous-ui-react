"use client";

import React from "react";

import { BackgroundColors, BorderColors, ThemeShadow } from "@/utils";
import { Theme } from "../Theme";
import type { CardProps } from "./index.types";

const Card = React.memo<CardProps>(
  ({ children, style, isTransparent = false, isFrostedGlass = false, isOutline = false, ...props }) => {
    const { themeMode } = Theme.useThemeMode();

    return (
      <div
        style={{
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: isTransparent ? "transparent" : BackgroundColors[themeMode].secondary,
          boxShadow: isOutline ? "none" : ThemeShadow[themeMode].base,
          backdropFilter: isFrostedGlass ? "blur(8px) brightness(0.8)" : "none",
          WebkitBackdropFilter: isFrostedGlass ? "blur(8px) brightness(0.8)" : "none",
          outlineWidth: 1.5,
          outlineStyle: "solid",
          outlineColor: BorderColors[themeMode].primary,
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
