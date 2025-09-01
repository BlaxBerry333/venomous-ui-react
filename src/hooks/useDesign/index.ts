"use client";

import React from "react";

import { Theme } from "@/components";
import { BACKGROUND_COLORS, BORDER_COLORS, SHADOWS, TEXT_COLORS, TYPOGRAPHY_SIZES } from "@/utils/design";

export default function useDesign() {
  const { themeMode } = Theme.useThemeMode();

  const design = React.useMemo(
    () => ({
      TextColors: TEXT_COLORS[themeMode],
      BackgroundColors: BACKGROUND_COLORS[themeMode],
      BorderColors: BORDER_COLORS[themeMode],
      Shadows: SHADOWS[themeMode],
      TypographySize: TYPOGRAPHY_SIZES,
    }),
    [themeMode],
  );

  return design;
}
