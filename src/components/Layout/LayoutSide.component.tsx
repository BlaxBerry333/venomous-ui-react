"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { BUTTON_VARIANT_MAP, IconButton } from "@/components/Buttons";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useLayoutSideActions, useLayoutSideStyles } from "./LayoutSide.hooks";
import type { LayoutSideProps, LayoutSideRef } from "./LayoutSide.types";

const LayoutSide = React.memo(
  React.forwardRef<LayoutSideRef, LayoutSideProps>(
    (
      {
        className,
        style,
        children,

        expandedWidth: propExpandedWidth,
        collapsedWidth: propCollapsedWidth,

        collapsible: propCollapsible,
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
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<LayoutSideProps>({
        displayName: COMPONENT_DISPLAY_NAMES.LayoutSide,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const expandedWidth = propExpandedWidth ?? customComponentProps.expandedWidth ?? 280;
      const collapsedWidth = propCollapsedWidth ?? customComponentProps.collapsedWidth ?? 80;
      const collapsible = propCollapsible ?? customComponentProps.collapsible ?? false;

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
