/**
 * get a darker hex color
 * @param hex color
 * @param factor 0 ~ 1
 * @example
 * getDarker("#4CAF50", 0);    // nothing changed
 * getDarker("#4CAF50", 0.5);  // dark 0.5 times
 * getDarker("#4CAF50", 1);    // black
 */
export function getDarker(hex: string, factor: number): string {
  if (factor < 0 || factor > 1) {
    throw new Error("Factor must be between 0 ~ 1.");
  }
  return __adjustColor(hex, factor, true);
}

/**
 * get a lighter hex color
 * @param hex color
 * @param factor 0 ~ 1
 * @example
 * getLighter("#4CAF50", 0);    // nothing changed
 * getLighter("#4CAF50", 0.5);  // light 0.5 times
 * getLighter("#4CAF50", 1);    // white
 */
export function getLighter(hex: string, factor: number): string {
  if (factor < 0 || factor > 1) {
    throw new Error("Factor must be between 0 ~ 1.");
  }
  return __adjustColor(hex, factor, false);
}

/**
 * Convert hex color to rgba with alpha transparency
 * @param hex color
 * @param alpha 0 ~ 1
 * @example
 * hexToRgba("#4CAF50", 0.1);  // "rgba(76, 175, 80, 0.1)"
 * hexToRgba("#4CAF50", 0.5);  // "rgba(76, 175, 80, 0.5)"
 */
export function hexToRgba(hex: string, alpha: number): string {
  if (alpha < 0 || alpha > 1) {
    throw new Error("Alpha must be between 0 ~ 1.");
  }
  const { r, g, b } = __hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Calculate relative luminance of a color
 * @param hex color
 * @returns luminance value between 0 (darkest) and 1 (lightest)
 * @see https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */
export function getLuminance(hex: string): number {
  const { r, g, b } = __hexToRgb(hex);

  const toLinear = (c: number) => {
    const sRGB = c / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  };

  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

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
export function isLightColor(hex: string, threshold = 0.5): boolean {
  return getLuminance(hex) > threshold;
}

function __hexToRgb(hex: string): { r: number; g: number; b: number } {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
  }
  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16),
  };
}

function __rgbToHex(r: number, g: number, b: number): string {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

function __adjustColor(hex: string, factor: number, isDarker: boolean): string {
  const adjust = (value: number) => {
    if (isDarker) return Math.max(value - value * factor, 0);
    else return Math.min(value + (255 - value) * factor, 255);
  };
  const { r, g, b } = __hexToRgb(hex);
  return __rgbToHex(Math.round(adjust(r)), Math.round(adjust(g)), Math.round(adjust(b)));
}
