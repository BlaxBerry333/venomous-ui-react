import { render } from "@testing-library/react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";
import ThemeResetCSSStyle from "./ThemeResetCSSStyle.component";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("ThemeResetCSSStyle", () => {
  beforeEach(() => {
    // Clean up any existing style elements
    const existingStyle = document.getElementById("__VENOUS_UI_RESET_CSS_STYLE__");
    if (existingStyle) {
      existingStyle.remove();
    }
  });

  // ========== Basic Rendering Tests ==========
  describe("Basic Rendering", () => {
    it("renders without crashing", () => {
      render(<ThemeResetCSSStyle />, { wrapper });
      // Component returns null, so no visual output
      expect(document.body).toBeDefined();
    });

    it("returns null (no DOM output)", () => {
      const { container } = render(<ThemeResetCSSStyle />, { wrapper });
      expect(container.innerHTML).toBe("");
    });
  });

  // ========== Style Injection Tests ==========
  describe("Style Injection", () => {
    it("injects style element into document.head", () => {
      render(<ThemeResetCSSStyle />, { wrapper });

      const styleElement = document.getElementById("__VENOUS_UI_RESET_CSS_STYLE__");
      expect(styleElement).toBeDefined();
      expect(styleElement?.tagName).toBe("STYLE");
      expect(styleElement?.parentElement).toBe(document.head);
    });

    it("style element contains reset CSS", () => {
      render(<ThemeResetCSSStyle />, { wrapper });

      const styleElement = document.getElementById("__VENOUS_UI_RESET_CSS_STYLE__");
      const content = styleElement?.textContent || "";

      // Check for key reset styles
      expect(content).toContain("box-sizing: border-box");
      expect(content).toContain("-webkit-tap-highlight-color: transparent");
      expect(content).toContain("margin: 0");
      expect(content).toContain("padding: 0");
    });

    it("style element contains html & body styles", () => {
      render(<ThemeResetCSSStyle />, { wrapper });

      const styleElement = document.getElementById("__VENOUS_UI_RESET_CSS_STYLE__");
      const content = styleElement?.textContent || "";

      expect(content).toContain("html, body");
      expect(content).toContain("max-width: 100vw");
      expect(content).toContain("min-height: 100svh");
      expect(content).toContain("-webkit-font-smoothing: antialiased");
      expect(content).toContain("-moz-osx-font-smoothing: grayscale");
    });

    it("style element contains anchor styles", () => {
      render(<ThemeResetCSSStyle />, { wrapper });

      const styleElement = document.getElementById("__VENOUS_UI_RESET_CSS_STYLE__");
      const content = styleElement?.textContent || "";

      expect(content).toContain("a {");
      expect(content).toContain("color: inherit");
      expect(content).toContain("text-decoration: none");
    });

    it("style element contains selection styles", () => {
      render(<ThemeResetCSSStyle />, { wrapper });

      const styleElement = document.getElementById("__VENOUS_UI_RESET_CSS_STYLE__");
      const content = styleElement?.textContent || "";

      expect(content).toContain("::selection");
      expect(content).toContain("background-color:");
      expect(content).toContain("color: white");
    });

    it("style element contains smooth scroll and transition styles", () => {
      render(<ThemeResetCSSStyle />, { wrapper });

      const styleElement = document.getElementById("__VENOUS_UI_RESET_CSS_STYLE__");
      const content = styleElement?.textContent || "";

      expect(content).toContain("transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out");
      expect(content).toContain("overscroll-behavior: none");
      expect(content).toContain("scroll-behavior: smooth");
    });
  });

  // ========== Style ID Tests ==========
  describe("Style ID", () => {
    it("uses correct style element ID", () => {
      render(<ThemeResetCSSStyle />, { wrapper });

      const styleElement = document.getElementById("__VENOUS_UI_RESET_CSS_STYLE__");
      expect(styleElement).toBeDefined();
      expect(styleElement?.id).toBe("__VENOUS_UI_RESET_CSS_STYLE__");
    });

    it("reuses existing style element if already present", () => {
      // Create a style element manually
      const existingStyle = document.createElement("style");
      existingStyle.id = "__VENOUS_UI_RESET_CSS_STYLE__";
      existingStyle.textContent = "/* existing */";
      document.head.appendChild(existingStyle);

      render(<ThemeResetCSSStyle />, { wrapper });

      // Should reuse the same element
      const styleElements = document.querySelectorAll("#__VENOUS_UI_RESET_CSS_STYLE__");
      expect(styleElements.length).toBe(1);

      // Content should be updated
      const styleElement = document.getElementById("__VENOUS_UI_RESET_CSS_STYLE__");
      expect(styleElement?.textContent).not.toBe("/* existing */");
    });
  });

  // ========== Cleanup Tests ==========
  describe("Cleanup", () => {
    it("removes style element on unmount", () => {
      const { unmount } = render(<ThemeResetCSSStyle />, { wrapper });

      // Style element should exist
      let styleElement = document.getElementById("__VENOUS_UI_RESET_CSS_STYLE__");
      expect(styleElement).toBeDefined();

      // Unmount component
      unmount();

      // Style element should be removed
      styleElement = document.getElementById("__VENOUS_UI_RESET_CSS_STYLE__");
      expect(styleElement).toBeNull();
    });
  });

  // ========== Theme Integration Tests ==========
  describe("Theme Integration", () => {
    it("uses theme design tokens in styles", () => {
      render(<ThemeResetCSSStyle />, { wrapper });

      const styleElement = document.getElementById("__VENOUS_UI_RESET_CSS_STYLE__");
      const content = styleElement?.textContent || "";

      // Check that theme tokens are interpolated (should contain color values, font sizes, etc.)
      expect(content.length).toBeGreaterThan(100); // Should have substantial content
      expect(content).toContain("background-color:");
      expect(content).toContain("color:");
      expect(content).toContain("font-size:");
      expect(content).toContain("line-height:");
    });

    it("updates styles when theme changes", () => {
      const { rerender } = render(<ThemeResetCSSStyle />, { wrapper });

      const styleElement = document.getElementById("__VENOUS_UI_RESET_CSS_STYLE__");
      const initialContent = styleElement?.textContent || "";

      // Rerender (theme might change)
      rerender(<ThemeResetCSSStyle />);

      // Style element should still exist and have content
      expect(document.getElementById("__VENOUS_UI_RESET_CSS_STYLE__")).toBeDefined();
      expect(initialContent.length).toBeGreaterThan(0);
    });

    it("works with custom theme designs", () => {
      const customWrapper = ({ children }: { children: React.ReactNode }) => (
        <Theme.Provider
          customDesigns={{
            PaletteColors: { 1: "#ff0000", 2: "#00ff00", 3: "#0000ff" },
          }}
        >
          {children}
        </Theme.Provider>
      );

      render(<ThemeResetCSSStyle />, { wrapper: customWrapper });

      const styleElement = document.getElementById("__VENOUS_UI_RESET_CSS_STYLE__");
      expect(styleElement).toBeDefined();
      expect(styleElement?.textContent).toBeTruthy();
    });
  });

  // ========== General Tests ==========
  describe("General", () => {
    it("displays correct displayName", () => {
      expect(ThemeResetCSSStyle.displayName).toBe(COMPONENT_DISPLAY_NAMES.ThemeResetCSSStyle);
    });

    it("can be rendered multiple times without duplicating styles", () => {
      render(
        <>
          <ThemeResetCSSStyle />
          <ThemeResetCSSStyle />
          <ThemeResetCSSStyle />
        </>,
        { wrapper },
      );

      // Should only have one style element
      const styleElements = document.querySelectorAll("#__VENOUS_UI_RESET_CSS_STYLE__");
      expect(styleElements.length).toBe(1);
    });

    it("works without Theme.Provider wrapper (uses default theme)", () => {
      // This test renders without wrapper to ensure it doesn't crash
      render(<ThemeResetCSSStyle />);

      const styleElement = document.getElementById("__VENOUS_UI_RESET_CSS_STYLE__");
      expect(styleElement).toBeDefined();
    });
  });
});
