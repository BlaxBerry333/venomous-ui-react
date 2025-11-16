import type { SpaceFlexProps, SpaceFlexRef } from "@/components/Space";
import type { TabsTabProps } from "./TabsTab.types";

export type TabsTabListRef = SpaceFlexRef;

export interface TabsTabListProps extends Omit<SpaceFlexProps, "children"> {
  /**
   * The currently selected tab value.
   */
  activeTabValue?: string | number;

  /**
   * Callback when a tab is clicked.
   */
  onTabChange?: (value: string | number) => void;

  /**
   * Tab items configuration array (auto-render Tabs.Tab).
   */
  tabs?: TabsTabProps[];

  /**
   * Style to be applied to all Tabs.Tab components.
   */
  TabStyle?: React.CSSProperties;
}
