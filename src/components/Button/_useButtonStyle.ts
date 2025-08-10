import React from "react";

import {
  BackgroundColors,
  BorderColors,
  getLighterHex,
  getOpacityHex,
  SemanticColors,
  Shadows,
  TextColors,
  TypographySize,
} from "@/utils";
import { Theme } from "../Theme";
import { ButtonVariantMap, type ButtonProps } from "./index.types";

export function useButtonStyle({
  isLoading,
  isDisabled,
  variant,
  semanticColor,
}: Pick<ButtonProps, "isLoading" | "isDisabled" | "variant" | "semanticColor">) {
  const { themeColor } = Theme.useThemeColor();
  const { themeMode } = Theme.useThemeMode();

  const backgroundColor = React.useMemo<React.CSSProperties["backgroundColor"]>(() => {
    if (isLoading || isDisabled) {
      if (variant === ButtonVariantMap.ghost || variant === ButtonVariantMap.transparent) {
        return "transparent";
      }
      return BackgroundColors[themeMode].secondary;
    }
    switch (variant) {
      case ButtonVariantMap.contained:
        return semanticColor ? SemanticColors[semanticColor] : themeColor;

      case ButtonVariantMap.outlined:
        return BackgroundColors[themeMode].secondary;

      case ButtonVariantMap.ghost:
      case ButtonVariantMap.transparent:
      default:
        return "transparent";
    }
  }, [variant, themeColor, themeMode, isLoading, isDisabled, semanticColor]);

  const borderColor = React.useMemo<React.CSSProperties["borderColor"]>(() => {
    if (isLoading || isDisabled) {
      if (variant === ButtonVariantMap.transparent) {
        return "transparent";
      }
      return BorderColors[themeMode].tertiary;
    }
    switch (variant) {
      case ButtonVariantMap.contained:
        return semanticColor ? getLighterHex(SemanticColors[semanticColor], 0.25) : getOpacityHex(themeColor, 0.5);
      case ButtonVariantMap.outlined:
        return semanticColor ? SemanticColors[semanticColor] : themeColor;
      case ButtonVariantMap.ghost:
        return BorderColors[themeMode].secondary;
      case ButtonVariantMap.transparent:
      default:
        return "transparent";
    }
  }, [variant, themeColor, themeMode, isLoading, isDisabled, semanticColor]);

  const textColor = React.useMemo<React.CSSProperties["color"]>(() => {
    if (isLoading || isDisabled) {
      return TextColors[themeMode].disabled;
    }
    switch (variant) {
      case ButtonVariantMap.contained:
        return "#ffffff";
      case ButtonVariantMap.outlined:
        return semanticColor ? SemanticColors[semanticColor] : themeColor;
      case ButtonVariantMap.ghost:
      default:
        return TextColors[themeMode].primary;
    }
  }, [variant, themeColor, themeMode, isLoading, isDisabled, semanticColor]);

  const boxShadow = React.useMemo<React.CSSProperties["boxShadow"]>(() => {
    switch (variant) {
      case ButtonVariantMap.ghost:
      case ButtonVariantMap.transparent:
        return "none";
      case ButtonVariantMap.contained:
      case ButtonVariantMap.outlined:
      default:
        return Shadows[themeMode].secondary;
    }
  }, [variant, themeColor, themeMode]);

  const buttonStyles = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      width: "auto",
      minWidth: "40px",
      height: "40px",
      padding: "0px 16px",
      textTransform: "capitalize",
      fontSize: TypographySize.text,
      fontWeight: "bold",
      cursor: isLoading ? "wait" : isDisabled ? "not-allowed" : "pointer",
      borderRadius: "8px",
      borderWidth: 2,
      borderColor,
      boxShadow,
      backgroundColor,
      color: textColor,
    }),
    [isLoading, isDisabled, borderColor, backgroundColor, textColor, boxShadow],
  );

  return {
    buttonStyles,
  };
}
