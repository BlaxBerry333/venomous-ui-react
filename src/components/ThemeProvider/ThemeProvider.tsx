"use client";

import React from "react";

import { getSystemThemeMode, ThemeColor, ThemeMode } from "@/utils";
import { _getStoredThemeColor, _getStoredThemeMode } from "./_store";
import { useThemeDesignInject } from "./_useThemeDesignInject";
import type { ThemeContextType, ThemeProviderProps } from "./index.types";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = React.memo<ThemeProviderProps>(({ children, defaultThemeColor, defaultThemeMode }) => {
  const [themeMode, setThemeMode] = React.useState<ThemeMode>(() => {
    const stored = _getStoredThemeMode();
    return stored || defaultThemeMode || getSystemThemeMode();
  });

  const [themeColor, setThemeColor] = React.useState<ThemeColor>(() => {
    const stored = _getStoredThemeColor();
    return stored || defaultThemeColor || ThemeColor.JadeAnaconda;
  });

  useThemeDesignInject();

  const memoryValue = React.useMemo<ThemeContextType>(
    () => ({
      themeMode,
      isDarkThemeMode: themeMode === ThemeMode.Dark,
      setThemeMode,
      toggleThemeMode: () => setThemeMode((s) => (s === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark)),
      themeColor,
      setThemeColor,
    }),
    [themeMode, setThemeMode, themeColor, setThemeColor],
  );

  return <ThemeContext value={memoryValue}>{children}</ThemeContext>;
});

ThemeProvider.displayName = "ThemeProvider";
export default ThemeProvider;
