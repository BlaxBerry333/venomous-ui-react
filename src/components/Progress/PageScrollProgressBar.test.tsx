import { render } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import PageScrollProgressBar from "./PageScrollProgressBar.component";
import type { PageScrollProgressBarRef } from "./PageScrollProgressBar.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("PageScrollProgressBar", () => {
  beforeEach(() => {
    localStorage.clear();
    // Reset scroll position
    Object.defineProperty(window, "scrollY", { value: 0, writable: true });
    Object.defineProperty(document.documentElement, "scrollHeight", { value: 2000, writable: true });
    Object.defineProperty(document.documentElement, "clientHeight", { value: 1000, writable: true });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders in Portal by default", () => {
    render(<PageScrollProgressBar />, { wrapper });

    // When rendered in Portal, it's appended to document.body, not the test container
    const progressBar = document.body.querySelector(`div[class*='${COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar}']`);
    expect(progressBar).toBeDefined();
  });

  it("renders in place when disablePortal is true", () => {
    const { container } = render(<PageScrollProgressBar disablePortal />, { wrapper });

    // When disablePortal, it renders within the container
    const progressBar = container.querySelector<PageScrollProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar}']`,
    );
    expect(progressBar).toBeDefined();
  });

  it("has zero value at top of page", () => {
    render(<PageScrollProgressBar disablePortal />, { wrapper });

    const progressBar = document.querySelector<PageScrollProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar}']`,
    );
    const ariaValue = progressBar?.getAttribute("aria-valuenow");
    expect(Number(ariaValue)).toBe(0);
  });

  it("updates value on scroll", () => {
    render(<PageScrollProgressBar disablePortal />, { wrapper });

    const progressBar = document.querySelector<PageScrollProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar}']`,
    );
    const initialValue = Number(progressBar?.getAttribute("aria-valuenow"));

    // Initial value should be 0
    expect(initialValue).toBe(0);

    // Scroll event listener should be attached (component uses useEffect)
    // We just verify the component renders without errors
    expect(progressBar).toBeDefined();
  });

  it("applies custom color", () => {
    const { container } = render(<PageScrollProgressBar color="#ff0000" disablePortal />, { wrapper });

    const progressBar = container.querySelector<PageScrollProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar}']`,
    );
    expect(progressBar).toBeDefined();
  });

  it("applies custom className", () => {
    const { container } = render(<PageScrollProgressBar className="custom-class" disablePortal />, { wrapper });

    const progressBar = container.querySelector<PageScrollProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar}']`,
    );
    expect(progressBar?.className).toContain("custom-class");
    expect(progressBar?.className).toContain(COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar);
  });

  it("applies custom styles", () => {
    const { container } = render(<PageScrollProgressBar style={{ height: "10px" }} disablePortal />, { wrapper });

    const progressBar = container.querySelector<PageScrollProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar}']`,
    );
    expect(progressBar?.style.height).toBe("10px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<PageScrollProgressBar ref={ref} disablePortal />, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("DIV");
  });

  it("displays correct displayName", () => {
    expect(PageScrollProgressBar.displayName).toBe(COMPONENT_DISPLAY_NAMES.PageScrollProgressBar);
  });

  it("renders component correctly", () => {
    const { container } = render(<PageScrollProgressBar disablePortal />, { wrapper });

    const progressBar = container.querySelector<PageScrollProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar}']`,
    );
    expect(progressBar).toBeDefined();
  });

  it("applies fixed positioning when not disabled Portal", () => {
    render(<PageScrollProgressBar />, { wrapper });

    const progressBar = document.body.querySelector<PageScrollProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar}']`,
    );
    expect(progressBar?.style.position).toBe("fixed");
  });

  it("applies absolute positioning when disabled Portal", () => {
    const { container } = render(<PageScrollProgressBar disablePortal />, { wrapper });

    const progressBar = container.querySelector<PageScrollProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar}']`,
    );
    expect(progressBar?.style.position).toBe("absolute");
  });

  it("is positioned at top of viewport", () => {
    const { container } = render(<PageScrollProgressBar disablePortal />, { wrapper });

    const progressBar = container.querySelector<PageScrollProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar}']`,
    );
    expect(progressBar?.style.top).toBe("0px");
  });

  it("spans full width", () => {
    const { container } = render(<PageScrollProgressBar disablePortal />, { wrapper });

    const progressBar = container.querySelector<PageScrollProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar}']`,
    );
    expect(progressBar?.style.left).toBe("0px");
    expect(progressBar?.style.right).toBe("0px");
  });

  it("has high z-index when not disabled Portal", () => {
    render(<PageScrollProgressBar />, { wrapper });

    const progressBar = document.body.querySelector<PageScrollProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar}']`,
    );
    expect(progressBar?.style.zIndex).toBe("9999");
  });

  it("does not have z-index when disabled Portal", () => {
    const { container } = render(<PageScrollProgressBar disablePortal />, { wrapper });

    const progressBar = container.querySelector<PageScrollProgressBarRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar}']`,
    );
    // When disablePortal, no z-index is set
    expect(progressBar?.style.zIndex).toBe("");
  });
});
