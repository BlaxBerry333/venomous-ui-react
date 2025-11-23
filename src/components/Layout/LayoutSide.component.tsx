"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { IconButton } from "@/components/Buttons";
import { ICON_BUTTON_SHAPE_MAP } from "@/components/Buttons/IconButton.types";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useLayoutSideActions, useLayoutSideStyles } from "./LayoutSide.hooks";
import type { LayoutSideProps, LayoutSideRef } from "./LayoutSide.types";

const LayoutSide = React.memo(
  React.forwardRef<LayoutSideRef, LayoutSideProps>(
    (
      {
        className,
        style,
        children,

        expandedWidth = 280,
        collapsedWidth = 80,

        collapsible = false,
        collapsed,
        onCollapsedChange,
        renderCollapseButton,

        renderHeader,
        renderMenu,

        ...props
      },
      ref,
    ) => {
      // ========== Actions Hook ==========
      const { collapsed: isCollapsed, toggle } = useLayoutSideActions({
        collapsed,
        onCollapsedChange,
      });

      // ========== Styles Hook ==========
      const { componentStyle, wrapperStyle, collapseButtonStyle } = useLayoutSideStyles({
        expandedWidth,
        collapsedWidth,
        collapsed: isCollapsed,
      });

      // ========== Header ==========
      const header = React.useMemo(() => {
        if (!renderHeader) return null;
        return renderHeader(isCollapsed);
      }, [renderHeader, isCollapsed]);

      // ========== Menu Content ==========
      const menuContent = React.useMemo(() => {
        if (renderMenu) {
          return renderMenu(isCollapsed);
        }
        if (typeof children === "function") {
          return children(isCollapsed);
        }
        return children;
      }, [renderMenu, children, isCollapsed]);

      // ========== 折叠按钮 ==========
      const collapseButton = React.useMemo(() => {
        if (!collapsible) return null;

        if (renderCollapseButton) {
          return renderCollapseButton(isCollapsed, toggle);
        }

        return (
          <IconButton
            icon={isCollapsed ? "solar:arrow-right-bold" : "solar:arrow-left-bold"}
            shape={ICON_BUTTON_SHAPE_MAP.CIRCLE}
            variant="outlined"
            onClick={toggle}
            style={collapseButtonStyle}
          />
        );
      }, [collapsible, isCollapsed, toggle, renderCollapseButton, collapseButtonStyle]);

      // ========== 侧边栏渲染 ==========
      return (
        <Box
          as="aside"
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.LayoutSide, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
        >
          {collapseButton}
          {header}
          <div style={wrapperStyle}>{menuContent}</div>
        </Box>
      );
    },
  ),
);

LayoutSide.displayName = COMPONENT_DISPLAY_NAMES.LayoutSide;
export default LayoutSide;
