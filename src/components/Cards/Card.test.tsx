import { fireEvent, render, screen } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";

import Card from "./Card.component";
import type { CardRef } from "./Card.types";
import { CARD_VARIANT_MAP } from "./Card.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Card", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly", () => {
    render(
      <Card>
        <div>Card Content</div>
      </Card>,
      { wrapper },
    );

    expect(screen.getByText("Card Content")).toBeDefined();
  });

  it("renders as div by default", () => {
    const { container } = render(<Card>Content</Card>, { wrapper });

    const card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    expect(card).toBeDefined();
    expect(card?.tagName).toBe("DIV");
  });

  it("renders as section when as is section", () => {
    const { container } = render(<Card as="section">Content</Card>, { wrapper });

    const card = container.querySelector<CardRef>("section");
    expect(card).toBeDefined();
    expect(card?.tagName).toBe("SECTION");
  });

  it("renders as article when as is article", () => {
    const { container } = render(<Card as="article">Content</Card>, { wrapper });

    const card = container.querySelector<CardRef>("article");
    expect(card).toBeDefined();
    expect(card?.tagName).toBe("ARTICLE");
  });

  it("applies contained variant by default", () => {
    const { container } = render(<Card>Content</Card>, { wrapper });

    const card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    expect(card?.style.backgroundColor).toBeTruthy();
    expect(card?.style.borderStyle).toBe("solid");
    expect(card?.style.borderWidth).toBe("1px");
    expect(card?.style.boxShadow).toBeTruthy();
  });

  it("applies outlined variant correctly", () => {
    const { container } = render(<Card variant={CARD_VARIANT_MAP.OUTLINED}>Content</Card>, { wrapper });

    const card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    expect(card?.style.backgroundColor).toBe("transparent");
    expect(card?.style.borderStyle).toBe("solid");
    expect(card?.style.borderWidth).toBe("1px");
    expect(card?.style.boxShadow).toBe("none");
  });

  it("applies elevated variant correctly", () => {
    const { container } = render(<Card variant={CARD_VARIANT_MAP.ELEVATED}>Content</Card>, { wrapper });

    const card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    expect(card?.style.backgroundColor).toBeTruthy();
    expect(card?.style.borderStyle).toBe("none");
    expect(card?.style.borderWidth).toBe("0px");
    expect(card?.style.boxShadow).toBeTruthy();
  });

  it("applies border radius", () => {
    const { container } = render(<Card>Content</Card>, { wrapper });

    const card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    expect(card?.style.borderRadius).toBe("8px");
  });

  it("applies default padding", () => {
    const { container } = render(<Card>Content</Card>, { wrapper });

    const card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    expect(card?.style.padding).toBe("16px");
  });

  it("applies overflow hidden", () => {
    const { container } = render(<Card>Content</Card>, { wrapper });

    const card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    expect(card?.style.overflow).toBe("hidden");
  });

  it("is not clickable by default (no onClick)", () => {
    const { container } = render(<Card>Content</Card>, { wrapper });

    const card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    expect(card?.style.cursor).toBe("default");
    expect(card?.style.userSelect).toBe("auto");
  });

  it("is clickable when onClick is provided", () => {
    const handleClick = vi.fn();
    const { container } = render(<Card onClick={handleClick}>Content</Card>, { wrapper });

    const card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    expect(card?.style.cursor).toBe("pointer");
    expect(card?.style.userSelect).toBe("none");
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    const { container } = render(<Card onClick={handleClick}>Content</Card>, { wrapper });

    const card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    fireEvent.click(card!);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    const { container } = render(<Card className="custom-class">Content</Card>, { wrapper });

    const card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    expect(card?.className).toContain("custom-class");
    expect(card?.className).toContain(COMPONENT_CLASSNAME_NAMES.Card);
  });

  it("applies custom styles", () => {
    const { container } = render(<Card style={{ padding: "24px" }}>Content</Card>, { wrapper });

    const card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    expect(card?.style.padding).toBe("24px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Card ref={ref}>Content</Card>, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("DIV");
  });

  it("forwards ref correctly for custom element", () => {
    const ref = React.createRef<CardRef>();

    render(
      <Card as="section" ref={ref}>
        Content
      </Card>,
      { wrapper },
    );

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("SECTION");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(
      <Card data-testid="test-card" aria-label="Test card">
        Content
      </Card>,
      { wrapper },
    );

    const card = container.querySelector('[data-testid="test-card"]');
    expect(card).toBeDefined();
    expect(card?.getAttribute("aria-label")).toBe("Test card");
  });

  it("displays correct displayName", () => {
    expect(Card.displayName).toBe(COMPONENT_DISPLAY_NAMES.Card);
  });

  it("applies base styles correctly", () => {
    const { container } = render(<Card>Content</Card>, { wrapper });

    const card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    expect(card?.style.boxSizing).toBe("border-box");
    expect((card?.style as any)["WebkitTapHighlightColor"]).toBe("transparent");
  });

  it("merges custom style with component styles", () => {
    const { container } = render(<Card style={{ borderRadius: "12px" }}>Content</Card>, { wrapper });

    const card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    // Custom style should override default style
    expect(card?.style.borderRadius).toBe("12px");
    // Base styles should still apply
    expect(card?.style.boxSizing).toBe("border-box");
  });

  it("supports custom styles via Theme.Provider", () => {
    const customStyles = {
      Card: {
        padding: "32px",
        borderRadius: "16px",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
    );

    const { container } = render(<Card>Content</Card>, { wrapper: customWrapper });

    const card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    expect(card?.style.padding).toBe("32px");
    expect(card?.style.borderRadius).toBe("16px");
  });

  it("renders complex children correctly", () => {
    render(
      <Card>
        <h2>Card Title</h2>
        <p>Card description</p>
        <button>Action</button>
      </Card>,
      { wrapper },
    );

    expect(screen.getByText("Card Title")).toBeDefined();
    expect(screen.getByText("Card description")).toBeDefined();
    expect(screen.getByText("Action")).toBeDefined();
  });

  it("supports empty children", () => {
    const { container } = render(<Card />, { wrapper });

    const card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    expect(card).toBeDefined();
    expect(card?.textContent).toBe("");
  });

  it("combines variant and clickable correctly", () => {
    const handleClick = vi.fn();
    const { container } = render(
      <Card variant={CARD_VARIANT_MAP.OUTLINED} onClick={handleClick}>
        Content
      </Card>,
      { wrapper },
    );

    const card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    expect(card?.style.backgroundColor).toBe("transparent");
    expect(card?.style.cursor).toBe("pointer");
    expect(card?.style.userSelect).toBe("none");
  });

  it("switches between variants correctly", () => {
    const { container, rerender } = render(<Card variant={CARD_VARIANT_MAP.CONTAINED}>Content</Card>, { wrapper });

    let card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    expect(card?.style.borderStyle).toBe("solid");
    expect(card?.style.boxShadow).toBeTruthy();

    rerender(
      <Theme.Provider>
        <Card variant={CARD_VARIANT_MAP.OUTLINED}>Content</Card>
      </Theme.Provider>,
    );

    card = container.querySelector<CardRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Card}']`);
    expect(card?.style.backgroundColor).toBe("transparent");
    expect(card?.style.boxShadow).toBe("none");
  });
});
