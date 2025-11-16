"use client";

import React from "react";

import clsx from "clsx";

import { Typography } from "@/components/Typographies";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useButtonActions } from "../Buttons/Button.hooks";
import { useMenuItemStyles } from "./MenuItem.hooks";
import type { MenuItemProps, MenuItemRef } from "./MenuItem.types";

const MenuItem = React.memo(
  React.forwardRef<MenuItemRef, MenuItemProps>(
    (
      {
        className,
        style,
        as: __as = "li",
        children,
        Icon,
        label,
        labelEllipsis = 0,
        LabelStyle,
        spacing = 8,
        selected,
        disabled = false,
        onClick,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,
        ...props
      },
      ref,
    ) => {
      const clickable: boolean = !!onClick && !disabled;

      const { isHovered, isClicked, ElementEvents } = useButtonActions({
        disabled,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,
      });

      const { componentStyle } = useMenuItemStyles({
        spacing,
        selected,
        disabled,
        clickable,
        isHovered,
        isClicked,
      });

      const Tag = __as as React.ElementType;

      const handleClick: React.MouseEventHandler<HTMLElement> = React.useCallback(
        (e) => {
          if (!clickable) return;
          onClick?.(e);
        },
        [clickable, onClick],
      );

      return (
        <Tag
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.MenuItem, className)}
          style={{ ...componentStyle, ...style }}
          onClick={handleClick}
          {...props}
          {...ElementEvents}
        >
          {children || (
            <>
              {Icon}
              {label && (
                <Typography.Paragraph
                  text={label}
                  ellipsis={labelEllipsis}
                  weight="bold"
                  style={{ flex: 1, color: "inherit", userSelect: "inherit", ...LabelStyle }}
                />
              )}
            </>
          )}
        </Tag>
      );
    },
  ),
);

MenuItem.displayName = COMPONENT_DISPLAY_NAMES.MenuItem;
export default MenuItem;
