"use client";

import React from "react";

import type { ThemeMode } from "@/utils";

export interface ThemeModeContextType {
  themeMode: ThemeMode;
  setThemeMode: (themeMode: ThemeMode) => void;
  toggleThemeMode: () => void;
  resetThemeMode: () => void;
  isDarkThemeMode: boolean;
}

export interface ThemeColorContextType {
  themeColor: string;
  setThemeColor: (themeColor: string) => void;
  resetThemeColor: VoidFunction;
}

export type ThemeContextValueType = ThemeModeContextType & ThemeColorContextType;

const ThemeContext = React.createContext<ThemeContextValueType | undefined>(undefined);

export default ThemeContext;
