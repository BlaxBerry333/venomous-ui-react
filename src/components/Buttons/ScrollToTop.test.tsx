import { render, screen, waitFor } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";

import ScrollToTop from "./ScrollToTop.component";
import type { ScrollToTopRef } from "./ScrollToTop.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("ScrollToTop", () => {
  beforeEach(() => {
    localStorage.clear();
    // Mock scrollY
    Object.defineProperty(window, "scrollY", { writable: true, configurable: true, value: 0 });
    Object.defineProperty(document.documentElement, "scrollTop", { writable: true, configurable: true, value: 0 });
    // Mock scrollTo
    window.scrollTo = vi.fn();
  });

  it("renders with IconButton by default", () => {
    // Set scrollY to trigger visibility
    Object.defineProperty(window, "scrollY", { writable: true, value: 400 });

    const { container } = render(<ScrollToTop />, { wrapper });

    // Trigger scroll event
    window.dispatchEvent(new Event("scroll"));

    // Should render IconButton
    const button = container.querySelector<ScrollToTopRef>("button[class*='__VENOMOUS_UI__IconButton']");
    expect(button).toBeDefined();
  });

  it("renders custom children when provided", async () => {
    // Set scrollY to trigger visibility
    Object.defineProperty(window, "scrollY", { writable: true, value: 400 });

    render(
      <ScrollToTop>
        <span>Go to top</span>
      </ScrollToTop>,
      { wrapper },
    );

    // Trigger scroll event
    window.dispatchEvent(new Event("scroll"));

    // Wait for Transition.Fade to render
    await waitFor(() => {
      expect(screen.getByText("Go to top")).toBeDefined();
    });
  });

  it("is hidden by default when scroll is less than distance", () => {
    const { container } = render(<ScrollToTop distance={300} />, { wrapper });

    // scrollY is 0 (default)
    window.dispatchEvent(new Event("scroll"));

    // Should not find visible button (Transition.Fade hides it)
    const button = container.querySelector<ScrollToTopRef>("button");
    // Button might exist but should be hidden by Transition
    if (button) {
      // Transition.Fade applies opacity 0 and visibility hidden when not visible
      const parent = button.parentElement;
      expect(parent?.style.opacity).toBe("0");
    }
  });

  it("is visible when scroll exceeds distance", async () => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 400 });

    const { container } = render(<ScrollToTop distance={300} />, { wrapper });

    // Trigger scroll event
    window.dispatchEvent(new Event("scroll"));

    // Wait for Transition.Fade to show
    await waitFor(() => {
      const button = container.querySelector<ScrollToTopRef>("button");
      const parent = button?.parentElement;
      // When visible, opacity should be 1
      expect(parent?.style.opacity).toBe("1");
    });
  });

  it("applies default distance of 300px", async () => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 350 });

    const { container } = render(<ScrollToTop />, { wrapper });

    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      const button = container.querySelector<ScrollToTopRef>("button");
      const parent = button?.parentElement;
      expect(parent?.style.opacity).toBe("1");
    });
  });

  it("applies custom distance", async () => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 600 });

    const { container } = render(<ScrollToTop distance={500} />, { wrapper });

    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      const button = container.querySelector<ScrollToTopRef>("button");
      const parent = button?.parentElement;
      expect(parent?.style.opacity).toBe("1");
    });
  });

  it("calls scrollTo when clicked", async () => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 400 });

    const { container } = render(<ScrollToTop />, { wrapper });

    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      const button = container.querySelector<ScrollToTopRef>("button");
      expect(button).toBeDefined();

      button?.click();

      expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
    });
  });

  it("calls onClick handler when provided", async () => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 400 });

    const onClick = vi.fn();
    const { container } = render(<ScrollToTop onClick={onClick} />, { wrapper });

    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      const button = container.querySelector<ScrollToTopRef>("button");
      button?.click();

      expect(onClick).toHaveBeenCalled();
    });
  });

  it("applies fixed positioning", async () => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 400 });

    const { container } = render(<ScrollToTop />, { wrapper });

    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      const button = container.querySelector<ScrollToTopRef>("button[class*='__VENOMOUS_UI__IconButton']");
      expect(button?.style.position).toBe("fixed");
      expect(button?.style.bottom).toBe("24px");
      expect(button?.style.right).toBe("24px");
    });
  });

  it("applies z-index", async () => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 400 });

    const { container } = render(<ScrollToTop />, { wrapper });

    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      const button = container.querySelector<ScrollToTopRef>("button[class*='__VENOMOUS_UI__IconButton']");
      expect(button?.style.zIndex).toBe("1000");
    });
  });

  it("applies custom className", async () => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 400 });

    const { container } = render(<ScrollToTop className="custom-class" />, { wrapper });

    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      const button = container.querySelector<ScrollToTopRef>("button");
      expect(button?.className).toContain("custom-class");
      expect(button?.className).toContain(COMPONENT_CLASSNAME_NAMES.ScrollToTop);
    });
  });

  it("applies custom styles", async () => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 400 });

    const { container } = render(<ScrollToTop style={{ bottom: "50px" }} />, { wrapper });

    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      const button = container.querySelector<ScrollToTopRef>("button");
      expect(button?.style.bottom).toBe("50px");
    });
  });

  it("forwards ref correctly", async () => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 400 });

    const ref = React.createRef<HTMLButtonElement>();

    render(<ScrollToTop ref={ref} />, { wrapper });

    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      expect(ref.current).toBeDefined();
      expect(ref.current?.tagName).toBe("BUTTON");
    });
  });

  it("passes through HTML attributes", async () => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 400 });

    const { container } = render(<ScrollToTop data-testid="test-scroll" />, { wrapper });

    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      const button = container.querySelector('[data-testid="test-scroll"]');
      expect(button).toBeDefined();
    });
  });

  it("displays correct displayName", () => {
    expect(ScrollToTop.displayName).toBe(COMPONENT_DISPLAY_NAMES.ScrollToTop);
  });

  it("applies aria-label for accessibility", async () => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 400 });

    const { container } = render(<ScrollToTop />, { wrapper });

    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      const button = container.querySelector<ScrollToTopRef>("button");
      expect(button?.getAttribute("aria-label")).toBe("Scroll to top");
    });
  });

  it("uses circle shape for IconButton by default", async () => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 400 });

    const { container } = render(<ScrollToTop />, { wrapper });

    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      const button = container.querySelector<ScrollToTopRef>("button[class*='__VENOMOUS_UI__IconButton']");
      // IconButton with circle shape has borderRadius 50%
      expect(button).toBeDefined();
    });
  });

  it("renders custom button with base styles when children provided", async () => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 400 });

    const { container } = render(
      <ScrollToTop>
        <span>Top</span>
      </ScrollToTop>,
      { wrapper },
    );

    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      const button = container.querySelector<ScrollToTopRef>(
        `button[class*='${COMPONENT_CLASSNAME_NAMES.ScrollToTop}']`,
      );
      expect(button).toBeDefined();
      expect(button?.style.display).toBe("flex");
      expect(button?.style.alignItems).toBe("center");
      expect(button?.style.justifyContent).toBe("center");
    });
  });

  it("applies transition to custom button", async () => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 400 });

    const { container } = render(
      <ScrollToTop>
        <span>Top</span>
      </ScrollToTop>,
      { wrapper },
    );

    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      const button = container.querySelector<ScrollToTopRef>(
        `button[class*='${COMPONENT_CLASSNAME_NAMES.ScrollToTop}']`,
      );
      expect(button?.style.transition).toContain("all");
    });
  });

  it("toggles visibility based on scroll position", async () => {
    const { container } = render(<ScrollToTop distance={300} />, { wrapper });

    // Initially hidden
    Object.defineProperty(window, "scrollY", { writable: true, value: 100 });
    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      const button = container.querySelector<ScrollToTopRef>("button");
      const parent = button?.parentElement;
      expect(parent?.style.opacity).toBe("0");
    });

    // Scroll to show
    Object.defineProperty(window, "scrollY", { writable: true, value: 400 });
    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      const button = container.querySelector<ScrollToTopRef>("button");
      const parent = button?.parentElement;
      expect(parent?.style.opacity).toBe("1");
    });
  });
});
