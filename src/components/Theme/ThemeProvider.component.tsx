"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES, type TThemeMode } from "@/constants";
import { getSystemThemeMode } from "@/tools";
import { ThemeProviderContext } from "./ThemeProvider.context";
import type { ThemeProviderProps } from "./ThemeProvider.types";

const ThemeProvider = React.memo<ThemeProviderProps>(({ children, customDesigns, customStyles }) => {
  const [themeMode, setThemeMode] = React.useState<TThemeMode>(getSystemThemeMode());

  const contextValue = React.useMemo(
    () => ({
      customDesigns,
      customStyles,
      themeMode,
      setThemeMode,
    }),
    [customDesigns, customStyles, themeMode],
  );

  return <ThemeProviderContext.Provider value={contextValue}>{children}</ThemeProviderContext.Provider>;
});

ThemeProvider.displayName = COMPONENT_DISPLAY_NAMES.ThemeProvider;
export default ThemeProvider;
