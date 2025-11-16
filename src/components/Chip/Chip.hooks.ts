"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useElementHoverEvents, useElementMouseEvents, useThemeDesigns, useThemeMode } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { getDarker, getLighter } from "@/tools";
import type { ChipProps } from "./Chip.types";

export function useChipStyles({
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

  const DynamicColorStyles = React.useMemo<React.CSSProperties>(() => {
    const bgColor = color || PaletteColors[1];
    const borderColor = isDarkMode ? getLighter(bgColor, 0.15) : getDarker(bgColor, 0.2);
    return {
      backgroundColor: bgColor,
      borderColor: borderColor,
      color: "#FFFFFF",
    };
  }, [color, PaletteColors, isDarkMode]);

  const DynamicClickableStyles = React.useMemo<React.CSSProperties>(() => {
    if (!clickable) {
      return { cursor: "default" };
    }
    return {
      cursor: "pointer",
      transition: "all 0.25s ease-in-out",
    };
  }, [clickable]);

  const DynamicInteractionStyles = React.useMemo<React.CSSProperties>(() => {
    if (!clickable) return {};
    const bgColor = color || PaletteColors[1];
    if (isClicked) {
      return {
        transform: "scale(0.95)",
        backgroundColor: isDarkMode ? getDarker(bgColor, 0.15) : getDarker(bgColor, 0.2),
      };
    }
    if (isHovered) {
      return {
        backgroundColor: isDarkMode ? getLighter(bgColor, 0.1) : getDarker(bgColor, 0.1),
      };
    }
    return {};
  }, [clickable, isHovered, isClicked, color, PaletteColors, isDarkMode]);

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      userSelect: "none",

      // -- default style --
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 28,
      padding: `0 12px`,
      borderRadius: 14,
      borderWidth: "1.5px",
      borderStyle: "solid",
      fontSize: TypographySizes.TEXT.CAPTION,
      lineHeight: "28px",
      fontWeight: 500,
      whiteSpace: "nowrap",
      ...DynamicColorStyles,
      ...DynamicClickableStyles,
      ...DynamicInteractionStyles,

      // -- custom style override --
      ...customStyle,
    }),
    [TypographySizes, DynamicColorStyles, DynamicClickableStyles, DynamicInteractionStyles, customStyle],
  );

  return {
    componentStyle,
    __: {
      DynamicColorStyles,
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
