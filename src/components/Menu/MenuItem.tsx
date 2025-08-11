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
    actionButtonProps = undefined,
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
          minHeight: "40px",
          margin: 0,
          padding: "8px",
          paddingRight: actionButtonProps?.icon ? "0px" : "8px",
          borderRadius: "8px",
          cursor: isDisabled ? "not-allowed" : props?.onClick ? "pointer" : "default",
          backgroundColor,
          // transition: "box-shadow 0.2s ease-in-out",
          ...style,
        }}
        {...props}
      >
        <Space.Flex row style={{ minHeight: "40px", height: "100%", alignItems: "center", color: textColor }}>
          {/* start icon */}
          {icon && <Icon icon={icon} width={24} style={{ color: "inherit" }} />}

          {/* text */}
          <Space.Flex
            column
            gap={0}
            style={{
              flex: 1,
              flexGrow: 1,
              maxWidth:
                icon && !actionButtonProps?.icon
                  ? "calc(100% - 32px)"
                  : !icon && actionButtonProps?.icon
                    ? "calc(100% - 48px)"
                    : icon && !!actionButtonProps?.icon
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
                lineHeight: "1rem",
                color: "inherit",
              }}
            />
            {subText && (
              <Typography.Text
                as="small"
                text={subText}
                isEllipsis
                style={{
                  width: "100%",
                  color: "inherit",
                }}
              />
            )}
          </Space.Flex>

          {/* end action */}
          {!!actionButtonProps?.icon && (
            <Buttons.Icon
              variant="transparent"
              isDisabled={isDisabled}
              // icon={actionButtonProps.icon}
              // onClick={actionButtonProps.onClick}
              style={{
                height: "auto",
                width: "auto",
                color: "inherit",
                ...actionButtonProps.style,
              }}
              iconStyle={{
                color: textColor,
                ...actionButtonProps.iconStyle,
              }}
              {...actionButtonProps}
            />
          )}
        </Space.Flex>
      </Tag>
    );
  },
);

MenuItem.displayName = "Menu.Item";
export default MenuItem;
