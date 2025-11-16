import TabsContainerComponent from "./TabsContainer.component";
import TabsTabComponent from "./TabsTab.component";
import TabsTabListComponent from "./TabsTabList.component";
import TabsTabPanelComponent from "./TabsTabPanel.component";

export const Tabs = {
  Container: TabsContainerComponent,
  Tab: TabsTabComponent,
  TabList: TabsTabListComponent,
  TabPanel: TabsTabPanelComponent,
};

export type { TabsContainerItemProps, TabsContainerProps, TabsContainerRef } from "./TabsContainer.types";
export type { TabsTabProps, TabsTabRef } from "./TabsTab.types";
export type { TabsTabListProps, TabsTabListRef } from "./TabsTabList.types";
export type { TabsTabPanelProps, TabsTabPanelRef } from "./TabsTabPanel.types";
