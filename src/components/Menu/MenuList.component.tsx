"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useMenuListStyles } from "./MenuList.hooks";
import type { MenuListProps, MenuListRef } from "./MenuList.types";

const MenuList = React.memo(
  React.forwardRef<MenuListRef, MenuListProps>(
    ({ className, style, children, as: __as = "ul", column = true, spacing = 8, ...props }, ref) => {
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
