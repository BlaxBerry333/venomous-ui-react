"use client";

import React from "react";

import clsx from "clsx";

import { Space } from "@/components/Space";
import { Typography } from "@/components/Typographies";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useTabsTabActions, useTabsTabStyles } from "./TabsTab.hooks";
import type { TabsTabProps, TabsTabRef } from "./TabsTab.types";

const TabsTab = React.memo(
  React.forwardRef<TabsTabRef, TabsTabProps>(
    (
      {
        className,
        style,
        value,
        label,
        selected: propSelected,
        disabled: propDisabled,
        color: propColor,
        prefix,
        suffix,
        onClick,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,
        column: propColumn,
        spacing: propSpacing,
        as: propAs,
        maxWidth: propMaxWidth,
        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<TabsTabProps>({
        displayName: COMPONENT_DISPLAY_NAMES.TabsTab,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const selected = propSelected ?? customComponentProps.selected ?? false;
      const disabled = propDisabled ?? customComponentProps.disabled ?? false;
      const color = propColor ?? customComponentProps.color;
      const column = propColumn ?? customComponentProps.column ?? false;
      const spacing = propSpacing ?? customComponentProps.spacing ?? 4;
      const as = propAs ?? customComponentProps.as ?? "div";
      const maxWidth = propMaxWidth ?? customComponentProps.maxWidth;

      const { isHovered, isClicked, handleClick, ElementEvents } = useTabsTabActions({
        value,
        selected,
        disabled,
        onClick,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,
      });

      const { componentStyle } = useTabsTabStyles({
        color,
        selected,
        disabled,
        column,
        isHovered,
        isClicked,
      });

      return (
        <Space.Flex
          ref={ref}
          as={as}
          maxWidth={maxWidth}
          spacing={spacing}
          className={clsx(COMPONENT_CLASSNAME_NAMES.TabsTab, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
          onClick={handleClick}
          onMouseEnter={ElementEvents.onMouseEnter}
          onMouseLeave={ElementEvents.onMouseLeave}
          onMouseDown={ElementEvents.onMouseDown}
          onMouseUp={ElementEvents.onMouseUp}
        >
          {prefix && <span style={{ display: "inline-flex", alignItems: "center" }}>{prefix}</span>}
          <Typography.Text as="span" text={label} style={{ color: "inherit" }} />
          {suffix && <span style={{ display: "inline-flex", alignItems: "center" }}>{suffix}</span>}
        </Space.Flex>
      );
    },
  ),
);

TabsTab.displayName = COMPONENT_DISPLAY_NAMES.TabsTab;
export default TabsTab;
