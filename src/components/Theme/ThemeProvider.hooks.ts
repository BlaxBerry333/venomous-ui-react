"use client";

import React from "react";

import { THEME_MODES, type TThemeMode } from "@/constants";
import { getSystemThemeMode } from "@/tools";
import { ThemeProviderContext } from "./ThemeProvider.context";

// ============================
// Context Hook (Internal)
// ============================

/**
 * 不对外暴露
 */
export function useThemeProviderContext() {
  const context = React.useContext(ThemeProviderContext); // eslint-disable-line react-x/no-use-context

  if (context === undefined) {
    throw new Error("useThemeProvider must be used within a <ThemeProvider>");
  }

  return context;
}

// ============================
// Storage Functions (Internal)
//
const __THEME_MODE_STORAGE_KEY = "VENOMOUS_UI__THEME_MODE";

/**
 * 不对外暴露
 */
export function __getInitialThemeMode(): TThemeMode {
  if (typeof window === "undefined") {
    return getSystemThemeMode();
  }
  try {
    const stored = localStorage.getItem(__THEME_MODE_STORAGE_KEY);
    if (stored && (stored === THEME_MODES.LIGHT || stored === THEME_MODES.DARK)) {
      return stored as TThemeMode;
    }
  } catch (error) {
    console.warn("[ThemeProvider] Failed to read theme mode from localStorage:", error);
  }
  return getSystemThemeMode();
}

/**
 * 不对外暴露
 */
export function __persistThemeMode(mode: TThemeMode): void {
  if (typeof window === "undefined") {
    return;
  }
  try {
    localStorage.setItem(__THEME_MODE_STORAGE_KEY, mode);
  } catch (error) {
    console.warn("[ThemeProvider] Failed to persist theme mode to localStorage:", error);
  }
}

/**
 * 不对外暴露
 */
export function __clearPersistedThemeMode(): void {
  if (typeof window === "undefined") {
    return;
  }
  try {
    localStorage.removeItem(__THEME_MODE_STORAGE_KEY);
  } catch (error) {
    console.warn("[ThemeProvider] Failed to clear theme mode from localStorage:", error);
  }
}
