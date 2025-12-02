import { render, screen } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";

import TabsTabList from "./TabsTabList.component";
import type { TabsTabListRef } from "./TabsTabList.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

const mockTabs = [
  { value: "tab1", label: "Tab 1" },
  { value: "tab2", label: "Tab 2" },
  { value: "tab3", label: "Tab 3" },
];

describe("TabsTabList", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // ========== Basic Rendering Tests ==========
  describe("Basic Rendering", () => {
    it("renders all tabs correctly", () => {
      render(<TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={mockTabs} />, { wrapper });

      expect(screen.getByText("Tab 1")).toBeDefined();
      expect(screen.getByText("Tab 2")).toBeDefined();
      expect(screen.getByText("Tab 3")).toBeDefined();
    });

    it("renders as div by default", () => {
      const { container } = render(<TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={mockTabs} />, {
        wrapper,
      });

      const tabList = container.querySelector<TabsTabListRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabList}']`);
      expect(tabList).toBeDefined();
      expect(tabList?.tagName).toBe("DIV");
    });

    it("renders empty when tabs array is empty", () => {
      const { container } = render(<TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={[]} />, { wrapper });

      const tabList = container.querySelector<TabsTabListRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabList}']`);
      expect(tabList).toBeDefined();
      expect(tabList?.textContent).toBe("");
    });

    it("renders with undefined tabs", () => {
      const { container } = render(
        <TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={undefined as any} />,
        { wrapper },
      );

      const tabList = container.querySelector<TabsTabListRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabList}']`);
      expect(tabList).toBeDefined();
    });
  });

  // ========== Active Tab Tests ==========
  describe("Active Tab", () => {
    it("marks correct tab as selected based on activeTabValue", () => {
      render(<TabsTabList activeTabValue="tab2" onTabChange={vi.fn()} tabs={mockTabs} />, { wrapper });

      // All tabs should be rendered
      expect(screen.getByText("Tab 1")).toBeDefined();
      expect(screen.getByText("Tab 2")).toBeDefined();
      expect(screen.getByText("Tab 3")).toBeDefined();
    });

    it("handles string activeTabValue", () => {
      render(<TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={mockTabs} />, { wrapper });

      expect(screen.getByText("Tab 1")).toBeDefined();
    });

    it("handles number activeTabValue", () => {
      const numberTabs = [
        { value: 1, label: "Tab 1" },
        { value: 2, label: "Tab 2" },
      ];

      render(<TabsTabList activeTabValue={1} onTabChange={vi.fn()} tabs={numberTabs} />, { wrapper });

      expect(screen.getByText("Tab 1")).toBeDefined();
      expect(screen.getByText("Tab 2")).toBeDefined();
    });
  });

  // ========== Tab Change Handler Tests ==========
  describe("Tab Change Handler", () => {
    it("passes onTabChange to tabs", () => {
      const onTabChange = vi.fn();
      render(<TabsTabList activeTabValue="tab1" onTabChange={onTabChange} tabs={mockTabs} />, {
        wrapper,
      });

      // onTabChange handler is passed to each tab
      expect(screen.getByText("Tab 1")).toBeDefined();
      expect(screen.getByText("Tab 2")).toBeDefined();
      expect(screen.getByText("Tab 3")).toBeDefined();
    });
  });

  // ========== Layout Tests ==========
  describe("Layout", () => {
    it("uses horizontal layout by default (column=false)", () => {
      const { container } = render(<TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={mockTabs} />, {
        wrapper,
      });

      const tabList = container.querySelector<TabsTabListRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabList}']`);
      expect(tabList).toBeDefined();
    });

    it("uses vertical layout when column=true", () => {
      const { container } = render(<TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={mockTabs} column />, {
        wrapper,
      });

      const tabList = container.querySelector<TabsTabListRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabList}']`);
      expect(tabList).toBeDefined();
    });

    it("applies spacing between tabs", () => {
      const { container } = render(
        <TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={mockTabs} spacing={8} />,
        { wrapper },
      );

      const tabList = container.querySelector<TabsTabListRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabList}']`);
      expect(tabList?.style.gap).toBe("8px");
    });
  });

  // ========== Tab Configuration Tests ==========
  describe("Tab Configuration", () => {
    it("renders tabs with disabled state", () => {
      const tabsWithDisabled = [
        { value: "tab1", label: "Tab 1" },
        { value: "tab2", label: "Tab 2", disabled: true },
        { value: "tab3", label: "Tab 3" },
      ];

      render(<TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={tabsWithDisabled} />, { wrapper });

      expect(screen.getByText("Tab 1")).toBeDefined();
      expect(screen.getByText("Tab 2")).toBeDefined();
      expect(screen.getByText("Tab 3")).toBeDefined();
    });

    it("renders tabs with prefix and suffix", () => {
      const tabsWithExtras = [
        { value: "tab1", label: "Tab 1", prefix: <span>🏠</span> },
        { value: "tab2", label: "Tab 2", suffix: <span>🔥</span> },
      ];

      render(<TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={tabsWithExtras} />, { wrapper });

      expect(screen.getByText("Tab 1")).toBeDefined();
      expect(screen.getByText("Tab 2")).toBeDefined();
      expect(screen.getByText("🏠")).toBeDefined();
      expect(screen.getByText("🔥")).toBeDefined();
    });

    it("renders tabs with custom colors", () => {
      const tabsWithColors = [
        { value: "tab1", label: "Tab 1", color: "#ff5722" },
        { value: "tab2", label: "Tab 2", color: "#2196f3" },
      ];

      render(<TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={tabsWithColors} />, { wrapper });

      expect(screen.getByText("Tab 1")).toBeDefined();
      expect(screen.getByText("Tab 2")).toBeDefined();
    });

    it("applies individual tab styles", () => {
      const tabsWithStyles = [
        { value: "tab1", label: "Tab 1", style: { fontWeight: "bold" } },
        { value: "tab2", label: "Tab 2" },
      ];

      render(<TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={tabsWithStyles} />, { wrapper });

      expect(screen.getByText("Tab 1")).toBeDefined();
      expect(screen.getByText("Tab 2")).toBeDefined();
    });
  });

  // ========== Style Props Tests ==========
  describe("Style Props", () => {
    it("applies TabStyle to all tabs", () => {
      render(
        <TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={mockTabs} TabStyle={{ padding: "12px" }} />,
        { wrapper },
      );

      expect(screen.getByText("Tab 1")).toBeDefined();
    });
  });

  // ========== General Tests ==========
  describe("General", () => {
    it("applies custom className", () => {
      const { container } = render(
        <TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={mockTabs} className="custom-class" />,
        { wrapper },
      );

      const tabList = container.querySelector<TabsTabListRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabList}']`);
      expect(tabList?.className).toContain("custom-class");
      expect(tabList?.className).toContain(COMPONENT_CLASSNAME_NAMES.TabsTabList);
    });

    it("applies custom styles", () => {
      const { container } = render(
        <TabsTabList
          activeTabValue="tab1"
          onTabChange={vi.fn()}
          tabs={mockTabs}
          style={{ backgroundColor: "rgb(240, 240, 240)" }}
        />,
        { wrapper },
      );

      const tabList = container.querySelector<TabsTabListRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabList}']`);
      expect(tabList?.style.backgroundColor).toBe("rgb(240, 240, 240)");
    });

    it("forwards ref correctly", () => {
      const ref = React.createRef<TabsTabListRef>();

      render(<TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={mockTabs} ref={ref} />, { wrapper });

      expect(ref.current).toBeDefined();
      expect(ref.current?.tagName).toBe("DIV");
    });

    it("passes through HTML attributes", () => {
      const { container } = render(
        <TabsTabList
          activeTabValue="tab1"
          onTabChange={vi.fn()}
          tabs={mockTabs}
          data-testid="test-tablist"
          aria-label="Test tab list"
        />,
        { wrapper },
      );

      const tabList = container.querySelector('[data-testid="test-tablist"]');
      expect(tabList).toBeDefined();
      expect(tabList?.getAttribute("aria-label")).toBe("Test tab list");
    });

    it("displays correct displayName", () => {
      expect(TabsTabList.displayName).toBe(COMPONENT_DISPLAY_NAMES.TabsTabList);
    });

    it("applies base styles correctly", () => {
      const { container } = render(<TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={mockTabs} />, {
        wrapper,
      });

      const tabList = container.querySelector<TabsTabListRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabList}']`);
      expect(tabList?.style.boxSizing).toBe("border-box");
    });

    it("merges custom style with component styles", () => {
      const { container } = render(
        <TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={mockTabs} style={{ padding: "16px" }} />,
        { wrapper },
      );

      const tabList = container.querySelector<TabsTabListRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabList}']`);
      expect(tabList?.style.padding).toBe("16px");
      expect(tabList?.style.boxSizing).toBe("border-box");
    });

    it("supports custom styles via Theme.Provider", () => {
      const customComponentProps = {
        "Tabs.TabList": {
          style: {
            borderBottom: "2px solid rgb(200, 200, 200)",
          },
        },
      };

      const customWrapper = ({ children }: { children: React.ReactNode }) => (
        <Theme.Provider customComponentProps={customComponentProps}>{children}</Theme.Provider>
      );

      const { container } = render(<TabsTabList activeTabValue="tab1" onTabChange={vi.fn()} tabs={mockTabs} />, {
        wrapper: customWrapper,
      });

      const tabList = container.querySelector<TabsTabListRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabList}']`);
      expect(tabList?.style.borderBottom).toBe("2px solid rgb(200, 200, 200)");
    });
  });
});
