import { renderHook } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";

import useCustomStyle from "./index";

// Test wrapper with Theme.Provider
const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("useCustomStyle", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns empty object when displayName is undefined", () => {
    const { result } = renderHook(() => useCustomStyle({ displayName: undefined }), { wrapper });

    expect(result.current).toEqual({});
  });

  it("returns empty object when no custom styles are provided", () => {
    const { result } = renderHook(() => useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Button }), { wrapper });

    expect(result.current).toEqual({});
  });

  it("returns custom styles for a specific component", () => {
    const customStyles = {
      [COMPONENT_DISPLAY_NAMES.Button]: {
        backgroundColor: "#ff0000",
        color: "#ffffff",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
    );

    const { result } = renderHook(() => useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Button }), {
      wrapper: customWrapper,
    });

    expect(result.current).toEqual({
      backgroundColor: "#ff0000",
      color: "#ffffff",
    });
  });

  it("returns empty object when component has no custom styles", () => {
    const customStyles = {
      [COMPONENT_DISPLAY_NAMES.Button]: {
        backgroundColor: "#ff0000",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
    );

    const { result } = renderHook(() => useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Avatar }), {
      wrapper: customWrapper,
    });

    expect(result.current).toEqual({});
  });

  it("handles multiple component custom styles", () => {
    const customStyles = {
      [COMPONENT_DISPLAY_NAMES.Button]: {
        backgroundColor: "#ff0000",
      },
      [COMPONENT_DISPLAY_NAMES.Avatar]: {
        borderRadius: "50%",
      },
      [COMPONENT_DISPLAY_NAMES.Card]: {
        padding: "20px",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
    );

    const { result: buttonResult } = renderHook(() => useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Button }), {
      wrapper: customWrapper,
    });

    const { result: avatarResult } = renderHook(() => useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Avatar }), {
      wrapper: customWrapper,
    });

    const { result: cardResult } = renderHook(() => useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Card }), {
      wrapper: customWrapper,
    });

    expect(buttonResult.current).toEqual({ backgroundColor: "#ff0000" });
    expect(avatarResult.current).toEqual({ borderRadius: "50%" });
    expect(cardResult.current).toEqual({ padding: "20px" });
  });

  it("supports all valid CSS properties", () => {
    const customStyles = {
      [COMPONENT_DISPLAY_NAMES.Box]: {
        display: "flex",
        flexDirection: "column" as const,
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
    );

    const { result } = renderHook(() => useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Box }), {
      wrapper: customWrapper,
    });

    expect(result.current).toEqual(customStyles[COMPONENT_DISPLAY_NAMES.Box]);
  });

  it("maintains stable references with useMemo", () => {
    const customStyles = {
      [COMPONENT_DISPLAY_NAMES.Button]: {
        backgroundColor: "#ff0000",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
    );

    const { result, rerender } = renderHook(() => useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Button }), {
      wrapper: customWrapper,
    });

    const firstResult = result.current;

    // Rerender without changing dependencies
    rerender();

    // References should be stable
    expect(result.current).toBe(firstResult);
  });

  it("handles nested component styles like FormField.Text", () => {
    const customStyles = {
      [COMPONENT_DISPLAY_NAMES.FormFieldText]: {
        border: "2px solid blue",
        padding: "12px",
      },
      [COMPONENT_DISPLAY_NAMES.FormFieldTextInput]: {
        fontSize: "16px",
        color: "#333",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
    );

    const { result: fieldResult } = renderHook(
      () => useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.FormFieldText }),
      { wrapper: customWrapper },
    );

    const { result: inputResult } = renderHook(
      () => useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.FormFieldTextInput }),
      { wrapper: customWrapper },
    );

    expect(fieldResult.current).toEqual({
      border: "2px solid blue",
      padding: "12px",
    });

    expect(inputResult.current).toEqual({
      fontSize: "16px",
      color: "#333",
    });
  });

  it("returns empty object when customStyles is null or undefined", () => {
    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={undefined}>{children}</Theme.Provider>
    );

    const { result } = renderHook(() => useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Button }), {
      wrapper: customWrapper,
    });

    expect(result.current).toEqual({});
  });
});
