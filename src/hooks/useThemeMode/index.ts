"use client";

import React from "react";

import { __clearPersistedThemeMode, useThemeProviderContext } from "@/components/Theme/ThemeProvider.hooks";
import { THEME_MODES } from "@/constants";
import { getSystemThemeMode } from "@/tools";

export default function useThemeMode() {
  const { themeMode, setThemeMode } = useThemeProviderContext();

  const toggleThemeMode = React.useCallback(() => {
    setThemeMode(themeMode === THEME_MODES.DARK ? THEME_MODES.LIGHT : THEME_MODES.DARK);
  }, [themeMode, setThemeMode]);

  const resetToSystemThemeMode = React.useCallback(() => {
    __clearPersistedThemeMode();
    const systemMode = getSystemThemeMode();
    setThemeMode(systemMode);
  }, [setThemeMode]);

  return React.useMemo(
    () => ({
      themeMode,
      setThemeMode,
      isDarkMode: themeMode === THEME_MODES.DARK,
      toggleThemeMode,
      resetToSystemThemeMode,
    }),
    [themeMode, setThemeMode, toggleThemeMode, resetToSystemThemeMode],
  );
}
