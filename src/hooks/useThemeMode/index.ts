"use client";

import React from "react";

import { useThemeProviderContext } from "@/components/Theme/ThemeProvider.hooks";
import { THEME_MODES } from "@/constants";

export default function useThemeMode() {
  const { themeMode, setThemeMode } = useThemeProviderContext();

  return React.useMemo(
    () => ({
      themeMode,
      setThemeMode,
      isDarkMode: themeMode === THEME_MODES.DARK,
      toggleThemeMode: () => setThemeMode(themeMode === THEME_MODES.DARK ? THEME_MODES.LIGHT : THEME_MODES.DARK),
    }),
    [themeMode, setThemeMode],
  );
}
