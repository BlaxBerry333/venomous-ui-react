"use client";

import React from "react";

import clsx from "clsx";

import { Transition } from "@/components/Transition";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useTabsTabPanelStyles } from "./TabsTabPanel.hooks";
import type { TabsTabPanelProps, TabsTabPanelRef } from "./TabsTabPanel.types";

const TabsTabPanel = React.memo(
  React.forwardRef<TabsTabPanelRef, TabsTabPanelProps>(
    ({ className, style, visible = false, keepMounted = false, children, ...props }, ref) => {
      const { componentStyle } = useTabsTabPanelStyles();

      // ✅ 性能优化：不保持挂载时，直接不渲染
      if (!keepMounted && !visible) {
        return null;
      }

      // ✅ keepMounted 模式：始终保持在 DOM 中，使用 display:none 隐藏
      if (keepMounted) {
        return (
          <div
            ref={ref}
            className={clsx(COMPONENT_CLASSNAME_NAMES.TabsTabPanel, className)}
            style={{
              ...componentStyle,
              display: visible ? "block" : "none",
              ...style,
            }}
            {...props}
          >
            {children}
          </div>
        );
      }

      // ✅ 非 keepMounted 模式：使用过渡动画
      return (
        <Transition.Fade visible={visible} duration={200}>
          <div
            ref={ref}
            className={clsx(COMPONENT_CLASSNAME_NAMES.TabsTabPanel, className)}
            style={{ ...componentStyle, ...style }}
            {...props}
          >
            {children}
          </div>
        </Transition.Fade>
      );
    },
  ),
);

TabsTabPanel.displayName = COMPONENT_DISPLAY_NAMES.TabsTabPanel;
export default TabsTabPanel;
