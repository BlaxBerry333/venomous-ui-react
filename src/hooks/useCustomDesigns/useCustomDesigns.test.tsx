import { renderHook } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";
import { PALETTE_COLORS, type TThemeDesigns } from "@/constants";

import useCustomDesigns from "./index";

// Test wrapper with Theme.Provider
const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("useCustomDesigns", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns empty object when no custom designs are provided", () => {
    const { result } = renderHook(() => useCustomDesigns(), { wrapper });

    expect(result.current).toEqual({});
  });

  it("returns partial custom designs when provided", () => {
    const customDesigns: Partial<TThemeDesigns> = {
      PaletteColors: PALETTE_COLORS.VIPER,
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customDesigns={customDesigns}>{children}</Theme.Provider>
    );

    const { result } = renderHook(() => useCustomDesigns(), { wrapper: customWrapper });

    expect(result.current).toEqual(customDesigns);
  });

  it("handles multiple custom design properties", () => {
    const customDesigns: Partial<TThemeDesigns> = {
      PaletteColors: PALETTE_COLORS.MAMBA,
      TextColors: {
        1: "#000000",
        2: "#333333",
        3: "#666666",
        disabled: "#999999",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customDesigns={customDesigns}>{children}</Theme.Provider>
    );

    const { result } = renderHook(() => useCustomDesigns(), { wrapper: customWrapper });

    expect(result.current).toEqual(customDesigns);
    expect(result.current.PaletteColors).toEqual(PALETTE_COLORS.MAMBA);
    expect(result.current.TextColors).toEqual({
      1: "#000000",
      2: "#333333",
      3: "#666666",
      disabled: "#999999",
    });
  });

  it("supports custom BackgroundColors", () => {
    const customDesigns: Partial<TThemeDesigns> = {
      BackgroundColors: {
        1: "#ffffff",
        2: "#f5f5f5",
        3: "#e0e0e0",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customDesigns={customDesigns}>{children}</Theme.Provider>
    );

    const { result } = renderHook(() => useCustomDesigns(), { wrapper: customWrapper });

    expect(result.current.BackgroundColors).toEqual({
      1: "#ffffff",
      2: "#f5f5f5",
      3: "#e0e0e0",
    });
  });

  it("supports custom BorderColors", () => {
    const customDesigns: Partial<TThemeDesigns> = {
      BorderColors: {
        1: "#cccccc",
        2: "#aaaaaa",
        3: "#888888",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customDesigns={customDesigns}>{children}</Theme.Provider>
    );

    const { result } = renderHook(() => useCustomDesigns(), { wrapper: customWrapper });

    expect(result.current.BorderColors).toEqual({
      1: "#cccccc",
      2: "#aaaaaa",
      3: "#888888",
    });
  });

  it("supports custom ShadowStyles", () => {
    const customDesigns: Partial<TThemeDesigns> = {
      ShadowStyles: {
        1: "0 2px 4px rgba(0,0,0,0.1)",
        2: "0 4px 8px rgba(0,0,0,0.2)",
        3: "0 8px 16px rgba(0,0,0,0.3)",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customDesigns={customDesigns}>{children}</Theme.Provider>
    );

    const { result } = renderHook(() => useCustomDesigns(), { wrapper: customWrapper });

    expect(result.current.ShadowStyles).toEqual({
      1: "0 2px 4px rgba(0,0,0,0.1)",
      2: "0 4px 8px rgba(0,0,0,0.2)",
      3: "0 8px 16px rgba(0,0,0,0.3)",
    });
  });

  it("supports custom TypographySizes", () => {
    const customDesigns: Partial<TThemeDesigns> = {
      TypographySizes: {
        1: 10,
        2: 12,
        3: 14,
        4: 16,
        5: 18,
        6: 20,
        7: 24,
        8: 28,
        9: 32,
        10: 36,
        11: 40,
        12: 48,
        13: 56,
        14: 64,
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customDesigns={customDesigns}>{children}</Theme.Provider>
    );

    const { result } = renderHook(() => useCustomDesigns(), { wrapper: customWrapper });

    expect(result.current.TypographySizes).toEqual(customDesigns.TypographySizes);
  });

  it("supports custom TypographyLineHeights", () => {
    const customDesigns: Partial<TThemeDesigns> = {
      TypographyLineHeights: {
        1: 1.2,
        2: 1.3,
        3: 1.4,
        4: 1.5,
        5: 1.6,
        6: 1.7,
        7: 1.8,
        8: 1.9,
        9: 2.0,
        10: 2.1,
        11: 2.2,
        12: 2.3,
        13: 2.4,
        14: 2.5,
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customDesigns={customDesigns}>{children}</Theme.Provider>
    );

    const { result } = renderHook(() => useCustomDesigns(), { wrapper: customWrapper });

    expect(result.current.TypographyLineHeights).toEqual(customDesigns.TypographyLineHeights);
  });

  it("maintains stable references with useMemo", () => {
    const customDesigns: Partial<TThemeDesigns> = {
      PaletteColors: PALETTE_COLORS.DART_FROG,
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customDesigns={customDesigns}>{children}</Theme.Provider>
    );

    const { result, rerender } = renderHook(() => useCustomDesigns(), { wrapper: customWrapper });

    const firstResult = result.current;

    // Rerender without changing dependencies
    rerender();

    // References should be stable
    expect(result.current).toBe(firstResult);
  });

  it("returns empty object when customDesigns is explicitly undefined", () => {
    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customDesigns={undefined}>{children}</Theme.Provider>
    );

    const { result } = renderHook(() => useCustomDesigns(), { wrapper: customWrapper });

    expect(result.current).toEqual({});
  });

  it("allows mixing multiple palette colors from PALETTE_COLORS", () => {
    const customDesigns: Partial<TThemeDesigns> = {
      PaletteColors: PALETTE_COLORS.OLEANDER,
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customDesigns={customDesigns}>{children}</Theme.Provider>
    );

    const { result } = renderHook(() => useCustomDesigns(), { wrapper: customWrapper });

    expect(result.current.PaletteColors).toEqual(PALETTE_COLORS.OLEANDER);
  });
});
