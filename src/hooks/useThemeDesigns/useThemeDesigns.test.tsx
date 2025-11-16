import { renderHook } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";
import {
  BACKGROUND_COLORS,
  BORDER_COLORS,
  PALETTE_COLORS,
  SHADOW_STYLES,
  TEXT_COLORS,
  THEME_MODES,
  TYPOGRAPHY_LINE_HEIGHTS,
  TYPOGRAPHY_SIZES,
  type TThemeDesigns,
} from "@/constants";

import useThemeDesigns from "./index";

// Test wrapper with Theme.Provider
const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("useThemeDesigns", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns all design tokens", () => {
    const { result } = renderHook(() => useThemeDesigns(), { wrapper });

    expect(result.current).toHaveProperty("PaletteColors");
    expect(result.current).toHaveProperty("TextColors");
    expect(result.current).toHaveProperty("BackgroundColors");
    expect(result.current).toHaveProperty("BorderColors");
    expect(result.current).toHaveProperty("ShadowStyles");
    expect(result.current).toHaveProperty("TypographySizes");
    expect(result.current).toHaveProperty("TypographyLineHeights");
  });

  it("returns default WOLFSBANE palette colors", () => {
    const { result } = renderHook(() => useThemeDesigns(), { wrapper });

    expect(result.current.PaletteColors).toEqual(PALETTE_COLORS.WOLFSBANE);
  });

  it("returns theme-appropriate text colors", () => {
    const { result } = renderHook(() => useThemeDesigns(), { wrapper });

    // Should be either light or dark mode text colors
    const isValidTextColors =
      JSON.stringify(result.current.TextColors) === JSON.stringify(TEXT_COLORS[THEME_MODES.LIGHT]) ||
      JSON.stringify(result.current.TextColors) === JSON.stringify(TEXT_COLORS[THEME_MODES.DARK]);

    expect(isValidTextColors).toBe(true);
  });

  it("returns theme-appropriate background colors", () => {
    const { result } = renderHook(() => useThemeDesigns(), { wrapper });

    // Should be either light or dark mode background colors
    const isValidBackgroundColors =
      JSON.stringify(result.current.BackgroundColors) === JSON.stringify(BACKGROUND_COLORS[THEME_MODES.LIGHT]) ||
      JSON.stringify(result.current.BackgroundColors) === JSON.stringify(BACKGROUND_COLORS[THEME_MODES.DARK]);

    expect(isValidBackgroundColors).toBe(true);
  });

  it("returns theme-appropriate border colors", () => {
    const { result } = renderHook(() => useThemeDesigns(), { wrapper });

    // Should be either light or dark mode border colors
    const isValidBorderColors =
      JSON.stringify(result.current.BorderColors) === JSON.stringify(BORDER_COLORS[THEME_MODES.LIGHT]) ||
      JSON.stringify(result.current.BorderColors) === JSON.stringify(BORDER_COLORS[THEME_MODES.DARK]);

    expect(isValidBorderColors).toBe(true);
  });

  it("returns theme-appropriate shadow styles", () => {
    const { result } = renderHook(() => useThemeDesigns(), { wrapper });

    // Should be either light or dark mode shadow styles
    const isValidShadowStyles =
      JSON.stringify(result.current.ShadowStyles) === JSON.stringify(SHADOW_STYLES[THEME_MODES.LIGHT]) ||
      JSON.stringify(result.current.ShadowStyles) === JSON.stringify(SHADOW_STYLES[THEME_MODES.DARK]);

    expect(isValidShadowStyles).toBe(true);
  });

  it("returns default typography sizes", () => {
    const { result } = renderHook(() => useThemeDesigns(), { wrapper });

    expect(result.current.TypographySizes).toEqual(TYPOGRAPHY_SIZES);
  });

  it("returns default typography line heights", () => {
    const { result } = renderHook(() => useThemeDesigns(), { wrapper });

    expect(result.current.TypographyLineHeights).toEqual(TYPOGRAPHY_LINE_HEIGHTS);
  });

  it("accepts custom designs via Theme.Provider", () => {
    const customDesigns: Partial<TThemeDesigns> = {
      PaletteColors: PALETTE_COLORS.VIPER,
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customDesigns={customDesigns}>{children}</Theme.Provider>
    );

    const { result } = renderHook(() => useThemeDesigns(), { wrapper: customWrapper });

    expect(result.current.PaletteColors).toEqual(PALETTE_COLORS.VIPER);
  });

  it("merges custom designs with default designs", () => {
    const customDesigns: Partial<TThemeDesigns> = {
      PaletteColors: PALETTE_COLORS.MAMBA,
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customDesigns={customDesigns}>{children}</Theme.Provider>
    );

    const { result } = renderHook(() => useThemeDesigns(), { wrapper: customWrapper });

    // Custom palette
    expect(result.current.PaletteColors).toEqual(PALETTE_COLORS.MAMBA);

    // Default typography should remain unchanged
    expect(result.current.TypographySizes).toEqual(TYPOGRAPHY_SIZES);
    expect(result.current.TypographyLineHeights).toEqual(TYPOGRAPHY_LINE_HEIGHTS);
  });

  it("maintains stable references with useMemo", () => {
    const { result, rerender } = renderHook(() => useThemeDesigns(), { wrapper });

    const firstResult = result.current;

    // Rerender without changing theme mode or custom designs
    rerender();

    // References should be stable when dependencies haven't changed
    expect(result.current).toBe(firstResult);
  });
});
