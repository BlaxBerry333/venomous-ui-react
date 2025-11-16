"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES, THEME_BREAKPOINT_RANGES, type TThemeBreakpoint } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";

export function useBoxStyles({ maxWidth }: { maxWidth?: TThemeBreakpoint }) {
  const { TextColors } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Box });

  const DynamicMaxWidthStyles = React.useMemo<React.CSSProperties>(() => {
    if (!maxWidth) {
      return {};
    }
    if (maxWidth === "XXL") {
      return {
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
      };
    }
    return {
      width: "100%",
      maxWidth: THEME_BREAKPOINT_RANGES[maxWidth][1],
      margin: "0 auto",
    };
  }, [maxWidth]);

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default style --
      position: "relative",
      color: TextColors[1],
      backgroundColor: "transparent",
      ...DynamicMaxWidthStyles,

      // -- custom style --
      ...customStyle,
    }),
    [TextColors, DynamicMaxWidthStyles, customStyle],
  );

  return {
    componentStyle,
  };
}
