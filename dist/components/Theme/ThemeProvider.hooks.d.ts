import { type TPaletteColors, type TThemeMode } from "../../constants";
/**
 * 不对外暴露
 */
export declare function useThemeProviderContext(): import("./ThemeProvider.types").TThemeContextValue;
/**
 * 不对外暴露
 */
export declare function __getInitialThemeMode(): TThemeMode;
/**
 * 不对外暴露
 */
export declare function __persistThemeMode(mode: TThemeMode): void;
/**
 * 不对外暴露
 */
export declare function __clearPersistedThemeMode(): void;
/**
 * 不对外暴露
 */
export declare function __getInitialThemePalette(customPaletteColors?: TPaletteColors): TPaletteColors;
/**
 * 不对外暴露
 */
export declare function __persistThemePalette(palette: TPaletteColors): void;
/**
 * 不对外暴露
 */
export declare function __clearPersistedThemePalette(): void;
//# sourceMappingURL=ThemeProvider.hooks.d.ts.map