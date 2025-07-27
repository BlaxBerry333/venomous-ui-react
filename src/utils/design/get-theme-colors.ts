"use client";

import type { ThemeMode } from "@/utils/design/ThemeMode";
import { BackgroundColors, BorderColors, TextColors } from "@/utils/design/colors";

export const getThemeColors = (theme: ThemeMode) => ({
  background: BackgroundColors[theme],
  border: BorderColors[theme],
  text: TextColors[theme],
});
