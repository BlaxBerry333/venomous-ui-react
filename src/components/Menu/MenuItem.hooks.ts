"use client";

import React from "react";

import { useButtonStyles } from "@/components/Buttons/Button.hooks";
import { BUTTON_VARIANT_MAP } from "@/components/Buttons/Button.types";
import { useSpaceFlexStyles } from "@/components/Space";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns, useThemeMode } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { hexToRgba } from "@/tools";
import type { MenuItemProps } from "./MenuItem.types";

export function useMenuItemStyles({
  spacing = 8,
  selected,
  disabled,
  clickable,
  isHovered,
  isClicked,
}: Partial<MenuItemProps> & {
  clickable?: boolean;
  isHovered?: boolean;
  isClicked?: boolean;
}) {
  const { isDarkMode } = useThemeMode();
  const { PaletteColors } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.MenuItem });

  const __SpaceFlexStyles = useSpaceFlexStyles({
    column: false,
    spacing,
  });
  const __ButtonStyles = useButtonStyles({
    variant: BUTTON_VARIANT_MAP.OUTLINED,
    disabled,
    isHovered,
    isClicked,
  });

  const DynamicSelectedStyles = React.useMemo<React.CSSProperties>(() => {
    if (!selected) return {};
    const baseBackgroundColor = __ButtonStyles?.componentStyle?.backgroundColor;

    if (baseBackgroundColor && typeof baseBackgroundColor === "string") {
      const rgbaMatch = baseBackgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (rgbaMatch) {
        const [, r, g, b] = rgbaMatch;
        return {
          color: __ButtonStyles?.componentStyle?.color,
          backgroundColor: `rgba(${r}, ${g}, ${b}, 0.25)`, // 加深透明度到 25%
        };
      }
    }

    const themeColor = PaletteColors[1];
    return {
      color: __ButtonStyles?.componentStyle?.color,
      backgroundColor: hexToRgba(themeColor, isDarkMode ? 0.25 : 0.2),
    };
  }, [selected, isDarkMode, PaletteColors, __ButtonStyles?.componentStyle]);

  const DynamicClickableStyles = React.useMemo<React.CSSProperties>(() => {
    if (!clickable) {
      return {
        userSelect: disabled ? "none" : "text",
        cursor: disabled ? "not-allowed" : "default",
        transform: "none",
        backgroundColor: "transparent",
      };
    }

    const baseStyles: React.CSSProperties = {
      userSelect: __ButtonStyles?.componentStyle?.userSelect,
      cursor: __ButtonStyles?.componentStyle?.cursor,
      transition: __ButtonStyles?.componentStyle?.transition,
    };

    // hover/click 时添加背景色和 transform（覆盖 selected 状态）
    if (isHovered || isClicked) {
      return {
        ...baseStyles,
        backgroundColor: __ButtonStyles?.componentStyle?.backgroundColor,
        transform: __ButtonStyles?.componentStyle?.transform,
      };
    }

    return baseStyles;
  }, [clickable, disabled, isHovered, isClicked, __ButtonStyles?.componentStyle]);

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      // -- default style --
      ...__SpaceFlexStyles.componentStyle,
      ...DynamicSelectedStyles,
      ...DynamicClickableStyles,
      padding: "8px 12px",
      borderRadius: 8,

      // -- custom style --
      ...customStyle,
    }),
    [__SpaceFlexStyles.componentStyle, DynamicSelectedStyles, DynamicClickableStyles, customStyle],
  );

  return {
    componentStyle,
    __: {
      DynamicSelectedStyles,
      DynamicClickableStyles,
    },
  };
}
