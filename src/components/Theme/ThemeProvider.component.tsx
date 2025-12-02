"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES, type TPaletteColors, type TThemeMode } from "@/constants";
import { ThemeProviderContext } from "./ThemeProvider.context";
import {
  __getInitialThemeMode,
  __getInitialThemePalette,
  __persistThemeMode,
  __persistThemePalette,
} from "./ThemeProvider.hooks";
import type { ThemeProviderProps } from "./ThemeProvider.types";

const ThemeProvider = React.memo<ThemeProviderProps>(({ children, customDesigns, customComponentProps }) => {
  // ========== ThemeMode 状态 ==========
  const [themeMode, setThemeModeState] = React.useState<TThemeMode>(__getInitialThemeMode);

  const setThemeMode = React.useCallback((mode: TThemeMode) => {
    setThemeModeState(mode);
    __persistThemeMode(mode);
  }, []);

  // ========== ThemePalette 状态 ==========
  const [themePalette, setThemePaletteState] = React.useState<TPaletteColors>(() =>
    __getInitialThemePalette(customDesigns?.PaletteColors),
  );

  const setThemePalette = React.useCallback((palette: TPaletteColors) => {
    setThemePaletteState(palette);
    __persistThemePalette(palette);
  }, []);

  // ========== Context Value ==========
  const contextValue = React.useMemo(
    () => ({
      customDesigns,
      customComponentProps,
      themeMode,
      setThemeMode,
      themePalette,
      setThemePalette,
    }),
    [customDesigns, customComponentProps, themeMode, setThemeMode, themePalette, setThemePalette],
  );

  return <ThemeProviderContext.Provider value={contextValue}>{children}</ThemeProviderContext.Provider>;
});

ThemeProvider.displayName = COMPONENT_DISPLAY_NAMES.ThemeProvider;
export default ThemeProvider;
