"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import type { IconProps } from "./Icon.types";

export function useIconStyles({ width, color }: Partial<IconProps>) {
  const { TextColors } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Icon });

  const DynamicSizeStyles = React.useMemo<React.CSSProperties>(() => {
    return {
      width,
      minWidth: width,
      height: width,
      minHeight: width,
    };
  }, [width]);

  const DynamicColorStyles = React.useMemo<React.CSSProperties>(() => {
    return {
      color: color || "inherit",
    };
  }, [color, TextColors]);

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default style --
      userSelect: "none",
      flexShrink: 0,
      display: "inline-flex",
      ...DynamicSizeStyles,
      ...DynamicColorStyles,

      // -- custom style --
      ...customStyle,
    }),
    [DynamicSizeStyles, DynamicColorStyles, customStyle],
  );

  return {
    componentStyle,
    __: {
      DynamicSizeStyles,
      DynamicColorStyles,
    },
  };
}
