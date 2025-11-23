"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES, type TThemeMode } from "@/constants";
import { ThemeProviderContext } from "./ThemeProvider.context";
import { __getInitialThemeMode, __persistThemeMode } from "./ThemeProvider.hooks";
import type { ThemeProviderProps } from "./ThemeProvider.types";

const ThemeProvider = React.memo<ThemeProviderProps>(({ children, customDesigns, customStyles }) => {
  const [themeMode, setThemeModeState] = React.useState<TThemeMode>(__getInitialThemeMode);

  const setThemeMode = React.useCallback((mode: TThemeMode) => {
    setThemeModeState(mode);
    __persistThemeMode(mode);
  }, []);

  const contextValue = React.useMemo(
    () => ({
      customDesigns,
      customStyles,
      themeMode,
      setThemeMode,
    }),
    [customDesigns, customStyles, themeMode, setThemeMode],
  );

  return <ThemeProviderContext.Provider value={contextValue}>{children}</ThemeProviderContext.Provider>;
});

ThemeProvider.displayName = COMPONENT_DISPLAY_NAMES.ThemeProvider;
export default ThemeProvider;
