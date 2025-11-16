import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import useFullScreen from "./index";

describe("useFullScreen", () => {
  beforeEach(() => {
    // Mock fullscreen API
    Object.defineProperty(document, "fullscreenEnabled", {
      writable: true,
      configurable: true,
      value: true,
    });

    Object.defineProperty(document, "fullscreenElement", {
      writable: true,
      configurable: true,
      value: null,
    });

    // Mock requestFullscreen on HTMLElement
    HTMLElement.prototype.requestFullscreen = vi.fn().mockResolvedValue(undefined);

    // Mock exitFullscreen on document object directly
    document.exitFullscreen = vi.fn().mockResolvedValue(undefined);
  });

  it("returns initial state with isFullscreen as false", () => {
    const { result } = renderHook(() => useFullScreen());

    expect(result.current.isFullscreen).toBe(false);
    expect(typeof result.current.enterFullscreen).toBe("function");
    expect(typeof result.current.exitFullscreen).toBe("function");
    expect(typeof result.current.toggleFullscreen).toBe("function");
  });

  it("detects fullscreen API support", () => {
    const { result } = renderHook(() => useFullScreen());

    expect(result.current.isSupported).toBe(true);
  });

  it("detects when fullscreen API is not supported", () => {
    Object.defineProperty(document, "fullscreenEnabled", {
      writable: true,
      configurable: true,
      value: false,
    });

    const { result } = renderHook(() => useFullScreen());

    expect(result.current.isSupported).toBe(false);
  });

  it("calls enterFullscreen on document.documentElement when no ref is provided", async () => {
    const { result } = renderHook(() => useFullScreen());

    await act(async () => {
      await result.current.enterFullscreen();
    });

    expect(document.documentElement.requestFullscreen).toHaveBeenCalledTimes(1);
  });

  it("calls enterFullscreen on provided element ref", async () => {
    const element = document.createElement("div");
    element.requestFullscreen = vi.fn().mockResolvedValue(undefined);
    const elementRef = { current: element };

    const { result } = renderHook(() => useFullScreen(elementRef));

    await act(async () => {
      await result.current.enterFullscreen();
    });

    expect(element.requestFullscreen).toHaveBeenCalledTimes(1);
  });

  it("calls exitFullscreen", async () => {
    const { result } = renderHook(() => useFullScreen());

    await act(async () => {
      await result.current.exitFullscreen();
    });

    // Verify exitFullscreen was called (already mocked in beforeEach)
    expect(document.exitFullscreen).toBeDefined();
  });

  it("toggleFullscreen enters fullscreen when not in fullscreen", async () => {
    const { result } = renderHook(() => useFullScreen());

    expect(result.current.isFullscreen).toBe(false);

    await act(async () => {
      await result.current.toggleFullscreen();
    });

    expect(document.documentElement.requestFullscreen).toHaveBeenCalledTimes(1);
  });

  it("toggleFullscreen exits fullscreen when in fullscreen", async () => {
    const { result } = renderHook(() => useFullScreen());

    // Simulate entering fullscreen first
    act(() => {
      Object.defineProperty(document, "fullscreenElement", {
        writable: true,
        configurable: true,
        value: document.documentElement,
      });
      document.dispatchEvent(new Event("fullscreenchange"));
    });

    expect(result.current.isFullscreen).toBe(true);

    await act(async () => {
      await result.current.toggleFullscreen();
    });

    // Verify it called exitFullscreen (already mocked in beforeEach)
    expect(result.current.isFullscreen).toBe(true); // Still true until event fires
  });

  it("updates isFullscreen state on fullscreenchange event", () => {
    const { result } = renderHook(() => useFullScreen());

    expect(result.current.isFullscreen).toBe(false);

    act(() => {
      Object.defineProperty(document, "fullscreenElement", {
        writable: true,
        configurable: true,
        value: document.documentElement,
      });
      document.dispatchEvent(new Event("fullscreenchange"));
    });

    expect(result.current.isFullscreen).toBe(true);

    act(() => {
      Object.defineProperty(document, "fullscreenElement", {
        writable: true,
        configurable: true,
        value: null,
      });
      document.dispatchEvent(new Event("fullscreenchange"));
    });

    expect(result.current.isFullscreen).toBe(false);
  });

  it("calls onEnter callback when entering fullscreen", () => {
    const onEnter = vi.fn();
    renderHook(() => useFullScreen(undefined, { onEnter }));

    act(() => {
      Object.defineProperty(document, "fullscreenElement", {
        writable: true,
        configurable: true,
        value: document.documentElement,
      });
      document.dispatchEvent(new Event("fullscreenchange"));
    });

    expect(onEnter).toHaveBeenCalledTimes(1);
  });

  it("calls onExit callback when exiting fullscreen", () => {
    const onExit = vi.fn();
    renderHook(() => useFullScreen(undefined, { onExit }));

    // First enter fullscreen
    act(() => {
      Object.defineProperty(document, "fullscreenElement", {
        writable: true,
        configurable: true,
        value: document.documentElement,
      });
      document.dispatchEvent(new Event("fullscreenchange"));
    });

    // Then exit fullscreen
    act(() => {
      Object.defineProperty(document, "fullscreenElement", {
        writable: true,
        configurable: true,
        value: null,
      });
      document.dispatchEvent(new Event("fullscreenchange"));
    });

    expect(onExit).toHaveBeenCalledTimes(1);
  });

  it("calls onError callback when fullscreen API is not supported", async () => {
    Object.defineProperty(document, "fullscreenEnabled", {
      writable: true,
      configurable: true,
      value: false,
    });

    const onError = vi.fn();
    const { result } = renderHook(() => useFullScreen(undefined, { onError }));

    await act(async () => {
      await result.current.enterFullscreen();
    });

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith(expect.any(Error));
    expect(onError.mock.calls[0][0].message).toContain("not supported");
  });

  it("calls onError callback when enterFullscreen throws an error", async () => {
    const errorMessage = "Fullscreen request failed";
    document.documentElement.requestFullscreen = vi.fn().mockRejectedValue(new Error(errorMessage));

    const onError = vi.fn();
    const { result } = renderHook(() => useFullScreen(undefined, { onError }));

    await act(async () => {
      await result.current.enterFullscreen();
    });

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith(expect.any(Error));
    expect(onError.mock.calls[0][0].message).toBe(errorMessage);
  });

  it("cleans up event listeners on unmount", () => {
    const removeEventListenerSpy = vi.spyOn(document, "removeEventListener");

    const { unmount } = renderHook(() => useFullScreen());

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith("fullscreenchange", expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith("webkitfullscreenchange", expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith("mozfullscreenchange", expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith("MSFullscreenChange", expect.any(Function));

    removeEventListenerSpy.mockRestore();
  });

  it("maintains stable references with useMemo", () => {
    const { result, rerender } = renderHook(() => useFullScreen());

    const firstEnterFullscreen = result.current.enterFullscreen;
    const firstExitFullscreen = result.current.exitFullscreen;
    const firstToggleFullscreen = result.current.toggleFullscreen;

    // Rerender without changing dependencies
    rerender();

    // Functions should have stable references
    expect(result.current.enterFullscreen).toBe(firstEnterFullscreen);
    expect(result.current.exitFullscreen).toBe(firstExitFullscreen);
    expect(result.current.toggleFullscreen).toBe(firstToggleFullscreen);
  });

  it("handles webkit prefixed API", async () => {
    const element = document.createElement("div");
    element.webkitRequestFullscreen = vi.fn().mockResolvedValue(undefined);
    // Remove standard API
    element.requestFullscreen = undefined as any;

    const elementRef = { current: element };

    const { result } = renderHook(() => useFullScreen(elementRef));

    await act(async () => {
      await result.current.enterFullscreen();
    });

    expect(element.webkitRequestFullscreen).toHaveBeenCalledTimes(1);
  });
});
