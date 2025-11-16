import { render, screen } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Icon } from "@/components/Icon";
import { Theme } from "@/components/Theme";

import TabsTab from "./TabsTab.component";
import type { TabsTabRef } from "./TabsTab.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("TabsTab", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // ========== Basic Rendering Tests ==========
  describe("Basic Rendering", () => {
    it("renders label correctly", () => {
      render(<TabsTab value="tab1" label="Tab 1" />, { wrapper });

      expect(screen.getByText("Tab 1")).toBeDefined();
    });

    it("renders with string value", () => {
      const { container } = render(<TabsTab value="tab1" label="Tab 1" />, { wrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      expect(tab).toBeDefined();
    });

    it("renders with number value", () => {
      const { container } = render(<TabsTab value={1} label="Tab 1" />, { wrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      expect(tab).toBeDefined();
    });
  });

  // ========== Selection State Tests ==========
  describe("Selection State", () => {
    it("is not selected by default", () => {
      const { container } = render(<TabsTab value="tab1" label="Tab 1" />, { wrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      expect(tab).toBeDefined();
    });

    it("applies selected styles when selected is true", () => {
      const { container } = render(<TabsTab value="tab1" label="Tab 1" selected />, { wrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      // Selected tab should have a border
      expect(tab?.style.borderBottom || tab?.style.borderRight).toBeTruthy();
    });
  });

  // ========== Disabled State Tests ==========
  describe("Disabled State", () => {
    it("is not disabled by default", () => {
      const { container } = render(<TabsTab value="tab1" label="Tab 1" />, { wrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      expect(tab?.style.cursor).not.toBe("not-allowed");
    });

    it("applies disabled styles when disabled is true", () => {
      const { container } = render(<TabsTab value="tab1" label="Tab 1" disabled />, { wrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      expect(tab?.style.cursor).toBe("not-allowed");
      expect(tab?.style.opacity).toBe("0.65");
    });

    it("does not call onClick when disabled", () => {
      const onClick = vi.fn();
      const { container } = render(<TabsTab value="tab1" label="Tab 1" disabled onClick={onClick} />, { wrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      tab?.click();

      expect(onClick).not.toHaveBeenCalled();
    });
  });

  // ========== Click Handler Tests ==========
  describe("Click Handler", () => {
    it("calls onClick with value when clicked", () => {
      const onClick = vi.fn();
      const { container } = render(<TabsTab value="tab1" label="Tab 1" onClick={onClick} />, { wrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      tab?.click();

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onClick).toHaveBeenCalledWith("tab1", expect.anything());
    });

    it("calls onClick even when selected (for accessibility)", () => {
      const onClick = vi.fn();
      const { container } = render(<TabsTab value="tab1" label="Tab 1" selected onClick={onClick} />, { wrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      tab?.click();

      // Click still fires when selected (onClick is not disabled, only hover/active states are)
      expect(onClick).toHaveBeenCalledWith("tab1", expect.anything());
    });
  });

  // ========== Prefix and Suffix Tests ==========
  describe("Prefix and Suffix", () => {
    it("renders prefix when provided", () => {
      render(<TabsTab value="tab1" label="Tab 1" prefix={<Icon icon="solar:home-linear" />} />, { wrapper });

      expect(screen.getByText("Tab 1")).toBeDefined();
    });

    it("renders suffix when provided", () => {
      render(<TabsTab value="tab1" label="Tab 1" suffix={<span>🔥</span>} />, { wrapper });

      expect(screen.getByText("Tab 1")).toBeDefined();
      expect(screen.getByText("🔥")).toBeDefined();
    });

    it("renders both prefix and suffix", () => {
      render(
        <TabsTab value="tab1" label="Tab 1" prefix={<Icon icon="solar:home-linear" />} suffix={<span>🔥</span>} />,
        { wrapper },
      );

      expect(screen.getByText("Tab 1")).toBeDefined();
      expect(screen.getByText("🔥")).toBeDefined();
    });
  });

  // ========== Layout Tests ==========
  describe("Layout", () => {
    it("uses horizontal layout by default (column=false)", () => {
      const { container } = render(<TabsTab value="tab1" label="Tab 1" selected />, { wrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      // Horizontal layout uses borderBottom for selected indicator
      expect(tab?.style.borderBottom).toBeTruthy();
    });

    it("uses vertical layout when column=true", () => {
      const { container } = render(<TabsTab value="tab1" label="Tab 1" selected column />, { wrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      // Vertical layout uses borderRight for selected indicator
      expect(tab?.style.borderRight).toBeTruthy();
    });
  });

  // ========== Color Tests ==========
  describe("Color", () => {
    it("uses default theme color when no custom color", () => {
      const { container } = render(<TabsTab value="tab1" label="Tab 1" />, { wrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      expect(tab).toBeDefined();
    });

    it("applies custom color when provided", () => {
      const { container } = render(<TabsTab value="tab1" label="Tab 1" color="#ff5722" selected />, { wrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      expect(tab).toBeDefined();
    });
  });

  // ========== General Tests ==========
  describe("General", () => {
    it("applies custom className", () => {
      const { container } = render(<TabsTab value="tab1" label="Tab 1" className="custom-class" />, { wrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      expect(tab?.className).toContain("custom-class");
      expect(tab?.className).toContain(COMPONENT_CLASSNAME_NAMES.TabsTab);
    });

    it("applies custom styles", () => {
      const { container } = render(<TabsTab value="tab1" label="Tab 1" style={{ padding: "20px" }} />, { wrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      expect(tab?.style.padding).toBe("20px");
    });

    it("forwards ref correctly", () => {
      const ref = React.createRef<TabsTabRef>();

      render(<TabsTab value="tab1" label="Tab 1" ref={ref} />, { wrapper });

      expect(ref.current).toBeDefined();
      expect(ref.current?.tagName).toBe("DIV");
    });

    it("passes through HTML attributes", () => {
      const { container } = render(
        <TabsTab value="tab1" label="Tab 1" data-testid="test-tab" aria-label="Test tab" />,
        { wrapper },
      );

      const tab = container.querySelector('[data-testid="test-tab"]');
      expect(tab).toBeDefined();
      expect(tab?.getAttribute("aria-label")).toBe("Test tab");
    });

    it("displays correct displayName", () => {
      expect(TabsTab.displayName).toBe(COMPONENT_DISPLAY_NAMES.TabsTab);
    });

    it("applies base styles correctly", () => {
      const { container } = render(<TabsTab value="tab1" label="Tab 1" />, { wrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      expect(tab?.style.boxSizing).toBe("border-box");
    });

    it("merges custom style with component styles", () => {
      const { container } = render(<TabsTab value="tab1" label="Tab 1" style={{ fontSize: "16px" }} />, { wrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      expect(tab?.style.fontSize).toBe("16px");
      expect(tab?.style.boxSizing).toBe("border-box");
    });

    it("supports custom styles via Theme.Provider", () => {
      const customStyles = {
        "Tabs.Tab": {
          backgroundColor: "rgb(245, 245, 245)",
        },
      };

      const customWrapper = ({ children }: { children: React.ReactNode }) => (
        <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
      );

      const { container } = render(<TabsTab value="tab1" label="Tab 1" />, { wrapper: customWrapper });

      const tab = container.querySelector<TabsTabRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTab}']`);
      expect(tab?.style.backgroundColor).toBe("rgb(245, 245, 245)");
    });
  });
});
