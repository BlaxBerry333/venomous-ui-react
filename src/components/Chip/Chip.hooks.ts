"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useElementHoverEvents, useElementMouseEvents, useThemeDesigns, useThemeMode } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { getDarker, getLighter, hexToRgba } from "@/tools";
import { CHIP_VARIANT_MAP, type ChipProps } from "./Chip.types";

export function useChipStyles({
  variant = CHIP_VARIANT_MAP.CONTAINED,
  clickable,
  color,
  isHovered,
  isClicked,
}: Partial<ChipProps> & {
  clickable?: boolean;
  isHovered?: boolean;
  isClicked?: boolean;
}) {
  const { isDarkMode } = useThemeMode();
  const { PaletteColors, TypographySizes } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Chip });

  const DynamicVariantStyles = React.useMemo<React.CSSProperties>(() => {
    const themeColor = color || PaletteColors[1];

    switch (variant) {
      case CHIP_VARIANT_MAP.CONTAINED:
        return {
          backgroundColor: themeColor,
          borderColor: "transparent",
          color: "#FFFFFF",
        };
      case CHIP_VARIANT_MAP.OUTLINED:
        return {
          backgroundColor: "transparent",
          borderColor: themeColor,
          color: themeColor,
        };
      default:
        return {};
    }
  }, [variant, color, PaletteColors]);

  const DynamicClickableStyles = React.useMemo<React.CSSProperties>(() => {
    if (!clickable) {
      return {
        cursor: "default",
      };
    }
    return {
      cursor: "pointer",
      transition: "all 0.25s ease-in-out",
      userSelect: "none",
    };
  }, [clickable]);

  const DynamicInteractionStyles = React.useMemo<React.CSSProperties>(() => {
    if (!clickable) return {};

    const themeColor = color || PaletteColors[1];

    // Active/Clicked 状态
    if (isClicked) {
      if (variant === CHIP_VARIANT_MAP.CONTAINED) {
        return {
          transform: "scale(0.95)",
          backgroundColor: isDarkMode ? getDarker(themeColor, 0.15) : getDarker(themeColor, 0.2),
        };
      }
      // OUTLINED
      return {
        transform: "scale(0.95)",
        backgroundColor: hexToRgba(themeColor, isDarkMode ? 0.2 : 0.15),
      };
    }

    // Hover 状态
    if (isHovered) {
      if (variant === CHIP_VARIANT_MAP.CONTAINED) {
        return {
          backgroundColor: isDarkMode ? getLighter(themeColor, 0.1) : getDarker(themeColor, 0.1),
        };
      }
      // OUTLINED
      return {
        backgroundColor: hexToRgba(themeColor, isDarkMode ? 0.15 : 0.1),
      };
    }

    return {};
  }, [variant, clickable, isHovered, isClicked, color, PaletteColors, isDarkMode]);

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      // -- default style --
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 30,
      padding: `0 12px`,
      borderRadius: 16,
      borderWidth: "1.5px",
      borderStyle: "solid",
      fontSize: TypographySizes.TEXT.CAPTION,
      fontWeight: "bold",
      whiteSpace: "nowrap",
      ...DynamicVariantStyles,
      ...DynamicClickableStyles,
      ...DynamicInteractionStyles,

      // -- custom style override --
      ...customStyle,
    }),
    [TypographySizes, DynamicVariantStyles, DynamicClickableStyles, DynamicInteractionStyles, customStyle],
  );

  return {
    componentStyle,
    __: {
      DynamicVariantStyles,
      DynamicClickableStyles,
      DynamicInteractionStyles,
    },
  };
}

export function useChipActions({ clickable, onClick }: Partial<ChipProps> & { clickable?: boolean }) {
  const { isHovered, MouseEnterEvent, MouseLeaveEvent } = useElementHoverEvents<HTMLDivElement>({
    disabled: !clickable,
  });

  const { isClicked, MouseDownEvent, MouseUpEvent } = useElementMouseEvents<HTMLDivElement>({
    disabled: !clickable,
  });

  const combinedOnMouseLeave = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      MouseLeaveEvent(e);
      MouseUpEvent(e);
    },
    [MouseLeaveEvent, MouseUpEvent],
  );

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (clickable && onClick) {
        onClick(e);
      }
    },
    [clickable, onClick],
  );

  const ElementEvents = React.useMemo(
    () =>
      clickable
        ? {
            onMouseEnter: MouseEnterEvent,
            onMouseLeave: combinedOnMouseLeave,
            onMouseDown: MouseDownEvent,
            onMouseUp: MouseUpEvent,
            onClick: handleClick,
          }
        : {},
    [clickable, MouseEnterEvent, combinedOnMouseLeave, MouseDownEvent, MouseUpEvent, handleClick],
  );

  return {
    isHovered,
    isClicked,
    ElementEvents,
  };
}
