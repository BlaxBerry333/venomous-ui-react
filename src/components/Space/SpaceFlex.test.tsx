import { render, screen } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";

import SpaceFlex from "./SpaceFlex.component";
import type { SpaceFlexRef } from "./SpaceFlex.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("SpaceFlex", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly", () => {
    render(
      <SpaceFlex>
        <div>Item 1</div>
        <div>Item 2</div>
      </SpaceFlex>,
      { wrapper },
    );

    expect(screen.getByText("Item 1")).toBeDefined();
    expect(screen.getByText("Item 2")).toBeDefined();
  });

  it("renders as div by default", () => {
    const { container } = render(<SpaceFlex>Content</SpaceFlex>, { wrapper });

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex).toBeDefined();
    expect(flex?.tagName).toBe("DIV");
  });

  it("applies flex display", () => {
    const { container } = render(<SpaceFlex>Content</SpaceFlex>, { wrapper });

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex?.style.display).toBe("flex");
  });

  it("applies row direction by default", () => {
    const { container } = render(<SpaceFlex>Content</SpaceFlex>, { wrapper });

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex?.style.flexDirection).toBe("row");
  });

  it("applies column direction when column is true", () => {
    const { container } = render(<SpaceFlex column>Content</SpaceFlex>, { wrapper });

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex?.style.flexDirection).toBe("column");
  });

  it("applies center alignment for row layout", () => {
    const { container } = render(<SpaceFlex>Content</SpaceFlex>, { wrapper });

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex?.style.alignItems).toBe("center");
  });

  it("applies flex-start alignment for column layout", () => {
    const { container } = render(<SpaceFlex column>Content</SpaceFlex>, { wrapper });

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex?.style.alignItems).toBe("flex-start");
  });

  it("applies zero spacing by default", () => {
    const { container } = render(<SpaceFlex>Content</SpaceFlex>, { wrapper });

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex?.style.gap).toBe("0");
  });

  it("applies custom spacing", () => {
    const { container } = render(<SpaceFlex spacing={16}>Content</SpaceFlex>, { wrapper });

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex?.style.gap).toBe("16px");
  });

  it("applies 100% width by default", () => {
    const { container } = render(<SpaceFlex>Content</SpaceFlex>, { wrapper });

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex?.style.width).toBe("100%");
  });

  it("applies minWidth 0 for flex compatibility", () => {
    const { container } = render(<SpaceFlex>Content</SpaceFlex>, { wrapper });

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex?.style.minWidth).toBe("0");
  });

  it("supports maxWidth prop", () => {
    const { container } = render(<SpaceFlex maxWidth="MD">Content</SpaceFlex>, { wrapper });

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex?.style.maxWidth).toBe("1023px");
    expect(flex?.style.margin).toBe("0px auto");
  });

  it("applies custom className", () => {
    const { container } = render(<SpaceFlex className="custom-class">Content</SpaceFlex>, { wrapper });

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex?.className).toContain("custom-class");
    expect(flex?.className).toContain(COMPONENT_CLASSNAME_NAMES.SpaceFlex);
  });

  it("applies custom styles", () => {
    const { container } = render(<SpaceFlex style={{ padding: "20px" }}>Content</SpaceFlex>, { wrapper });

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex?.style.padding).toBe("20px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<SpaceFlex ref={ref}>Content</SpaceFlex>, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("DIV");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(
      <SpaceFlex data-testid="test-space-flex" aria-label="Test space flex">
        Content
      </SpaceFlex>,
      { wrapper },
    );

    const flex = container.querySelector('[data-testid="test-space-flex"]');
    expect(flex).toBeDefined();
    expect(flex?.getAttribute("aria-label")).toBe("Test space flex");
  });

  it("displays correct displayName", () => {
    expect(SpaceFlex.displayName).toBe(COMPONENT_DISPLAY_NAMES.SpaceFlex);
  });

  it("applies base styles correctly", () => {
    const { container } = render(<SpaceFlex>Content</SpaceFlex>, { wrapper });

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex?.style.boxSizing).toBe("border-box");
    expect((flex?.style as any)["WebkitTapHighlightColor"]).toBe("transparent");
  });

  it("merges custom style with component styles", () => {
    const { container } = render(<SpaceFlex style={{ width: "50%" }}>Content</SpaceFlex>, { wrapper });

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    // Custom style should override default style
    expect(flex?.style.width).toBe("50%");
    // Base styles should still apply
    expect(flex?.style.boxSizing).toBe("border-box");
  });

  it("supports custom styles via Theme.Provider", () => {
    const customComponentProps = {
      "Space.Flex": {
        style: {
          padding: "16px",
          gap: "24px",
        },
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customComponentProps={customComponentProps}>{children}</Theme.Provider>
    );

    const { container } = render(<SpaceFlex>Content</SpaceFlex>, { wrapper: customWrapper });

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex?.style.padding).toBe("16px");
    expect(flex?.style.gap).toBe("24px");
  });

  it("switches between row and column correctly", () => {
    const { container, rerender } = render(<SpaceFlex>Content</SpaceFlex>, { wrapper });

    let flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex?.style.flexDirection).toBe("row");
    expect(flex?.style.alignItems).toBe("center");

    rerender(
      <Theme.Provider>
        <SpaceFlex column>Content</SpaceFlex>
      </Theme.Provider>,
    );

    flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex?.style.flexDirection).toBe("column");
    expect(flex?.style.alignItems).toBe("flex-start");
  });

  it("combines column and spacing correctly", () => {
    const { container } = render(
      <SpaceFlex column spacing={12}>
        Content
      </SpaceFlex>,
      { wrapper },
    );

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex?.style.flexDirection).toBe("column");
    expect(flex?.style.gap).toBe("12px");
  });

  it("renders empty children correctly", () => {
    const { container } = render(<SpaceFlex />, { wrapper });

    const flex = container.querySelector<SpaceFlexRef>("div[class*='__VENOMOUS_UI__Space.Flex']");
    expect(flex).toBeDefined();
    expect(flex?.textContent).toBe("");
  });

  it("renders complex children correctly", () => {
    render(
      <SpaceFlex spacing={8}>
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </SpaceFlex>,
      { wrapper },
    );

    expect(screen.getByText("Button 1")).toBeDefined();
    expect(screen.getByText("Button 2")).toBeDefined();
    expect(screen.getByText("Button 3")).toBeDefined();
  });
});
