"use client";

import React from "react";

import { BackgroundColors, BorderColors, ThemeShadow } from "@/utils";
import { Theme } from "../Theme";
import { CardTagMap, type CardProps } from "./index.types";

const Card = React.memo<CardProps>(
  ({
    children,
    style,
    isTransparent = false,
    isFrostedGlass = false,
    isOutline = false,
    as: Tag = CardTagMap.div,
    ...props
  }) => {
    const { themeMode } = Theme.useThemeMode();

    return (
      <Tag
        style={{
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          outlineWidth: 1.5,
          outlineStyle: "solid",
          outlineColor: isOutline ? BorderColors[themeMode].secondary : "transparent",
          backgroundColor: isTransparent ? "transparent" : BackgroundColors[themeMode].secondary,
          boxShadow: isOutline ? "none" : ThemeShadow[themeMode].primary,
          ...(isFrostedGlass && {
            backdropFilter: "blur(8px) brightness(0.8)",
            WebkitBackdropFilter: "blur(8px) brightness(0.8)",
          }),
          ...style,
        }}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

Card.displayName = "Card";
export default Card;
