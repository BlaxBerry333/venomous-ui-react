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
    const { themeMode } = Theme.useThemeMode();

    const color = React.useMemo<React.CSSProperties["color"]>(() => {
      return BorderColors[themeMode].quaternary;
    }, [themeMode]);

    const handler = useHandler(isCollapsed);
    const isOpen: boolean = handler.isOpen;

    const [selectedSubItemID, setSelectedSubItemID] = React.useState<MenuCollapseItemProps["id"] | null>(null);

    const toggleCollapseTrigger = React.useCallback(() => {
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
            ...(isOpen
              ? {
                  outlineWidth: 1.5,
                  outlineStyle: "solid",
                  outlineColor: color,
                }
              : { outline: "none" }),
            ...style,
          }}
          icon={icon}
          text={text}
          subText={subText}
          isDisabled={isDisabled}
          isActive={isActive || selectedSubItemID !== null}
          onClick={toggleCollapseTrigger}
          actionButtonProps={{
            icon: handler.isOpen ? "solar:alt-arrow-up-bold-duotone" : "solar:alt-arrow-down-bold-duotone",
            style: { border: 0 },
          }}
          {...props}
        />
        <Transitions.Collapse isOpen={handler.isOpen}>
          <MenuList style={{ width: style?.width, padding: "4px 2px 4px 24px" }}>
            {subItems.map(({ style: subItemStyle, onClick: subItemOnClick, ...item }) => (
              <Space.Flex key={item.id} row gap={0} style={{ width: "100%" }}>
                <MenuCollapseItemTreeLine color={color} />
                <MenuItem
                  isActive={selectedSubItemID === item.id}
                  onClick={(e) => {
                    setSelectedSubItemID(item.id);
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

const MenuCollapseItemTreeLine = React.memo<{ color: React.CSSProperties["color"] }>(({ color }) => {
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
          left: -10,
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
          left: -8.5,
          transform: "translateY(-50%)",
        }}
      />
    </>
  );
});
MenuCollapseItemTreeLine.displayName = "Menu.CollapseItemTreeLine";
