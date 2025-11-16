import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import useElementHoverEvents from "./index";

describe("useElementHoverEvents", () => {
  it("returns initial state with isHovered as false", () => {
    const { result } = renderHook(() => useElementHoverEvents({}));

    expect(result.current.isHovered).toBe(false);
    expect(typeof result.current.MouseEnterEvent).toBe("function");
    expect(typeof result.current.MouseLeaveEvent).toBe("function");
  });

  it("sets isHovered to true when mouse enters", () => {
    const { result } = renderHook(() => useElementHoverEvents({}));

    act(() => {
      result.current.MouseEnterEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(result.current.isHovered).toBe(true);
  });

  it("sets isHovered to false when mouse leaves", () => {
    const { result } = renderHook(() => useElementHoverEvents({}));

    act(() => {
      result.current.MouseEnterEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(result.current.isHovered).toBe(true);

    act(() => {
      result.current.MouseLeaveEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(result.current.isHovered).toBe(false);
  });

  it("does not change isHovered when disabled", () => {
    const { result } = renderHook(() => useElementHoverEvents({ disabled: true }));

    act(() => {
      result.current.MouseEnterEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(result.current.isHovered).toBe(false);

    act(() => {
      result.current.MouseLeaveEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(result.current.isHovered).toBe(false);
  });

  it("calls custom onMouseEnter callback", () => {
    const onMouseEnter = vi.fn();
    const { result } = renderHook(() => useElementHoverEvents({ onMouseEnter }));

    const mockEvent = {} as React.MouseEvent<HTMLElement>;

    act(() => {
      result.current.MouseEnterEvent(mockEvent);
    });

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseEnter).toHaveBeenCalledWith(mockEvent);
  });

  it("calls custom onMouseLeave callback", () => {
    const onMouseLeave = vi.fn();
    const { result } = renderHook(() => useElementHoverEvents({ onMouseLeave }));

    const mockEvent = {} as React.MouseEvent<HTMLElement>;

    act(() => {
      result.current.MouseLeaveEvent(mockEvent);
    });

    expect(onMouseLeave).toHaveBeenCalledTimes(1);
    expect(onMouseLeave).toHaveBeenCalledWith(mockEvent);
  });

  it("calls onLeaveCallback when mouse leaves", () => {
    const onLeaveCallback = vi.fn();
    const { result } = renderHook(() => useElementHoverEvents({ onLeaveCallback }));

    act(() => {
      result.current.MouseEnterEvent({} as React.MouseEvent<HTMLElement>);
    });

    act(() => {
      result.current.MouseLeaveEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(onLeaveCallback).toHaveBeenCalledTimes(1);
  });

  it("does not call onLeaveCallback when disabled", () => {
    const onLeaveCallback = vi.fn();
    const { result } = renderHook(() => useElementHoverEvents({ disabled: true, onLeaveCallback }));

    act(() => {
      result.current.MouseLeaveEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(onLeaveCallback).not.toHaveBeenCalled();
  });

  it("calls custom callbacks even when disabled", () => {
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const { result } = renderHook(() => useElementHoverEvents({ disabled: true, onMouseEnter, onMouseLeave }));

    act(() => {
      result.current.MouseEnterEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(onMouseEnter).toHaveBeenCalledTimes(1);

    act(() => {
      result.current.MouseLeaveEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });

  it("resets isHovered when disabled changes to true", () => {
    const { result, rerender } = renderHook(({ disabled }) => useElementHoverEvents({ disabled }), {
      initialProps: { disabled: false },
    });

    act(() => {
      result.current.MouseEnterEvent({} as React.MouseEvent<HTMLElement>);
    });

    expect(result.current.isHovered).toBe(true);

    rerender({ disabled: true });

    expect(result.current.isHovered).toBe(false);
  });
});
