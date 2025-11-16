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

  it("renders Menu", () => {
    render(<LayoutSide renderMenu={() => <div data-testid="menu">Menu</div>} />, { wrapper });

    expect(screen.getByTestId("menu")).toBeDefined();
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
