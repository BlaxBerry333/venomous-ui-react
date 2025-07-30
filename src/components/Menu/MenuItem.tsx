"use client";

import React from "react";

import { useElementHover } from "@/hooks";
import { TextColors, ThemeShadow } from "@/utils";
import { Buttons } from "../Button";
import { Icon } from "../Icon";
import { Space } from "../Space";
import { Theme } from "../Theme";
import { Typography } from "../Typography";
import { MenuItemTagMap, type MenuItemProps } from "./index.types";

const MenuItem = React.memo<MenuItemProps>(
  ({
    as: Tag = MenuItemTagMap.li,
    style,
    icon,
    text,
    subText,
    isDisabled = false,
    isActive = false,
    actionButton = undefined,
    ...props
  }) => {
    const { themeMode } = Theme.useThemeMode();
    const { themeColor } = Theme.useThemeColor();

    const { isHovering, handleMouseDown, handleMouseUp, handleMouseLeave } = useElementHover({ isDisabled });
    const handleMouseOverStyles: React.MouseEventHandler<HTMLLIElement> = React.useCallback(
      (e) => {
        if (isDisabled) return;
        e.currentTarget.style.boxShadow = ThemeShadow[themeMode].tertiary;
      },
      [isDisabled],
    );
    const handleMouseOutStyles: React.MouseEventHandler<HTMLLIElement> = React.useCallback(
      (e) => {
        if (isDisabled) return;
        e.currentTarget.style.boxShadow = isHovering ? ThemeShadow[themeMode].tertiary : "none";
      },
      [isDisabled],
    );

    return (
      <Tag
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOverStyles}
        onMouseOut={handleMouseOutStyles}
        style={{
          boxSizing: "border-box",
          listStyle: "none",
          margin: 0,
          padding: "8px",
          paddingLeft: icon ? "8px" : "16px",
          paddingRight: actionButton ? "8px" : "16px",
          borderRadius: "8px",
          cursor: isDisabled ? "not-allowed" : props?.onClick ? "pointer" : "default",
          transition: "box-shadow 0.2s ease-in-out",
          ...style,
        }}
        {...props}
      >
        <Space.Flex row style={{ alignItems: "center" }}>
          {/* start icon */}
          {icon && (
            <Icon
              icon={icon}
              width={24}
              style={{
                color: isDisabled
                  ? TextColors[themeMode].disabled
                  : isActive
                    ? themeColor
                    : TextColors[themeMode].primary,
              }}
            />
          )}

          {/* text */}
          <Space.Flex
            column
            gap={0}
            style={{
              flex: 1,
              flexGrow: 1,
              maxWidth:
                icon && !actionButton
                  ? "calc(100% - 32px)"
                  : !icon && actionButton
                    ? "calc(100% - 48px)"
                    : icon && !!actionButton
                      ? "calc(100% - 80px)"
                      : "100%",
            }}
          >
            <Typography.Text
              text={text}
              isEllipsis
              style={{
                width: "100%",
                color: isDisabled
                  ? TextColors[themeMode].disabled
                  : isActive
                    ? themeColor
                    : TextColors[themeMode].primary,
              }}
            />
            {subText && (
              <Typography.Text
                as="small"
                text={subText}
                isEllipsis
                style={{
                  width: "100%",
                  color: isDisabled
                    ? TextColors[themeMode].disabled
                    : isActive
                      ? themeColor
                      : TextColors[themeMode].quaternary,
                }}
              />
            )}
          </Space.Flex>

          {/* end action */}
          {!!actionButton?.icon && (
            <Buttons.Icon
              icon={actionButton.icon}
              variant="ghost"
              isDisabled={isDisabled}
              onClick={actionButton.onClick}
            />
          )}
        </Space.Flex>
      </Tag>
    );
  },
);

MenuItem.displayName = "Menu.Item";
export default MenuItem;
