"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES, TEXT_COLORS } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { TYPOGRAPHY_TEXT_ELEMENT_MAP, type TypographyTextProps } from "./TypographyText.types";

export function useTypographyTextStyles({
  as: __as = TYPOGRAPHY_TEXT_ELEMENT_MAP.SPAN,
  color,
}: Partial<TypographyTextProps>) {
  const { BackgroundColors, BorderColors, TextColors, TypographySizes, TypographyLineHeights } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.TypographyText });

  const DynamicTagStyle = React.useMemo<React.CSSProperties>(() => {
    switch (__as) {
      case TYPOGRAPHY_TEXT_ELEMENT_MAP.CODE:
        return {
          fontWeight: "bold",
          fontSize: TypographySizes.TEXT.SMALL,
          lineHeight: TypographyLineHeights.TEXT.BASE,
          color: color || TextColors[1],
          backgroundColor: BackgroundColors[2],
          borderRadius: 4,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: BorderColors[1],
          padding: "2px 4px",
        };
      case TYPOGRAPHY_TEXT_ELEMENT_MAP.STRONG:
        return {
          fontWeight: "bold",
          fontSize: TypographySizes.TEXT.BASE,
          lineHeight: TypographyLineHeights.TEXT.LARGE,
          color: color || TextColors[1],
        };
      case TYPOGRAPHY_TEXT_ELEMENT_MAP.SMALL:
        return {
          fontSize: TypographySizes.TEXT.SMALL,
          lineHeight: TypographyLineHeights.TEXT.SMALL,
          color: color || TextColors[1],
        };
      case TYPOGRAPHY_TEXT_ELEMENT_MAP.MARK:
        return {
          fontWeight: "bold",
          fontSize: TypographySizes.TEXT.BASE,
          lineHeight: TypographyLineHeights.TEXT.BASE,
          color: color || TEXT_COLORS.light[1],
          backgroundColor: "#fff59d",
          padding: "1px 4px",
        };
      case TYPOGRAPHY_TEXT_ELEMENT_MAP.SPAN:
      default:
        return {
          fontSize: TypographySizes.TEXT.BASE,
          lineHeight: TypographyLineHeights.TEXT.BASE,
          color: color || TextColors[1],
        };
    }
  }, [__as, BackgroundColors, BorderColors, TypographySizes, TypographyLineHeights, TextColors, color]);

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default style --
      position: "relative",
      display: "inline",
      ...DynamicTagStyle,

      // -- custom style --
      ...customStyle,
    }),
    [DynamicTagStyle, customStyle],
  );

  return {
    componentStyle,
    __: {
      DynamicTagStyle,
      DynamicTextColor: componentStyle.color,
      DynamicTextSize: componentStyle.fontSize,
      DynamicLineHeight: componentStyle.lineHeight,
    },
  };
}
