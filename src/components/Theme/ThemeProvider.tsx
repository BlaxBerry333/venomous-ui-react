"use client";

import React from "react";

import { ThemeColor, ThemeMode } from "@/utils";
import ThemeContext, { type ThemeContextValueType } from "./ThemeContext";

const DEFAULT_THEME_MODE = ThemeMode.Light;
const DEFAULT_THEME_COLOR = ThemeColor.JadeAnaconda;
const STORAGE_KEY = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR",
};

interface ThemeModeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeMode;
  defaultThemeColor?: ThemeColor;
  storageKey?: {
    THEME_MODE: string;
    THEME_COLOR: string;
  };
}

export default function ThemeProvider({
  children,
  defaultTheme = DEFAULT_THEME_MODE,
  defaultThemeColor = DEFAULT_THEME_COLOR,
  storageKey = STORAGE_KEY,
}: ThemeModeProviderProps) {
  const [isInitialized, setIsInitialized] = React.useState<boolean>(false);
  const [themeMode, setThemeModeState] = React.useState<ThemeMode>(defaultTheme);
  const [themeColor, setThemeColorState] = React.useState<ThemeColor>(defaultThemeColor);

  const setThemeMode = React.useCallback(
    (newTheme: ThemeMode) => {
      if (newTheme === themeMode) return;
      setThemeModeState(newTheme);
    },
    [themeMode],
  );

  const toggleThemeMode = React.useCallback(() => {
    setThemeModeState((current) => (current === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark));
  }, []);

  const resetThemeMode = React.useCallback(() => {
    setThemeModeState(defaultTheme);
  }, [defaultTheme]);

  const setThemeColor = React.useCallback(
    (newThemeColor: ThemeColor) => {
      if (newThemeColor === themeColor) return;
      setThemeColorState(newThemeColor);
    },
    [themeColor],
  );

  const resetThemeColor = React.useCallback(() => {
    setThemeColorState(defaultThemeColor);
  }, [defaultThemeColor]);

  // 初始化时读取 localStorage
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsInitialized(true);
      const storedThemeMode = localStorage.getItem(storageKey.THEME_MODE);
      if (storedThemeMode && Object.values(ThemeMode).includes(storedThemeMode as ThemeMode)) {
        setThemeModeState(storedThemeMode as ThemeMode);
      }
      const storedThemeColor = localStorage.getItem(storageKey.THEME_COLOR);
      if (storedThemeColor && Object.values(ThemeColor).includes(storedThemeColor as ThemeColor)) {
        setThemeColorState(storedThemeColor as ThemeColor);
      }
    }
  }, [storageKey]);

  // 初始化后实时更新保存到 localStorage
  React.useEffect(() => {
    if (typeof window !== "undefined" && isInitialized) {
      localStorage.setItem(storageKey.THEME_MODE, themeMode);
      localStorage.setItem(storageKey.THEME_COLOR, themeColor);
    }
  }, [isInitialized, storageKey, themeMode, themeColor]);

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

  // eslint-disable-next-line react-x/no-context-provider
  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}
