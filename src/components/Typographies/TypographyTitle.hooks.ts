"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { __TITLE_ELEMENT_TO_TYPOGRAPHY_SIZE_MAP } from "@/constants/designs/TYPOGRAPHY_SIZES";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { TYPOGRAPHY_TITLE_ELEMENT_MAP, type TypographyTitleProps } from "./TypographyTitle.types";

export function useTypographyTitleStyles({
  as: __as = TYPOGRAPHY_TITLE_ELEMENT_MAP.H3,
  color,
}: Omit<TypographyTitleProps, "text">) {
  const { TextColors, TypographySizes, TypographyLineHeights } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.TypographyTitle });

  const DynamicTagStyles = React.useMemo<React.CSSProperties>(() => {
    const sizeKey = __TITLE_ELEMENT_TO_TYPOGRAPHY_SIZE_MAP[__as];
    return {
      fontSize: TypographySizes.TITLE[sizeKey],
      lineHeight: TypographyLineHeights.TITLE[sizeKey],
    };
  }, [__as, TypographySizes, TypographyLineHeights]);

  const DynamicColorStyles = React.useMemo<React.CSSProperties>(() => {
    return {
      color: color || TextColors[1],
    };
  }, [color, TextColors]);

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default style --
      position: "relative",
      display: "block",
      fontWeight: "bold",
      ...DynamicTagStyles,
      ...DynamicColorStyles,

      // -- custom style --
      ...customStyle,
    }),
    [DynamicTagStyles, DynamicColorStyles, customStyle],
  );

  return {
    componentStyle,
    __: {
      DynamicTagStyles,
      DynamicColorStyles,
    },
  };
}
