"use client";

import clsx from "clsx";
import React from "react";

import { useHandler } from "@/hooks";
import { BorderColors } from "@/utils";
import { Space } from "../Space";
import { Theme } from "../Theme";
import { Transitions } from "../Transition";
import { MenuItemTagMap, type MenuCollapseItemProps } from "./index.types";
import MenuItem from "./MenuItem";
import MenuList from "./MenuList";

const MenuCollapseItem = React.memo<MenuCollapseItemProps>(
  ({
    as: Tag = MenuItemTagMap.li,
    className,
    style,
    icon,
    text,
    subText,
    isDisabled = false,
    isActive = false,
    isCollapsed = false,
    subItems,
    ...props
  }) => {
    const [selectedSubItemID, setSelectedSubItemID] = React.useState<string | null>(null);

    const handler = useHandler(isCollapsed);
    const toggle = React.useCallback(() => {
      if (isDisabled) {
        return;
      }
      const state = handler.isOpen;
      handler.setIsOpen(!state);
      if (state) {
        setSelectedSubItemID(null);
      }
    }, [handler.isOpen, isDisabled]);

    // 初始化
    React.useEffect(() => {
      if (selectedSubItemID !== null) {
        handler.open();
      }
    }, []);

    React.useEffect(() => {
      handler.setIsOpen(isCollapsed);
    }, [isCollapsed]);

    return (
      <>
        <MenuItem
          as={Tag}
          className={clsx("Venomous-UI-React--Menu.CollapseItem", className)}
          style={{
            padding: "8px",
            // backgroundColor: handler.isOpen ? "?" : "transparent",
            ...style,
          }}
          icon={icon}
          text={text}
          subText={subText}
          isDisabled={isDisabled}
          isActive={isActive || selectedSubItemID !== null}
          onClick={toggle}
          actionButtonProps={{
            icon: handler.isOpen ? "solar:alt-arrow-up-bold-duotone" : "solar:alt-arrow-down-bold-duotone",
            style: { border: 0 },
          }}
          {...props}
        />
        <Transitions.Collapse isOpen={handler.isOpen}>
          <MenuList style={{ width: style?.width, paddingLeft: 24 }}>
            {subItems.map(({ style: subItemStyle, onClick: subItemOnClick, ...item }) => (
              <Space.Flex key={item.text} row gap={0} style={{ width: "100%" }}>
                <MenuCollapseItemTreeLine />
                <MenuItem
                  isActive={selectedSubItemID === item.text}
                  onClick={(e) => {
                    setSelectedSubItemID(item.text);
                    subItemOnClick?.(e);
                  }}
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    ...subItemStyle,
                  }}
                  {...item}
                />
              </Space.Flex>
            ))}
          </MenuList>
        </Transitions.Collapse>
      </>
    );
  },
);

MenuCollapseItem.displayName = "Menu.CollapseItem";
export default MenuCollapseItem;

const MenuCollapseItemTreeLine = React.memo(() => {
  const { themeMode } = Theme.useThemeMode();
  const color = BorderColors[themeMode].quaternary;
  return (
    <>
      <i
        style={{
          display: "inline-block",
          backgroundColor: color,
          height: "100%",
          width: 1.5,
          position: "absolute",
          top: "-50%",
          left: -6,
        }}
      />
      <i
        style={{
          display: "inline-block",
          backgroundColor: color,
          height: 1.5,
          width: 8,
          position: "absolute",
          top: "50%",
          left: -4.5,
          transform: "translateY(-50%)",
        }}
      />
    </>
  );
});
MenuCollapseItemTreeLine.displayName = "Menu.CollapseItemTreeLine";
