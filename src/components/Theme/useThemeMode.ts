"use client";

import React from "react";

import ThemeModeContext, { type ThemeModeContextType } from "./ThemeContext";

// 这个项目 在Vite 打包时才用了基于目录的分包方案
// 不能与 ThemeModeContext、ThemeModeProvider 分在不同的目录，否则会导致 Context 实例不同这个 Hook 无法
export default function useThemeMode(): ThemeModeContextType {
  // eslint-disable-next-line react-x/no-use-context
  const context = React.useContext(ThemeModeContext);

  if (context === undefined) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }

  return {
    themeMode: context.themeMode,
    setThemeMode: context.setThemeMode,
    toggleThemeMode: context.toggleThemeMode,
    resetThemeMode: context.resetThemeMode,
    isDarkThemeMode: context.isDarkThemeMode,
  };
}
