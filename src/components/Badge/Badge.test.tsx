import { render, screen } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";

import Badge from "./Badge.component";
import type { BadgeRef } from "./Badge.types";
import { BADGE_PLACEMENT_MAP, BADGE_VARIANT_MAP } from "./Badge.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Badge", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // ========== Standalone Mode Tests ==========
  describe("Standalone Mode (no children)", () => {
    it("renders text correctly in standalone mode", () => {
      render(<Badge text="5" />, { wrapper });

      expect(screen.getByText("5")).toBeDefined();
    });

    it("renders as strong element in standalone mode", () => {
      const { container } = render(<Badge text="5" />, { wrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge).toBeDefined();
      expect(badge?.tagName).toBe("STRONG");
    });

    it("applies static position in standalone mode", () => {
      const { container } = render(<Badge text="5" />, { wrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.position).toBe("static");
    });

    it("applies auto z-index in standalone mode", () => {
      const { container } = render(<Badge text="5" />, { wrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.zIndex).toBe("auto");
    });
  });

  // ========== Wrapper Mode Tests ==========
  describe("Wrapper Mode (with children)", () => {
    it("renders badge with children", () => {
      render(
        <Badge text="5">
          <div>Content</div>
        </Badge>,
        { wrapper },
      );

      expect(screen.getByText("5")).toBeDefined();
      expect(screen.getByText("Content")).toBeDefined();
    });

    it("creates container with relative position", () => {
      const { container } = render(
        <Badge text="5">
          <div>Content</div>
        </Badge>,
        { wrapper },
      );

      const badgeContainer = container.querySelector<BadgeRef>("div[class*='__VENOMOUS_UI__Badge.Container']");
      expect(badgeContainer).toBeDefined();
      expect(badgeContainer?.style.position).toBe("relative");
    });

    it("applies absolute position to badge in wrapper mode", () => {
      const { container } = render(
        <Badge text="5">
          <div>Content</div>
        </Badge>,
        { wrapper },
      );

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.position).toBe("absolute");
    });

    it("applies z-index 1 to badge in wrapper mode", () => {
      const { container } = render(
        <Badge text="5">
          <div>Content</div>
        </Badge>,
        { wrapper },
      );

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.zIndex).toBe("1");
    });
  });

  // ========== Variant Tests ==========
  describe("Variants", () => {
    it("renders text variant by default", () => {
      const { container } = render(<Badge text="5" />, { wrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.minWidth).toBe("20px");
      expect(badge?.style.height).toBe("20px");
      expect(badge?.style.borderRadius).toBe("10px");
    });

    it("renders dot variant correctly", () => {
      const { container } = render(<Badge variant={BADGE_VARIANT_MAP.DOT} />, { wrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.width).toBe("10px");
      expect(badge?.style.height).toBe("10px");
      expect(badge?.style.borderRadius).toBe("50%");
    });

    it("shows text in text variant", () => {
      render(<Badge text="99" variant={BADGE_VARIANT_MAP.TEXT} />, { wrapper });

      expect(screen.getByText("99")).toBeDefined();
    });

    it("shows text even in dot variant when standalone (component renders text)", () => {
      render(<Badge text="99" variant={BADGE_VARIANT_MAP.DOT} />, { wrapper });

      // In standalone mode, text is always rendered
      expect(screen.getByText("99")).toBeDefined();
    });

    it("does not show text in dot variant when wrapping", () => {
      const { container } = render(
        <Badge text="99" variant={BADGE_VARIANT_MAP.DOT}>
          <div>Content</div>
        </Badge>,
        { wrapper },
      );

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.textContent).toBe("");
    });
  });

  // ========== Placement Tests ==========
  describe("Placement", () => {
    it("applies top-right placement by default", () => {
      const { container } = render(
        <Badge text="5">
          <div>Content</div>
        </Badge>,
        { wrapper },
      );

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.top).toBe("0px");
      expect(badge?.style.right).toBe("0px");
      expect(badge?.style.transform).toContain("translate(65%, -65%)");
    });

    it("applies top-left placement correctly", () => {
      const { container } = render(
        <Badge text="5" placement={BADGE_PLACEMENT_MAP.TOP_LEFT}>
          <div>Content</div>
        </Badge>,
        { wrapper },
      );

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.top).toBe("0px");
      expect(badge?.style.left).toBe("0px");
      expect(badge?.style.transform).toContain("translate(-65%, -65%)");
    });

    it("applies bottom-right placement correctly", () => {
      const { container } = render(
        <Badge text="5" placement={BADGE_PLACEMENT_MAP.BOTTOM_RIGHT}>
          <div>Content</div>
        </Badge>,
        { wrapper },
      );

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.bottom).toBe("0px");
      expect(badge?.style.right).toBe("0px");
      expect(badge?.style.transform).toContain("translate(65%, 65%)");
    });

    it("applies bottom-left placement correctly", () => {
      const { container } = render(
        <Badge text="5" placement={BADGE_PLACEMENT_MAP.BOTTOM_LEFT}>
          <div>Content</div>
        </Badge>,
        { wrapper },
      );

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.bottom).toBe("0px");
      expect(badge?.style.left).toBe("0px");
      expect(badge?.style.transform).toContain("translate(-65%, 65%)");
    });
  });

  // ========== Offset Tests ==========
  describe("Offset", () => {
    it("applies default offset of 65%", () => {
      const { container } = render(
        <Badge text="5">
          <div>Content</div>
        </Badge>,
        { wrapper },
      );

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.transform).toContain("65%");
    });

    it("applies custom offset", () => {
      const { container } = render(
        <Badge text="5" offset={50}>
          <div>Content</div>
        </Badge>,
        { wrapper },
      );

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.transform).toContain("50%");
    });
  });

  // ========== Color Tests ==========
  describe("Color", () => {
    it("applies default error color", () => {
      const { container } = render(<Badge text="5" />, { wrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.backgroundColor).toBeTruthy();
    });

    it("applies custom color", () => {
      const { container } = render(<Badge text="5" color="#2196f3" />, { wrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.backgroundColor).toBe("#2196f3");
    });

    it("applies white text color", () => {
      const { container } = render(<Badge text="5" />, { wrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.color).toBe("#FFFFFF");
    });
  });

  // ========== Base Styles Tests ==========
  describe("Base Styles", () => {
    it("applies inline-flex display", () => {
      const { container } = render(<Badge text="5" />, { wrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.display).toBe("inline-flex");
    });

    it("applies center alignment", () => {
      const { container } = render(<Badge text="5" />, { wrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.alignItems).toBe("center");
      expect(badge?.style.justifyContent).toBe("center");
    });

    it("applies nowrap white-space", () => {
      const { container } = render(<Badge text="5" />, { wrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.whiteSpace).toBe("nowrap");
    });

    it("applies user-select none", () => {
      const { container } = render(<Badge text="5" />, { wrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.userSelect).toBe("none");
    });

    it("applies base styles correctly", () => {
      const { container } = render(<Badge text="5" />, { wrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.boxSizing).toBe("border-box");
      expect((badge?.style as any)["WebkitTapHighlightColor"]).toBe("transparent");
    });
  });

  // ========== General Tests ==========
  describe("General", () => {
    it("applies custom className", () => {
      const { container } = render(<Badge text="5" className="custom-class" />, { wrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.className).toContain("custom-class");
      expect(badge?.className).toContain(COMPONENT_CLASSNAME_NAMES.Badge);
    });

    it("applies custom styles", () => {
      const { container } = render(<Badge text="5" style={{ fontSize: "16px" }} />, { wrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.fontSize).toBe("16px");
    });

    it("forwards ref correctly", () => {
      const ref = React.createRef<BadgeRef>();

      render(<Badge text="5" ref={ref} />, { wrapper });

      expect(ref.current).toBeDefined();
      expect(ref.current?.tagName).toBe("STRONG");
    });

    it("passes through HTML attributes", () => {
      const { container } = render(<Badge text="5" data-testid="test-badge" aria-label="Test badge" />, {
        wrapper,
      });

      const badge = container.querySelector('[data-testid="test-badge"]');
      expect(badge).toBeDefined();
      expect(badge?.getAttribute("aria-label")).toBe("Test badge");
    });

    it("displays correct displayName", () => {
      expect(Badge.displayName).toBe(COMPONENT_DISPLAY_NAMES.Badge);
    });

    it("merges custom style with component styles", () => {
      const { container } = render(<Badge text="5" style={{ height: "24px" }} />, { wrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      // Custom style should override default style
      expect(badge?.style.height).toBe("24px");
      // Base styles should still apply
      expect(badge?.style.boxSizing).toBe("border-box");
    });

    it("supports custom styles via Theme.Provider", () => {
      const customStyles = {
        Badge: {
          height: "30px",
          borderRadius: "15px",
        },
      };

      const customWrapper = ({ children }: { children: React.ReactNode }) => (
        <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
      );

      const { container } = render(<Badge text="5" />, { wrapper: customWrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.style.height).toBe("30px");
      expect(badge?.style.borderRadius).toBe("15px");
    });

    it("converts number text to string", () => {
      render(<Badge text={42} />, { wrapper });

      expect(screen.getByText("42")).toBeDefined();
    });

    it("renders empty text when text is undefined", () => {
      const { container } = render(<Badge />, { wrapper });

      const badge = container.querySelector<BadgeRef>("strong");
      expect(badge?.textContent).toBe("");
    });
  });
});
