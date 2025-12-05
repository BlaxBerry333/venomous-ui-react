import { render, screen } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Avatar } from "@/components/Avatar";
import { Theme } from "@/components/Theme";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";

import ChatBubble from "./ChatBubble.component";
import { CHAT_BUBBLE_PLACEMENT_MAP } from "./ChatBubble.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("ChatBubble", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders with message correctly", () => {
    render(<ChatBubble message="Hello world" />, { wrapper });
    expect(screen.getByText("Hello world")).toBeDefined();
  });

  it("renders left placement by default", () => {
    render(<ChatBubble message="Test" />, { wrapper });
    const bubble = screen.getByRole("article");
    expect(bubble).toBeDefined();
  });

  it("renders right placement correctly", () => {
    render(<ChatBubble message="Test" placement={CHAT_BUBBLE_PLACEMENT_MAP.RIGHT} />, { wrapper });
    const bubble = screen.getByRole("article");
    expect(bubble).toBeDefined();
  });

  it("renders Avatar when provided", () => {
    render(<ChatBubble message="Test" Avatar={<Avatar text="AI" />} />, { wrapper });
    expect(screen.getByText("AI")).toBeDefined();
  });

  it("does not render Avatar when not provided", () => {
    render(<ChatBubble message="Test" />, { wrapper });
    expect(screen.queryByText("AI")).toBeNull();
  });

  it("renders typing indicator when loading", () => {
    render(<ChatBubble loading />, { wrapper });
    const bubble = screen.getByRole("article");
    expect(bubble.getAttribute("aria-busy")).toBe("true");
  });

  it("does not render message when loading", () => {
    render(<ChatBubble message="Test message" loading />, { wrapper });
    expect(screen.queryByText("Test message")).toBeNull();
  });

  it("renders sender name when provided", () => {
    render(<ChatBubble message="Test" senderName="Assistant" />, { wrapper });
    expect(screen.getByText("Assistant")).toBeDefined();
  });

  it("does not render sender name when not provided", () => {
    render(<ChatBubble message="Test" />, { wrapper });
    expect(screen.queryByText("Assistant")).toBeNull();
  });

  it("renders timestamp when provided", () => {
    const timestamp = new Date("2024-01-15T10:30:00");
    render(<ChatBubble message="Test" timestamp={timestamp} />, { wrapper });
    expect(screen.getByText(/10:30/)).toBeDefined();
  });

  it("does not render timestamp when not provided", () => {
    render(<ChatBubble message="Test" />, { wrapper });
    // No timestamp should be visible
    const bubble = screen.getByRole("article");
    expect(bubble).toBeDefined();
  });

  it("uses custom formatTimestamp function", () => {
    const timestamp = new Date("2024-01-15T10:30:00");
    const formatTimestamp = (date: Date) => `Custom: ${date.getHours()}h`;
    render(<ChatBubble message="Test" timestamp={timestamp} formatTimestamp={formatTimestamp} />, { wrapper });
    expect(screen.getByText("Custom: 10h")).toBeDefined();
  });

  it("applies custom className", () => {
    render(<ChatBubble message="Test" className="custom-class" />, { wrapper });
    const bubble = screen.getByRole("article");
    expect(bubble.className).toContain("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<ChatBubble message="Test" ref={ref} />, { wrapper });
    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("DIV");
  });

  it("passes through HTML attributes", () => {
    render(<ChatBubble message="Test" data-testid="test-bubble" />, { wrapper });
    expect(screen.getByTestId("test-bubble")).toBeDefined();
  });

  it("displays correct displayName", () => {
    expect(ChatBubble.displayName).toBe(COMPONENT_DISPLAY_NAMES.ChatBubble);
  });

  it("has correct role attribute", () => {
    render(<ChatBubble message="Test" />, { wrapper });
    const bubble = screen.getByRole("article");
    expect(bubble).toBeDefined();
  });

  it("has correct aria-label for assistant message", () => {
    render(<ChatBubble message="Test" placement="left" />, { wrapper });
    const bubble = screen.getByRole("article");
    expect(bubble.getAttribute("aria-label")).toContain("assistant");
  });

  it("has correct aria-label for user message", () => {
    render(<ChatBubble message="Test" placement="right" />, { wrapper });
    const bubble = screen.getByRole("article");
    expect(bubble.getAttribute("aria-label")).toContain("you");
  });

  it("renders custom Avatar element", () => {
    render(<ChatBubble message="Test" Avatar={<div data-testid="custom-avatar">Custom</div>} />, { wrapper });
    expect(screen.getByTestId("custom-avatar")).toBeDefined();
  });

  it("renders both sender name and timestamp when both provided", () => {
    const timestamp = new Date("2024-01-15T10:30:00");
    render(<ChatBubble message="Test" senderName="Bot" timestamp={timestamp} />, { wrapper });
    expect(screen.getByText("Bot")).toBeDefined();
    expect(screen.getByText(/10:30/)).toBeDefined();
  });
});
