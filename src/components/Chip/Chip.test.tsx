import { fireEvent, render, screen } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";

import Chip from "./Chip.component";
import type { ChipRef } from "./Chip.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Chip", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders text correctly", () => {
    render(<Chip text="Test Chip" />, { wrapper });

    expect(screen.getByText("Test Chip")).toBeDefined();
  });

  it("renders as div element with Box component", () => {
    const { container } = render(<Chip text="Test" />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip).toBeDefined();
    expect(chip?.tagName).toBe("DIV");
  });

  it("applies inline-flex display", () => {
    const { container } = render(<Chip text="Test" />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip?.style.display).toBe("inline-flex");
  });

  it("applies default height of 28px", () => {
    const { container } = render(<Chip text="Test" />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip?.style.height).toBe("28px");
  });

  it("applies border radius", () => {
    const { container } = render(<Chip text="Test" />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip?.style.borderRadius).toBe("14px");
  });

  it("applies solid border style", () => {
    const { container } = render(<Chip text="Test" />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip?.style.borderStyle).toBe("solid");
    expect(chip?.style.borderWidth).toBe("1.5px");
  });

  it("applies default background color", () => {
    const { container } = render(<Chip text="Test" />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip?.style.backgroundColor).toBeTruthy();
  });

  it("applies custom color", () => {
    const { container } = render(<Chip text="Test" color="#ff5722" />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip?.style.backgroundColor).toBe("#ff5722");
  });

  it("applies white text color by default", () => {
    const { container } = render(<Chip text="Test" />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip?.style.color).toBe("#FFFFFF");
  });

  it("is not clickable by default (no onClick)", () => {
    const { container } = render(<Chip text="Test" />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip?.style.cursor).toBe("default");
  });

  it("is clickable when onClick is provided", () => {
    const handleClick = vi.fn();
    const { container } = render(<Chip text="Test" onClick={handleClick} />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip?.style.cursor).toBe("pointer");
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    const { container } = render(<Chip text="Test" onClick={handleClick} />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    fireEvent.click(chip!);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when not clickable", () => {
    const handleClick = vi.fn();
    const { container } = render(<Chip text="Test" />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    fireEvent.click(chip!);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders Typography.Text component for text", () => {
    const { container } = render(<Chip text="Test" />, { wrapper });

    const text = container.querySelector<ChipRef>("small");
    expect(text).toBeDefined();
    expect(text?.textContent).toBe("Test");
  });

  it("renders Avatar when AvatarProps is provided", () => {
    const { container } = render(<Chip text="Test" AvatarProps={{ text: "T" }} />, { wrapper });

    // Avatar renders as span
    const avatar = container.querySelector<ChipRef>("span[class*='__VENOMOUS_UI__Avatar']");
    expect(avatar).toBeDefined();
  });

  it("does not render Avatar when AvatarProps is not provided", () => {
    const { container } = render(<Chip text="Test" />, { wrapper });

    const avatar = container.querySelector<ChipRef>("span[class*='__VENOMOUS_UI__Avatar']");
    expect(avatar).toBeNull();
  });

  it("applies custom className", () => {
    const { container } = render(<Chip text="Test" className="custom-class" />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip?.className).toContain("custom-class");
    expect(chip?.className).toContain(COMPONENT_CLASSNAME_NAMES.Chip);
  });

  it("applies custom styles", () => {
    const { container } = render(<Chip text="Test" style={{ padding: "0 20px" }} />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip?.style.padding).toBe("0px 20px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Chip text="Test" ref={ref} />, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("DIV");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(<Chip text="Test" data-testid="test-chip" aria-label="Test chip" />, { wrapper });

    const chip = container.querySelector('[data-testid="test-chip"]');
    expect(chip).toBeDefined();
    expect(chip?.getAttribute("aria-label")).toBe("Test chip");
  });

  it("displays correct displayName", () => {
    expect(Chip.displayName).toBe(COMPONENT_DISPLAY_NAMES.Chip);
  });

  it("applies base styles correctly", () => {
    const { container } = render(<Chip text="Test" />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip?.style.boxSizing).toBe("border-box");
    expect((chip?.style as any)["WebkitTapHighlightColor"]).toBe("transparent");
    expect(chip?.style.userSelect).toBe("none");
  });

  it("applies whiteSpace nowrap", () => {
    const { container } = render(<Chip text="Test" />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip?.style.whiteSpace).toBe("nowrap");
  });

  it("merges custom style with component styles", () => {
    const { container } = render(<Chip text="Test" style={{ height: "32px" }} />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    // Custom style should override default style
    expect(chip?.style.height).toBe("32px");
    // Base styles should still apply
    expect(chip?.style.boxSizing).toBe("border-box");
  });

  it("supports custom styles via Theme.Provider", () => {
    const customStyles = {
      Chip: {
        height: "36px",
        borderRadius: "18px",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
    );

    const { container } = render(<Chip text="Test" />, { wrapper: customWrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip?.style.height).toBe("36px");
    expect(chip?.style.borderRadius).toBe("18px");
  });

  it("applies gap for spacing between Avatar and text", () => {
    const { container } = render(<Chip text="Test" AvatarProps={{ text: "T" }} />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip?.style.gap).toBe("6px");
  });

  it("applies alignItems center", () => {
    const { container } = render(<Chip text="Test" />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip?.style.alignItems).toBe("center");
  });

  it("renders clickable chip in dark mode", () => {
    // Set dark mode
    localStorage.setItem("venomous-ui-theme-mode", "dark");

    const handleClick = vi.fn();
    const { container } = render(<Chip text="Dark Mode Chip" onClick={handleClick} />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    expect(chip).toBeDefined();

    // Clean up
    localStorage.removeItem("venomous-ui-theme-mode");
  });

  it("handles hover in dark mode", () => {
    // Set dark mode
    localStorage.setItem("venomous-ui-theme-mode", "dark");

    const handleClick = vi.fn();
    const { container } = render(<Chip text="Hover Dark" onClick={handleClick} />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    if (chip) {
      fireEvent.mouseEnter(chip);
      fireEvent.mouseLeave(chip); // Test combined mouse leave event
    }

    expect(chip).toBeDefined();

    // Clean up
    localStorage.removeItem("venomous-ui-theme-mode");
  });

  it("handles click in dark mode", () => {
    // Set dark mode
    localStorage.setItem("venomous-ui-theme-mode", "dark");

    const handleClick = vi.fn();
    const { container } = render(<Chip text="Click Dark" onClick={handleClick} />, { wrapper });

    const chip = container.querySelector<ChipRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Chip}']`);
    if (chip) {
      fireEvent.mouseDown(chip);
      fireEvent.mouseUp(chip);
    }

    expect(chip).toBeDefined();

    // Clean up
    localStorage.removeItem("venomous-ui-theme-mode");
  });
});
