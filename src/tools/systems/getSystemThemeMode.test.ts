import { beforeEach, describe, expect, it, vi } from "vitest";

import { THEME_MODES } from "@/constants";

import { getSystemThemeMode } from "./getSystemThemeMode";

describe("getSystemThemeMode", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 'dark' when system prefers dark mode", () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === "(prefers-color-scheme: dark)",
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    expect(getSystemThemeMode()).toBe(THEME_MODES.DARK);
  });

  it("returns 'light' when system prefers light mode", () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    expect(getSystemThemeMode()).toBe(THEME_MODES.LIGHT);
  });

  it("returns 'light' when window is undefined (SSR)", () => {
    const originalWindow = global.window;
    // @ts-expect-error: Simulating SSR environment
    delete global.window;

    expect(getSystemThemeMode()).toBe(THEME_MODES.LIGHT);

    global.window = originalWindow;
  });
});
