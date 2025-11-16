"use client";

import React from "react";

import {
  BACKGROUND_COLORS,
  BORDER_COLORS,
  PALETTE_COLORS,
  SHADOW_STYLES,
  TEXT_COLORS,
  TYPOGRAPHY_LINE_HEIGHTS,
  TYPOGRAPHY_SIZES,
  type TThemeDesigns,
} from "@/constants";
import useCustomDesigns from "../useCustomDesigns";
import useThemeMode from "../useThemeMode";

export default function useThemeDesigns(): TThemeDesigns {
  const { themeMode } = useThemeMode();
  const customDesign = useCustomDesigns();

  return React.useMemo(
    () =>
      ({
        PaletteColors: customDesign?.PaletteColors || PALETTE_COLORS.WOLFSBANE,
        TextColors: customDesign?.TextColors || TEXT_COLORS[themeMode],
        BackgroundColors: customDesign?.BackgroundColors || BACKGROUND_COLORS[themeMode],
        BorderColors: customDesign?.BorderColors || BORDER_COLORS[themeMode],
        ShadowStyles: customDesign?.ShadowStyles || SHADOW_STYLES[themeMode],
        TypographySizes: customDesign?.TypographySizes || TYPOGRAPHY_SIZES,
        TypographyLineHeights: customDesign?.TypographyLineHeights || TYPOGRAPHY_LINE_HEIGHTS,
      }) satisfies TThemeDesigns,
    [themeMode, customDesign],
  );
}
