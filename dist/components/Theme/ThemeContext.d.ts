import React from "react";
import type { ThemeColor, ThemeMode } from "@/utils";
export interface ThemeModeContextType {
    themeMode: ThemeMode;
    setThemeMode: (themeMode: ThemeMode) => void;
    toggleThemeMode: () => void;
    resetThemeMode: () => void;
    isDarkThemeMode: boolean;
}
export interface ThemeColorContextType {
    themeColor: ThemeColor;
    setThemeColor: (themeColor: ThemeColor) => void;
    resetThemeColor: VoidFunction;
}
export type ThemeContextValueType = ThemeModeContextType & ThemeColorContextType;
declare const ThemeContext: React.Context<ThemeContextValueType | undefined>;
export default ThemeContext;
//# sourceMappingURL=ThemeContext.d.ts.map