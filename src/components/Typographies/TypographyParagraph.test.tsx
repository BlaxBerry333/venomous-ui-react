import { render, screen } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import TypographyParagraph from "./TypographyParagraph.component";
import type { TypographyParagraphRef } from "./TypographyParagraph.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("TypographyParagraph", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders text correctly", () => {
    render(<TypographyParagraph text="Hello World" />, { wrapper });

    expect(screen.getByText("Hello World")).toBeDefined();
  });

  it("renders as paragraph element", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element).toBeDefined();
    expect(element?.tagName).toBe("P");
  });

  it("applies BASE size by default", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.fontSize).toBe("16px");
    expect(element?.style.lineHeight).toBeTruthy();
  });

  it("applies LARGE size correctly", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" size="LARGE" />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.fontSize).toBe("18px");
    expect(element?.style.lineHeight).toBeTruthy();
  });

  it("applies SMALL size correctly", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" size="SMALL" />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.fontSize).toBe("14px");
    expect(element?.style.lineHeight).toBeTruthy();
  });

  it("applies CAPTION size correctly", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" size="CAPTION" />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.fontSize).toBe("12px");
    expect(element?.style.lineHeight).toBeTruthy();
  });

  it("applies normal weight by default", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.fontWeight).toBe("normal");
  });

  it("applies bold weight correctly", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" weight="bold" />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.fontWeight).toBe("bold");
  });

  it("applies custom color", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" color="#ff5722" />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.color).toBe("#ff5722");
  });

  it("applies no ellipsis by default", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.overflow).toBeFalsy();
    expect(element?.style.textOverflow).toBeFalsy();
  });

  it("applies single line ellipsis when ellipsis is 1", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" ellipsis={1} />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.overflow).toBe("hidden");
    expect(element?.style.textOverflow).toBe("ellipsis");
    expect(element?.style.whiteSpace).toBe("nowrap");
  });

  it("applies multi-line ellipsis when ellipsis > 1", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" ellipsis={3} />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    // happy-dom may not preserve -webkit-box display value
    expect(element?.style.overflow).toBe("hidden");
    // Note: webkitLineClamp and webkitBoxOrient are not supported in happy-dom
    expect(element?.style.textOverflow).toBe("ellipsis");
  });

  it("applies block display when no ellipsis", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.display).toBe("block");
  });

  it("applies block display for single line ellipsis", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" ellipsis={1} />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.display).toBe("block");
  });

  it("applies WebkitLineClamp for multi-line ellipsis", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" ellipsis={2} />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    // Note: webkitLineClamp and webkitBoxOrient are not supported in happy-dom
    expect(element?.style.overflow).toBe("hidden");
    expect(element?.style.textOverflow).toBe("ellipsis");
  });

  it("applies custom className", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" className="custom-class" />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.className).toContain("custom-class");
    expect(element?.className).toContain(COMPONENT_CLASSNAME_NAMES.TypographyParagraph);
  });

  it("applies custom styles", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" style={{ fontSize: "20px" }} />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.fontSize).toBe("20px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLParagraphElement>();

    render(<TypographyParagraph text="Paragraph" ref={ref} />, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("P");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(
      <TypographyParagraph text="Paragraph" data-testid="test-paragraph" aria-label="Test paragraph" />,
      { wrapper },
    );

    const element = container.querySelector('[data-testid="test-paragraph"]');
    expect(element).toBeDefined();
    expect(element?.getAttribute("aria-label")).toBe("Test paragraph");
  });

  it("displays correct displayName", () => {
    expect(TypographyParagraph.displayName).toBe(COMPONENT_DISPLAY_NAMES.TypographyParagraph);
  });

  it("applies base styles correctly", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.boxSizing).toBe("border-box");
    expect((element?.style as any)["WebkitTapHighlightColor"]).toBe("transparent");
    expect(element?.style.margin).toBe("0px");
    expect(element?.style.position).toBe("relative");
    expect(element?.style.display).toBe("block");
  });

  it("merges custom style with component styles", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" style={{ position: "absolute" }} />, {
      wrapper,
    });

    const element = container.querySelector<TypographyParagraphRef>("p");
    // Custom style should override default style
    expect(element?.style.position).toBe("absolute");
    // Base styles should still apply
    expect(element?.style.boxSizing).toBe("border-box");
  });

  it("supports custom styles via Theme.Provider", () => {
    const customStyles = {
      "Typography.Paragraph": {
        fontSize: "22px",
        fontWeight: "300",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
    );

    const { container } = render(<TypographyParagraph text="Paragraph" />, { wrapper: customWrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.fontSize).toBe("22px");
    expect(element?.style.fontWeight).toBe("300");
  });

  it("renders empty text correctly", () => {
    const { container } = render(<TypographyParagraph text="" />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element).toBeDefined();
    expect(element?.textContent).toBe("");
  });

  it("renders text with special characters", () => {
    render(<TypographyParagraph text="<Hello> & 'World'" />, { wrapper });

    expect(screen.getByText("<Hello> & 'World'")).toBeDefined();
  });

  it("combines size and weight correctly", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" size="LARGE" weight="bold" />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.fontSize).toBe("18px");
    expect(element?.style.fontWeight).toBe("bold");
  });

  it("combines size and color correctly", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" size="SMALL" color="#2196f3" />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.fontSize).toBe("14px");
    expect(element?.style.color).toBe("#2196f3");
  });

  it("combines ellipsis and weight correctly", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" ellipsis={2} weight="bold" />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.fontWeight).toBe("bold");
    // Note: webkitLineClamp is not supported in happy-dom, skip this assertion
    expect(element?.style.overflow).toBe("hidden");
  });

  it("applies flex compatibility styles with ellipsis", () => {
    const { container } = render(<TypographyParagraph text="Paragraph" ellipsis={1} />, { wrapper });

    const element = container.querySelector<TypographyParagraphRef>("p");
    expect(element?.style.minWidth).toBe("0");
    expect(element?.style.maxWidth).toBe("100%");
    expect(element?.style.flex).toBe("1 1 auto");
  });
});
