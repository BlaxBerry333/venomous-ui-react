import { render, screen } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import TypographyTitle from "./TypographyTitle.component";
import type { TypographyTitleRef } from "./TypographyTitle.types";
import { TYPOGRAPHY_TITLE_ELEMENT_MAP } from "./TypographyTitle.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("TypographyTitle", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders text correctly", () => {
    render(<TypographyTitle text="Hello World" />, { wrapper });

    expect(screen.getByText("Hello World")).toBeDefined();
  });

  it("renders as h3 by default", () => {
    const { container } = render(<TypographyTitle text="Title" />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h3");
    expect(element).toBeDefined();
    expect(element?.tagName).toBe("H3");
  });

  it("renders as h1 when as is h1", () => {
    const { container } = render(<TypographyTitle text="Title" as={TYPOGRAPHY_TITLE_ELEMENT_MAP.H1} />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h1");
    expect(element).toBeDefined();
    expect(element?.tagName).toBe("H1");
  });

  it("renders as h2 when as is h2", () => {
    const { container } = render(<TypographyTitle text="Title" as={TYPOGRAPHY_TITLE_ELEMENT_MAP.H2} />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h2");
    expect(element).toBeDefined();
    expect(element?.tagName).toBe("H2");
  });

  it("renders as h4 when as is h4", () => {
    const { container } = render(<TypographyTitle text="Title" as={TYPOGRAPHY_TITLE_ELEMENT_MAP.H4} />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h4");
    expect(element).toBeDefined();
    expect(element?.tagName).toBe("H4");
  });

  it("renders as h5 when as is h5", () => {
    const { container } = render(<TypographyTitle text="Title" as={TYPOGRAPHY_TITLE_ELEMENT_MAP.H5} />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h5");
    expect(element).toBeDefined();
    expect(element?.tagName).toBe("H5");
  });

  it("renders as h6 when as is h6", () => {
    const { container } = render(<TypographyTitle text="Title" as={TYPOGRAPHY_TITLE_ELEMENT_MAP.H6} />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h6");
    expect(element).toBeDefined();
    expect(element?.tagName).toBe("H6");
  });

  it("applies correct font size for h1", () => {
    const { container } = render(<TypographyTitle text="Title" as={TYPOGRAPHY_TITLE_ELEMENT_MAP.H1} />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h1");
    expect(element?.style.fontSize).toBe("40px");
    expect(element?.style.lineHeight).toBeTruthy();
  });

  it("applies correct font size for h2", () => {
    const { container } = render(<TypographyTitle text="Title" as={TYPOGRAPHY_TITLE_ELEMENT_MAP.H2} />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h2");
    expect(element?.style.fontSize).toBe("32px");
    expect(element?.style.lineHeight).toBeTruthy();
  });

  it("applies correct font size for h3", () => {
    const { container } = render(<TypographyTitle text="Title" as={TYPOGRAPHY_TITLE_ELEMENT_MAP.H3} />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h3");
    expect(element?.style.fontSize).toBe("25px");
    expect(element?.style.lineHeight).toBeTruthy();
  });

  it("applies correct font size for h4", () => {
    const { container } = render(<TypographyTitle text="Title" as={TYPOGRAPHY_TITLE_ELEMENT_MAP.H4} />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h4");
    expect(element?.style.fontSize).toBe("20px");
    expect(element?.style.lineHeight).toBeTruthy();
  });

  it("applies correct font size for h5", () => {
    const { container } = render(<TypographyTitle text="Title" as={TYPOGRAPHY_TITLE_ELEMENT_MAP.H5} />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h5");
    expect(element?.style.fontSize).toBe("16px");
    expect(element?.style.lineHeight).toBeTruthy();
  });

  it("applies correct font size for h6", () => {
    const { container } = render(<TypographyTitle text="Title" as={TYPOGRAPHY_TITLE_ELEMENT_MAP.H6} />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h6");
    expect(element?.style.fontSize).toBe("15px");
    expect(element?.style.lineHeight).toBeTruthy();
  });

  it("applies bold font weight by default", () => {
    const { container } = render(<TypographyTitle text="Title" />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h3");
    expect(element?.style.fontWeight).toBe("bold");
  });

  it("applies block display", () => {
    const { container } = render(<TypographyTitle text="Title" />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h3");
    expect(element?.style.display).toBe("block");
  });

  it("applies custom color", () => {
    const { container } = render(<TypographyTitle text="Title" color="#ff5722" />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h3");
    expect(element?.style.color).toBe("#ff5722");
  });

  it("applies custom className", () => {
    const { container } = render(<TypographyTitle text="Title" className="custom-class" />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h3");
    expect(element?.className).toContain("custom-class");
    expect(element?.className).toContain(COMPONENT_CLASSNAME_NAMES.TypographyTitle);
  });

  it("applies custom styles", () => {
    const { container } = render(<TypographyTitle text="Title" style={{ fontSize: "40px" }} />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h3");
    expect(element?.style.fontSize).toBe("40px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLHeadingElement>();

    render(<TypographyTitle text="Title" ref={ref} />, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("H3");
  });

  it("forwards ref correctly for custom element", () => {
    const ref = React.createRef<HTMLHeadingElement>();

    render(<TypographyTitle text="Title" as={TYPOGRAPHY_TITLE_ELEMENT_MAP.H1} ref={ref} />, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("H1");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(<TypographyTitle text="Title" data-testid="test-title" aria-label="Test title" />, {
      wrapper,
    });

    const element = container.querySelector('[data-testid="test-title"]');
    expect(element).toBeDefined();
    expect(element?.getAttribute("aria-label")).toBe("Test title");
  });

  it("displays correct displayName", () => {
    expect(TypographyTitle.displayName).toBe(COMPONENT_DISPLAY_NAMES.TypographyTitle);
  });

  it("applies base styles correctly", () => {
    const { container } = render(<TypographyTitle text="Title" />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h3");
    expect(element?.style.boxSizing).toBe("border-box");
    expect((element?.style as any)["WebkitTapHighlightColor"]).toBe("transparent");
    expect(element?.style.position).toBe("relative");
    expect(element?.style.display).toBe("block");
    expect(element?.style.fontWeight).toBe("bold");
  });

  it("merges custom style with component styles", () => {
    const { container } = render(<TypographyTitle text="Title" style={{ position: "absolute" }} />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h3");
    // Custom style should override default style
    expect(element?.style.position).toBe("absolute");
    // Base styles should still apply
    expect(element?.style.boxSizing).toBe("border-box");
  });

  it("supports custom styles via Theme.Provider", () => {
    const customComponentProps = {
      "Typography.Title": {
        style: {
          fontSize: "50px",
          fontWeight: "300",
        },
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customComponentProps={customComponentProps}>{children}</Theme.Provider>
    );

    const { container } = render(<TypographyTitle text="Title" />, { wrapper: customWrapper });

    const element = container.querySelector<TypographyTitleRef>("h3");
    expect(element?.style.fontSize).toBe("50px");
    expect(element?.style.fontWeight).toBe("300");
  });

  it("renders empty text correctly", () => {
    const { container } = render(<TypographyTitle text="" />, { wrapper });

    const element = container.querySelector<TypographyTitleRef>("h3");
    expect(element).toBeDefined();
    expect(element?.textContent).toBe("");
  });

  it("renders text with special characters", () => {
    render(<TypographyTitle text="<Hello> & 'World'" />, { wrapper });

    expect(screen.getByText("<Hello> & 'World'")).toBeDefined();
  });

  it("renders different heading levels with different font sizes", () => {
    const { container: container1 } = render(<TypographyTitle text="Title" as={TYPOGRAPHY_TITLE_ELEMENT_MAP.H1} />, {
      wrapper,
    });
    const { container: container2 } = render(<TypographyTitle text="Title" as={TYPOGRAPHY_TITLE_ELEMENT_MAP.H6} />, {
      wrapper,
    });

    const h1 = container1.querySelector<TypographyTitleRef>("h1");
    const h6 = container2.querySelector<TypographyTitleRef>("h6");

    expect(h1?.style.fontSize).toBe("40px");
    expect(h6?.style.fontSize).toBe("15px");
  });
});
