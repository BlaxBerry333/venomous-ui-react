import type { SpaceFlexProps, SpaceFlexRef } from "@/components/Space";
import type { TabsTabProps } from "./TabsTab.types";

export type TabsContainerRef = SpaceFlexRef;

export interface TabsContainerProps extends Omit<SpaceFlexProps, "children" | "column" | "spacing"> {
  /**
   * The currently selected tab value (controlled).
   * @required
   */
  activeTabValue: string | number;

  /**
   * Callback when tab changes.
   * @required
   */
  onTabChange: (value: string | number) => void;

  /**
   * Tab items configuration array (including content).
   * @required
   */
  items: TabsContainerItemProps[];

  /**
   * Whether to use vertical layout (TabList on left, Panels on right).
   * @default false (horizontal: TabList on top, Panels on bottom)
   */
  column?: boolean;

  /**
   * Style to be applied to all Tabs.Tab components.
   */
  TabStyle?: React.CSSProperties;

  /**
   * Style to be applied to Tabs.TabList component.
   */
  TabListStyle?: React.CSSProperties;

  /**
   * Style to be applied to all Tabs.TabPanel components.
   */
  TabPanelStyle?: React.CSSProperties;
}

export interface TabsContainerItemProps extends Omit<TabsTabProps, "content"> {
  /**
   * The content of the panel.
   * @required
   */
  content: React.ReactNode;

  /**
   * Whether to keep the panel mounted when not active.
   * @default false
   */
  keepMounted?: boolean;
}
