import { render, screen } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import ChatStreamText from "./ChatStreamText.component";
import type { ChatStreamTextRef } from "./ChatStreamText.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("ChatStreamText", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("shows full text immediately when skipAnimation is true", () => {
    render(<ChatStreamText text="Full text immediately" skipAnimation />, { wrapper });

    expect(screen.getByText("Full text immediately")).toBeDefined();
  });

  it("shows cursor when streaming", () => {
    render(<ChatStreamText text="Test" streaming showCursor skipAnimation />, { wrapper });

    // Cursor should be visible
    expect(screen.getByText("|")).toBeDefined();
  });

  it("uses custom cursor character", () => {
    render(<ChatStreamText text="Test" streaming showCursor cursor="_" skipAnimation />, { wrapper });

    expect(screen.getByText("_")).toBeDefined();
  });

  it("hides cursor when showCursor is false", () => {
    render(<ChatStreamText text="Test" streaming showCursor={false} skipAnimation />, { wrapper });

    expect(screen.queryByText("|")).toBeNull();
  });

  it("does not call onComplete while still streaming", () => {
    const handleComplete = vi.fn();
    render(<ChatStreamText text="Test" streaming onComplete={handleComplete} skipAnimation />, { wrapper });

    expect(handleComplete).not.toHaveBeenCalled();
  });

  it("applies custom className", () => {
    const { container } = render(<ChatStreamText text="Test" className="custom-class" skipAnimation />, { wrapper });

    // Use CSS.escape to handle . in classname
    const selector = `.${CSS.escape(COMPONENT_CLASSNAME_NAMES.ChatStreamText)}`;
    const streamText = container.querySelector(selector);
    expect(streamText?.className).toContain("custom-class");
    expect(streamText?.className).toContain(COMPONENT_CLASSNAME_NAMES.ChatStreamText);
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<ChatStreamTextRef>();

    render(<ChatStreamText text="Test" ref={ref} skipAnimation />, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("SPAN");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(<ChatStreamText text="Test" data-testid="test-stream" skipAnimation />, { wrapper });

    const streamText = container.querySelector('[data-testid="test-stream"]');
    expect(streamText).toBeDefined();
  });

  it("displays correct displayName", () => {
    expect(ChatStreamText.displayName).toBe(COMPONENT_DISPLAY_NAMES.ChatStreamText);
  });

  it("handles empty text", () => {
    const { container } = render(<ChatStreamText text="" skipAnimation />, { wrapper });

    const selector = `.${CSS.escape(COMPONENT_CLASSNAME_NAMES.ChatStreamText)}`;
    const streamText = container.querySelector(selector);
    expect(streamText).toBeDefined();
  });

  it("renders component", () => {
    const { container } = render(<ChatStreamText text="Test" skipAnimation />, { wrapper });

    const selector = `.${CSS.escape(COMPONENT_CLASSNAME_NAMES.ChatStreamText)}`;
    const streamText = container.querySelector(selector);
    expect(streamText).toBeDefined();
  });

  it("renders as span element", () => {
    const { container } = render(<ChatStreamText text="Test" skipAnimation />, { wrapper });

    const selector = `.${CSS.escape(COMPONENT_CLASSNAME_NAMES.ChatStreamText)}`;
    const streamText = container.querySelector(selector);
    expect(streamText?.tagName).toBe("SPAN");
  });
});
