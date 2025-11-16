"use client";

import React from "react";

import clsx from "clsx";

import { Space } from "@/components/Space";
import { Typography } from "@/components/Typographies";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
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
        selected = false,
        disabled = false,
        color,
        prefix,
        suffix,
        onClick,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,
        column = false,
        spacing = 4,
        as = "div",
        maxWidth,
        ...props
      },
      ref,
    ) => {
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
