import { render, screen, waitFor } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";

import TabsContainer from "./TabsContainer.component";
import type { TabsContainerRef } from "./TabsContainer.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

const mockItems = [
  { value: "tab1", label: "Tab 1", content: <div>Content 1</div> },
  { value: "tab2", label: "Tab 2", content: <div>Content 2</div> },
  { value: "tab3", label: "Tab 3", content: <div>Content 3</div> },
];

describe("TabsContainer", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // ========== Basic Rendering Tests ==========
  describe("Basic Rendering", () => {
    it("renders all tabs and their labels", () => {
      render(<TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={mockItems} />, { wrapper });

      expect(screen.getByText("Tab 1")).toBeDefined();
      expect(screen.getByText("Tab 2")).toBeDefined();
      expect(screen.getByText("Tab 3")).toBeDefined();
    });

    it("renders active tab content", async () => {
      render(<TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={mockItems} />, { wrapper });

      await waitFor(() => {
        expect(screen.getByText("Content 1")).toBeDefined();
      });
    });

    it("does not render inactive tab content by default", () => {
      render(<TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={mockItems} />, { wrapper });

      // Content 2 and 3 should not be in the DOM
      expect(screen.queryByText("Content 2")).toBeNull();
      expect(screen.queryByText("Content 3")).toBeNull();
    });

    it("renders as div by default", () => {
      const { container } = render(<TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={mockItems} />, {
        wrapper,
      });

      const tabsContainer = container.querySelector<TabsContainerRef>(
        `div[class*='${COMPONENT_CLASSNAME_NAMES.TabsContainer}']`,
      );
      expect(tabsContainer).toBeDefined();
      expect(tabsContainer?.tagName).toBe("DIV");
    });
  });

  // ========== Active Tab Tests ==========
  describe("Active Tab", () => {
    it("shows correct content based on activeTabValue", async () => {
      render(<TabsContainer activeTabValue="tab2" onTabChange={vi.fn()} items={mockItems} />, { wrapper });

      await waitFor(() => {
        expect(screen.getByText("Content 2")).toBeDefined();
      });
    });

    it("switches content when activeTabValue changes", async () => {
      const { rerender } = render(<TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={mockItems} />, {
        wrapper,
      });

      await waitFor(() => {
        expect(screen.getByText("Content 1")).toBeDefined();
      });

      rerender(
        <Theme.Provider>
          <TabsContainer activeTabValue="tab2" onTabChange={vi.fn()} items={mockItems} />
        </Theme.Provider>,
      );

      await waitFor(() => {
        expect(screen.getByText("Content 2")).toBeDefined();
      });
    });
  });

  // ========== Keep Mounted Tests ==========
  describe("Keep Mounted", () => {
    it("keeps all panels in DOM when keepMounted is true", () => {
      const itemsWithKeepMounted = mockItems.map((item) => ({ ...item, keepMounted: true }));

      render(<TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={itemsWithKeepMounted} />, { wrapper });

      // All content should exist in DOM
      expect(screen.getByText("Content 1")).toBeDefined();
      expect(screen.getByText("Content 2")).toBeDefined();
      expect(screen.getByText("Content 3")).toBeDefined();
    });

    it("only active panel is visible when keepMounted is true", () => {
      const itemsWithKeepMounted = mockItems.map((item) => ({ ...item, keepMounted: true }));

      const { container } = render(
        <TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={itemsWithKeepMounted} />,
        { wrapper },
      );

      const panels = container.querySelectorAll<TabsContainerRef>(
        `div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabPanel}']`,
      );
      expect(panels.length).toBe(3);

      // First panel should be visible (display: block)
      expect(panels[0]?.style.display).toBe("block");
      expect(panels[1]?.style.display).toBe("none");
      expect(panels[2]?.style.display).toBe("none");
    });
  });

  // ========== Tab Change Handler Tests ==========
  describe("Tab Change Handler", () => {
    it("passes onTabChange to tabs", () => {
      const onTabChange = vi.fn();
      render(<TabsContainer activeTabValue="tab1" onTabChange={onTabChange} items={mockItems} />, { wrapper });

      // onTabChange handler is passed to each tab
      expect(screen.getByText("Tab 1")).toBeDefined();
      expect(screen.getByText("Tab 2")).toBeDefined();
      expect(screen.getByText("Tab 3")).toBeDefined();
    });
  });

  // ========== Layout Tests ==========
  describe("Layout", () => {
    it("uses horizontal layout by default (column=false)", () => {
      const { container } = render(<TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={mockItems} />, {
        wrapper,
      });

      const tabsContainer = container.querySelector<TabsContainerRef>(
        `div[class*='${COMPONENT_CLASSNAME_NAMES.TabsContainer}']`,
      );
      expect(tabsContainer).toBeDefined();
    });

    it("uses vertical layout when column=true", () => {
      const { container } = render(
        <TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={mockItems} column />,
        { wrapper },
      );

      const tabsContainer = container.querySelector<TabsContainerRef>(
        `div[class*='${COMPONENT_CLASSNAME_NAMES.TabsContainer}']`,
      );
      expect(tabsContainer).toBeDefined();
    });
  });

  // ========== Style Props Tests ==========
  describe("Style Props", () => {
    it("applies TabStyle to all tabs", () => {
      render(
        <TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={mockItems} TabStyle={{ padding: "12px" }} />,
        { wrapper },
      );

      expect(screen.getByText("Tab 1")).toBeDefined();
    });

    it("applies TabListStyle to tab list", () => {
      render(
        <TabsContainer
          activeTabValue="tab1"
          onTabChange={vi.fn()}
          items={mockItems}
          TabListStyle={{ backgroundColor: "rgb(240, 240, 240)" }}
        />,
        { wrapper },
      );

      expect(screen.getByText("Tab 1")).toBeDefined();
    });

    it("applies TabPanelStyle to all panels", () => {
      render(
        <TabsContainer
          activeTabValue="tab1"
          onTabChange={vi.fn()}
          items={mockItems}
          TabPanelStyle={{ padding: "24px" }}
        />,
        { wrapper },
      );

      expect(screen.getByText("Tab 1")).toBeDefined();
    });
  });

  // ========== Item Configuration Tests ==========
  describe("Item Configuration", () => {
    it("renders items with disabled tabs", () => {
      const itemsWithDisabled = [
        { value: "tab1", label: "Tab 1", content: <div>Content 1</div> },
        { value: "tab2", label: "Tab 2", content: <div>Content 2</div>, disabled: true },
        { value: "tab3", label: "Tab 3", content: <div>Content 3</div> },
      ];

      render(<TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={itemsWithDisabled} />, { wrapper });

      expect(screen.getByText("Tab 1")).toBeDefined();
      expect(screen.getByText("Tab 2")).toBeDefined();
      expect(screen.getByText("Tab 3")).toBeDefined();
    });

    it("renders items with prefix and suffix", () => {
      const itemsWithExtras = [
        { value: "tab1", label: "Tab 1", content: <div>Content 1</div>, prefix: <span>🏠</span> },
        { value: "tab2", label: "Tab 2", content: <div>Content 2</div>, suffix: <span>🔥</span> },
      ];

      render(<TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={itemsWithExtras} />, { wrapper });

      expect(screen.getByText("🏠")).toBeDefined();
    });

    it("renders items with custom colors", () => {
      const itemsWithColors = [
        { value: "tab1", label: "Tab 1", content: <div>Content 1</div>, color: "#ff5722" },
        { value: "tab2", label: "Tab 2", content: <div>Content 2</div>, color: "#2196f3" },
      ];

      render(<TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={itemsWithColors} />, { wrapper });

      expect(screen.getByText("Tab 1")).toBeDefined();
      expect(screen.getByText("Tab 2")).toBeDefined();
    });
  });

  // ========== General Tests ==========
  describe("General", () => {
    it("applies custom className", () => {
      const { container } = render(
        <TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={mockItems} className="custom-class" />,
        { wrapper },
      );

      const tabsContainer = container.querySelector<TabsContainerRef>(
        `div[class*='${COMPONENT_CLASSNAME_NAMES.TabsContainer}']`,
      );
      expect(tabsContainer?.className).toContain("custom-class");
      expect(tabsContainer?.className).toContain(COMPONENT_CLASSNAME_NAMES.TabsContainer);
    });

    it("applies custom styles", () => {
      const { container } = render(
        <TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={mockItems} style={{ padding: "20px" }} />,
        { wrapper },
      );

      const tabsContainer = container.querySelector<TabsContainerRef>(
        `div[class*='${COMPONENT_CLASSNAME_NAMES.TabsContainer}']`,
      );
      expect(tabsContainer?.style.padding).toBe("20px");
    });

    it("forwards ref correctly", () => {
      const ref = React.createRef<TabsContainerRef>();

      render(<TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={mockItems} ref={ref} />, { wrapper });

      expect(ref.current).toBeDefined();
      expect(ref.current?.tagName).toBe("DIV");
    });

    it("passes through HTML attributes", () => {
      const { container } = render(
        <TabsContainer
          activeTabValue="tab1"
          onTabChange={vi.fn()}
          items={mockItems}
          data-testid="test-tabs"
          aria-label="Test tabs"
        />,
        { wrapper },
      );

      const tabsContainer = container.querySelector('[data-testid="test-tabs"]');
      expect(tabsContainer).toBeDefined();
      expect(tabsContainer?.getAttribute("aria-label")).toBe("Test tabs");
    });

    it("displays correct displayName", () => {
      expect(TabsContainer.displayName).toBe(COMPONENT_DISPLAY_NAMES.TabsContainer);
    });

    it("applies base styles correctly", () => {
      const { container } = render(<TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={mockItems} />, {
        wrapper,
      });

      const tabsContainer = container.querySelector<TabsContainerRef>(
        `div[class*='${COMPONENT_CLASSNAME_NAMES.TabsContainer}']`,
      );
      expect(tabsContainer?.style.boxSizing).toBe("border-box");
    });

    it("merges custom style with component styles", () => {
      const { container } = render(
        <TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={mockItems} style={{ maxWidth: "800px" }} />,
        { wrapper },
      );

      const tabsContainer = container.querySelector<TabsContainerRef>(
        `div[class*='${COMPONENT_CLASSNAME_NAMES.TabsContainer}']`,
      );
      expect(tabsContainer?.style.maxWidth).toBe("800px");
      expect(tabsContainer?.style.boxSizing).toBe("border-box");
    });

    it("supports custom styles via Theme.Provider", () => {
      const customStyles = {
        "Tabs.Container": {
          backgroundColor: "rgb(250, 250, 250)",
        },
      };

      const customWrapper = ({ children }: { children: React.ReactNode }) => (
        <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
      );

      const { container } = render(<TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={mockItems} />, {
        wrapper: customWrapper,
      });

      const tabsContainer = container.querySelector<TabsContainerRef>(
        `div[class*='${COMPONENT_CLASSNAME_NAMES.TabsContainer}']`,
      );
      expect(tabsContainer?.style.backgroundColor).toBe("rgb(250, 250, 250)");
    });

    it("renders with empty items array", () => {
      const { container } = render(<TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={[]} />, {
        wrapper,
      });

      const tabsContainer = container.querySelector<TabsContainerRef>(
        `div[class*='${COMPONENT_CLASSNAME_NAMES.TabsContainer}']`,
      );
      expect(tabsContainer).toBeDefined();
    });

    it("handles complex content in panels", async () => {
      const complexItems = [
        {
          value: "tab1",
          label: "Tab 1",
          content: (
            <div>
              <h2>Title</h2>
              <p>Paragraph</p>
            </div>
          ),
        },
      ];

      render(<TabsContainer activeTabValue="tab1" onTabChange={vi.fn()} items={complexItems} />, { wrapper });

      await waitFor(() => {
        expect(screen.getByText("Title")).toBeDefined();
        expect(screen.getByText("Paragraph")).toBeDefined();
      });
    });
  });
});
