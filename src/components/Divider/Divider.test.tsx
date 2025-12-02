import { render } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import Divider from "./Divider.component";
import type { DividerRef } from "./Divider.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Divider", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders as hr element", () => {
    const { container } = render(<Divider />, { wrapper });

    const element = container.querySelector<DividerRef>("hr");
    expect(element).toBeDefined();
    expect(element?.tagName).toBe("HR");
  });

  it("renders horizontal divider by default", () => {
    const { container } = render(<Divider />, { wrapper });

    const element = container.querySelector<DividerRef>("hr");
    expect(element?.style.width).toBe("100%");
    expect(element?.style.borderTop).toBeTruthy();
    expect(element?.style.margin).toBe("8px 0px");
  });

  it("renders vertical divider when column is true", () => {
    const { container } = render(<Divider column />, { wrapper });

    const element = container.querySelector<DividerRef>("hr");
    expect(element?.style.width).toBe("1px");
    expect(element?.style.borderLeft).toBeTruthy();
    expect(element?.style.margin).toBe("0px 8px");
    expect(element?.style.alignSelf).toBe("stretch");
    expect(element?.style.writingMode).toBe("vertical-lr");
  });

  it("applies border-top for horizontal divider", () => {
    const { container } = render(<Divider />, { wrapper });

    const element = container.querySelector<DividerRef>("hr");
    expect(element?.style.borderTop).toContain("1px");
    expect(element?.style.borderTop).toContain("solid");
  });

  it("applies border-left for vertical divider", () => {
    const { container } = render(<Divider column />, { wrapper });

    const element = container.querySelector<DividerRef>("hr");
    expect(element?.style.borderLeft).toContain("1px");
    expect(element?.style.borderLeft).toContain("solid");
  });

  it("applies custom className", () => {
    const { container } = render(<Divider className="custom-class" />, { wrapper });

    const element = container.querySelector<DividerRef>("hr");
    expect(element?.className).toContain("custom-class");
    expect(element?.className).toContain(COMPONENT_CLASSNAME_NAMES.Divider);
  });

  it("applies custom styles", () => {
    const { container } = render(<Divider style={{ margin: "16px 0" }} />, { wrapper });

    const element = container.querySelector<DividerRef>("hr");
    expect(element?.style.margin).toBe("16px 0px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLHRElement>();

    render(<Divider ref={ref} />, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("HR");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(<Divider data-testid="test-divider" aria-label="Test divider" />, { wrapper });

    const element = container.querySelector('[data-testid="test-divider"]');
    expect(element).toBeDefined();
    expect(element?.getAttribute("aria-label")).toBe("Test divider");
  });

  it("displays correct displayName", () => {
    expect(Divider.displayName).toBe(COMPONENT_DISPLAY_NAMES.Divider);
  });

  it("applies base styles correctly", () => {
    const { container } = render(<Divider />, { wrapper });

    const element = container.querySelector<DividerRef>("hr");
    expect(element?.style.boxSizing).toBe("border-box");
    expect((element?.style as any)["WebkitTapHighlightColor"]).toBe("transparent");
  });

  it("merges custom style with component styles", () => {
    const { container } = render(<Divider style={{ width: "50%" }} />, { wrapper });

    const element = container.querySelector<DividerRef>("hr");
    // Custom style should override default style
    expect(element?.style.width).toBe("50%");
    // Base styles should still apply
    expect(element?.style.boxSizing).toBe("border-box");
  });

  it("supports custom styles via Theme.Provider", () => {
    const customComponentProps = {
      Divider: {
        style: {
          margin: "20px 0",
          borderWidth: "2px",
        },
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customComponentProps={customComponentProps}>{children}</Theme.Provider>
    );

    const { container } = render(<Divider />, { wrapper: customWrapper });

    const element = container.querySelector<DividerRef>("hr");
    expect(element?.style.margin).toBe("20px 0px");
    expect(element?.style.borderWidth).toBe("2px");
  });

  it("switches between horizontal and vertical correctly", () => {
    const { container, rerender } = render(<Divider />, { wrapper });

    let element = container.querySelector<DividerRef>("hr");
    expect(element?.style.width).toBe("100%");
    expect(element?.style.margin).toBe("8px 0px");

    rerender(
      <Theme.Provider>
        <Divider column />
      </Theme.Provider>,
    );

    element = container.querySelector<DividerRef>("hr");
    expect(element?.style.width).toBe("1px");
    expect(element?.style.margin).toBe("0px 8px");
  });

  it("applies align-self stretch for vertical divider", () => {
    const { container } = render(<Divider column />, { wrapper });

    const element = container.querySelector<DividerRef>("hr");
    expect(element?.style.alignSelf).toBe("stretch");
  });

  it("does not apply align-self for horizontal divider", () => {
    const { container } = render(<Divider />, { wrapper });

    const element = container.querySelector<DividerRef>("hr");
    expect(element?.style.alignSelf).toBeFalsy();
  });
});
