/**
 * get a darker hex color
 * @param hex color
 * @param factor 0 ~ 1
 * @example
 * getDarker("#4CAF50", 0);    // nothing changed
 * getDarker("#4CAF50", 0.5);  // dark 0.5 times
 * getDarker("#4CAF50", 1);    // black
 */
export declare function getDarker(hex: string, factor: number): string;
/**
 * get a lighter hex color
 * @param hex color
 * @param factor 0 ~ 1
 * @example
 * getLighter("#4CAF50", 0);    // nothing changed
 * getLighter("#4CAF50", 0.5);  // light 0.5 times
 * getLighter("#4CAF50", 1);    // white
 */
export declare function getLighter(hex: string, factor: number): string;
/**
 * Convert hex color to rgba with alpha transparency
 * @param hex color
 * @param alpha 0 ~ 1
 * @example
 * hexToRgba("#4CAF50", 0.1);  // "rgba(76, 175, 80, 0.1)"
 * hexToRgba("#4CAF50", 0.5);  // "rgba(76, 175, 80, 0.5)"
 */
export declare function hexToRgba(hex: string, alpha: number): string;
/**
 * Calculate relative luminance of a color
 * @param hex color
 * @returns luminance value between 0 (darkest) and 1 (lightest)
 * @see https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */
export declare function getLuminance(hex: string): number;
/**
 * Determine if a color is light (for choosing contrasting text color)
 * @param hex color
 * @param threshold luminance threshold (default 0.5)
 * @returns true if the color is light, false if dark
 * @example
 * isLightColor("#FFFFFF");  // true
 * isLightColor("#000000");  // false
 * isLightColor("#4CAF50");  // false (green is considered dark)
 */
export declare function isLightColor(hex: string, threshold?: number): boolean;
//# sourceMappingURL=get-colors.d.ts.map