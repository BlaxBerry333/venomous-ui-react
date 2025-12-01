"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { BUTTON_VARIANT_MAP, IconButton } from "@/components/Buttons";
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
        renderBottom,

        ...props
      },
      ref,
    ) => {
      const { collapsed: isCollapsed, toggle } = useLayoutSideActions({
        collapsed,
        onCollapsedChange,
      });

      const { componentStyle, collapseButtonStyle } = useLayoutSideStyles({
        expandedWidth,
        collapsedWidth,
        collapsed: isCollapsed,
      });

      // ========== 折叠按钮 ==========
      const collapseButton = React.useMemo(() => {
        if (!collapsible) return null;

        if (renderCollapseButton) {
          return renderCollapseButton(isCollapsed, toggle);
        }

        return (
          <IconButton
            icon={isCollapsed ? "solar:arrow-right-bold" : "solar:arrow-left-bold"}
            variant={BUTTON_VARIANT_MAP.CONTAINED}
            circle
            onClick={toggle}
            style={collapseButtonStyle}
          />
        );
      }, [collapsible, isCollapsed, toggle, renderCollapseButton, collapseButtonStyle]);

      // ========== Content ==========
      const content = React.useMemo(() => {
        if (children) {
          return typeof children === "function" ? children(isCollapsed) : children;
        }

        return (
          <>
            {renderHeader?.(isCollapsed)}
            {renderMenu?.(isCollapsed)}
            {renderBottom?.(isCollapsed)}
          </>
        );
      }, [children, isCollapsed, renderHeader, renderMenu, renderBottom]);

      return (
        <Box
          as="aside"
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.LayoutSide, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
        >
          {collapseButton}
          {content}
        </Box>
      );
    },
  ),
);

LayoutSide.displayName = COMPONENT_DISPLAY_NAMES.LayoutSide;
export default LayoutSide;
