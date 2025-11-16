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
//# sourceMappingURL=get-colors.d.ts.map