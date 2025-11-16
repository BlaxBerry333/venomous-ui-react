import { act, renderHook } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";
import { THEME_MODES } from "@/constants";

import useThemeMode from "./index";

// Test wrapper with Theme.Provider
const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("useThemeMode", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it("returns initial theme mode from system", () => {
    const { result } = renderHook(() => useThemeMode(), { wrapper });

    expect(result.current.themeMode).toBeDefined();
    expect([THEME_MODES.LIGHT, THEME_MODES.DARK]).toContain(result.current.themeMode);
  });

  it("returns isDarkMode boolean", () => {
    const { result } = renderHook(() => useThemeMode(), { wrapper });

    expect(typeof result.current.isDarkMode).toBe("boolean");
  });

  it("provides setThemeMode function", () => {
    const { result } = renderHook(() => useThemeMode(), { wrapper });

    expect(typeof result.current.setThemeMode).toBe("function");
  });

  it("provides toggleThemeMode function", () => {
    const { result } = renderHook(() => useThemeMode(), { wrapper });

    expect(typeof result.current.toggleThemeMode).toBe("function");
  });

  it("updates theme mode when setThemeMode is called", () => {
    const { result } = renderHook(() => useThemeMode(), { wrapper });

    act(() => {
      result.current.setThemeMode(THEME_MODES.DARK);
    });

    expect(result.current.themeMode).toBe(THEME_MODES.DARK);
    expect(result.current.isDarkMode).toBe(true);

    act(() => {
      result.current.setThemeMode(THEME_MODES.LIGHT);
    });

    expect(result.current.themeMode).toBe(THEME_MODES.LIGHT);
    expect(result.current.isDarkMode).toBe(false);
  });

  it("toggles between light and dark modes", () => {
    const { result } = renderHook(() => useThemeMode(), { wrapper });

    // Set to light first
    act(() => {
      result.current.setThemeMode(THEME_MODES.LIGHT);
    });

    expect(result.current.themeMode).toBe(THEME_MODES.LIGHT);

    // Toggle to dark
    act(() => {
      result.current.toggleThemeMode();
    });

    expect(result.current.themeMode).toBe(THEME_MODES.DARK);
    expect(result.current.isDarkMode).toBe(true);

    // Toggle back to light
    act(() => {
      result.current.toggleThemeMode();
    });

    expect(result.current.themeMode).toBe(THEME_MODES.LIGHT);
    expect(result.current.isDarkMode).toBe(false);
  });

  it("isDarkMode reflects current theme mode correctly", () => {
    const { result } = renderHook(() => useThemeMode(), { wrapper });

    act(() => {
      result.current.setThemeMode(THEME_MODES.DARK);
    });

    expect(result.current.isDarkMode).toBe(true);

    act(() => {
      result.current.setThemeMode(THEME_MODES.LIGHT);
    });

    expect(result.current.isDarkMode).toBe(false);
  });

  it("maintains stable references with useMemo", () => {
    const { result, rerender } = renderHook(() => useThemeMode(), { wrapper });

    const firstResult = result.current;

    // Rerender without changing theme mode
    rerender();

    // References should be stable when theme mode hasn't changed
    expect(result.current).toBe(firstResult);
  });
});
