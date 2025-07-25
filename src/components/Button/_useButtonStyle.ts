import React from "react";

import {
  BackgroundColors,
  BorderColors,
  ButtonColors,
  getColors,
  ShadowColors,
  TextColors,
  TypographySize,
} from "@/utils";
import { Theme } from "../Theme";
import type { ButtonProps } from "./index.types";

export function useButtonStyle({
  isLoading,
  isDisabled,
  color = "auto",
  variant,
}: Pick<ButtonProps, "isLoading" | "isDisabled" | "color" | "variant">) {
  const { isDarkThemeMode } = Theme.useThemeMode();
  const { themeColor } = Theme.useThemeColor();

  const backgroundColor = React.useMemo<React.CSSProperties["backgroundColor"]>(() => {
    if (variant === "contained") return color !== "auto" ? ButtonColors[color] : themeColor;
    if (variant === "ghost") return "transparent";
    return BackgroundColors[isDarkThemeMode ? "darkMode" : "lightMode"];
  }, [variant, color, themeColor, isDarkThemeMode]);

  const borderColor = React.useMemo<React.CSSProperties["borderColor"]>(() => {
    if (variant === "outline") return color !== "auto" ? ButtonColors[color] : themeColor;
    return getColors(BorderColors[isDarkThemeMode ? "darkMode" : "lightMode"]).opacity;
  }, [variant, color, themeColor, isDarkThemeMode]);

  const textColor = React.useMemo<React.CSSProperties["color"]>(() => {
    if (variant === "contained") return TextColors.white;
    if (variant === "outline") return color !== "auto" ? ButtonColors[color] : themeColor;
    if (variant === "ghost") return TextColors[isDarkThemeMode ? "darkMode" : "lightMode"];
  }, [variant, color, themeColor, isDarkThemeMode]);

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
      borderRadius: "8px",
      cursor: isLoading ? "wait" : isDisabled ? "not-allowed" : "pointer",
      boxShadow: ShadowColors[isDarkThemeMode ? "darkMode" : "lightMode"],
      borderColor: isLoading || isDisabled ? getColors(borderColor!).opacity : borderColor,
      backgroundColor: isLoading || isDisabled ? getColors(backgroundColor!).opacity : backgroundColor,
      color: isLoading || isDisabled ? getColors(textColor!).opacity : textColor,
    }),
    [isLoading, isDisabled, borderColor, backgroundColor, textColor, isDarkThemeMode],
  );

  return {
    buttonStyles,
  };
}
