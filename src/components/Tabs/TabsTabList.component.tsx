"use client";

import React from "react";

import clsx from "clsx";

import { Space } from "@/components/Space";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import TabsTab from "./TabsTab.component";
import { useTabsTabListStyles } from "./TabsTabList.hooks";
import type { TabsTabListProps, TabsTabListRef } from "./TabsTabList.types";

const TabsTabList = React.memo(
  React.forwardRef<TabsTabListRef, TabsTabListProps>(
    (
      {
        className,
        style,
        activeTabValue,
        onTabChange,
        tabs,
        TabStyle,
        column = false,
        spacing = 0,
        as = "div",
        maxWidth,
        ...props
      },
      ref,
    ) => {
      const { componentStyle } = useTabsTabListStyles();

      const renderedTabs = React.useMemo(() => {
        if (!tabs || tabs.length === 0) return null;

        return tabs.map((tab) => (
          <TabsTab
            key={tab.value}
            value={tab.value}
            label={tab.label}
            selected={activeTabValue === tab.value}
            disabled={tab.disabled}
            prefix={tab.prefix}
            suffix={tab.suffix}
            color={tab.color}
            column={column}
            onClick={onTabChange}
            style={{ ...TabStyle, ...tab.style }}
          />
        ));
      }, [tabs, activeTabValue, onTabChange, TabStyle]);

      return (
        <Space.Flex
          ref={ref}
          as={as}
          maxWidth={maxWidth}
          column={column}
          spacing={spacing}
          className={clsx(COMPONENT_CLASSNAME_NAMES.TabsTabList, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
        >
          {renderedTabs}
        </Space.Flex>
      );
    },
  ),
);

TabsTabList.displayName = COMPONENT_DISPLAY_NAMES.TabsTabList;
export default TabsTabList;
