"use client";

import clsx from "clsx";
import React from "react";

import { getOpacityHex, TextColors } from "@/utils";
import { Buttons } from "../Button";
import { Icon } from "../Icon";
import { Space } from "../Space";
import { Theme } from "../Theme";
import { Typography } from "../Typography";
import { MenuItemTagMap, type MenuItemProps } from "./index.types";

const MenuItem = React.memo<MenuItemProps>(
  ({
    as: Tag = MenuItemTagMap.li,
    className,
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

    const backgroundColor = React.useMemo<Exclude<React.CSSProperties["backgroundColor"], undefined>>(() => {
      if (isActive) return getOpacityHex(themeColor, 0.1);
      return "transparent";
    }, [isDisabled, isActive, themeColor, themeMode]);

    const textColor = React.useMemo<Exclude<React.CSSProperties["color"], undefined>>(() => {
      if (isDisabled) return TextColors[themeMode].disabled;
      if (isActive) return themeColor;
      return TextColors[themeMode].primary;
    }, [isDisabled, isActive, themeColor, themeMode]);

    // const { handleMouseDown, handleMouseUp, handleMouseLeave } = useElementHover<HTMLLIElement>({
    //   isDisabled,
    // });
    // const handleMouseOverStyles: React.MouseEventHandler<HTMLLIElement> = React.useCallback(
    //   (e) => {
    //     if (isDisabled) return;
    //     e.currentTarget.style.backgroundColor = isActive
    //       ? isDarkThemeMode
    //         ? getDarkerHex(themeColor, 0.4)
    //         : getLighterHex(themeColor, 0.4)
    //       : BackgroundColors[themeMode].secondary;
    //   },
    //   [isDisabled, isActive, isDarkThemeMode, themeColor, themeMode],
    // );
    // const handleMouseOutStyles: React.MouseEventHandler<HTMLLIElement> = React.useCallback(
    //   (e) => {
    //     if (isDisabled) return;
    //     e.currentTarget.style.backgroundColor = backgroundColor;
    //   },
    //   [isDisabled, backgroundColor],
    // );

    return (
      <Tag
        // onMouseDown={handleMouseDown}
        // onMouseUp={handleMouseUp}
        // onMouseLeave={handleMouseLeave}
        // onMouseOver={handleMouseOverStyles}
        // onMouseOut={handleMouseOutStyles}
        className={clsx("Venomous-UI-React--Menu.Item", className)}
        style={{
          boxSizing: "border-box",
          listStyle: "none",
          WebkitTapHighlightColor: "transparent",
          margin: 0,
          padding: "8px",
          paddingRight: actionButton ? "8px" : "16px",
          borderRadius: "8px",
          cursor: isDisabled ? "not-allowed" : props?.onClick ? "pointer" : "default",
          backgroundColor,
          // transition: "box-shadow 0.2s ease-in-out",
          ...style,
        }}
        {...props}
      >
        <Space.Flex row style={{ alignItems: "center" }}>
          {/* start icon */}
          {icon && <Icon icon={icon} width={24} style={{ color: textColor }} />}

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
              as="strong"
              text={text}
              isEllipsis
              style={{
                width: "100%",
                color: textColor,
                lineHeight: "1rem",
              }}
            />
            {subText && (
              <Typography.Text
                as="small"
                text={subText}
                isEllipsis
                style={{
                  width: "100%",
                  color: textColor,
                }}
              />
            )}
          </Space.Flex>

          {/* end action */}
          {!!actionButton?.icon && (
            <Buttons.Icon
              icon={actionButton.icon}
              variant="transparent"
              isDisabled={isDisabled}
              onClick={actionButton.onClick}
              style={{
                ...actionButton.style,
              }}
            />
          )}
        </Space.Flex>
      </Tag>
    );
  },
);

MenuItem.displayName = "Menu.Item";
export default MenuItem;
