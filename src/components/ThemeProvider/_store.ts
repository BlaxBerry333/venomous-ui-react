import { ThemeColor, ThemeMode } from "@/utils";

const VENOMOUS_UI_STORE_KEY = {
  themeColor: "VENOMOUS_UI__themeColor",
  themeMode: "VENOMOUS_UI__themeMode",
} as const;

export function _getStoredThemeColor() {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(VENOMOUS_UI_STORE_KEY.themeColor);
    if (stored && Object.values(ThemeColor).includes(stored as ThemeColor)) {
      return stored as ThemeColor;
    }
  }
}

export function _getStoredThemeMode() {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(VENOMOUS_UI_STORE_KEY.themeMode);
    if (stored && Object.values(ThemeMode).includes(stored as ThemeMode)) {
      return stored as ThemeMode;
    }
  }
}

export function _setStoredThemeColor(themeColor: ThemeColor) {
  if (typeof window !== "undefined") {
    localStorage.setItem(VENOMOUS_UI_STORE_KEY.themeColor, themeColor);
  }
}

export function _setStoredThemeMode(themeMode: ThemeMode) {
  if (typeof window !== "undefined") {
    localStorage.setItem(VENOMOUS_UI_STORE_KEY.themeMode, themeMode);
  }
}
