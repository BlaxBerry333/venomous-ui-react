"use client";

import React from "react";

import clsx from "clsx";

import { Space } from "@/components/Space";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useTabsContainerStyles } from "./TabsContainer.hooks";
import type { TabsContainerProps, TabsContainerRef } from "./TabsContainer.types";
import TabsTabList from "./TabsTabList.component";
import TabsTabPanel from "./TabsTabPanel.component";

const TabsContainer = React.memo(
  React.forwardRef<TabsContainerRef, TabsContainerProps>(
    (
      {
        className,
        style,
        activeTabValue,
        onTabChange,
        items,
        column: propColumn,
        TabStyle,
        TabListStyle,
        TabPanelStyle,
        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<TabsContainerProps>({
        displayName: COMPONENT_DISPLAY_NAMES.TabsContainer,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const column = propColumn ?? customComponentProps.column ?? false;

      const { componentStyle } = useTabsContainerStyles();

      // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
      const tabs = React.useMemo(() => items.map(({ content, keepMounted, ...tabProps }) => tabProps), [items]);

      return (
        <Space.Flex
          ref={ref}
          column={!column}
          spacing={0}
          className={clsx(COMPONENT_CLASSNAME_NAMES.TabsContainer, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
        >
          {/* TabList */}
          <TabsTabList
            activeTabValue={activeTabValue}
            onTabChange={onTabChange}
            tabs={tabs}
            TabStyle={{ ...TabStyle }}
            column={column}
            spacing={4}
            style={{ height: "100%", width: "100%", ...TabListStyle }}
          />

          {/* TabPanels */}
          <Space.Flex column style={{ flex: 1, height: "100%", width: "100%" }}>
            {items.map((item) => (
              <TabsTabPanel
                key={item.value}
                visible={activeTabValue === item.value}
                keepMounted={item.keepMounted}
                style={TabPanelStyle}
              >
                {item.content}
              </TabsTabPanel>
            ))}
          </Space.Flex>
        </Space.Flex>
      );
    },
  ),
);

TabsContainer.displayName = COMPONENT_DISPLAY_NAMES.TabsContainer;
export default TabsContainer;
