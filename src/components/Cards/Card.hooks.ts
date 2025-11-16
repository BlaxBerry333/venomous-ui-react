"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { CARD_VARIANT_MAP, type CardProps } from "./Card.types";

export function useCardStyles({
  variant = "contained",
  clickable,
}: Partial<CardProps> & {
  clickable: boolean;
}) {
  const { BackgroundColors, BorderColors, ShadowStyles } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Card });

  const DynamicVariantStyles = React.useMemo<React.CSSProperties>(() => {
    switch (variant) {
      case CARD_VARIANT_MAP.OUTLINED:
        return {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: BorderColors[1],
          boxShadow: "none",
        };

      case CARD_VARIANT_MAP.ELEVATED:
        return {
          backgroundColor: BackgroundColors[2],
          borderWidth: 0,
          borderStyle: "none",
          boxShadow: ShadowStyles[1],
        };

      case CARD_VARIANT_MAP.CONTAINED:
      default:
        return {
          backgroundColor: BackgroundColors[2],
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: BorderColors[1],
          boxShadow: ShadowStyles[1],
        };
    }
  }, [variant, BackgroundColors, BorderColors, ShadowStyles]);

  const DynamicClickableStyles = React.useMemo<React.CSSProperties>(() => {
    return !clickable
      ? { cursor: "default", userSelect: "auto" }
      : {
          cursor: "pointer",
          userSelect: "none",
        };
  }, [clickable]);

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default style --
      borderRadius: 8,
      padding: 16,
      overflow: "hidden",
      ...DynamicVariantStyles,
      ...DynamicClickableStyles,

      // -- custom style override --
      ...customStyle,
    }),
    [DynamicVariantStyles, DynamicClickableStyles, customStyle],
  );

  return {
    componentStyle,
    __: {
      DynamicVariantStyles,
    },
  };
}
