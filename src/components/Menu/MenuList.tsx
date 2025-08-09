"use client";

import clsx from "clsx";
import React from "react";

import { MenuListTagMap, type MenuListProps } from "./index.types";

const MenuList = React.memo<MenuListProps>(({ children, className, style, as: Tag = MenuListTagMap.ul, ...props }) => {
  return (
    <Tag
      className={clsx("Venomous-UI-React--Menu.List", className)}
      style={{
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
});

MenuList.displayName = "Menu.List";
export default MenuList;
