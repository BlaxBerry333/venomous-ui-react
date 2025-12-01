"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useElementHoverEvents, useElementMouseEvents, useThemeDesigns, useThemeMode } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { getDarker, getLighter, hexToRgba, isLightColor } from "@/tools";
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

  // 提取公共值，避免重复计算
  const themeColor = color || PaletteColors[1];
  const isDisabled = disabled || loading;

  // ========== Variant 基础样式 ==========
  const DynamicVariantStyles = React.useMemo<React.CSSProperties>(() => {
    switch (variant) {
      case BUTTON_VARIANT_MAP.OUTLINED:
        return {
          color: themeColor,
          backgroundColor: "transparent",
          borderColor: themeColor,
          borderWidth: 1.5,
          boxShadow: "none",
        };
      case BUTTON_VARIANT_MAP.TEXT:
        return {
          color: themeColor,
          backgroundColor: "transparent",
          borderColor: "transparent",
          borderWidth: 0,
          boxShadow: "none",
        };
      case BUTTON_VARIANT_MAP.CONTAINED:
      default: {
        const highlightColor = getLighter(themeColor, isDarkMode ? 0.18 : 0.12);
        const shadowColor = getDarker(themeColor, isDarkMode ? 0.28 : 0.2);
        const textColor = isLightColor(themeColor, 0.45) ? "#1a1a1a" : "#ffffff";
        return {
          color: textColor,
          background: `radial-gradient(ellipse 120% 100% at 25% 20%, ${highlightColor} 0%, ${themeColor} 45%, ${shadowColor} 100%)`,
          borderColor: "transparent",
          borderWidth: 0,
          boxShadow: ShadowStyles[1],
        };
      }
    }
  }, [variant, themeColor, ShadowStyles, isDarkMode]);

  // ========== State 状态样式（disabled/loading） ==========
  const DynamicStateStyles = React.useMemo<React.CSSProperties>(() => {
    if (!isDisabled) {
      return { cursor: "pointer", opacity: 1 };
    }

    if (loading && !disabled) {
      const base: React.CSSProperties = { cursor: "wait", opacity: 0.7, pointerEvents: "none" };
      if (variant === BUTTON_VARIANT_MAP.CONTAINED) {
        return { ...base, boxShadow: "none" };
      }
      return {
        ...base,
        color: themeColor,
        borderColor: variant === BUTTON_VARIANT_MAP.OUTLINED ? themeColor : undefined,
      };
    }

    const base: React.CSSProperties = {
      cursor: "not-allowed",
      opacity: 0.6,
      boxShadow: "none",
      pointerEvents: "none",
      color: TextColors["disabled"],
    };

    if (variant === BUTTON_VARIANT_MAP.OUTLINED) {
      return { ...base, borderColor: TextColors["disabled"] };
    }
    if (variant === BUTTON_VARIANT_MAP.CONTAINED) {
      return {
        ...base,
        background: "none",
        backgroundColor: isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)",
      };
    }
    return base;
  }, [variant, themeColor, isDisabled, disabled, loading, TextColors, isDarkMode]);

  // ========== Interaction 交互样式（hover/pressed 合并） ==========
  const DynamicInteractionStyles = React.useMemo<React.CSSProperties>(() => {
    if (isDisabled) return {};

    if (isClicked) {
      if (variant === BUTTON_VARIANT_MAP.CONTAINED) {
        const topShadow = getDarker(themeColor, isDarkMode ? 0.25 : 0.18);
        const midColor = getDarker(themeColor, isDarkMode ? 0.12 : 0.08);
        const bottomHighlight = getDarker(themeColor, isDarkMode ? 0.05 : 0.02);
        return {
          background: `radial-gradient(ellipse 120% 80% at 50% 85%, ${bottomHighlight} 0%, ${midColor} 50%, ${topShadow} 100%)`,
          transform: "scale(0.97)",
          boxShadow: `inset 0 2px 4px ${hexToRgba("#000000", isDarkMode ? 0.25 : 0.15)}`,
        };
      }
      return {
        backgroundColor: hexToRgba(themeColor, isDarkMode ? 0.2 : 0.12),
        transform: "scale(0.97)",
      };
    }

    if (isHovered) {
      if (variant === BUTTON_VARIANT_MAP.CONTAINED) {
        const highlightColor = getLighter(themeColor, isDarkMode ? 0.28 : 0.2);
        const midColor = getLighter(themeColor, isDarkMode ? 0.08 : 0.05);
        const shadowColor = getDarker(themeColor, isDarkMode ? 0.18 : 0.12);
        return {
          background: `radial-gradient(ellipse 130% 110% at 25% 15%, ${highlightColor} 0%, ${midColor} 40%, ${shadowColor} 100%)`,
          boxShadow: ShadowStyles[2],
        };
      }
      if (variant === BUTTON_VARIANT_MAP.OUTLINED) {
        return {
          backgroundColor: hexToRgba(themeColor, isDarkMode ? 0.15 : 0.08),
        };
      }
      return {
        backgroundColor: hexToRgba(themeColor, isDarkMode ? 0.12 : 0.08),
      };
    }

    return {};
  }, [variant, themeColor, isDisabled, isHovered, isClicked, ShadowStyles, isDarkMode]);

  // ========== 最终合并样式 ==========
  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default style --
      userSelect: "none",
      position: "relative",
      padding: "4px 12px",
      height: 40,
      fontWeight: 600,
      fontSize: TypographySizes.TEXT.BASE,
      borderRadius: 8,
      borderStyle: "solid",
      transition:
        "transform 0.1s ease-out, background 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, opacity 0.2s ease-in-out",
      width: fullWidth ? "100%" : "auto",
      minWidth: fullWidth ? "100%" : 56,
      ...DynamicVariantStyles,
      ...DynamicStateStyles,
      ...DynamicInteractionStyles,

      // -- custom style --
      ...customStyle,
    }),
    [TypographySizes, fullWidth, DynamicVariantStyles, DynamicStateStyles, DynamicInteractionStyles, customStyle],
  );

  return { componentStyle };
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
