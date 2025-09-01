import React from "react";
import { type ThemeMode } from "@/utils";
interface ThemeModeProviderProps {
    children: React.ReactNode;
    defaultThemeMode?: ThemeMode;
    defaultThemeColor?: string;
    storageKey?: {
        THEME_MODE: string;
        THEME_COLOR: string;
    };
}
export default function ThemeProvider({ children, defaultThemeMode, defaultThemeColor, storageKey, }: ThemeModeProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ThemeProvider.d.ts.map