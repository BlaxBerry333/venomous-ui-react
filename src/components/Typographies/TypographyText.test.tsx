import { render, screen } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import TypographyText from "./TypographyText.component";
import type { TypographyTextRef } from "./TypographyText.types";
import { TYPOGRAPHY_TEXT_ELEMENT_MAP } from "./TypographyText.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("TypographyText", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders text correctly", () => {
    render(<TypographyText text="Hello World" />, { wrapper });

    expect(screen.getByText("Hello World")).toBeDefined();
  });

  it("renders as span by default", () => {
    const { container } = render(<TypographyText text="Text" />, { wrapper });

    const element = container.querySelector<TypographyTextRef>("span");
    expect(element).toBeDefined();
    expect(element?.tagName).toBe("SPAN");
  });

  it("renders as code when as is code", () => {
    const { container } = render(<TypographyText text="Code" as={TYPOGRAPHY_TEXT_ELEMENT_MAP.CODE} />, { wrapper });

    const element = container.querySelector<TypographyTextRef>("code");
    expect(element).toBeDefined();
    expect(element?.tagName).toBe("CODE");
  });

  it("renders as strong when as is strong", () => {
    const { container } = render(<TypographyText text="Strong" as={TYPOGRAPHY_TEXT_ELEMENT_MAP.STRONG} />, { wrapper });

    const element = container.querySelector<TypographyTextRef>("strong");
    expect(element).toBeDefined();
    expect(element?.tagName).toBe("STRONG");
  });

  it("renders as small when as is small", () => {
    const { container } = render(<TypographyText text="Small" as={TYPOGRAPHY_TEXT_ELEMENT_MAP.SMALL} />, { wrapper });

    const element = container.querySelector<TypographyTextRef>("small");
    expect(element).toBeDefined();
    expect(element?.tagName).toBe("SMALL");
  });

  it("renders as mark when as is mark", () => {
    const { container } = render(<TypographyText text="Mark" as={TYPOGRAPHY_TEXT_ELEMENT_MAP.MARK} />, { wrapper });

    const element = container.querySelector<TypographyTextRef>("mark");
    expect(element).toBeDefined();
    expect(element?.tagName).toBe("MARK");
  });

  it("applies span styles by default", () => {
    const { container } = render(<TypographyText text="Text" />, { wrapper });

    const element = container.querySelector<TypographyTextRef>("span");
    expect(element?.style.fontSize).toBe("16px");
    expect(element?.style.lineHeight).toBeTruthy();
    expect(element?.style.display).toBe("inline");
  });

  it("applies code styles correctly", () => {
    const { container } = render(<TypographyText text="Code" as={TYPOGRAPHY_TEXT_ELEMENT_MAP.CODE} />, { wrapper });

    const element = container.querySelector<TypographyTextRef>("code");
    expect(element?.style.fontWeight).toBe("bold");
    expect(element?.style.fontSize).toBe("14px");
    expect(element?.style.backgroundColor).toBeTruthy();
    expect(element?.style.borderRadius).toBe("4px");
    expect(element?.style.borderWidth).toBe("1px");
    expect(element?.style.borderStyle).toBe("solid");
    expect(element?.style.padding).toBe("2px 4px");
  });

  it("applies strong styles correctly", () => {
    const { container } = render(<TypographyText text="Strong" as={TYPOGRAPHY_TEXT_ELEMENT_MAP.STRONG} />, { wrapper });

    const element = container.querySelector<TypographyTextRef>("strong");
    expect(element?.style.fontWeight).toBe("bold");
    expect(element?.style.fontSize).toBe("16px");
  });

  it("applies small styles correctly", () => {
    const { container } = render(<TypographyText text="Small" as={TYPOGRAPHY_TEXT_ELEMENT_MAP.SMALL} />, { wrapper });

    const element = container.querySelector<TypographyTextRef>("small");
    expect(element?.style.fontSize).toBe("14px");
  });

  it("applies mark styles correctly", () => {
    const { container } = render(<TypographyText text="Mark" as={TYPOGRAPHY_TEXT_ELEMENT_MAP.MARK} />, { wrapper });

    const element = container.querySelector<TypographyTextRef>("mark");
    expect(element?.style.fontWeight).toBe("bold");
    expect(element?.style.fontSize).toBe("16px");
    expect(element?.style.backgroundColor).toBe("#fff59d");
    expect(element?.style.padding).toBe("1px 4px");
  });

  it("applies custom color", () => {
    const { container } = render(<TypographyText text="Text" color="#ff5722" />, { wrapper });

    const element = container.querySelector<TypographyTextRef>("span");
    expect(element?.style.color).toBe("#ff5722");
  });

  it("applies custom className", () => {
    const { container } = render(<TypographyText text="Text" className="custom-class" />, { wrapper });

    const element = container.querySelector<TypographyTextRef>("span");
    expect(element?.className).toContain("custom-class");
    expect(element?.className).toContain(COMPONENT_CLASSNAME_NAMES.TypographyText);
  });

  it("applies custom styles", () => {
    const { container } = render(<TypographyText text="Text" style={{ fontSize: "20px" }} />, { wrapper });

    const element = container.querySelector<TypographyTextRef>("span");
    expect(element?.style.fontSize).toBe("20px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<TypographyTextRef>();

    render(<TypographyText text="Text" ref={ref} />, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("SPAN");
  });

  it("forwards ref correctly for custom element", () => {
    const ref = React.createRef<TypographyTextRef>();

    render(<TypographyText text="Code" as={TYPOGRAPHY_TEXT_ELEMENT_MAP.CODE} ref={ref} />, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("CODE");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(<TypographyText text="Text" data-testid="test-text" aria-label="Test text" />, {
      wrapper,
    });

    const element = container.querySelector('[data-testid="test-text"]');
    expect(element).toBeDefined();
    expect(element?.getAttribute("aria-label")).toBe("Test text");
  });

  it("displays correct displayName", () => {
    expect(TypographyText.displayName).toBe(COMPONENT_DISPLAY_NAMES.TypographyText);
  });

  it("applies base styles correctly", () => {
    const { container } = render(<TypographyText text="Text" />, { wrapper });

    const element = container.querySelector<TypographyTextRef>("span");
    expect(element?.style.boxSizing).toBe("border-box");
    expect((element?.style as any)["WebkitTapHighlightColor"]).toBe("transparent");
    expect(element?.style.position).toBe("relative");
    expect(element?.style.display).toBe("inline");
  });

  it("merges custom style with component styles", () => {
    const { container } = render(<TypographyText text="Text" style={{ position: "absolute" }} />, { wrapper });

    const element = container.querySelector<TypographyTextRef>("span");
    // Custom style should override default style
    expect(element?.style.position).toBe("absolute");
    // Base styles should still apply
    expect(element?.style.boxSizing).toBe("border-box");
  });

  it("supports custom styles via Theme.Provider", () => {
    const customStyles = {
      "Typography.Text": {
        fontSize: "20px",
        fontWeight: "300",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
    );

    const { container } = render(<TypographyText text="Text" />, { wrapper: customWrapper });

    const element = container.querySelector<TypographyTextRef>("span");
    expect(element?.style.fontSize).toBe("20px");
    expect(element?.style.fontWeight).toBe("300");
  });

  it("renders empty text correctly", () => {
    const { container } = render(<TypographyText text="" />, { wrapper });

    const element = container.querySelector<TypographyTextRef>("span");
    expect(element).toBeDefined();
    expect(element?.textContent).toBe("");
  });

  it("renders text with special characters", () => {
    render(<TypographyText text="<Hello> & 'World'" />, { wrapper });

    expect(screen.getByText("<Hello> & 'World'")).toBeDefined();
  });
});
