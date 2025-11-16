"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useElementHoverEvents, useElementMouseEvents, useThemeDesigns, useThemeMode } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { hexToRgba } from "@/tools";
import type { TabsTabProps } from "./TabsTab.types";

export function useTabsTabStyles({
  color,
  selected = false,
  disabled = false,
  column = false,
  isHovered,
  isClicked,
}: Pick<TabsTabProps, "color" | "selected" | "disabled" | "column"> & {
  isHovered: boolean;
  isClicked: boolean;
}) {
  const { isDarkMode } = useThemeMode();
  const { PaletteColors, TextColors } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.TabsTab });

  const DynamicBackgroundColorStyles = React.useMemo<string>(() => {
    const themeColor = color || PaletteColors[1];
    return hexToRgba(themeColor, isDarkMode ? 0.12 : 0.1);
  }, [color, PaletteColors, isDarkMode]);

  const DynamicVariantStyles = React.useMemo<React.CSSProperties>(() => {
    const themeColor = color || PaletteColors[1];

    if (selected) {
      return {
        color: themeColor,
        ...(column
          ? { borderRight: `2px solid ${themeColor}`, borderBottom: "none" }
          : { borderBottom: `2px solid ${themeColor}`, borderRight: "none" }),
        backgroundColor: DynamicBackgroundColorStyles,
      };
    }
    return {
      color: TextColors[2],
      ...(column
        ? { borderRight: "2px solid transparent", borderBottom: "none" }
        : { borderBottom: "2px solid transparent", borderRight: "none" }),
    };
  }, [selected, color, column, PaletteColors, TextColors, DynamicBackgroundColorStyles]);

  const DynamicStateStyles = React.useMemo<React.CSSProperties>(() => {
    if (disabled) {
      return {
        cursor: "not-allowed",
        opacity: 0.65,
        color: TextColors["disabled"],
      };
    }
    return {
      cursor: "pointer",
      opacity: 1,
    };
  }, [disabled, TextColors]);

  const DynamicInteractionStyles = React.useMemo<React.CSSProperties>(() => {
    if (disabled || selected) return {};

    // Clicked 状态
    if (isClicked) {
      return {
        backgroundColor: DynamicBackgroundColorStyles,
        transform: "scale(0.98)",
      };
    }

    // Hover 状态
    if (isHovered) {
      return {
        backgroundColor: DynamicBackgroundColorStyles,
        color: TextColors[1],
      };
    }

    return {};
  }, [
    disabled,
    selected,
    isHovered,
    isClicked,
    color,
    PaletteColors,
    TextColors,
    isDarkMode,
    DynamicBackgroundColorStyles,
  ]);

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      userSelect: "none",

      // -- default styles --
      height: column ? "auto" : "100%",
      width: column ? "100%" : "auto",
      padding: "8px 16px",
      fontWeight: "bold",
      transition: "background-color 0.25s ease-in-out, transform 0.25s ease-in-out, border-color 0.25s ease-in-out",
      overflow: "hidden",
      borderTopLeftRadius: 4,
      borderTopRightRadius: column ? 0 : 4,
      borderBottomLeftRadius: column ? 4 : 0,
      borderBottomRightRadius: 0,
      ...DynamicVariantStyles,
      ...DynamicStateStyles,
      ...DynamicInteractionStyles,

      // -- custom styles --
      ...customStyle,
    }),
    [DynamicVariantStyles, DynamicStateStyles, DynamicInteractionStyles, customStyle, column],
  );

  return {
    componentStyle,
    __: {
      DynamicVariantStyles,
      DynamicStateStyles,
      DynamicInteractionStyles,
    },
  };
}

export function useTabsTabActions({
  value,
  selected,
  disabled,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
}: Pick<
  TabsTabProps,
  "value" | "selected" | "disabled" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp"
>) {
  const isInteractionDisabled = React.useMemo(() => disabled || selected, [disabled, selected]);

  const { isHovered, MouseEnterEvent, MouseLeaveEvent } = useElementHoverEvents<HTMLDivElement>({
    disabled: isInteractionDisabled,
    onMouseEnter,
    onMouseLeave,
  });

  const { isClicked, MouseDownEvent, MouseUpEvent } = useElementMouseEvents<HTMLDivElement>({
    disabled: isInteractionDisabled,
    onMouseDown,
    onMouseUp,
  });

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled && onClick) {
        onClick(value, event);
      }
    },
    [disabled, onClick, value],
  );

  const combinedMouseLeave = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      MouseLeaveEvent(e);
      MouseUpEvent(e);
    },
    [MouseLeaveEvent, MouseUpEvent],
  );

  const ElementEvents = React.useMemo(
    () => ({
      onMouseEnter: MouseEnterEvent,
      onMouseLeave: combinedMouseLeave,
      onMouseDown: MouseDownEvent,
      onMouseUp: MouseUpEvent,
    }),
    [MouseEnterEvent, combinedMouseLeave, MouseDownEvent, MouseUpEvent],
  );

  return React.useMemo(
    () => ({
      isHovered,
      isClicked,
      handleClick,
      ElementEvents,
    }),
    [isHovered, isClicked, handleClick, ElementEvents],
  );
}
