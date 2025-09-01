"use client";

import React from "react";

import { Theme } from "@/components";
import { BackgroundColors, BorderColors, Shadows, TextColors, TypographySize } from "@/utils/design";

export default function useDesign() {
  const { themeMode } = Theme.useThemeMode();

  const design = React.useMemo(
    () => ({
      TextColors: TextColors[themeMode],
      BackgroundColors: BackgroundColors[themeMode],
      BorderColors: BorderColors[themeMode],
      Shadows: Shadows[themeMode],
      TypographySize,
    }),
    [themeMode],
  );

  return design;
}
