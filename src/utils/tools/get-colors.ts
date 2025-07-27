"use client";

/**
 * 3 位 hex -> 标准 6 位 hex
 * @example
 * normalizeHex("#fff") // "#ffffff"
 */
export function hexNormalize(hex: string): string {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }
  return `#${hex}`;
}

/**
 * hex -> {r, g, b}
 * @example
 * hexToRgb("#fff") // { r: 255, g: 255, b: 255 }
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  hex = hex.replace("#", "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

/**
 * {r, g, b} -> 标准 6 位 hex
 * @example
 * rgbToHex(255, 255, 255) // "#ffffff"
 */
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const h = n.toString(16);
    return h.length === 1 ? "0" + h : h;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * hex -> { h, s, l }
 * @example
 * hexToHsl("#fff") // { h: 0, s: 0, l: 1 }
 */
export function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const { r, g, b } = hexToRgb(hexNormalize(hex));
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const delta = max - min;
  let h = 0;
  if (delta !== 0) {
    if (max === rNorm) {
      h = ((gNorm - bNorm) / delta) % 6;
    } else if (max === gNorm) {
      h = (bNorm - rNorm) / delta + 2;
    } else {
      h = (rNorm - gNorm) / delta + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
  }
  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  return { h, s, l };
}

/**
 * hsl -> hex
 * @example
 * hslToHex(0, 0, 0) // "#000000"
 */
export function hslToHex(h: number, s: number, l: number): string {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0,
    g = 0,
    b = 0;
  if (h >= 0 && h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return rgbToHex(Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255));
}

/**
 * get a darker hex color (based on HSL)
 * @example
 * getDarkerHex("#fff", 0.2) // "#cccccc"
 */
export function getDarkerHex(hex: string, percent: number): string {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex(h, s, Math.max(0, l - percent));
}

/**
 * get a lighter hex color (based on HSL)
 * @example
 * getLighterHex("#000000", 0.2); // "#333333"
 * getLighterHex("#123456", 0.2); // "#3d5f78"
 */
export function getLighterHex(hex: string, percent: number): string {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex(h, s, Math.min(1, l + percent));
}

/**
 * get a opacity hex color
 * @example
 * getOpacityHex("#fff", 0.1) // "rgba(255, 255, 255, 0.1)"
 */
export function getOpacityHex(hex: string, percent: number): string {
  const { r, g, b } = hexToRgb(hexNormalize(hex));
  if (percent > 1) percent = 1;
  if (percent < 0) percent = 0;
  const a = Math.min(1, Math.max(0, percent));
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
