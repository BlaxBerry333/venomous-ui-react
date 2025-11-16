"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES, SEMANTIC_COLORS } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { BADGE_PLACEMENT_MAP, BADGE_VARIANT_MAP, type BadgeProps } from "./Badge.types";

export function useBadgeStyles({
  variant = "text",
  placement = "top-right",
  offset = 65,
  color: badgeColor = SEMANTIC_COLORS.ERROR,
  isStandalone = false,
}: Partial<BadgeProps> & { isStandalone?: boolean }) {
  const { TypographySizes } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Badge });

  const offsetPercent = React.useMemo(() => `${offset}%`, [offset]);

  const DynamicPlacementStyle = React.useMemo<React.CSSProperties>(() => {
    switch (placement) {
      case BADGE_PLACEMENT_MAP.TOP_LEFT:
        return {
          top: 0,
          left: 0,
          transform: `translate(-${offsetPercent}, -${offsetPercent})`,
        };
      case BADGE_PLACEMENT_MAP.BOTTOM_RIGHT:
        return {
          bottom: 0,
          right: 0,
          transform: `translate(${offsetPercent}, ${offsetPercent})`,
        };
      case BADGE_PLACEMENT_MAP.BOTTOM_LEFT:
        return {
          bottom: 0,
          left: 0,
          transform: `translate(-${offsetPercent}, ${offsetPercent})`,
        };
      case BADGE_PLACEMENT_MAP.TOP_RIGHT:
      default:
        return {
          top: 0,
          right: 0,
          transform: `translate(${offsetPercent}, -${offsetPercent})`,
        };
    }
  }, [placement, offsetPercent]);

  const DynamicVariantStyles = React.useMemo<React.CSSProperties>(() => {
    switch (variant) {
      case BADGE_VARIANT_MAP.DOT:
        return {
          width: 10,
          height: 10,
          minWidth: 8,
          padding: 0,
          borderRadius: "50%",
        };
      case BADGE_VARIANT_MAP.TEXT:
        return {
          minWidth: 20,
          height: 20,
          padding: "0 6px",
          fontSize: TypographySizes.TEXT.CAPTION,
          lineHeight: "20px",
          borderRadius: 10,
        };
      default:
        return {};
    }
  }, [variant, TypographySizes]);

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      userSelect: "none",

      // -- default style --
      display: "inline-flex",
      position: isStandalone ? "static" : "absolute",
      zIndex: isStandalone ? "auto" : 1,
      ...(!isStandalone && DynamicPlacementStyle),
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      backgroundColor: badgeColor,
      color: "#FFFFFF",
      ...DynamicVariantStyles,

      // -- custom style --
      ...customStyle,
    }),
    [customStyle, badgeColor, DynamicPlacementStyle, DynamicVariantStyles, isStandalone],
  );

  return {
    componentStyle,
    __: {
      DynamicPlacementStyle,
      DynamicVariantStyles,
    },
  };
}
