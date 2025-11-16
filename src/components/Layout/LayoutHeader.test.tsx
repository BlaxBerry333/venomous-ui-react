import { render, screen } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import LayoutHeader from "./LayoutHeader.component";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Layout.Header", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly", () => {
    render(
      <LayoutHeader>
        <div>Header Content</div>
      </LayoutHeader>,
      { wrapper },
    );

    expect(screen.getByText("Header Content")).toBeDefined();
  });

  it("renders Logo", () => {
    render(<LayoutHeader Logo={<div data-testid="logo">Logo</div>} />, { wrapper });

    expect(screen.getByTestId("logo")).toBeDefined();
  });

  it("renders Menu", () => {
    render(<LayoutHeader Menu={<div data-testid="menu">Menu</div>} />, { wrapper });

    expect(screen.getByTestId("menu")).toBeDefined();
  });

  it("shows progress bar by default", () => {
    const { container } = render(<LayoutHeader />, { wrapper });

    const progressBar = container.querySelector(`div[class*='${COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar}']`);
    expect(progressBar).toBeDefined();
  });

  it("hides progress bar when showProgressBar is false", () => {
    const { container } = render(<LayoutHeader showProgressBar={false} />, { wrapper });

    const progressBar = container.querySelector(`div[class*='${COMPONENT_CLASSNAME_NAMES.PageScrollProgressBar}']`);
    expect(progressBar).toBeNull();
  });

  it("displays correct displayName", () => {
    expect(LayoutHeader.displayName).toBe(COMPONENT_DISPLAY_NAMES.LayoutHeader);
  });

  it("renders as header element", () => {
    const { container } = render(<LayoutHeader />, { wrapper });

    const header = container.querySelector("header");
    expect(header).toBeDefined();
  });
});
