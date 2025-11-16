"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useElementHoverEvents, useElementMouseEvents, useThemeDesigns, useThemeMode } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { getDarker, getLighter, hexToRgba } from "@/tools";
import { BUTTON_VARIANT_MAP, type ButtonProps } from "./Button.types";

export function useButtonStyles({
  disabled,
  loading,
  variant,
  color,
  fullWidth,
  isHovered,
  isClicked,
}: Partial<ButtonProps> & { isHovered?: boolean; isClicked?: boolean }) {
  const { isDarkMode } = useThemeMode();
  const { PaletteColors, TextColors, ShadowStyles, TypographySizes } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Button });

  const DynamicVariantStyles = React.useMemo<React.CSSProperties>(() => {
    const themeColor = color || PaletteColors[1];
    switch (variant) {
      case BUTTON_VARIANT_MAP.OUTLINED: {
        const borderColor = isDarkMode ? getLighter(themeColor, 0.15) : getDarker(themeColor, 0.15);
        return {
          color: themeColor,
          backgroundColor: "transparent",
          borderColor: borderColor,
          outlineColor: borderColor,
          boxShadow: "none",
        };
      }
      case BUTTON_VARIANT_MAP.TEXT:
        return {
          color: themeColor,
          backgroundColor: "transparent",
          borderColor: "transparent",
          outlineColor: "transparent",
          boxShadow: "none",
        };
      case BUTTON_VARIANT_MAP.CONTAINED:
      default: {
        const borderColor = isDarkMode ? getLighter(themeColor, 0.15) : getDarker(themeColor, 0.25);
        return {
          color: "#ffffff",
          backgroundColor: themeColor,
          borderColor: borderColor,
          outlineColor: borderColor,
          boxShadow: ShadowStyles[1],
        };
      }
    }
  }, [variant, color, PaletteColors, ShadowStyles, isDarkMode]);

  const DynamicStateStyles = React.useMemo<React.CSSProperties>(() => {
    return disabled || loading
      ? {
          cursor: disabled ? "not-allowed" : "wait",
          opacity: 0.65,
          color: TextColors["disabled"],
          borderColor: TextColors["disabled"],
          outlineColor: TextColors["disabled"],
          boxShadow: "none",
        }
      : {
          cursor: "pointer",
          opacity: 1,
        };
  }, [disabled, loading, TextColors]);

  const DynamicHoverStyles = React.useMemo<React.CSSProperties>(() => {
    if (disabled || loading || !isHovered || isClicked) {
      return {};
    }
    const themeColor = color || PaletteColors[1];
    switch (variant) {
      case BUTTON_VARIANT_MAP.TEXT: {
        return {
          backgroundColor: hexToRgba(themeColor, isDarkMode ? 0.12 : 0.1),
        };
      }
      case BUTTON_VARIANT_MAP.OUTLINED: {
        return {
          backgroundColor: hexToRgba(themeColor, isDarkMode ? 0.25 : 0.1),
        };
      }
      case BUTTON_VARIANT_MAP.CONTAINED:
      default: {
        return {
          backgroundColor: getLighter(themeColor, isDarkMode ? 0.25 : 0.1),
          boxShadow: ShadowStyles[2],
        };
      }
    }
  }, [variant, disabled, loading, isHovered, isClicked, color, PaletteColors, ShadowStyles, isDarkMode]);

  const DynamicPressedStyles = React.useMemo<React.CSSProperties>(() => {
    if (disabled || loading || !isClicked) {
      return {};
    }
    const themeColor = color || PaletteColors[1];
    switch (variant) {
      case BUTTON_VARIANT_MAP.TEXT: {
        return {
          backgroundColor: hexToRgba(themeColor, isDarkMode ? 0.2 : 0.12),
        };
      }
      case BUTTON_VARIANT_MAP.OUTLINED: {
        return {
          backgroundColor: hexToRgba(themeColor, isDarkMode ? 0.2 : 0.12),
          transform: "scale(0.98)",
        };
      }
      case BUTTON_VARIANT_MAP.CONTAINED:
      default: {
        return {
          backgroundColor: getDarker(themeColor, isDarkMode ? 0.2 : 0.25),
          transform: "scale(0.98)",
          boxShadow: "none",
        };
      }
    }
  }, [variant, disabled, loading, isClicked, color, PaletteColors, isDarkMode]);

  const DynamicFullWidthStyles = React.useMemo<React.CSSProperties>(() => {
    return fullWidth
      ? {
          width: "100%",
          minWidth: "100%",
        }
      : {
          width: "auto",
          minWidth: 56,
        };
  }, [fullWidth]);

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default style --
      userSelect: "none",
      position: "relative",
      padding: "2px 8px",
      height: 40,
      fontWeight: 600,
      fontSize: TypographySizes.TEXT.BASE,
      borderRadius: 8,
      borderWidth: 1,
      outlineWidth: 1,
      outlineStyle: "solid",
      transition: "all 0.25s ease-in-out",
      ...DynamicVariantStyles,
      ...DynamicStateStyles,
      ...DynamicFullWidthStyles,
      ...DynamicHoverStyles,
      ...DynamicPressedStyles,

      // -- custom style --
      ...customStyle,
    }),
    [
      TypographySizes,
      DynamicVariantStyles,
      DynamicStateStyles,
      DynamicFullWidthStyles,
      DynamicHoverStyles,
      DynamicPressedStyles,
      customStyle,
    ],
  );

  return {
    componentStyle,
    __: {
      DynamicVariantStyles,
      DynamicStateStyles,
      DynamicFullWidthStyles,
      DynamicHoverStyles,
      DynamicPressedStyles,
    },
  };
}

export function useButtonActions({
  disabled,
  loading,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
}: Partial<ButtonProps>) {
  const isDisabled = disabled || loading;

  const { isClicked, MouseUpEvent, MouseDownEvent } = useElementMouseEvents<HTMLButtonElement>({
    disabled: isDisabled,
    onMouseDown,
    onMouseUp,
  });

  const { isHovered, MouseEnterEvent, MouseLeaveEvent } = useElementHoverEvents<HTMLButtonElement>({
    disabled: isDisabled,
    onMouseEnter,
    onMouseLeave,
  });

  const combinedOnMouseLeave: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(
    (e) => {
      MouseLeaveEvent(e);
      MouseUpEvent(e);
    },
    [MouseLeaveEvent, MouseUpEvent],
  );

  const ElementEvents = React.useMemo(
    () => ({
      onMouseEnter: MouseEnterEvent,
      onMouseLeave: combinedOnMouseLeave,
      onMouseDown: MouseDownEvent,
      onMouseUp: MouseUpEvent,
    }),
    [MouseEnterEvent, combinedOnMouseLeave, MouseDownEvent, MouseUpEvent],
  );

  return {
    isHovered,
    isClicked,
    ElementEvents,
  };
}
