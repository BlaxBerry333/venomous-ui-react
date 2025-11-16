import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import useElementMouseEvents from "./index";

describe("useElementMouseEvents", () => {
  it("returns initial state with isClicked as false", () => {
    const { result } = renderHook(() => useElementMouseEvents({}));

    expect(result.current.isClicked).toBe(false);
    expect(typeof result.current.MouseDownEvent).toBe("function");
    expect(typeof result.current.MouseUpEvent).toBe("function");
  });

  it("sets isClicked to true when mouse down", () => {
    const { result } = renderHook(() => useElementMouseEvents({}));

    act(() => {
      result.current.MouseDownEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(result.current.isClicked).toBe(true);
  });

  it("sets isClicked to false when mouse up", () => {
    const { result } = renderHook(() => useElementMouseEvents({}));

    act(() => {
      result.current.MouseDownEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(result.current.isClicked).toBe(true);

    act(() => {
      result.current.MouseUpEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(result.current.isClicked).toBe(false);
  });

  it("does not change isClicked when disabled", () => {
    const { result } = renderHook(() => useElementMouseEvents({ disabled: true }));

    act(() => {
      result.current.MouseDownEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(result.current.isClicked).toBe(false);

    act(() => {
      result.current.MouseUpEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(result.current.isClicked).toBe(false);
  });

  it("calls custom onMouseDown callback", () => {
    const onMouseDown = vi.fn();
    const { result } = renderHook(() => useElementMouseEvents({ onMouseDown }));

    const mockEvent = {} as React.MouseEvent<HTMLElement>;

    act(() => {
      result.current.MouseDownEvent(mockEvent);
    });

    expect(onMouseDown).toHaveBeenCalledTimes(1);
    expect(onMouseDown).toHaveBeenCalledWith(mockEvent);
  });

  it("calls custom onMouseUp callback", () => {
    const onMouseUp = vi.fn();
    const { result } = renderHook(() => useElementMouseEvents({ onMouseUp }));

    const mockEvent = {} as React.MouseEvent<HTMLElement>;

    act(() => {
      result.current.MouseUpEvent(mockEvent);
    });

    expect(onMouseUp).toHaveBeenCalledTimes(1);
    expect(onMouseUp).toHaveBeenCalledWith(mockEvent);
  });

  it("calls custom callbacks even when disabled", () => {
    const onMouseDown = vi.fn();
    const onMouseUp = vi.fn();
    const { result } = renderHook(() => useElementMouseEvents({ disabled: true, onMouseDown, onMouseUp }));

    act(() => {
      result.current.MouseDownEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(onMouseDown).toHaveBeenCalledTimes(1);

    act(() => {
      result.current.MouseUpEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(onMouseUp).toHaveBeenCalledTimes(1);
  });

  it("resets isClicked when disabled changes to true", () => {
    const { result, rerender } = renderHook(({ disabled }) => useElementMouseEvents({ disabled }), {
      initialProps: { disabled: false },
    });

    act(() => {
      result.current.MouseDownEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(result.current.isClicked).toBe(true);

    rerender({ disabled: true });

    expect(result.current.isClicked).toBe(false);
  });

  it("handles multiple mouse down/up cycles", () => {
    const { result } = renderHook(() => useElementMouseEvents({}));

    // First cycle
    act(() => {
      result.current.MouseDownEvent({} as React.MouseEvent<HTMLElement>);
    });
    expect(result.current.isClicked).toBe(true);

    act(() => {
      result.current.MouseUpEvent({} as React.MouseEvent<HTMLElement>);
    });
    expect(result.current.isClicked).toBe(false);

    // Second cycle
    act(() => {
      result.current.MouseDownEvent({} as React.MouseEvent<HTMLElement>);
    });
    expect(result.current.isClicked).toBe(true);

    act(() => {
      result.current.MouseUpEvent({} as React.MouseEvent<HTMLElement>);
    });
    expect(result.current.isClicked).toBe(false);
  });
});
