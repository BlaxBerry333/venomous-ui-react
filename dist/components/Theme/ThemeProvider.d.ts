import React from "react";
import { ThemeColor, ThemeMode } from "@/utils";
interface ThemeModeProviderProps {
    children: React.ReactNode;
    defaultTheme?: ThemeMode;
    defaultThemeColor?: ThemeColor;
    storageKey?: {
        THEME_MODE: string;
        THEME_COLOR: string;
    };
}
export default function ThemeProvider({ children, defaultTheme, defaultThemeColor, storageKey, }: ThemeModeProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ThemeProvider.d.ts.map