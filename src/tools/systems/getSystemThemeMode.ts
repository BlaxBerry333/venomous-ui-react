"use client";

import { THEME_MODES, type TThemeMode } from "@/constants";

/**
 * get theme mode from current system
 */
export function getSystemThemeMode(): TThemeMode {
  const isDark = __checkSystemIsDarkMode();
  return isDark ? THEME_MODES.DARK : THEME_MODES.LIGHT;
}

function __checkSystemIsDarkMode(): boolean {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false;
}
