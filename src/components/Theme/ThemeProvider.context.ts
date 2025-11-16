"use client";

import React from "react";

import { getSystemThemeMode } from "@/tools";
import type { TThemeContextValue } from "./ThemeProvider.types";

/**
 * 不对外暴露
 */
export const ThemeProviderContext = React.createContext<TThemeContextValue>({
  themeMode: getSystemThemeMode(),
  setThemeMode: () => {},
  customDesigns: {},
  customStyles: {},
});
