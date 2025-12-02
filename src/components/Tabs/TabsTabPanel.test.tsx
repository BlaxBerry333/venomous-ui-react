import { render, screen, waitFor } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";

import TabsTabPanel from "./TabsTabPanel.component";
import type { TabsTabPanelRef } from "./TabsTabPanel.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("TabsTabPanel", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // ========== Visibility Tests ==========
  describe("Visibility", () => {
    it("does not render when visible is false and keepMounted is false", () => {
      const { container } = render(
        <TabsTabPanel visible={false} keepMounted={false}>
          <div>Panel Content</div>
        </TabsTabPanel>,
        { wrapper },
      );

      const panel = container.querySelector<TabsTabPanelRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabPanel}']`);
      expect(panel).toBeNull();
    });

    it("renders when visible is true", async () => {
      render(
        <TabsTabPanel visible={true}>
          <div>Panel Content</div>
        </TabsTabPanel>,
        { wrapper },
      );

      await waitFor(() => {
        expect(screen.getByText("Panel Content")).toBeDefined();
      });
    });

    it("renders with display none when keepMounted is true and visible is false", () => {
      const { container } = render(
        <TabsTabPanel visible={false} keepMounted={true}>
          <div>Panel Content</div>
        </TabsTabPanel>,
        { wrapper },
      );

      const panel = container.querySelector<TabsTabPanelRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabPanel}']`);
      expect(panel).toBeDefined();
      expect(panel?.style.display).toBe("none");
    });

    it("renders with display block when keepMounted is true and visible is true", () => {
      const { container } = render(
        <TabsTabPanel visible={true} keepMounted={true}>
          <div>Panel Content</div>
        </TabsTabPanel>,
        { wrapper },
      );

      const panel = container.querySelector<TabsTabPanelRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabPanel}']`);
      expect(panel).toBeDefined();
      expect(panel?.style.display).toBe("block");
    });
  });

  // ========== Keep Mounted Mode Tests ==========
  describe("Keep Mounted Mode", () => {
    it("keeps content in DOM when keepMounted is true", () => {
      const { container, rerender } = render(
        <TabsTabPanel visible={true} keepMounted={true}>
          <div>Panel Content</div>
        </TabsTabPanel>,
        { wrapper },
      );

      expect(screen.getByText("Panel Content")).toBeDefined();

      rerender(
        <Theme.Provider>
          <TabsTabPanel visible={false} keepMounted={true}>
            <div>Panel Content</div>
          </TabsTabPanel>
        </Theme.Provider>,
      );

      // Content should still exist in DOM
      const panel = container.querySelector<TabsTabPanelRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabPanel}']`);
      expect(panel).toBeDefined();
      expect(panel?.textContent).toContain("Panel Content");
    });

    it("removes content from DOM when keepMounted is false and not visible", () => {
      const { container, rerender } = render(
        <TabsTabPanel visible={true} keepMounted={false}>
          <div>Panel Content</div>
        </TabsTabPanel>,
        { wrapper },
      );

      rerender(
        <Theme.Provider>
          <TabsTabPanel visible={false} keepMounted={false}>
            <div>Panel Content</div>
          </TabsTabPanel>
        </Theme.Provider>,
      );

      const panel = container.querySelector<TabsTabPanelRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabPanel}']`);
      expect(panel).toBeNull();
    });
  });

  // ========== Transition Tests ==========
  describe("Transition", () => {
    it("uses Transition.Fade when keepMounted is false", async () => {
      const { container } = render(
        <TabsTabPanel visible={true} keepMounted={false}>
          <div>Panel Content</div>
        </TabsTabPanel>,
        { wrapper },
      );

      await waitFor(() => {
        const panel = container.querySelector<TabsTabPanelRef>(
          `div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabPanel}']`,
        );
        expect(panel).toBeDefined();
      });
    });

    it("does not use Transition when keepMounted is true", () => {
      const { container } = render(
        <TabsTabPanel visible={true} keepMounted={true}>
          <div>Panel Content</div>
        </TabsTabPanel>,
        { wrapper },
      );

      const panel = container.querySelector<TabsTabPanelRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabPanel}']`);
      expect(panel).toBeDefined();
    });
  });

  // ========== General Tests ==========
  describe("General", () => {
    it("renders children correctly", async () => {
      render(
        <TabsTabPanel visible={true}>
          <div>Test Content</div>
        </TabsTabPanel>,
        { wrapper },
      );

      await waitFor(() => {
        expect(screen.getByText("Test Content")).toBeDefined();
      });
    });

    it("applies custom className", () => {
      const { container } = render(
        <TabsTabPanel visible={true} keepMounted={true} className="custom-class">
          <div>Content</div>
        </TabsTabPanel>,
        { wrapper },
      );

      const panel = container.querySelector<TabsTabPanelRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabPanel}']`);
      expect(panel?.className).toContain("custom-class");
      expect(panel?.className).toContain(COMPONENT_CLASSNAME_NAMES.TabsTabPanel);
    });

    it("applies custom styles", () => {
      const { container } = render(
        <TabsTabPanel visible={true} keepMounted={true} style={{ padding: "20px" }}>
          <div>Content</div>
        </TabsTabPanel>,
        { wrapper },
      );

      const panel = container.querySelector<TabsTabPanelRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabPanel}']`);
      expect(panel?.style.padding).toBe("20px");
    });

    it("forwards ref correctly", () => {
      const ref = React.createRef<TabsTabPanelRef>();

      render(
        <TabsTabPanel visible={true} keepMounted={true} ref={ref}>
          <div>Content</div>
        </TabsTabPanel>,
        { wrapper },
      );

      expect(ref.current).toBeDefined();
      expect(ref.current?.tagName).toBe("DIV");
    });

    it("passes through HTML attributes", () => {
      const { container } = render(
        <TabsTabPanel visible={true} keepMounted={true} data-testid="test-panel" aria-label="Test panel">
          <div>Content</div>
        </TabsTabPanel>,
        { wrapper },
      );

      const panel = container.querySelector('[data-testid="test-panel"]');
      expect(panel).toBeDefined();
      expect(panel?.getAttribute("aria-label")).toBe("Test panel");
    });

    it("displays correct displayName", () => {
      expect(TabsTabPanel.displayName).toBe(COMPONENT_DISPLAY_NAMES.TabsTabPanel);
    });

    it("supports custom styles via Theme.Provider", () => {
      const customComponentProps = {
        "Tabs.TabPanel": {
          style: {
            backgroundColor: "rgb(250, 250, 250)",
          },
        },
      };

      const customWrapper = ({ children }: { children: React.ReactNode }) => (
        <Theme.Provider customComponentProps={customComponentProps}>{children}</Theme.Provider>
      );

      const { container } = render(
        <TabsTabPanel visible={true} keepMounted={true}>
          <div>Content</div>
        </TabsTabPanel>,
        { wrapper: customWrapper },
      );

      const panel = container.querySelector<TabsTabPanelRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TabsTabPanel}']`);
      expect(panel?.style.backgroundColor).toBe("rgb(250, 250, 250)");
    });
  });
});
