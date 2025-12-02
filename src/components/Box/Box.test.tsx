import { render, screen } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";
import {
  COMPONENT_CLASSNAME_NAMES,
  COMPONENT_DISPLAY_NAMES,
  THEME_BREAKPOINT_RANGES,
  THEME_BREAKPOINTS,
} from "@/constants";

import Box from "./Box.component";
import type { BoxRef } from "./Box.types";
import { BOX_ELEMENT_MAP } from "./Box.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Box", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly", () => {
    render(
      <Box>
        <div>Box content</div>
      </Box>,
      { wrapper },
    );

    expect(screen.getByText("Box content")).toBeDefined();
  });

  it("renders as div by default", () => {
    const { container } = render(<Box>Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("div");
    expect(box).toBeDefined();
    expect(box?.tagName).toBe("DIV");
  });

  it("renders as section when as prop is set to section", () => {
    const { container } = render(<Box as={BOX_ELEMENT_MAP.SECTION}>Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("section");
    expect(box).toBeDefined();
    expect(box?.tagName).toBe("SECTION");
  });

  it("renders as article when as prop is set to article", () => {
    const { container } = render(<Box as={BOX_ELEMENT_MAP.ARTICLE}>Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("article");
    expect(box).toBeDefined();
    expect(box?.tagName).toBe("ARTICLE");
  });

  it("renders as main when as prop is set to main", () => {
    const { container } = render(<Box as={BOX_ELEMENT_MAP.MAIN}>Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("main");
    expect(box).toBeDefined();
    expect(box?.tagName).toBe("MAIN");
  });

  it("renders as aside when as prop is set to aside", () => {
    const { container } = render(<Box as={BOX_ELEMENT_MAP.ASIDE}>Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("aside");
    expect(box).toBeDefined();
    expect(box?.tagName).toBe("ASIDE");
  });

  it("renders as header when as prop is set to header", () => {
    const { container } = render(<Box as={BOX_ELEMENT_MAP.HEADER}>Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("header");
    expect(box).toBeDefined();
    expect(box?.tagName).toBe("HEADER");
  });

  it("renders as footer when as prop is set to footer", () => {
    const { container } = render(<Box as={BOX_ELEMENT_MAP.FOOTER}>Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("footer");
    expect(box).toBeDefined();
    expect(box?.tagName).toBe("FOOTER");
  });

  it("renders as nav when as prop is set to nav", () => {
    const { container } = render(<Box as={BOX_ELEMENT_MAP.NAV}>Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("nav");
    expect(box).toBeDefined();
    expect(box?.tagName).toBe("NAV");
  });

  it("applies maxWidth XS correctly", () => {
    const { container } = render(<Box maxWidth={THEME_BREAKPOINTS.XS}>Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("div");
    expect(box).toBeDefined();
    expect(box?.style.maxWidth).toBe(`${THEME_BREAKPOINT_RANGES[THEME_BREAKPOINTS.XS][1]}px`);
    expect(box?.style.margin).toBe("0px auto");
    expect(box?.style.width).toBe("100%");
  });

  it("applies maxWidth SM correctly", () => {
    const { container } = render(<Box maxWidth={THEME_BREAKPOINTS.SM}>Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("div");
    expect(box?.style.maxWidth).toBe(`${THEME_BREAKPOINT_RANGES[THEME_BREAKPOINTS.SM][1]}px`);
    expect(box?.style.margin).toBe("0px auto");
  });

  it("applies maxWidth MD correctly", () => {
    const { container } = render(<Box maxWidth={THEME_BREAKPOINTS.MD}>Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("div");
    expect(box?.style.maxWidth).toBe(`${THEME_BREAKPOINT_RANGES[THEME_BREAKPOINTS.MD][1]}px`);
  });

  it("applies maxWidth LG correctly", () => {
    const { container } = render(<Box maxWidth={THEME_BREAKPOINTS.LG}>Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("div");
    expect(box?.style.maxWidth).toBe(`${THEME_BREAKPOINT_RANGES[THEME_BREAKPOINTS.LG][1]}px`);
  });

  it("applies maxWidth XL correctly", () => {
    const { container } = render(<Box maxWidth={THEME_BREAKPOINTS.XL}>Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("div");
    expect(box?.style.maxWidth).toBe(`${THEME_BREAKPOINT_RANGES[THEME_BREAKPOINTS.XL][1]}px`);
  });

  it("applies maxWidth XXL correctly (100% width)", () => {
    const { container } = render(<Box maxWidth={THEME_BREAKPOINTS.XXL}>Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("div");
    expect(box?.style.maxWidth).toBe("100%");
    expect(box?.style.width).toBe("100%");
    expect(box?.style.margin).toBe("0px auto");
  });

  it("does not apply maxWidth styles when maxWidth is undefined", () => {
    const { container } = render(<Box>Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("div");
    expect(box?.style.maxWidth).toBe("");
    expect(box?.style.width).toBe("");
  });

  it("applies custom className", () => {
    const { container } = render(<Box className="custom-class">Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("div");
    expect(box?.className).toContain("custom-class");
    expect(box?.className).toContain(COMPONENT_CLASSNAME_NAMES.Box);
  });

  it("applies custom styles", () => {
    const { container } = render(<Box style={{ backgroundColor: "red", padding: "20px" }}>Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("div");
    expect(box?.style.backgroundColor).toBe("red");
    expect(box?.style.padding).toBe("20px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Box ref={ref}>Content</Box>, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("DIV");
  });

  it("forwards ref correctly for custom element", () => {
    const ref = React.createRef<BoxRef>();

    render(
      <Box as={BOX_ELEMENT_MAP.SECTION} ref={ref}>
        Content
      </Box>,
      { wrapper },
    );

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("SECTION");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(
      <Box data-testid="test-box" aria-label="Test box">
        Content
      </Box>,
      { wrapper },
    );

    const box = container.querySelector('[data-testid="test-box"]');
    expect(box).toBeDefined();
    expect(box?.getAttribute("aria-label")).toBe("Test box");
  });

  it("handles multiple children", () => {
    render(
      <Box>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Box>,
      { wrapper },
    );

    expect(screen.getByText("Child 1")).toBeDefined();
    expect(screen.getByText("Child 2")).toBeDefined();
    expect(screen.getByText("Child 3")).toBeDefined();
  });

  it("renders nested Box components", () => {
    render(
      <Box as={BOX_ELEMENT_MAP.SECTION} maxWidth={THEME_BREAKPOINTS.LG}>
        <Box as={BOX_ELEMENT_MAP.ARTICLE} maxWidth={THEME_BREAKPOINTS.MD}>
          <div>Nested content</div>
        </Box>
      </Box>,
      { wrapper },
    );

    expect(screen.getByText("Nested content")).toBeDefined();
  });

  it("displays correct displayName", () => {
    expect(Box.displayName).toBe(COMPONENT_DISPLAY_NAMES.Box);
  });

  it("applies base styles correctly", () => {
    const { container } = render(<Box>Content</Box>, { wrapper });

    const box = container.querySelector<BoxRef>("div");
    expect(box?.style.boxSizing).toBe("border-box");
    expect((box?.style as any)["WebkitTapHighlightColor"]).toBe("transparent");
    expect(box?.style.position).toBe("relative");
    expect(box?.style.backgroundColor).toBe("transparent");
  });

  it("merges custom style with component styles", () => {
    const { container } = render(<Box style={{ position: "absolute", backgroundColor: "blue" }}>Content</Box>, {
      wrapper,
    });

    const box = container.querySelector<BoxRef>("div");
    // Custom style should override default style
    expect(box?.style.position).toBe("absolute");
    expect(box?.style.backgroundColor).toBe("blue");
    // Base styles should still apply
    expect(box?.style.boxSizing).toBe("border-box");
  });

  it("supports custom styles via Theme.Provider", () => {
    const customComponentProps = {
      Box: {
        style: {
          border: "2px solid red",
          borderRadius: "8px",
        },
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customComponentProps={customComponentProps}>{children}</Theme.Provider>
    );

    const { container } = render(<Box>Content</Box>, { wrapper: customWrapper });

    const box = container.querySelector<BoxRef>("div");
    expect(box?.style.border).toBe("2px solid red");
    expect(box?.style.borderRadius).toBe("8px");
  });
});
