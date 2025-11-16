import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { THEME_BREAKPOINTS, THEME_BREAKPOINT_RANGES } from "@/constants";

import useThemeBreakpoint from "./index";

describe("useThemeBreakpoint", () => {
  beforeEach(() => {
    // Reset window size
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });
    vi.clearAllTimers();
  });

  it("returns initial breakpoint based on window width", () => {
    const { result } = renderHook(() => useThemeBreakpoint());

    expect(result.current.breakpoint).toBeDefined();
    expect(Object.values(THEME_BREAKPOINTS)).toContain(result.current.breakpoint);
  });

  it("returns breakpoint range", () => {
    const { result } = renderHook(() => useThemeBreakpoint());

    expect(result.current.breakpointRange).toBeDefined();
    expect(Array.isArray(result.current.breakpointRange)).toBe(true);
    expect(result.current.breakpointRange).toHaveLength(2);
  });

  it("detects XS breakpoint for width 0-575", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 375, // Mobile phone width
    });

    const { result } = renderHook(() => useThemeBreakpoint());

    expect(result.current.breakpoint).toBe(THEME_BREAKPOINTS.XS);
    expect(result.current.breakpointRange).toEqual(THEME_BREAKPOINT_RANGES[THEME_BREAKPOINTS.XS]);
  });

  it("detects SM breakpoint for width 576-767", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 600,
    });

    const { result } = renderHook(() => useThemeBreakpoint());

    expect(result.current.breakpoint).toBe(THEME_BREAKPOINTS.SM);
    expect(result.current.breakpointRange).toEqual(THEME_BREAKPOINT_RANGES[THEME_BREAKPOINTS.SM]);
  });

  it("detects MD breakpoint for width 768-1023", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 800, // Tablet width
    });

    const { result } = renderHook(() => useThemeBreakpoint());

    expect(result.current.breakpoint).toBe(THEME_BREAKPOINTS.MD);
    expect(result.current.breakpointRange).toEqual(THEME_BREAKPOINT_RANGES[THEME_BREAKPOINTS.MD]);
  });

  it("detects LG breakpoint for width 1024-1365", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1200, // Laptop width
    });

    const { result } = renderHook(() => useThemeBreakpoint());

    expect(result.current.breakpoint).toBe(THEME_BREAKPOINTS.LG);
    expect(result.current.breakpointRange).toEqual(THEME_BREAKPOINT_RANGES[THEME_BREAKPOINTS.LG]);
  });

  it("detects XL breakpoint for width 1366-1919", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1600, // Desktop width
    });

    const { result } = renderHook(() => useThemeBreakpoint());

    expect(result.current.breakpoint).toBe(THEME_BREAKPOINTS.XL);
    expect(result.current.breakpointRange).toEqual(THEME_BREAKPOINT_RANGES[THEME_BREAKPOINTS.XL]);
  });

  it("detects XXL breakpoint for width 1920+", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 2560, // Large desktop width
    });

    const { result } = renderHook(() => useThemeBreakpoint());

    expect(result.current.breakpoint).toBe(THEME_BREAKPOINTS.XXL);
    expect(result.current.breakpointRange).toEqual(THEME_BREAKPOINT_RANGES[THEME_BREAKPOINTS.XXL]);
  });

  it("updates breakpoint on window resize with debounce", async () => {
    vi.useFakeTimers();

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024, // LG
    });

    const { result } = renderHook(() => useThemeBreakpoint());

    expect(result.current.breakpoint).toBe(THEME_BREAKPOINTS.LG);

    // Simulate window resize to mobile
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 375, // XS
    });
    window.dispatchEvent(new Event("resize"));

    // Should not update immediately (debounced)
    expect(result.current.breakpoint).toBe(THEME_BREAKPOINTS.LG);

    // Fast-forward time to trigger debounce (default 150ms)
    act(() => {
      vi.runAllTimers();
    });

    expect(result.current.breakpoint).toBe(THEME_BREAKPOINTS.XS);

    vi.useRealTimers();
  });

  it("respects custom debounce time", async () => {
    vi.useFakeTimers();

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });

    const { result } = renderHook(() => useThemeBreakpoint({ __: { windowSizeCalculationDebounceMS: 300 } }));

    expect(result.current.breakpoint).toBe(THEME_BREAKPOINTS.LG);

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 800, // MD
    });
    window.dispatchEvent(new Event("resize"));

    // Should not update after default 150ms
    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(result.current.breakpoint).toBe(THEME_BREAKPOINTS.LG);

    // Should update after custom 300ms
    act(() => {
      vi.advanceTimersByTime(150); // Total: 300ms
    });

    expect(result.current.breakpoint).toBe(THEME_BREAKPOINTS.MD);

    vi.useRealTimers();
  });

  it("handles multiple rapid resize events correctly (debounce)", async () => {
    vi.useFakeTimers();

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });

    const { result } = renderHook(() => useThemeBreakpoint());

    // Simulate multiple rapid resize events
    Object.defineProperty(window, "innerWidth", { value: 800 });
    window.dispatchEvent(new Event("resize"));

    act(() => {
      vi.advanceTimersByTime(50);
    });

    Object.defineProperty(window, "innerWidth", { value: 600 });
    window.dispatchEvent(new Event("resize"));

    act(() => {
      vi.advanceTimersByTime(50);
    });

    Object.defineProperty(window, "innerWidth", { value: 375 });
    window.dispatchEvent(new Event("resize"));

    // Should only trigger once after debounce period
    act(() => {
      vi.runAllTimers();
    });

    expect(result.current.breakpoint).toBe(THEME_BREAKPOINTS.XS);

    vi.useRealTimers();
  });

  it("maintains stable references with useMemo", () => {
    const { result, rerender } = renderHook(() => useThemeBreakpoint());

    const firstResult = result.current;

    // Rerender without changing breakpoint
    rerender();

    // References should be stable when breakpoint hasn't changed
    expect(result.current).toBe(firstResult);
  });

  it("cleans up event listener on unmount", () => {
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => useThemeBreakpoint());

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith("resize", expect.any(Function));

    removeEventListenerSpy.mockRestore();
  });
});
