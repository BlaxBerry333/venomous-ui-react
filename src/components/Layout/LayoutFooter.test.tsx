import { render, screen } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import LayoutFooter from "./LayoutFooter.component";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Layout.Footer", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly", () => {
    render(
      <LayoutFooter>
        <div>Footer Content</div>
      </LayoutFooter>,
      { wrapper },
    );

    expect(screen.getByText("Footer Content")).toBeDefined();
  });

  it("renders renderCopyright", () => {
    render(<LayoutFooter renderCopyright={() => <div data-testid="copyright">© 2024</div>} />, { wrapper });

    expect(screen.getByTestId("copyright")).toBeDefined();
  });

  it("renders renderLinks", () => {
    render(<LayoutFooter renderLinks={() => <div data-testid="links">Links</div>} />, { wrapper });

    expect(screen.getByTestId("links")).toBeDefined();
  });

  it("displays correct displayName", () => {
    expect(LayoutFooter.displayName).toBe(COMPONENT_DISPLAY_NAMES.LayoutFooter);
  });

  it("renders as footer element", () => {
    const { container } = render(<LayoutFooter />, { wrapper });

    const footer = container.querySelector("footer");
    expect(footer).toBeDefined();
  });
});
