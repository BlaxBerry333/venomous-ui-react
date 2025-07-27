/**
 * 3 位 hex -> 标准 6 位 hex
 * @example
 * normalizeHex("#fff") // "#ffffff"
 */
export declare function hexNormalize(hex: string): string;
/**
 * hex -> {r, g, b}
 * @example
 * hexToRgb("#fff") // { r: 255, g: 255, b: 255 }
 */
export declare function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
};
/**
 * {r, g, b} -> 标准 6 位 hex
 * @example
 * rgbToHex(255, 255, 255) // "#ffffff"
 */
export declare function rgbToHex(r: number, g: number, b: number): string;
/**
 * hex -> { h, s, l }
 * @example
 * hexToHsl("#fff") // { h: 0, s: 0, l: 1 }
 */
export declare function hexToHsl(hex: string): {
    h: number;
    s: number;
    l: number;
};
/**
 * hsl -> hex
 * @example
 * hslToHex(0, 0, 0) // "#000000"
 */
export declare function hslToHex(h: number, s: number, l: number): string;
/**
 * get a darker hex color (based on HSL)
 * @example
 * getDarkerHex("#fff", 0.2) // "#cccccc"
 */
export declare function getDarkerHex(hex: string, percent: number): string;
/**
 * get a lighter hex color (based on HSL)
 * @example
 * getLighterHex("#000000", 0.2); // "#333333"
 * getLighterHex("#123456", 0.2); // "#3d5f78"
 */
export declare function getLighterHex(hex: string, percent: number): string;
/**
 * get a opacity hex color
 * @example
 * getOpacityHex("#fff", 0.1) // "rgba(255, 255, 255, 0.1)"
 */
export declare function getOpacityHex(hex: string, percent: number): string;
//# sourceMappingURL=get-colors.d.ts.map