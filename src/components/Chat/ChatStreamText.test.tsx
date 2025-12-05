import { act, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import ChatStreamText from "./ChatStreamText.component";
import type { ChatStreamTextRef } from "./ChatStreamText.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("ChatStreamText", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
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

  // ========== Typing Animation Tests ==========
  describe("Typing Animation", () => {
    it("types text character by character", async () => {
      // Hide cursor to make text content assertions cleaner
      const { container } = render(<ChatStreamText text="Hello" speed={10} showCursor={false} />, { wrapper });

      const selector = `.${CSS.escape(COMPONENT_CLASSNAME_NAMES.ChatStreamText)}`;
      const streamText = container.querySelector(selector);

      // Initially empty
      expect(streamText?.textContent).toBe("");

      // Advance timers to type first character
      await act(async () => {
        vi.advanceTimersByTime(10);
      });
      expect(streamText?.textContent).toBe("H");

      // Type more characters
      await act(async () => {
        vi.advanceTimersByTime(10);
      });
      expect(streamText?.textContent).toBe("He");

      // Complete the text
      await act(async () => {
        vi.advanceTimersByTime(30);
      });
      expect(streamText?.textContent).toBe("Hello");
    });

    it("calls onComplete when typing finishes (non-streaming)", async () => {
      const handleComplete = vi.fn();
      render(<ChatStreamText text="Hi" speed={10} onComplete={handleComplete} showCursor={false} />, { wrapper });

      // Wait for typing to complete
      await act(async () => {
        vi.advanceTimersByTime(30); // 2 characters * 10ms + buffer
      });

      expect(handleComplete).toHaveBeenCalledTimes(1);
    });

    it("does not call onComplete while streaming", async () => {
      const handleComplete = vi.fn();
      render(<ChatStreamText text="Hi" speed={10} streaming onComplete={handleComplete} showCursor={false} />, {
        wrapper,
      });

      // Wait for typing to complete
      await act(async () => {
        vi.advanceTimersByTime(50);
      });

      expect(handleComplete).not.toHaveBeenCalled();
    });

    it("handles empty text reset", async () => {
      const { container, rerender } = render(<ChatStreamText text="Test" speed={10} showCursor={false} />, { wrapper });

      const selector = `.${CSS.escape(COMPONENT_CLASSNAME_NAMES.ChatStreamText)}`;

      // Type some text
      await act(async () => {
        vi.advanceTimersByTime(50);
      });

      // Reset with empty text
      rerender(
        <Theme.Provider>
          <ChatStreamText text="" speed={10} showCursor={false} />
        </Theme.Provider>,
      );

      const streamText = container.querySelector(selector);
      expect(streamText?.textContent).toBe("");
    });

    it("handles streaming mode text update", async () => {
      // Test that streaming mode types text correctly
      const { container } = render(<ChatStreamText text="Hello World" speed={10} streaming showCursor={false} />, {
        wrapper,
      });

      const selector = `.${CSS.escape(COMPONENT_CLASSNAME_NAMES.ChatStreamText)}`;
      const streamText = container.querySelector(selector);

      // Type partial text
      await act(async () => {
        vi.advanceTimersByTime(50);
      });

      // Should have typed some characters
      expect(streamText?.textContent?.length).toBeGreaterThan(0);

      // Complete the text
      await act(async () => {
        vi.advanceTimersByTime(100);
      });

      expect(streamText?.textContent).toBe("Hello World");
    });

    it("restarts typing when text changes completely", async () => {
      const { container, rerender } = render(<ChatStreamText text="Hello" speed={10} showCursor={false} />, {
        wrapper,
      });

      const selector = `.${CSS.escape(COMPONENT_CLASSNAME_NAMES.ChatStreamText)}`;

      // Type initial text
      await act(async () => {
        vi.advanceTimersByTime(60);
      });

      // Change to completely different text
      rerender(
        <Theme.Provider>
          <ChatStreamText text="World" speed={10} showCursor={false} />
        </Theme.Provider>,
      );

      // Should restart from beginning
      await act(async () => {
        vi.advanceTimersByTime(10);
      });

      const streamText = container.querySelector(selector);
      expect(streamText?.textContent).toBe("W");

      // Complete the new text
      await act(async () => {
        vi.advanceTimersByTime(50);
      });

      expect(streamText?.textContent).toBe("World");
    });

    it("shows cursor during typing", () => {
      render(<ChatStreamText text="Hi" speed={10} showCursor />, { wrapper });

      // During typing, cursor should be visible
      expect(screen.getByText("|")).toBeDefined();
    });

    it("hides cursor after typing completion (non-streaming)", async () => {
      render(<ChatStreamText text="Hi" speed={10} showCursor />, { wrapper });

      // Complete typing
      await act(async () => {
        vi.advanceTimersByTime(30);
      });

      // After completion (not streaming), cursor should be hidden
      expect(screen.queryByText("|")).toBeNull();
    });

    it("keeps cursor visible while streaming even after text is typed", async () => {
      render(<ChatStreamText text="Hi" speed={10} streaming showCursor />, { wrapper });

      // Complete typing
      await act(async () => {
        vi.advanceTimersByTime(30);
      });

      // Cursor should still be visible because streaming is true
      expect(screen.getByText("|")).toBeDefined();
    });
  });
});
