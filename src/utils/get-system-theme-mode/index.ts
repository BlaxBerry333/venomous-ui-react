"use client";

import { ThemeMode } from "../theme-mode";

function checkSystemIsDarkMode(): boolean {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false;
}

export default function getSystemThemeMode(): ThemeMode {
  const isDark = checkSystemIsDarkMode();
  return isDark ? ThemeMode.Dark : ThemeMode.Light;
}
