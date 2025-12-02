import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import { type ButtonRef } from "./Button.types";
import IconButton from "./IconButton.component";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("IconButton", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders as button element", () => {
    const { container } = render(<IconButton icon="mdi:home" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button).toBeDefined();
    expect(button?.tagName).toBe("BUTTON");
  });

  it("renders icon correctly", () => {
    const { container } = render(<IconButton icon="mdi:home" />, { wrapper });

    // Icon renders as span in test environment
    const icon = container.querySelector<ButtonRef>("span");
    expect(icon).toBeDefined();
  });

  it("applies button type", () => {
    const { container } = render(<IconButton icon="mdi:home" type="submit" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.type).toBe("submit");
  });

  it("applies default button type", () => {
    const { container } = render(<IconButton icon="mdi:home" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.type).toBe("button");
  });

  it("renders with gradient background by default", () => {
    const { container } = render(<IconButton icon="mdi:home" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.color).toBe("#ffffff");
    expect(button?.style.background).toContain("radial-gradient");
  });

  it("applies square variant by default", () => {
    const { container } = render(<IconButton icon="mdi:home" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.borderRadius).toBe("8px");
  });

  it("applies circle variant correctly", () => {
    const { container } = render(<IconButton icon="mdi:home" circle />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.borderRadius).toBe("50%");
  });

  it("applies fixed size of 40px", () => {
    const { container } = render(<IconButton icon="mdi:home" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.width).toBe("40px");
    expect(button?.style.height).toBe("40px");
    expect(button?.style.minWidth).toBe("40px");
    expect(button?.style.minHeight).toBe("40px");
  });

  it("applies inline-flex display", () => {
    const { container } = render(<IconButton icon="mdi:home" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.display).toBe("inline-flex");
  });

  it("applies center alignment", () => {
    const { container } = render(<IconButton icon="mdi:home" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.alignItems).toBe("center");
    expect(button?.style.justifyContent).toBe("center");
  });

  it("applies custom color", () => {
    const { container } = render(<IconButton icon="mdi:home" color="#ff5722" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.background).toContain("#ff5722");
  });

  it("disables button when disabled is true", () => {
    const { container } = render(<IconButton icon="mdi:home" disabled />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.disabled).toBe(true);
  });

  it("applies disabled styles", () => {
    const { container } = render(<IconButton icon="mdi:home" disabled />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.cursor).toBe("not-allowed");
  });

  it("disables button when loading is true", () => {
    const { container } = render(<IconButton icon="mdi:home" loading />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.disabled).toBe(true);
  });

  it("applies loading cursor", () => {
    const { container } = render(<IconButton icon="mdi:home" loading />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.cursor).toBe("wait");
  });

  it("disabled and loading are mutually exclusive for disabled state", () => {
    const { container, rerender } = render(<IconButton icon="mdi:home" disabled />, { wrapper });

    let button = container.querySelector<ButtonRef>("button");
    expect(button?.style.cursor).toBe("not-allowed");

    rerender(
      <Theme.Provider>
        <IconButton icon="mdi:home" loading />
      </Theme.Provider>,
    );

    button = container.querySelector<ButtonRef>("button");
    expect(button?.style.cursor).toBe("wait");
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    const { container } = render(<IconButton icon="mdi:home" onClick={handleClick} />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    fireEvent.click(button!);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    const { container } = render(<IconButton icon="mdi:home" onClick={handleClick} disabled />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    fireEvent.click(button!);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("does not call onClick when loading", () => {
    const handleClick = vi.fn();
    const { container } = render(<IconButton icon="mdi:home" onClick={handleClick} loading />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    fireEvent.click(button!);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies custom className", () => {
    const { container } = render(<IconButton icon="mdi:home" className="custom-class" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.className).toContain("custom-class");
    expect(button?.className).toContain(COMPONENT_CLASSNAME_NAMES.IconButton);
  });

  it("applies custom styles", () => {
    const { container } = render(<IconButton icon="mdi:home" style={{ width: "48px" }} />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.width).toBe("48px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<IconButton icon="mdi:home" ref={ref} />, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("BUTTON");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(
      <IconButton icon="mdi:home" data-testid="test-icon-button" aria-label="Test icon button" />,
      { wrapper },
    );

    const button = container.querySelector<ButtonRef>('[data-testid="test-icon-button"]');
    expect(button).toBeDefined();
    expect(button?.getAttribute("aria-label")).toBe("Test icon button");
  });

  it("displays correct displayName", () => {
    expect(IconButton.displayName).toBe(COMPONENT_DISPLAY_NAMES.IconButton);
  });

  it("applies base styles correctly", () => {
    const { container } = render(<IconButton icon="mdi:home" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.boxSizing).toBe("border-box");
    expect((button?.style as any)["WebkitTapHighlightColor"]).toBe("transparent");
  });

  it("merges custom style with component styles", () => {
    const { container } = render(<IconButton icon="mdi:home" style={{ borderRadius: "12px" }} />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    // Custom style should override default style
    expect(button?.style.borderRadius).toBe("12px");
    // Base styles should still apply
    expect(button?.style.boxSizing).toBe("border-box");
  });

  it("supports custom styles via Theme.Provider", () => {
    const customStyles = {
      IconButton: {
        width: "50px",
        height: "50px",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
    );

    const { container } = render(<IconButton icon="mdi:home" />, { wrapper: customWrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.width).toBe("50px");
    expect(button?.style.height).toBe("50px");
  });

  it("switches between circle and square correctly", () => {
    const { container, rerender } = render(<IconButton icon="mdi:home" />, {
      wrapper,
    });

    let button = container.querySelector<ButtonRef>("button");
    expect(button?.style.borderRadius).toBe("8px");

    rerender(
      <Theme.Provider>
        <IconButton icon="mdi:home" circle />
      </Theme.Provider>,
    );

    button = container.querySelector<ButtonRef>("button");
    expect(button?.style.borderRadius).toBe("50%");
  });
});
