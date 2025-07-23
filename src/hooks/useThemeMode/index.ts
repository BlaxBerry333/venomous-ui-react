import React from "react";

import { _setStoredThemeMode } from "@/components/ThemeProvider/_store";
import { useThemeContext } from "@/components/ThemeProvider/_useThemeContext";
import { ThemeMode } from "@/utils";

export default function useThemeMode() {
  const context = useThemeContext();

  const setThemeMode = React.useCallback(
    (themeMode: ThemeMode) => {
      context.setThemeMode(themeMode);
      _setStoredThemeMode(themeMode);
    },
    [context],
  );

  const toggleThemeMode = React.useCallback(() => {
    context.toggleThemeMode();
    _setStoredThemeMode(context.themeMode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark);
  }, [context]);

  return {
    themeMode: context.themeMode,
    isDarkThemeMode: context.isDarkThemeMode,
    setThemeMode,
    toggleThemeMode,
  };
}
