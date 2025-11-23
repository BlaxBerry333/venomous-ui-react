"use client";

import React from "react";

import { PALETTE_COLORS, THEME_MODES, type TPaletteColors, type TThemeMode } from "@/constants";
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
// ============================

// ThemeMode Storage
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

// ThemePalette Storage
const __THEME_PALETTE_STORAGE_KEY = "VENOMOUS_UI__THEME_PALETTE";

/**
 * 不对外暴露
 */
export function __getInitialThemePalette(customPaletteColors?: TPaletteColors): TPaletteColors {
  if (typeof window === "undefined") {
    return customPaletteColors || PALETTE_COLORS.WOLFSBANE;
  }

  try {
    const stored = localStorage.getItem(__THEME_PALETTE_STORAGE_KEY);
    if (stored) {
      function isValidPaletteColors(value: unknown): value is TPaletteColors {
        if (typeof value !== "object" || value === null) {
          return false;
        }
        const obj = value as Record<string, unknown>;
        return (
          typeof obj[1] === "string" &&
          typeof obj[2] === "string" &&
          typeof obj[3] === "string" &&
          Object.keys(obj).length === 3
        );
      }

      try {
        const parsed = JSON.parse(stored);
        if (isValidPaletteColors(parsed)) {
          return parsed;
        }
      } catch {
        // JSON 解析失败，继续使用默认值
      }
    }
  } catch (error) {
    console.warn("[ThemeProvider] Failed to read theme palette from localStorage:", error);
  }

  return customPaletteColors || PALETTE_COLORS.WOLFSBANE;
}

/**
 * 不对外暴露
 */
export function __persistThemePalette(palette: TPaletteColors): void {
  if (typeof window === "undefined") {
    return;
  }
  try {
    localStorage.setItem(__THEME_PALETTE_STORAGE_KEY, JSON.stringify(palette));
  } catch (error) {
    console.warn("[ThemeProvider] Failed to persist theme palette to localStorage:", error);
  }
}

/**
 * 不对外暴露
 */
export function __clearPersistedThemePalette(): void {
  if (typeof window === "undefined") {
    return;
  }
  try {
    localStorage.removeItem(__THEME_PALETTE_STORAGE_KEY);
  } catch (error) {
    console.warn("[ThemeProvider] Failed to clear theme palette from localStorage:", error);
  }
}
