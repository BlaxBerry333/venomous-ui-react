"use client";

import React from "react";

import { BackgroundColors, BorderColors, ThemeShadow } from "@/utils";
import { Theme } from "../Theme";
import { CardTagMap, CardVariantMap, type CardProps } from "./index.types";

const Card = React.memo<CardProps>(
  ({ children, style, as: Tag = CardTagMap.div, variant = CardVariantMap.elevated, ...props }) => {
    const { themeMode } = Theme.useThemeMode();

    const backgroundColor = React.useMemo<React.CSSProperties["backgroundColor"]>(() => {
      switch (variant) {
        case CardVariantMap.transparent:
          return "transparent";
        case CardVariantMap.elevated:
        case CardVariantMap.outlined:
        case CardVariantMap.frostedGlass:
        default:
          return BackgroundColors[themeMode].secondary;
      }
    }, [themeMode, variant]);

    const borderColor = React.useMemo<React.CSSProperties["borderColor"]>(() => {
      switch (variant) {
        case CardVariantMap.outlined:
        case CardVariantMap.transparent:
          return BorderColors[themeMode].secondary;
        case CardVariantMap.elevated:
        case CardVariantMap.frostedGlass:
        default:
          return "transparent";
      }
    }, [themeMode, variant]);

    const boxShadow = React.useMemo<React.CSSProperties["boxShadow"]>(() => {
      switch (variant) {
        case CardVariantMap.outlined:
        case CardVariantMap.transparent:
          return "none";
        case CardVariantMap.elevated:
        case CardVariantMap.frostedGlass:
        default:
          return ThemeShadow[themeMode].primary;
      }
    }, [themeMode, variant]);

    return (
      <Tag
        style={{
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          outlineWidth: 1.5,
          outlineStyle: "solid",
          outlineColor: borderColor,
          backgroundColor: backgroundColor,
          boxShadow: boxShadow,
          ...(variant === CardVariantMap.frostedGlass && {
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
