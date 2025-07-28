import React from "react";

import {
  BackgroundColors,
  BorderColors,
  getLighterHex,
  getOpacityHex,
  SemanticColors,
  TextColors,
  ThemeShadow,
  TypographySize,
} from "@/utils";
import { Theme } from "../Theme";
import type { ButtonProps } from "./index.types";

export function useButtonStyle({
  isLoading,
  isDisabled,
  variant,
  semanticColor,
}: Pick<ButtonProps, "isLoading" | "isDisabled" | "variant" | "semanticColor">) {
  const { themeColor } = Theme.useThemeColor();
  const { themeMode } = Theme.useThemeMode();

  const backgroundColor = React.useMemo<React.CSSProperties["backgroundColor"]>(() => {
    let color = "";
    if (isLoading || isDisabled) {
      color = BackgroundColors[themeMode].secondary;
      return color;
    }
    switch (variant) {
      case "contained":
        color = semanticColor ? SemanticColors[semanticColor] : themeColor;
        break;
      case "outlined":
        color = BackgroundColors[themeMode].secondary;
        break;
      case "ghost":
      default:
        color = BackgroundColors[themeMode].primary;
        break;
    }
    return color;
  }, [variant, themeColor, themeMode, isLoading, isDisabled, semanticColor]);

  const borderColor = React.useMemo<React.CSSProperties["borderColor"]>(() => {
    let color = "";
    if (isLoading || isDisabled) {
      color = BorderColors[themeMode].secondary;
      return color;
    }
    switch (variant) {
      case "contained":
        color = semanticColor ? getLighterHex(SemanticColors[semanticColor], 0.25) : getOpacityHex(themeColor, 0.25);
        break;
      case "outlined":
        color = semanticColor ? SemanticColors[semanticColor] : themeColor;
        break;
      case "ghost":
      default:
        color = BorderColors[themeMode].secondary;
        break;
    }
    return color;
  }, [variant, themeColor, themeMode, isLoading, isDisabled, semanticColor]);

  const textColor = React.useMemo<React.CSSProperties["color"]>(() => {
    let color = "";
    if (isLoading || isDisabled) {
      color = TextColors[themeMode].disabled;
      return color;
    }
    switch (variant) {
      case "contained":
        color = "#ffffff";
        break;
      case "outlined":
        color = semanticColor ? SemanticColors[semanticColor] : themeColor;
        break;
      case "ghost":
      default:
        color = TextColors[themeMode].primary;
        break;
    }
    return color;
  }, [variant, themeColor, themeMode, isLoading, isDisabled, semanticColor]);

  const boxShadow = React.useMemo<React.CSSProperties["boxShadow"]>(() => {
    return ThemeShadow[themeMode].sm;
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
