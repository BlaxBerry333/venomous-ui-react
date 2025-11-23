import type { TComponentDisplayName, TPaletteColors, TThemeDesigns, TThemeMode } from "../../constants";
export type TThemeContextValue = {
    customDesigns?: Partial<TThemeDesigns>;
    customStyles?: Partial<Record<TComponentDisplayName, React.CSSProperties>>;
    themeMode: TThemeMode;
    setThemeMode: (mode: TThemeMode) => void;
    themePalette: TPaletteColors;
    setThemePalette: (palette: TPaletteColors) => void;
};
export type ThemeProviderProps = React.PropsWithChildren<Pick<TThemeContextValue, "customDesigns" | "customStyles">>;
//# sourceMappingURL=ThemeProvider.types.d.ts.map