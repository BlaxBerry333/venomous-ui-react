import type { TComponentDisplayName, TPaletteColors, TThemeDesigns, TThemeMode } from "../../constants";
/**
 * 组件自定义 Props 类型
 * 支持传入任意组件的部分 Props，用于全局覆盖组件默认值
 */
export type TCustomComponentProps = Partial<Record<TComponentDisplayName, Record<string, any>>>;
export type TThemeContextValue = {
    customDesigns?: Partial<TThemeDesigns>;
    /**
     * 组件自定义 Props，用于全局覆盖组件默认值
     * 优先级：直接传入的 props > customComponentProps > 组件默认值
     */
    customComponentProps?: TCustomComponentProps;
    themeMode: TThemeMode;
    setThemeMode: (mode: TThemeMode) => void;
    themePalette: TPaletteColors;
    setThemePalette: (palette: TPaletteColors) => void;
};
export type ThemeProviderProps = React.PropsWithChildren<Pick<TThemeContextValue, "customDesigns" | "customComponentProps">>;
//# sourceMappingURL=ThemeProvider.types.d.ts.map