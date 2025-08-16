"use client";

import React from "react";

import { ThemeColor, ThemeMode } from "@/utils";
import ThemeContext, { type ThemeContextValueType } from "./ThemeContext";

const DEFAULT_THEME_MODE = ThemeMode.Light;
const DEFAULT_THEME_COLOR = ThemeColor.EmeraldMamba;
const STORAGE_KEY = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR",
};

interface ThemeModeProviderProps {
  children: React.ReactNode;
  defaultThemeMode?: ThemeMode;
  defaultThemeColor?: ThemeColor;
  storageKey?: {
    THEME_MODE: string;
    THEME_COLOR: string;
  };
}

export default function ThemeProvider({
  children,
  defaultThemeMode = DEFAULT_THEME_MODE,
  defaultThemeColor = DEFAULT_THEME_COLOR,
  storageKey = STORAGE_KEY,
}: ThemeModeProviderProps) {
  const [mounted, setMounted] = React.useState<boolean>(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const [themeMode, setThemeModeState] = React.useState<ThemeMode>(defaultThemeMode);
  const [themeColor, setThemeColorState] = React.useState<ThemeColor>(defaultThemeColor);

  const setThemeMode = React.useCallback((newTheme: ThemeMode) => {
    setThemeModeState(newTheme);
  }, []);

  const toggleThemeMode = React.useCallback(() => {
    setThemeModeState((current) => (current === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark));
  }, []);

  const resetThemeMode = React.useCallback(() => {
    setThemeModeState(defaultThemeMode);
  }, [defaultThemeMode]);

  const setThemeColor = React.useCallback((newThemeColor: ThemeColor) => {
    setThemeColorState(newThemeColor);
  }, []);

  const resetThemeColor = React.useCallback(() => {
    setThemeColorState(defaultThemeColor);
  }, [defaultThemeColor]);

  React.useEffect(() => {
    if (mounted) {
      const storedThemeMode = localStorage.getItem(storageKey.THEME_MODE);
      if (storedThemeMode && Object.values(ThemeMode).includes(storedThemeMode as ThemeMode)) {
        setThemeModeState(storedThemeMode as ThemeMode);
      }
      const storedThemeColor = localStorage.getItem(storageKey.THEME_COLOR);
      if (storedThemeColor && Object.values(ThemeColor).includes(storedThemeColor as ThemeColor)) {
        setThemeColorState(storedThemeColor as ThemeColor);
      }
    }
  }, [mounted, storageKey.THEME_COLOR, storageKey.THEME_MODE]);

  React.useEffect(() => {
    if (mounted) {
      localStorage.setItem(storageKey.THEME_MODE, themeMode);
      localStorage.setItem(storageKey.THEME_COLOR, themeColor);
    }
  }, [mounted, storageKey.THEME_MODE, storageKey.THEME_COLOR, themeMode, themeColor]);

  const contextValue = React.useMemo<ThemeContextValueType>(
    () => ({
      themeMode,
      setThemeMode,
      toggleThemeMode,
      resetThemeMode,
      isDarkThemeMode: themeMode === ThemeMode.Dark,
      themeColor,
      setThemeColor,
      resetThemeColor,
    }),
    [themeMode, setThemeMode, toggleThemeMode, resetThemeMode, themeColor, setThemeColor, resetThemeColor],
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}
