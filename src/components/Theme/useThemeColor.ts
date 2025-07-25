"use client";

import React from "react";

import ThemeModeContext, { type ThemeColorContextType } from "./ThemeContext";

// 这个项目 在Vite 打包时才用了基于目录的分包方案
// 不能与 ThemeModeContext、ThemeModeProvider 分在不同的目录，否则会导致 Context 实例不同这个 Hook 无法
export default function useThemeColor(): ThemeColorContextType {
  // eslint-disable-next-line react-x/no-use-context
  const context = React.useContext(ThemeModeContext);

  if (context === undefined) {
    throw new Error("useThemeColor must be used within a ThemeModeProvider");
  }

  return {
    themeColor: context.themeColor,
    setThemeColor: context.setThemeColor,
    resetThemeColor: context.resetThemeColor,
  };
}
