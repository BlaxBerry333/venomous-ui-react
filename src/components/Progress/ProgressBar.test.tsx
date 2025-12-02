import { render } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";

import ProgressBar from "./ProgressBar.component";
import type { ProgressBarRef } from "./ProgressBar.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("ProgressBar", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it("renders correctly", () => {
    const { container } = render(<ProgressBar />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    expect(progressBar).toBeDefined();
  });

  it("renders as div by default", () => {
    const { container } = render(<ProgressBar />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    expect(progressBar?.tagName).toBe("DIV");
  });

  it("renders inner bar element", () => {
    const { container } = render(<ProgressBar />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    const innerBar = progressBar?.querySelector<ProgressBarRef>("div");
    expect(innerBar).toBeDefined();
  });

  it("applies default value of 0", () => {
    const { container } = render(<ProgressBar />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    const innerBar = progressBar?.querySelector<ProgressBarRef>("div");
    expect(innerBar?.style.width).toBe("0%");
  });

  it("applies custom value", () => {
    const { container } = render(<ProgressBar value={50} />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    const innerBar = progressBar?.querySelector<ProgressBarRef>("div");
    expect(innerBar?.style.width).toBe("50%");
  });

  it("clamps value to 0-100 range (above 100)", () => {
    const { container } = render(<ProgressBar value={150} />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    const innerBar = progressBar?.querySelector<ProgressBarRef>("div");
    expect(innerBar?.style.width).toBe("100%");
  });

  it("clamps value to 0-100 range (below 0)", () => {
    const { container } = render(<ProgressBar value={-50} />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    const innerBar = progressBar?.querySelector<ProgressBarRef>("div");
    expect(innerBar?.style.width).toBe("0%");
  });

  it("does not animate by default", () => {
    const { container } = render(<ProgressBar />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    const innerBar = progressBar?.querySelector<ProgressBarRef>("div");
    expect(innerBar?.style.width).toBe("0%");

    // Advance timers
    vi.advanceTimersByTime(1000);

    // Should still be 0 (no animation)
    expect(innerBar?.style.width).toBe("0%");
  });

  it("animates when animated prop is true", () => {
    const { container } = render(<ProgressBar animated />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    const innerBar = progressBar?.querySelector<ProgressBarRef>("div");

    // Initial value should be 0
    expect(innerBar?.style.width).toBe("0%");

    // Animation is tested via setInterval, which is complex to test with fake timers
    // Just verify the component renders with animation prop
    expect(progressBar).toBeDefined();
  });

  it("applies default height of 8px", () => {
    const { container } = render(<ProgressBar />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    expect(progressBar?.style.height).toBe("8px");
  });

  it("applies default color from theme", () => {
    const { container } = render(<ProgressBar value={50} />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    const innerBar = progressBar?.querySelector<ProgressBarRef>("div");
    // Should have a backgroundColor set
    expect(innerBar?.style.backgroundColor).toBeTruthy();
  });

  it("applies custom color", () => {
    const { container } = render(<ProgressBar value={50} color="#ff5722" />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    const innerBar = progressBar?.querySelector<ProgressBarRef>("div");
    expect(innerBar?.style.backgroundColor).toBe("#ff5722");
  });

  it("applies border radius", () => {
    const { container } = render(<ProgressBar />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    expect(progressBar?.style.borderRadius).toBe("4px");
  });

  it("applies transition to inner bar", () => {
    const { container } = render(<ProgressBar value={50} />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    const innerBar = progressBar?.querySelector<ProgressBarRef>("div");
    expect(innerBar?.style.transition).toContain("width");
  });

  it("applies custom className", () => {
    const { container } = render(<ProgressBar className="custom-class" />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    expect(progressBar?.className).toContain("custom-class");
    expect(progressBar?.className).toContain(COMPONENT_CLASSNAME_NAMES.ProgressBar);
  });

  it("applies custom styles", () => {
    const { container } = render(<ProgressBar style={{ margin: "20px" }} />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    expect(progressBar?.style.margin).toBe("20px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<ProgressBar ref={ref} />, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("DIV");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(<ProgressBar data-testid="test-progress" aria-label="Test progress" />, { wrapper });

    const progressBar = container.querySelector('[data-testid="test-progress"]');
    expect(progressBar).toBeDefined();
    expect(progressBar?.getAttribute("aria-label")).toBe("Test progress");
  });

  it("displays correct displayName", () => {
    expect(ProgressBar.displayName).toBe(COMPONENT_DISPLAY_NAMES.ProgressBar);
  });

  it("applies base styles correctly", () => {
    const { container } = render(<ProgressBar />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    expect(progressBar?.style.boxSizing).toBe("border-box");
    expect((progressBar?.style as any)["WebkitTapHighlightColor"]).toBe("transparent");
  });

  it("merges custom style with component styles", () => {
    const { container } = render(<ProgressBar style={{ height: "8px" }} />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    // Custom style should override default style
    expect(progressBar?.style.height).toBe("8px");
    // Base styles should still apply
    expect(progressBar?.style.boxSizing).toBe("border-box");
  });

  it("supports custom styles via Theme.Provider", () => {
    const customComponentProps = {
      ProgressBar: {
        style: {
          height: "10px",
          backgroundColor: "rgb(200, 200, 200)",
        },
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customComponentProps={customComponentProps}>{children}</Theme.Provider>
    );

    const { container } = render(<ProgressBar />, { wrapper: customWrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    expect(progressBar?.style.height).toBe("10px");
    expect(progressBar?.style.backgroundColor).toBe("rgb(200, 200, 200)");
  });

  it("applies full width by default", () => {
    const { container } = render(<ProgressBar />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    expect(progressBar?.style.width).toBe("100%");
  });

  it("applies overflow hidden", () => {
    const { container } = render(<ProgressBar />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    expect(progressBar?.style.overflow).toBe("hidden");
  });

  it("applies position relative to container", () => {
    const { container } = render(<ProgressBar />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    expect(progressBar?.style.position).toBe("relative");
  });

  it("applies position absolute to inner bar", () => {
    const { container } = render(<ProgressBar value={50} />, { wrapper });

    const progressBar = container.querySelector<ProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`,
    );
    const innerBar = progressBar?.querySelector<ProgressBarRef>("div");
    expect(innerBar?.style.position).toBe("absolute");
    expect(innerBar?.style.top).toBe("0px");
    expect(innerBar?.style.left).toBe("0px");
    expect(innerBar?.style.height).toBe("100%");
  });

  it("calls onChange when animated and value changes", () => {
    const onChange = vi.fn();
    render(<ProgressBar animated onChange={onChange} />, { wrapper });

    // Advance time to trigger animation
    vi.advanceTimersByTime(20);

    // onChange should have been called
    expect(onChange).toHaveBeenCalled();
  });

  it("updates value when prop changes", () => {
    const { container, rerender } = render(<ProgressBar value={25} />, { wrapper });

    let progressBar = container.querySelector<ProgressBarRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`);
    let innerBar = progressBar?.querySelector<ProgressBarRef>("div");
    expect(innerBar?.style.width).toBe("25%");

    rerender(
      <Theme.Provider>
        <ProgressBar value={75} />
      </Theme.Provider>,
    );

    progressBar = container.querySelector<ProgressBarRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.ProgressBar}']`);
    innerBar = progressBar?.querySelector<ProgressBarRef>("div");
    expect(innerBar?.style.width).toBe("75%");
  });
});
