import { render } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import Backdrop from "./Backdrop.component";
import type { BackdropRef } from "./Backdrop.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Backdrop", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly", () => {
    const { container } = render(
      <Backdrop open>
        <div>Content</div>
      </Backdrop>,
      { wrapper },
    );

    expect(container.textContent).toContain("Content");
  });

  it("renders as div by default", () => {
    const { container } = render(<Backdrop open>Content</Backdrop>, { wrapper });

    const backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    expect(backdrop).toBeDefined();
    expect(backdrop?.tagName).toBe("DIV");
  });

  it("applies closed state by default", () => {
    const { container } = render(<Backdrop>Content</Backdrop>, { wrapper });

    const backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    expect(backdrop?.style.opacity).toBe("0");
    expect(backdrop?.style.visibility).toBe("hidden");
  });

  it("applies open state when open is true", () => {
    const { container } = render(<Backdrop open>Content</Backdrop>, { wrapper });

    const backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    expect(backdrop?.style.opacity).toBe("1");
    expect(backdrop?.style.visibility).toBe("visible");
  });

  it("applies default opacity of 0.5", () => {
    const { container } = render(<Backdrop open>Content</Backdrop>, { wrapper });

    const backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    expect(backdrop?.style.backgroundColor).toBe("rgba(0, 0, 0, 0.5)");
  });

  it("applies custom opacity", () => {
    const { container } = render(
      <Backdrop open opacity={0.8}>
        Content
      </Backdrop>,
      { wrapper },
    );

    const backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    expect(backdrop?.style.backgroundColor).toBe("rgba(0, 0, 0, 0.8)");
  });

  it("applies fixed positioning", () => {
    const { container } = render(<Backdrop open>Content</Backdrop>, { wrapper });

    const backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    expect(backdrop?.style.position).toBe("fixed");
    expect(backdrop?.style.top).toBe("0px");
    expect(backdrop?.style.left).toBe("0px");
    expect(backdrop?.style.right).toBe("0px");
    expect(backdrop?.style.bottom).toBe("0px");
  });

  it("applies flex center layout", () => {
    const { container } = render(<Backdrop open>Content</Backdrop>, { wrapper });

    const backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    expect(backdrop?.style.display).toBe("flex");
    expect(backdrop?.style.alignItems).toBe("center");
    expect(backdrop?.style.justifyContent).toBe("center");
  });

  it("applies transition styles", () => {
    const { container } = render(<Backdrop open>Content</Backdrop>, { wrapper });

    const backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    expect(backdrop?.style.transition).toContain("opacity");
    expect(backdrop?.style.transition).toContain("visibility");
  });

  it("applies z-index", () => {
    const { container } = render(<Backdrop open>Content</Backdrop>, { wrapper });

    const backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    expect(backdrop?.style.zIndex).toBe("1299");
  });

  it("applies user-select none", () => {
    const { container } = render(<Backdrop open>Content</Backdrop>, { wrapper });

    const backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    expect(backdrop?.style.userSelect).toBe("none");
  });

  it("applies custom className", () => {
    const { container } = render(
      <Backdrop open className="custom-class">
        Content
      </Backdrop>,
      { wrapper },
    );

    const backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    expect(backdrop?.className).toContain("custom-class");
    expect(backdrop?.className).toContain(COMPONENT_CLASSNAME_NAMES.Backdrop);
  });

  it("applies custom styles", () => {
    const { container } = render(
      <Backdrop open style={{ padding: "20px" }}>
        Content
      </Backdrop>,
      { wrapper },
    );

    const backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    expect(backdrop?.style.padding).toBe("20px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <Backdrop open ref={ref}>
        Content
      </Backdrop>,
      { wrapper },
    );

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("DIV");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(
      <Backdrop open data-testid="test-backdrop" aria-label="Test backdrop">
        Content
      </Backdrop>,
      { wrapper },
    );

    const backdrop = container.querySelector('[data-testid="test-backdrop"]');
    expect(backdrop).toBeDefined();
    expect(backdrop?.getAttribute("aria-label")).toBe("Test backdrop");
  });

  it("displays correct displayName", () => {
    expect(Backdrop.displayName).toBe(COMPONENT_DISPLAY_NAMES.Backdrop);
  });

  it("applies base styles correctly", () => {
    const { container } = render(<Backdrop open>Content</Backdrop>, { wrapper });

    const backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    expect(backdrop?.style.boxSizing).toBe("border-box");
    expect((backdrop?.style as any)["WebkitTapHighlightColor"]).toBe("transparent");
  });

  it("merges custom style with component styles", () => {
    const { container } = render(
      <Backdrop open style={{ zIndex: "2000" }}>
        Content
      </Backdrop>,
      { wrapper },
    );

    const backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    // Custom style should override default style
    expect(backdrop?.style.zIndex).toBe("2000");
    // Base styles should still apply
    expect(backdrop?.style.boxSizing).toBe("border-box");
  });

  it("supports custom styles via Theme.Provider", () => {
    const customStyles = {
      Backdrop: {
        backgroundColor: "rgba(255, 0, 0, 0.5)",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
    );

    const { container } = render(<Backdrop open>Content</Backdrop>, { wrapper: customWrapper });

    const backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    expect(backdrop?.style.backgroundColor).toBe("rgba(255, 0, 0, 0.5)");
  });

  it("toggles visibility when open changes", () => {
    const { container, rerender } = render(<Backdrop>Content</Backdrop>, { wrapper });

    let backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    expect(backdrop?.style.opacity).toBe("0");
    expect(backdrop?.style.visibility).toBe("hidden");

    rerender(
      <Theme.Provider>
        <Backdrop open>Content</Backdrop>
      </Theme.Provider>,
    );

    backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    expect(backdrop?.style.opacity).toBe("1");
    expect(backdrop?.style.visibility).toBe("visible");
  });

  it("renders empty children correctly", () => {
    const { container } = render(<Backdrop open />, { wrapper });

    const backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    expect(backdrop).toBeDefined();
    expect(backdrop?.textContent).toBe("");
  });

  it("accepts onClick handler", () => {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };

    const { container } = render(
      <Backdrop open onClick={handleClick}>
        Content
      </Backdrop>,
      { wrapper },
    );

    const backdrop = container.querySelector<BackdropRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
    backdrop?.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    expect(clicked).toBe(true);
  });
});
