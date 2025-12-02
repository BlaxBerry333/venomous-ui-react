"use client";

import React from "react";

import { PALETTE_COLORS } from "@/constants";
import { getSystemThemeMode } from "@/tools";
import type { TThemeContextValue } from "./ThemeProvider.types";

/**
 * 不对外暴露
 */
export const ThemeProviderContext = React.createContext<TThemeContextValue>({
  themeMode: getSystemThemeMode(),
  setThemeMode: () => {},
  themePalette: PALETTE_COLORS.WOLFSBANE,
  setThemePalette: () => {},
  customDesigns: {},
  customComponentProps: {},
});
