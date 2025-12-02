"use client";

import React from "react";

import clsx from "clsx";

import { useButtonActions } from "@/components/Buttons/Button.hooks";
import { Space } from "@/components/Space";
import { Typography } from "@/components/Typographies";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useMenuItemStyles } from "./MenuItem.hooks";
import type { MenuItemProps, MenuItemRef } from "./MenuItem.types";

const MenuItem = React.memo(
  React.forwardRef<MenuItemRef, MenuItemProps>(
    (
      {
        className,
        style,
        as: propAs,
        children,
        StartIcon,
        EndIcon,
        label,
        LabelProps,
        subLabel,
        SubLabelProps,
        spacing: propSpacing,
        selected,
        disabled: propDisabled,
        onClick,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,
        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<MenuItemProps>({
        displayName: COMPONENT_DISPLAY_NAMES.MenuItem,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const __as = propAs ?? customComponentProps.as ?? "li";
      const spacing = propSpacing ?? customComponentProps.spacing ?? 8;
      const disabled = propDisabled ?? customComponentProps.disabled ?? false;

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
              {StartIcon}

              <Space.Flex column style={{ flex: 1 }}>
                {label && (
                  <Typography.Paragraph
                    text={label}
                    weight="bold"
                    {...LabelProps}
                    style={{ flex: 1, color: "inherit", userSelect: "inherit", ...LabelProps?.style }}
                  />
                )}
                {subLabel && (
                  <Typography.Paragraph
                    text={subLabel}
                    size="CAPTION"
                    {...SubLabelProps}
                    style={{ flex: 1, color: "inherit", userSelect: "inherit", ...SubLabelProps?.style }}
                  />
                )}
              </Space.Flex>

              {EndIcon}
            </>
          )}
        </Tag>
      );
    },
  ),
);

MenuItem.displayName = COMPONENT_DISPLAY_NAMES.MenuItem;
export default MenuItem;
