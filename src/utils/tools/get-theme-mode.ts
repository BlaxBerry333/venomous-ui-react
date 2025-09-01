"use client";

import { THEME_MODES, type ThemeMode } from "../design/ThemeMode";

function checkSystemIsDarkMode(): boolean {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false;
}

/**
 * get theme mode from current system
 */
export function getSystemThemeMode(): ThemeMode {
  const isDark = checkSystemIsDarkMode();
  return isDark ? THEME_MODES.Dark : THEME_MODES.Light;
}
