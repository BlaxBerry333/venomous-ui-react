import { render, screen } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";

import SpaceGrid from "./SpaceGrid.component";
import type { SpaceGridRef } from "./SpaceGrid.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("SpaceGrid", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly", () => {
    render(
      <SpaceGrid>
        <div>Item 1</div>
        <div>Item 2</div>
      </SpaceGrid>,
      { wrapper },
    );

    expect(screen.getByText("Item 1")).toBeDefined();
    expect(screen.getByText("Item 2")).toBeDefined();
  });

  it("renders as div by default", () => {
    const { container } = render(<SpaceGrid>Content</SpaceGrid>, { wrapper });

    const grid = container.querySelector<SpaceGridRef>("div[class*='__VENOMOUS_UI__Space.Grid']");
    expect(grid).toBeDefined();
    expect(grid?.tagName).toBe("DIV");
  });

  it("applies grid display", () => {
    const { container } = render(<SpaceGrid>Content</SpaceGrid>, { wrapper });

    const grid = container.querySelector<SpaceGridRef>("div[class*='__VENOMOUS_UI__Space.Grid']");
    expect(grid?.style.display).toBe("grid");
  });

  it("applies 1 column by default", () => {
    const { container } = render(<SpaceGrid>Content</SpaceGrid>, { wrapper });

    const grid = container.querySelector<SpaceGridRef>("div[class*='__VENOMOUS_UI__Space.Grid']");
    expect(grid?.style.gridTemplateColumns).toContain("repeat(1");
  });

  it("applies custom number of columns", () => {
    const { container } = render(<SpaceGrid columns={3}>Content</SpaceGrid>, { wrapper });

    const grid = container.querySelector<SpaceGridRef>("div[class*='__VENOMOUS_UI__Space.Grid']");
    expect(grid?.style.gridTemplateColumns).toContain("repeat(3");
  });

  it("applies 0 spacing by default", () => {
    const { container } = render(<SpaceGrid>Content</SpaceGrid>, { wrapper });

    const grid = container.querySelector<SpaceGridRef>("div[class*='__VENOMOUS_UI__Space.Grid']");
    expect(grid?.style.gap).toBe("0px");
  });

  it("applies custom spacing", () => {
    const { container } = render(<SpaceGrid spacing={16}>Content</SpaceGrid>, { wrapper });

    const grid = container.querySelector<SpaceGridRef>("div[class*='__VENOMOUS_UI__Space.Grid']");
    expect(grid?.style.gap).toBe("16px");
  });

  it("applies 100% width by default", () => {
    const { container } = render(<SpaceGrid>Content</SpaceGrid>, { wrapper });

    const grid = container.querySelector<SpaceGridRef>("div[class*='__VENOMOUS_UI__Space.Grid']");
    expect(grid?.style.width).toBe("100%");
  });

  it("supports maxWidth prop", () => {
    const { container } = render(<SpaceGrid maxWidth="LG">Content</SpaceGrid>, { wrapper });

    const grid = container.querySelector<SpaceGridRef>("div[class*='__VENOMOUS_UI__Space.Grid']");
    expect(grid?.style.maxWidth).toBe("1365px");
    expect(grid?.style.margin).toBe("0px auto");
  });

  it("applies custom className", () => {
    const { container } = render(<SpaceGrid className="custom-class">Content</SpaceGrid>, { wrapper });

    const grid = container.querySelector<SpaceGridRef>("div[class*='__VENOMOUS_UI__Space.Grid']");
    expect(grid?.className).toContain("custom-class");
    expect(grid?.className).toContain(COMPONENT_CLASSNAME_NAMES.SpaceGrid);
  });

  it("applies custom styles", () => {
    const { container } = render(<SpaceGrid style={{ padding: "20px" }}>Content</SpaceGrid>, { wrapper });

    const grid = container.querySelector<SpaceGridRef>("div[class*='__VENOMOUS_UI__Space.Grid']");
    expect(grid?.style.padding).toBe("20px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<SpaceGrid ref={ref}>Content</SpaceGrid>, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("DIV");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(
      <SpaceGrid data-testid="test-space-grid" aria-label="Test space grid">
        Content
      </SpaceGrid>,
      { wrapper },
    );

    const grid = container.querySelector('[data-testid="test-space-grid"]');
    expect(grid).toBeDefined();
    expect(grid?.getAttribute("aria-label")).toBe("Test space grid");
  });

  it("displays correct displayName", () => {
    expect(SpaceGrid.displayName).toBe(COMPONENT_DISPLAY_NAMES.SpaceGrid);
  });

  it("applies base styles correctly", () => {
    const { container } = render(<SpaceGrid>Content</SpaceGrid>, { wrapper });

    const grid = container.querySelector<SpaceGridRef>("div[class*='__VENOMOUS_UI__Space.Grid']");
    expect(grid?.style.boxSizing).toBe("border-box");
    expect((grid?.style as any)["WebkitTapHighlightColor"]).toBe("transparent");
  });

  it("merges custom style with component styles", () => {
    const { container } = render(<SpaceGrid style={{ width: "50%" }}>Content</SpaceGrid>, { wrapper });

    const grid = container.querySelector<SpaceGridRef>("div[class*='__VENOMOUS_UI__Space.Grid']");
    // Custom style should override default style
    expect(grid?.style.width).toBe("50%");
    // Base styles should still apply
    expect(grid?.style.boxSizing).toBe("border-box");
  });

  it("supports custom styles via Theme.Provider", () => {
    const customStyles = {
      "Space.Grid": {
        padding: "16px",
        gap: "24px",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
    );

    const { container } = render(<SpaceGrid>Content</SpaceGrid>, { wrapper: customWrapper });

    const grid = container.querySelector<SpaceGridRef>("div[class*='__VENOMOUS_UI__Space.Grid']");
    expect(grid?.style.padding).toBe("16px");
    expect(grid?.style.gap).toBe("24px");
  });

  it("combines columns and spacing correctly", () => {
    const { container } = render(
      <SpaceGrid columns={4} spacing={12}>
        Content
      </SpaceGrid>,
      { wrapper },
    );

    const grid = container.querySelector<SpaceGridRef>("div[class*='__VENOMOUS_UI__Space.Grid']");
    expect(grid?.style.gridTemplateColumns).toContain("repeat(4");
    expect(grid?.style.gap).toBe("12px");
  });

  it("renders empty children correctly", () => {
    const { container } = render(<SpaceGrid />, { wrapper });

    const grid = container.querySelector<SpaceGridRef>("div[class*='__VENOMOUS_UI__Space.Grid']");
    expect(grid).toBeDefined();
    expect(grid?.textContent).toBe("");
  });

  it("renders complex children correctly", () => {
    render(
      <SpaceGrid columns={2} spacing={8}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </SpaceGrid>,
      { wrapper },
    );

    expect(screen.getByText("Item 1")).toBeDefined();
    expect(screen.getByText("Item 2")).toBeDefined();
    expect(screen.getByText("Item 3")).toBeDefined();
    expect(screen.getByText("Item 4")).toBeDefined();
  });

  // ========== Responsive Tests ==========
  describe("Responsive Columns", () => {
    it("accepts responsive columns configuration", () => {
      render(
        <SpaceGrid columns={{ XS: 1, SM: 2, MD: 3, LG: 4 }}>
          <div>Item</div>
        </SpaceGrid>,
        { wrapper },
      );

      // Component renders with responsive config
      expect(screen.getByText("Item")).toBeDefined();
    });

    it("accepts responsive spacing configuration", () => {
      render(
        <SpaceGrid spacing={{ XS: 8, SM: 12, MD: 16, LG: 24 }}>
          <div>Item</div>
        </SpaceGrid>,
        { wrapper },
      );

      // Component renders with responsive spacing
      expect(screen.getByText("Item")).toBeDefined();
    });

    it("accepts both responsive columns and spacing", () => {
      render(
        <SpaceGrid columns={{ XS: 1, MD: 2, LG: 3 }} spacing={{ XS: 8, MD: 16 }}>
          <div>Item 1</div>
          <div>Item 2</div>
        </SpaceGrid>,
        { wrapper },
      );

      expect(screen.getByText("Item 1")).toBeDefined();
      expect(screen.getByText("Item 2")).toBeDefined();
    });
  });
});
