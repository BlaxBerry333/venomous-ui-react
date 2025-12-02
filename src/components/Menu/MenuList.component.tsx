"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useMenuListStyles } from "./MenuList.hooks";
import type { MenuListProps, MenuListRef } from "./MenuList.types";

const MenuList = React.memo(
  React.forwardRef<MenuListRef, MenuListProps>(
    ({ className, style, children, as: propAs, column: propColumn, spacing: propSpacing, ...props }, ref) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<MenuListProps>({
        displayName: COMPONENT_DISPLAY_NAMES.MenuList,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const __as = propAs ?? customComponentProps.as ?? "ul";
      const column = propColumn ?? customComponentProps.column ?? true;
      const spacing = propSpacing ?? customComponentProps.spacing ?? 8;

      const { componentStyle } = useMenuListStyles({ column, spacing });

      const Tag = __as as React.ElementType;

      return (
        <Tag
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.MenuList, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
        >
          {children}
        </Tag>
      );
    },
  ),
);

MenuList.displayName = COMPONENT_DISPLAY_NAMES.MenuList;
export default MenuList;
