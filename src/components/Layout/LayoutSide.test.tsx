import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import LayoutSide from "./LayoutSide.component";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Layout.Side", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly", () => {
    render(
      <LayoutSide>
        <div>Side Content</div>
      </LayoutSide>,
      { wrapper },
    );

    expect(screen.getByText("Side Content")).toBeDefined();
  });

  it("renders Menu via renderMenu prop", () => {
    render(<LayoutSide renderMenu={() => <div data-testid="menu">Menu</div>} />, { wrapper });

    expect(screen.getByTestId("menu")).toBeDefined();
  });

  it("renders Menu via children function", () => {
    render(
      <LayoutSide>
        {(collapsed) => <div data-testid="menu-fn">Menu {collapsed ? "Collapsed" : "Expanded"}</div>}
      </LayoutSide>,
      { wrapper },
    );

    expect(screen.getByTestId("menu-fn")).toBeDefined();
    expect(screen.getByText(/Menu Expanded/i)).toBeDefined();
  });

  it("renders Header via renderHeader prop", () => {
    render(
      <LayoutSide renderHeader={(collapsed) => <div data-testid="header">Header {collapsed ? "C" : "E"}</div>} />,
      { wrapper },
    );

    expect(screen.getByTestId("header")).toBeDefined();
  });

  it("renders Bottom via renderBottom prop", () => {
    render(
      <LayoutSide
        renderBottom={(collapsed) => <div data-testid="bottom">Bottom {collapsed ? "Collapsed" : "Expanded"}</div>}
      />,
      { wrapper },
    );

    expect(screen.getByTestId("bottom")).toBeDefined();
    expect(screen.getByText(/Bottom Expanded/i)).toBeDefined();
  });

  it("renders custom collapse button via renderCollapseButton prop", () => {
    const renderCollapseButton = vi.fn((collapsed, toggle) => (
      <button data-testid="custom-collapse-btn" onClick={toggle}>
        {collapsed ? "Expand" : "Collapse"}
      </button>
    ));

    render(<LayoutSide collapsible renderCollapseButton={renderCollapseButton} />, { wrapper });

    expect(screen.getByTestId("custom-collapse-btn")).toBeDefined();
    expect(renderCollapseButton).toHaveBeenCalled();
  });

  it("toggles collapse on button click when collapsible", () => {
    const onCollapsedChange = vi.fn();

    const { container } = render(<LayoutSide collapsible onCollapsedChange={onCollapsedChange} />, { wrapper });

    const collapseButton = container.querySelector("button");
    if (collapseButton) {
      fireEvent.click(collapseButton);
      expect(onCollapsedChange).toHaveBeenCalled();
    }
  });

  it("displays correct displayName", () => {
    expect(LayoutSide.displayName).toBe(COMPONENT_DISPLAY_NAMES.LayoutSide);
  });

  it("renders as aside element", () => {
    const { container } = render(<LayoutSide />, { wrapper });

    const aside = container.querySelector("aside");
    expect(aside).toBeDefined();
  });
});
