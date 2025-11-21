export declare const THEME_BREAKPOINTS: {
    readonly XS: "XS";
    readonly SM: "SM";
    readonly MD: "MD";
    readonly LG: "LG";
    readonly XL: "XL";
    readonly XXL: "XXL";
};
export declare const THEME_BREAKPOINT_RANGES: {
    readonly XS: readonly [0, 575];
    readonly SM: readonly [576, 767];
    readonly MD: readonly [768, 1023];
    readonly LG: readonly [1024, 1365];
    readonly XL: readonly [1366, 1919];
    readonly XXL: readonly [1920, number];
};
export type TThemeBreakpoint = (typeof THEME_BREAKPOINTS)[keyof typeof THEME_BREAKPOINTS];
export type TThemeBreakpointRange = (typeof THEME_BREAKPOINT_RANGES)[keyof typeof THEME_BREAKPOINT_RANGES];
//# sourceMappingURL=THEME_BREAKPOINTS.d.ts.map