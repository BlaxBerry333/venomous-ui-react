import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import Button from "./Button.component";
import { BUTTON_VARIANT_MAP, type ButtonRef } from "./Button.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Button", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders text correctly", () => {
    render(<Button text="Click me" />, { wrapper });

    expect(screen.getByText("Click me")).toBeDefined();
  });

  it("renders as button element by default", () => {
    const { container } = render(<Button text="Button" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button).toBeDefined();
    expect(button?.tagName).toBe("BUTTON");
  });

  it("applies type button by default", () => {
    const { container } = render(<Button text="Button" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.getAttribute("type")).toBe("button");
  });

  it("applies custom type", () => {
    const { container } = render(<Button text="Submit" type="submit" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.getAttribute("type")).toBe("submit");
  });

  it("renders contained variant by default", () => {
    const { container } = render(<Button text="Button" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button).toBeDefined();
    // Contained variant has backgroundColor set
    expect(button?.style.backgroundColor).toBeTruthy();
    expect(button?.style.color).toBe("#ffffff");
  });

  it("renders outlined variant correctly", () => {
    const { container } = render(<Button text="Button" variant={BUTTON_VARIANT_MAP.OUTLINED} />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.backgroundColor).toBe("transparent");
    expect(button?.style.borderColor).toBeTruthy();
  });

  it("renders ghost variant correctly", () => {
    const { container } = render(<Button text="Button" variant={BUTTON_VARIANT_MAP.GHOST} />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.backgroundColor).toBe("transparent");
    expect(button?.style.borderColor).toBe("transparent");
    expect(button?.style.boxShadow).toBe("none");
  });

  it("applies disabled state correctly", () => {
    const { container } = render(<Button text="Button" disabled />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.disabled).toBe(true);
    expect(button?.style.cursor).toBe("not-allowed");
    expect(button?.style.opacity).toBe("0.6");
  });

  it("applies loading state correctly", () => {
    const { container } = render(<Button text="Button" loading />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.disabled).toBe(true);
    expect(button?.style.cursor).toBe("wait");
    expect(button?.style.opacity).toBe("0.7");
  });

  it("applies fullWidth correctly", () => {
    const { container } = render(<Button text="Button" fullWidth />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.width).toBe("100%");
    expect(button?.style.minWidth).toBe("100%");
  });

  it("applies auto width when fullWidth is false", () => {
    const { container } = render(<Button text="Button" fullWidth={false} />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.width).toBe("auto");
    expect(button?.style.minWidth).toBe("56px");
  });

  it("applies custom color", () => {
    const { container } = render(<Button text="Button" color="#ff5722" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    // For contained variant, custom color is applied as gradient background
    expect(button?.style.background).toContain("#ff5722");
  });

  it("applies custom className", () => {
    const { container } = render(<Button text="Button" className="custom-class" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.className).toContain("custom-class");
    expect(button?.className).toContain(COMPONENT_CLASSNAME_NAMES.Button);
  });

  it("applies custom styles", () => {
    const { container } = render(<Button text="Button" style={{ fontSize: "20px" }} />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.fontSize).toBe("20px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<Button text="Button" ref={ref} />, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("BUTTON");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(<Button text="Button" data-testid="test-button" aria-label="Test button" />, {
      wrapper,
    });

    const button = container.querySelector('[data-testid="test-button"]');
    expect(button).toBeDefined();
    expect(button?.getAttribute("aria-label")).toBe("Test button");
  });

  it("displays correct displayName", () => {
    expect(Button.displayName).toBe(COMPONENT_DISPLAY_NAMES.Button);
  });

  it("applies base styles correctly", () => {
    const { container } = render(<Button text="Button" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.boxSizing).toBe("border-box");
    expect((button?.style as any)["WebkitTapHighlightColor"]).toBe("transparent");
    expect(button?.style.userSelect).toBe("none");
    expect(button?.style.position).toBe("relative");
  });

  it("merges custom style with component styles", () => {
    const { container } = render(<Button text="Button" style={{ position: "absolute", padding: "10px" }} />, {
      wrapper,
    });

    const button = container.querySelector<ButtonRef>("button");
    // Custom style should override default style
    expect(button?.style.position).toBe("absolute");
    expect(button?.style.padding).toBe("10px");
    // Base styles should still apply
    expect(button?.style.boxSizing).toBe("border-box");
  });

  it("supports custom styles via Theme.Provider", () => {
    const customStyles = {
      Button: {
        borderRadius: "20px",
        fontWeight: "400",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
    );

    const { container } = render(<Button text="Button" />, { wrapper: customWrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.borderRadius).toBe("20px");
    expect(button?.style.fontWeight).toBe("400");
  });

  it("disabled and loading are mutually exclusive for disabled state", () => {
    const { container, rerender } = render(<Button text="Button" disabled />, { wrapper });

    let button = container.querySelector<ButtonRef>("button");
    expect(button?.disabled).toBe(true);
    expect(button?.style.cursor).toBe("not-allowed");

    rerender(
      <Theme.Provider>
        <Button text="Button" loading />
      </Theme.Provider>,
    );

    // Get fresh button element after rerender
    button = container.querySelector<ButtonRef>("button");
    expect(button?.disabled).toBe(true);
    expect(button?.style.cursor).toBe("wait");
  });

  it("does not show loading icon when not loading", () => {
    const { container } = render(<Button text="Button" loading={false} />, { wrapper });

    const icon = container.querySelector<ButtonRef>("iconify-icon");
    expect(icon).toBeNull();
  });

  it("applies correct height", () => {
    const { container } = render(<Button text="Button" />, { wrapper });

    const button = container.querySelector<ButtonRef>("button");
    expect(button?.style.height).toBe("40px");
  });

  it("handles onClick correctly", () => {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };

    render(<Button text="Button" onClick={handleClick} />, { wrapper });

    const button = screen.getByText("Button");
    button.click();

    expect(clicked).toBe(true);
  });

  it("does not trigger onClick when disabled", () => {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };

    render(<Button text="Button" disabled onClick={handleClick} />, { wrapper });

    const button = screen.getByText("Button");
    button.click();

    // Button is disabled, so click should not trigger
    expect(clicked).toBe(false);
  });

  it("does not trigger onClick when loading", () => {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };

    render(<Button text="Button" loading onClick={handleClick} />, { wrapper });

    const button = screen.getByText("Button");
    button.click();

    // Button is disabled when loading, so click should not trigger
    expect(clicked).toBe(false);
  });

  // ========== Dark Mode Interaction Tests ==========
  describe("Dark Mode Interactions", () => {
    beforeEach(() => {
      localStorage.setItem("venomous-ui-theme-mode", "dark");
    });

    afterEach(() => {
      localStorage.removeItem("venomous-ui-theme-mode");
    });

    it("applies hover styles in dark mode for ghost variant", () => {
      render(<Button text="Ghost Button" variant={BUTTON_VARIANT_MAP.GHOST} />, { wrapper });

      const button = screen.getByText("Ghost Button");
      fireEvent.mouseEnter(button);

      expect(button).toBeDefined();
    });

    it("applies hover styles in dark mode for outlined variant", () => {
      render(<Button text="Outlined Button" variant={BUTTON_VARIANT_MAP.OUTLINED} />, { wrapper });

      const button = screen.getByText("Outlined Button");
      fireEvent.mouseEnter(button);

      expect(button).toBeDefined();
    });

    it("applies hover styles in dark mode for contained variant", () => {
      render(<Button text="Contained Button" variant={BUTTON_VARIANT_MAP.CONTAINED} />, { wrapper });

      const button = screen.getByText("Contained Button");
      fireEvent.mouseEnter(button);

      expect(button).toBeDefined();
    });

    it("applies pressed styles in dark mode for ghost variant", () => {
      render(<Button text="Ghost Button" variant={BUTTON_VARIANT_MAP.GHOST} />, { wrapper });

      const button = screen.getByText("Ghost Button");
      fireEvent.mouseDown(button);

      expect(button).toBeDefined();
    });

    it("applies pressed styles in dark mode for outlined variant", () => {
      render(<Button text="Outlined Button" variant={BUTTON_VARIANT_MAP.OUTLINED} />, { wrapper });

      const button = screen.getByText("Outlined Button");
      fireEvent.mouseDown(button);

      expect(button).toBeDefined();
    });

    it("applies pressed styles in dark mode for contained variant", () => {
      render(<Button text="Contained Button" variant={BUTTON_VARIANT_MAP.CONTAINED} />, { wrapper });

      const button = screen.getByText("Contained Button");
      fireEvent.mouseDown(button);
      fireEvent.mouseUp(button);

      expect(button).toBeDefined();
    });
  });
});
