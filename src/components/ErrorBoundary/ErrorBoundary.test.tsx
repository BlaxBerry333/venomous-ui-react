import { render, screen } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import ErrorBoundary from "./ErrorBoundary.component";

describe("ErrorBoundary", () => {
  const originalConsoleError = console.error;

  beforeEach(() => {
    // Suppress console.error for cleaner test output (React error boundaries log errors)
    console.error = vi.fn();
  });

  afterEach(() => {
    console.error = originalConsoleError;
    vi.restoreAllMocks();
  });

  it("renders children when no error occurs", () => {
    render(
      <ErrorBoundary fallback={() => <div>Error occurred</div>}>
        <div>Child content</div>
      </ErrorBoundary>,
    );

    expect(screen.getByText("Child content")).toBeDefined();
  });

  it("handles multiple children correctly", () => {
    render(
      <ErrorBoundary fallback={() => <div>Error occurred</div>}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </ErrorBoundary>,
    );

    expect(screen.getByText("Child 1")).toBeDefined();
    expect(screen.getByText("Child 2")).toBeDefined();
    expect(screen.getByText("Child 3")).toBeDefined();
  });

  it("getDerivedStateFromError sets hasError to true", () => {
    const error = new Error("Test error");
    const derivedState = ErrorBoundary.getDerivedStateFromError(error);

    expect(derivedState.hasError).toBe(true);
    expect(derivedState.error).toBe(error);
  });

  it("componentDidCatch calls onError callback", () => {
    const fallback = vi.fn(() => <div>Error</div>);
    const onError = vi.fn();

    class TestErrorBoundary extends ErrorBoundary {
      testComponentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.componentDidCatch(error, errorInfo);
      }
    }

    const wrapper = new TestErrorBoundary({
      children: <div>Child</div>,
      fallback,
      onError,
    });

    const error = new Error("Test error");
    const errorInfo: React.ErrorInfo = { componentStack: "Test stack" };

    wrapper.testComponentDidCatch(error, errorInfo);

    expect(onError).toHaveBeenCalledWith(error, errorInfo);
    expect(onError).toHaveBeenCalledTimes(1);
  });

  it("reset method calls setState with reset values", () => {
    const instance = new ErrorBoundary({
      children: <div>Child</div>,
      fallback: () => <div>Error</div>,
    });

    // Spy on setState to verify it's called with correct values
    const setStateSpy = vi.spyOn(instance, "setState");

    instance.reset();

    expect(setStateSpy).toHaveBeenCalledWith({
      hasError: false,
      error: null,
      errorInfo: null,
    });
    expect(setStateSpy).toHaveBeenCalledTimes(1);

    setStateSpy.mockRestore();
  });

  it("render method returns children when no error", () => {
    const fallback = vi.fn(() => <div>Error</div>);

    render(
      <ErrorBoundary fallback={fallback}>
        <div>Normal content</div>
      </ErrorBoundary>,
    );

    expect(screen.getByText("Normal content")).toBeDefined();
    expect(fallback).not.toHaveBeenCalled();
  });

  it("render method returns fallback when error state is set", () => {
    const error = new Error("Test error");
    const errorInfo: React.ErrorInfo = { componentStack: "Test stack" };
    const fallback = vi.fn((e, ei, reset) => (
      <div>
        <div>Error: {e.message}</div>
        <button onClick={reset}>Reset</button>
      </div>
    ));

    class TestErrorBoundary extends ErrorBoundary {
      constructor(props: any) {
        super(props);
        // Manually set error state for testing
        this.state = {
          hasError: true,
          error,
          errorInfo,
        };
      }
    }

    render(
      <TestErrorBoundary fallback={fallback}>
        <div>Child</div>
      </TestErrorBoundary>,
    );

    expect(fallback).toHaveBeenCalledWith(error, errorInfo, expect.any(Function));
    expect(screen.getByText("Error: Test error")).toBeDefined();
  });

  it("displays correct displayName", () => {
    expect(ErrorBoundary.displayName).toBe(COMPONENT_DISPLAY_NAMES.ErrorBoundary);
  });

  it("initializes with correct default state", () => {
    const instance = new ErrorBoundary({
      children: <div>Child</div>,
      fallback: () => <div>Error</div>,
    });

    expect(instance.state.hasError).toBe(false);
    expect(instance.state.error).toBeNull();
    expect(instance.state.errorInfo).toBeNull();
  });

  it("fallback receives reset function", () => {
    let resetFunction: (() => void) | null = null;
    const error = new Error("Test error");
    const errorInfo: React.ErrorInfo = { componentStack: "Test stack" };

    const fallback = vi.fn((e, ei, reset) => {
      resetFunction = reset;
      return <div>Error</div>;
    });

    class TestErrorBoundary extends ErrorBoundary {
      constructor(props: any) {
        super(props);
        this.state = {
          hasError: true,
          error,
          errorInfo,
        };
      }
    }

    const instance = new TestErrorBoundary({
      children: <div>Child</div>,
      fallback,
    });

    instance.render();

    // Verify fallback receives a reset function
    expect(resetFunction).toBeDefined();
    expect(typeof resetFunction).toBe("function");

    // Verify calling reset function calls setState
    const setStateSpy = vi.spyOn(instance, "setState");

    resetFunction!();

    expect(setStateSpy).toHaveBeenCalledWith({
      hasError: false,
      error: null,
      errorInfo: null,
    });

    setStateSpy.mockRestore();
  });
});
